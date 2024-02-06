isNativeApplication = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
/* ko.extenders.required function is for validate inputs fields as per requirement.
 * @param target: bind input which required validation.
 * @param overrideMessage: override default error/warning message.
 */
var appmodel;

function formObject(parent) {
    var self = this;
    self.$debug = false;
    self.RiskFormula = new Formula(parent);
    self.showPatientDetails = ko.observable(false);
    self.UnitOfMeasureType = ko.observable('mg/dL');
    self.ascvd = ko.observable('');
    self.Age = ko.observable();
    self.triglyceridesRange = ko.observable('');
    self.triglyceridesRangeValue = ko.observable('');
    self.ldlcRange = ko.observable('');
    self.ldlcRangeValue = ko.observable('');
    self.asvd10yrrisk = ko.observable('');
    self.asvd10yrriskValue = ko.observable('');
    self.showAdviceBtn = ko.observable(false);
    self.highRisk = ko.observable('');
    self.showAdviceContent = ko.observable('');
    self.showWarningMsg = ko.observable(false);
    self.showDoneBtn = ko.observable(false);

    // Input Observables
    self.Race = ko.observable();
    self.Sex = ko.observable();
    self.HDLCholesterolValue = ko.observable();
    self.TotalCholesterolValue = ko.observable();
    self.LDLCholesterolValue = ko.observable();
    self.BloodPressure = ko.observable();
    self.DBloodPressure = ko.observable();
    self.Diabetic = ko.observable();
    self.Smoker = ko.observable();
    self.Hypertension = ko.observable();
    self.VisitType = ko.observable(false);
    self.VisitTypeUI = ko.observable(undefined);
    self.BaselineSmoker = ko.observable();
    self.BaselineHypertension = ko.observable();

    //Treatment scenario
    self.isTreatmentOne = ko.observable(true);
    self.isTreatmentTwo = ko.observable(false);
    self.isTreatmentThree = ko.observable(false);
    // Unit of Measure - System is defaulted to false which equals US units
    self.UnitOfMeasure = ko.observable(false).extend({
        rateLimit: 10
    }); //rateLimit added because of compare value resetting due to synchronous knockout value update
    self.UOMChange = function (newValue) {
        var hdl = self.HDLCholesterolValue();
        var totc = self.TotalCholesterolValue();
        var ldl = self.LDLCholesterolValue();

        var bhdl = self.BaselineHDLCholesterolValue();
        var btotc = self.BaselineTotalCholesterolValue();
        var bldl = self.BaselineLDLCholesterolValue();
        var m = .0259;
        if (newValue) {
            if (hdl != null && hdl != "" && isNaN(hdl) == false)
                self.HDLCholesterolValue((hdl * m).toFixed(3));
            if (totc != null && totc != "" && isNaN(totc) == false)
                self.TotalCholesterolValue((totc * m).toFixed(3));
            if (ldl != null && ldl != "" && isNaN(ldl) == false)
                self.LDLCholesterolValue((ldl * m).toFixed(3));

            if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
                self.BaselineHDLCholesterolValue((bhdl * m).toFixed(3));
            if (btotc != null && btotc != "" && isNaN(btotc) == false)
                self.BaselineTotalCholesterolValue((btotc * m).toFixed(3));
            if (bldl != null && bldl != "" && isNaN(bldl) == false)
                self.BaselineLDLCholesterolValue((bldl * m).toFixed(3));

        } else {
            if (hdl != null && hdl != "" && isNaN(hdl) == false)
                self.HDLCholesterolValue((hdl / m).toFixed(0));
            if (totc != null && totc != "" && isNaN(totc) == false)
                self.TotalCholesterolValue((totc / m).toFixed(0));
            if (ldl != null && ldl != "" && isNaN(ldl) == false)
                self.LDLCholesterolValue((ldl / m).toFixed(0));

            if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
                self.BaselineHDLCholesterolValue((bhdl / m).toFixed(0));
            if (btotc != null && btotc != "" && isNaN(btotc) == false)
                self.BaselineTotalCholesterolValue((btotc / m).toFixed(0));
            if (bldl != null && bldl != "" && isNaN(bldl) == false)
                self.BaselineLDLCholesterolValue((bldl / m).toFixed(0));
        }
    };
    self.UOMAction = function () {
        self.UOMChange(self.UnitOfMeasure());
        return true;
    };
    // Recalculate the Cholesterol Values based on Unit of Measure. The Algorythms are based on US units. 
    self.HDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.HDLCholesterolValue(self.HDLCholesterolValue().replace(/,/g, "."));
    });

    self.TotalCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.TotalCholesterolValue(self.TotalCholesterolValue().replace(/,/g, "."));

    });
    self.LDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.LDLCholesterolValue(self.LDLCholesterolValue().replace(/,/g, "."));
    });
    self.HDLCholesterol = ko.pureComputed(function () {
        var i = self.HDLCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.TotalCholesterol = ko.pureComputed(function () {
        var i = self.TotalCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.LDLCholesterol = ko.pureComputed(function () {
        var i = self.LDLCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);

    //Subscription to "User Changes" to calculate 10year risks
    self.VisitTypeUI.subscribe(function () {
        if (self.VisitTypeUI() == undefined)
            return;
        self.VisitType(self.VisitTypeUI());
        if (!self.VisitTypeUI() && self.Smoker() == 'Former') {
            //self.Smoker('No');
            //self.InitialVisitText('Initial Visit');
        } else {
            appmodel.resetBaselineValues();
            appmodel.validate(false);
            appmodel.baselineValidate(false);
        }
    });
    // Risk Bar Range

    self.riskRange = ko.pureComputed(function () {
        var Risk = (self.TenYearCurrentRisk() != undefined) ? parseFloat(self.TenYearCurrentRisk()) : undefined;
        var InvalidLDLRange = (self.LDLCholesterol() <= 69 || self.LDLCholesterol() >= 190);
        if (Risk > 0 && Risk <= 4.9 && !InvalidLDLRange) {
            return "Low";
        } else if (Risk >= 5 && Risk <= 7.4 && !InvalidLDLRange) {
            return "Borderline";
        } else if (Risk >= 7.5 && Risk <= 19.9 && !InvalidLDLRange) {
            return "Intermediate";
        } else if (Risk >= 20 && !InvalidLDLRange) {
            return "High";
        } else if (InvalidLDLRange) {
            return "N/A";
        } else {
            return " ";
        }
    }, self);

    self.previousRiskRange = ko.pureComputed(function () {
        var previousRisk = parseFloat(self.TenYearRiskInitial().slice(0, self.TenYearRiskInitial().length - 1));
        if (previousRisk >= 0 && previousRisk <= 4.9) {
            return "Low";
        } else if (previousRisk >= 5 && previousRisk <= 7.4) {
            return "Borderline";
        } else if (previousRisk >= 7.5 && previousRisk <= 19.9) {
            return "Intermediate";
        } else if (previousRisk >= 20) {
            return "High";
        } else {
            return " ";
        }
    }, self);

    // stop computed if these are not met
    self.computedValuesAvailable = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$"),
            bpFormatReg = new RegExp("^[0-9]{1,3}$"),
            quitSmokingSelected = (self.Smoker() == "Former" && self.QuiteSmokingMonths() == undefined) ? false : true;
        
        var statinAspirinAvailable = self.VisitType() ? (self.OnAspirin() != undefined || self.OnAspirin() != null) && (self.OnStatin() != undefined || self.OnStatin() != null) : true;
        if (self.VisitType() != undefined && quitSmokingSelected && self.Sex() && self.Age() != null && self.Age() >= 40 && self.Age() <= 79 && self.Race() && self.HDLCholesterol() != null && self.HDLCholesterol() >= 20 && self.HDLCholesterol() <= 100 /*&& ldlCholesterol >= 30 && ldlCholesterol <= 300 && (parseFloat(ldlCholesterol.toFixed(3)) <= parseFloat((self.TotalCholesterol() - self.HDLCholesterol()).toFixed(3)))*/ && self.BloodPressure() != null && self.BloodPressure() >= 90 && self.BloodPressure() <= 200 /*&& self.DBloodPressure() != null && self.DBloodPressure() >= 60 && self.DBloodPressure() <= 130*/ && self.TotalCholesterol() != null && self.TotalCholesterol() >= 130 && self.TotalCholesterol() <= 320 && formatRegex.test(self.TotalCholesterolValue()) && /*formatRegex.test(self.LDLCholesterolValue()) &&*/ formatRegex.test(self.HDLCholesterolValue()) && bpFormatReg.test(self.BloodPressure()) /*&& bpFormatReg.test(self.DBloodPressure())*/ && (self.Diabetic() != null || self.Diabetic() != undefined) && (self.Smoker() != null || self.Smoker() != undefined) && (self.Hypertension() != null || self.Hypertension() != undefined) && statinAspirinAvailable) {
            return true;
        } else {
            return false;
        }
    }, self);
    self.isRealNumber = function ($object) {
        if (!isNaN($object) && $object != null && $object) {
            return true;
        }
        return false;
    }
    self.isAfrican = ko.pureComputed(function () {
        var i = false;
        if (self.Race() == "African American") i = true;
        return i;
    }, self);
    self.isMale = ko.pureComputed(function () {
        var i = false;
        if (self.Sex() == "Male") i = true;
        return i;
    }, self);
    self.isFemale = ko.pureComputed(function () {
        var i = false;
        if (self.Sex() == "Female") i = true;
        return i;
    }, self);
    self.isDiabetic = ko.pureComputed(function () {
        var i = false;
        if (self.VisitType()) {
            if (self.Diabetic() == "Yes" || self.BaselineDiabetic() == "Yes") i = true;
        } else {
            if (self.Diabetic() == "Yes") i = true;
        }
        return i;
    }, self);
    self.isBaseLineDiabetic = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineDiabetic() == "Yes") i = true;
        return i;
    }, self);
    self.isSmoker = ko.pureComputed(function () {
        var i = false;
        if (self.Smoker() == "Never" && self.VisitType()) {
            self.BaselineSmoker("No");
        }
        if (self.Smoker() == "Current") i = true;
        return i;
    }, self);
    self.isBaseLineSmoker = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineSmoker() == "Yes") i = true;
        return i;
    }, self);
    self.isHypertension = ko.pureComputed(function () {
        var i = false;
        if (self.Hypertension() == "Yes" || self.BaselineHypertension() == "Yes") i = true;
        return i;
    }, self);
    self.isBaseLineHypertension = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineHypertension() == "Yes") i = true;
        return i;
    }, self);


    //Store 10 year current risk Calculated value
    self.TenYearCurrentRisk = ko.observable(0);

    // 10 year Calculated Values
    self.TenYearRisk = ko.pureComputed({
        read: function () {
            var i = '~';
            if (self.computedValuesAvailable() && !self.VisitType() && !isNaN(self.RiskFormula.cvdPredict(true))) {
                var number = self.RiskFormula.cvdPredict(true) * 100;
                self.TenYearCurrentRisk(parseFloat(number.toFixed(1)));
                i = number.toFixed(1);
                self.showDoneBtn(true);

            }
            else if (self.computedValuesAvailable() && self.computedBaselineValuesAvailable() && self.VisitType()) {
                i = self.RiskFormula.TenYearFollowUpRisk();
                self.TenYearCurrentRisk(parseFloat(i.split("%")[0]));
            }
            return i;

        },
        write: function (value) {
            sessionStorage.setItem('TenYearRisk', value);
        },
        owner: self
    }).extend({
        notify: 'always'
    });


    //10 year ASCVD initial risk at follow up
    self.TenYearRiskInitial = ko.pureComputed(function () {
        var i = '~';
        if (self.computedBaselineValuesAvailable() && self.VisitType()) {
            i = self.RiskFormula.TenYearBaselineRisk();
        }
        return i;
    }, self);


    var TreatmentGuidelineData = function () {
        this.isStatinGuidelineVisible = ko.observable(false);
        this.isBPGuidelineVisible = ko.observable(false);
        this.isAspirinGuidelineVisible = ko.observable(false);
        this.resetAll = function () {
            this.isStatinGuidelineVisible(false);
            this.isBPGuidelineVisible(false);
            this.isAspirinGuidelineVisible(false);
        }
    }
    // Forecast- Treatment scenarios
    self.TratmentGuidelineData = new TreatmentGuidelineData();
    self.TratmentOne_selected = ko.observableArray([]);
    self.TratmentTwo_selected = ko.observableArray([]);
    self.TratmentThree_selected = ko.observableArray([]);
    self.TreatmentOneScore = ko.pureComputed(function () {
        var Score = '~';
        if (self.TratmentOne_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentOne_selected(), self.VisitType());
        }
        return Score;
    }, self);

    self.TreatmentThreeScore = ko.pureComputed(function () {
        var Score = '~';
        if (self.TratmentThree_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentThree_selected(), self.VisitType());
        }
        return Score;
    }, self);

    self.adjustViewPort = function () {
        var view = viewHeight();
        var mh = (view - 169);
        $(".fullscreen-spacer").css("min-height", mh);
    };



    self.Diabetic.subscribe(function () {
        if (self.VisitType() && self.Diabetic() == 'No') {
            self.BaselineDiabetic(null);
        }
    });


    /* showPanel function for show|hide question panel.

 * UnitOfMeasureAction function is for handle unit of measure functionality and unit coversion.
 * @param data: true|false.
 * true|SI
 * false|US
*/
    self.UnitOfMeasureAction = function (data) {
        sessionStorage.setItem('v3uom', data);
    };
    /*
     * UOMAction function is wrapper function which used to handle data persistancy logic.
     */
    self.UOMAction = function () {
        self.UnitOfMeasureAction(self.UnitOfMeasure());
        return true;
    };
    /*
     * setASCVD function is used to set ASCVD question response.
     * @param data: yes|no.
     */
    self.setASCVD = function (data) {
        if (data != '') {
            self.ascvd(data);

        } else {
            self.ascvd('');
        }
        sessionStorage.setItem('ascvd', data);
    };

    self.setHighRisk = function (data) {
        if (data != '') {
            self.highRisk(data);

        } else {
            self.highRisk('');
        }
        sessionStorage.setItem('highRisk', data);
    };

    self.setDiabetic = function (data) {
        if (data != '') {
            self.Diabetic(data);

        } else {
            self.Diabetic('');
        }
        sessionStorage.setItem('Diabetic', data);
    };

    self.resetAll = function () {
        self.Age(undefined);
        self.triglyceridesRange(null);
        self.highRisk(null);
        self.ldlcRange(null);
        self.Diabetic(null);
        self.ascvd(null);
        self.asvd10yrrisk(null);
        self.showAdviceBtn(false);
        sessionStorage.setItem('Age', '');
    };


    self.Age.subscribe(function (data) {
        if (data != '') {
            self.triglyceridesRange(null);
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.ascvd(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);

            if (!isNaN(data)) {
                sessionStorage.setItem('Age', data);
            }
        }
    });
    self.triglyceridesRange.subscribe(function (data) {
        $('input[type=radio][name=primary-switch]').change(function () {
            sessionStorage.removeItem('v4ascvd');
            sessionStorage.removeItem('v4Diabetic');
            sessionStorage.removeItem('asvd10yrrisk');
            sessionStorage.removeItem('ldlcRange');
            sessionStorage.removeItem('highRisk');
        });

        if (data == "group3") {
            self.showAdviceBtn(true);
        } else if (data == "group2" && self.Age() < 40) {
            self.showAdviceBtn(true);
        } else if (data == "group2" && self.Age() > 40) {
            self.showAdviceBtn(false);
        } else if (data == "group1") {
            self.showAdviceBtn(false);
        }

        if (self.Age() < 40) {
            if (data == 'group1') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');
            } else if (data == 'group2' || data == 'group3') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.TenYearRiskAction('cancel');

            }
        } else if (self.Age() >= 40) {

            if (data == 'group1') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');

            } else if (data == 'group2') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');


            } else if (data == 'group3') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(true);
                self.TenYearRiskAction('cancel');

            }
        }
        if (data != null) {
            sessionStorage.setItem('triglyceridesRange', data);
        }


    });
    self.ldlcRange.subscribe(function (data) {
        if (data == 'group1a' || data == 'group1b' || data == 'group1c') {
            self.showAdviceBtn(true);
        }
        if (data != null) {
            sessionStorage.setItem('ldlcRange', data);
        }
    });
    self.ascvd.subscribe(function (data) {
        if (data == "yes") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        } else if (data == "no") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(false);
        }
        if (data != null) {
            sessionStorage.setItem('v4ascvd', data);
        }
    });

    self.Diabetic.subscribe(function (data) {
        if (data == "yes") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
            self.TenYearRiskAction('cancel');
        } else if (data == "no") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'yes') {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group1" && self.ascvd() == 'yes') {
            self.showAdviceBtn(false);
        } else if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'no' && self.Age() < 40) {
            self.showAdviceBtn(true);
        }
        if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'no' && self.Age() >= 65) {
            self.showAdviceBtn(true);
            if (self.Age() < 65) {
                self.showAdviceBtn(true);
            }
        }
        if (data != null) {
            sessionStorage.setItem('v4Diabetic', data);
        }
    });
    self.TenYearRisk.subscribe(function (data) {
        if (!isNaN(data)) {
            sessionStorage.setItem('TenYearRisk', data);
        } else if (data == '~' && sessionStorage.getItem('TenYearRisk')) {
            self.asvd10yrrisk('');
        }

    });
    self.asvd10yrrisk.subscribe(function (data) {
        if (data !== '') {
            self.showAdviceBtn(true);

            if (data == 'Low') {
                self.asvd10yrriskValue('Low (<5%)');
            } else if (data == 'Intermediate') {
                self.asvd10yrriskValue('Borderline to Intermediate(5% - 20%)');
            } else if (data == 'High') {
                self.asvd10yrriskValue('High (>=20%)');
            }
        }
        if (data != null) {
            sessionStorage.setItem('asvd10yrrisk', data);
        }
    });
    self.highRisk.subscribe(function (data) {

        if (data && self.triglyceridesRange() == 'group1' && self.ascvd() == 'no' && self.Diabetic() == 'yes') {
            self.showAdviceBtn(true);
        }
        if (data != null) {
            sessionStorage.setItem('highRisk', data);
        }
    });
    self.showAdviceBtn.subscribe(function (data) {
        if (data == true) {
            sessionStorage.setItem('showAdviceBtn', true);
        } else {
            sessionStorage.setItem('showAdviceBtn', false);
        }
    });
    self.showDoneBtn.subscribe(function (data) {

        if (data == true) {
            sessionStorage.setItem('showDoneBtn', true);
        } else {
            sessionStorage.setItem('showDoneBtn', false);
        }
    });

    self.HDLCholesterolValue(undefined);

    self.TenYearRiskAction = function (data) {
        if (data === 'save') {
            var TenYearRiskValue = parseFloat(self.TenYearRisk());
            if (TenYearRiskValue < 5) {
                self.asvd10yrrisk('Low');

            } else if (TenYearRiskValue >= 5 && TenYearRiskValue < 20) {
                self.asvd10yrrisk('Intermediate');
            } else if (TenYearRiskValue >= 20) {
                self.asvd10yrrisk('High');
            }
            sessionStorage.setItem('Race', self.Race());
            sessionStorage.setItem('Sex', self.Sex());
            sessionStorage.setItem('HDLCholesterolValue', self.HDLCholesterolValue());
            sessionStorage.setItem('TotalCholesterolValue', self.TotalCholesterolValue());
            sessionStorage.setItem('BloodPressure', self.BloodPressure());
            sessionStorage.setItem('Smoker', self.Smoker());
            sessionStorage.setItem('Smoker', self.Hypertension());


        } else if (data == 'cancel') {
            self.Race(undefined);
            self.Sex(null);
            self.HDLCholesterolValue(undefined);
            self.TotalCholesterolValue(undefined);
            self.BloodPressure(undefined);
            self.Smoker(null);
            self.Hypertension(null);
            self.showDoneBtn(false);
            if (self.triglyceridesRange() == 'group3' || (self.triglyceridesRange() == 'group2' && self.Age() < 40)) {
                self.showAdviceBtn(true);
            } else {
                self.showAdviceBtn(false);
            }
        }
    };
    //ascvd form fields
    self.Sex.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2sex", newValue);
        }
    });
    self.Race.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2race", newValue);
        }
    });
    self.BloodPressure.subscribe(function (newValue) {

        sessionStorage.setItem("v2bloodpressure", newValue);
    });
    self.Smoker.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2smoker", newValue);
        }
    });
    self.Hypertension.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2hypertension", newValue);
        }
    });
    self.HDLCholesterol.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2HDLCholesterol", newValue);
        }
    });
    self.TotalCholesterol.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2TotalCholesterol", newValue);
        }
    });

    /* removeClassWarning function is used to remove waring class of question when user click.
     */
    self.removeClassWarning = function (id) {
        if (id !== undefined) {
            $('#' + id).parents('.question.active').removeClass('warning');
        } else {
            $('.help_me_choose_reveal .question.active').removeClass('warning');
        }
    };
    self.addClassActive = function (id) {
        $('#' + id).parents('.question').addClass('active');
    };
    self.removeClassActive = function (id) {
        $('#' + id).parents('.question').removeClass('active');
    };

};

function viewModel() {
    var self = this;
    self.hideSplash = ko.observable(false);
    self.$debug = true;
    self.FormData = formData;
    self.Form = ko.observable(new formObject(self));
    self.validate = ko.observable(false);
    self.doNotShowAgainVisible = ko.observable(true);
    self.onForecastPage = ko.observable(false);
    self.validate = ko.observable(false);
    self.baselineValidate = ko.observable(false);
    self.viewportHeight = ko.observable(window.innerHeight);
    self.viewportWidth = ko.observable(window.innerWidth);
    self.sexValidation = ko.pureComputed(function () {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData.notifications.sex[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.diabeticValidation = ko.pureComputed(function () {
        if (self.Form().Diabetic() == null && self.validate() == true) {
            return self.FormData.notifications.diabetic[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.smokerValidation = ko.pureComputed(function () {
        if (self.Form().Smoker() == null && self.validate() == true) {
            return self.FormData.notifications.smoker[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.hypertensionValidation = ko.pureComputed(function () {
        if (self.Form().Hypertension() == null && self.validate() == true) {
            return self.FormData.notifications.hypertension[0];
        } else if (self.Form().Hypertension() != null && self.Form().Hypertension() == "No" && self.Form().BaselineHypertension() == "Yes" && self.isFollowUp()) {
            return self.FormData.notifications.hypertension[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.raceValidation = ko.pureComputed(function () {
        if (self.Form().Race() == null && self.validate() == true) {
            return self.FormData.notifications.race[0];
        } else if (self.Form().Race() != null && self.Form().Race() == "Other") {
            return self.FormData.notifications.race[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.hdlValidation = ko.pureComputed(function () {
        var i = self.FormData.notifications.blank[0];
        if (self.Form().HDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.hdlCholesterol[0];
        } else if (self.Form().HDLCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().HDLCholesterolValue())) {
            i = self.FormData.notifications.hdlCholesterol[3];
        } else if (self.Form().HDLCholesterolValue() != null && (self.Form().HDLCholesterol() < 20 || self.Form().HDLCholesterol() > 100)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.hdlCholesterol[2] : self.FormData.notifications.hdlCholesterol[1];

        } else {
            i = self.FormData.notifications.blank[0];

        }
        return i;
    }, self);
    self.totalCholesterolValidation = ko.pureComputed(function () {
        var i = self.FormData.notifications.blank[0];
        if (self.Form().TotalCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.totalCholesterol[0];
        } else if (self.Form().TotalCholesterolValue() != null && !((new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().TotalCholesterolValue()))) {
            i = self.FormData.notifications.totalCholesterol[3];
        } else if (self.Form().TotalCholesterolValue() != null && (self.Form().TotalCholesterol() < 130 || self.Form().TotalCholesterol() > 320)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.totalCholesterol[2] : self.FormData.notifications.totalCholesterol[1];
        } else {
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ldlValidation = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$");

        var i = self.FormData.notifications.blank[0];
        if (self.Form().LDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.ldlCholesterol[0];
        } else if (self.Form().LDLCholesterolValue() != null && !formatRegex.test(self.Form().LDLCholesterolValue())) {
            i = self.FormData.notifications.ldlCholesterol[4];
        } else if (self.Form().LDLCholesterolValue() != null && (self.Form().LDLCholesterol() < 30 || self.Form().LDLCholesterol() > 300)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.ldlCholesterol[2] : self.FormData.notifications.ldlCholesterol[1];
        } else if (self.Form().LDLCholesterolValue() != null && (parseFloat(self.Form().LDLCholesterol().toFixed(3)) > parseFloat((self.Form().TotalCholesterol() - self.Form().HDLCholesterol()).toFixed(3)))) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.ldlCholesterol[3] : self.FormData.notifications.ldlCholesterol[3];
        } else {
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ldlValidation.subscribe(function () {
        if (self.Form().LDLCholesterol() >= 190 || self.Form().LDLCholesterol() <= 69) {
            self.resetBaselineValues();
            self.Form().VisitTypeUI(undefined);
            self.Form().VisitType(false);
            self.validate(false);
        }
    });
    self.bloodPresureValidation = ko.pureComputed(function () {
        if (self.Form().BloodPressure() == null && self.validate() == true) {
            return self.FormData.notifications.bloodPresure[0];
        } else if (self.Form().BloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().BloodPressure())) {
            return self.FormData.notifications.bloodPresure[2];
        } else if (self.Form().BloodPressure() != null && (self.Form().BloodPressure() < 90 || self.Form().BloodPressure() > 200)) {
            return self.FormData.notifications.bloodPresure[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.DBloodPressureValidation = ko.pureComputed(function () {
        if (self.Form().DBloodPressure() == null && self.validate() == true) {
            return self.FormData.notifications.dbloodPresure[0];
        } else if (self.Form().DBloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().DBloodPressure())) {
            return self.FormData.notifications.dbloodPresure[2];
        } else if (self.Form().DBloodPressure() != null && (self.Form().DBloodPressure() < 60 || self.Form().DBloodPressure() > 130)) {
            return self.FormData.notifications.dbloodPresure[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.isRaceOther = ko.pureComputed(function () {
        if (self.Form().Race() != null) {
            return self.Form().Race() == "Other" ? true : false;
        } else {
            return false;
        }
    }, self);

    self.ageValidation = ko.pureComputed(function () {

        var i = self.FormData.notifications.blank[0];
        if (self.Form().Age() == null && self.validate() == true) {
            i = self.FormData.notifications.age[0];
        } else if (self.Form().Age() != null && !(new RegExp("^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$")).test(self.Form().Age())) {
            i = self.FormData.notifications.age[1];
        } else if (self.Form().Age() != null && (self.Form().Age() < 20 || self.Form().Age() > 75)) {
            i = self.FormData.notifications.age[1];
        } else {
            self.Form().Age(Math.round(self.Form().Age()));
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ageValidation.subscribe(function (newvalue) {
        if (self.ageValidation().id === 2) {
            self.resetBaselineValues();
            self.Form().VisitTypeUI(undefined);
            self.Form().VisitType(false);
            self.validate(false);
        }
    });

    self.invalidAgeValue = ko.pureComputed(function () {

        return (self.ageValidation().id === 2 && !isNaN(self.Form().Age())) ? true : false;
    }, self);
    self.sexValidation = ko.pureComputed(function () {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData.notifications.sex[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.numberTrim = function (value, unit) {
        var number = value;
        if (number == null) {
            number = 0;
        }
        number = parseFloat(number).toFixed(4);
        if (!unit) {
            number = parseFloat(number).toFixed(0);
        }
        return number;
    };
    self.percentageFormat = function (value) {
        if (value !== 'NA' && !isNaN(value)) {
            return (value * 100).toFixed(1) + '%';
        } else {
            return value == 'NA' ? 'NA<sup>¶</sup>' : '~';
        }
    };

    self.quiteSmoking = ko.pureComputed(function () {
        var i = false;
        if (self.Form().Smoker() == "Former") {
            i = true;
        } else {
            self.Form().QuiteSmokingMonths(undefined);
        }
        return i;
    });
    self.smokingSelectValidation = ko.pureComputed(function () {
        return self.FormData.notifications.blank[0];
    }, self);
    self.Form().Smoker.subscribe(function (newValue) {
        self.Form().BaselineSmoker(null);
        if (self.Form().Smoker() == "Current") {
            self.FormData.treatmentOne[0].enable(true);
            self.FormData.treatmentTwo[0].enable(true);
            self.FormData.treatmentThree[0].enable(true);
        } else {
            self.FormData.treatmentOne[0].enable(false);
            self.FormData.treatmentTwo[0].enable(false);
            self.FormData.treatmentThree[0].enable(false);

            var isSmoking = ko.utils.arrayFirst(self.Form().TratmentOne_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentOne_selected.remove(appmodel.FormData.treatmentOne[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentTwo_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentTwo_selected.remove(appmodel.FormData.treatmentTwo[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentThree_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentThree_selected.remove(appmodel.FormData.treatmentThree[0]);
            }
        }
    });

    self.tabNavigation = function (data) {
        $(window).scrollTop($('body').offset().top);
        if (data === 'advice') {
            if (appmodel.Form().showAdviceBtn()) {
                window.location.href = '#!/content/advice/';
                $('#calculator-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
                $('#recommendation-Tab').addClass('selected');
                self.showAdvice();
            } else {
                window.location.href = '#!/content/calculator/';
                $('#recommendation-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
                $('#calculator-Tab').addClass('selected');
            }
        } else {
            window.location.href = '#!/content/calculator/';
            $('#recommendation-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
            $('#calculator-Tab').addClass('selected');
        }
    };

    self.isFollowUp = ko.pureComputed(function () {
        if (self.Form().VisitType()) {
            return true;
        } else {
            return false;
        }
    }, self);
    self.isInitial = ko.pureComputed(function () {
        if (self.Form().VisitType() == undefined || self.Form().VisitType())
            return false;
        else return true;
    }, self);

    self.showAdvice = function () {

        if (self.Form().triglyceridesRange() == "group3") {
            self.Form().showAdviceContent('set1');
        } else if (self.Form().triglyceridesRange() == "group2" && self.Form().Age() < 40) {
            self.Form().showAdviceContent('set2');
        } else if (self.Form().triglyceridesRange() == "group2" && self.Form().Age() >= 40 && self.Form().ascvd() == 'yes') {
            self.Form().showAdviceContent('set3');
        } else if (self.Form().triglyceridesRange() == "group2" && self.Form().Age() >= 40 && self.Form().ascvd() == 'no' && self.Form().Diabetic() == "yes") {
            self.Form().showAdviceContent('set3');
        } else if (self.Form().triglyceridesRange() == "group2" && self.Form().Age() >= 40 && self.Form().ascvd() == 'no' && self.Form().Diabetic() == "no") {
            if (self.Form().asvd10yrrisk() == "Low") {
                self.Form().showAdviceContent('set2l');
            } else if (self.Form().asvd10yrrisk() == "Intermediate" || self.Form().asvd10yrrisk() == "High") {
                self.Form().showAdviceContent('set2h');
            }
        } else if (self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'yes' && self.Form().Diabetic() == 'yes') {
            self.Form().showAdviceContent('set4');
        } else if (self.Form().ldlcRange() == 'group1a' && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'yes' && self.Form().Diabetic() == 'no') {
            self.Form().showAdviceContent('set1a');

        } else if (self.Form().ldlcRange() == 'group1b' && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'yes' && self.Form().Diabetic() == 'no') {
            self.Form().showAdviceContent('set1b');

        } else if (self.Form().ldlcRange() == 'group1c' && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'yes' && self.Form().Diabetic() == 'no') {
            self.Form().showAdviceContent('set1c');

        } else if (self.Form().Diabetic() == "yes" && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'no' && self.Form().Age() < 40) {
            self.Form().showAdviceContent('set4');
        } else if (self.Form().Diabetic() == "yes" && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'no' && self.Form().Age() > 40 && self.Form().Age() >= 65) {
            self.Form().showAdviceContent('set2a');
        } else if (self.Form().Diabetic() == "yes" && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'no' && self.Form().Age() >= 40 && self.Form().Age() < 65) {
            if (self.Form().highRisk() == 'yes') {
                self.Form().showAdviceContent('set2a');
            } else if (self.Form().highRisk() == 'no') {
                self.Form().showAdviceContent('set2b');
            }
        } else if (self.Form().Diabetic() == "no" && self.Form().triglyceridesRange() == "group1" && self.Form().ascvd() == 'no') {
            if (self.Form().asvd10yrrisk() == "Low") {
                self.Form().showAdviceContent('set5a');
            }
            if (self.Form().asvd10yrrisk() == "Intermediate") {
                self.Form().showAdviceContent('set5b');
            }
            if (self.Form().asvd10yrrisk() == "High") {
                self.Form().showAdviceContent('set5c');
            }
        }
    };

    self.criticalNotification = ko.observableArray([]);
    self.appStoreURL = ko.observable(notification.appStoreURL);
    self.notificationData = ko.observableArray([]);
    /*
     * appStorage function is used to handle app specific data persistancy.
     */
    self.appStorage = function () {
        isSession = false;
        if (typeof (self.Form) === "function") {
            if (sessionStorage.getItem('UnitOfMeasureType') === 'mmol/L') {
                self.Form().UnitOfMeasure(true);
            } else {
                self.Form().UnitOfMeasure(false);
            }
        }
        if (sessionStorage.getItem('Age') != '' && sessionStorage.getItem('Age') !== 'undefined' && sessionStorage.getItem('Age') !== null) {
            self.Form().Age(sessionStorage.getItem('Age'));
        }
        if (sessionStorage.getItem('triglyceridesRange') != '' && sessionStorage.getItem('triglyceridesRange') !== 'undefined' && sessionStorage.getItem('triglyceridesRange') !== null) {
            self.Form().triglyceridesRange(sessionStorage.getItem('triglyceridesRange'));
        }
        if (sessionStorage.getItem('v4ascvd') != '' && sessionStorage.getItem('v4ascvd') !== 'undefined' && sessionStorage.getItem('v4ascvd') !== null) {
            self.Form().ascvd(sessionStorage.getItem('v4ascvd'));
        }
        if (sessionStorage.getItem('v4Diabetic') != '' && sessionStorage.getItem('v4Diabetic') !== 'undefined' && sessionStorage.getItem('v4Diabetic') !== null) {
            self.Form().Diabetic(sessionStorage.getItem('v4Diabetic'));
        }
        if (sessionStorage.getItem('asvd10yrrisk') != '' && sessionStorage.getItem('asvd10yrrisk') !== 'undefined' && sessionStorage.getItem('asvd10yrrisk') !== null) {
            self.Form().asvd10yrrisk(sessionStorage.getItem('asvd10yrrisk'));
        }

        if (sessionStorage.getItem('TenYearRisk') != '' && sessionStorage.getItem('TenYearRisk') !== 'undefined' && sessionStorage.getItem('TenYearRisk') !== null) {
            self.Form().TenYearRisk(sessionStorage.getItem('TenYearRisk'));

        }
        if (sessionStorage.getItem("v2sex") != "" && sessionStorage.getItem("v2sex") !== null && sessionStorage.getItem("v2sex") != "null" && sessionStorage.getItem("v2sex") != "undefined") {
            self.Form().Sex(sessionStorage.getItem("v2sex"));
        }
        if (sessionStorage.getItem("v2race") != "" && sessionStorage.getItem("v2race") !== null && sessionStorage.getItem("v2race") != "null" || sessionStorage.getItem("v2race") != "undefined") {
            self.Form().Race(sessionStorage.getItem("v2race"));
        }
        if (sessionStorage.getItem("v2TotalCholesterol") != "" && sessionStorage.getItem("v2TotalCholesterol") !== null && sessionStorage.getItem("v2TotalCholesterol") != "null" && sessionStorage.getItem("v2TotalCholesterol") != "undefined") {
            self.Form().TotalCholesterolValue(sessionStorage.getItem("v2TotalCholesterol"));
        }
        if (sessionStorage.getItem("v2HDLCholesterol") != "" && sessionStorage.getItem("v2HDLCholesterol") !== null && sessionStorage.getItem("v2HDLCholesterol") != "null" && sessionStorage.getItem("v2HDLCholesterol") != "undefined") {
            self.Form().HDLCholesterolValue(sessionStorage.getItem("v2HDLCholesterol"));
        }
        if (sessionStorage.getItem("v2bloodpressure") != "" && sessionStorage.getItem("v2bloodpressure") !== null && sessionStorage.getItem("v2bloodpressure") != "null" && sessionStorage.getItem("v2bloodpressure") != "undefined") {
            self.Form().BloodPressure(sessionStorage.getItem("v2bloodpressure"));
        }
        if (sessionStorage.getItem("v2smoker") != "" && sessionStorage.getItem("v2smoker") !== null && sessionStorage.getItem("v2smoker") != "null" && sessionStorage.getItem("v2smoker") != "undefined") {
            self.Form().Smoker(sessionStorage.getItem("v2smoker"));
        }
        if (sessionStorage.getItem("v2hypertension") != "" && sessionStorage.getItem("v2hypertension") !== null && sessionStorage.getItem("v2hypertension") != "null" && sessionStorage.getItem("v2hypertension") != "undefined") {
            self.Form().Hypertension(sessionStorage.getItem("v2hypertension"));
        }

        if (sessionStorage.getItem('ldlcRange') != '' && sessionStorage.getItem('ldlcRange') !== 'undefined' && sessionStorage.getItem('ldlcRange') !== null) {
            self.Form().ldlcRange(sessionStorage.getItem('ldlcRange'));
        }
        if (sessionStorage.getItem('highRisk') != '' && sessionStorage.getItem('highRisk') !== 'undefined' && sessionStorage.getItem('highRisk') !== null) {
            self.Form().highRisk(sessionStorage.getItem('highRisk'));
        }
        if (sessionStorage.getItem('showDoneBtn') != '' && sessionStorage.getItem('showDoneBtn') !== undefined && sessionStorage.getItem('showDoneBtn') !== null) {
            if (sessionStorage.getItem('showDoneBtn') === "true") {
                self.Form().showDoneBtn(true);
            } else {
                self.Form().showDoneBtn(false);
            }
        }

        if (sessionStorage.getItem('showAdviceBtn') != '' && sessionStorage.getItem('showAdviceBtn') !== 'undefined' && sessionStorage.getItem('showAdviceBtn') !== null) {
            if (sessionStorage.getItem('showAdviceBtn') === "true") {
                self.Form().showAdviceBtn(true);
            } else {
                self.Form().showAdviceBtn(false);
            }
        }

    }

    isSession = true;
};


var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path = '#!/content/calculator/';
pager.navigate(path);
if (!isNativeApplication) {
    notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
}

if (sessionStorage.length != 0) {
    var UnitOfMeasureSession;
    if (performance.navigation !== undefined) {
        if (performance.navigation.type == 0 || performance.navigation.type == 2) {
            appmodel.appStorage();
        } else {
            UnitOfMeasureTypeSession = sessionStorage.getItem('v3uom');
            if (sessionStorage.getItem('v3uom') === 'true') {
                UnitOfMeasureSession = true;
            } else {
                UnitOfMeasureSession = false;
            }
            sessionStorage.clear();
            sessionStorage.setItem('v3uom', UnitOfMeasureTypeSession);
            if (UnitOfMeasureSession) {
                appmodel.Form().UnitOfMeasureType('mmol/L');
            } else {
                appmodel.Form().UnitOfMeasureType('mg/dL');
            }
            appmodel.Form().UnitOfMeasure(UnitOfMeasureSession);
        }
    }
}