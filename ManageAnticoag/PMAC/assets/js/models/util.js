/*!
* databaseModel JS
* databaseModel is used to define database operations.
*/
define(['knockout',"jquery","pager","databaseModel","appConstantsModel"], function(ko,$,pager,databaseModel,appConstantsModel) {
    
    /*
	* clearSessionTable function
	* clearSessionTable is used to clear session table.
	*/
    function clearSessionTable(tableName){
        try {
            setTimeout(function(){
                sessionStorage.removeItem(tableName);
            },1000);
        } catch(ex){
            console.log("util() : Error in clearing value : " + ex.message);
        }
    }
    
    /*
	* clearAllTable function
	* clearAllTable is used to clear all session table.
	*/
    function clearAllTable(){
        try {
            setTimeout(function(){
               sessionStorage.clear();
            },1000);
        } catch(ex){
            console.log("util() : Error in clearing value : " + ex.message);
        }
    }
    
    /*
	* getNotifications function
	* getNotifications is used to call notification API.
	*/
    function getNotifications(appId, appVersionNumber, appOsType, notificationType, displayAllUsers, userGuid, onSuccess, onError) {
        var notificationAPIUrl = notification_url+"/"+appId+"/"+appVersionNumber+"/"+appOsType+"/"+notificationType+"/"+displayAllUsers+"/"+userGuid;
        
        $.getJSON(notificationAPIUrl, function(data) {

            onSuccess(data);
		});
    }
    
    /*
    * resetTooltip function
    * resetTooltip is used to reset tooltips on resize event
    * Inserted by Cybage
    */
    function resetTooltip() {
        if ($('.tooltip').attr('data-is-active')) {
            $('.tooltip').attr('data-is-active', false);
            $('.tooltip').css('display', 'none');
            $('.has-tip').foundation('hide');
        }
    }
    window.addEventListener("resize", resetTooltip);
    
     function getShortUrl(longUrl, onSuccess) {
        var firebaseDynamicLinkConfig = {
            shortenKey: "AIzaSyBnCYw66XWMmU2CbBTC6S2-iLQexL5qTDc",
            url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=",
            uriPrefix: "https://cardiology.page.link"
        }
        
        var shortUrl = undefined;
        var requestUrl = firebaseDynamicLinkConfig.url + firebaseDynamicLinkConfig.shortenKey;
        var data = {
            "dynamicLinkInfo": {
                "domainUriPrefix": firebaseDynamicLinkConfig.uriPrefix,
                "link": longUrl
            }
        };

        $.ajax({
            url: requestUrl,
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            dataType: 'json',
            success: function(data) {
                var shortUrl = data.shortLink;
                onSuccess(shortUrl);
            },
            error: function(data) {
                onSuccess(longUrl);
            }
        });
  
        onSuccess(shortUrl);
    }

    
    return{
		clearSessionTable:clearSessionTable,
		clearAllTable:clearAllTable,
        getNotifications:getNotifications,
        getShortUrl:getShortUrl
    };
})

function viewHeight() {
    var viewportheight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth !== 'undefined') {
        viewportheight = window.innerHeight;
    }
    //	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
        viewportheight = document.documentElement.clientHeight;
    }
    //	 older versions of IE
    else {
        viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewportheight;
}

