/*draft email based on user inputs in application*/
var dateFormatter = function (i) {
    if (i < 10) {
        i = '0' + i;
    }
    else {
        return i;
    }
    return i;
};
var emailYoungPatients = function () {
    
   // $($(".sticky-holder").get(0)).css({position: 'static'});
    
    var emailText, subject, message, preproceduralchar, datetime, timestamp, breakline;
    datetime = new Date();
    breakline = '%0D%0A';
    timestamp = (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    emailText = appmodel.FormData.emailTemplate;
    subject = emailText.subjectLine.replace('#gender#', appmodel.Form().Sex() == 'Male' ? 'M' : 'F').replace('#timestamp#', timestamp);
    subject = subject.replace('#age#', appmodel.Form().Age());
    message = emailText.tenyearriskHeadline;
    message += emailText.followuprisk.replace('#followuprisk#', 'N/A*');
    message += emailText.lifetimerisk.replace("#lifetimerisk#", appmodel.Form().yourLifeTimeRisk().replace("%", "%25"));
    
    if (appmodel.Form().Age() >=  20 && appmodel.Form().Age() <= 39) {
        message += emailText.optimalrisk.replace("#optimalrisk#", "N/A* %0D%0A *This calculator only provides 10-year ASCVD and Optimal risk estimates for individuals 40-79 years of age.");
    }
    else {
       message += emailText.optimalrisk.replace("#optimalrisk#", (appmodel.Form().VisitType()==false) ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace("%", "%25") : appmodel.Form().RiskFormula.optimalFollowUpRisk().replace("%", "%25")); 
    }
    message += breakline;
    message += emailText.patientinformation.replace('#sex#', appmodel.Form().Sex()).replace('#race#', appmodel.Form().Race());
    message += emailText.followup.replace('#age#', appmodel.Form().Age());
    message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#bloodPresure#', appmodel.Form().BloodPressure() + ' mm Hg').replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' mm Hg');
    message += emailText.ldl.replace('#ldlCholesterol#', appmodel.Form().LDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL'));
    message += emailText.personalHistory.replace('#diabetic#', appmodel.Form().Diabetic()).replace('#smoker#', appmodel.Form().Smoker()).replace('#hypertension#', appmodel.Form().Hypertension());
    message += breakline;
    
    if (appmodel.recommendationType()) {
       message += emailText.advice.replace('#bpadvice#%0D%0A', "").replace('#smokingadvice#%0D%0A', "").replace('#aspirinadvice#', "").replace('#diabetesadvice#%0D%0A', "").replace('#ldladvice#', appmodel.recommendationType().ldlControl.email); 
    }
    message = message.replace(/undefined/g, "N/A").replace(/null/g, "N/A");
    message += breakline;
    message += breakline;
    message += emailText.desclaimer
    if (isNativeApplication) {
        cordova.plugins.email.open({
            to: ''
            , cc: ''
            , bcc: ''
            , subject: subject
            , body: decodeURI(message.replace(new RegExp('%0D%0A', 'g'), '<br>'))
            , isHtml: true
        });
    }
    else {
        var mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
        window.location.href = mymail;
    }
};
