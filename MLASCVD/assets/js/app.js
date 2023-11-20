var localStorageKey = "ASCVDnotshow";
var notShowAgainRaceKey = "ASCVDnotshowrace";
var scrollByDistance = 0;
var sticky1 = 0;
var sticky2 = 0;
var sticky3 = 0;
var isTabPressed = false;
var UUID;

//Cybage google analytics tracking id: UA-97031329-1
//var googleAnalyticsTrackingId ='UA-3507894-29';
var googleAnalyticsTrackingId = 'UA-3507894-43';
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);

var panelScrollTop = function (data, event) {
    var offset = $(event.currentTarget).parent().parent().offset().top - 50;
    var winOffset = $(window).scrollTop();
    var newScroll = (offset <= winOffset) ? offset : 0;
    $(window).scrollTop(newScroll);
};
var pageScrollTop = function () {
    $(window).scrollTop(0);
};
var makeForecastSticky = function () {
    sticky1 = $('#t1-score').offset().top;
    sticky2 = $('#t2-score').offset().top;
    sticky3 = $('#t3-score').offset().top;
    var diff1 = $('.sticky-holder')[0].clientHeight
        , diff2 = $('.sticky-holder')[0].clientHeight + $("#t1-score-banner")[0].clientHeight
        , diff3 = $('.sticky-holder')[0].clientHeight + $('#t1-score-banner')[0].clientHeight + $('#t2-score-banner')[0].clientHeight;
    
    var stickyClass = "stucked";
    diff2 += 0;
    diff3 += 0;
    if ($('#t1-score + div').css('display') !== "none" && $(window).scrollTop() >= sticky1 - diff1 ) {
        diff1 = $('.sticky-holder')[0].clientHeight;
        diff2 = $('.sticky-holder')[0].clientHeight + $("#t1-score-banner")[0].clientHeight + 0;
        diff3 = $('.sticky-holder')[0].clientHeight + $('#t1-score-banner')[0].clientHeight + $('#t2-score-banner')[0].clientHeight + 0;
        sticky2 = $('#t2-score').offset().top;
        sticky3 = $('#t3-score').offset().top;
        $('#t1-score').addClass('invisible');
        $('#t1-score-banner').addClass(stickyClass);
        $('#t1-score-banner').css("top", diff1 + "px");
    }
    else {
        diff1 = $('.sticky-holder')[0].clientHeight;
        diff2 = $('.sticky-holder')[0].clientHeight + $("#t1-score-banner")[0].clientHeight
            , diff3 = $('.sticky-holder')[0].clientHeight + $('#t1-score-banner')[0].clientHeight + $('#t2-score-banner')[0].clientHeight;
        sticky2 = $('#t2-score').offset().top;
        sticky3 = $('#t3-score').offset().top;
        $('#t1-score-banner').removeClass(stickyClass);
        $('#t1-score').removeClass('invisible');
    }
    if ($('#t2-score + div').css('display') !== "none" && $(window).scrollTop() >= sticky2 - diff2) {
        $('#t2-score').addClass('invisible');
        $('#t2-score-banner').addClass(stickyClass);
        $('#t2-score-banner').css("top", diff2 + "px");
    }
    else {
        $('#t2-score').removeClass('invisible');
        $('#t2-score-banner').removeClass(stickyClass);
    }
    if ($('#t3-score + div').css('display') !== "none" && $(window).scrollTop() >= sticky3 - diff3) {
        $('#t3-score').addClass('invisible');
        $('#t3-score-banner').addClass(stickyClass);
        $('#t3-score-banner').css("top", diff3 + "px");
    }
    else {
        $('#t3-score').removeClass('invisible');
        $('#t3-score-banner').removeClass(stickyClass);
    }
}
var resetForecastSticky = function (selector) {
    if(selector) {
        $(selector).removeClass('invisible');
        $(selector+'-banner').removeClass('stucked');
        //makeForecastSticky();
    }
    else {
        for (var i = 1; i <= 3; i++) {
            $('#t' + i + '-score-banner').removeClass("stucked");
            $('#t' + i + '-score').removeClass("invisible");
        }
    } 
    sticky1 = $('#t1-score').offset().top;
    sticky2 = $('#t2-score').offset().top;
    sticky3 = $('#t3-score').offset().top;
}

var panelHide = function (data, event) {
    $(event.currentTarget).parents('.collapsable-panel').hide();
    $(event.currentTarget).parents('.selected').removeClass('selected');
};
var panelShow = function (data) {
    var target = data + ' .collapsable-panel'
    $(target).show();
};
var listchange = function () {
    pageScrollTop();
    var hash = location.hash;
    $('#summaryTab li').removeClass('selected');
    $('#summaryTab li').each(function () {
        var that = $(this);
        if ($('a', this).attr('href') === hash) {
            that.addClass('selected');
        }
        else {
            that.removeClass('selected');
        }
    });
    $('.nav-list li').each(function () {
        var that = $(this);
        that[$('a', this).attr('href') === hash ? 'addClass' : 'removeClass']('selected');
    });
};
var notShowAgain = function () {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(localStorageKey, "true");
        appmodel.doNotShowAgainVisible(false);
    }
    return false;
}

var notShowAgainRace = function () {
    if(typeof (Storage) !== "undefined") {
        localStorage.setItem(notShowAgainRaceKey, "true");
        appmodel.doNotShowAgainRace(false);
    }
    return false;
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
    appmodel.viewportHeight(viewportheight);
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
    appmodel.viewportWidth(viewportwidth);
    return viewportwidth;
}
var changeSmokerValue = function () {
    if (appmodel.Form().Smoker.prototype.changed == 'yes') {
        appmodel.Form().Smoker('Former');
        appmodel.Form().Smoker.prototype.changed = 'no';
        appmodel.Form().QuiteSmokingMonths(appmodel.Form().Smoker.prototype.months)
    }
};
var getChartData = function () {
    var chartDataStructure = {};
    var chartData = [];
    var temp = {};
    var scatterSum = 0;
    var lastScatter = 0;
    var scatterArray = [];
    var primaryColor = '#198dae'; //Initial
    var secondaryColor = '#217289'; //Follow Up/Current   
    var tertiaryColor = '#c0e2f9'; //Optimal
    if (appmodel.Form().VisitType()) {
        var initialRisk = parseFloat(appmodel.Form().TenYearRiskInitial().replace('%', ''));
        var followUpRisk = parseFloat(appmodel.Form().TenYearRisk().replace('%', ''));
        var optimalFollowup = parseFloat(appmodel.Form().RiskFormula.optimalFollowUpRisk().replace('%', ''));
        if (initialRisk === followUpRisk === optimalFollowup) {
            chartData.push(chartRiskSeries('Current/Initial/Optimal', initialRisk, tertiaryColor));
        }
        else if (followUpRisk === optimalFollowup) {
            chartData.push(chartRiskSeries('Initial', initialRisk, primaryColor));
            chartData.push(chartRiskSeries('Current/ Optimal', followUpRisk, tertiaryColor));
        }
        else if (initialRisk === optimalFollowup) {
            chartData.push(chartRiskSeries('Initial/ Optimal', initialRisk, tertiaryColor));
            chartData.push(chartRiskSeries('Current', followUpRisk, secondaryColor));
        }
        else if (initialRisk === followUpRisk) {
            chartData.push(chartRiskSeries('Initial/ Current', initialRisk, primaryColor));
            chartData.push(chartRiskSeries('Optimal', optimalFollowup, tertiaryColor));
        }
        else {
            chartData.push(chartRiskSeries('Initial', initialRisk, primaryColor));
            chartData.push(chartRiskSeries('Current', followUpRisk, secondaryColor));
            chartData.push(chartRiskSeries('Optimal', optimalFollowup, tertiaryColor));
        }
    }
    else {
        var initialRisk = parseFloat(appmodel.Form().TenYearRisk().replace('%', ''));
        var optimalRisk = parseFloat(appmodel.Form().RiskFormula.optimalBaselineRisk().replace('%', ''));
        var forecastData = getForecastChartData(initialRisk);
        if (initialRisk === optimalRisk) {
            chartData.push(chartRiskSeries('Current/ Optimal', initialRisk, tertiaryColor));
        }
        else {
            chartData.push(chartRiskSeries('Current', initialRisk, secondaryColor))
            chartData.push(chartRiskSeries('Optimal', optimalRisk, tertiaryColor));
        }
        if (forecastData.length > 0) {
            $.grep(forecastData, function (item) {
                chartData.push(item);
            });
        }
    }
    var dictionary = {}
        , realChartData = []
        , duplicateForecasted = [];
    chartData.forEach(function (chartItem) {
        if (dictionary[chartItem.data[0]] === undefined) {
            realChartData.push(chartItem);
            dictionary[chartItem.data[0]] = "present";
        }
        else {
            duplicateForecasted.push(chartItem);
        }
    });
    chartData.forEach(function (chartItem) {
        if (chartItem.isForecast) {
            var scenarios = chartItem.name.split(",");
            chartItem.name = "";
            chartItem.treatmentDescription = "";
            scenarios.forEach(function (scenario) {
                var treatments = scenario.split("+");
                var abcsArray = [];
                treatments.forEach(function (treatment) {
                    treatment = treatment.trim();
                    if (treatment === "no&nbsp;smoking") {
                        //chartItem.treatmentDescription += "-Stopped smoking for at least 2 years.<br/>";
                        abcsArray.push("Sm");
                    }
                    else if (treatment === "aspirin") {
                        abcsArray.push("ASA");
                        //chartItem.treatmentDescription += "-Start or continue taking aspirin.<br/>";
                    }
                    else if (treatment === "BP meds") {
                        abcsArray.push("BP");
                        //chartItem.treatmentDescription += "-Start, Add or Intensify <br class='show-for-small-only' /> Blood Pressure medication.<br/>"
                    }
                    else if (treatment === "statin") {
                        abcsArray.push("Ch");
                        //chartItem.treatmentDescription += "-Manage cholesterol by starting <br class='show-for-small-only' /> or intensifying statin.<br/>";
                    }
                });
                abcsArray.sort();
                chartItem.name += "" + abcsArray.join(",") + ";<br>";
            });
            
            chartItem.name = chartItem.name.substring(0, chartItem.name.length - 5) + "*";
            chartItem.name = chartItem.name.replace(";", "");
        }
    });
    realChartData = realChartData.slice(0).sort(function (a, b) {
        return a.data[0] > b.data[0] ? -1 : 1
    });
    realChartData.splice(0, 0, chartRiskSeries('DONOTSHOW', parseFloat(realChartData[0].data[0]) / 3, "white"));
    realChartData.forEach(function (chartItem) {
        scatterSum += chartItem.data[0];
    });
    for (var i = realChartData.length - 1; i >= 0; i--) {
        var chartItem = realChartData[i];
        if (chartItem.name != "DONOTSHOW") {
            lastScatter += (chartItem.data[0] / scatterSum) * 100;
            scatterArray.push(chartScatterRiskSeries(chartItem.name, chartItem.treatmentDescription, lastScatter, chartItem.isForecast, chartItem.data[0]));
        }
    }
    duplicateForecasted.forEach(function (chartItem) {
        var data = chartItem.data[0];
        for (var i = 0; i < scatterArray.length; i++) {
            if (scatterArray[i].originalData === data) {
                scatterArray.push(chartScatterRiskSeries(chartItem.name, chartItem.treatmentDescription, scatterArray[i].data[0][1], true, scatterArray[i].originalData));
                break;
            }
        }
    });
    scatterArray.forEach(function (item) {
        realChartData.push(item);
    });
    return realChartData;
};
var plotGraph = function () {
    $(function () {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            }
            , credits: {
                enabled: false
            }
            , title: {
                text: ''
            }
            , xAxis: {
                categories: ['Estimated 10-Year ASCVD Risk']
                , visible: true
                , labels: {
                    enabled: true
                }
            }
            , legend: {
                enabled: false
            }
            , yAxis: {
                min: 0
                , title: {
                    text: 'some text'
                }
                , visible: false
            }
            , tooltip: {
                shared: false
                , enabled: false
                , useHTML: true
                , borderWidth: 0
                , borderColor: 'none'
                , shadow: 'none'
                , backgroundColor: "#217289"
                , formatter: function () {
                    if (this.x === -0.26) {
                        return "<div class='chart-tooltip'><span><b>Forecasted Risk:</b><span> " + this.series.userOptions.originalData + "% if patient <br><span style='word-wrap: break-word;'>" + this.series.userOptions.treatmentDescription + "</span></div>"
                    }
                    else if (this.x === 0.26) {
                        return "<div class='chart-tooltip'><span><b>" + this.series.name + " Risk:</b> " + this.series.userOptions.originalData + "%</span><div>";
                    }
                    else return false;
                }
            }
            , plotOptions: {
                column: {
                    stacking: 'percent'
                    , states: {
                        hover: {
                            enabled: false
                        }
                    }
                , }
                , scatter: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                , }
            }
            , series: getChartData()
        });
    });
};
var sticky = new Waypoint.Sticky({
    element: $('.sticky-holder')[0]
});
var remakeSticky = function () {
    sticky.destroy();
    sticky = new Waypoint.Sticky({
        element: $('.sticky-holder')[0]
    });
};
var resizeHeight = function () {
    var view = viewHeight();
    var width = viewWidth();
    var mh;
    mh = (view - 119);
    $(".fullscreen-spacer").css("min-height", mh);
    remakeSticky();
}
var therapyCheckboxLock = function () {
    var self = appmodel;
    appmodel.Form().TratmentGuidelineData.resetAll();
    if ((appmodel.Form().BloodPressure() <= 119 && !appmodel.Form().isDiabetic()) || (appmodel.Form().BloodPressure() <= 129 && appmodel.Form().isDiabetic())) {
        appmodel.FormData.treatmentOne[2].enable(false);
        appmodel.FormData.treatmentTwo[2].enable(false);
        appmodel.FormData.treatmentThree[2].enable(false);
        appmodel.Form().TratmentGuidelineData.isBPGuidelineVisible(true);
        var isBPMedication = ko.utils.arrayFirst(self.Form().TratmentOne_selected(), function (item) {
            return item.therapyText === 'BP Medication';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentOne_selected.remove(appmodel.FormData.treatmentOne[2]);
        }
        isBPMedication = ko.utils.arrayFirst(self.Form().TratmentTwo_selected(), function (item) {
            return item.therapyText === 'BP Medication';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentTwo_selected.remove(appmodel.FormData.treatmentTwo[2]);
        }
        isBPMedication = ko.utils.arrayFirst(self.Form().TratmentThree_selected(), function (item) {
            return item.therapyText === 'BP Medication';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentThree_selected.remove(appmodel.FormData.treatmentThree[2]);
        }
    }
    else {
        self.FormData.treatmentOne[2].enable(true);
        self.FormData.treatmentTwo[2].enable(true);
        self.FormData.treatmentThree[2].enable(true);
    }
    if (appmodel.Form().RiskFormula.ForecastRiskAspirin() == 'NA') {
        appmodel.FormData.treatmentOne[3].enable(false);
        appmodel.FormData.treatmentTwo[3].enable(false);
        appmodel.FormData.treatmentThree[3].enable(false);
        appmodel.Form().TratmentGuidelineData.isAspirinGuidelineVisible(true);
        var isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentOne_selected(), function (item) {
            return item.therapyText === 'Aspirin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentOne_selected.remove(appmodel.FormData.treatmentOne[3]);
        }
        isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentTwo_selected(), function (item) {
            return item.therapyText === 'Aspirin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentTwo_selected.remove(appmodel.FormData.treatmentTwo[3]);
        }
        isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentThree_selected(), function (item) {
            return item.therapyText === 'Aspirin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentThree_selected.remove(appmodel.FormData.treatmentThree[3]);
        }
    }
    else {
        appmodel.FormData.treatmentOne[3].enable(true);
        appmodel.FormData.treatmentTwo[3].enable(true);
        appmodel.FormData.treatmentThree[3].enable(true);
    }
    if (appmodel.Form().RiskFormula.ForecastRiskStatin() == 'NA') {
        appmodel.FormData.treatmentOne[1].enable(false);
        appmodel.FormData.treatmentTwo[1].enable(false);
        appmodel.FormData.treatmentThree[1].enable(false);
        appmodel.Form().TratmentGuidelineData.isStatinGuidelineVisible(true);
        var isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentOne_selected(), function (item) {
            return item.therapyText === 'Statin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentOne_selected.remove(appmodel.FormData.treatmentOne[1]);
        }
        isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentTwo_selected(), function (item) {
            return item.therapyText === 'Statin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentTwo_selected.remove(appmodel.FormData.treatmentTwo[1]);
        }
        isBPMedication = ko.utils.arrayFirst(appmodel.Form().TratmentThree_selected(), function (item) {
            return item.therapyText === 'Statin Therapy';
        });
        if (isBPMedication) {
            appmodel.Form().TratmentThree_selected.remove(appmodel.FormData.treatmentThree[1]);
        }
    }
    else {
        appmodel.FormData.treatmentOne[1].enable(true);
        appmodel.FormData.treatmentTwo[1].enable(true);
        appmodel.FormData.treatmentThree[1].enable(true);
    }
}
var tabchange = function (data) {
    changeSmokerValue();
    pageScrollTop();
    var hash = location.hash;
    resetForecastSticky();
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    appmodel.onForecastPage(false);
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');
    $(".score-bar-holder").show();
    if (hash.indexOf('advice') > -1) {
        //plotGraph(); // Suppressed for MLASCVD
       // $(".score-bar-holder").hide();
    }
    if (hash.indexOf('therapy') > -1) {
        appmodel.onForecastPage(true);
        $($(".sticky-holder").get(0)).css({
            position: ''
        });
        $($(".sticky-holder").get(0)).addClass("stuck");
        sticky1 = $('#t1-score').offset().top;
        sticky2 = $('#t2-score').offset().top;
        sticky3 = $('#t3-score').offset().top;
        therapyCheckboxLock();
    }
    $('.tooltip').hide();
    if (!appmodel.recommendationUnlock() && (hash.indexOf('advice') || hash.indexOf('therapy'))) {
        window.location.href = '#!/calculate/estimate/';
    }
    if (hash.indexOf('estimate') > -1 || hash.indexOf('therapy') > -1 || hash.indexOf('advice') > -1) {
        notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
    }
    resizeHeight();
    $('#optimize').foundation();
};


var footertabchange = function () {
    $(".score-bar-holder").hide();
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
    resizeHeight();
};
function resetToolTip() {
    if ($('.tooltip').attr('data-is-active')) {
        $('.tooltip').attr('data-is-active', false);
        $('.tooltip').attr('style', '');
        $('.tooltip').css('display', 'none');
    }
    $('.custom-tooltip').hide();
}
window.onresize = function () {
    resetForecastSticky();
    resizeHeight();
   // plotGraph();  // Suppressed for MLASCVD
    resetToolTip();
};
window.addEventListener('orientationchange', function() {
    setTimeout(resizeHeight,300);
});
var gotoCompare = function() {
    if(appmodel.Form().VisitType()) {
        window.scrollTo(0, $('#follow-up-card').offset().top - 200);
    }
    else {
        window.scrollTo(0, $('#compareQuestion').offset().top - 200);
    }
}
var errorTextBoxScroll = function () {
    var scrollTo = 0;
    var warningBox = $("div.question.warning");
    var errorBox = $("div.question.error");
    var warningBoxTop = $("#about-Tab").offset().top
        , errorBoxTop = $("#about-Tab").offset().top;
    if (warningBox.length == 0 && errorBox.length == 0) {
        return true;
    }
    if (warningBox.length != 0) {
        warningBoxTop = $(warningBox.get(0)).offset().top;
    }
    if (errorBox.length != 0) {
        errorBoxTop = $(errorBox.get(0)).offset().top;
    }
    if (warningBoxTop > errorBoxTop) {
        scrollTo = errorBoxTop;
        $(errorBox.get(0)).find("input").focus();
    }
    else {
        scrollTo = warningBoxTop;
        if (errorBox.length != 0 && warningBox.length != 0) {
            if ($(errorBox.get(0)).offset().left < $(warningBox.get(0)).offset().left) {
                $(errorBox.get(0)).find("input").focus();
            }
            else {
                $(warningBox.get(0)).find("input").focus();
            }
        }
        else $(warningBox.get(0)).find("input").focus();
    }
    if (!isNaN(scrollTo)) {
        $(window).scrollTop(scrollTo - 400);
    }
    return true;
};
var dateFormatter = function (i) {
    if (i < 10) {
        i = '0' + i;
    }
    else {
        return i;
    }
    return i;
};

$(window).scroll(function () {
    resetToolTip();
    if(appmodel){
        if (appmodel.onForecastPage()) {
            makeForecastSticky();
        }
    }    
});
window.addEventListener("touchstart", resetToolTip);
window.addEventListener("touchmove", resetToolTip);

$.each($('.fa.fa-info-circle'),function(index, element) {
    element.addEventListener('click',function(event) {
       event.stopPropagation();
       event.preventDefault();
    },true);
});

var panelVisibleToggle = function (data) {
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
    $(target).slideToggle();
    if ($('#' + parentSection + ' .collapsable-panel.selected').length != 0) {
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

//Highchart Code
function formattedHTML(isForecast, value, text) {
    var header = "<div style='margin-top: -15px; margin-left: #OFFSET#5px; word-wrap: break-word; margin-right: 5px;font-family: Open Sans, Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif;'>";
    var footer = "";
    if (isForecast) {
        header += "<span style='white-space: normal;'>"
        footer = value + "% &nbsp;" + text + "</span></div>";
    }
    else {
        header += "<span style='word-wrap: break-word;'>"
        footer = text + "&nbsp;" + value + "%</span></div>";
    }
    
    return header.replace('#OFFSET#',(viewWidth() <= 400 && isForecast) ? '-1' : '') + footer;
}
function chartRiskSeries(name, data, color) {
    return {
        name: name
        , data: [data]
        , color: color
        , dashStyle: 'Solid'
        , borderWidth: 0
        , borderColor: '#523c63'
        , isForecast: false, //to identify the type of data
    };
};
function chartScatterRiskSeries(name, treatmentDesc, data, isForecast, originalData) {
    var fontSize = viewWidth() <= 360 ? "9px" : "11px";
    var color = "#217289";
    var shape = isForecast ? "circle" : "square";
    var x = isForecast ? -0.29 : 0.29;
    var direction = isForecast ? "right" : "left";
    return {
        name: name
        , type: 'scatter'
        , data: [[x, data]]
        , isForecast: isForecast
        , originalData: originalData
        , treatmentDescription: treatmentDesc
        , marker: {
            radius: 5
            , fillColor: color
            , symbol: shape
        , }
        , dataLabels: {
            useHTML: true
            , formatter: function () {
                return formattedHTML(isForecast, this.series.userOptions.originalData, this.series.name);
            }
            , enabled: true
            , align: direction
            , verticalAlign: 'top'
            , style: {
                "color": "black"
                , "fontSize": fontSize
                , "fontWeight": "bold"
            }
        }
    };
}

function chartForecastSeries(name, data) {
    return {
        name: name.trim()
        , color: '#217289'
        , data: [parseFloat(data.replace('%', ''))]
        , dashStyle: 'ShortDot'
        , borderWidth: 2
        , isForecast: true
    };
};
var unifyTreatmentScenario = function () {
    var newTreatmentString = ""
        , dictionary = {};
    for (var i = 0; i < arguments.length; i++) {
        if (dictionary[arguments[i]] === undefined) {
            newTreatmentString += arguments[i] + ", ";
            dictionary[arguments[i]] = true;
        }
    }
    return newTreatmentString.substring(0, newTreatmentString.length - 2);
}
function getForecastChartData(currentRisk) {
    var temp = {};
    var chartData = [];
    var treatment1 = appmodel.Form().TreatmentOneScore();
    var treatment2 = appmodel.Form().TreatmentTwoScore();
    var treatment3 = appmodel.Form().TreatmentThreeScore();
    var treatmentCaption1 = appmodel.Form().TratmentOneChartCaption();
    var treatmentCaption2 = appmodel.Form().TratmentTwoChartCaption();
    var treatmentCaption3 = appmodel.Form().TratmentThreeChartCaption();
    treatment1 = parseFloat(treatment1) > currentRisk ? 'NA' : treatment1;
    treatment2 = parseFloat(treatment2) > currentRisk ? 'NA' : treatment2;
    treatment3 = parseFloat(treatment3) > currentRisk ? 'NA' : treatment3;
    if ((treatment1 === treatment2) && (treatment2 === treatment3) && (treatment1 !== '~%' && treatment1 !== 'NA')) {
        chartData.push(chartForecastSeries(unifyTreatmentScenario(treatmentCaption1, treatmentCaption2, treatmentCaption3), treatment1));
    }
    else if ((treatment1 === treatment2) && (treatment1 !== '~%' && treatment1 !== 'NA')) {
        chartData.push(chartForecastSeries(unifyTreatmentScenario(treatmentCaption1, treatmentCaption2), treatment1));
        if (treatment3 !== '~%' && treatment3 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption3, treatment3));
        }
    }
    else if ((treatment2 === treatment3) && (treatment2 !== '~%' && treatment2 !== 'NA')) {
        chartData.push(chartForecastSeries(unifyTreatmentScenario(treatmentCaption2, treatmentCaption3), treatment2));
        if (treatment1 !== '~%' && treatment1 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption1, treatment1));
        }
    }
    else if ((treatment1 === treatment3) && (treatment1 !== '~%' && treatment1 !== 'NA')) {
        chartData.push(chartForecastSeries(unifyTreatmentScenario(treatmentCaption1, treatmentCaption3), treatment1));
        if (treatment2 !== '~%' && treatment2 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption2, treatment2));
        }
    }
    else {
        if (treatment1 !== '~%' && treatment1 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption1, treatment1));
        }
        if (treatment2 !== '~%' && treatment2 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption2, treatment2));
        }
        if (treatment3 !== '~%' && treatment3 !== 'NA') {
            chartData.push(chartForecastSeries(treatmentCaption3, treatment3));
        }
    }
    return chartData;
}



var panzoom = function (currentPanzoomClass) {
    var $windowheight = $(window).height() - 50;
    var $scaleZoom = $('.parent.panzoom').width() / $('.panzoom-element img').width();
    var resultZoom = "'scale(" + $scaleZoom + ")'";
    var $panHolder = $(currentPanzoomClass + " .panzoom-element");
    var $panButtons = $(currentPanzoomClass + " .panzoom-buttons");
    $(currentPanzoomClass + ".parent.panzoom").height($windowheight);
    $panHolder.panzoom({
        $zoomIn: $panButtons.find(".zoom-in")
        , $zoomOut: $panButtons.find(".zoom-out")
        , $reset: $panButtons.find(".reset")
        , contain: 'invert'
    , });
};
ko.bindingHandlers["ui-accordion"] = {
    init: function (element, valueAccessor, binding, viewModel) {
        //var config = ko.utils.unwrapObservable(valueAccessor());
        $(element).addClass("accordion");
        var children = $(element).children();
        var bodies = $.map(children, function (child) {
            return $(child).children()[1];
        });
        var headers = $.map(children, function (child) {
            return $(child).children()[0];
        })
        $.each(children, function (childIndex, child) {
            var child = $(child);
            var header = $((child).children()[0]);
            header.addClass("toggle");
            var body = $((child).children()[1]);
            header.click(function () {
                $.each(headers, function (headerIndex, otherHeader) {
                    if (headerIndex !== otherHeader) {
                        $(otherHeader).parent().removeClass('selected');
                    }
                });
                $(this).parent().addClass('selected');
                // show this body
                body.slideDown();
                // hide all other bodies
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
            if (i === 0) {
                $(child).addClass('selected');
            }
        });
    }
    , update: function (element, valueAccessor) {}
};
ko.bindingHandlers.toggle = {
    
    'after': ['value', 'attr']
    , 'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var modelProperty = valueAccessor();
        var underlyingValue = ko.utils.unwrapObservable(modelProperty);
        var isValueArray = underlyingValue instanceof Array;
        var isObservable = ko.isObservable(modelProperty);
        var isWritable = ko.isWriteableObservable(modelProperty);
        // This updates the model selection array when the DOM element is clicked
        function updateModel() {
            //supporting both binding to boolean property and arrays
            if (isValueArray) {
                var index = ko.utils.arrayIndexOf(underlyingValue, viewModel);
                if (index > -1) {
                    underlyingValue.splice(index, 1);
                }
                else {
                    underlyingValue.push(viewModel);
                }
                if (isObservable) {
                    modelProperty.valueHasMutated();
                }
            }
            else {
                if (isObservable && isWritable) {
                    //flip the true/false value of an observable
                    modelProperty(!modelProperty());
                }
                else {
                    //flip the true/false value of a property
                    viewModel[modelProperty] = !viewModel[modelProperty];
                }
            }
        };
        
        // Set up a computed to update the binding:
        ko.utils.registerEventHandler(element, "click", updateModel);
    }
};
ko.bindingHandlers.htmlMarkup = {
    init: function () {
        return {
            controlsDescendantBindings: true
        };
    }
    , update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        ko.utils.setHtml(element, valueAccessor());
//        if(element.innerHTML.indexOf('fa-info-circle') > -1) {
//            $(element).foundation();
//        }
        ko.applyBindingsToDescendants(bindingContext, element);
    }
};
ko.bindingHandlers.addCSS = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var obj = valueAccessor();
        for(var prop in obj) {
            if(obj[prop]==true)
                $(element).addClass(prop);
            else
                $(element).removeClass(prop);
        }
        
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
        var obj = valueAccessor();
        for(var prop in obj) {
            if(obj[prop]==true)
                $(element).addClass(prop);
            else
                $(element).removeClass(prop);
        }
    }
}

//Expand all for Advice page
var OptimizeToggle = function (data) {
    var action = $(data).attr('data-action');
    var accr = $(data).attr('data-accr');
    var id = $(data).attr('id');
    if (action === 'expand') {
        $('#' + id).attr('data-action', 'collapse');
        $('#' + id).html('');
        $('#' + id).html('Collapse All');
        $('#' + accr + ' .accordion div').addClass('selected');
        $('#' + accr + ' .accordion .collapsable-panel').slideDown();
    }
    else {
        $('#' + id).attr('data-action', 'expand');
        $('#' + id).html('');
        $('#' + id).html('Expand All');
        $('#' + accr + ' .accordion div').removeClass('selected');
        $('#' + accr + ' .accordion .collapsable-panel').slideUp();
    }
};
var collapseConsiderationToggle = function() {
    $('.consideration').removeClass("selected");
    $('.consideration .collapsable-panel').css({display: 'none'});
}
$(document).ready(function () {
    appmodel.getUserLanguagePreference();
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(localStorageKey) !== null) {
            appmodel.doNotShowAgainVisible(false);
        }
        if(localStorage.getItem(notShowAgainRaceKey) !== null) {
            appmodel.doNotShowAgainRace(false);
        }
    }
    if (!window.location.search) $('.page-wrapper').find('input:text').val('');
    (function ($) {
        $.fn.enterAsTab = function (options) {
            var settings = $.extend({
                'allowSubmit': false
            }, options);
            try {
                $('input').keypress(function (event) {
                    if (settings.allowSubmit) {
                        var type = $(this).attr("type");
                        if (type === "submit") {
                            return true;
                        }
                    }
                    if (event.keyCode === 13) {
                        var inputs = $(this).parents("body").eq(0).find(":input,select,a,button");
                        var idx = inputs.index(this);
                        if (idx === inputs.length - 1) {
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
            catch (error) {}
        };
    })(jQuery);
    $("#body").enterAsTab({
        'allowSubmit': true
    });
    $("#ButtonGroup").selectonic({
        multi: false
        , mouseMode: "standard"
        , keyboard: false
        , focusBlur: true
        , keyboardMode: "toggle"
        , focusOnHover: true
    , });
    $("#Toggle").selectonic({
        multi: false
        , mouseMode: "standard"
        , keyboard: false
        , focusBlur: true
        , keyboardMode: "toggle"
        , focusOnHover: true
    , });
    var $holder = $("#PanelSelector")
        , panels = $holder.find('.panel-selector')
        , parent_panel = $holder.find('.parent ul')
        , child_panel = $holder.find('.child ul');
    parent_panel.selectonic({
        multi: false
        , mouseMode: "standard"
        , keyboard: true
        , focusBlur: true
        , keyboardMode: "toggle"
        , focusOnHover: true
        , create: function () {
            this.selectonic('disable')
        }
        , unselect: function (event, ui) {}
        , select: function (event, ui) {}
    , });
    parent_panel.mouseenter(function () {
        parent_panel.selectonic('enable');
    });
    parent_panel.mouseleave(function () {
        parent_panel.selectonic('disable');
    });
    child_panel.selectonic({
        multi: false
        , mouseMode: "standard"
        , keyboard: true
        , focusBlur: true
        , keyboardMode: "toggle"
        , focusOnHover: true
        , create: function () {
            this.selectonic('disable')
        }
        , unselect: function (event, ui) {}
        , select: function (event, ui) {}
    , });
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
    
    //Resize the page after every input
    $('#estimate-page input[type=number]').on('focusout', function(){
        //setTimeout(0) executes resizeHeight AFTER focusin/touchstart events are fired when user selects the next button
        setTimeout(resizeHeight, 0);
    });
    //If an anchor button gets focus, fire click event -- DESKTOP
    $('#estimate-page a.button.small').on('focusin', function() {
        if(!isTabPressed && !isNativeApplication) {
            $(this).click();
            $(this).blur();
        }
    });
    //If an anchor button gets focus, fire click event -- MOBILE
    $('#estimate-page a.button.small').on('touchstart', function() {
        $(this).click();
        $(this).blur();
    });
    
    $("[custom-tooltip-parent]").each(function (index, element) {
        var jqElement = $(element);
        var tooltip = jqElement.next();
        var assignTop = function () {
            if (tooltip.hasClass("top")) {
                tooltip.css("top", jqElement.position().top - 110);
            }
            if (tooltip.hasClass("bottom")) {
                tooltip.css("top", jqElement.position().top + jqElement.parent().height());
            }
            if (tooltip.hasClass("left")) {
                tooltip.css("top", jqElement.position().top);
            }
            tooltip.css("left", jqElement.offset().left);
        }
        tooltip.css({
            "left": jqElement.offset().left
            , "font-size": $("[role='tooltip']").css("font-size")
            , "font-family": $("[role='tooltip']").css("font-family")
            , "font-weight": $("[role='tooltip']").css("font-weight")
            , "word-break": "break-word"
        });
        jqElement.on("mouseenter", function () {
            if (jqElement.hasClass("disabled")) {
                assignTop();
                tooltip.show();
            }
        });
        jqElement.on("mouseleave", function () {
            tooltip.hide();
        });
        jqElement.on("click", function () {
            if (jqElement.hasClass("disabled")) {
                assignTop()
                tooltip.show();
            }
        });
    });
});
function printApp() {
    var printerStage, clone, datetime, patientInfo, patientHeader, userSelLang, timeStamp, tenYearRisk, lifeTimeRisk, optimalRisk,tenYearRiskScore,lifeTimeRiskScore, optimalRiskScore;
    
    userSelLang = appmodel.getValue(appmodel.mySelectedLanguage());
    printerStage = document.createElement("div");
    clone = null;
    datetime = new Date();
    const month = datetime.toLocaleString('en-GB', { month: 'long' });
    const monthArabic = datetime.toLocaleString('ar-SA',{ month: 'long' });
    const monthPortuguese = datetime.toLocaleString('pt-BR',{ month: 'long' });
    const monthGerman = datetime.toLocaleString('de-DE',{ month: 'long' });
    const monthIndonesian = datetime.toLocaleString('id-ID',{ month: 'long' });
    const monthSpanish = datetime.toLocaleString('es-ES',{ month: 'long' });
    //patientInfo = "ASCVD Risk #gender#/#age#y (generated on #timestamp#)";
    
    if(userSelLang == 'ar'){
        timeStamp = dateFormatter(datetime.getMinutes()) + ':' + dateFormatter(datetime.getHours()) + ' ' +datetime.getFullYear()+ ' ' +'\u202A'+ monthArabic +'\u202C' + ' ' + (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) +'\u202A';
    }else if(userSelLang == 'pt'){        
        timeStamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthPortuguese + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
    else if(userSelLang == 'es'){        
        timeStamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthSpanish + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
    else if(userSelLang == 'de'){        
        timeStamp = (datetime.getDate() <=9 ? '0' +datetime.getDate() : datetime.getDate()) + '.' + ' ' + monthGerman + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
    else if(userSelLang == 'in'){        
        timeStamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthIndonesian + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
    else{
        timeStamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + month + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());   
    }

    patientInfo = appmodel.FormData().emailTemplate.subjectLine;

    if(userSelLang == 'ar'){
        if(appmodel.Form().Sex() == 'Male'){
            patientInfo = patientInfo.replace('#gender#', ' م').replace('#timestamp#', timeStamp);
        }else{
            patientInfo = patientInfo.replace('#gender#', ' ف').replace('#timestamp#', timeStamp);
        }   
      //  patientInfo = patientInfo.replace('#gender#', appmodel.Form().Sex() == 'Male' ? 'M' : 'F').replace('#timestamp#', timeStamp).replace('#age#', appmodel.Form().Age());
                                                                                                   //          timestamp =  dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes()) + ' ' + (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' '+ '\u202C' + monthArabic + '\u202A' + ' ' + datetime.getFullYear();
    }else{
        patientInfo = patientInfo.replace('#gender#', appmodel.Form().Sex() == 'Male' ? 'M' : 'F').replace('#timestamp#', timeStamp);
    }
    
    patientInfo = patientInfo.replace('#age#', appmodel.Form().Age());
    //Patient Header "ASCVD Risk "ASCVD Risk M/55y (generated on 11/27/2017 13:03)"
    patientHeader = document.createElement("p");

    patientHeader.innerHTML = patientInfo;
    if($('.advice-page').hasClass('rtl')){
        $(patientHeader).addClass("row columns rtl");
    }else {
        $(patientHeader).addClass("row columns");
    }    
    printerStage.appendChild(patientHeader);
    
    

    //Header "Visit Summary"
    clone = document.getElementById("visit-summary-header").cloneNode(true);
    if($('.advice-page').hasClass('rtl')){
        $(clone).addClass("row columns rtl");
    }else {
        $(clone).addClass("row columns");
    }
    
    printerStage.appendChild(clone);
    
    if(userSelLang == "ar"){
        tenYearRiskScore = appmodel.Form().TenYearRisk().replace('%','');
        tenYearRiskScore.trim();
        tenYearRiskScore = '%' + tenYearRiskScore;
        tenYearRisk = tenYearRiskScore+ ' ' + appmodel.FormData().printRiskScores.tenyearRisk;
    }else {
        tenYearRisk = appmodel.FormData().emailTemplate.followuprisk.replace('#followuprisk#', appmodel.Form().TenYearRisk()).replace('%0D%0A','');
    }
    tenYearRiskWrapper = document.createElement("p");
    tenYearRiskWrapper.innerHTML = tenYearRisk;
    if($('.advice-page').hasClass('rtl')){
        $(tenYearRiskWrapper).addClass("row columns rtl");
    }else {
        $(tenYearRiskWrapper).addClass("row columns");
    }    
    printerStage.appendChild(tenYearRiskWrapper);
if(appmodel.Form().Age()>=20 && appmodel.Form().Age()<=59){
    if(userSelLang == "ar"){
        lifeTimeRiskScore = appmodel.Form().emailYourLifeTimeRisk().replace('%','');
        lifeTimeRiskScore.trim();
        lifeTimeRiskScore = '%' + lifeTimeRiskScore;
        lifeTimeRiskScore = lifeTimeRiskScore+ ' ' + appmodel.FormData().printRiskScores.lifetimeRisk;
    }else{
        lifeTimeRiskScore = appmodel.FormData().emailTemplate.lifetimerisk.replace("#lifetimerisk#", appmodel.Form().yourLifeTimeRisk()).replace('%0D%0A','');
    }    
    lifeTimeRiskWrapper = document.createElement("p");
    lifeTimeRiskWrapper.innerHTML = lifeTimeRiskScore;
    if($('.advice-page').hasClass('rtl')){
        $(lifeTimeRiskWrapper).addClass("row columns rtl");
    }else {
        $(lifeTimeRiskWrapper).addClass("row columns");
    }     
    printerStage.appendChild(lifeTimeRiskWrapper);
}
    if(userSelLang == "ar"){
        optimalRiskScore = appmodel.Form().VisitType()==false ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace('%','') : appmodel.Form().RiskFormula.optimalFollowUpRisk().replace('%','');
        optimalRiskScore.trim();
        optimalRiskScore = '%' + optimalRiskScore;
        optimalRiskScore = optimalRiskScore+ ' ' + appmodel.FormData().printRiskScores.optimalRisk;
    } else {
        optimalRiskScore = appmodel.FormData().emailTemplate.optimalrisk.replace("#optimalrisk#", (appmodel.Form().VisitType()==false) ? appmodel.Form().RiskFormula.optimalBaselineRisk() : appmodel.Form().RiskFormula.optimalFollowUpRisk()).replace('%0D%0A','').replace('%0D%0A','');
    }
    
    optimalRiskWrapper = document.createElement("p");
    optimalRiskWrapper.innerHTML = optimalRiskScore;
    if($('.advice-page').hasClass('rtl')){
        $(optimalRiskWrapper).addClass("row columns rtl");
    }else {
        $(optimalRiskWrapper).addClass("row columns");
    }    
    printerStage.appendChild(optimalRiskWrapper);

    //Graph Card
    //printerStage.appendChild(document.getElementById("graph-card").cloneNode(true));
    
    //Inputs Card
    clone = document.getElementById("summary-inputs").cloneNode(true);
    $(clone).removeClass("column large-5 medium-5 small-12");
    //$(clone).addClass("row columns");

    if($('.advice-page').hasClass('rtl')){
        $(clone).addClass("row columns rtl");
    }else {
        $(clone).addClass("row columns");
    }
    printerStage.appendChild(clone);
    
    //Advice Header
    //clone = document.getElementById("visit-summary-header").cloneNode(true);
    //$(clone).find("span").html("Treatment Advice");
    //$(clone).find("span.sub-line").html("The advice below represents suggestions for clinicians on lowering a patient’s ASCVD risk, based on ACC/AHA clinical policy (see Resources/References in the app).");
    //$(clone).addClass("row columns");
    //printerStage.appendChild(clone);
    
    
    //Advice Card
    //clone = document.getElementById("advice-card").cloneNode(true);
    //$(clone).removeClass("collapsable-panel");
    //$(clone).addClass("row columns");
    //$(clone).css("display","block");
    //printerStage.appendChild(clone);

    //Disclaimer notice
    clone = document.getElementById("disclaimer-print").cloneNode(true);
    //$(clone).addClass("row columns");
    if($('.advice-page').hasClass('rtl')){
        $(clone).addClass("row columns rtl");
        $(clone).attr("dir", "rtl");
    }else {
        $(clone).addClass("row columns");
    }
    printerStage.appendChild(clone);
    
    //Disclaimer notice 2
   // clone = document.getElementById("disclaimer-print-2").cloneNode(true);
    //$(clone).addClass("row columns");
    //printerStage.appendChild(clone);
    
    var _printer = new Printer();
    _printer.print(printerStage, _printer.printType.paper);
}
function AddEvent(d) {
    d.addEventListener("paste", action.bind(d));
    d.addEventListener("keypress", action.bind(d));
    d.addEventListener("keydown", function(event) {
        if(event.which === 9 || event.which === 13)
            isTabPressed = true;
        else
            isTabPressed = false;
    });
    
    function action(event) {
        if(event.target.type=="number") {
            return preventAlphabets(event);
        }
    }
    function preventAlphabets(e) {
        if(e.type=="paste") {
            e.clipboardData = e.clipboardData || window.clipboardData;
            if(e.clipboardData.getData!=undefined && isNaN(e.clipboardData.getData('text'))) {
                e.preventDefault();
                return false;
            }
            else {
                return true;
            }
        }
        if(e.type=="keypress") {
            isTabPressed = false;
            var k = e.which;
            if(e.shiftKey) {
                e.preventDefault();
                return false;
            }
            else { //0=>48, 9=>57, .=>46, ,=>44, Backspace=>8, Enter=>13, Tab=>0
                if((k >= 48 && k <= 57) || k==46 || k==44 || k==8 || k==13 || k==0) {
                    return true;
                }
                else {
                    e.preventDefault();
                    return false;
                }
            }
        }
    }
}
AddEvent(document);

/*var observeDOM = (function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  return function( obj, callback ){
    if( !obj || !obj.nodeType === 1 ) return; // validation

    if( MutationObserver ){
      // define a new observer
      var obs = new MutationObserver(function(mutations, observer){
        if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
          callback( mutations[0] );
      });
      // have the observer observe foo for changes in children
      obs.observe( obj, { childList:true, subtree:true });
    }
    
    else if( window.addEventListener ){
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  }
})();
observeDOM($('.score-bar-holder')[0], function(mut) {
    console.log('score bar changed', mut);
})*/


function getCookieBanner() {
	var cookieValue = getCookie('ack-cookie-banner');
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
	var cname = 'ack-cookie-banner';
	var cvalue = new Date();
	var d = new Date();
	//expires in 10 days
	d.setTime(d.getTime() + (10 * 224 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();1
	CookieString = cname + '=' + cvalue.toUTCString() + ';' + expires + ';path=/'; + "secure; httpOnly" 
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
        setBannerText();
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