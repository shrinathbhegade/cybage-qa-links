var UUID;
var localStorageKey = "ASCVDnotshow";
var gaWrapper = function (send, event, category, action, label) { };
var isNativeApplication = (document.URL.indexOf("http") === -1 && document.URL.indexOf("https") === -1);
var isTabPressed = false;

$(window).on('load', () => {
  appmodel.hideSplash(true);  
});

$(function () {
  $("#accordion").accordion();
  $("#accordion2").accordion();
  //$("#chosen").chosen({width: "100%"});
  $("#chosenSingle").chosen({ width: "100%" });
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
function comorbiditiesInfo() {
  $('.overlay').hide();
}

var panelScrollTop = function (data, event) {
  var offset = $(event.currentTarget).parent().parent().offset().top - 50;
  var winOffset = $(window).scrollTop();
  var newScroll = (offset <= winOffset) ? offset : 0;
  $(window).scrollTop(newScroll);
};
var pageScrollTop = function (data, event) {
  $(window).scrollTop(0);
}
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

/*function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode != 46 && charCode != 44 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}*/
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
var sticky;

// function remakeSticky() {
//    // sticky.destroy();
//     sticky = new Waypoint.Sticky({
//         element: $('.sticky-holder')[0]
//     });
// }
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
  appmodel.viewportWidth(viewportwidth);
  return viewportwidth;
}
var showInfo1 = function () {
  var x = document.getElementById("advice_table_1");
  var y = document.getElementById("more1");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";

  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo2 = function () {
  var x = document.getElementById("advice_table_2");
  var y = document.getElementById("more2");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo3 = function () {
  var x = document.getElementById("advice_table_3");
  var y = document.getElementById("more3");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo4 = function () {
  var x = document.getElementById("advice_table_4");
  var y = document.getElementById("more4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo5 = function () {
  var x = document.getElementById("advice_table_5");
  var y = document.getElementById("more5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo6 = function () {
  var x = document.getElementById("advice_table_6");
  var y = document.getElementById("more6");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo7 = function () {
  var x = document.getElementById("advice_table_7");
  var y = document.getElementById("more7");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}
var showInfo8 = function () {
  var x = document.getElementById("advice_table_8");
  var y = document.getElementById("more8");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo9 = function () {
  var x = document.getElementById("advice_table_9");
  var y = document.getElementById("more9");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo10 = function () {
  var x = document.getElementById("advice_table_10");
  var y = document.getElementById("more10");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo11 = function () {
  var x = document.getElementById("advice_table_11");
  var y = document.getElementById("more11");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo20 = function () {
  var x = document.getElementById("advice_table_20");
  var y = document.getElementById("more20");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo21 = function () {
  var x = document.getElementById("advice_table_21");
  var y = document.getElementById("more21");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var showInfo22 = function () {
  var x = document.getElementById("advice_table_22");
  var y = document.getElementById("more22");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
  y.innerHTML === "Show More Information"
  if (x.style.display === "block") {
    y.innerHTML = "Hide Information";
  } else {
    y.innerHTML = "Show More Information";
  }
}

var notShowAgain = function () {
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem(localStorageKey, "true");
    appmodel.doNotShowAgainVisible(false);
  }
  return false;
}

var pageScrollBottom = function (data, event) {
  $(window).scrollTop(80);
}

var setHeight = function () {
  var view = viewHeight();
  var mh;
  mh = (view - $('header').outerHeight() - $('footer').outerHeight());
  mh = mh + 1;
  $(".fullscreen-spacer").css("min-height", mh);

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
  appmodel.viewportWidth(viewportwidth);
  return viewportwidth;
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

var footertabchange = function () {

  var hash = location.hash;
  $('.header ul li').removeClass('selected');
  $('.nav-list li').removeClass('selected');
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
};
var nestedPanelVisibleToggle = function (data) {
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


window.onresize = function (event) {
  setHeight();
};
var pageScrollTop = function () {
  $(window).scrollTop(0);
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
function printApp() {
  var printerStage, clone, datetime, patientInfo, patientHeader;

  printerStage = document.createElement("div");
  clone = null;
  datetime = new Date();
  patientInfo = "Hypertriglyceridemia App Advice (generated on #timestamp#)";
  patientInfo = patientInfo.replace('#timestamp#', (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes()));

  //Patient Header "Advice (generated on 11/27/2017 13:03)"
  patientHeader = document.createElement("p");
  patientHeader.innerHTML = patientInfo;
  $(patientHeader).addClass("row columns");
  printerStage.appendChild(patientHeader);

  //Header "Advice"
  clone = document.getElementById("advice_header").cloneNode(true);
  $(clone).addClass("row columns");
  printerStage.appendChild(clone);


  //Advice Card
  clone = document.getElementById("optimize").cloneNode(true);
  $(clone).removeClass("collapsable-panel");
  $(clone).addClass("row columns");
  $(clone).css("display", "block");
  printerStage.appendChild(clone);

  //Inputs Card
  clone = document.getElementById("summary-inputs").cloneNode(true);
  $(clone).removeClass("column large-5 medium-5 small-12");
  $(clone).addClass("row columns");
  printerStage.appendChild(clone);

  var _printer = new Printer();
  _printer.print(printerStage, _printer.printType.paper);
}
var tabchange = function (data, event) {
  $('.header .tabs li').removeClass('selected');
  $('.footer .tabs li').removeClass('selected');
  var string = '#' + data.page.currentId + '-Tab';
  $(string).addClass('selected');

  //call notification
  notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
}
var loadTopofPage = function (data, event) {
  $("html, body").animate({
    scrollTop: 0
  });
}

function goBack() {
  window.history.back()
}
var panelScrollTop = function (data, event) {
  var offset = $(event.currentTarget).parent().parent().offset().top - 50;
  var winOffset = $(window).scrollTop();
  var newScroll = (offset <= winOffset) ? offset : 0;
  $(window).scrollTop(newScroll);
};
var pageScrollTop = function (data, event) {
  $(window).scrollTop(0);
}
self.sendEmail = function () {
  var breakline = '%0D%0A';
  var linebreak = "%0D%0A";
  var doublelinebreak = linebreak + linebreak;
  var emailText, subject, message;
  var datetime = new Date();
  var timestamp = (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
  emailText = self.Form().FormData().emailTemplate;
  subject = emailText.subjectLine;
  subject = subject.replace('#timestamp#', timestamp);
  message = emailText.headLine;
  message += groupAdvice;
  message += doublelinebreak;
  message += doublelinebreak;
  message += emailText.disclaimer;

  if (isNativeApplication) {
    cordova.plugins.email.open({
      to: '',
      cc: '',
      bcc: '',
      subject: subject,
      body: decodeURI(message.replace(new RegExp('%0D%0A', 'g'), '<br>')),
      isHtml: true
    });
  } else {
    mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
    window.location.href = mymail;
  }
};

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
  setHeight();
  if ('ontouchstart' in document.documentElement) {
    $('body').css('cursor', 'pointer');
  }
  if (typeof (Storage) !== "undefined") {
    if (localStorage.getItem(localStorageKey) !== null) {
      appmodel.doNotShowAgainVisible(false);
    }
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
  var cookieValue = getCookie('hypert-cookie');
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
  var cname = 'hypert-cookie';
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

$('input[type=radio][name=primary-switch-a]').change(function (evt) {
  appmodel.Form().TenYearRiskAction('cancel');
  appmodel.Form().asvd10yrrisk(evt.target.value);
});