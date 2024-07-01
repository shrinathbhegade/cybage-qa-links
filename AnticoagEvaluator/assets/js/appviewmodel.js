/*!
Appviewmodel JS
Copyright 2015-2016 Cybage Software Pvt. Ltd.
This file contains application model.
Licensed under the Cybage license.
*/

/**
 * this function contains the data binding properties,functions that are used throughout the application.
 */
function formObject() {
    var self = this;
    self.AgeStatus = ko.observable('question');
    self.AgeErrorMsg = ko.observable();
    self.dbpStatus = ko.observable('question');
    self.dbpErrorMsg = ko.observable();
    self.pulseStatus = ko.observable('question');
    self.pulseErrorMsg = ko.observable();
    self.sortedRiskFactors = ko.computed(function () {
        return formdata.cha2ds2.slice().sort(function (a, b) {
            return a.sortOrder - b.sortOrder;
        });
    }, this);

    /**
    * this is Age property with extend function for Age range validation.
    * It contains the logic for applying warning css class and accordingly display warning message.
    */
    self.Age = ko.observable()
        .extend(
            {
                validation: {
                    validator: function (val) {
                        if (val !== undefined && val !== '') {
                            var $age = parseFloat(val);
                            if (!isNaN($age)) {
                                $age = Math.round($age);
                                if ($age < 18) {
                                    self.AgeStatus('question warning');
                                    self.AgeErrorMsg('Please enter an age 18 or over.');
                                    $('.validationMessage').hide();
                                    return false;
                                }
                                else {
                                    if ($age > 140) {
                                        self.AgeStatus('question warning');
                                        self.AgeErrorMsg('Please enter an age of 140 or under.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                self.AgeStatus('question');
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        return true;
                    },
                    message: function () {
                        self.Age('');
                        $('.validationMessage').hide();
                    }
                }
            });

    self.dbp = ko.observable()
        .extend(
            {
                validation: {
                    validator: function (val) {
                        if (val !== undefined && val !== '') {
                            var $dbp = parseFloat(val);
                            if (!isNaN($dbp)) {
                                $dbp = Math.round($dbp);
                                if ($dbp < 60) {
                                    self.dbpStatus('question warning');
                                    self.dbpErrorMsg('Please enter a value between 60-130 mm Hg');
                                    $('.validationMessage').hide();
                                    return false;
                                }
                                else {
                                    if ($dbp > 130) {
                                        self.dbpStatus('question warning');
                                        self.dbpErrorMsg('Please enter a value between 60-130 mm Hg');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                self.dbpStatus('question');
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        return true;
                    },
                    message: function () {
                        self.dbp('');
                        $('.validationMessage').hide();
                    }
                }
            });

    self.dbp.subscribe((value) => {

        if (value && !isNaN(value) && (value % 1) != 0) {
            self.dbp(Math.round(value));
            return;
        }

        if (!isNaN(value) && value >= 90) {
            var hypertension = ko.utils.arrayFirst(self.Cha2ds2_selected(),
                function (item) {
                    return item.htmlID === 'cv2-hypertension';
                });
            if (!hypertension)
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[1]);
        }
    });

    self.pulse = ko.observable()
        .extend({
            validation: {
                validator: function (val) {
                    if (val !== undefined && val !== '') {
                        var $pulse = parseFloat(val);
                        if (!isNaN($pulse)) {
                            $pulse = Math.round($pulse);
                            if ($pulse < 30) {
                                self.pulseStatus('question warning');
                                self.pulseErrorMsg('Please enter pulse 30 or above');
                                $('.validationMessage').hide();
                                return false;
                            }
                            else {
                                if ($pulse > 160) {
                                    self.pulseStatus('question warning');
                                    self.pulseErrorMsg('Please enter pulse 160 or below');
                                    $('.validationMessage').hide();
                                    return false;
                                }
                            }
                            self.pulseStatus('question');
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    return true;
                },
                message: function () {
                    self.pulse('');
                    $('.validationMessage').hide();
                }
            }
        });

    self.pulse.subscribe((value) => {
        if (value && !isNaN(value) && (value % 1) != 0) {
            self.pulse(Math.round(value));
            return;
        }
    });
    self.CrClSexStatus = ko.observable('question');
    self.Gender = ko.observable();
    self.Ethnicity = ko.observable();
    self.Cha2ds2_selected = ko.observableArray([]).extend({
        rateLimit: 500
    });
    self.Hasbled_selected = ko.observableArray([]);
    self.OtherFactors = ko.observableArray([]).extend({
        rateLimit: 500
    });
    self.WeightStatus = ko.observable('question');
    self.WeightErrorMsg = ko.observable('');
    /**
    * this is Weight property with extend function for Weight range validation for SI and US units.
    * It contains the logic for applying warning css class and accordingly display warning message.
    */

    self.Weight = ko.observable()
        .extend(
            {
                validation: {
                    validator: function (val) {
                        if (val !== undefined && val !== '') {
                            if (typeof val.replace !== "undefined") {
                                val = +parseFloat(val.replace(/\,/g, '.')).toFixed(1);
                                self.Weight(val);
                            }
                            var pattrn = new RegExp('^([0-9]{1,3}|0)([,.]{1}[0-9]{1})?$');
                            if (!(pattrn.test(val))) {
                                self.WeightStatus('question warning');
                                if (self.CrClUnits()) {
                                    self.WeightErrorMsg('Please enter a weight value between 4.5-453 kgs.');
                                }
                                else {
                                    self.WeightErrorMsg('Please enter a weight value between 10-999 lbs.');
                                }
                                $('.validationMessage').hide();
                                return false;
                            }
                            else {
                                if (self.CrClUnits()) {
                                    if (val < 4.5 || val > 453) {
                                        self.WeightStatus('question warning');
                                        self.WeightErrorMsg('Please enter a weight value between 4.5-453 kgs.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                else {
                                    if (val < 10 || val > 999) {
                                        self.WeightStatus('question warning');
                                        self.WeightErrorMsg('Please enter a weight value between 10-999 lbs.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                self.WeightStatus('question');
                                return true;
                            }
                        }
                        return true;
                    },
                    message: function () {
                        self.Weight('');
                        $('.validationMessage').hide();
                    }
                }
            });
    self.SerumCrStatus = ko.observable('question');
    self.SerumCrErrorMsg = ko.observable('');
    /**
    * this is Serum Creatinine property with extend function for Serum Creatinine range validation for SI and US units.
    * It contains the logic for applying warning css class and accordingly display warning message.
    */
    self.SerumCreatinine = ko
        .observable()
        .extend(
            {
                validation: {
                    validator: function (val, someOtherVal) {
                        self.SerumCrStatus('question');
                        if (val !== undefined && val !== '') {
                            if (typeof val.replace !== "undefined") {
                                val = +parseFloat(val.replace(/\,/g, '.')).toFixed(2);
                                self.SerumCreatinine(val);
                            }
                            var pattrn = /^((\d+|[0])([,.]{1}[0-9]{0,2})?|([,.]{1}[0-9]{0,2}))$/g;
                            if (!(pattrn.test(val))) {
                                self.SerumCrStatus('question warning');
                                self.SerumCrErrorMsg('Please enter a clinically valid value.');
                                $('.validationMessage').hide();
                                return false;
                            } else {
                                if (self.CrClUnits()) {
                                    val = parseFloat(val);
                                    if (val > 9989.2 || val < 8.8) {
                                        self.SerumCrStatus('question warning');
                                        self.SerumCrErrorMsg('Please enter a clinically valid value (8.8 - 9989.2) µmol/L.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                else if (!self.CrClUnits()) {
                                    val = parseFloat(val);
                                    if (val > 113 || val < 0.1) {
                                        self.SerumCrStatus('question warning');
                                        self.SerumCrErrorMsg('Please enter a clinically valid value (0.1 - 113) mg/dL.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                else {
                                    val = parseFloat(val);
                                    if (val > someOtherVal || val < 0.1) {
                                        self.SerumCrStatus('question warning');
                                        self.SerumCrErrorMsg('Please enter a clinically valid value.');
                                        $('.validationMessage').hide();
                                        return false;
                                    }
                                }
                                self.SerumCrStatus('question');
                                return true;
                            }
                        }
                        return true;
                    },
                    message: function () {
                        self.SerumCreatinine('');
                        $('.validationMessage').hide();
                    },
                    params: 113
                }
            });
    self.annualRiskOfStrokeCHADS2VascValues = [0.2, 0.6, 2.2, 3.2, 4.8, 7.2, 9.7, 11.2, 10.8, 12.2, 12.2];
    self.annualRiskOfHASBLEDValues = [0.9, 3.4, 4.1, 5.8, 8.9, 9.1, 10, 10, 10, 10];
    self.PopulationAvgAnnualChance = ko.observable();
    /**
    * this subscribe function is used for Autopopulating(selecting/deselecting) the CHA2DS2-VASc age
    * range selection on Patient Age or CRCL Age change.
    */
    self.Age.subscribe(function (newvalue) {
        //if decimal entered, round it off and return without executing rest of the script
        // if (newvalue && !isNaN(newvalue) && (newvalue % 1) != 0) {
        //     self.Age(Math.round(newvalue));
        //     return;
        // }

        if (self.CalCrCl()) {
            self.IsAgeAlter(true);
        }
        else {
            self.IsAgeAlter(false);
        }

        var $age = parseFloat(self.Age());
        if (!isNaN($age) && $age >= 18 && $age <= 140) {
            $age = Math.round($age);
            self.Age($age);

            var $age65 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
                return item.htmlID === 'cv2-age65';
            });
            var $age75 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
                return item.htmlID === 'cv2-age75';
            });
            var $age85 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
                return item.htmlID === 'cv2-age85';
            });

            if ($age >= 65 && $age <= 74 && $age65 == null) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[6]);
            }
            if ($age >= 75 && $age < 85 && $age75 == null) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[2]);
            }
            if ($age >= 85 && $age85 === undefined) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[8]);
            }

            if ($age < 65 && $age65) {
                self.Cha2ds2_selected.remove($age65);
            }
            if ($age < 65 && $age75) {
                self.Cha2ds2_selected.remove($age75);
            }
            if ($age < 85 && $age85) {
                self.Cha2ds2_selected.remove($age85);
            }

            var hasbled_age65 = ko.utils.arrayFirst(self.Hasbled_selected(),
                function (item) {
                    return item.htmlID === 'hb-age65';
                });

            if ($age > 65) {
                if (!hasbled_age65)
                    self.Hasbled_selected.push(appmodel.FormData.hasbledNonModifiable[3])
            }
            else {
                if (hasbled_age65)
                    self.Hasbled_selected.remove(hasbled_age65);
            }
        } else {
            self.Age('');
        }
        /*This code is for reevaluate therapy dosing information as change in Age
        *value may change dosing info for therapy option "Apixaban"
        */
        if (self.selectedTherapyOption() === appmodel.FormData.therapyOptions.Apixaban) {
            self.EvaluateTherapyOptions(self.selectedTherapyOption());
        }
    });
    self.selectedTreatment = ko.observableArray([]);
    /**
    * this function is used for Autopopulating(selecting/deselecting) Hypertension checkbox of CHA2DS2-VASc or HAS-BLED Section
    */
    self.hypertensionSync = function ($action) {
        var cv2Hypertension = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-hypertension';
            });
        var hbHypertension = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-hypertension';
            });
        if ($action === 'on') {
            if (cv2Hypertension == null) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[1]);
            }
            if (hbHypertension == null) {
                self.Hasbled_selected.push(appmodel.FormData.hasbledModifiable[0]);
            }
        } else {
            if (cv2Hypertension) {
                self.Cha2ds2_selected.remove(cv2Hypertension);
            }
            if (hbHypertension) {
                self.Hasbled_selected.remove(hbHypertension);
            }
        }
    };
    /**
    * this function is used for Autopopulating(selecting/deselecting) Hypertension checkbox of CHA2DS2-VASc or HAS-BLED Section
    */
    self.historyOfBleedSync = function ($action) {
        var cv2Bleed = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-prev_bleed';
            });
        var hbBleed = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-majorbleed';
            });
        if ($action === 'on') {
            if (cv2Bleed == null) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[12]);
            }
            if (hbBleed == null) {
                self.Hasbled_selected.push(appmodel.FormData.hasbledNonModifiable[1]);
            }
        } else {
            if (cv2Bleed) {
                self.Cha2ds2_selected.remove(cv2Bleed);
            }
            if (hbBleed) {
                self.Hasbled_selected.remove(hbBleed);
            }
        }
    };
    /**
    * this function is used for Autopopulating(selecting/deselecting) Stroke/TIA/TE checkbox of CHA2DS2-VASc or HAS-BLED Section
    */
    self.tiaStrokeSync = function ($action) {
        var cv2TiaStroke = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-tiastroke';
            });
        var hbTiaStroke = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-tiastroke';
            });
        if ($action === 'on') {
            if (cv2TiaStroke == null) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[4]);
            }
            if (hbTiaStroke == null) {
                self.Hasbled_selected.push(appmodel.FormData.hasbledNonModifiable[0]);
            }
        } else {
            if (cv2TiaStroke) {
                self.Cha2ds2_selected.remove(cv2TiaStroke);
            }
            if (hbTiaStroke) {
                self.Hasbled_selected.remove(hbTiaStroke);
            }
        }
    };
    /**
    * this subscribe function is used for Autopopulating(selecting/deselecting) the CHA2DS2-VASc Sex:Female checkbox
    * on Patient's Sex or CRCL's Sex change.
    */
    self.Gender.subscribe(function () {
        self.CrClSexStatus('question');
        if (self.CalCrCl()) {
            self.IsGenderAlter(true);
        }
        if (self.Gender()) {
            var $sex = self.Gender().text;
            var $female = ko.utils.arrayFirst(self.Cha2ds2_selected(),
                function (item) {
                    return item.htmlID === 'cv2-female';
                });
            if ($sex === 'Female' && ($female == null || $female == undefined)) {
                self.Cha2ds2_selected.push(appmodel.FormData.cha2ds2[7]);
            }
            if ($sex === 'Male' && $female) {
                self.Cha2ds2_selected.remove($female);
            }
        } else {
            var $cv2female = ko.utils.arrayFirst(self.Cha2ds2_selected(),
                function (item) {
                    return item.htmlID === 'cv2-female';
                });
            self.Cha2ds2_selected.remove($cv2female);
        }
    });
    /**
    * this (old) subscribe function is used for deriving the Cha2ds2 Score on selection/deselection of any CHA2DS2-VASc section fields(checkbox).
    */
    self.Cha2ds2_selected.subscribe(function (value) {
        var Score = parseFloat(0);
        //get existing status
        var indexOfage65 = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-age65';
            });
        var indexOfage75 = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-age75';
            });
        var indexOfage85 = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-age85';
            });
        var hypertension = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-hypertension';
            });
        let previousBleed = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-prev_bleed';
            });
        var $female = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-female';
        });
        let $renal = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-renal';
        });

        if ($renal) {
            let $abnormalRenal = ko.utils.arrayFirst(self.Hasbled_selected(),
                function (item) {
                    return item.htmlID === 'hb-renalfunction';
                });
            if (!$abnormalRenal)
                self.Hasbled_selected.push(appmodel.FormData.hasbledModifiable[2]);
        }

        //Check and set gender
        if (self.Gender()) {
            if ($female == null && self.Gender().text === 'Female') {
                self.Gender(null);
            }
            if ($female != null && self.Gender().text === 'Male') {
                self.Gender(appmodel.FormData.sex[1]);
            }
        }
        else {
            if ($female) {
                self.Gender(appmodel.FormData.sex[1]);
            }
        }


        //sync selected age range toggles
        if (indexOfage65 && indexOfage75) {
            if (self.Cha2ds2_selected().indexOf(indexOfage75) > self.Cha2ds2_selected().indexOf(indexOfage65)) {
                self.Cha2ds2_selected.remove(indexOfage65);
            } else {
                self.Cha2ds2_selected.remove(indexOfage75);
            }
        }

        if (indexOfage75 && indexOfage85) {
            if (self.Cha2ds2_selected().indexOf(indexOfage85) > self.Cha2ds2_selected().indexOf(indexOfage75)) {
                self.Cha2ds2_selected.remove(indexOfage75);
            } else {
                self.Cha2ds2_selected.remove(indexOfage85);
            }
        }
        if (indexOfage65 && indexOfage85) {
            if (self.Cha2ds2_selected().indexOf(indexOfage85) > self.Cha2ds2_selected().indexOf(indexOfage65)) {
                self.Cha2ds2_selected.remove(indexOfage65);
            } else {
                self.Cha2ds2_selected.remove(indexOfage85);
            }
        }

        let $age = self.Age();

        indexOfage65 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-age65';
        });
        if (indexOfage65 != null && (parseFloat($age) < 65 || parseFloat($age) > 74)) {
            self.Age('');
        }

        indexOfage75 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-age75';
        });
        if (indexOfage75 != null && (parseFloat($age) < 75 || parseFloat($age) > 84)) {
            self.Age('');
        }

        indexOfage85 = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-age85';
        });
        if (indexOfage85 != null && parseFloat($age) < 85) {
            self.Age('');
        }

        //sync hypertension toggles
        if (hypertension) {
            self.hypertensionSync('on');

        } else {
            self.hypertensionSync('off');
        }

        if (previousBleed) {
            self.historyOfBleedSync('on');

        } else {
            self.historyOfBleedSync('off');
        }


        var tiaStroke = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-tiastroke';
            });
        if (tiaStroke) {
            self.tiaStrokeSync('on');

        } else {
            self.tiaStrokeSync('off');
        }

        if (!indexOfage75 && !indexOfage65 && !indexOfage85 && ($age !== '' && $age >= 65)) {
            self.Age('');
        }
    });

    /**
     * new CHA2DS2-VASc score logic! please refer stroke risk model comparison excel
     */
    self.garfieldAFStrokeCoeff = { 'VKA': -0.352373263, 'DOAC': -0.572199357, 'BASE': 0.9925445321 };
    self.mortalityCoefficients = { 'VKA': -0.18593561, 'DOAC': -0.414591263, 'BASE': 0.9790643336 };
    self.onDOAC = ko.observable(false);
    self.onVKA = ko.observable(false);

    self.CHDSScore = ko.pureComputed(() => {
        let _score = null;
        let $age = self.Age();

        if (self.Gender()) {
            _score += self.Gender().text === 'Female' ? 1 : 0;
        }

        if ($age >= 75) {
            _score += 2;
        }

        if ($age > 64 && $age < 75)
            _score += 1;

        /**
         *  Please check 2024 requirements update for anticoag evaluator.
         *  $riskFactorIDs array below represents ID's of toggles which are bound to patient information section.
         *  For each selected(turned ON) toggle, we will add 1 into CHA2DS2-VASc score which will be used to calcualte risk magnitude.
         */
        let $riskFactorIDs = ['1', '3', '0', '5'];

        ko.utils.arrayForEach(self.Cha2ds2_selected(), function (item) {
            if ($riskFactorIDs.includes(item.id)) {
                _score += 1;
            }
            //if TIA stroke toggle is ON then add 2 to the score as per requirement.
            _score += item.id === '4' ? 2 : 0;
        });
        // console.log(`CHDS : ${_score}`);
        return _score;
    }, self);

    self.CHDSScore.subscribe(() => {
        /*This code is for showing warning message if changing the values of Age or Sex fields affects the
          CHA2DS2-VASc score when user is on Therapy Page
        */
        if (self.CalCrCl()) {
            if (self.IsAgeAlter()) {
                self.AgeStatus('question custom_info');
                self.AgeErrorMsg('Age value differs from that previously entered and has altered CHA₂DS₂-VASc score.');
            }
            if (self.IsGenderAlter()) {
                self.CrClSexStatus('question custom_info');
            }
        }
    });

    self.CHDSProfile = ko.pureComputed(() => {
        var gender_coefficient = 0;
        let _score = self.CHDSScore();
        if (self.Gender()) {
            gender_coefficient = self.Gender().text === 'Female' ? 1 : 0;
        }
        return (_score - gender_coefficient === 0) ? 'Low' : (_score - gender_coefficient === 1) ? 'Intermediate' : (_score - gender_coefficient >= 2) ? 'High' : '';
    }, self);

    self.CHDSMagnitude = ko.pureComputed(() => {
        if (self.CHDSScore() !== null) {
            // console.log(`CHDS : ${self.annualRiskOfStrokeCHADS2VascValues[self.CHDSScore()]} %`);
            return `${self.annualRiskOfStrokeCHADS2VascValues[self.CHDSScore()]}%`;
        }
        return '';
    }, self);

    self.ATRIAScore = ko.computed(() => {
        let _score = null;
        let $age = self.Age();

        if ($age >= 85) {
            _score += 6;
        }
        else if ($age >= 75 && $age < 85) {
            _score += 5;
        }
        else if ($age >= 65 && $age < 75) {
            _score += 3;
        }

        if (self.Gender()) {
            _score += self.Gender().text === 'Female' ? 1 : 0;
        }

        //  Please check 2024 requirements update for anticoag evaluator.
        // $riskFactorIDs array below represents ID's of toggles which are bound to patient information section.
        // For each selected(turned ON) toggle, we will add 1 into CHA2DS2 - VASc score which will be used to calcualte risk magnitude.
        let $riskFactorIDs = ['1', '9', '3', '0', '13'];

        ko.utils.arrayForEach(self.Cha2ds2_selected(), function (item) {
            if ($riskFactorIDs.includes(item.id)) {
                _score += 1;
            }
            //if TIA stroke toggle is ON then if Age<65 => 8 | if Age 65-74 => 4 | if Age 75-84 => 2 | if Age >= 85 => 3.
            if (item.id === '4') {
                if ($age >= 85) {
                    _score += 3;
                }
                else if ($age >= 75 && $age < 85) {
                    _score += 2;
                }
                else if ($age >= 65 && $age < 75) {
                    _score += 4;
                }
                else {
                    _score += 8;
                }
            }
        });
        // console.log(`ATRIA : ${_score}`);
        return _score;
    }, self);

    self.ATRIAProfile = ko.pureComputed(() => {
        let _atria = self.ATRIAScore();
        if (_atria == null)
            return '';
        return (_atria >= 0 && _atria <= 5) ? 'Low' : (_atria == 6) ? 'Intermediate' : (_atria >= 7) ? 'High' : '';
    });

    self.ATRIAMagnitude = ko.pureComputed(() => {
        let _profile = self.ATRIAProfile();
        // console.log(`ATRIA : ${_profile === 'Low' ? '<1%' : _profile === 'Intermediate' ? '1-2%' : _profile === 'High' ? '>=2%' : ''}`);
        return _profile === 'Low' ? '<1%' : _profile === 'Intermediate' ? '1-2%' : _profile === 'High' ? '≥2%' : '';
    }, self);

    self.GARFIELDScore = ko.computed(() => {
        let _score = null;
        let $age = self.Age();
        let $dbp = self.dbp();

        if ($age)
            _score += ($age - 65) * 0.039138147;    //GARFIELD AF multiplier 0.039138147 for age

        if ($dbp)
            _score += Math.max(0, ($dbp - 80)) * 0.01590016;    //GARFIELD AF multiplier 0.01590016 for Diastolic Blood Pressure

        //  Please check 2024 requirements update for anticoag evaluator.
        // $riskFactorIDs array below represents ID's of toggles which are bound to patient information section.
        // For each selected(turned ON) toggle, we will add 1 into CHA2DS2 - VASc score which will be used to calcualte risk magnitude.
        let $riskFactorIDs = ['0', '3', '4', '5', '9', '10', '11', '12'];

        ko.utils.arrayForEach(self.Cha2ds2_selected(), function (item) {
            if ($riskFactorIDs.includes(item.id)) {
                _score += item.garfieldMultplr;
            }
        });
        // console.log(`GARFIELD Score : ${_score}, ${_score?.toFixed(9)}`);
        if (_score)
            return _score?.toFixed(9);
        return _score;
    }, self);

    self.GARFIELDMagnitude = ko.pureComputed(() => {
        return `${parseFloat(((1 - Math.pow(self.garfieldAFStrokeCoeff.BASE, Math.exp(self.GARFIELDScore()))) * 100).toFixed(1))}%`;
    });

    self.GARFIELDProfile = ko.pureComputed(() => {
        let gfMagnitudeNumber = -1;
        if (self.GARFIELDScore() != null) {
            gfMagnitudeNumber = (1 - Math.pow(self.garfieldAFStrokeCoeff.BASE, Math.exp(self.GARFIELDScore())));
            return (gfMagnitudeNumber >= 0 && gfMagnitudeNumber < 0.01) ? "Low" : gfMagnitudeNumber < 0.02 ? "Intermediate" : gfMagnitudeNumber >= 0.02 ? "High" : "";
        }
        return "";
    }, self);

    self.MortalityScore = ko.pureComputed(() => {
        let score = null;
        let $age = self.Age();
        let $dbp = self.dbp();
        let $gender = self.Gender();
        let $pulse = self.pulse();
        let $units = self.CrClUnits();

        if ($age)
            score += $age <= 65 ? (1 * ($age - 65) * 0.031050027) : $age > 65 ? 1 * ($age - 65) * 0.064594824 : 0;

        if ($gender && $gender.text === 'Female')
            score += -0.306202287;

        if ($dbp)
            score += $dbp <= 80 ? ($dbp - 80) * -0.019304333 : 0;

        if ($pulse && $pulse <= 120)
            score += ($pulse - 120) * 0.007678035;

        score += self.Ethnicity() ? self.Ethnicity() : 0;

        if ($units && self.Weight())
            score += self.Weight() <= 75 ? (self.Weight() - 75) * -0.021535182 : 0;
        else
            score += !self.Weight() ? 0 : self.Weight() <= 165.3465 ? (self.Weight() - 165.3465) * -0.009768206 : 0;

        let $riskFactorIDs = ['0', '3', '4', '9', '10', '5', '11', '12']; // check formdata.js

        ko.utils.arrayForEach(self.Cha2ds2_selected(), function (item) {
            if ($riskFactorIDs.includes(item.id)) {
                score += item.mortalValue;
            }
        });
        return score;
    }, self);

    self.MortalityRisk = ko.pureComputed(() => {
        return self.MortalityScore() ? ((1 - Math.pow(self.mortalityCoefficients.BASE, Math.exp(self.MortalityScore()))) * 100).toFixed(1) : '';
    });

    self.MortalityVKA = ko.pureComputed(() => {
        return self.MortalityScore() ? ((1 - Math.pow(self.mortalityCoefficients.BASE, Math.exp(self.MortalityScore() + self.mortalityCoefficients.VKA))) * 100).toFixed(1) : '';
    });

    self.MortalityDOAC = ko.pureComputed(() => {
        return self.MortalityScore() ? ((1 - Math.pow(self.mortalityCoefficients.BASE, Math.exp(self.MortalityScore() + self.mortalityCoefficients.DOAC))) * 100).toFixed(1) : '';
    });

    self.HighestRiskProfile = ko.computed(() => {
        let _chds = self.CHDSMagnitude() ? parseFloat(self.CHDSMagnitude()) : 0;
        let _atria = self.ATRIAMagnitude() ? self.ATRIAMagnitude() : '0';
        _atria = _atria === "<1%" ? 1 : _atria === "1-2%" ? 2 : _atria === ">=2%" ? 2 : 0;
        let _gf = self.GARFIELDMagnitude() ? parseFloat(self.GARFIELDMagnitude()) : 0;
        // debugger;
        if ((_chds + _atria + _gf) === 0)
            return { riskName: '', riskChance: '', riskProfile: 'Low Risk' };

        if ((_chds > _atria && _chds > _gf) || (_chds == _gf || _chds == _atria)) {
            return {
                riskName: 'CHA₂DS₂-VASc',
                riskChance: self.CHDSMagnitude(),
                riskProfile: `${self.CHDSProfile()} Risk`
            };
        } else if ((_gf > _chds && _gf > _atria) || (_gf == _atria)) {
            return {
                riskName: 'GARFIELD-AF',
                riskChance: self.GARFIELDMagnitude(),
                riskProfile: `${self.GARFIELDProfile()} Risk`
            };
        } else if (_atria > _chds && _atria > _gf) {
            return {
                riskName: 'ATRIA',
                riskChance: self.ATRIAMagnitude(),
                riskProfile: `${self.ATRIAProfile()} Risk`
            };
        }
        return { riskName: '', riskChance: '', riskProfile: '' };;
    });

    self.GFAdjVKA = ko.computed(() => {
        let gfScore = self.GARFIELDScore();
        let sum = gfScore != null ? (self.garfieldAFStrokeCoeff.VKA + parseFloat(gfScore)) : 0;
        sum = (1 - Math.pow(self.garfieldAFStrokeCoeff.BASE, Math.exp(sum))) * 100;
        return sum.toFixed(1);
    });

    self.GFAbsVKA = ko.pureComputed(() => {
        let _gfm = self.GARFIELDMagnitude();
        if (!_gfm || !self.GFAdjVKA())
            return '';
        return (parseFloat(_gfm) - parseFloat(self.GFAdjVKA())).toFixed(1);
    }, self);

    self.GFRelVKA = ko.pureComputed(() => {
        let _gfm = self.GARFIELDMagnitude();

        if (!_gfm || !self.GFAbsVKA())
            return '';
        return (parseFloat(self.GFAbsVKA()) / parseFloat(_gfm) * 100).toFixed(1);
    });

    self.GFAdjDOAC = ko.computed(() => {
        let _gfScore = self.GARFIELDScore();
        let sum = _gfScore != null ? (self.garfieldAFStrokeCoeff.DOAC + parseFloat(_gfScore)) : 0;
        sum = (1 - Math.pow(self.garfieldAFStrokeCoeff.BASE, Math.exp(sum))) * 100;
        return sum.toFixed(1);
    });

    self.GFAbsDOAC = ko.pureComputed(() => {
        let _gfm = self.GARFIELDMagnitude();
        if (!_gfm || !self.GFAdjDOAC())
            return '';
        return (parseFloat(_gfm) - parseFloat(self.GFAdjDOAC())).toFixed(1);
    }, self);

    self.GFRelDOAC = ko.pureComputed(() => {
        let _gfm = self.GARFIELDMagnitude();
        if (!_gfm || !self.GFAbsDOAC())
            return '';
        return (parseFloat(self.GFAbsDOAC()) / parseFloat(_gfm) * 100).toFixed(1);
    });


    self.Hasbled_Score = ko.observable(0);
    /**
    * this subscribe function is used for deriving the Hasbled Score on selection/deselection of any HAS-BLED section fields(checkbox).
    */
    self.Hasbled_selected.subscribe(function () {
        var Score = parseFloat(0);
        if (self.Hasbled_selected().length > 0) {
            for (var i in self.Hasbled_selected()) {
                if (self.Hasbled_selected().hasOwnProperty(i)) {
                    Score += parseFloat(self.Hasbled_selected()[i].value);
                }
            }
        }
        self.Hasbled_Score(Score);
        var hypertension = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-hypertension';
            });
        // if (hypertension) {
        //     self.hypertensionSync('on');

        // } else {
        //     self.hypertensionSync('off');
        // }
        var tiaStroke = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-tiastroke';
            });
        // if (tiaStroke) {
        //     self.tiaStrokeSync('on');

        // } else {
        //     self.tiaStrokeSync('off');
        // }
        var $antiplatelet = ko.utils.arrayFirst(self.Hasbled_selected(),
            function (item) {
                return item.htmlID === 'hb-antiplatelet';
            });
        if ($antiplatelet == null) {
            self.OtherFactors([]);
        }
    });
    /**
    * This is CrCL property composed of knockout computed function.
    * This function implements the following formula
    * Cockcroft-Gault CrCl = (140-age) * (Wt in kg) * (0.85 if female) / (72 * SerumCreatinine)
    */

    self.CrCL = ko
        .computed(
            function () {
                var R = '';
                var genderModifier = 1;
                if (self.Gender()) {
                    genderModifier = parseFloat(self.Gender().value);
                }
                if (self.Age() !== undefined
                    && self.Weight() !== undefined
                    && self.SerumCreatinine() !== undefined
                    && self.Gender() !== undefined && self.Age() !== '' && self.SerumCreatinine() !== '' && self.Weight() !== '') {
                    if (self.CrClUnits()) {
                        R = Math.round((((140 - parseFloat(self.Age())) * (parseFloat(self.Weight())) * genderModifier) / (72 * (parseFloat(parseFloat(self.SerumCreatinine()) / 88.4)))) * 100) / 100;
                    } else {
                        R = Math.round(((140 - parseFloat(self.Age())) * (parseFloat(self.Weight()) * 0.453592) * genderModifier) / (72 * parseFloat(self.SerumCreatinine())) * 100) / 100;
                    }
                    if (isFinite(R)) {
                        return R.toFixed(1);
                    }
                    else {
                        return '';
                    }
                }
                return R;
            }, self);
    /**
    * this subscribe function is used for recalculating the Therapy dosing information on change od CRCL score.
    */
    self.CrCL.subscribe(function () {
        self.ShowInfoText(false);
        self.EvaluateTherapyOptions(self.selectedTherapyOption());
    });

    self.CrClUnits = ko.observable(false);
    self.SrCrUnit = ko.observable('mg/dL');
    self.WeightUnit = ko.observable('lbs');
    /**
    * This subscribe function is used for converting previously entered Serum Creatinine and Weight value to the new UOM.
    * I.e for Weight: lbs to kgs or vice-versa
    * for Serum Creatinine: mg/dL to �mol/L or vice-versa
    */
    self.CrClUnits.subscribe(function () {
        if (self.CrClUnits()) {
            self.SrCrUnit('micromol/L');
            self.WeightUnit('kgs');
            if (self.SerumCreatinine() !== undefined && self.SerumCreatinine() !== '') {
                self.SerumCreatinine((parseFloat(self.SerumCreatinine()) * 88.4).toFixed(2));
            }
            if (self.Weight() !== undefined && self.Weight() !== '') {
                self.Weight((parseFloat(self.Weight()) * 0.453592).toFixed(1));
            }
        } else {
            self.SrCrUnit('mg/dL');
            self.WeightUnit('lbs');
            if (self.SerumCreatinine() !== undefined && self.SerumCreatinine() !== '') {
                self.SerumCreatinine((parseFloat(self.SerumCreatinine()) / 88.4).toFixed(2));
            }
            if (self.Weight() !== undefined && self.Weight() !== '') {
                self.Weight((parseFloat(self.Weight()) / 0.453592).toFixed(1));
            }
        }
        self.SerumCrStatus('question');
        self.WeightStatus('question');
        $('#creatinineClearance .collapsable-panel').show();
    });
    /**
    * this subscribe function is used for autopopulating(selection/deselection) of the HAS-BLED section's "Abnormal Renal Function" checkbox
    * if Serum Creatinine value is >= 200 �mol/L (2.3mg/dL).
    */
    self.SerumCreatinine.subscribe(function () {
        if (self.SerumCreatinine() !== '') {
            var $serumCreatValSI = 1;
            if (self.CrClUnits()) {
                $serumCreatValSI = parseFloat(self.SerumCreatinine());
            } else {
                $serumCreatValSI = parseFloat(self.SerumCreatinine()) * 88.4;
            }
            var $abnormalRenal = ko.utils.arrayFirst(self.Hasbled_selected(),
                function (item) {
                    return item.htmlID === 'hb-renalfunction';
                });
            if ($serumCreatValSI >= 200) {
                if (!$abnormalRenal) {
                    self.Hasbled_selected.push(appmodel.FormData.hasbledModifiable[2]);
                }
            }
            // per tony's comment on requirements doc, commenting following block
            // comment: "don't want Auto-False conditional logic (that is: setting a factor to False if conditions are no longer met)"
            // else {
            //         self.Hasbled_selected.remove($abnormalRenal);
            // }
        }
        /*This code is for reevaluate therapy dosing information as change in Serum Creatinine
        *value may change dosing info for therapy option "Apixaban"
        */
        if (self.selectedTherapyOption() === appmodel.FormData.therapyOptions.Apixaban) {
            self.EvaluateTherapyOptions(self.selectedTherapyOption());
        }
    });
    /**
    * This subscribe function is used for autopopulating(selection/deselection) of the HAS-BLED section's
    * "Currently taking antiplatelet drugs or NSAIDs" checkbox on selection/deselection of any Concomitant Medications section fields(checkbox).
    */
    self.OtherFactors.subscribe(function () {
        if (self.OtherFactors().length > 0) {
            var $antiplatelet = ko.utils.arrayFirst(self.Hasbled_selected(),
                function (item) {
                    return item.htmlID === 'hb-antiplatelet';
                });
            if ($antiplatelet == null) {
                self.Hasbled_selected.push(appmodel.FormData.hasbledModifiable[4]);
            }
        }
    });
    self.IsRenalDose = ko.observable(true);
    self.IsStandardDose = ko.observable(true);
    self.IsContraindicated = ko.observable(false);
    self.RenalDoseInfoText = ko.observable('');
    self.ShowInfoText = ko.observable(false);
    self.ShowEvaluateTherapy = ko.observable(false);
    self.selectedTherapyOption = ko.observable();
    /*This subscribe function is for evaluating therapy dosing information on change of therapy option selection
    */
    self.selectedTherapyOption.subscribe(function (e) {
        self.EvaluateTherapyOptions(e);
    });
    /*This function is for "Apixaban" therapy option to derive therapy dosing information.
    */
    self.IsRenalCharacteristics = function () {
        var $weight, $serum;
        if (self.CrClUnits()) {
            if (self.Weight() !== undefined && self.Weight() !== '') {
                $weight = parseFloat(self.Weight());
            }
            if (self.SerumCreatinine() !== undefined && self.SerumCreatinine() !== '') {
                $serum = parseFloat((parseFloat(self.SerumCreatinine()) / 88.4).toFixed(1));
            }
        } else {
            if (self.Weight() !== undefined && self.Weight() !== '') {
                $weight = parseFloat((parseFloat(self.Weight()) * 0.453592).toFixed(1));
            }
            if (self.SerumCreatinine() !== undefined && self.SerumCreatinine() !== '') {
                $serum = parseFloat(self.SerumCreatinine());
            }
        }
        return (self.Age() >= 80 && $weight <= 60) || (self.Age() >= 80 && $serum >= 1.5) || ($weight <= 60 && $serum >= 1.5);
    };
    /*This function is used to derive therapy dosing information for all the therapy options.
    * It calculates Standard dose, Renal-Function Adjusted Dose and value of Bleed Risk tab's "Population avg annual chance of being harmed
    * by" for selected therapy option
    */
    self.EvaluateTherapyOptions = function (selectedOption) {
        self.ShowEvaluateTherapy(true);
        self.IsRenalDose(true);
        self.IsStandardDose(true);
        self.IsContraindicated(false);
        self.RenalDoseInfoText('');
        self.ShowInfoText(false);
        self.PopulationAvgAnnualChance('');
        $('.tip-top').removeClass('open');
        $('span.tip-top').css('display', 'none');
        var e = ko.utils.arrayFirst(appmodel.FormData.allTherapyOptions, function (item) {
            return item.text === selectedOption;
        });

        if (e == undefined) {
            self.selectedTreatment([]);
            self.ShowEvaluateTherapy(false);
            return;
        }
        else {
            self.selectedTreatment(e);
        }

        if (e.text === undefined) {
            self.ShowEvaluateTherapy(false);
            return;
        }
        else if (e.text === appmodel.FormData.therapyOptions.NoTherapy) {
            self.IsRenalDose(false);
            self.IsStandardDose(true);
            self.onDOAC(false);
            self.onVKA(false);
        }
        else if (e.text === appmodel.FormData.therapyOptions.Apixaban) {
            self.onDOAC(true);
            self.onVKA(false);

            if (self.IsRenalCharacteristics()) {
                $('#crclPopup').hide();
                $('#renalDose').show();
                self.ShowInfoText(true);
                self.selectedTreatment().dose('2.5 mg twice daily');
                self.RenalDoseInfoText('Consider weight, age and hepatic function when prescribing apixaban. Adjustment may be based on age and weight only.');
            }
            else {
                if (parseFloat(self.CrCL()) < 15) {
                    self.selectedTreatment().dose('2.5 mg twice daily');
                    //self.IsContraindicated(true);
                    //self.RenalDoseInfoText('Consider weight, age and hepatic function when prescribing apixaban. Adjustment may be based on age and weight only.');
                }
                else {
                    self.selectedTreatment().dose('5 mg twice daily');
                }
            }
        }
        else if (e.text === appmodel.FormData.therapyOptions.Dabigatran) {
            self.onDOAC(true);
            self.onVKA(false);

            if (parseFloat(self.CrCL()) >= 15 && parseFloat(self.CrCL()) <= 30) {
                self.selectedTreatment().dose('75 mg twice daily');
                self.RenalDoseInfoText('The prescribing information recommends a reduced dose based on the CrCl');
            }
            else if (parseFloat(self.CrCL()) < 15) {
                self.selectedTreatment().dose('Contraindicated');
                self.IsContraindicated(true);
                self.RenalDoseInfoText('Not recommended for use in patients with <15 mL/min CrCl');
            }
            else {
                self.selectedTreatment().dose('150 mg twice daily');
            }
        }
        else if (e.text === appmodel.FormData.therapyOptions.Edoxaban) {
            self.onDOAC(true);
            self.onVKA(false);

            if (parseFloat(self.CrCL()) > 95) {
                self.selectedTreatment().dose('Contraindicated');
                self.IsContraindicated(true);
                self.RenalDoseInfoText('Do not use edoxaban in patients with CrCl >95 mL/min');
            }
            else if (parseFloat(self.CrCL()) > 50 && parseFloat(self.CrCL()) <= 95) {
                self.selectedTreatment().dose('60 mg once daily');
                self.selectedTreatment().standardDose('60 mg once daily');
            }
            else if (parseFloat(self.CrCL()) >= 15 && parseFloat(self.CrCL()) <= 50) {
                self.selectedTreatment().dose('30 mg once daily');
                self.RenalDoseInfoText('The prescribing information recommends a reduced dose based on the CrCl');
            }
            else {
                if (parseFloat(self.CrCL()) < 15) {
                    self.selectedTreatment().dose('Contraindicated');
                    self.IsContraindicated(true);
                    self.RenalDoseInfoText('Not recommended for use in patients with <15 mL/min CrCl');
                }
            }
        }
        else if (e.text === appmodel.FormData.therapyOptions.Rivaroxaban) {
            self.onDOAC(true);
            self.onVKA(false);

            if (parseFloat(self.CrCL()) > 50) {
                self.selectedTreatment().dose('20 mg once daily with the evening meal');
                self.selectedTreatment().standardDose('20 mg once daily with the evening meal');
            }
            else if (parseFloat(self.CrCL()) <= 50) {
                self.selectedTreatment().dose('15 mg once daily with the evening meal');
                self.RenalDoseInfoText('The prescribing information recommends a reduced dose based on the CrCl');
            }
        }
        else {
            if (e.text === appmodel.FormData.therapyOptions.Warfarin) {
                self.onDOAC(false);
                self.onVKA(true);
                self.IsStandardDose(true);
                self.IsRenalDose(false);
                $('#creatinineClearance .collapsable-panel').hide();
            }
        }
        if (self.RenalDoseInfoText() !== '' && (self.CrCL() !== undefined && self.CrCL() !== '')) {
            self.ShowInfoText(true);
        }
        if ((self.selectedTreatment().dose() === self.selectedTreatment().standardDose()) && (self.CrCL() !== undefined && self.CrCL() !== '')) {
            self.IsRenalDose(false);
        }
        if (self.selectedTreatment().dose() !== self.selectedTreatment().standardDose()) {
            self.IsStandardDose(false);
        }
        if (e.text !== appmodel.FormData.therapyOptions.Aspirin) {
            var R = '';
            R = Math.round((1 / (parseFloat(self.selectedTreatment().populationAvgAnnualMajorBleed) - 0.6)) * 100);
            if (isFinite(R)) {
                self.PopulationAvgAnnualChance(R);
            } else {
                self.PopulationAvgAnnualChance('');
            }
        }
        //This code is for dynamically updating dosing information tooltip's content.
        $('span[data-selector=\'renalInfoTooltip\']').html(self.RenalDoseInfoText() + '<span class=\'nub\'></span>');
    };

    /**
    * This is PatientAnnualRiskOfStrokeCHADS2Vasc property composed of knockout computed function.
    * This function returns respective static value for No Therapy
    * as per calculated CHA2DS2-VASc score.
    */
    self.PatientAnnualRiskforNotherapy = ko.pureComputed(
        function () {
            var R = '';
            let CHDS = self.CHDSScore();
            if (CHDS !== undefined && CHDS !== '' && self.selectedTreatment().text !== undefined) {
                R = self.annualRiskOfStrokeCHADS2VascValues[CHDS];
                R = parseFloat(Math.round(R * 100) / 100).toFixed(1);
            }
            return R;
        }, self);

    /**
    * This is PatientAnnualRiskOfStrokeCHADS2Vasc property composed of knockout computed function.
    * This function calculates the value of Stroke Risk/Benefit tab's "Patient's ANNUAL risk of stroke + thromboembolism with"
    * for calculated CHA2DS2-VASc score.
    */
    self.PatientAnnualRiskOfStrokeCHADS2Vasc = ko.pureComputed(
        function () {
            var R = '';
            let CHDS = self.CHDSScore();
            if (CHDS !== undefined && CHDS !== '' && self.selectedTreatment().text !== undefined) {
                R = self.annualRiskOfStrokeCHADS2VascValues[CHDS] * parseFloat(self.selectedTreatment().modifier);
                if (isFinite(R)) {
                    return R.toFixed(1);
                }
                else {
                    return '';
                }
            }
            return R;
        }, self);
    /**
    * This is AbsoluteRiskReduction property composed of knockout computed function.
    * This function calculates the value of Stroke Risk/Benefit Information tab's "Absolute risk reduction"
    * for calculated CHA2DS2-VASc score.
    */
    self.AbsoluteRiskReduction = ko.pureComputed(
        function () {
            var R = '';
            let CHDS = self.CHDSScore();
            if (CHDS !== undefined && CHDS !== '' && self.selectedTreatment().text !== undefined) {
                R = self.annualRiskOfStrokeCHADS2VascValues[CHDS] - (self.annualRiskOfStrokeCHADS2VascValues[CHDS] * parseFloat(self.selectedTreatment().modifier));
                if (isFinite(R)) {
                    return R.toFixed(1);
                }
                else {
                    return '';
                }
            }
            return R;
        }, self);
    /**
    * This is ChanceOfBenefit property composed of knockout computed function.
    * This function calculates the value of Stroke Risk/Benefit Information tab's "Chance of benefit per year"
    * for calculated CHA2DS2-VASc score.
    */
    self.ChanceOfBenefit = ko.pureComputed(
        function () {
            var R = '';
            let CHDS = self.CHDSScore();
            if (CHDS !== undefined && CHDS !== '' && self.selectedTreatment().text !== undefined) {
                R = 1 / (self.annualRiskOfStrokeCHADS2VascValues[CHDS] - (self.annualRiskOfStrokeCHADS2VascValues[CHDS] * parseFloat(self.selectedTreatment().modifier)));
                R = Math.round(R * 100);
                if (isFinite(R)) {
                    return R;
                }
                else {
                    return '';
                }
            }
            return R;
        }, self);
    /**
    * This is PatientAnnualRiskOfMajorBleed property composed of knockout computed function.
    * This function calculates the value of Bleed Risk tab's "Patient's ANNUAL risk of major bleed (HAS-BLED)"
    * for calculated HAS-BLED score.
    */
    self.PatientAnnualRiskOfMajorBleed = ko.pureComputed(
        function () {
            var R = '';
            if (self.Hasbled_Score() !== undefined && self.Hasbled_Score() !== '' && self.selectedTreatment().text !== undefined) {
                R = self.annualRiskOfHASBLEDValues[self.Hasbled_Score()] * parseFloat(self.selectedTreatment().hasbledModifier);
                if (isFinite(R)) {
                    return R.toFixed(1);
                }
                else {
                    return '';
                }
            }
            return R;
        }, self);
    /**
    * This is PatientAnnualChance property composed of knockout computed function.
    * This function calculates the value of Bleed Risk tab's "Patient's annual chance of being harmed by"
    * for calculated HAS-BLED score.
    */
    self.PatientAnnualChance = ko.pureComputed(
        function () {
            var R = '';
            if (self.Hasbled_Score() !== undefined && self.Hasbled_Score() !== '' && self.selectedTreatment().text !== undefined) {
                R = 1 / ((self.annualRiskOfHASBLEDValues[self.Hasbled_Score()] * parseFloat(self.selectedTreatment().hasbledModifier)) - 0.6);
                R = Math.round(R * 100);
                if (isFinite(R)) {
                    return R;
                }
                else {
                    return '';
                }
            }
            return R;
        }, self);
    /**
    * This is ReviewTherapyDisabled property composed of knockout computed function.
    * This function is used for enabling or disabling the Review Therapy tab depeding upon CHA2DS2-VASc score.
    */
    self.ReviewTherapyDisabled = ko.pureComputed(
        function () {
            if ((self.Age() !== "" && self.Age() != undefined) && self.Gender() != undefined && self.dbp() && self.pulse() && (self.Ethnicity() !== undefined) && self.Weight()) {
                return false
            }
            return true;
        }
    );
    self.TherapyGuidanceAdvice = ko.pureComputed(
        function () {
            if (self.HighestRiskProfile().riskName !== '') {
                if (self.HighestRiskProfile().riskProfile === 'High Risk')
                    return appmodel.FormData.advices[2];
                else if (self.HighestRiskProfile().riskProfile === 'Intermediate Risk')
                    return appmodel.FormData.advices[1];
                else
                    return appmodel.FormData.advices[0];
            }
            return appmodel.FormData.advices[3];
        }
    );
    self.CalCrCl = ko.observable(false);
    /*This function is for toggling the CRCL calculator popup on Review Therapy page.
    */
    self.CalVisibleToggle = function (e) {
        var a = e + ' .collapsable-panel';
        $(e).show();
        self.AgeStatus('question');
        self.CrClSexStatus('question');
        self.SerumCrStatus('question');
        self.WeightStatus('question');
        if ($(a).css('display') === 'none') {
            self.CalCrCl(true);
            $(a).show();
        } else {
            self.CalCrCl(false);
            $(a).hide();
        }
    };
    /*This function is for validating the CRCL popup's input values and accordingly display warning or info message.
    */
    self.CrClDone = function () {
        if (self.Age() === '' || self.Age() === undefined) {
            self.AgeStatus('question info');
        }
        if (self.Gender() === undefined) {
            self.CrClSexStatus('question info');
        }
        if (self.Weight() === '' || self.Weight() === undefined) {
            self.WeightStatus('question info');
            self.WeightErrorMsg('Please enter Weight.');
        }
        if (self.SerumCreatinine() === '' || self.SerumCreatinine() === undefined) {
            self.SerumCrStatus('question info');
            self.SerumCrErrorMsg('Please enter Serum Creatinine.');
        }
        if (self.CrCL() !== '' && self.CrCL() !== undefined) {
            $('.collapsable-panel').hide();
        }
    };
    self.IsAgeAlter = ko.observable(false);
    self.IsGenderAlter = ko.observable(false);
    /*This subscribe function is for reevaluate therapy dosing information as change in Weight
    *value may change dosing info for therapy option "Apixaban"
    */
    self.Weight.subscribe(function () {
        if (self.selectedTherapyOption() === appmodel.FormData.therapyOptions.Apixaban) {
            self.EvaluateTherapyOptions(self.selectedTherapyOption());
        }
    });

    self.checkPrevBleed = () => {
        let result = false;
        var cv2Bleed = ko.utils.arrayFirst(self.Cha2ds2_selected(),
            function (item) {
                return item.htmlID === 'cv2-prev_bleed';
            });
        if (cv2Bleed !== undefined)
            result = true;
        return result;
    };

    self.checkAbnormalRenal = () => {
        let renal = ko.utils.arrayFirst(self.Cha2ds2_selected(), function (item) {
            return item.htmlID === 'cv2-renal';
        });
        return renal ? true : false;
    };

    self.checkAbnormalLiver = () => {
        let liver = ko.utils.arrayFirst(self.Hasbled_selected(), function (item) {
            return item.htmlID === 'hb-liverfunction';
        });
        return liver ? true : false;
    }

    self.getBenefit = (magnitude) => {
        let _ = !magnitude ? 0 : !isNaN(parseFloat(magnitude)) ? parseFloat(magnitude) : 0;
        if (_ === 0)
            return 'Unavailable';
        _ = _ / 100;
        _ = 1 / _;
        return `1 in ${Math.round(_)}`;
    }
}


/**
 * this function is used to intialize the data model(view model), form data(application related data)
 */
function viewModel() {
    var self = this;
    self.FormData = formdata;
    self.Form = ko.observable(new formObject());
    self.Reset = function () {
        self.Form(new formObject());
        self.Form().selectedTherapyOption('Please select');
        $('.tip-top').removeClass('open');
        $('span.tip-top').css('display', 'none');
        $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
    };
}
var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
// ko.applyBindings(appmodel, document.getElementById('__root'));
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path = '#!/content/calculator/';
pager.navigate(path);
$('#calculator-Tab').addClass('selected active');
