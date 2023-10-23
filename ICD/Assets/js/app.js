/*!
App JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd
This file contains the functional code for web and mobile application.
Licensed under the Cybage license.

*/
var UUID;
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
var localStorageKey = "notshow";
// loading mobile app files if application.type is mobile
if (isNativeApplication) {
    //if mobile device detected
    //Load mobile-app.js dynamically
    var mobileScript = document.createElement('script');
    mobileScript.setAttribute('src', 'Assets/js/mobile-app.js');
    document.body.appendChild(mobileScript);
    $('body').addClass('noselect');
}

$(() => {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(localStorageKey) !== null) {
            appmodel.doNotShowAgainVisible(false);
        }
        if (sessionStorage.getItem('NOT_SHOW_SESSION')) {
            appmodel.doNotShowAgainVisible(false);
        }
    }
});

var tabchange = function (data) {
    var hash = location.hash;
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');
    customPanelToggle();
    if (appmodel.Form().hasAdvice() && hash.indexOf('advice')) {
        window.location.href = '#!/content/calculator/';
    } 
};

var pageScrollTop = function () {
    $(window).scrollTop(0);
};

var listchange = function () {
    var hash = location.hash;
    $('#adviceTabs li').removeClass('selected');
    $('#adviceTabs li').each(function () {
        var that = $(this);
        if ($('a', this).attr('href') === hash) {
            that.addClass('selected');
        }
        else {
            that.removeClass('selected');
        }
    }
    );
    customPanelToggle();
};
var subListchange = function () {
    var hash = location.hash;
    $('#cmsTabs li').removeClass('selected');
    $('#cmsTabs li').each(function () {
        var that = $(this);
        if ($('a', this).attr('href') === hash) {
            that.addClass('selected');
        }
        else {
            that.removeClass('selected');
        }
    }
    );
    customPanelToggle();
};

var panelHide = function (data) {
    if ($('#' + data).css('display') === 'none') {
        $('#' + data).slideToggle("slow");
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewLess').show();
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewMore').hide();
    } else {
        $(window).scrollTop(0);
        $('#' + data).slideToggle("slow");
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewMore').show();
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewLess').hide();
    }
};
var footerChange = function () {
    var hash = location.hash;
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    $('#footerLinks li').each(function () {
        var that = $(this);
        if ($('a', this).attr('href') === hash) {
            that.addClass('selected');
        }
        else {
            that.removeClass('selected');
        }
    }
	);
    var view = viewHeight();
    var mh;
    if (hash.indexOf('disclaimer') > -1 || hash.indexOf('resources') > -1) {
        mh = (view - 110);
    } else {
        mh = (view - 169);
    }

    $(".fullscreen-spacer").css("min-height", mh);
};
function customPanelToggle() {
    if (isNativeApplication) {
        $('#panelAdvice, #panelCMS, #panelNoAdvice').hide();
        $('.viewMore').show();
        $('.viewLess').hide();
    } else {
        $('#panelAdvice, #panelCMS, #panelNoAdvice').show();
        $('#panelAdvice, #panelCMS, #panelNoAdvice').parents('#auc_for_icd, #cms').find('.viewMore').hide();
        $('#panelAdvice, #panelCMS, #panelNoAdvice').parents('#auc_for_icd, #cms').find('.viewLess').show();
    }
}

function resetTooltip() {
    if ($('.tooltip').attr('data-is-active')) {
        $('.tooltip').attr('data-is-active', false);
        $('.tooltip').css('display', 'none');
    }
}

function aucTabNavigation() {
    window.location.href = '#!/content/advice/auc_for_icd/';
}

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

function getCookieBanner() {
    var cookieValue = getCookie('icdauc-cookie');
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
    var cname = 'icdauc-cookie';
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

var closeWelcomeBox = function () {
    if (isNativeApplication) {
        sessionStorage.setItem("NOT_SHOW_SESSION", "true");
        appmodel.doNotShowAgainVisible(false);
    }

}

var notShowAgain = function() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(localStorageKey, "true");
        appmodel.doNotShowAgainVisible(false);
    }
    return false;
};