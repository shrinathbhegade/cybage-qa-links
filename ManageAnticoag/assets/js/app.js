var localStorageKey = "notshow";
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);

var setHeight = function() {
    var view = viewHeight();
    var mh;
    mh = (view - ($('header').outerHeight() + $('footer').outerHeight()));
    $(".fullscreen-spacer").css("min-height", mh);
};
var footerChange = function() {
    var hash = location.hash;
    $('.footer li').removeClass('selected');
    $('.footer li').each(function() {
        var that = $(this);
        if ($('a', this).attr('href') === hash) {
            that.addClass('selected');
        } else {
            that.removeClass('selected');
        }
    });
    $('header .tabs-primary').css('visibility', 'visible');
    $('header .tabs-primary').css('margin-left', '');

    if (hash.indexOf('news') > -1) {
        notification.callWebApi('get', notification.nonCriticalNotificationInputURL(), null, notification.notificationType.nonCritical);
        sessionStorage.setItem("LAST_PAGE_VISITED", "AX");
    }

    if (hash.indexOf('terms') > -1 || hash.indexOf('quick-reference') > -1 || hash.indexOf('about') > -1 || hash.indexOf('news') > -1 || hash.indexOf('resources') > -1) {
        sessionStorage.setItem("LAST_PAGE_VISITED", "AX");
    } else if (hash.indexOf('manager') > -1) {
        sessionStorage.setItem("LAST_PAGE_VISITED", "LP");
    }

    if (hash.indexOf('quick-reference') > -1 || hash.indexOf('clinician-split-layout') > -1) {
        $("#quickreference").addClass("selected");
        $('.quick-reference-list li').removeClass("selected");
    } else {
        $("#quickreference").removeClass("selected");
    }

    if (hash.indexOf('manager') > -1) {
        $("#home").addClass("selected");
    } else {
        $("#home").removeClass("selected");
    }

    //if(hash.indexOf('manager') > -1)
    notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    checkNotification();
    equalizeHamburgerBar();
}
window.addEventListener("resize", function(event) {
    equalizeHamburgerBar();
    equalizeButtons();
});

//Notification check
function checkNotification() {
    if (notification.criticalNotif) {
        $('#emailresult').html('');
        $('footer, #emailresult').hide();
        $('.header ul li').hide()
        //window.location.href = "#!/content/news";
        window.location.href = "critical_notification.html";
    }
};
var pageScrollTop = function() {
    $(window).scrollTop(0);
};

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

var detailsPanelHide = function() {
    var siblingParent = $(this).parents('.panelDetailsContainer').find('.panelDetails');
    $(this).parents('.panelDetailsContainer').css('height', '');
    var el = this;
    if (siblingParent.css('display') === 'none') {
        siblingParent.slideDown(100, function() {
            $(el).parent().hide();
            $(el).parent().prev().show();
        });
    } else {
        siblingParent.slideUp(100, function() {
            $(el).parent().hide();
            $(el).parent().next().show();
        });
    }

};

var notShowAgain = function() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(localStorageKey, "true");
        appmodel.doNotShowAgainVisible(false);
    }
    return false;
};


$(document).ready(function() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem(localStorageKey) !== null) {
            appmodel.doNotShowAgainVisible(false);
        }
        if (sessionStorage.getItem('NOT_SHOW_SESSION')) {
            appmodel.doNotShowAgainVisible(false);
        }
    }
    equalizeHamburgerBar();
});

var closeWelcomeBox = function() {
    if (isNativeApplication) {
        sessionStorage.setItem("NOT_SHOW_SESSION", "true");
        appmodel.doNotShowAgainVisible(false);
    }

}

var nestedPanelVisibleToggle = function(data, event) {
    var parentSection = $(data).parents('.small-12.columns').attr('id');
    if ($('.nested-accordion ' + data).hasClass('nested-selected')) {
        $('.nested-accordion ' + data).removeClass('nested-selected');
        $('.nested-accordion ' + data + ' .nested-collapsable-panel').first().removeClass('nested-selected');
    } else {
        $('.nested-accordion ' + data).addClass('nested-selected');
        $('.nested-accordion ' + data + ' .nested-collapsable-panel').first().addClass('nested-selected');
    }
    var target = '.nested-accordion ' + data + ' .nested-collapsable-panel';

    $(target).first().slideToggle();
    if ($('#' + parentSection + ' .nested-collapsable-panel.nested-selected').length != 0) {
        $('#' + parentSection + '_action').attr('data-action', 'collapse');
        $('#' + parentSection + '_action').html('');
        $('#' + parentSection + '_action').html('Collapse All');
    } else {
        $('#' + parentSection + '_action').attr('data-action', 'expand');
        $('#' + parentSection + '_action').html('');
        $('#' + parentSection + '_action').html('Expand All');
    }

    return true;
};



window.onload = function() {
    equalizeHamburgerBar();
    $('.viewLess a').each(function(i, ele) {
        detailsPanelHide.bind(ele)();
    });
    equalizeButtons();
    setTimeout(function() {
        $('div.page.with-group-sections').removeClass('invisible');
    }, 100);
}
var equalizeButtons = function() {
    setTimeout(function() {
        var padding = ($(".pmac-btn").innerHeight() - $(".oac-restart-btn").height()) / 2;
        $('.manage-bleed-btn').css("padding-top", padding + "px");
        $('.manage-bleed-btn').css("padding-bottom", padding + "px");
        $('.oac-restart-btn').css("padding-bottom", padding + "px");
        $('.oac-restart-btn').css("padding-top", padding + "px");
    }, 0);

}

//Expand all/Collapse all
var OptimizeToggle = function(data, event) {
    var action = $(data).attr('data-action');
    var accr = $(data).attr('data-accr');
    var id = $(data).attr('id');
    if (action === 'expand') {
        $('#' + id).attr('data-action', 'collapse');
        $('#' + id).html('');
        $('#' + id).html('Collapse All');
        $('#' + accr + ' .nested-accordion div').addClass('nested-selected');
        $('#' + accr + ' .nested-accordion .nested-collapsable-panel').slideDown();
    } else {
        $('#' + id).attr('data-action', 'expand');
        $('#' + id).html('');
        $('#' + id).html('Expand All');
        $('#' + accr + ' .nested-accordion div').removeClass('nested-selected');
        $('#' + accr + ' .nested-accordion .nested-collapsable-panel').slideUp();
    }
}

var listchange = function(data, event) {
    pageScrollTop();
    var hash = location.hash;
    $('.nav-list li').each(function() {
        var that = $(this);
        that[$('a', this).attr('href') === hash ? 'addClass' : 'removeClass']('selected');
    });
};
var panelHide = function(data, event) {
    $(event.currentTarget).parents('.collapsable-panel').hide();
    $(event.currentTarget).parents('.selected').removeClass('selected');
};
var panelScrollTop = function(data, event) {
    var offset = $(event.currentTarget).parent().parent().offset().top - 50;
    var winOffset = $(window).scrollTop();
    var newScroll = (offset <= winOffset) ? offset : 0;
    $(window).scrollTop(newScroll);
};

var equalizeHamburgerBar = function() {
    setTimeout(function() {
      /*var maxHeight = 0;
        $('.mobile-acc-logo a').each(function() {
            maxHeight = ($(this).innerHeight() != 0) ? $(this).innerHeight() : maxHeight;
        });
        maxHeight = maxHeight - $(".icon .home .fa").innerHeight();
        if ($('.mobile-acc-logo').css("display") == "block" && maxHeight > 0) {
            $('.icon a.home').css({
                'padding': (maxHeight - 5) / 2 + 'px 1em'
            });
        }
        else
            $('.icon a.home').css({
                'padding': '1.72em 0.5em'
            });*/
        var maxHeight = 0, selector = "";
        if($('.header .mobile-acc-logo').css("display") !== "none") {
            selector = '.header .mobile-acc-logo a';
        }
        else {
            selector = '.header a.logo';
        }
        $(selector).each(function() {
            maxHeight = ($(this).innerHeight() > maxHeight) ? $(this).innerHeight() : maxHeight;
        }); 
        maxHeight = maxHeight /*- $(".icon .home .fa").innerHeight()*/ - parseFloat($('.header .icon').css('border-bottom-width')) - $('.icon a.home').height();
         $('.icon a.home').css({
                'padding': (maxHeight) / 2 + 'px 1em'
            });
        setHeight();  
    }, 100);  
}

