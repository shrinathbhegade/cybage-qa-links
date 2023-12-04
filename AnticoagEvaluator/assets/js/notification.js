/*
 * Get the notifications
 */
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
var Notification = function () {
    var self = this;
    var criticalKey = "AnticoagEvaluatorCritical",
        nonCriticalKey = "AnticoagEvaluatorNonCritical";
    var appStoreURLS = {
        '1': "https://itunes.apple.com/us/app/anticoagevaluator/id609795286?mt=8",
        '2': "https://play.google.com/store/apps/details?id=org.acc.AnticoagEvaluatorV2&hl=en",
        '3': ''
    }
    self.showCritical = true;
    self.webApiUrl = 'https://stage.tools.acc.org/ACCUtility.Web/';
    self.appId = 'org.acc.bridgeanticoag';  //change
    self.userGuid = 'a7b3e523-3f8d-4b33-a1c4-ec9e9aa3a5bb';
    self.appVersion = '1.0';
    self.osType = '';
    self.osTypes = {
        iOS: 1,
        Android: 2,
        Web: 3,
        All: 4
    };
    self.getStoreUrl = function () {
        return appStoreURLS[self.osType];
    };
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

    self.callWebApi = function (type, url, _data, notificationType, callback) {
        try {
            $.ajax({
                cache: false,
                url: self.webApiUrl + url,
                type: type,
                dataType: 'json',
                data: _data,
                timeout: 2000,
                success: function (data) {
                    if (notificationType === self.notificationType.critical && data && self.showCritical) {
                        data = $.grep(data, function (item) {
                            return ((item.AppVersionNumber >= self.appVersion || parseFloat(item.AppVersionNumber) === 0) && (item.OsType === self.osType || item.OsType === self.osTypes.All));
                        });
                        if (data.length > 0 && appmodel) {
                            self.criticalNotif = true;
                            if(data[0].DisplayAppStoreUrl) {
                                data[0].AppStoreUrl = self.getStoreUrl();    
                            }
                            callback(data);
                        }
                        localStorage.setItem(criticalKey, JSON.stringify(data));
                    } else if (notificationType === self.notificationType.nonCritical && data) {
                        data = $.grep(data, function (item) {
                            return ((item.AppVersionNumber >= self.appVersion || parseFloat(item.AppVersionNumber) === 0) && (item.OsType === self.osType || item.OsType === self.osTypes.All));
                        });

                        // sort received data                        
                        data.sort(function (a, b) {
                            var date1 = new Date(a.EffectiveDate);
                            var date2 = new Date(b.EffectiveDate);
                            if (date1 > date2) {
                                return -1;
                            } else if (date1 < date2) {
                                return 1;
                            } else {
                                if (a.AppNotification > b.AppNotification) {
                                    return -1;
                                } else return 1;
                            }
                        });

                        if (data.length > 0 && appmodel) {
                            callback(data);
                        }
                        localStorage.setItem(nonCriticalKey, JSON.stringify(data));
                    }
                },
                error: function () {
                    self.CheckStoredNotification(callback, notificationType);
                }
            });
        } catch (e) {
            self.CheckStoredNotification(callback, notificationType);
        }
    };
    //This function retrives the notification from device/browser local storage when mobile app is offline
    self.CheckStoredNotification = function (callback, notificationType) {
        if (localStorage.getItem(criticalKey) && notificationType == self.notificationType.critical) {
            var _data = JSON.parse(localStorage.getItem(criticalKey));
            _data = $.grep(_data, function (item) {
                return ((item.AppVersionNumber >= self.appVersion || parseFloat(item.AppVersionNumber) === 0) && (item.OsType === self.osType || item.OsType === self.osTypes.All));
            });
            if (_data.length > 0 && appmodel) {
                self.criticalNotif = true;
                callback(_data);
            }
        }
        if (localStorage.getItem(nonCriticalKey) && notificationType == self.notificationType.nonCritical) {
            var data = JSON.parse(localStorage.getItem(nonCriticalKey));
            data = $.grep(data, function (item) {
                return ((item.AppVersionNumber >= self.appVersion || parseFloat(item.AppVersionNumber) === 0) && (item.OsType === self.osType || item.OsType === self.osTypes.All));
            });

            // sort received data
            data.sort(function (a, b) {
                var date1 = new Date(a.EffectiveDate);
                var date2 = new Date(b.EffectiveDate);
                if (date1 > date2) {
                    return -1;
                } else if (date1 < date2) {
                    return 1;
                } else {
                    if (a.AppNotification > b.AppNotification) {
                        return -1;
                    } else return 1;
                }
            });

            if (data.length > 0 && appmodel) {
                callback(data);
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

var notification = new Notification();
//Intialize ostype once;
if (isNativeApplication) {
    notification.osType = notification.osTypes.All;
} else {
    notification.osType = notification.osTypes.Web;
}
//notification.webApiUrl = 'http://172.27.216.69:8082/';