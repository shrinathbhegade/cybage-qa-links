/*!
Appviewmodel JS
Copyright � 2015-2016 Cybage Software Pvt. Ltd.
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
        $(document).foundation('tooltip', 'reflow');
    };
    self.doNotShowAgainVisible = ko.observable(true);
}

var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);
// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path = '#!/content/calculator/';
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
        $(window).scrollTop($('body').offset().top);
        if (data === 'advice' && !self.hasAdvice()) {
            window.location.href = '#!/content/advice/auc_for_icd/';
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
}
