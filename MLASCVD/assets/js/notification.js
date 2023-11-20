/*
 * Get the notifications
 */

var _notification = function() {
	var self = this;
    var criticalKey, nonCriticalKey;
	self.showCritical = true;
	self.webApiUrl = 'https://tools.acc.org/ACCUtility.Web/';
    self.callWebApiUrl = "";
	self.appId ='org.acc.ascvd';
	self.userGuid = 'a7b3e523-3f8d-4b33-a1c4-ec9e9aa3a5bb';
	self.appVersion = '1.0';
	self.osType ='';
	self.osTypes = {
		iOS:'1',
		Android: '2',
		Web:'3',
		All:'4'
	};
	self.appStoreURL ='';
	self.notificationType ={
		critical:'1',
		nonCritical:'2'
	};
    criticalKey = self.appId+"CR";
    nonCriticalKey = self.appId+"NCR";
    
 //To format the date
	self.FormatDate=function(d)
	{
		 return (d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate()  + " " +
		d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds());
	}
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
					cache: false
					, url: self.webApiUrl + url
					, type: type
					, dataType: 'json'
					, data: data
					, timeout: 2000
					, success: function (data) {
						if(notificationType === self.notificationType.critical && data && self.showCritical){
							data = $.grep(data, function (item) {
										return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
									});
							if(data.length > 0 && appmodel){
								 appmodel.criticalNotification(data);
								 $('#critical_notification').foundation('open');
							}
							localStorage.setItem(criticalKey,JSON.stringify(data));
						}else if(notificationType === self.notificationType.nonCritical && data){
							data = $.grep(data, function (item) {
										return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
									});
							// sort received data
							data=data.sort(self.SortData);
							if(data.length > 0 && appmodel){
								 appmodel.notificationData(data);
							}
							localStorage.setItem(nonCriticalKey,JSON.stringify(data));
						}
					}
					, error: function (type) {
						self.CheckStoredNotification();
					}
				});
			} catch (e) {
			   self.CheckStoredNotification();
			}
	};
//This function retrives the notification from device/browser local storage when mobile app is offline
	self.CheckStoredNotification = function(){
		if(localStorage.getItem(criticalKey)){
			var data = JSON.parse(localStorage.getItem(criticalKey));
			data = $.grep(data, function (item) {
						return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0)  && (item.OsType == self.osType || item.OsType == self.osTypes.All));
					});
			if(data.length > 0 && appmodel){
				 appmodel.criticalNotification(data);
				 $('#critical_notification').foundation('open');
			}
		}
		if(localStorage.getItem(nonCriticalKey)){

			var data = JSON.parse(localStorage.getItem(nonCriticalKey));
			data = $.grep(data, function (item) {
						return ((parseFloat(item.AppVersionNumber) >= parseFloat(self.appVersion) || item.AppVersionNumber == 0) && (item.OsType == self.osType || item.OsType == self.osTypes.All));
					});
			// sort received data
			data=data.sort(self.SortData);
			if(data.length > 0 && appmodel){
				 appmodel.notificationData(data);
			}
		}
	};
//This function returns the web api url to retrive critical notification
	self.criticalNotificationInputURL = function(){
		return 'Notification/' + self.appId + '/' + self.appVersion + '/' + self.osType + '/' + self.notificationType.critical + '/true/' +self.userGuid;
	};
//This function returns the web api url to retrive non critical notification
	self.nonCriticalNotificationInputURL = function(){
		return 'Notification/' + self.appId + '/' + self.appVersion + '/' + self.osType + '/' + self.notificationType.nonCritical + '/true/' +self.userGuid;
	};
};
var notification = new _notification;
//Intialize ostype once;
if(isNativeApplication){
		notification.osType = notification.osTypes.All;
}else{
		notification.osType = notification.osTypes.Web;
};
