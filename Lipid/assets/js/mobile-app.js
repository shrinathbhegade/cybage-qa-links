/*global debugLog , $, Connection, cordova*/

var isDeviceOnline;

var mobileApp = {

    // App Constructor
    initialize: function () {
        mobileApp.bindEvents();
    },

    // bind events that are required on startup
    bindEvents: function () {
        document.addEventListener('deviceready', mobileApp.onDeviceReady, false);
    },

    onDeviceReady: function () {
        //https://cordova.apache.org/docs/en/latest/cordova/events/events.html
        document.addEventListener("resume", mobileApp.onResume, false);
        isDeviceOnline = mobileApp.isOnline();
        mobileApp.notify();
    },

    // checking if device is online
    isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
    },

    onResume: function () {

        //checking device network status
        isDeviceOnline = mobileApp.isOnline();

        mobileApp.notify();
    },

    notify: function () {

        /*** getAppVersion gives VersionNumber, AppName, PackageName, VersionCode  ****/
        cordova.getAppVersion.getVersionNumber().then(function (version) {

            /*** device gives model, platform, uuid, version, manufacturer, isVirtual, serial ***/
            if (device.platform === "Android") {
                notification.osType = notification.osTypes.Android;
                notification.appStoreURL = 'market://details?id=org.acc.StatinIntolerance';

            } else if (device.platform === "iOS") {
                notification.osType = notification.osTypes.iOS;
                notification.appStoreURL = 'itms-apps://itunes.apple.com/us/app/statin-intolerance/id985805274?mt=8';
            }

            notification.appVersion = version;

            if (isDeviceOnline) {
                notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
            } else {
                notification.CheckStoredNotification();
            }

            notification.callWebApi('get', notification.nonCriticalNotificationInputURL(), null, notification.notificationType.nonCritical);
        });
    }
};

mobileApp.initialize();
