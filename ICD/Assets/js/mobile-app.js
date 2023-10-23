/*global debugLog , device, postUserActivity, $, Connection, cordova*/
var UUID, isDeviceOnline;
var mobileApp = {

    // App Constructor
    initialize: function () {
        this.db;
        this.dbname = 'icd.db';
        this.dblocation = 'default';
        mobileApp.bindEvents();
    },

    // bind events that are required on startup
    bindEvents: function () {
        document.addEventListener('deviceready', mobileApp.onDeviceReady, false);
    },

    onDeviceReady: function () {
        // removing splashscreen
        navigator.splashscreen.hide();

        // setting uuid
        mobileApp.fetchUUID();

        //checking device network status
        isDeviceOnline = mobileApp.isOnline();

        // sqlite instance declaration
        mobileApp.db = window.sqlitePlugin.openDatabase({
            name: mobileApp.dbname
            , location: mobileApp.dblocation
        });
        // database transaction for creating table
        mobileApp.db.transaction(function (transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS pathactivity (userpathactivity string)', [], function () {
                debugLog("database created succesfully");
            }
                , function (error) {
                    debugLog("error while creating table" + error.message);
                });
        });

        //checking first time if database is populated then post data to server
        if (isDeviceOnline) {
            mobileApp.readFromLocalDatabase();
        }

        //disable email button when device is offline
        if (!isDeviceOnline) {
            $('#Email').addClass('disabled');
        }

        // The event fires when an application goes online, and the device is connected to the Internet.
        document.addEventListener("online", mobileApp.ifDeviceOnline, false);
        // The event fires when an application goes off-line, and the device is not connected to the Internet.
        document.addEventListener("offline", mobileApp.ifDeviceOffline, false);
    }
    , ifDeviceOnline: function () {
        $('#Email').removeClass('disabled');

        // isDeviceOnline to true
        isDeviceOnline = true;
        debugLog("online");
        mobileApp.readFromLocalDatabase();

    }
    , ifDeviceOffline: function () {
        debugLog("offline");
        // isDeviceOnline to false
        isDeviceOnline = false;
        $('#Email').addClass('disabled');
    },

    // sqlite wrapper to read data
    readFromLocalDatabase: function () {
        var userPathactivities = [];
        // database transaction for reading data
        mobileApp.db.transaction(function (transaction) {

            transaction.executeSql('SELECT * FROM pathactivity', [], function (tx, results) {
                for (var i = 0; i < results.rows.length; i++) {
                    userPathactivities.push(JSON.parse(results.rows.item(i).userpathactivity));
                }
                console.table(userPathactivities);
                //if array length is greater than 0, calling sync data
                if (userPathactivities.length > 0) {
                    postUserActivity(userPathactivities, true);
                }
            }, function (error) {
                debugLog(error);
            });
        });
    },

    // sqlite wrapper to write data
    saveToLocalDatabase: function (pathActivity) {
        // database transaction for inserting data
        mobileApp.db.transaction(function (transaction) {
            var executeQuery = "INSERT INTO pathactivity (userpathactivity) VALUES (?)";
            transaction.executeSql(executeQuery, [pathActivity], function () {
                debugLog("inserted");
            }
                , function () {
                    debugLog("error while writing");
                });
        });
    },

    // sqlite wrapper to delete data
    deleteFromLocalDatabase: function () {
        // database transaction for deleting records
        mobileApp.db.transaction(function (transaction) {
            transaction.executeSql('DELETE FROM pathactivity', [], function () {
                debugLog("delete operation succesfull");
            }, function (error) {
                debugLog("error while deleting" + error);
            });
        });
    },

    // retrieving UUID from keychain for iOS devices
    fetchUUID: function () {
        // setting uuid to global variable
        if (device.platform === "iOS") {

            var keyChain = new Keychain();
            var servicename = 'uuidtesting';
            var key = 'uuid';

            // prepare the callback functions
            var onSuccess = function (value) {
                UUID = value;
            };

            var onSetError = function (result) {
                debugLog("error in keychain" + result);
            };

            var onError = function () {
                // store your password in the Keychain
                keyChain.setForKey(onSetSuccess, onSetError, key, servicename, device.uuid);
            };

            var onSetSuccess = function () {
                // get your password from the Keychain
                keyChain.getForKey(onSuccess, onError, key, servicename);
            };

            // get your password from the Keychain
            keyChain.getForKey(onSuccess, onError, key, servicename);
        } else {
            UUID = device.uuid;
        }
    },

    // checking if device is online
    isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
    },

    // posting email for mobile devices
    postEmailResultCompletedForMobile: function (emailSubject, emailBody) {
        debugLog("Email plugin called");
        emailBody = emailBody.replace(new RegExp('%26', 'g'), '&');
        cordova.plugins.email.open({
            to: ''
            , subject: emailSubject
            , body: decodeURI(emailBody.replace(new RegExp('%0A', 'g'), '<br>'))
            , isHtml: true
        });
    }
};
mobileApp.initialize();
