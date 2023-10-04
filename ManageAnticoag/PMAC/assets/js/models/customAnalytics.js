document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
           var networkState = navigator.connection.type;
           var isDeviceOnline = networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;

    /** getAppVersion gives VersionNumber, AppName, PackageName, VersionCode  ***/
               cordova.getAppVersion.getVersionNumber().then(function (version) { /** device gives model, platform, uuid, version, manufacturer, isVirtual, serial **/
                   if (device.platform === "Android") {
                       notification.osType = notification.osTypes.Android;
                   }
                   else if (device.platform === "iOS") {
                       notification.osType = notification.osTypes.iOS;
                   }
                   notification.appVersion = version;
                   if (isDeviceOnline) {
                       notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
                   }
                   else {
                       notification.CheckStoredNotification();
                   }
                   notification.callWebApi('get', notification.nonCriticalNotificationInputURL(), null, notification.notificationType.nonCritical);
               });
} 




