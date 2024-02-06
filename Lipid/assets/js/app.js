var UUID;
var isNativeApplication = (document.URL.indexOf("http") === -1 && document.URL.indexOf("https") === -1);

$(window).on('load', () => {
    appmodel.hideSplash(true);
});

var setHeight = function () {
    var view = viewHeight();
    var mh;
    mh = (view - ($('header').outerHeight() + $('footer').outerHeight()));
    mh = mh + 1;
    $(".fullscreen-spacer").css("min-height", mh);
};
var footerChange = function () {
    var hash = location.hash;
    $('.footer li').removeClass('selected');
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
    if (
        hash.indexOf("about") > -1 ||
        hash.indexOf("notifications") > -1 ||
        hash.indexOf("disclaimer") > -1 ||
        hash.indexOf("resources") > -1
    ) {
        $("header .tabs-primary").css("visibility", "visible");
        $("header .tabs-primary").css("margin-left", "");
    } else {
        $("header .tabs-primary").css("visibility", "hidden");
        $("header .tabs-primary").css("margin-left", "-61px");
        $(".off-canvas.position-left")
            .removeClass("is-open")
            .parent()
            .removeClass("is-off-canvas-open is-open-left");
    }

    if (hash.indexOf('notifications') > -1) {
        notification.callWebApi('get', notification.nonCriticalNotificationInputURL(), null, notification.notificationType.nonCritical);
    }
    setHeight();
};
var resizeTimer;
window.onresize = function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        setHeight();
    }, 250);
};

var pageScrollTop = function () {
    $(window).scrollTop(0);
};
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


var focusMode = false;


ko.bindingHandlers["ui-accordion"] = {
    init: function (element, valueAccessor, binding, viewModel) {
        $(element).addClass("accordion");
        var children = $(element).children();
        var bodies = $.map(children, function (child) {
            return $(child).children()[1];
        });
        var headers = $.map(children, function (child) {
            return $(child).children()[0];
        });
        $.each(children, function (childIndex, child) {
            var child = $(child);
            var header = $(child.children()[0]);
            header.addClass("toggle");
            var body = $(child.children()[1]);
            header.click(function () {
                $.each(headers, function (headerIndex, otherHeader) {
                    if (headerIndex !== otherHeader) {
                        $(otherHeader).parent().removeClass("selected");
                    }
                });
                $(this).parent().addClass("selected");
                body.slideDown();
                $.each(bodies, function (bodyIndex, otherBody) {
                    if (bodyIndex !== childIndex) {
                        $(otherBody).slideUp();
                    }
                });
            });
        });
        $.each(bodies, function (i, body) {
            if (i !== 0) {
                $(body).hide();
            }
        });
        $.each(children, function (i, child) {
            if (i == 0) {
                $(child).addClass("selected");
            }
        });
    },
    update: function (element, valueAccessor) { }
};

ko.bindingHandlers.toggle = {
    after: ["value", "attr"],
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        function updateModel() {
            if (isValueArray) {
                var index = ko.utils.arrayIndexOf(underlyingValue, viewModel);
                if (index > -1) {
                    underlyingValue.splice(index, 1);
                } else {
                    underlyingValue.push(viewModel);
                }
                if (isObservable) {
                    modelProperty.valueHasMutated();
                }
            } else {
                if (isObservable && isWritable) {
                    modelProperty(!modelProperty());
                } else {
                    viewModel[modelProperty] = !viewModel[modelProperty];
                }
            }
        }
        var modelProperty = valueAccessor();
        var underlyingValue = ko.utils.unwrapObservable(modelProperty);
        var isValueArray = underlyingValue instanceof Array;
        var isObservable = ko.isObservable(modelProperty);
        var isWritable = ko.isWriteableObservable(modelProperty);
        ko.utils.registerEventHandler(element, "click", updateModel);
    }
};

var tabchange = function (data, event) {
    $(".tabs-primary li").removeClass("selected");
    $('.nav-list li').removeClass('selected');
    if (data.page.currentId != "") {
        string = "." + data.page.currentId + "-Tab";
    } else {
        string = "." + data.page.route[data.page.route.length - 2] + "-Tab";
    }
    $(string).addClass("selected");
    var hash = location.hash;
    if (hash.indexOf("estimator") > -1 || hash.indexOf("recommendation") > -1) {
        notification.callWebApi("get", notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    }

    var view = viewHeight();
    var mh;
    mh = (view - ($('header').outerHeight() + $('footer').outerHeight()));
    $(".fill-page-height").css("min-height", mh);
};

var subtabchange = function (data, event) {
    $(".tabs:not(.tabs-primary) li").removeClass("selected");
    var string = "";
    if (data.page.currentId != "") {
        string = "." + data.page.currentId + "-Tab";
    } else {
        string = "." + data.page.route[data.page.route.length - 2] + "-Tab";
    }
    $(string).addClass("selected");
};

var loadTopofPage = function (data, event) {
    $("html, body").animate({
        scrollTop: 0
    });
};

var goBack = function () {
    window.history.back();
};

var panelScrollTop = function (data, event) {
    var offset = $(event.currentTarget).parent().parent().offset().top - 50;
    var winOffset = $(window).scrollTop();
    var newScroll = offset <= winOffset ? offset : 0;
    $(window).scrollTop(newScroll);
};

var pageScrollTop = function (data, event) {
    $(window).scrollTop(0);
};

var panelVisibleToggle = function (data, event) {
    var target = data + " .collapsable-panel";
    $(target).toggle();
};

var nestedPanelVisibleToggle = function (data, event) {
    var parentSection = $(data).parents('section.group-section').attr('id');
    if ($('.nested-accordion ' + data).hasClass('nested-selected')) {
        $('.nested-accordion ' + data).removeClass('nested-selected');
        $('.nested-accordion ' + data + ' .nested-collapsable-panel').removeClass('nested-selected');
    }
    else {
        $('.nested-accordion ' + data).addClass('nested-selected');
        $('.nested-accordion ' + data + ' .nested-collapsable-panel').addClass('nested-selected');
    }
    var target = '.nested-accordion ' + data + ' .nested-collapsable-panel';
    $(target).slideToggle();
    if ($('#' + parentSection + ' .nested-collapsable-panel.selected').length != 0) {
        $('#' + parentSection + '_action').attr('data-action', 'collapse');
        $('#' + parentSection + '_action').html('');
        $('#' + parentSection + '_action').html('Collapse All');
    }
    else {
        $('#' + parentSection + '_action').attr('data-action', 'expand');
        $('#' + parentSection + '_action').html('');
        $('#' + parentSection + '_action').html('Expand All');
    }
    return true;
};

var panelHide = function (data, event) {
    $(event.currentTarget).parents(".collapsable-panel").hide();
    $(event.currentTarget).parents(".selected").removeClass("selected");
};

var panelShow = function (data, event) {
    var target = data + " .collapsable-panel";
    $(target).show();
};

var listchange = function (data, event) {
    var hash = location.hash;
    $('.nav-list li').each(function () {
        var that = $(this);
        that[$('a', this).attr('href') === hash ? 'addClass' : 'removeClass']('selected');
    });
};

// var sticky = new Waypoint.Sticky({
//     element: $(".sticky-holder")[0]
// });

// var waypoint = new Waypoint({
//     element: $(".shrink-waypoint"),
//     handler: function(direction) {
//         if (direction == "down") {
//             $(".sticky-holder").addClass("shrink");
//         } else {
//             $(".sticky-holder").removeClass("shrink");
//         }
//     }
// });

// var remakeSticky = function(data, event) {
//     sticky.destroy();
//     sticky = new Waypoint.Sticky({
//         element: $(".sticky-holder")[0]
//     });
// };

var panzoom = function (data, event) {
    var $windowheight = $(window).height() - 50;
    var $scaleZoom = $(".parent.panzoom").width() / $(".panzoom-element img").width();
    var resultZoom = "'scale(" + $scaleZoom + ")'";
    var $panHolder = $(".panzoom-element");
    var $panButtons = $(".panzoom-buttons");
    $(".parent.panzoom").height($windowheight);
    $panHolder.panzoom({
        $zoomIn: $panButtons.find(".zoom-in"),
        $zoomOut: $panButtons.find(".zoom-out"),
        $reset: $panButtons.find(".reset"),
        contain: "invert"
    });
};

//$(window).on("resize", remakeSticky);
