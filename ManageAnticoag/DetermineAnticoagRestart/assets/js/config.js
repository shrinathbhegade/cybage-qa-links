/*Uncomment this for pushing the build at stage and remove or comment the previous appUrl and webApiUrl values*/
//Hosted URL of application which is use for email result
//var appUrl = 'http://stage.tools.acc.org/AUC_ICD/beta/7-14/';
//////Hosted Web api URL to log user activity and email result
//var webApiUrl = 'http://stage.tools.acc.org/ACCMobileAPI/api/';
//Hosted URL of application which is use for email result
var appUrl = 'http://172.27.216.86:84/qa/27_07/';
//Hosted Web api URL to log user activity and email result
var webApiUrl = 'http://tools.stage.acc.org/ACCMobileAPI/api/';

var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
var isDeviceOnline = false;
var isProcessOn = false;
var flag = true;
var isQueryStringOn = false;
// var baseUrl = 'https://stage.tools.acc.org/ManageAnticoag/DetermineAnticoagRestart/emailresult.html#!/content/';
var applicationBaseUrl = 'https://tools.stage.acc.org/ManageAnticoag';
var baseUrl = applicationBaseUrl+'/DetermineAnticoagRestart/emailresult.html#!/content/';
var deviceTypes = {
    Web: "Web"
    , Mobile: "Mobile"
};
var ajaxTypes = {
    Get: "GET"
    , Post: "POST"
};
var googleURLShortenerAPIKey = "AIzaSyBXDjcepMfTAdnDW_s9htTcU5QRaTsf1wo";

var firebaseDynamicLinkConfig = {
    shortenKey: "AIzaSyBnCYw66XWMmU2CbBTC6S2-iLQexL5qTDc",
    url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=",
    uriPrefix: "https://cardiology.page.link"
}