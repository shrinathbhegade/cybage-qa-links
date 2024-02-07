var UUID;
const tosKey = 'ldlTOS';
var isNativeApplication = (document.URL.indexOf("http") === -1 && document.URL.indexOf("https") === -1);

$(window).on('load', () => {
    appmodel.hideSplash(true);
});

var setHeight = function () {
    var view = viewHeight();
    var mh;
    mh = (view - $('header').outerHeight() - $('footer').outerHeight());
    $(".fullscreen-spacer").css("min-height", mh);
};

$(function () {
    $("#accordion").accordion();
    $("#accordion2").accordion();
    $("#chosen").chosen({ width: "100%" });
    $("#chosenSingle").chosen({ width: "100%" });
    // to render html in an auto complete you must extend it.
    // https://api.jqueryui.com/autocomplete/#method-_renderItem

    $("#slider").slider({
        value: 100,
        min: 0,
        max: 500,
        step: 50,
        slide: function (event, ui) {
            $("#amount").val("$" + ui.value);
        }
    });
    $("#amount").val("$" + $("#slider").slider("value"));

    $("#datepicker").datepicker();
    $("#spinner").spinner();
});

$(document).ready(function () {
    // input text focus moved after next/go/return key press End.
    // Code to transfer focus on keypad click event, should be done on document.ready() only.
    // Start
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(tosKey) !== null) {
          appmodel.doNotShowAgainVisible(false);
        }
    }
    
    $('.selectPatient').css('display', 'none');
    (function ($) {
        $.fn.enterAsTab = function (options) {
            var settings = $.extend({
                'allowSubmit': false
            }, options);
            try {
                $('input').keypress(function (event) {
                    if (settings.allowSubmit) {
                        var type = $(this).attr("type");
                        if (type == "submit") {
                            return true;
                        }
                    }
                    if (event.keyCode == 13) {
                        var inputs = $(this).parents("body").eq(0).find(":input,select,a,button");
                        var idx = inputs.index(this);
                        if (idx == inputs.length - 1) {
                            idx = -1;
                        }
                        else {
                            inputs[idx].blur();
                            inputs[idx + 1].focus(); // handles submit buttons
                        }
                        return true;
                    }
                });
                return this;
            }
            catch (error) { }
        };
    })(jQuery);

    $("#body").enterAsTab({
        'allowSubmit': true
    });
    // End

    // input text focus moved after next/go/return key press End.


    // http://anovi.github.io/selectonic/
    $("#ButtonGroup").selectonic(
        {
            multi: false,
            mouseMode: "standard",
            keyboard: false,
            focusBlur: true,
            keyboardMode: "toggle",
            focusOnHover: true,
        }
    );

    $("#Toggle").selectonic(
        {
            multi: false,
            mouseMode: "standard",
            keyboard: false,
            focusBlur: true,
            keyboardMode: "toggle",
            focusOnHover: true,
        }
    );

    var $holder = $("#PanelSelector"), panels = $holder.find('.panel-selector'), parent_panel = $holder.find('.parent ul'), child_panel = $holder.find('.child ul');
    parent_panel.selectonic({
        multi: false,
        mouseMode: "standard",
        keyboard: true,
        focusBlur: true,
        keyboardMode: "toggle",
        focusOnHover: true,
        create: function () {
            this.selectonic('disable')
        },
        unselect: function (event, ui) {

        },
        select: function (event, ui) {

        },
    });

    parent_panel.mouseenter(function () {
        parent_panel.selectonic('enable');

    });

    parent_panel.mouseleave(function () {
        parent_panel.selectonic('disable');
    });

    child_panel.selectonic({
        multi: false,
        mouseMode: "standard",
        keyboard: true,
        focusBlur: true,
        keyboardMode: "toggle",
        focusOnHover: true,
        create: function () {
            this.selectonic('disable')
        },
        unselect: function (event, ui) {

        },
        select: function (event, ui) {

        },
    });

    child_panel.mouseenter(function () {
        child_panel.selectonic('enable');

    });

    child_panel.mouseleave(function () {
        child_panel.selectonic('disable');
    });

    panels.mouseenter(function () {
        panels.removeClass('active-focus');
        $(this).addClass('active-focus');
    });

    panels.mouseleave(function () {
        panels.removeClass('active-focus');
    });

    //code for age range selection with different className to avoid conflicts with PatienBenefitsGrouop ko code
    $('#ageRange a').on('click', function () {
        if ($(this).hasClass('selectedAge')) {
            $(this).removeClass('selectedAge');
        }
        else {
            $(this).addClass('selectedAge');
            $(this).siblings().removeClass('selectedAge');
        }
    });

    //code to not remove primary and secondary switches
    $('.secondaryInput input, #group3').on('click', function () {
        $('.preventionProfile').css('display', 'block');
    });

    $('#group3').on('click', function () {
        $('.question-heading').css('display', 'block');
    });

    $('#secondary').on('click', function () {
        $('.preventionProfile').css('display', 'block');
    });

    $('.hideScoreQuestion').on('click', function () {
        $('.casScroe').css('display', 'block');
    });

    $('#ageRange21TO39, #ageRangeGT75').on('click', function () {
        $('#showAdviceButton').css('display', 'block');
        //$('.preventionProfile, .selectPatient, .calculator_div, .question-heading').css('display', 'block');	 //.advice-bottom-btn - none
        $('.preventionProfile').css('display', 'block');	 //.advice-bottom-btn - none
    });

    $('#ageRange40TO75').on('click', function () {
        $('#showAdviceButton').css('display', 'none');
        $('.preventionProfile').css('display', 'none');
    });
    $('#ageRange40TO75').on('click', function () {
        $('.preventionProfile').css('display', 'block');
    });

    $(".head").click(function () {
        $(this).toggleClass("active");
        $(this).parent().find(".arrow").toggleClass("arrow-animate");
        $(this).parent().find(".content").slideToggle(280);
    });

    $('.title').click(function () {
        $(this).children().find('.arrow').toggleClass('arrow-animate');
        $('.head-title').children('h5').eq(0).find('.arrow').removeClass('arrow-animate');
    });

    $('.head-title').click(function () {
        $(this).children('h5').eq(0).find('.arrow').toggleClass('arrow-animate');
    });

    $('.head-title1').click(function () {
        $(this).children('h5').eq(0).find('.arrow').toggleClass('arrow-animate');
    });

    $('.head-title2').click(function () {
        $(this).children('h5').eq(0).find('.arrow').toggleClass('arrow-animate');
    });

    $('.address > h5').on('click', function () {
        $('.address .collapsable-panel').slideToggle();
    });

    $('.intensify > h5').on('click', function () {
        $('.intensify .collapsable-panel').slideToggle();
    });

    $('.increase > h5').on('click', function () {
        $('.increase .collapsable-panel').slideToggle();
    });

    $('.evaluate > h5').on('click', function () {
        $('.evaluate .collapsable-panel').slideToggle();
    });

    $('.control > h5').on('click', function () {
        $('.control .collapsable-panel').slideToggle();
    });

    $('.consider > h5').on('click', function () {
        $('.consider .collapsable-panel').slideToggle();
    });

    $(".cpAccordion1 > h5").on("click", function () {
        $(".cpAccordion1 .collapsable-panel").slideToggle();
    });

    $('.cpAccordion2 > h5').on('click', function () {
        $('.cpAccordion2 .collapsable-panel').slideToggle();
    });

    $(".cpAccordion3 > h5").on("click", function () {
        $(".cpAccordion3 .collapsable-panel").slideToggle();
    });

    $(".ezetimibe > h5").on("click", function () {
        $(".ezetimibe .panel").slideToggle();
    });

    $(".pcsk9 > h5").on("click", function () {
        $(".pcsk9 .panel").slideToggle();
    });

    $(".bempedoic > h5").on("click", function () {
        $(".bempedoic .panel").slideToggle();
    });

    $(".bempedoicezetimibe > h5").on("click", function () {
        $(".bempedoicezetimibe .panel").slideToggle();
    });

    $(".inclisiran > h5").on("click", function () {
        $(".inclisiran .panel").slideToggle();
    });

    $(".bas > h5").on("click", function () {
        $(".bas .panel").slideToggle();
    });

    $(".evinacumab > h5").on("click", function () {
        $(".evinacumab .panel").slideToggle();
    });

    $(".lomitapide > h5").on("click", function () {
        $(".lomitapide .panel").slideToggle();
    });

    $(".apheresis > h5").on("click", function () {
        $(".apheresis .panel").slideToggle();
    });

    $(".phytosterols > h5").on("click", function () {
        $(".phytosterols .panel").slideToggle();
    });

    $(".dietary_panel > h5").on("click", function () {
        $(".dietary_panel .panel").slideToggle();
    });

    $(".mipomersen > h5").on("click", function () {
        $(".mipomersen .panel").slideToggle();
    });

    $("input[type=radio][name=primary-switch-a]").change(function (evt) {
        appmodel.Form().TenYearRiskAction("cancel");
        if (appmodel.Form().asvd10yrrisk() !== evt.target.value) {
            appmodel.Form().asvd10yrrisk(evt.target.value);
        }
    });

    if (window.location.href === '#!/content/advice/') {
        $('#advice-Tab').addClass('selected active');
    }
});

ko.bindingHandlers.toggle = {
    'after': ['value', 'attr'],
    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This updates the model selection array when the DOM element is clicked
        function updateModel() {

            //supporting both binding to boolean property and arrays
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
                    //flip the true/false value of an observable
                    modelProperty(!modelProperty());
                } else {
                    //flip the true/false value of a property
                    viewModel[modelProperty] = !viewModel[modelProperty];
                }
            }
        };

        var modelProperty = valueAccessor();
        var underlyingValue = ko.utils.unwrapObservable(modelProperty);
        var isValueArray = underlyingValue instanceof Array;
        var isObservable = ko.isObservable(modelProperty);
        var isWritable = ko.isWriteableObservable(modelProperty);

        // Set up a computed to update the binding:
        ko.utils.registerEventHandler(element, "click", updateModel);
    }
};

var panelScrollTop = function (data, event) {
    var offset = $(event.currentTarget).parent().parent().offset().top - 50;
    var winOffset = $(window).scrollTop();
    var newScroll = (offset <= winOffset) ? offset : 0;
    $(window).scrollTop(newScroll);
};
var pageScrollTop = function (data, event) {
    $(window).scrollTop(0);
};

var panelVisibleToggle = function (data, event) {
    var parentSection = $(data).parents('section.group-section').attr('id');
    if ($('.accordion ' + data).hasClass('selected')) {
        $('.accordion ' + data).removeClass('selected');
        $('.accordion ' + data + ' .collapsable-panel').removeClass('selected');
    } else {
        $('.accordion ' + data).addClass('selected');
        $('.accordion ' + data + ' .collapsable-panel').addClass('selected');
    }
    var target = '.accordion ' + data + ' .collapsable-panel';
    $(target).slideToggle();


    if ($('#' + parentSection + ' .collapsable-panel.selected').length != 0) {
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


var OptimizeToggle = function (data, event) {
    var action = $(data).attr('data-action');
    var accr = $(data).attr('data-accr');
    var id = $(data).attr('id');
    if (action == 'expand') {
        $('#' + id).attr('data-action', 'collapse');
        $('#' + id).html('');
        $('#' + id).html('Collapse All');
        $('#' + accr + ' .accordion div').addClass('selected');
        $('#' + accr + ' .accordion .collapsable-panel').slideDown();
    } else {
        $('#' + id).attr('data-action', 'expand');
        $('#' + id).html('');
        $('#' + id).html('Expand All');
        $('#' + accr + ' .accordion div').removeClass('selected');
        $('#' + accr + ' .accordion .collapsable-panel').slideUp();
    }
};

var panelHide = function (data, event) {
    $(event.currentTarget).parents('.collapsable-panel').hide();
    $(event.currentTarget).parents('.selected').removeClass('selected');
};
var panelShow = function (data, event) {
    var target = data + ' .collapsable-panel'
    $(target).show();
};

var listchange = function (data, event) {
    var hash = location.hash;
    $('.split-sidebar .nav-list li').each(function () {
        var that = $(this);
        that[$('a', this).attr('href') === hash ? 'addClass' : 'removeClass']('selected');
    }
    );
};

var advicePanelHide = function () {
    var siblingParent = $(this).parents('.row.flip.column').prevAll('ul');
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

function resetTooltip() {
    if ($('.tooltip').attr('data-is-active')) {
        $('.tooltip').attr('data-is-active', false);
        $('.tooltip').attr('style', '');
        $('.tooltip').css('display', 'none');
    }
}

var PanelSelectorKO = function () {
    var self = this;
    self.repeatedItems = [
        { name: 'Freckle', selected: ko.observable(false) },
        { name: 'Beanstalk', selected: ko.observable(false) },
        { name: 'DropBox', selected: ko.observable(false) },
        { name: 'Postmark', selected: ko.observable(false) }
    ];
    self.repeatedItems2 = [
        { name: 'IOS', selected: ko.observable(false) },
        { name: 'Window Mobile', selected: ko.observable(false) },
        { name: 'Andriod', selected: ko.observable(false) },
        { name: 'RIM', selected: ko.observable(false) }
    ];
    self.hasAPI = ko.observableArray([]);
    self.hasFreePlan = ko.observableArray([]);
};
//var appmodel = new PanelSelectorKO();
// ko.applyBindings(appmodel);

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


function HideAccordion(id) {
    $('#' + id).find('.accordion').find('div.collapsable-panel').hide();
    $('#' + id).find('.accordion').find('div').removeClass('selected');
}

var tabchange = function (data) {
    var hash = location.hash;
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');

    if (hash.indexOf('advice') > -1 || hash.indexOf('statin') > -1 || hash.indexOf('clinician') > -1 || hash.indexOf('nonstatinagent') > -1) {
        $(document).foundation();
        var string = '#advice-Tab';
        $(string).addClass('selected active');
        $('.score-bar-holder').css('display', 'block');
    } else {
        $('.score-bar-holder').css('display', 'none');
    }

    if (hash.indexOf('advice') > -1 || hash.indexOf('calculator') > -1) {
        notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    }

    if (hash.indexOf('disclaimer') > -1)
        window.location.replace('../index.html#!/content/disclaimer/');
    else if (hash.indexOf('resources') > -1) {
        window.location.replace('../index.html#!/content/resources/');
    } else if (hash.indexOf('about') > -1) {
        window.location.replace('../index.html#!/content/about/');
    }

    setHeight();
    $('.tooltip').hide();
    $('#nonstatin .accordion div, #optimize .accordion div').removeClass('selected');
    $('#nonstatin .accordion .collapsable-panel, #optimize .accordion .collapsable-panel').slideUp();
    $('#optimize_action, #nonstatin_action').html('');
    $('#optimize_action, #nonstatin_action').html('Expand All');
    $('#optimize_action, #nonstatin_action').attr('data-action', 'expand');

};

window.onresize = function (event) {
    setHeight();
};
var pageScrollTop = function () {
    $(window).scrollTop(0);
};

dateFormatter = function (i) {
    if (i < 10) {
        i = '0' + i;
    } else {
        i = i;
    }
    return i;
};
function comorbiditiesInfo() {
    $('.overlay').hide();
}

function AddEvent(d) {
    d.addEventListener("paste", action.bind(d));
    d.addEventListener("keypress", action.bind(d));

    function action(event) {
        if (event.target.type == "number") {
            return preventAlphabets(event);
        }
    }
    function preventAlphabets(e) {
        if (e.type == "paste") {
            e.clipboardData = e.clipboardData || window.clipboardData;
            if (e.clipboardData.getData != undefined && isNaN(e.clipboardData.getData('text'))) {
                e.preventDefault();
                return false;
            }
            else {
                return true;
            }
        }
        if (e.type == "keypress") {
            var k = e.which;
            if (e.shiftKey) {
                e.preventDefault();
                return false;
            }
            else { //0=>48, 9=>57, .=>46, ,=>44, Backspace=>8, Enter=>13, Tab=>0
                if ((k >= 48 && k <= 57) || k == 46 || k == 44 || k == 8 || k == 13 || k == 0) {
                    return true;
                }
                else {
                    e.preventDefault();
                    return false;
                }
            }
            return true;
        }
    }
}

AddEvent(document);


$(document).ready(function () {

    if ('ontouchstart' in document.documentElement) {
        $('body').css('cursor', 'pointer');
    }

});
// Listen for resize changes
window.addEventListener("resize", function () {
    resetTooltip();
}, false);
window.addEventListener("scroll", resetTooltip);    //for web
window.addEventListener("touchstart", resetTooltip);//for touch devices
window.addEventListener("touchmove", resetTooltip);//for touch devices

//GDPR
function getCookieBanner() {
    var cookieValue = getCookie('ldlc-cookie');
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
    var cname = 'ldlc-cookie';
    var cvalue = new Date();
    var d = new Date();
    //expires in 10 days
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    CookieString = cname + '=' + cvalue.toUTCString() + ';' + expires + ';path=/;secure';
    document.cookie = CookieString;
    //remove banner
    removeBanner();
}
function removeBanner() {
    var elem = document.getElementById('cookie-banner');
    if (elem)
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

const closeMenuList = () => {
    //close left side panel if it is already open to avoid UI issues.
    var __ = $("#offCanvas");
    if (typeof __ != undefined && __.hasClass("is-open")) {
        __.removeClass("is-open");
        if (__.length > 0) {
            __ = __[0];
            __.setAttribute('aria-hidden', true);
        }
        
    }
        
    let _wrap = $(".off-canvas-wrapper-inner");
    if (typeof _wrap != undefined && _wrap.hasClass("is-open-left")) {
        _wrap.removeClass("is-open-left");
        _wrap.removeClass("is-off-canvas-open");
        
        setTimeout(() => {
            var _lipidpanel = $("#lipid_panel");
            _lipidpanel.css("top", '25%'), _lipidpanel.css("left", '30%');
        }, 200);
    }   
}

const notShowAgain = function () {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(tosKey, "true");
        appmodel.doNotShowAgainVisible(false);
    }
    return false;
};