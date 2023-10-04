/*!
App JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd
This file contains the functional code for web and mobile application.
Licensed under the Cybage license.

*/

var tabchange = function (data) {
    $('.header ul li').show();
    $('footer').show();
    var hash = location.hash;
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    pageScrollTop();
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');
    //customPanelToggle();
    if (appmodel.Form().hasAdvice() && hash.indexOf('advice')) {
        window.location.href = '#!/content/calculator/';
    }
    if (hash.indexOf('advice') > -1 || hash.indexOf('calculator') > -1) {
        notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    }
    checkNotification();
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
    });
    //customPanelToggle();
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
    customPanelToggle();
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
    $('.footer ul li').removeClass('selected');
    $('.footer ul li').each(function () {
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
    if (typeof window.innerHeight !== 'undefined') {
        viewportheight = window.innerHeight;
    }
    //	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientHeight !== 'undefined' && document.documentElement.clientHeight !== 0) {
        viewportheight = document.documentElement.clientHeight;
    }
    //	 older versions of IE
    else {
        viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewportheight;
}
function viewWidth() {
    var viewportwidth;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth !== 'undefined') {
        viewportwidth = window.innerWidth;
    }
    //	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
        viewportwidth = document.documentElement.clientWidth;
    }
    //	 older versions of IE
    else {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
    }
    return viewportwidth;
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
        window.location.href = "../critical_notification.html";
    }
}
$(document).ready(function () {
    $("[role='tooltip']").each(function (index, element) {
        ($(element).html($(element).html().replace(/- /g, "<br> ")));
        ($(element).html($(element).html().replace(/• /g, "<br>• ")));
    });
    equalizeHamburgerBar();
});

function viewMedia(mediaGuid) {
    //Find media asset and get media image file name
    var asset = $.grep(assetNode, function (item) {
        return item.guId === mediaGuid;
    });
    if (asset.length > 0) {
		var imgFile = asset[0].fileName;
        var imgSrc = 'assets\\img\\' + imgFile.toLowerCase();
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
    equalizeHamburgerBar();
}, false);
window.addEventListener("touchstart", resetTooltip);
window.addEventListener("touchmove", resetTooltip);
$(".button-group.selectable").click(function (event) {
    $(this).find("a.button.selected").removeClass("selected");
    $(this).find(event.target).addClass("selected");
});

window.addEventListener("load", function() {
    //Code for equalizing hamburger bar and .mobile-acc-logo
    equalizeHamburgerBar();
});

var newPatientClicked = function() {
    history.back();
    resetAll();
    return false;
}

var equalizeHamburgerBar = function() {
  setTimeout(function() {
      var maxHeight = 0, selector = "";
        if($('.header .mobile-acc-logo').css("display") !== "none") {
            selector = '.header .mobile-acc-logo a';
        }
        else {
            selector = '.header a.logo';
        }
        $(selector).each(function() {
            maxHeight = ($(this).innerHeight() != 0) ? $(this).innerHeight() : maxHeight;
        }); 
        maxHeight = maxHeight /*- $(".icon .home .fa").innerHeight()*/ - parseFloat($('.header .icon').css('border-bottom-width')) - $('.icon a.home').height();
         $('.icon a.home').css({
                'padding': (maxHeight) / 2 + 'px 1em'
            });
        setHeight(); 
    },100);                 
}

