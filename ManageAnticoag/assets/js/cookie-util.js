var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);

function getCookieBanner() {
    var cookieValue = getCookie('manage-anticoag-cookie');
    if (cookieValue) {
        $.ajax({
            method: 'GET',
            url: arguments[0] + '/wapi/CookieBannerHelper/GetGDPRPolicyUpdatedDate'
        }).done(function (data) {
            var publishDate = data ? new Date(data) : "";
            if (publishDate && new Date(cookieValue) > publishDate)
                removeBanner();
            else 
                loadBanner(arguments[0]);
        });
    }
    else {
        loadBanner(arguments[0]);
    }
}

function makeAck() {
    //set cookie
    var cname = 'manage-anticoag-cookie';
    var cvalue = new Date();
    var d = new Date();
    //expires in 10 days
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();

    if(!isNativeApplication){
        CookieString = cname + '=' + cvalue.toUTCString() + ';' + expires + "; path=/" + "; secure";
        document.cookie = CookieString;
    } else{
        localStorage.setItem(cname, cvalue.toUTCString());
    }
    
    //remove banner
    removeBanner();
}
function removeBanner(){
    var elem = document.getElementById('cookie-banner');
    if(elem)
        elem.parentNode.removeChild(elem);
}

function loadBanner() {
    var template = document.createElement('div');
    template.id = 'cookie-banner';
    $.ajax({
        method: 'GET',
        url: arguments[0] + '/external/vexternalcookiebanner'
    }).done(function (data) {
        template.innerHTML = data;
        document.body.appendChild(template);
    });
}

//name of the cookie (cname)
function getCookie(cname) {
    if(!isNativeApplication){
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
    } else{
        return localStorage.getItem(cname);
    }
    
    return '';
}