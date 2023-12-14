/*!
App JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd
This file contains the functional code for web and mobile application.
Licensed under the Cybage license.

*/
// loading mobile app files if application.type is mobile
var tabchange = function (data) {
    var hash = location.hash;
    if (appmodel.Form().hasAdvice() && hash.indexOf('advice')) {
        window.location.href = '#!/content/calculator/';
    }
    $('.header ul li').show();
    $('footer').show();
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    pageScrollTop();
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');
    if (hash.indexOf('advice') > -1 || hash.indexOf('calculator') > -1) {
        notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    }
    checkNotification();
};
var pageScrollTop = function () {
    setTimeout(function() { $(window).scrollTop(0); }, 0);  //FF and tab fix
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
    });
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
    });
};
var panelHide = function (data) {
    if ($('#' + data).css('display') === 'none') {
        $('#' + data).slideToggle("slow");
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewLess').show();
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewMore').hide();
    }
    else {
        $(window).scrollTop(0);
        $('#' + data).slideToggle("slow");
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewMore').show();
        $('#' + data).parents('#auc_for_icd, #cms').find('.viewLess').hide();
    }
};
var footerChange = function () {
    // $('.header ul li').show();
    // $('footer').show();
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
    });
    if (hash.indexOf('news') > -1) {
        notification.callWebApi('get', notification.nonCriticalNotificationInputURL(), null, notification.notificationType.nonCritical);
    }
    setHeight();
    pageScrollTop();
};
function customPanelToggle() {
    if (isNativeApplication) {
        $('#panelAdvice, #panelCMS, #panelNoAdvice').hide();
        $('.panelAdvice').hide();
        $('.viewMore').show();
        $('.viewLess').hide();
    }
    else {
        $('#panelCMS, #panelNoAdvice').show();
        $('#panelAdvice, #panelCMS, #panelNoAdvice').parents('#auc_for_icd, #cms').find('.viewMore').hide();
        $('#panelAdvice, #panelCMS, #panelNoAdvice').parents('#auc_for_icd, #cms').find('.viewLess').show();
        $('.viewMore').hide();
        $('.viewLess').show();		
    }
}
function resetTooltip() {
    if ($('.tooltip').attr('data-is-active')) {
        $('.tooltip').attr('data-is-active', false);
        $('.tooltip').css('display', 'none');
		$('.has-tip').foundation('hide');
    }
}
function aucTabNavigation() {
    window.location.href = '#!/content/advice/';
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
var advicePanelHide = function () {
    var siblingParent = $(this).parents('.panelAdviceContainer').find('.panelAdvice');
	var el = this;
    if (siblingParent.css('display') === 'none') {
        siblingParent.slideDown(100, function () {
            $(el).parent().hide();
            $(el).parent().prev().show();
        });
    }
    else {
        siblingParent.slideUp(100, function () {
            $(el).parent().hide();
            $(el).parent().next().show();
        });
    }
};
$('.close-bar').on('click', function () {
    $(this).parents('.callout').addClass('hide');
});
//Added this to not selecting the input elements
$('i[data-tooltip]').click(function (event) {
    event.preventDefault();
});
var setHeight = function () {
    var view = viewHeight();
    var mh;
    mh = (view - $('header').outerHeight() - $('footer').outerHeight() - 1);
    $(".fullscreen-spacer").css("min-height", mh);
};
var panelVisibleToggle = function (data, event) {
    var parentSection = $(data).parents('section.group-section').attr('id');
    if ($('.accordion ' + data).hasClass('selected')) {
        $('.accordion ' + data).removeClass('selected');
        $('.accordion ' + data + ' .collapsable-panel').removeClass('selected');
    }
    else {
        $('.accordion ' + data).addClass('selected');
        $('.accordion ' + data + ' .collapsable-panel').addClass('selected');
    }
    var target = '.accordion ' + data + ' .collapsable-panel';
    $(target).slideToggle(400);
    return true;
};
//Notification check
function checkNotification() {
    if (notification.criticalNotif) {
        $('#emailresult').html('');
        $('footer, #emailresult').hide();
        $('.header ul li').hide()
        window.location.href = "#!/content/notification";
    }
}
$(document).ready(function () {
    $("[role='tooltip']").each(function (index, element) {
        ($(element).html($(element).html().replace(/- /g, "<br>- ")))
    });
    
    //Hide all Intervention boxes that were DoNotShowMeAgained previously
    hideAllDoNotShowMeAgain()
});

function viewMedia(mediaGuid) {
    //Find media asset and get media image file name
    var asset = $.grep(assetNode, function (item) {
        return item.guId === mediaGuid;
    });
    if (asset.length > 0) {
		var imgFile = asset[0].fileName;
        var imgSrc = 'Assets\\img\\' + imgFile.toLowerCase();
        var $modal = $('#appRecommendationModalWindow');
        //$modal.find('h1').html(title);
        $modal.find('img').attr('src', imgSrc);
        $modal.foundation('open');
        $modal.css('top', '');
    }
};

$.fn.scrollEnd = function (callback, timeout) {
    $(this).scroll(function () {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};
$(window).scrollEnd(function () {
    $('html, body').stop();
}, 100);

// Listen for resize changes
window.addEventListener("resize", function() {
	resetTooltip();
}, false);

//For Yes/No question - BY RAHUL RANJAN
$(".button-group.selectable").click(function (event) {
    $(this).find("a.button.selected").removeClass("selected");
    $(this).find(event.target).addClass("selected");
});

var donotshowClicked = function (recommendationGuid) {
    $('#' + recommendationGuid).addClass('hide');
    var hiddenIntervData = localStorage.getItem('HIDDEN_INTERVENTION_BOXES');
    hiddenIntervData = hiddenIntervData ? JSON.parse(hiddenIntervData) : {};
    hiddenIntervData[recommendationGuid] = true;
    localStorage.setItem('HIDDEN_INTERVENTION_BOXES', JSON.stringify(hiddenIntervData));
}

var hideAllDoNotShowMeAgain = function () {
    var hiddenIntervData = localStorage.getItem('HIDDEN_INTERVENTION_BOXES');
    hiddenIntervData = hiddenIntervData ? JSON.parse(hiddenIntervData) : {};
    for (var prop in hiddenIntervData) {
        if (hiddenIntervData.hasOwnProperty(prop)) {
            $('#' + prop).addClass('hide');
        }
    }
}

function getCookieBanner() {
	var cookieValue = getCookie('managemr-cookie');
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
	var cname = 'managemr-cookie';
	var cvalue = new Date();
	var d = new Date();
	//expires in 10 days
	d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();1
    CookieString = cname + '=' + cvalue.toUTCString() + ';' + expires + ';path=/' + ";secure";
    document.cookie = CookieString;
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
        //setBannerText();
	});
}

//name of the cookie (cname)
function getCookie(cname) {
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
	return '';
}

function setBannerText(){
    if($("#cookieWarning .col-md-9 .col-lg-9")){
        $("#cookieWarning .col-md-9").html(appmodel.FormData().gdprBanner.bannerText);
        $("#ackButton").html(appmodel.FormData().gdprBanner.buttonText);
    }
}