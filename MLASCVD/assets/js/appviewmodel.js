//Added to set dirty flag value for observable so as to capture GA events only if value is changed
ko.extenders.trackChange = function (target, track) {
    if (track) {
        target.isDirty = ko.observable(false);
        target.originalValue = target();
        target.setOriginalValue = function (startingValue) {
            target.originalValue = startingValue;
        };
        target.subscribe(function (newValue) {
            target.isDirty(newValue != target.originalValue);
        });
    }
    return target;
};
var appmodel;

function formObject(parent) {
    var self = this;
    self.$debug = false;
    self.RiskFormula = new Formula(parent);
    self.selectedLanguage = ko.observable();
    self.emailYourLifeTimeRisk = ko.observable();
    //self.riskRanges = riskRanges;
    // Input Observables
    self.Race = ko.observable();
    self.Age = ko.observable();
    self.Sex = ko.observable();
    self.HDLCholesterolValue = ko.observable();
    self.TotalCholesterolValue = ko.observable();
    self.LDLCholesterolValue = ko.observable();
    self.BloodPressure = ko.observable();
    self.DBloodPressure = ko.observable();
    self.Diabetic = ko.observable();
    self.Smoker = ko.observable();
    self.Hypertension = ko.observable();
    self.OnStatin = ko.observable();
    self.OnAspirin = ko.observable();
    self.VisitType = ko.observable(false);
    //VisitTypeUI changed to false from 'undefined' for MLSCVD
    self.VisitTypeUI = ko.observable(undefined);
    //self.InitialVisitText = ko.observable('Initial Visit (Current)');
    //Baseline values at Initial Visit
    self.BaselineAge = ko.observable();
    self.BaselineHDLCholesterolValue = ko.observable();
    self.BaselineTotalCholesterolValue = ko.observable();
    self.BaselineLDLCholesterolValue = ko.observable();
    self.BaselineBloodPressure = ko.observable();
    self.BaselineSmoker = ko.observable();
    self.BaselineHypertension = ko.observable();
    self.BaselineDiabetic = ko.observable();
    self.QuiteSmokingMonths = ko.observable();

    //Treatment scenario
    self.isTreatmentOne = ko.observable(true);
    self.isTreatmentTwo = ko.observable(false);
    self.isTreatmentThree = ko.observable(false);
    // Unit of Measure - System is defaulted to false which equals US units
    self.UnitOfMeasure = ko.observable(true).extend({
        rateLimit: 10
    }); //rateLimit added because of compare value resetting due to synchronous knockout value update
    self.UOMChange = function (newValue) {
        var uom = (newValue == true) ? 'SI' : 'US';    
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
        setUserUOMPref(self.UnitOfMeasure());
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
    // Recalculate the baseline cholesterol Values based on Unit of Measure. The Algorythms are based on US units.
    self.BaselineTotalCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.BaselineTotalCholesterolValue(self.BaselineTotalCholesterolValue().replace(/,/g, "."));
    });
    self.BaselineLDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.BaselineLDLCholesterolValue(self.BaselineLDLCholesterolValue().replace(/,/g, "."));
    });
    self.BaselineHDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.BaselineHDLCholesterolValue(self.BaselineHDLCholesterolValue().replace(/,/g, "."));
    })
    self.BaselineHDLCholesterol = ko.pureComputed(function () {
        var i = self.BaselineHDLCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.BaselineTotalCholesterol = ko.pureComputed(function () {
        var i = self.BaselineTotalCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.BaselineLDLCholesterol = ko.pureComputed(function () {
        var i = self.BaselineLDLCholesterolValue()
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
            return setRiskRange('low');
        } else if (Risk >= 5 && Risk <= 7.4 && !InvalidLDLRange) {
            return setRiskRange('borderline');
        } else if (Risk >= 7.5 && Risk <= 19.9 && !InvalidLDLRange) {
            return setRiskRange('intermediate');
        } else if (Risk >= 20 && !InvalidLDLRange) {
            return setRiskRange('high');
        } else if (InvalidLDLRange) {
            return setRiskRange('na');
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
        //console.log("computed values available");
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

    self.computedBaselineValuesAvailable = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$"),
            bpFormatReg = new RegExp("^[0-9]{1,3}$"),
            ldlCholesterol = self.LDLCholesterol();
        //Patch up for Bug when current smoker is no and previous smoker is nothing
        if (self.Smoker() == "Never" && self.VisitType()) {
            self.BaselineSmoker("No");
        }
        if (self.VisitType() != undefined && self.BaselineAge() && self.BaselineAge() >= 40 && self.BaselineAge() <= 79 && self.BaselineAge() <= self.Age() && self.BaselineBloodPressure() != null && self.BaselineBloodPressure() >= 90 && self.BaselineBloodPressure() <= 200 && self.BaselineHDLCholesterol() >= 20 && self.BaselineHDLCholesterol() <= 100 && self.BaselineLDLCholesterol() >= 30 && self.BaselineLDLCholesterol() <= 300 && self.BaselineTotalCholesterol() >= 130 && (parseFloat(self.BaselineLDLCholesterol().toFixed(3)) <= parseFloat((self.BaselineTotalCholesterol() - self.BaselineHDLCholesterol()).toFixed(3))) && ldlCholesterol >= 30 && ldlCholesterol <= 300 && (parseFloat(ldlCholesterol.toFixed(3)) <= parseFloat((self.TotalCholesterol() - self.HDLCholesterol()).toFixed(3))) && self.BaselineTotalCholesterol() <= 320 && formatRegex.test(self.BaselineTotalCholesterolValue()) && formatRegex.test(self.BaselineLDLCholesterolValue()) && formatRegex.test(self.BaselineHDLCholesterolValue()) &&
            formatRegex.test(self.LDLCholesterolValue()) &&
            bpFormatReg.test(self.BaselineBloodPressure()) && (self.BaselineHypertension() != null || self.BaselineHypertension() != undefined) && self.Race() && self.Sex() && ((self.Diabetic() == 'Yes' && (self.BaselineDiabetic() != null || self.BaselineDiabetic() != undefined)) || (self.Diabetic() == 'No')) && (self.BaselineSmoker() != undefined && self.BaselineSmoker() != null)) {
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
        if (self.Race() == "African American/Black") i = true;
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
        if (self.Smoker() == "No" && self.VisitType()) {
            self.BaselineSmoker("No");
        }
        if (self.Smoker() == "Yes") i = true;
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
    self.TenYearRisk = ko.pureComputed(function () {
        var langValue = appmodel.getValue(appmodel.mySelectedLanguage());
        self.selectedLanguage(langValue);
        var i;
        langValue == 'ar' ? i = '%~' : i = '~%';
        if (self.computedValuesAvailable() && !self.VisitType() && !isNaN(self.RiskFormula.cvdPredict(true))) {
            var number = self.RiskFormula.cvdPredict(true) * 100;
            self.TenYearCurrentRisk(parseFloat(number.toFixed(1)));
            langValue == 'ar' ? i = '%' + number.toFixed(1) : i = number.toFixed(1) + '%';

        } else if (self.computedValuesAvailable() && self.computedBaselineValuesAvailable() && self.VisitType()) {
            i = self.RiskFormula.TenYearFollowUpRisk();
            self.TenYearCurrentRisk(parseFloat(i.split("%")[0]));
        }
        return i;
    }, self);


    //10 year ASCVD initial risk at follow up
    self.TenYearRiskInitial = ko.pureComputed(function () {
        var i = '~%';
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
        var Score = '~%';
        if (self.TratmentOne_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentOne_selected(), self.VisitType());
        }
        return Score;
    }, self);
    self.TratmentOneCaption = ko.computed(function () {
        var i = 'with no treatments selected yet';
        if (self.TratmentOne_selected().length > 0) {
            i = self.ForecastTherapyCaption(self.TratmentOne_selected());
        }
        return i;
    }, self)
    self.TreatmentTwoScore = ko.pureComputed(function () {
        var Score = '~%';
        if (self.TratmentTwo_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentTwo_selected(), self.VisitType());
        }
        return Score;
    }, self);
    self.TratmentTwoCaption = ko.computed(function () {
        var i = 'with no treatments selected yet';
        if (self.TratmentTwo_selected().length > 0) {
            i = self.ForecastTherapyCaption(self.TratmentTwo_selected());
        }
        return i;
    }, self)
    self.TreatmentThreeScore = ko.pureComputed(function () {
        var Score = '~%';
        if (self.TratmentThree_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentThree_selected(), self.VisitType());
        }
        return Score;
    }, self);


    self.TratmentThreeCaption = ko.computed(function () {
        var i = 'with no treatments selected yet';
        if (self.TratmentThree_selected().length > 0) {
            i = self.ForecastTherapyCaption(self.TratmentThree_selected());
        }
        return i;
    }, self);

    self.AddTreatmentOne = function () {
        self.isTreatmentOne(true);
    }

    self.AddTreatmentTwo = function () {
        self.isTreatmentTwo(true);
    }

    self.AddTreatmentThree = function () {
        self.isTreatmentThree(true);
    }

    self.RemoveTreatmentOne = function () {
        self.isTreatmentOne(false);
        self.TratmentOne_selected([]);
        self.adjustViewPort();
        resetForecastSticky('#t1-score');
    };
    self.RemoveTreatmentTwo = function () {
        self.isTreatmentTwo(false);
        self.TratmentTwo_selected([]);
        self.adjustViewPort();
        resetForecastSticky('#t2-score');
    };
    self.RemoveTreatmentThree = function () {
        self.isTreatmentThree(false);
        self.TratmentThree_selected([]);
        self.adjustViewPort();
        resetForecastSticky('#t3-score');
    };

    self.adjustViewPort = function () {
        var view = viewHeight();
        var mh = (view - 169);
        $(".fullscreen-spacer").css("min-height", mh);
    };
    self.ForecastTherapyCaption = function (value) {
        var tempArray = value.slice(0).sort(function (a, b) {
            return a.id.localeCompare(b.id)
        });
        var names = tempArray.map(function (item) {
            return item['therapyText'];
        });
        return 'with ' + names.join(', ') + '';
    };
    self.CalculateForecastRisk = function (value, isFollowup) {
        var score;
        var isStatin = ko.utils.arrayFirst(value, function (item) {
            return item.therapyText === 'Statin Therapy';
        });
        var isSmoking = ko.utils.arrayFirst(value, function (item) {
            return item.therapyText === 'Smoking Cessation';
        });
        var isBP = ko.utils.arrayFirst(value, function (item) {
            return item.therapyText === 'BP Medication';
        });
        var isAspirin = ko.utils.arrayFirst(value, function (item) {
            return item.therapyText === 'Aspirin Therapy';
        });

        if (isFollowup) {

            if (isSmoking && self.isSmoker()) {
                isSmoking = false;
            } else if (!self.isSmoker()) {
                isSmoking = false;
            } else if (self.isSmoker()) {
                isSmoking = true;
            } else {
                isSmoking = false;
            }

            if (isBP || self.isHypertension()) {
                isBP = true;
            } else {
                isBP = false;
            }

            if (isAspirin || self.OnAspirin() == "Yes") {
                isAspirin = true;
            } else {
                isAspirin = false;
            }

            score = self.RiskFormula.TenYearForecastedFollowUpRisk(isSmoking, isBP, isAspirin);

        } else {

            if (isStatin && isSmoking && isBP && isAspirin) {
                score = self.RiskFormula.ForecastRiskSartAll4();
            } else if (isStatin && isAspirin && isSmoking) {
                score = self.RiskFormula.ForecastRiskAspirinStatinSmoking();
            } else if (isStatin && isBP && isSmoking) {
                score = self.RiskFormula.ForecastRiskStatinBPSmoking();
            } else if (isBP && isAspirin && isSmoking) {
                score = self.RiskFormula.ForecastRiskAspirinBPSmoking();
            } else if (isBP && isAspirin && isStatin) {
                score = self.RiskFormula.ForecastRiskAspirinStatinBP();
            } else if (isBP && isSmoking) {
                score = self.RiskFormula.ForecastRiskBPSmoking();
            } else if (isAspirin && isSmoking) {
                score = self.RiskFormula.ForecastRiskAspirinSmoking();
            } else if (isStatin && isSmoking) {
                score = self.RiskFormula.ForecastRiskStatinSmoking();
            } else if (isStatin && isBP) {
                score = self.RiskFormula.ForecastRiskStatinBP();
            } else if (isAspirin && isBP) {
                score = self.RiskFormula.ForecastRiskAspirinBP();
            } else if (isAspirin && isStatin) {
                score = self.RiskFormula.ForecastRiskAspirinStatin();
            } else if (isAspirin) {
                score = self.RiskFormula.ForecastRiskAspirin();
            } else if (isStatin) {
                score = self.RiskFormula.ForecastRiskStatin();
            } else if (isBP) {
                score = self.RiskFormula.ForecastRiskBP();
            } else if (isSmoking) {
                score = self.RiskFormula.ForecastRiskSmoking();
            }
        }
        if (score !== 'NA' && !isNaN(score)) {
            return (score * 100).toFixed(1) + '%';
        } else {
            return score;
        }
    };
    self.Diabetic.subscribe(function () {
        if (self.VisitType() && self.Diabetic() == 'No') {
            self.BaselineDiabetic(null);
        }
    });

    //Added for truncated labels on chart
    self.ForecastChartCaption = function (value) {
        var tempArray = value.slice(0).sort(function (a, b) {
            return a.id.localeCompare(b.id)
        });
        var names = tempArray.map(function (item) {
            return item['chartText'];
        });
        return names.join('+ ');
    };

    self.TratmentOneChartCaption = ko.computed(function () {
        var i = '';
        if (self.TratmentOne_selected().length > 0) {
            i = self.ForecastChartCaption(self.TratmentOne_selected());
        }
        return i;
    }, self);

    self.TratmentTwoChartCaption = ko.computed(function () {
        var i = '';
        if (self.TratmentTwo_selected().length > 0) {
            i = self.ForecastChartCaption(self.TratmentTwo_selected());
        }
        return i;
    }, self);

    self.TratmentThreeChartCaption = ko.computed(function () {
        var i = '';
        if (self.TratmentThree_selected().length > 0) {
            i = self.ForecastChartCaption(self.TratmentThree_selected());
        }
        return i;
    }, self);

    //Forecast tab - Caption on review therapy box
    self.ReviewTherapyCaption = ko.computed(function () {
        var names = [];
        if (self.OnStatin() == "Yes") {
            names.push('Statin')
        }
        if (self.Hypertension() == "Yes") {
            names.push('BP meds');
        }
        if (self.OnAspirin() == "Yes") {
            names.push('Aspirin');
        }
        if (names.length > 0) {
            return 'with ' + names.join(', ');
        } else {
            return '';
        }

    }, self);
    //lifetime risk
    // stop computed if these are not met
    self.computedValuesAvailableForLifetimeRisk = ko.pureComputed(function () {
        //console.log("calling liefe time risk");
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$"),
            bpFormatReg = new RegExp("^[0-9]{1,3}$"),
            quitSmokingSelected = (self.Smoker() == "Former" && self.QuiteSmokingMonths() == undefined) ? false : true;

        var statinAspirinAvailable = self.VisitType() ? (self.OnAspirin() != undefined || self.OnAspirin() != null) && (self.OnStatin() != undefined || self.OnStatin() != null) : true;

        if (self.VisitType() != undefined && quitSmokingSelected && self.Sex() && self.Age() != null && self.Age() >= 20 && self.Age() <= 79 && self.Race() && self.HDLCholesterol() != null && self.HDLCholesterol() >= 20 && self.HDLCholesterol() <= 100 && self.BloodPressure() != null && self.BloodPressure() >= 90 && self.BloodPressure() <= 200 && self.DBloodPressure() != null && self.DBloodPressure() >= 60 && self.DBloodPressure() <= 130 && self.TotalCholesterol() != null && self.TotalCholesterol() >= 130 && self.TotalCholesterol() <= 320 && formatRegex.test(self.TotalCholesterolValue()) && formatRegex.test(self.HDLCholesterolValue()) && bpFormatReg.test(self.BloodPressure()) && bpFormatReg.test(self.DBloodPressure()) && (self.Diabetic() != null || self.Diabetic() != undefined) && (self.Smoker() != null || self.Smoker() != undefined) && (self.Hypertension() != null || self.Hypertension() != undefined) && statinAspirinAvailable) {
            return true;
        } else {
            return false;
        }
    }, self);
    self.invalidLdlMessage = ko.pureComputed(function () {
        //resizeHeight();
        if (self.LDLCholesterol() >= 190 && !isNaN(parseFloat(self.LDLCholesterolValue()))) {
            return "High intensity statin initiation in patients with LDL-C ≥ 190 mg/dL (4.9 mmol/L) is strongly recommended. See Advice tab in for more details.";
        } else if (self.LDLCholesterol() <= 69 && !isNaN(parseFloat(self.LDLCholesterolValue()))) {
            return "10-year ASCVD risk not available for patients with LDL-C < 70 mg/dL. See Advice tab for more information on managing other risk factors."
        }
        return undefined;
    }, self);
    self.optimalRisk = ko.pureComputed(function () {
        return self.VisitType() ? self.RiskFormula.optimalFollowUpRisk() : self.RiskFormula.optimalBaselineRisk();
    }, self);
    self.validOptimalRiskValue = ko.pureComputed(function () {
        var i = "~";
        if (self.LDLCholesterol() >= 190) {
            return i;
        } else {
            var optRisk = self.optimalRisk();
            if (self.selectedLanguage() == "ar") {
                var optRiskValue = optRisk.replace('%', '');
                optRiskValue.trim();
                optRiskValue = '%' + optRiskValue;
                return optRiskValue;
            } else {
                return optRisk;
            }
        }
    }, self);
    self.major = ko.computed(function () {
        var tc = self.TotalCholesterol();
        var bp = self.BloodPressure();
        var dbp = self.DBloodPressure();
        if (self.TotalCholesterol() == "")
            tc = undefined;
        if (self.BloodPressure() == "")
            bp = undefined;
        if (self.DBloodPressure() == "")
            dbp = undefined;

        var i = (tc >= 240 ? 1 : 0) + (bp >= 160 ? 1 : 0) + (dbp >= 100 ? 1 : 0) + (self.isHypertension() ? 1 : 0) + (self.isSmoker() ? 1 : 0) + (self.isDiabetic() ? 1 : 0);
        return i;
    }, self);
    self.elevated = ko.computed(function () {
        var tc = self.TotalCholesterol();
        var bp = self.BloodPressure();
        var dbp = self.DBloodPressure();
        if (self.TotalCholesterol() == "")
            tc = undefined;
        if (self.BloodPressure() == "")
            bp = undefined;
        if (self.DBloodPressure() == "")
            dbp = undefined;

        var i = ((tc >= 200 && tc < 240 ? 1 : 0) + (dbp >= 90 && dbp < 100 ? 1 : 0) + (bp >= 140 && bp < 160 && self.isHypertension() == false ? 1 : 0) >= 1 ? 1 : 0) * (self.major() == 0 ? 1 : 0);
        return i;
    }, self);
    self.allOptimal = ko.computed(function () {
        var tc = self.TotalCholesterol();
        var bp = self.BloodPressure();
        var dbp = self.DBloodPressure();
        if (self.TotalCholesterol() == "")
            tc = undefined;
        if (self.BloodPressure() == "")
            bp = undefined;
        if (self.DBloodPressure() == "")
            dbp = undefined;
        var i;
        i = ((tc < 180 ? 1 : 0) + (bp < 120 ? 1 : 0) + (dbp < 80 ? 1 : 0) * (self.isHypertension() ? 0 : 1) == 3 ? 1 : 0) * (self.major() == 0 ? 1 : 0);
        return i;
    }, self);
    self.notOptimal = ko.computed(function () {
        var tc = self.TotalCholesterol();
        var bp = self.BloodPressure();
        var dbp = self.DBloodPressure();
        if (self.TotalCholesterol() == "")
            tc = undefined;
        if (self.BloodPressure() == "")
            bp = undefined;
        if (self.DBloodPressure() == "")
            dbp = undefined;

        var i = ((tc >= 180 && tc < 200 ? 1 : 0) + (dbp >= 80 && dbp < 100 ? 1 : 0) + (bp >= 120 && bp < 140 && self.isHypertension() == false ? 1 : 0)) * (self.elevated() == 0 ? 1 : 0) * (self.major() == 0 ? 1 : 0) >= 1 ? 1 : 0;

        return i;
    }, self);

    self.yourLifeTimeRisk = ko.computed(function () {
        var i = "~";
        if (self.computedValuesAvailableForLifetimeRisk()) {
            if (self.major() > 1) {
                i = self.lookupASCVD("major2");
            }
            if (self.major() == 1) {
                i = self.lookupASCVD("major1");
            }
            if (self.elevated() == 1) {
                i = self.lookupASCVD("elevated");
            }
            if (self.notOptimal() == 1) {
                i = self.lookupASCVD("notOptimal");
            }
            if (self.allOptimal() == 1) {
                i = self.lookupASCVD("allOptimal");
            }
        }
        self.emailYourLifeTimeRisk(i + "%");
        if (self.selectedLanguage() == 'ar') {
            return "%" + i;
        } else {
            return i + "%";
        }
        // return i + "%";
    }, self);
    //var globalFun = self.yourLifeTimeRisk;    
    self.lookupASCVD = function (category) {
        if (self.Sex() != null) return eval("self.ascvdTable." + self.Sex().toLowerCase() + "." + category + "");
        return "~";
    };
    self.ascvdTable = {
        female: {
            major2: 50,
            major1: 39,
            elevated: 39,
            notOptimal: 27,
            allOptimal: 8
        },
        male: {
            major2: 69,
            major1: 50,
            elevated: 46,
            notOptimal: 36,
            allOptimal: 5
        }
    };
}

function viewModel() {
    var self = this;
    self.$debug = true;
    self.languagePreferenceKey = "MLASCVDLanguage";
    self.uomPrefernceKey = "uom";
    self.languages = languages;
    self.tooltips = toolTips;
    self.FormData = ko.observable(formDataEnglish);
    self.mySelectedLanguage = ko.observable();
    self.setUserPrefLang = ko.observable('');
    self.languageChanged = ko.observable(false);
    self.inputSectionSexValue = ko.observable();
    self.inputSectionRaceValue = ko.observable();
    self.inputSectionSmokerValue = ko.observable();
    self.inputSectionDiaHistoryValue = ko.observable();
    self.inputSectionHypTreatmentValue = ko.observable();

    self.usUnit = ko.observable(self.FormData().formLabelText.cholesterol_us_unit);
    self.isUnit = ko.observable(self.FormData().formLabelText.cholesterol_is_unit);

    self.Form = ko.observable(new formObject(self));
    self.Statins = ko.observableArray(statins);
    self.Glossary = ko.observableArray(glossary);
    self.glossaryItems = ko.observableArray();
    for (var i in self.Glossary()) {
        if (self.Glossary().hasOwnProperty(i)) {
            self.glossaryItems.push(self.Glossary()[i]);
        }
    }
    self.glossaryQuery = ko.observable('');
    self.glossaryQuery.subscribe(function (value) {
        self.glossaryItems.removeAll();
        for (var i in self.Glossary()) {
            if (self.Glossary()[i].label.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                self.glossaryItems.push(self.Glossary()[i]);
            }
        }
    });
    self.onForecastPage = ko.observable(false);
    self.doNotShowAgainVisible = ko.observable(true);
    self.doNotShowAgainRace = ko.observable(true);
    self.validate = ko.observable(false);
    self.baselineValidate = ko.observable(false);
    self.viewportHeight = ko.observable(window.innerHeight);
    self.viewportWidth = ko.observable(window.innerWidth);
    self.sexValidation = ko.pureComputed(function () {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData().notifications.sex[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.diabeticValidation = ko.pureComputed(function () {
        if (self.Form().Diabetic() == null && self.validate() == true) {
            return self.FormData().notifications.diabetic[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.smokerValidation = ko.pureComputed(function () {
        if (self.Form().Smoker() == null && self.validate() == true) {
            return self.FormData().notifications.smoker[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.hypertensionValidation = ko.pureComputed(function () {
        if (self.Form().Hypertension() == null && self.validate() == true) {
            return self.FormData().notifications.hypertension[0];
        } else if (self.Form().Hypertension() != null && self.Form().Hypertension() == "No" && self.Form().BaselineHypertension() == "Yes" && self.isFollowUp()) {
            return self.FormData().notifications.hypertension[1];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.ageValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().Age() != undefined) {
            if (self.Form().Age() == null && self.validate() == true) {
                i = self.FormData().notifications.age[0];
            } else if (self.Form().Age() != null && !(new RegExp("^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$")).test(self.Form().Age())) {
                i = self.FormData().notifications.age[1];
            } else if (self.Form().Age() != null && (self.Form().Age() < 20 || self.Form().Age() > 79)) {
                i = self.Form().UnitOfMeasure() ? self.FormData().notifications.age[1] : self.FormData().notifications.age[1];

            } else if (self.Form().Age() != null && self.Form().Age() >= 20 && self.Form().Age() < 40) {
                self.Form().Age(Math.round(self.Form().Age()));
                i = self.FormData().notifications.age[2];
            } else if (self.Form().Age() && (self.Form().Age() > 59 || self.Form().Age() < 40) && self.Form().VisitType() === false) {
                self.Form().Age(Math.round(self.Form().Age()));
                i = self.FormData().notifications.age[3];
            } else {
                self.Form().Age(Math.round(self.Form().Age()));
                i = self.FormData().notifications.blank[0];
            }
        }
        return i;
    }, self);

    self.ageValidation.subscribe(function () {
        if (self.ageValidation().id === 2) {
            self.resetBaselineValues();
            self.Form().VisitTypeUI(undefined);
            self.Form().VisitType(false);
            self.validate(false);
        }
    });
    self.invalidAgeValue = ko.pureComputed(function () {
        //resizeHeight();
        return (self.ageValidation().id === 2 && !isNaN(self.Form().Age())) ? true : false;
    }, self);
    self.raceValidation = ko.pureComputed(function () {
        if (self.Form().Race() == null && self.validate() == true) {
            return self.FormData().notifications.race[0];
        } else if (self.Form().Race() != null && self.Form().Race() == "Other") {
            if (self.doNotShowAgainRace() !== false) {
                $('.other-race').css('display', '');
                return self.FormData().notifications.race[1];
            }
            return false;
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.hdlValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().HDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData().notifications.hdlCholesterol[0];
        } else if (self.Form().HDLCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().HDLCholesterolValue())) {
           // i = self.FormData().notifications.totalCholesterol[4];
         i = self.Form().UnitOfMeasure() ? self.FormData().notifications.hdlCholesterol[4] : self.FormData().notifications.hdlCholesterol[3];
        } else if (self.Form().HDLCholesterolValue() != null && (self.Form().HDLCholesterol() < 20 || self.Form().HDLCholesterol() > 100)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.hdlCholesterol[2] : self.FormData().notifications.hdlCholesterol[1];


        } else {
            i = self.FormData().notifications.blank[0];

        }
        return i;
    }, self);
    self.totalCholesterolValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().TotalCholesterolValue() == null && self.validate() == true) {
            i = self.FormData().notifications.totalCholesterol[0];
        } else if (self.Form().TotalCholesterolValue() != null && !((new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().TotalCholesterolValue()))) {
            //i = self.FormData().notifications.totalCholesterol[4];
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.totalCholesterol[4] : self.FormData().notifications.totalCholesterol[3];
        } else if (self.Form().TotalCholesterolValue() != null && (self.Form().TotalCholesterol() < 130 || self.Form().TotalCholesterol() > 320)) {
            //self.Form().TotalCholesterolValue(Math.round(self.Form().TotalCholesterolValue()));
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.totalCholesterol[2] : self.FormData().notifications.totalCholesterol[1];
        } else {
            i = self.FormData().notifications.blank[0];
        }
        return i;
    }, self);
    self.ldlValidation = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$");

        var i = self.FormData().notifications.blank[0];
        if (self.Form().LDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData().notifications.ldlCholesterol[0];
        } else if (self.Form().LDLCholesterolValue() != null && !formatRegex.test(self.Form().LDLCholesterolValue())) {
            i = self.FormData().notifications.ldlCholesterol[4];
        } else if (self.Form().LDLCholesterolValue() != null && (self.Form().LDLCholesterol() < 30 || self.Form().LDLCholesterol() > 300)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.ldlCholesterol[2] : self.FormData().notifications.ldlCholesterol[1];
        } else if (self.Form().LDLCholesterolValue() != null && (parseFloat(self.Form().LDLCholesterol().toFixed(3)) > parseFloat((self.Form().TotalCholesterol() - self.Form().HDLCholesterol()).toFixed(3)))) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.ldlCholesterol[3] : self.FormData().notifications.ldlCholesterol[3];
        } else {
            i = self.FormData().notifications.blank[0];
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
            return self.FormData().notifications.bloodPresure[0];
        } else if (self.Form().BloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().BloodPressure())) {
            return self.FormData().notifications.bloodPresure[2];
        } else if (self.Form().BloodPressure() != null && (self.Form().BloodPressure() < 90 || self.Form().BloodPressure() > 200)) {
            return self.FormData().notifications.bloodPresure[1];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.DBloodPressureValidation = ko.pureComputed(function () {
        if (self.Form().DBloodPressure() == null && self.validate() == true) {
            return self.FormData().notifications.dbloodPresure[0];
        } else if (self.Form().DBloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().DBloodPressure())) {
            return self.FormData().notifications.dbloodPresure[2];
        } else if (self.Form().DBloodPressure() != null && (self.Form().DBloodPressure() < 60 || self.Form().DBloodPressure() > 130)) {
            return self.FormData().notifications.dbloodPresure[1];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.visitTypeValidation = ko.pureComputed(function () {
        //If current LDLCholesterol value is present and greater than 190, then we 
        //don't need to check VisitType value in Query String
        //        if (self.Form().LDLCholesterol() >= 190) {
        //            return self.FormData().notifications.blank[0];
        //        }
        if (self.Form().VisitTypeUI() == undefined && self.validate() == true) {
            return self.FormData().notifications.visitType[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.statinValidation = ko.pureComputed(function () {
        if (self.Form().OnStatin() == null && self.validate() == true && self.Form().VisitType()) {
            return self.FormData().notifications.statin[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.aspirinValidation = ko.pureComputed(function () {
        if (self.Form().OnAspirin() == null && self.validate() == true && self.Form().VisitType()) {
            return self.FormData().notifications.aspirin[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.isRaceOther = ko.pureComputed(function () {
        if (self.Form().Race() != null) {
            return self.Form().Race() == "Other" ? true : false;
        } else {
            return false;
        }
    }, self);
    self.recommendationUnlock = ko.pureComputed(function () {
        var dbpAvailable, ldlAvailable, statinAvailable, aspirinAvailable,
            onStatin = self.Form().VisitType() ? self.Form().OnStatin() : "not required",
            onAspirin = self.Form().VisitType() ? self.Form().OnAspirin() : "not required",
            ldlCholesterol = self.Form().LDLCholesterol(),
            formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$"),
            bpformatRegex = new RegExp("^[0-9]{1,3}$");

        dbpAvailable = (!isNaN(self.Form().DBloodPressure()) && bpformatRegex.test(self.Form().DBloodPressure()) && self.Form().DBloodPressure() >= 60 && self.Form().DBloodPressure() <= 130) ? true : false;
        ldlAvailable = !isNaN(ldlCholesterol) && formatRegex.test(self.Form().LDLCholesterolValue()) && ldlCholesterol >= 30 && ldlCholesterol <= 300 && (parseFloat(ldlCholesterol.toFixed(3)) <= parseFloat((self.Form().TotalCholesterol() - self.Form().HDLCholesterol()).toFixed(3)));
        statinAvailable = onStatin != null && onStatin != undefined;
        aspirinAvailable = onAspirin != null && onAspirin != undefined;

        //console.log(dbpAvailable, ldlAvailable, statinAvailable, aspirinAvailable);
        //console.log('checking computed values',self.Form().computedValuesAvailable(), self.isFollowUp(), self.Form().computedBaselineValuesAvailable());

        /**
         * Suppressed non required values dependency to enable View Summary button. 
         */
        // if (self.Form().computedValuesAvailable() && self.isFollowUp() && self.Form().computedBaselineValuesAvailable() && self.Form().Age() >= 40 && self.Form().Age() <= 79 ) {
        //     //In case of 'Yes', do not make Advice tab available until ALL values are available
        //     return true && dbpAvailable && ldlAvailable && statinAvailable && aspirinAvailable;
        // } else if (self.Form().computedValuesAvailable() && !self.isFollowUp() && self.Form().Age() >= 40 && self.Form().Age() <= 79) {
        //     //In case of 'No', do not make Advice tab available until LDL and DBP are entered
        //     return true && dbpAvailable && ldlAvailable;
        // } else {
        //     return false;
        // }

        if (self.Form().computedValuesAvailable()) {
            self.setLabelsForInputSection();
        }
        resizeHeight();
        if (self.Form().computedValuesAvailable() && self.Form().Age() >= 40 && self.Form().Age() <= 79) {
            return true && dbpAvailable;
        } else {
            return false;
        }

    }, self);
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
    self.resetAll = function () {
        self.validate(false);
        self.Form().Race(undefined);
        self.Form().Age(undefined);
        self.Form().Sex(null);
        self.Form().HDLCholesterolValue(undefined);
        self.Form().LDLCholesterolValue(undefined);
        self.Form().TotalCholesterolValue(undefined);
        self.Form().BloodPressure(undefined);
        self.Form().DBloodPressure(undefined);
        self.Form().Diabetic(null);
        self.Form().Smoker(null);
        self.Form().Hypertension(null);
        self.Form().OnAspirin(null);
        self.Form().OnStatin(null);
        self.Form().VisitTypeUI(undefined);
        self.Form().VisitType(false);
        self.Form().BaselineAge(undefined);
        self.Form().BaselineHDLCholesterolValue(undefined);
        self.Form().BaselineTotalCholesterolValue(undefined);
        self.Form().BaselineLDLCholesterolValue(undefined);
        self.Form().BaselineBloodPressure(undefined);
        self.Form().BaselineSmoker(null);
        self.Form().BaselineHypertension(null);
        self.Form().BaselineDiabetic(null);
        //self.Form().InitialVisitText('Initial Visit (Current)');
        self.resetForcast();
        resizeHeight();
    };
    self.resetBaselineValues = function () {
        self.baselineValidate(false);
        self.Form().BaselineAge(undefined);
        self.Form().BaselineHDLCholesterolValue(undefined);
        self.Form().BaselineTotalCholesterolValue(undefined);
        self.Form().BaselineLDLCholesterolValue(undefined);
        self.Form().BaselineBloodPressure(undefined);
        self.Form().BaselineSmoker(null);
        self.Form().BaselineHypertension(null);
        self.Form().BaselineDiabetic(null);
        self.Form().RemoveTreatmentOne();
        self.Form().RemoveTreatmentTwo();
        self.Form().RemoveTreatmentThree();
        self.Form().isTreatmentOne(true);
    };
    self.resetForcast = function () {
        self.Form().RemoveTreatmentOne();
        self.Form().RemoveTreatmentTwo();
        self.Form().RemoveTreatmentThree();
        self.Form().isTreatmentOne(true);
    };
    //notification
    self.criticalNotification = ko.observableArray([]);
    self.appStoreURL = ko.observable(notification.appStoreURL);
    self.notificationData = ko.observableArray([]);
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
            return value == 'NA' ? 'NA<sup>¶</sup>' : '~%';
        }
    };
    self.NavigateToForecastPage = function (data) {
        if (self.Form().VisitTypeUI() == false) {
            if (self.recommendationUnlock()) {
                self.validate(true);
                self.baselineValidate(true);
                window.location.href = '#!/calculate/therapy/';
                if (data != 'null') {
                    if (self.Form().VisitTypeUI()) {
                        self.gaRecordInitialValues();
                        self.gaRecordBaselineValues();
                    } else {
                        self.gaRecordInitialValues();
                    }
                }

            } else {
                //errorTextBoxScroll();
            }
        } else if (self.recommendationUnlock() && self.Form().VisitType() == false && self.Form().invalidLdlMessage()) {
            self.validate(false);
            self.baselineValidate(false);
            window.location.href = '#!/calculate/therapy/';
        }
    };
    self.NavigateToSummaryPage = function (data) {
        /** && self.Form().VisitTypeUI()!=undefined 'Removed from condition for MLASCVD */
        if (self.recommendationUnlock()) {
            self.validate(true);
            self.baselineValidate(true);
            window.location.href = '#!/calculate/advice/riskgraph/';
            if (self.Form().VisitTypeUI()) {
                self.gaRecordInitialValues();
                /** Suppressed for MLASCVD */
                // self.gaRecordBaselineValues();
            } else {
                self.gaRecordInitialValues();
            }
        } else if (self.recommendationUnlock() && self.Form().VisitType() == false && self.Form().invalidLdlMessage()) {
            self.validate(false);
            self.baselineValidate(false);
            window.location.href = '#!/calculate/advice/riskgraph/';
        } else if (self.recommendationUnlock()) {
            window.location.href = '#!/calculate/advice/riskgraph/';
        }
        /**
         * Added else if with only self.recommendationUnlock()' to enable View Summary routing for MLSCVD 
         */

        //        else {}
        //errorTextBoxScroll();
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
        /*if(self.validate()===true && self.Form().QuiteSmokingMonths()===undefined) {
            return self.FormData().notifications.smokingSelect[0];
        }
        else {
            return self.FormData().notifications.blank[0];
        }*/
        return self.FormData().notifications.blank[0];
    }, self);
    self.baselineAgeValidation = ko.computed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().BaselineAge() == null && self.baselineValidate() == true) {
            i = self.FormData().notifications.baselineAge[0];
        } else if (self.Form().BaselineAge() != null && !(new RegExp("^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$")).test(self.Form().BaselineAge())) {
            i = self.FormData().notifications.baselineAge[1];
        } else if (self.Form().BaselineAge() != null && (self.Form().BaselineAge() < 40 || self.Form().BaselineAge() > 79)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.age[1] : self.FormData().notifications.baselineAge[1];

        } else if (self.Form().BaselineAge() != null && self.Form().Age() && (self.Form().BaselineAge() > self.Form().Age())) {
            return self.FormData().notifications.baselineAge[2];
        } else {
            self.Form().BaselineAge(Math.round(self.Form().BaselineAge()));
            i = self.FormData().notifications.blank[0];

        }
        return i;
    }, self);
    self.baselineTotalCholesterolValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().BaselineTotalCholesterolValue() == null && self.baselineValidate() == true) {
            i = self.FormData().notifications.baselineTotalCholesterol[0];
        } else if (self.Form().BaselineTotalCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().BaselineTotalCholesterolValue())) {
            i = self.FormData().notifications.baselineTotalCholesterol[3];
        } else if (self.Form().BaselineTotalCholesterolValue() != null && (self.Form().BaselineTotalCholesterol() < 130 || self.Form().BaselineTotalCholesterol() > 320)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.baselineTotalCholesterol[2] : self.FormData().notifications.baselineTotalCholesterol[1];
        } else {
            i = self.FormData().notifications.blank[0];
        }
        return i;
    }, self);
    self.baselineHdlValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().BaselineHDLCholesterolValue() == null && self.baselineValidate() == true) {
            i = self.FormData().notifications.baselineHdlCholesterol[0];

        } else if (self.Form().BaselineHDLCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().BaselineHDLCholesterolValue())) {
            i = self.FormData().notifications.baselineHdlCholesterol[3];
        } else if (self.Form().BaselineHDLCholesterolValue() != null && (self.Form().BaselineHDLCholesterol() < 20 || self.Form().BaselineHDLCholesterol() > 100)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.baselineHdlCholesterol[2] : self.FormData().notifications.baselineHdlCholesterol[1];

        } else {
            i = self.FormData().notifications.blank[0];

        }
        return i;
    }, self);
    self.baselineLdlValidation = ko.pureComputed(function () {
        var i = self.FormData().notifications.blank[0];
        if (self.Form().BaselineLDLCholesterolValue() == null && self.baselineValidate() == true) {
            i = self.FormData().notifications.baselineLdlCholesterol[0];
        } else if (self.Form().BaselineLDLCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().BaselineLDLCholesterolValue())) {
            i = self.FormData().notifications.baselineLdlCholesterol[4];
        } else if (self.Form().BaselineLDLCholesterol() != null && (self.Form().BaselineLDLCholesterol() < 30 || self.Form().BaselineLDLCholesterol() > 300)) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.baselineLdlCholesterol[2] : self.FormData().notifications.baselineLdlCholesterol[1];
        } else if (self.Form().BaselineLDLCholesterolValue() != null && (parseFloat(self.Form().BaselineLDLCholesterol().toFixed(3)) > parseFloat((self.Form().BaselineTotalCholesterol() - self.Form().BaselineHDLCholesterol()).toFixed(3)))) {
            i = self.Form().UnitOfMeasure() ? self.FormData().notifications.baselineLdlCholesterol[3] : self.FormData().notifications.baselineLdlCholesterol[3];
        } else {
            i = self.FormData().notifications.blank[0];
        }
        return i;
    }, self);
    self.baselineBloodPresureValidation = ko.pureComputed(function () {
        if (self.Form().BaselineBloodPressure() == null && self.baselineValidate() == true) {
            return self.FormData().notifications.baselineBloodPresure[0];
        } else if (self.Form().BaselineBloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().BaselineBloodPressure())) {
            return self.FormData().notifications.baselineBloodPresure[2];
        } else if (self.Form().BaselineBloodPressure() != null && (self.Form().BaselineBloodPressure() < 90 || self.Form().BaselineBloodPressure() > 200)) {
            return self.FormData().notifications.baselineBloodPresure[1];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.baselineHypertensionValidation = ko.pureComputed(function () {
        if (self.Form().BaselineHypertension() == null && self.baselineValidate() == true) {
            return self.FormData().notifications.baselineHypertension[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.baselineDiabeticValidation = ko.pureComputed(function () {
        if (self.Form().BaselineDiabetic() == null && self.baselineValidate() == true) {
            return self.FormData().notifications.baselineDiabetic[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);
    self.baselineSmokerValidation = ko.pureComputed(function () {
        if (self.Form().BaselineSmoker() == null && self.baselineValidate() == true) {
            return self.FormData().notifications.baselineSmoker[0];
        } else {
            return self.FormData().notifications.blank[0];
        }
    }, self);

    self.recommendationType = ko.pureComputed(function () {

        var cvRisk = (self.Form().TenYearCurrentRisk() != undefined) ? parseFloat(self.Form().TenYearCurrentRisk()) : undefined;
        var bp = self.Form().BloodPressure();
        var dbp = self.Form().DBloodPressure();
        dbp = (isNaN(dbp) == true) ? undefined : dbp;
        var ldl = self.Form().LDLCholesterol();
        var diabetic = self.Form().isDiabetic();
        var age = self.Form().Age();
        var typeSmoker = self.Form().Smoker();
        var quitSmoking = self.Form().QuiteSmokingMonths();

        var advice = {
            bpControl: self.FormData().bpAdviceText.DUMMY,
            ldlControl: self.FormData().ldlAdviceText.DUMMY,
            smokingControl: self.FormData().smokingAdviceText.DUMMY,
            aspirinControl: self.FormData().aspirinAdviceText.DUMMY,
            diabetesControl: self.FormData().diabetesAdviceText.DUMMY
        }
        for (var bpadviceProp in self.FormData().bpAdviceText) {
            if (bpadviceProp == "DUMMY") continue;
            if ("conditional" in self.FormData().bpAdviceText[bpadviceProp]) {
                var execute = "(function(){if(" + self.FormData().bpAdviceText[bpadviceProp].conditional + ")return self.FormData().bpAdviceText[bpadviceProp]; else return self.FormData().bpAdviceText.DUMMY;})()"
                advice.bpControl = eval(execute);
                if (advice.bpControl != self.FormData().bpAdviceText.DUMMY)
                    break;
            }
        }
        for (var ldladviceProp in self.FormData().ldlAdviceText) {
            if (ldladviceProp == "DUMMY") continue;
            if ("conditional" in self.FormData().ldlAdviceText[ldladviceProp]) {
                var execute = "(function(){if(" + self.FormData().ldlAdviceText[ldladviceProp].conditional + ")return self.FormData().ldlAdviceText[ldladviceProp]; else return self.FormData().ldlAdviceText.DUMMY;})()"
                advice.ldlControl = eval(execute);
                if (advice.ldlControl != self.FormData().ldlAdviceText.DUMMY)
                    break;
            }
        }
        for (var aspirinadviceProp in self.FormData().aspirinAdviceText) {
            if (aspirinadviceProp == "DUMMY") continue;
            if ("conditional" in self.FormData().aspirinAdviceText[aspirinadviceProp]) {
                var execute = "(function(){if(" + self.FormData().aspirinAdviceText[aspirinadviceProp].conditional + ")return self.FormData().aspirinAdviceText[aspirinadviceProp]; else return self.FormData().aspirinAdviceText.DUMMY;})()"
                advice.aspirinControl = eval(execute);
                if (advice.aspirinControl != self.FormData().aspirinAdviceText.DUMMY)
                    break;
            }
        }
        for (var diabetesadviceProp in self.FormData().diabetesAdviceText) {
            if (diabetesadviceProp == "DUMMY") continue;
            if ("conditional" in self.FormData().diabetesAdviceText[diabetesadviceProp]) {
                var execute = "(function(){if(" + self.FormData().diabetesAdviceText[diabetesadviceProp].conditional + ")return self.FormData().diabetesAdviceText[diabetesadviceProp]; else return self.FormData().diabetesAdviceText.DUMMY;})()"
                advice.diabetesControl = eval(execute);
                if (advice.diabetesControl != self.FormData().diabetesAdviceText.DUMMY)
                    break;
            }
        }

        for (var smokingadviceProp in self.FormData().smokingAdviceText) {
            if (smokingadviceProp == "DUMMY") continue;
            if ("conditional" in self.FormData().smokingAdviceText[smokingadviceProp]) {
                var execute = "(function(){if(" + self.FormData().smokingAdviceText[smokingadviceProp].conditional + ")return self.FormData().smokingAdviceText[smokingadviceProp]; else return self.FormData().smokingAdviceText.DUMMY;})()"
                advice.smokingControl = eval(execute);
                if (advice.smokingControl != self.FormData().smokingAdviceText.DUMMY)
                    break;
            }
        }

        return advice;
    }, self);
    self.Form().Smoker.subscribe(function (newValue) {
        self.Form().BaselineSmoker(null);
        if (self.Form().Smoker() == "Yes") {
            self.FormData().treatmentOne[0].enable(true);
            self.FormData().treatmentTwo[0].enable(true);
            self.FormData().treatmentThree[0].enable(true);
        } else {
            self.FormData().treatmentOne[0].enable(false);
            self.FormData().treatmentTwo[0].enable(false);
            self.FormData().treatmentThree[0].enable(false);

            var isSmoking = ko.utils.arrayFirst(self.Form().TratmentOne_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentOne_selected.remove(appmodel.FormData().treatmentOne[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentTwo_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentTwo_selected.remove(appmodel.FormData().treatmentTwo[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentThree_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentThree_selected.remove(appmodel.FormData().treatmentThree[0]);
            }
        }
    });
    self.gaRecordInitialValues = function () {
        var $tag = "undefined";
        var $race = appmodel.Form().Race();
        var $age = appmodel.Form().Age();
        var $sex = appmodel.Form().Sex();
        var $hdl = appmodel.Form().HDLCholesterol();
        var $tot = appmodel.Form().TotalCholesterol();
        var $bp = appmodel.Form().BloodPressure();
        var $dbp = appmodel.Form().DBloodPressure();
        var $unit = appmodel.Form().UnitOfMeasure() ? 'SI' : 'US';
        var $visit = appmodel.Form().VisitType() ? 'Follow up' : 'Initial';
        
        if ($age) {
            $tag = "undefined";
            if ($age >= 20 && $age <= 29) {
                $tag = "Age_20-29"
            } else if ($age >= 30 && $age <= 39) {
                $tag = "Age_30-39"
            } else if ($age >= 40 && $age <= 49) {
                $tag = "Age_40-49"
            } else if ($age >= 50 && $age <= 59) {
                $tag = "Age_50-59"
            } else if ($age >= 60 && $age <= 69) {
                $tag = "Age_60-69"
            } else if ($age >= 70 && $age <= 75) {
                $tag = "Age_70-75"
            } else if ($age >= 76 && $age <= 79) {
                $tag = "Age_76-79"
            }
        }
        if ($tot) {
            $tag = "undefined";
            if ($tot >= 130 && $tot <= 139) {
                $tag = "TCHOL_130-139 mg/dl";
            } else if ($tot >= 140 && $tot <= 159) {
                $tag = "TCHOL_140-159 mg/dl";
            } else if ($tot >= 160 && $tot <= 179) {
                $tag = "TCHOL_160-179 mg/dl";
            } else if ($tot >= 180 && $tot <= 199) {
                $tag = "TCHOL_180-199 mg/dl";
            } else if ($tot >= 200 && $tot <= 219) {
                $tag = "TCHOL_200-219 mg/dl";
            } else if ($tot >= 220 && $tot <= 239) {
                $tag = "TCHOL_220-239 mg/dl";
            } else if ($tot >= 240 && $tot <= 259) {
                $tag = "TCHOL_240-259 mg/dl";
            } else if ($tot >= 260 && $tot <= 279) {
                $tag = "TCHOL_260-279 mg/dl";
            } else if ($tot >= 280 && $tot <= 299) {
                $tag = "TCHOL_280-299 mg/dl";
            } else if ($tot >= 300 && $tot <= 320) {
                $tag = "TCHOL_300-320 mg/dl";
            }
        }
        if ($hdl) {
            $tag = "undefined";
            if ($hdl >= 20 && $hdl <= 29) {
                $tag = "HDL_20-29 mg/dl";
            } else if ($hdl >= 30 && $hdl <= 39) {
                $tag = "HDL_30-39 mg/dl";
            } else if ($hdl >= 40 && $hdl <= 49) {
                $tag = "HDL_40-49 mg/dl";
            } else if ($hdl >= 50 && $hdl <= 59) {
                $tag = "HDL_50-59 mg/dl";
            } else if ($hdl >= 60 && $hdl <= 69) {
                $tag = "HDL_60-69 mg/dl";
            } else if ($hdl >= 70 && $hdl <= 79) {
                $tag = "HDL_70-79 mg/dl";
            } else if ($hdl >= 80 && $hdl <= 89) {
                $tag = "HDL_80-89 mg/dl";
            } else if ($hdl >= 90 && $hdl <= 100) {
                $tag = "HDL_90-100 mg/dl";
            }
        }
        if ($bp) {
            $tag = "undefined";
            if ($bp >= 90 && $bp <= 109) {
                $tag = "SBP_90-109 mm HG";
            } else if ($bp >= 110 && $bp <= 119) {
                $tag = "SBP_110-119 mm HG";
            } else if ($bp >= 120 && $bp <= 129) {
                $tag = "SBP_120-129 mm HG";
            } else if ($bp >= 130 && $bp <= 139) {
                $tag = "SBP_130-139 mm HG";
            } else if ($bp >= 140 && $bp <= 149) {
                $tag = "SBP_140-149 mm HG";
            } else if ($bp >= 150 && $bp <= 159) {
                $tag = "SBP_150-159 mm HG";
            } else if ($bp >= 160 && $bp <= 180) {
                $tag = "SBP_160-180 mm HG";
            } else if ($bp >= 181 && $bp <= 200) {
                $tag = "SBP_181-200 mm HG";
            }
        }

        if ($dbp) {
            $tag = "undefined";
            if ($dbp >= 60 && $dbp <= 69) {
                $tag = "DBP_60-69 mm Hg";
            } else if ($dbp >= 70 && $dbp <= 79) {
                $tag = "DBP_70-79 mm Hg";
            } else if ($dbp >= 80 && $dbp <= 89) {
                $tag = "DBP_80-89 mm Hg";
            } else if ($dbp >= 90 && $dbp <= 99) {
                $tag = "DBP_90-99 mm Hg";
            } else if ($dbp >= 100 && $dbp <= 109) {
                $tag = "DBP_100-109 mm Hg";
            } else if ($dbp >= 110 && $dbp <= 119) {
                $tag = "DBP_110-119 mm Hg";
            } else if ($dbp >= 120 && $dbp <= 129) {
                $tag = "DBP_120-130 mm Hg";
            }
        }
    }
    self.gaRecordBaselineValues = function () {
        var $tag = "undefined";
        var $age = appmodel.Form().BaselineAge();
        var $hdl = appmodel.Form().BaselineHDLCholesterol();
        var $tot = appmodel.Form().BaselineTotalCholesterol();
        var $bp = appmodel.Form().BaselineBloodPressure();
        if ($age) {
            $tag = "undefined";
            if ($age >= 20 && $age <= 29) {
                $tag = "Baseline Age_20-29"
            } else if ($age >= 30 && $age <= 39) {
                $tag = "Baseline Age_30-39"
            } else if ($age >= 40 && $age <= 49) {
                $tag = "Baseline Age_40-49"
            } else if ($age >= 50 && $age <= 59) {
                $tag = "Baseline Age_50-59"
            } else if ($age >= 60 && $age <= 69) {
                $tag = "Baseline Age_60-69"
            } else if ($age >= 70 && $age <= 75) {
                $tag = "Baseline Age_70-75"
            } else if ($age >= 76 && $age <= 79) {
                $tag = "Baseline Age_76-79"
            }
        }
        if ($tot) {
            $tag = "undefined"
            if ($tot >= 130 && $tot <= 139) {
                $tag = "BLN TCHOL_130-139 mg/dl";
            } else if ($tot >= 140 && $tot <= 159) {
                $tag = "BLN TCHOL_140-159 mg/dl";
            } else if ($tot >= 160 && $tot <= 179) {
                $tag = "BLN TCHOL_160-179 mg/dl";
            } else if ($tot >= 180 && $tot <= 199) {
                $tag = "BLN TCHOL_180-199 mg/dl";
            } else if ($tot >= 200 && $tot <= 219) {
                $tag = "BLN TCHOL_200-219 mg/dl";
            } else if ($tot >= 220 && $tot <= 239) {
                $tag = "BLN TCHOL_220-239 mg/dl";
            } else if ($tot >= 240 && $tot <= 259) {
                $tag = "BLN TCHOL_240-259 mg/dl";
            } else if ($tot >= 260 && $tot <= 279) {
                $tag = "BLN TCHOL_260-279 mg/dl";
            } else if ($tot >= 280 && $tot <= 299) {
                $tag = "BLN TCHOL_280-299 mg/dl";
            } else if ($tot >= 300 && $tot <= 320) {
                $tag = "BLN TCHOL_300-320 mg/dl";
            }
        }
        if ($hdl) {
            $tag = "undefined"
            if ($hdl >= 20 && $hdl <= 29) {
                $tag = "BLN HDL_20-29 mg/dl";
            } else if ($hdl >= 30 && $hdl <= 39) {
                $tag = "BLN HDL_30-39 mg/dl";
            } else if ($hdl >= 40 && $hdl <= 49) {
                $tag = "BLN HDL_40-49 mg/dl";
            } else if ($hdl >= 50 && $hdl <= 59) {
                $tag = "BLN HDL_50-59 mg/dl";
            } else if ($hdl >= 60 && $hdl <= 69) {
                $tag = "BLN HDL_60-69 mg/dl";
            } else if ($hdl >= 70 && $hdl <= 79) {
                $tag = "BLN HDL_70-79 mg/dl";
            } else if ($hdl >= 80 && $hdl <= 89) {
                $tag = "BLN HDL_80-89 mg/dl";
            } else if ($hdl >= 90 && $hdl <= 100) {
                $tag = "BLN HDL_90-100 mg/dl";
            }
        }
        if ($bp) {
            $tag = "undefined"
            if ($bp >= 90 && $bp <= 109) {
                $tag = "BLN SBP_90-109 mm HG";
            } else if ($bp >= 110 && $bp <= 119) {
                $tag = "BLN SBP_110-119 mm HG";
            } else if ($bp >= 120 && $bp <= 129) {
                $tag = "BLN SBP_120-129 mm HG";
            } else if ($bp >= 130 && $bp <= 139) {
                $tag = "BLN SBP_130-139 mm HG";
            } else if ($bp >= 140 && $bp <= 149) {
                $tag = "BLN SBP_140-149 mm HG";
            } else if ($bp >= 150 && $bp <= 159) {
                $tag = "BLN SBP_150-159 mm HG";
            } else if ($bp >= 160 && $bp <= 180) {
                $tag = "BLN SBP_160-180 mm HG";
            } else if ($bp >= 181 && $bp <= 200) {
                $tag = "BLN SBP_181-200 mm HG";
            }
        }
    }
   
    /****************************** */
    self.shouldShowTooltip = function (arg) {
        var lang = self.getValue(self.mySelectedLanguage());
        if (lang == arg) {
            return true;
        } else {
            return false;
        }
    }

    getInputValue = function (obj, label) {
        var selectdObj = self.FormData()[obj];
        for (var i = 0; i < selectdObj.length; i++) {
            if (selectdObj[i].value === label) {
                return selectdObj[i].label;
            }
        }
    }

    self.setLabelsForInputSection = function () {
        self.inputSectionSexValue(getInputValue("sex", self.Form().Sex()));
        self.inputSectionRaceValue(getInputValue("race", self.Form().Race()));
        self.inputSectionSmokerValue(getInputValue("smoker", self.Form().Smoker()));
        self.inputSectionDiaHistoryValue(getInputValue("diabetic", self.Form().Diabetic()));
        self.inputSectionHypTreatmentValue(getInputValue("hypertension", self.Form().Hypertension()));
    }

    setRiskRange = function (risk) {
        var keys = Object.keys(self.FormData().riskRanges);
        var values = Object.keys(self.FormData().riskRanges).map(function (key) {
            return self.FormData().riskRanges[key];
        });
        var keyIndex = keys.indexOf(risk);
        return values[keyIndex];
    }
    self.setLogo = function () {
        if (self.getValue(self.mySelectedLanguage()) == 'ar') {
            return true;
        } else {
            return false;
        }
    }

    self.mySelectedLanguage.subscribe(function (data) {
        self.languageChanged(true);
    });

    self.getValue = function (val) {
        for (var i = 0; i < self.languages.length; i++) {
            if (self.languages[i].label === val) {
                return self.languages[i].value;
            }
        }
    }

    self.getLabel = function (val) {
        for (var i = 0; i < self.languages.length; i++) {
            if (self.languages[i].value === val) {
                return self.languages[i].label;
            }
        }
    }

    setSelectedLanguage = function (obj, event) {
        if (event) {
            var selectedLang = self.mySelectedLanguage();
            if (self.languageChanged() == true) {
                self.setUserLanguagePreference(self.getValue(selectedLang));
                self.setLanguage(selectedLang);
            }
        }
    }

    setUserUOMPref = function (value) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(self.uomPrefernceKey, value);
        }
        return false;
    }

    getUserUomPref = function () {
        var userUom;
        if (localStorage.getItem(self.uomPrefernceKey) !== null) {
            userUom = localStorage.getItem(self.uomPrefernceKey);
        } else {
            userUom = 'true';
            setUserUOMPref(userUom);
        }
        return userUom;
    }

    self.setUserLanguagePreference = function (value) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(self.languagePreferenceKey, value);
        }
        return false;
    }

    self.getUserLanguagePreference = function () {
        var unitOfMeasure = getUserUomPref();
        setBannerText();
        if (localStorage.getItem(self.languagePreferenceKey) !== null) {
            var storedLang = localStorage.getItem(self.languagePreferenceKey);
            self.setLanguage(self.getLabel(storedLang));
            self.setUOM(unitOfMeasure);
        } else {
            self.setUserLanguagePreference(self.getValue(self.mySelectedLanguage()));
            self.setLanguage(self.mySelectedLanguage());
            self.setUOM(unitOfMeasure);
        }
    }

    self.setUOM = function (uomValue) {       
        if (uomValue == 'false') {
            self.Form().UnitOfMeasure(false);
        } else if (uomValue == 'true') {
            self.Form().UnitOfMeasure(true);
        } else {
            self.Form().UnitOfMeasure(uomValue);
        }     
    }

    self.setLanguage = function (language) {
        var langValue = self.getValue(language);
        if (language) {
            if (langValue == "es") {
                self.setAppTitle("Spanish");
                self.FormData(formDataSpanish);
                self.Glossary(glossaryEs);
                self.updateGlossaryArray();
                // self.resetAll();
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            } else if (langValue == "pt") {
                self.setAppTitle("Portuguese");
                self.FormData(formDataPortuguese);
                self.Glossary(glossaryPr);
                self.updateGlossaryArray();
                // self.resetAll();   
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            } else if (langValue == "en") {
                self.setAppTitle("English");
                self.FormData(formDataEnglish);
                self.Glossary(glossary);
                self.updateGlossaryArray();
                // self.resetAll();   
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            } else if (langValue == "ar") {
                self.setAppTitle("Arabic");
                self.FormData(formDataArabic);
                self.Glossary(glossaryAr);
                self.updateGlossaryArray();
                //self.resetAll();
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            } else if (langValue == "de") {
                self.setAppTitle("German");
                self.FormData(formDataGerman);
                self.Glossary(glossaryDe);
                self.updateGlossaryArray();
                //self.resetAll();
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            } else if (langValue == "in") {
                self.setAppTitle("Indonesian");
                self.FormData(formDataIndonesian);
                self.Glossary(glossaryIn);
                self.updateGlossaryArray();
                //self.resetAll();
                self.mySelectedLanguage(language);
                self.languageChanged(false);
                setBannerText();
                $("body").attr("userLanguage", langValue);
            }
        }
        if (language && langValue == 'ar') {
            document.documentElement.setAttribute('dir', "rtl");
            document.documentElement.setAttribute('lang', "ar");
            $(".advice-page").toggleClass("rtl");
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                document.documentElement.setAttribute('lang', " ");
            }
        } else {
            if ($('.advice-page').hasClass('rtl')) {
                $(".advice-page").removeClass("rtl");
            }
            document.documentElement.setAttribute('dir', "ltr");
            document.documentElement.setAttribute('lang', langValue);
        }
    }

    self.updateGlossaryArray = function () {
        self.glossaryItems([]);
        for (var i in self.Glossary()) {
            if (self.Glossary().hasOwnProperty(i)) {
                self.glossaryItems.push(self.Glossary()[i]);
            }
        }
        self.glossaryQuery('');
    }

    self.setAppTitle = function (language) {
        var appTitle = "Multilingual ASCVD Risk Estimator | " + language;
        $("title").text(appTitle);
    }
    routeToResources = function () {
        var currentLang = self.getValue(self.mySelectedLanguage());
        window.location.href = "#!/content/resources" + "_" + currentLang + "/";
    }

    routeToAboutApp = function () {
        var lang = self.getValue(self.mySelectedLanguage());
        window.location.href = "#!/content/about" + "_" + lang + "/";
    }

    routeToTerms = function () {
        var selectdLanguage = self.getValue(self.mySelectedLanguage());
        window.location.href = "#!/content/terms" + "_" + selectdLanguage + "/";
    }
};
$('#totalCholestrol').on('change, keyup', function() {
    var currentInput = $(this).val();
    var fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()]/g, '');
    $(this).val(fixedInput);    
});
$('#HdlCholesterol').on('change, keyup', function() {
    var currentInput = $(this).val();
    var fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()]/g, '');
    $(this).val(fixedInput);    
});

appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);
ko.applyBindings(appmodel);
pager.start();