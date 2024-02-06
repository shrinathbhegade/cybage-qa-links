function viewModel(){
	var self = this;
	self.notificationData = ko.observableArray([]);
	self.criticalNotification = ko.observableArray([]);
	self.appStoreURL = ko.observable(notification.appStoreURL);
	self.hideSplash = ko.observable(false);
}
var appmodel = new viewModel();
// ko.applyBindings(appmodel);
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// var viewModel = {
// };
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
var hash = location.hash;
pager.start();
var path = '#!/content/manager/';
if (hash.indexOf('disclaimer') > -1 || hash.indexOf('resources') > -1 || hash.indexOf('about') > -1 || hash.indexOf('notifications') > -1 || hash.indexOf('demopage') > -1) {
        path = hash;        
    }
pager.navigate(path);
if(!isNativeApplication){
	notification.callWebApi('get',notification.criticalNotificationInputURL(),null, notification.notificationType.critical);
	notification.callWebApi('get',notification.nonCriticalNotificationInputURL(),null, notification.notificationType.nonCritical);
}