/*!
Appviewmodel JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd.
This file contains application model.
Licensed under the Cybage license.
*/
/**
 * this function is used to intialize the data model(view model), form data(application related data)
 */

function viewModel() {
    var self = this;
    self.FormData = formdata;
    self.Form = ko.observable(new formObject());
    self.Reset = function () {
        self.Form(new formObject());
        _utils.loadedOldSession = false;
        $(document).foundation('tooltip', 'reflow');
    };
	self.criticalNotification = ko.observableArray([]);
	self.appStoreURL = ko.observable(notification.appStoreURL);
	self.notificationData = ko.observableArray([]);
}
var apppathname = location.pathname;
var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);
// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path;
if (apppathname.indexOf('emailresult') !== -1) {
    notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
	path = '#!/content/';
}else{
	path = '#!/content/calculator/';
}
var params = pager.page.route[pager.page.route.length - 1];
path += params;
pager.navigate(path);
$('#calculator-Tab').addClass('selected active');
/**
 * this function contains the data binding properties,functions that are used throughout the application.
 */

function formObject() {
    var self = this;
    self.hasContinue = ko.observable(false);
    self.hasAdvice = ko.observable(true);
    self.hasCMSAdvice = ko.observable(true)
    self.hasNoAdvice = ko.observable(true);
    self.isUnknown = ko.observable(false);
    self.tabNavigation = function (data) {
		var hash = location.pathname;
        $(window).scrollTop($('body').offset().top);
		if (hash.indexOf('emailresult') === -1) {
			if (data === 'advice' && !self.hasAdvice()) {
				window.location.href = '#!/content/advice/';
			}else if (data === 'calculator') {
				window.location.href = '#!/content/calculator/';
			}
		}		
    };
    self.closeWarning = function () {
        self.isUnknown(false);
        $('.alert-box').removeClass('alert-close');
        return false;
    }
    self.scoreIndicator = ko.observable();
    self.scoreIndicatorTooltip = ko.observable();
    self.intendedUse = ko.observable();
    self.tabHeader = ko.observable();
    self.indicationDetails = ko.observable();
    self.cmsIndicationId = ko.observable();
    self.aucIndicationId = ko.observable();
    self.indicationCSS = ko.observable();
    self.adviceDisclaimerText = ko.observable();
    self.scoreIndicator.subscribe(function () {
        if (self.scoreIndicator() === appmodel.FormData.scoreIndicator.MaybeAppropriate) {
            self.indicationCSS(appmodel.FormData.indicatorCSS.MaybeAppropriate);
        } else if (self.scoreIndicator() === appmodel.FormData.scoreIndicator.RarelyAppropriate) {
            self.indicationCSS(appmodel.FormData.indicatorCSS.RarelyAppropriate);
        } else if (self.scoreIndicator() === appmodel.FormData.scoreIndicator.Appropriate) {
            self.indicationCSS(appmodel.FormData.indicatorCSS.Appropriate);
        } else if (self.scoreIndicator() === appmodel.FormData.scoreIndicator.NotApplicable) {
            self.indicationCSS(appmodel.FormData.indicatorCSS.NotApplicable);
            self.scoreIndicator(appmodel.FormData.scoreIndicator.NotApplicable);
        } else if (self.scoreIndicator() === appmodel.FormData.scoreIndicator.Indeterminante) {
            self.indicationCSS(appmodel.FormData.indicatorCSS.Indeterminante);
            self.scoreIndicator(appmodel.FormData.scoreIndicator.Indeterminante);
        }
        var resultData = $.grep(userActivity, function (items) {
            return items.questionLabel.toLowerCase().indexOf('intended use') > -1;
        });
        if (resultData.length > 0) {
            if (resultData[0].answer[0].answerLabel.toLowerCase().indexOf('primary prevention') > -1) {
                self.intendedUse(appmodel.FormData.intendedUse.Primary);
                self.tabHeader(appmodel.FormData.tabHeaderText.ICD);
            }
            else if (resultData[0].answer[0].answerLabel.toLowerCase().indexOf('secondary prevention') > -1) {
                self.intendedUse(appmodel.FormData.intendedUse.Secondary);
                self.tabHeader(appmodel.FormData.tabHeaderText.ICD);
            }
            else if (resultData[0].answer[0].answerLabel.toLowerCase().indexOf('dual-chamber') > -1) {
                self.intendedUse(appmodel.FormData.intendedUse.Dual);
                self.tabHeader(appmodel.FormData.tabHeaderText.ICD);
            }
            else if (resultData[0].answer[0].answerLabel.toLowerCase().indexOf('crt - no prior implant') > -1) {
                self.intendedUse(appmodel.FormData.intendedUse.CRT);
                self.tabHeader(appmodel.FormData.tabHeaderText.CRT);
            }
            else if (resultData[0].answer[0].answerLabel.toLowerCase().indexOf('generator replacement') > -1) {
                self.intendedUse(appmodel.FormData.intendedUse.Generator);
                self.tabHeader(appmodel.FormData.tabHeaderText.Generator);
            }
        }
        var tool = $('#scoreTooltip i.has-tip').attr('aria-describedby');
        $('#' + tool).html(self.scoreIndicatorTooltip());
    });
    self.recommendationMessage = ko.observableArray([]);
    //Added for testing the paths
    self.AvailableSets = ko.observable();
    self.SelectedSet = ko.observable();
    self.ResultData = ko.observableArray([]);
    self.ProcessLog = ko.observableArray([]);
    // Unit of Measure - System is defaulted to false which equals US units
    self.UnitOfMeasure = ko.observable(false);
    self.UOMChange = function (newValue) {
        var type = (newValue == true) ? 'si' : 'us';
        //var hdl = self.HDLCholesterolValue();
        //var totc = self.TotalCholesterolValue();
        //var ldl = self.LDLCholesterolValue();

        //var bhdl = self.BaselineHDLCholesterolValue();
        //var btotc = self.BaselineTotalCholesterolValue();
        //var bldl = self.BaselineLDLCholesterolValue();
        if (newValue) {
            for (var prop in self.ValueQuestions) {
                var conversionFactor = parseFloat($("[data-guid='" + prop + "']").data("coversion"));
                var step = parseFloat($("[data-guid='" + prop + "']").attr("step"));
                var numberOfDecimals = -1;
                while (step != 1) {
                    numberOfDecimals++;
                    step *= 10;
                }
                numberOfDecimals++;
                self.ValueQuestions[prop]((self.ValueQuestions[prop]() * conversionFactor).toFixed(step));
            }
            //if (hdl != null && hdl != "" && isNaN(hdl) == false)
            //    self.HDLCholesterolValue((hdl * m).toFixed(3));
            //if (totc != null && totc != "" && isNaN(totc) == false)
            //    self.TotalCholesterolValue((totc * m).toFixed(3));
            //if (ldl != null && ldl != "" && isNaN(ldl) == false)
            //    self.LDLCholesterolValue((ldl * m).toFixed(3));

            //if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
            //    self.BaselineHDLCholesterolValue((bhdl * m).toFixed(3));
            //if (btotc != null && btotc != "" && isNaN(btotc) == false)
            //    self.BaselineTotalCholesterolValue((btotc * m).toFixed(3));
            //if (bldl != null && bldl != "" && isNaN(bldl) == false)
            //    self.BaselineLDLCholesterolValue((bldl * m).toFixed(3));

        } else {
            for (var prop in self.ValueQuestions) {
                var conversionFactor = parseFloat($("[data-guid='" + prop + "']").data("coversion"));
                var step = parseFloat($("[data-guid='" + prop + "']").attr("step"));
                var numberOfDecimals = -1;
                while (step != 1) {
                    numberOfDecimals++;
                    step *= 10;
                }
                numberOfDecimals++;
                self.ValueQuestions[prop]((self.ValueQuestions[prop]() / conversionFactor).toFixed(step));
            }
            //if (hdl != null && hdl != "" && isNaN(hdl) == false)
            //    self.HDLCholesterolValue((hdl / m).toFixed(0));
            //if (totc != null && totc != "" && isNaN(totc) == false)
            //    self.TotalCholesterolValue((totc / m).toFixed(0));
            //if (ldl != null && ldl != "" && isNaN(ldl) == false)
            //    self.LDLCholesterolValue((ldl / m).toFixed(0));

            //if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
            //    self.BaselineHDLCholesterolValue((bhdl / m).toFixed(0));
            //if (btotc != null && btotc != "" && isNaN(btotc) == false)
            //    self.BaselineTotalCholesterolValue((btotc / m).toFixed(0));
            //if (bldl != null && bldl != "" && isNaN(bldl) == false)
            //    self.BaselineLDLCholesterolValue((bldl / m).toFixed(0));
        }
    };
    self.UOMAction = function () {
        self.UOMChange(self.UnitOfMeasure());
        return true;
    };
    self.ValueQuestions = {}
    //Make new bindings
    for (var prop in valueQuestionVariables) {
        self.ValueQuestions[valueQuestionVariables[prop]] = ko.observable();
       // $("[data-guid='" + valueQuestionVariables[prop] + "']").data("bind", "value: Form()." + valueQuestionVariables[prop]);
    }
}
