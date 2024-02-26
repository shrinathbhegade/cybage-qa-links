var _notification = function () {
	var self = this;
	self.showCritical = true;
	self.webApiUrl = 'https://tools.acc.org/ACCUtility.Web/';
	self.appId = 'org.acc.ldlcmanager';
	self.userGuid = 'a7b3e523-3f8d-4b33-a1c4-ec9e9aa3a5bb';
	self.appVersion = '1.0';
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
    
    //To sort the notifications using effective date in ascending order
	self.SortData=function (a, b) {
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
                        }

	self.callWebApi = function (type, url, data, notificationType) {
		try {
			$.ajax({
				cache: false,
				url: self.webApiUrl + url,
				type: type,
				dataType: 'json',
				data: data,
				timeout: 2000,
				success: function (data) {
					if (notificationType === self.notificationType.critical && data && self.showCritical) {
						data = $.grep(data, function (item) {
							return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
						});
						if (data.length > 0 && appmodel) {
							appmodel.criticalNotification(data);
							$('#critical_notification').foundation('open');
						}

						localStorage.setItem('criticalNotification', JSON.stringify(data));

					} else if (notificationType === self.notificationType.nonCritical && data) {
						data = $.grep(data, function (item) {
							return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
						});
                        // sort received data
				        data=data.sort(self.SortData);
						if (data.length > 0 && appmodel) {
							appmodel.notificationData(data);
						}

						localStorage.setItem('nonCriticalNotification', JSON.stringify(data));
					} else {
						console.log('No conditions');
					}
				},
				error: function (type) {
					console.log("ERROR!!" + type.responseText);
					self.CheckStoredNotification();
				}
			});
		} catch (e) {
			self.CheckStoredNotification();
			console.log("ERROR!!" + e);
		}
	};

	self.CheckStoredNotification = function () {
		if (localStorage.getItem('criticalNotification')) {
			var data = JSON.parse(localStorage.getItem('criticalNotification'));
			data = $.grep(data, function (item) {
				return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
			});
			if (data.length > 0 && appmodel) {
				appmodel.criticalNotification(data);
				$('#critical_notification').foundation('open');
			}
		}
		if (localStorage.getItem('nonCriticalNotification')) {
			var data = JSON.parse(localStorage.getItem('nonCriticalNotification'));
			data = $.grep(data, function (item) {
				return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
			});
            // sort received data
            data=data.sort(self.SortData);
			if (data.length > 0 && appmodel) {
				appmodel.notificationData(data);
			}
		}
	};

	self.criticalNotificationInputURL = function () {
		return 'Notification/' + self.appId + '/' + self.appVersion + '/' + self.osType + '/' + self.notificationType.critical + '/true/' + self.userGuid;
	};

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