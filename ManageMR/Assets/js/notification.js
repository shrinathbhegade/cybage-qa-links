/*
 * Get the notifications
 */

var _notification = function () {
    var self = this;
    self.showCritical = true;
    self.webApiUrl = 'https://tools.stage.acc.org/ACCUtility.Web/';
    self.appId = 'org.acc.mrmanager';
    self.userGuid = 'a7b3e523-3f8d-4b33-a1c4-ec9e9aa3a5bb';
    self.appVersion = '3.0';
    self.osType = '';
    self.osTypes = {
        iOS: '1',
        Android: '2',
        Web: '3',
        All: '4'
    };
    self.appStoreURL = '';
    self.notificationType = {
        critical: '1',
        nonCritical: '2'
    };
    self.criticalNotif = false;
    //To format the date
    self.FormatDate = function (d) {
        return (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " +
       d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }
    //Dont use this : To sort the notifications using effective date in descending  order
    self.SortData = function (a, b) {
        var c = self.FormatDate(new Date(a.EffectiveDate));
        var d = self.FormatDate(new Date(b.EffectiveDate));
        return (new Date(d).getTime() == new Date(c).getTime() ? 0 : new Date(d).getTime() < new Date(c).getTime() ? -1 : 1);
    }

    self.callWebApi = function (type, url, data, notificationType) {
        try {
            $.ajax({
                cache: false
                , url: self.webApiUrl + url
                , type: type
                , dataType: 'json'
                , data: data
                , timeout: 2000
                , success: function (data) {
                    if (notificationType === self.notificationType.critical && data && self.showCritical) {
                        data = $.grep(data, function (item) {
                            return ((item.AppVersionNumber >= self.appVersion || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
                        });
                        if (data.length > 0 && appmodel) {
                            appmodel.criticalNotification(data);
                            self.criticalNotif = true;
                            checkNotification();

                        }
                        localStorage.setItem('criticalNotification', JSON.stringify(data));
                    } else if (notificationType === self.notificationType.nonCritical && data) {
                        data = $.grep(data, function (item) {
                            return ((item.AppVersionNumber >= self.appVersion || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
                        });

                        // sort received data
                        //data = data.sort(self.SortData);
                        data.sort(function (a, b) {
                            var date1 = new Date(a.EffectiveDate);
                            var date2 = new Date(b.EffectiveDate);
                            if (date1 > date2) {
                                return -1;
                            }
                            else if (date1 < date2) {
                                return 1;
                            }
                            else {
                                if (a.AppNotification > b.AppNotification) {
                                    return -1;
                                }
                                else return 1;
                            }
                        });

                        if (data.length > 0 && appmodel) {
                            appmodel.notificationData(data);
                        }
                        localStorage.setItem('nonCriticalNotification', JSON.stringify(data));
                    }
                }
                , error: function (type) {
                    console.log("ERROR!!" + type.responseText);
                    self.CheckStoredNotification();
                }
            });
        } catch (e) {
            self.CheckStoredNotification();
            console.log("ERROR!!" + e);
        }
    };
    //This function retrives the notification from device/browser local storage when mobile app is offline
    self.CheckStoredNotification = function () {
        if (localStorage.getItem('criticalNotification')) {
            var data = JSON.parse(localStorage.getItem('criticalNotification'));
            data = $.grep(data, function (item) {
                return ((item.AppVersionNumber >= self.appVersion || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
            });
            if (data.length > 0 && appmodel) {
                appmodel.criticalNotification(data);

                self.criticalNotif = true;
                checkNotification();

            }
        }
        if (localStorage.getItem('nonCriticalNotification')) {

            var data = JSON.parse(localStorage.getItem('nonCriticalNotification'));
            data = $.grep(data, function (item) {
                return ((item.AppVersionNumber >= self.appVersion || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
            });

            // sort received data
            data.sort(function (a, b) {
                var date1 = new Date(a.EffectiveDate);
                var date2 = new Date(b.EffectiveDate);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
                    if (a.AppNotification > b.AppNotification) {
                        return -1;
                    }
                    else return 1;
                }
            });

            if (data.length > 0 && appmodel) {
                appmodel.notificationData(data);
            }
        }
    };

    //This function returns the web api url to retrive critical notification
    self.criticalNotificationInputURL = function () {
        return 'Notification/' + self.appId + '/' + self.appVersion + '/' + self.osType + '/' + self.notificationType.critical + '/true/' + self.userGuid;
    };
    //This function returns the web api url to retrive non critical notification
    self.nonCriticalNotificationInputURL = function () {
        return 'Notification/' + self.appId + '/' + self.appVersion + '/' + self.osType + '/' + self.notificationType.nonCritical + '/true/' + self.userGuid;
    };
};

var notification = new _notification;
//Intialize ostype once;
if (isNativeApplication) {
    notification.osType = notification.osTypes.All;
} else {
    notification.osType = notification.osTypes.Web;
};
