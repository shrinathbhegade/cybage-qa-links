/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var isDeviceOnline;

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {

        //checking device network status
        isDeviceOnline = app.isOnline();

        // The event fires when an application goes online, and the device is connected to the Internet.
        document.addEventListener("online", app.ifDeviceOnline, false);

        // The event fires when an application goes off-line, and the device is not connected to the Internet.
        document.addEventListener("offline", app.ifDeviceOffline, false);

        //https://cordova.apache.org/docs/en/latest/cordova/events/events.html

        document.addEventListener("resume", app.onResume, false);

        app.notify();

        //disable email button when device is offline
        if (!isDeviceOnline) {
            $('.email_button').addClass('disabled');
        }

    },

    ifDeviceOnline: function () {
        // isDeviceOnline to true
        isDeviceOnline = true;
        $('.email_button').removeClass('disabled');
    },

    ifDeviceOffline: function () {
        // isDeviceOnline to false
        isDeviceOnline = false;
        $('.email_button').addClass('disabled');
    },

    // checking if device is online
    isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
    },

    onResume: function () {

        //checking device network status
        isDeviceOnline = app.isOnline();
        app.notify();

        //disable email button when device is offline
        if (!isDeviceOnline) {
            $('.email_button').addClass('disabled');
        }
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

function AddEvent(d) {
    d.addEventListener("paste", action.bind(d));
    d.addEventListener("keypress", action.bind(d));

    function action(event) {
        if (event.target.type == "number") {
            return preventAlphabets(event);
        }
    }
    function preventAlphabets(e) {
        if (e.type == "paste") {
            e.clipboardData = e.clipboardData || window.clipboardData;
            if (e.clipboardData.getData != undefined && isNaN(e.clipboardData.getData('text'))) {
                e.preventDefault();
                return false;
            }
            else {
                return true;
            }
        }
        if (e.type == "keypress") {
            var k = e.which;
            if (e.shiftKey) {
                e.preventDefault();
                return false;
            }
            else { //0=>48, 9=>57, .=>46, ,=>44, Backspace=>8, Enter=>13, Tab=>0
                if ((k >= 48 && k <= 57) || k == 46 || k == 44 || k == 8 || k == 13 || k == 0) {
                    return true;
                }
                else {
                    e.preventDefault();
                    return false;
                }
            }
            return true;
        }
    }
}
AddEvent(document);
app.initialize();
