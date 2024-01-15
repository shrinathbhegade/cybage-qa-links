/*!
Appviewmodel JS
Copyright 2015-2016 Cybage Software Pvt. Ltd.
This file contains application model.
Licensed under the Cybage license.
*/
/**
 * this function is used to intialize the data model(view model), form data(application related data)
 */
function viewModel() {
    var self = this;
    self.Form = ko.observable(new formObject());
/* doNavigation() function is for toggling selected active css class on header and footer tab navigation.
* @param data: contains the current element selector value.
*/ 
    self.tabNavigation = function(data) {
        $(window).scrollTop($('body').offset().top);
        if(data === 'recommendation'){  
            if(appStorage['isValidate']){
                window.location.href = '#!/content/recommendation/';
                $('#evaluateTab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
                $('#recommendationTab').addClass('selected');
                $('#recommendation').css('display', 'block');
            }else{
                $('.predictedrisk-btn').trigger('click');
            }
        }else{
            window.location.href = '#!/content/evaluate/';
            $('.tabs-content').css('display', 'none');
            $('#evaluate').css('display', 'block');
        }
    };
/**
 * this function is used to reset all warnings
 */    
    self.resetWarnings = function(){
        self.Form().ageWarning(false);
        self.Form().sexWarning(false);
        self.Form().raceWarning(false);
        self.Form().creatinineWarning('question');
        self.Form().dialysisWarning(false);
        self.Form().proceduresiteWarning(false);
        self.Form().nyhaWarning(false);
        self.Form().scldWarning(false);
        self.Form().procedureWarning(false);        
        self.Form().pcarrestWarning(false);
        self.Form().pcshockWarning(false);
        self.Form().ppinotropesWarning(false);
        self.Form().ppmechanicalWarning(false);
        resetTooltip();
    };
/**
 * this function is used to draft email
 */     
    self.sendEmail = function() {
      var emailText, subject, message, guidance, patientdemographics, preproceduralchara, acuitystatus, datetime, timestamp, breakline, patientAge, creatinineSIUniteText, nyha, scld, proaccsite, pcarrest, pcshock, ppinotropes, ppmechanical;
      datetime = new Date();
      breakline = '%0A';
      if(self.Form().age() > 89){
       patientAge = '> 89';
      }else{
       patientAge = self.Form().age();
      }
      if(self.Form().creatinineSIUnitText() === 'mg/dL'){
       creatinineSIUniteText = 'mg/dL';
      }else{
       creatinineSIUniteText = 'micromol/L';
      }
      if(self.Form().dialysis()){
          dialysis = 'Yes';
      }else{
          dialysis = 'No';
      }      
      if(self.Form().nyha()){
          nyha = 'Yes';
      }else{
          nyha = 'No';
      }
     if(self.Form().scld()){
          scld = 'Yes';
      }else{
          scld = 'No';
      }
     if(self.Form().proaccsite()){
          proaccsite = 'Non-Femoral';
      }else{
          proaccsite = 'Femoral';
      }
     if(self.Form().pcarrest()){
          pcarrest = 'Yes';
      }else{
          pcarrest = 'No';
      }
     if(self.Form().pcshock()){
          pcshock = 'Yes';
      }else{
          pcshock = 'No';
      }
     if(self.Form().ppinotropes()){
          ppinotropes = 'Yes';
      }else{
          ppinotropes = 'No';
      }
     if(self.Form().ppmechanical()){
          ppmechanical = 'Yes';
      }else{
          ppmechanical = 'No';
      }      
      timestamp = (datetime.getMonth()+1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
      emailText = self.Form().FormData().emailTemplate;
      subject = emailText.subjectLine.replace('#genderEmailtext#', self.Form().genderEmailtext());
      subject = subject.replace('#genderEmailtext#', self.Form().genderEmailtext());
      subject = subject.replace('#patientAge#', patientAge);
      subject = subject.replace('#timestamp#', timestamp);
      message = subject;
      message += breakline;
      message += breakline;
      message += emailText.patientrisk.replace('#predictedRiskValue#', self.Form().predictedRiskValue());
      message += emailText.nationalavg;
      guidance = emailText.guidance.replace('#gendertext#', self.Form().gendertext());
      guidance = guidance.replace('#predictedRiskValue#', self.Form().predictedRiskValue());
      guidance = guidance.replace('#predictedRiskValue#', self.Form().predictedRiskValue());
      message += guidance;
      message += emailText.evaltext;
      patientdemographics = emailText.patientdemographics;
      patientdemographics = patientdemographics.replace('#patientAge#', patientAge);
      patientdemographics = patientdemographics.replace('#sex#', self.Form().gender());
      patientdemographics = patientdemographics.replace('#race#', self.Form().race());
      message += patientdemographics;
      preproceduralchara = emailText.preproceduralchara;
      preproceduralchara = preproceduralchara.replace('#creatinine#', self.Form().creatinine());
      preproceduralchara = preproceduralchara.replace('#creatinineSIUniteText#', encodeURI(creatinineSIUniteText));
      preproceduralchara = preproceduralchara.replace('#dialysis#', dialysis);
      preproceduralchara = preproceduralchara.replace('#xgfr#', self.Form().xgfr());
      preproceduralchara = preproceduralchara.replace('#nyha#', nyha);
      preproceduralchara = preproceduralchara.replace('#scld#', scld);
      preproceduralchara = preproceduralchara.replace('#proaccsite#', proaccsite);
      message += preproceduralchara;
      acuitystatus = emailText.acuitystatus;
      acuitystatus = acuitystatus.replace('#acuityStatusText#', self.Form().acuityStatusText());
      acuitystatus = acuitystatus.replace('#procedureStatus#', self.Form().procedureStatus());
      acuitystatus = acuitystatus.replace('#pcarrest#', pcarrest);
      acuitystatus = acuitystatus.replace('#pcshock#', pcshock);
      acuitystatus = acuitystatus.replace('#ppinotropes#', ppinotropes);
      acuitystatus = acuitystatus.replace('#ppmechanical#', ppmechanical);
      message += acuitystatus;
      if(isNativeApplication) {
       cordova.plugins.email.open({
        to:'',
        cc:'',
        bcc:'',
        subject:subject,
        body:decodeURI(message.replace(new RegExp('%0A', 'g'), '<br>')),
        isHtml:  true
       });
      } else {
       mymail = 'mailto:?subject=' + subject +'&body=' + message +'';
       window.location.href = mymail;
      }
    };   
}
var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path = '#!/content/evaluate/';
pager.navigate(path);
$('#evaluateTab').addClass('selected active');
/**
 * this function contains the data binding properties,functions that are used throughout the application.
 */
function formObject() {
    var self = this;
    self.FormData = ko.observable(formdata);
    self.isValidate = ko.observable(appStorage['isValidate']);
    self.isWarningOn = ko.observable(appStorage['isWarningOn']);
    self.age = ko.observable('');
    self.ageWarning = ko.observable(false);
    self.sex = ko.observable('');
    self.gendertext = ko.observable('');
    self.gender = ko.observable('');
    self.genderEmailtext = ko.observable('');    
    self.sexWarning = ko.observable(false);
    self.race = ko.observable();
    self.raceWarning = ko.observable(false);
    self.iscreatinineUnitChange = ko.observable(false);
    self.creatinineSIUnit = ko.observable(false);
    self.creatinineWarningText = ko.observable('Please enter a value between 0.1 and 150');
    self.creatinineSIUnitText = ko.observable('mg/dL');
    self.creatinine = ko.observable();
    self.creatinineValue = ko.observable();
    self.creatinineWarning = ko.observable('question');
    self.creatinineWarningFormat = ko.observable('Enter values in the format x.x OR xx.x OR xxx.x OR x,x OR xx,x OR xxx,x');
    self.dialysis = ko.observable(0);
    self.dialysisValue = ko.observable('');
    self.dialysisWarning = ko.observable(false);
    self.proaccsite = ko.observable(0);
    self.proaccsiteValue = ko.observable('');
    self.proceduresiteWarning = ko.observable(false);
    self.nyha = ko.observable(0);
    self.nyhaValue = ko.observable('');
    self.nyhaWarning = ko.observable(false);
    self.scld = ko.observable(0);
    self.scldValue = ko.observable('');
    self.scldWarning = ko.observable(false);
    self.acuityStatus = ko.observable('');
    self.acuityStatusText = ko.observable('');
    self.category1 = ko.observable(0);
    self.category2 = ko.observable(0);
    self.category3 = ko.observable(0);
    self.category4 = ko.observable(0);
    self.procedureStatus = ko.observable('');
    self.procedureWarning = ko.observable(false);
    self.pcarrest = ko.observable(0);
    self.pcarrestValue = ko.observable('');
    self.pcarrestWarning = ko.observable(false);
    self.pcshock = ko.observable(0);
    self.pcshockValue = ko.observable('');
    self.pcshockWarning = ko.observable(false);
    self.ppinotropes = ko.observable(0);
    self.ppinotropesValue = ko.observable('');
    self.ppinotropesWarning = ko.observable(false);
    self.ppmechanical = ko.observable(0);
    self.ppmechanicalValue = ko.observable('');
    self.ppmechanicalWarning = ko.observable(false);
    self.egfr = ko.observable('');
    self.xgfr = ko.observable('');
    self.predictedRiskValue = ko.observable('');
    self.hasFocus = ko.observable(false);
    self.warningOff = function(){
            self.isWarningOn(false);
            appStorage['isWarningOn'] = false;
    };
    
/**
 * this function is used to change info button text of procedure status field
 */
    self.changeTooltip = function(){
        var dataSelector = $('.procedure-status-tooltip').attr('data-selector');
        procedureTooltip = $('#' + dataSelector);
        if(self.procedureStatus() === 'Elective'){
            procedureTooltip.text(self.FormData().infotext.elective);}
        else if(self.procedureStatus() === 'Urgent'){
            procedureTooltip.text(self.FormData().infotext.urgent);}
        else if(self.procedureStatus() === 'Emergency'){
            procedureTooltip.text(self.FormData().infotext.emergency);}
        else if(self.procedureStatus() === 'Salvage'){
            procedureTooltip.text(self.FormData().infotext.salvage);}
        else{
            procedureTooltip.text(self.FormData().infotext.defaulttext);}
    };
/**
 * this function is used to set dialysis Value
 */    
    self.dialysisAction = function(data){
        self.dialysisValue(data);
        self.dialysisWarning(false);
    };
 /**
 * this function is used to calculate Glomerular Filtration Rate
 */    
     self.xgfrResult = function(){
        var sexValue = 1, raceValue = 1, crValue, egfiltrationRate;
        if(self.sex() === 'female'){
            sexValue = 0.742;}
        if(self.race() === 'Black or African American'){
            raceValue = 1.21;}
        if (self.creatinineSIUnit()) {
            crValue = parseFloat(self.creatinineValue()) / 88.4;}
        else {
            crValue = parseFloat(self.creatinineValue());}
        if(typeof(self.age()) !== 'undefined' && self.age() !== '' && typeof(self.sex()) !== 'undefined' && self.sex() !== '' && typeof(self.race()) !== 'undefined' && self.race() !== '' && typeof(self.creatinine()) !== 'undefined' && self.creatinine() !== '' && typeof(self.dialysisValue()) !== 'undefined' && self.dialysisValue() !== ''){
           egfiltrationRate = 186*(Math.pow(crValue, -1.154))*(Math.pow(self.age(), -0.203))*(sexValue)*(raceValue);
                if(egfiltrationRate !== 'Infinity'){
                    self.egfr(egfiltrationRate.toFixed(1));
        }else{
                    self.egfr('');
        }
                if(self.dialysisValue() === 'selected-btn1'){
                    self.dialysis(1);
                    self.xgfr(90);
        }else if(self.dialysisValue() === 'selected-btn2'){
                    self.dialysis(0);
                    self.xgfr(Math.min(Math.max(self.egfr(), 30), 90));
        }
                self.predictedRiskResult();
           }
           else{
               self.xgfr('');
               self.predictedRiskResult();
           }
    };
  /**
 * this function is used to calculate predicted risk
 */   
 self.predictedRiskResult = function() {
        var predictedRisk;
        var x = (-4.72976 
          + (0.0243695 * Math.min(Math.max(self.age(), 50), 100))
          + (-0.0138667 * self.xgfr()) 
          + (1.1793185 * self.dialysis()) 
          + (0.2230387 * self.nyha()) 
          + (0.5108357 * self.scld()) 
          + (0.6734738 * self.proaccsite()) 
          + (0 * self.category1()) 
          + (0.4506953 * self.category2()) 
          + (0.9926857 * self.category3())
          + (1.2073734 * self.category4()));

        predictedRisk = Math.pow(2.718281828, x) / ( 1 + Math.pow(2.718281828, x));
      predictedRisk = parseFloat(predictedRisk * 100).toFixed(2);
        self.predictedRiskValue(predictedRisk);
        self.mandatoryFieldValidation();
    };
    
  /**
 * this function is used to set procedure access site value
 */     
    self.proaccsiteAction = function(data) {
        self.proaccsiteValue(data);};
  /**
 * this function is used to set NYHA value
 */     
    self.nyhaAction = function(data) {
        self.nyhaValue(data);};
  /**
 * this function is used to set SCLD value
 */     
    self.scldAction = function(data) {
        self.scldValue(data);};
  /**
 * this function is used to set Prior cardiac arrest value
 */ 
    self.pcarrestAction = function(data) {
        self.pcarrestValue(data);
        self.acuityStatus('');
        self.calculateAcuityStatus();};
  /**
 * this function is used to set Prior cardiogenic shock value
 */ 
    self.pcshockAction = function(data) {
        self.pcshockValue(data);
        self.acuityStatus('');
        self.calculateAcuityStatus();};
/**
 * this function is used to set Pre-procedure inotropes value
 */ 
    self.ppinotropesAction = function(data) {
        self.ppinotropesValue(data);
        self.acuityStatus('');
        self.calculateAcuityStatus();};
/**
 * this function is used to set Mechanical assist device value
 */ 
    self.ppmechanicalAction = function(data) {
        self.ppmechanicalValue(data);
        self.acuityStatus('');
        self.calculateAcuityStatus();};
/**
 * this function is used to set Category
 */ 
    self.setCategory = function(category, categoryText){
    self.acuityStatusText(categoryText);
        self.category1(0);self.category2(0);self.category3(0);self.category4(0);
    if (category === 1) {
        self.category1(1);
    }else if(category === 2){
        self.category2(1);
    }else if(category === 3){
        self.category3(1);
    }else if(category === 4){
        self.category4(1);
    }   
    };
/**
 * this function is used to calculate Acuity Status Category
 */    
    self.calculateAcuityStatus = function(){
        var dataSelector = $('.procedure-status-tooltip').attr('data-selector');
        procedureTooltip = $('#' + dataSelector);
        if(self.procedureStatus() === 'Elective' && self.pcarrestValue() === 'selected-btn2' && self.pcshockValue() === 'selected-btn2' && self.ppinotropesValue() === 'selected-btn2' && self.ppmechanicalValue() === 'selected-btn2'){
           self.setCategory(1 ,'Category 1');
        }else if(self.procedureStatus() === 'Urgent' && self.pcarrestValue() === 'selected-btn2' && self.pcshockValue() === 'selected-btn2' && self.ppinotropesValue() === 'selected-btn2' && self.ppmechanicalValue() === 'selected-btn2'){
           self.setCategory(2 ,'Category 2');
        }else if(self.procedureStatus() === 'Elective' && self.pcarrestValue() === 'selected-btn2' && self.pcshockValue() === 'selected-btn1' && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2') ){
           self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Elective' && self.pcarrestValue() === 'selected-btn2' && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') &&  self.ppinotropesValue() === 'selected-btn1' && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2') ){
            self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Elective' && self.pcarrestValue() === 'selected-btn2' && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && self.ppmechanicalValue() === 'selected-btn1'){
            self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Urgent' && self.pcarrestValue() === 'selected-btn2' && self.pcshockValue() === 'selected-btn1' && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2') ){
            self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Urgent' && self.pcarrestValue() === 'selected-btn2' && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && self.ppinotropesValue() === 'selected-btn1' && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2') ){
            self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Urgent' && self.pcarrestValue() === 'selected-btn2' && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && self.ppmechanicalValue() === 'selected-btn1'){
            self.setCategory(3 ,'Category 3');
        }else if(self.procedureStatus() === 'Emergency' && (self.pcarrestValue() === 'selected-btn1' || self.pcarrestValue() === 'selected-btn2') && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2')){
          self.setCategory(4 ,'Category 4');
        }else if(self.procedureStatus() === 'Salvage' && (self.pcarrestValue() === 'selected-btn1' || self.pcarrestValue() === 'selected-btn2') && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2')){
            self.setCategory(4 ,'Category 4');
        }else if(self.procedureStatus() === 'Elective' && (self.pcarrestValue() === 'selected-btn1') && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2')){
            self.setCategory(4 ,'Category 4');
        }else if(self.procedureStatus() === 'Urgent' && (self.pcarrestValue() === 'selected-btn1') && (self.pcshockValue() === 'selected-btn1' || self.pcshockValue() === 'selected-btn2') && (self.ppinotropesValue() === 'selected-btn1' || self.ppinotropesValue() === 'selected-btn2') && (self.ppmechanicalValue() === 'selected-btn1' || self.ppmechanicalValue() === 'selected-btn2')){
           self.setCategory(4 ,'Category 4');
        }else{
        self.setCategory(0 ,'');
        }
        self.changeTooltip();
        self.predictedRiskResult();
    };
/**
 * this function is used to reset all fields
 */     
    self.calculateRiskReset = function(){
        self.patientDemographicsReset();
        self.renalFunctionReset();
        self.acuityStatusReset();
    };
/**
 * this function is used to reset Patient Demographics fields
 */     
    self.patientDemographicsReset = function(){
        self.age('');
        self.sex('');
        self.race('');
        self.ageWarning(false);
        self.sexWarning(false);
        self.raceWarning(false);
        resetTooltip();
    };
/**
 * this function is used to reset Renal Function fields
 */     
    self.renalFunctionReset = function(){
        self.creatinineSIUnit(false);
        self.creatinine('');
        self.creatinineValue('');
        self.dialysisValue('');
        self.creatinineWarning('question');
        self.dialysisWarning(false);
        self.proaccsiteValue('');
        self.nyhaValue('');
        self.scldValue('');
        self.proceduresiteWarning(false);
        self.nyhaWarning(false);
        self.scldWarning(false); 
        resetTooltip();
    };
/**
 * this function is used to reset Acuity Status fields
 */    
    self.acuityStatusReset = function(){
        self.acuityStatus('');
        self.acuityStatusText('');
        self.acuityStatusCalReset();
    };
/**
 * this function is used to reset Acuity Status fields when Procedure Status field value change
*/     
    self.procedureStatusAction = function(){
        self.acuityStatusText(' ');
        self.predictedRiskResult();
        self.acuityStatusCalReset();
    };
    self.acuityStatusAction = function(){
        self.acuityStatus('');
    };
/**
 * this function is used to reset Acuity Status fields
*/     
    self.acuityStatusCalReset = function(){
        self.procedureStatus('');
        self.pcarrestValue('');
        self.pcshockValue('');
        self.ppinotropesValue('');
        self.ppmechanicalValue('');
        self.procedureWarning(false);
        self.pcarrestWarning(false);
        self.pcshockWarning(false);
        self.ppinotropesWarning(false);
        self.ppmechanicalWarning(false);
        resetTooltip();
    };
 /**
 * this function is used to Validate all fields 
*/    
    self.mandatoryFieldValidation = function(){
            if(typeof(self.age()) !== 'undefined' && self.age() !== '' &&
               typeof(self.sex()) !== 'undefined' && self.sex() !== '' &&
               typeof(self.race()) !== 'undefined' && self.race() !== '' &&
               typeof(self.creatinine()) !== 'undefined' && self.creatinine() !== '' &&
               typeof(self.dialysisValue()) !== 'undefined' && self.dialysisValue() !== '' &&
               typeof(self.proaccsiteValue()) !== 'undefined' && self.proaccsiteValue() !=='' &&
               typeof(self.nyhaValue()) !== 'undefined' && self.nyhaValue() !== '' && self.scldValue() !== '' &&
               typeof(self.scldValue()) !== 'undefined' && self.scldValue() !== '' && self.scldValue() !== '' &&
               typeof(self.acuityStatusText()) !== 'undefined' && self.acuityStatusText() !== ''){
               appStorage['isValidate'] = true;
               self.isValidate(appStorage['isValidate']);
        }else{
            appStorage['isValidate'] = false;
            self.isValidate(false);
        }
    };
/**
 * this function is used to Validate and focus all fields 
*/   
    self.fieldValidation = function(){
        if(typeof(self.age()) === 'undefined' || self.age() === ''){
            self.ageWarning(true);
            self.elementFocus('age');
        }else{
            self.ageWarning(false);
        }
        if(typeof(self.sex()) === 'undefined' || self.sex() === ''){
            self.sexWarning(true);
            self.elementFocus('sex');
        }else{
            self.sexWarning(false);
        }
        if(typeof(self.race()) === 'undefined' || self.race() === ''){
            self.raceWarning(true);
            self.elementFocus('race');
        }else{
            self.raceWarning(false);
        }
        if(typeof(self.creatinine()) === 'undefined' || self.creatinine() === ''){
            self.creatinineWarning('question warning');
            self.elementFocus('creatinine');
        }else{
            self.creatinineWarning('question');
        }
        if(typeof(self.dialysisValue()) === 'undefined' || self.dialysisValue() === ''){
            self.dialysisWarning(true);
            self.elementFocus('dialysis');
        }else{
            self.dialysisWarning(false);
        }
        if(typeof(self.proaccsiteValue()) === 'undefined' || self.proaccsiteValue() === ''){
            self.proceduresiteWarning(true);
            self.elementFocus('proceduresite');
        }else{
            self.proceduresiteWarning(false);
        }
        if(typeof(self.nyhaValue()) === 'undefined' || self.nyhaValue() === ''){
            self.nyhaWarning(true);
            self.elementFocus('nyha');
        }else{
            self.nyhaWarning(false);
        }
        if(typeof(self.scldValue()) === 'undefined' || self.scldValue() === ''){
            self.scldWarning(true);
            self.elementFocus('scld');
        }
        else{
            self.scldWarning(false);
        }
        if(typeof(self.procedureStatus()) === 'undefined' || self.procedureStatus() === ''){
            self.procedureWarning(true);
            self.elementFocus('procedureStatus');
        }else{
            self.procedureWarning(false);
        }
        if(typeof(self.pcarrestValue()) === 'undefined' || self.pcarrestValue() === ''){
            self.pcarrestWarning(true);
            self.elementFocus('pcarrest');
        }else{
            self.pcarrestWarning(false);
        }
        if(typeof(self.pcshockValue()) === 'undefined' || self.pcshockValue() === ''){
            self.pcshockWarning(true);
            self.elementFocus('pcshock');
        }else{
            self.pcshockWarning(false);
        }
        if(typeof(self.ppinotropesValue()) === 'undefined' || self.ppinotropesValue() === ''){
            self.ppinotropesWarning(true);
            self.elementFocus('ppinotropes');
        }else{
            self.ppinotropesWarning(false);
        }
        if(typeof(self.ppmechanicalValue()) === 'undefined' || self.ppmechanicalValue() === ''){
            self.ppmechanicalWarning(true);
            self.elementFocus('ppmechanical');
        }else{
            self.ppmechanicalWarning(false);
        }
        if(appStorage['isValidate'] === true){
            $(window).scrollTop($('body').offset().top);
            window.location.href = '#!/content/recommendation/';
            $('#evaluateTab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
            $('#recommendationTab').addClass('selected');
            $('#recommendation').css('display', 'block');
            $('#evaluate, #about, #resources, disclaimer').css('display', 'none'); 
        }else{
            self.hasFocus(false);
        }
        resetTooltip();
    };
    self.elementFocus = function(id){
        if(!self.hasFocus()){
            $('#' + id).focus();
            self.hasFocus(true);
        return true;
        }else{
            return false;
        }
    };
/**
* this subscribe function is used for set Patient Age and update gfr if age value change.
*/    
    self.age.subscribe(function(){
        if(isNaN(self.age())){
            self.age('');}
    else if(self.age()% 1 !== 0){
        self.age('');}
    else{
            if(self.age() < 18){
                self.age('');}
        else if(self.age() > 100){
                self.age(100);}
        else{
                self.ageWarning(false);}
        }
        self.xgfrResult();
    });
/**
* this subscribe function is used for set Patient Sex and update gfr if this field value change.
*/       
    self.sex.subscribe(function(){
        if(self.sex() !== ''){
            self.sexWarning(false);}    
        if(self.sex() === 'male'){
            self.gendertext('he');
            self.genderEmailtext('M');
            self.gender('Male');
    }else{
            self.gendertext('she');
            self.genderEmailtext('F');
            self.gender('Female');
        }
        self.xgfrResult();
    });
/**
* this subscribe function is used for set Patient race and update gfr if this field value change.
*/    
    self.race.subscribe(function(){
        if(self.race() !== ''){
            self.raceWarning(false);
        }
        self.xgfrResult();
    });
/**
* this subscribe function is used for set Serum Creatinine , Validate Serum Creatinine range and update gfr if this field value change.
*/     
    self.creatinine.subscribe(function(){
        var creatinineVal = self.creatinine();
        if(self.iscreatinineUnitChange()){
            self.iscreatinineUnitChange(false);
            self.creatinineValue('');
            return false;
        }
        creatinineVal = creatinineVal.replace(/\,/g, '.');
        var pattrn;
        if(!self.creatinineSIUnit()){
            pattrn = new RegExp('^([0-9]{1,4}|0)([,.]{1}[0-9]{1})?$');
            if (creatinineVal === '' || creatinineVal === 'undefined') {
                self.creatinineWarning('question warning');
            }else if(creatinineVal < 0.1){
                self.creatinine('');
                self.creatinineWarning('question warning');
                self.creatinineWarningText(self.FormData().warningtext.creatinineWarningTextUS);
                return false;
            }else if(creatinineVal > 150){
                self.creatinine('');
                self.creatinineWarning('question warning');
                self.creatinineWarningText(self.FormData().warningtext.creatinineWarningTextUS);
                return false;
            }else if (!(pattrn.test(creatinineVal))) {
                self.creatinine('');
                self.creatinineWarning('question error');
                self.creatinineWarningFormat(self.FormData().warningtext.creatinineWarningFormatUS);
                return false;
            }else{
                self.creatinineWarning('question');
                self.creatinine(creatinineVal);
            }
        }
        else if(self.creatinineSIUnit()){
            pattrn = new RegExp('^([0-9]{1,5})([,.]{1}[0-9]{1})?$');
            if (creatinineVal === '' || creatinineVal === 'undefined') {
                self.creatinineWarning('question warning');
            }else if(creatinineVal < 8.8){
                self.creatinine('');
                self.creatinineWarning('question warning');
                return false;
            }else if(creatinineVal > 13260){
                self.creatinineWarning('question warning');
                self.creatinine('');
                return false;
            }else if (!(pattrn.test(creatinineVal))) {
                self.creatinine('');
                self.creatinineWarning('question error');
                return false;
            }else{
                self.creatinineWarning('question');
                self.creatinine(creatinineVal);
            }
        }else{
            self.creatinineWarning('question');
            self.creatinine(creatinineVal);
        }
        self.creatinineValue(creatinineVal);
        self.xgfrResult();
    return true;    
    });
/**
* this subscribe function is used for set Serum Creatinine , Validate Serum Creatinine range and update gfr if this field value change.
*/
    self.creatinineSIUnit.subscribe(function(){
        if(self.creatinineSIUnit()){
            self.creatinineSIUnitText('µmol/L');
            self.creatinineWarningText(self.FormData().warningtext.creatinineWarningTextSI);
            self.creatinineWarningFormat(self.FormData().warningtext.creatinineWarningFormatSI);
        }else{
            self.creatinineSIUnitText('mg/dL');
            self.creatinineWarningText(self.FormData().warningtext.creatinineWarningTextUS);
            self.creatinineWarningFormat(self.FormData().warningtext.creatinineWarningFormatUS);
        }
        self.iscreatinineUnitChange(true);
        self.creatinine('');
        self.iscreatinineUnitChange(false);
        self.xgfrResult();
    });
/**
 * this function is used to calculate gfr on dialysis Value change
 */    
    self.dialysisValue.subscribe(function(){
        self.xgfrResult();
    });
/**
 * this function is used to calculate Acuity Status category on change
 */     
    self.procedureStatus.subscribe(function(){
        if(self.procedureStatus() !== '' || self.procedureStatus() !== 'undefined'){
            self.procedureWarning(false);
        }
        self.calculateAcuityStatus();
    });
/**
 * this function is used to calculate Acuity Status category on change
 */    
    self.proaccsiteValue.subscribe(function(){
        if(self.proaccsiteValue() === 'femoral'){
            self.proaccsite(0);
        }else{
            self.proaccsite(1);
        }
        if(self.proaccsiteValue() !== '' || self.proaccsiteValue() !== 'undefined'){
            self.proceduresiteWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to set NYHA value on change
 */    
    self.nyhaValue.subscribe(function(){
        if(self.nyhaValue() === 'selected-btn1'){
            self.nyha(1);
        }else{
            self.nyha(0);
        }
        if(self.nyhaValue() !== '' || self.nyhaValue() !== 'undefined'){
            self.nyhaWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to set SCLD value on change
 */     
    self.scldValue.subscribe(function(){
        if(self.scldValue() === 'selected-btn1'){
            self.scld(1);
        }else{
            self.scld(0);
        }
        if(self.scldValue() !== '' || self.scldValue() !== 'undefined'){
            self.scldWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to calculate Acuity Status category.
 */    
    self.pcarrestValue.subscribe(function(){
        if(self.pcarrestValue() === 'selected-btn1'){
            self.pcarrest(1);
        }else{
            self.pcarrest(0);
        }
        if(self.pcarrestValue() !== '' || self.pcarrestValue() !== 'undefined'){
            self.pcarrestWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to set Procedure Access Site value on change and show warnings if field is empty.
 */     
    self.pcshockValue.subscribe(function(){
        if(self.pcshockValue() === 'selected-btn1'){
            self.pcshock(1);
        }else{
            self.pcshock(0);
        }
        if(self.pcshockValue() !== '' || self.pcshockValue() !== 'undefined'){
            self.pcshockWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to calculate Acuity Status category.
 */    
    self.ppinotropesValue.subscribe(function(){
        if(self.ppinotropesValue() === 'selected-btn1'){
            self.ppinotropes(1);
        }else{
            self.ppinotropes(0);
        }
        if(self.ppinotropesValue() !== '' || self.ppinotropesValue() !== 'undefined'){
            self.ppinotropesWarning(false);
        }
        self.predictedRiskResult();
    });
/**
 * this function is used to calculate Acuity Status category.
 */    
    self.ppmechanicalValue.subscribe(function(){
        if(self.ppmechanicalValue() === 'selected-btn1'){
            self.ppmechanical(1);
        }else{
            self.ppmechanical(0);
        }
        if(self.ppmechanicalValue() !== '' || self.ppmechanicalValue() !== 'undefined'){
            self.ppmechanicalWarning(false);
        }
        self.predictedRiskResult();
    }); 
     /*About Us page updated code start*/  
    self.dateToday = ko.observable(aboutDate['dateToday']);
    self.dateSuffix = ko.observable(aboutDate['suffix']);
    self.monthYear = ko.observable(aboutDate['monthYear']);  
    /*About Us page updated code end*/     
    $(document).foundation();
    self.changeTooltip();    
 }