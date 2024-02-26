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
var sendEmail = function () {
    
    $($(".sticky-holder").get(0)).css({position: 'static'});
    
    var emailText, subject, message, preproceduralchar, datetime, timestamp, breakline, userSelectedLanguage;
    userSelectedLanguage = appmodel.getValue(appmodel.mySelectedLanguage());
    datetime = new Date();
    const month = datetime.toLocaleString('en-GB', { month: 'long' });
    const monthArabic = datetime.toLocaleString('ar-SA', { month: 'long' });
    const monthPortuguese = datetime.toLocaleString('pt-BR',{ month: 'long' });
    const monthSpanish = datetime.toLocaleString('es-ES',{ month: 'long' });
    const monthGerman = datetime.toLocaleString('de-DE',{ month: 'long' });
    const monthIndonesian = datetime.toLocaleString('id-ID',{ month: 'long' });
    //console.log(monthArabic);
    breakline = '%0D%0A';

    if(userSelectedLanguage == 'ar'){
        timestamp = dateFormatter(datetime.getMinutes()) + ':' + dateFormatter(datetime.getHours()) +'\u202A' + ' ' +datetime.getFullYear()+ ' ' +'\u202A'+ monthArabic +'\u202C' + ' ' + (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate())+'\u202A';
        //timestamp = dateFormatter(datetime.getMinutes()) + ':' + dateFormatter(datetime.getHours()) +'\u202A' +' ' + datetime.getFullYear() + ' ' +'\u202A'+ monthArabic +'\u202C' + ' ' + (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) +'\u202A';
        //timestamp =  dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes()) + ' ' + (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + '\u002C' + monthArabic + '\u202A' + ' ' + datetime.getFullYear();
    }else if(userSelectedLanguage == 'pt') {
        timestamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthPortuguese + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
else if(userSelectedLanguage == 'es') {
    timestamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthSpanish + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());

}else if(userSelectedLanguage == 'de') {
    timestamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + '.' + ' ' + monthGerman + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());

}else if(userSelectedLanguage == 'in') {
    timestamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + monthIndonesian + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
}else {
        timestamp = (datetime.getDate() <=9 ? '0'+datetime.getDate() : datetime.getDate()) + ' ' + month + ' ' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    }
    
    emailText = appmodel.FormData().emailTemplate;
    // if(userSelectedLanguage == 'ar'){
    //     if(appmodel.Form().Sex() == 'Male'){
    //         subject = emailText.subjectLine.replace('#gender#', ' م').replace('#timestamp#', timestamp);
    //     }else{
    //         subject = emailText.subjectLine.replace('#gender#', ' ف').replace('#timestamp#', timestamp);
    //     }        
    // }else {
    //     subject = emailText.subjectLine.replace('#timestamp#', timestamp);
    // }    
    subject = emailText.subjectLine.replace('#timestamp#', timestamp);
        
    //subject = subject.replace('#age#', appmodel.Form().Age());
    //message = emailText.tenyearriskHeadline;
        
    if (appmodel.Form().VisitType()) {
        message += emailText.followuprisk.replace('#followuprisk#', appmodel.Form().TenYearRisk().replace('%', '%25'));
        message += emailText.tenyearrisk.replace('#baselinerisk#', appmodel.Form().TenYearRiskInitial().replace('%', '%25'));
    }
    else {        
        // if (appmodel.Form().Age() > 59 && appmodel.Form().LDLCholesterol() >= 190) {
        //     message += emailText.followuprisk.replace('#followuprisk#', 'N/A');
        //     message += emailText.lifetimerisk.replace("#lifetimerisk#", 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 40 to 59 years of age.');
        // }
        // else if (appmodel.Form().LDLCholesterol() >= 190) {
        //     message += emailText.followuprisk.replace('#followuprisk#', 'N/A');
        //     message += emailText.lifetimerisk.replace("#lifetimerisk#", appmodel.Form().yourLifeTimeRisk().replace("%", "%25"));
        // }
        //else {
            if(userSelectedLanguage == "ar"){
                var tenYearRisk = appmodel.Form().TenYearRisk().replace('%','');
                    tenYearRisk.trim();
                    tenYearRisk = '%' + tenYearRisk;
                message = emailText.followuprisk.replace('#followuprisk#',tenYearRisk.replace('%', '%25'));
            }else {
                message = emailText.followuprisk.replace('#followuprisk#', appmodel.Form().TenYearRisk().replace('%', '%25'));
            }
            //message = emailText.followuprisk.replace('#followuprisk#', appmodel.Form().TenYearRisk().replace('%', '%25'));
            if(appmodel.Form().Age()>=20 && appmodel.Form().Age()<=59){
            if(userSelectedLanguage == "ar"){
                var lifeTimeRisk = appmodel.Form().emailYourLifeTimeRisk().replace('%','');
                lifeTimeRisk.trim();
                lifeTimeRisk = '%25' + lifeTimeRisk;
                message += emailText.lifetimerisk.replace("#lifetimerisk#",lifeTimeRisk);
            }else{
                message += emailText.lifetimerisk.replace("#lifetimerisk#", appmodel.Form().yourLifeTimeRisk().replace("%", "%25"));
            }            
        }
    }
    if(userSelectedLanguage == "ar"){
        var optimalRisk = appmodel.Form().RiskFormula.optimalFollowUpRisk().replace('%','');
        optimalRisk.trim();
        optimalRisk = '%25' + optimalRisk;
        message += emailText.optimalrisk.replace("#optimalrisk#",optimalRisk);
       // message += emailText.optimalrisk.replace("#optimalrisk#", (appmodel.Form().VisitType()==false) ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace("%", "%25") : optimalRisk);
    } else {
        message += emailText.optimalrisk.replace("#optimalrisk#", (appmodel.Form().VisitType()==false) ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace("%", "%25") : appmodel.Form().RiskFormula.optimalFollowUpRisk().replace("%", "%25"));
    }
    //message += emailText.optimalrisk.replace("#optimalrisk#", (appmodel.Form().VisitType()==false) ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace("%", "%25") : appmodel.Form().RiskFormula.optimalFollowUpRisk().replace("%", "%25"));
    message += breakline;
    message += emailText.patientinformation.replace('#sex#', appmodel.inputSectionSexValue()).replace('#race#', appmodel.inputSectionRaceValue());
    if (appmodel.Form().VisitType()) {
    //     message += emailText.baseline.replace('#age#', appmodel.Form().BaselineAge());
    //     //message += breakline;
    //     message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().BaselineTotalCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#hdlCholesterol#', appmodel.Form().BaselineHDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#bloodPresure#', appmodel.Form().BaselineBloodPressure() + ' mm Hg').replace("%0ADiastolic BP: #dbloodPressure#", "");
    //  //   message += emailText.ldl.replace('#%0AldlCholesterol#', appmodel.Form().BaselineLDLCholesterolValue() +   (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL'));
    //     message += emailText.personalHistory.replace('#diabetic#', appmodel.Form().BaselineDiabetic() ? appmodel.Form().BaselineDiabetic() : 'No').replace('#smoker#', appmodel.Form().BaselineSmoker() ? appmodel.Form().BaselineSmoker() : 'No').replace('#hypertension#', appmodel.Form().BaselineHypertension());
    //     //message += breakline;
    //     message += emailText.followup.replace('#age#', appmodel.Form().Age());
    //     //message += breakline;
    //     message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#bloodPresure#', appmodel.Form().BloodPressure() + ' mm Hg').replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' mm Hg');
    //     message += emailText.ldl.replace('#ldlCholesterol#', appmodel.Form().LDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL'));
    //     message += emailText.personalHistory.replace('#diabetic#', appmodel.Form().Diabetic()).replace('#smoker#', appmodel.Form().Smoker()).replace('#hypertension#', appmodel.Form().Hypertension());
    }
    else {        
        message += emailText.followup.replace('#age#', appmodel.Form().Age());
        //message += breakline;
         if(userSelectedLanguage == "ar"){
             if(appmodel.Form().UnitOfMeasure()){
                message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() +' مليمول/لتر').replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + ' مليمول/لتر').replace('#bloodPresure#', appmodel.Form().BloodPressure()).replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' ملم زئبق');            
             }else{
                message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() + ' مجم/ديسيلتر').replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + ' مجم/ديسيلتر').replace('#bloodPresure#', appmodel.Form().BloodPressure()).replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' ملم زئبق');            
             }             
         }else{
             message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#bloodPresure#', appmodel.Form().BloodPressure()).replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' mm Hg');
         }
        //message += emailText.labs.replace('#totalCholesterol#', appmodel.Form().TotalCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#hdlCholesterol#', appmodel.Form().HDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL')).replace('#bloodPresure#', appmodel.Form().BloodPressure() + ' mm Hg').replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + ' mm Hg');
        //message += emailText.ldl.replace('#ldlCholesterol#', appmodel.Form().LDLCholesterolValue() + (appmodel.Form().UnitOfMeasure() ? ' mmol/l' : ' mg/dL'));
        message += emailText.personalHistory.replace('#diabetic#', appmodel.inputSectionDiaHistoryValue()).replace('#smoker#', appmodel.inputSectionSmokerValue()).replace('#hypertension#', appmodel.inputSectionHypTreatmentValue());       
    }
    //message += breakline;
    if (appmodel.recommendationType()) {
       // message += emailText.advice.replace('#ldladvice#', appmodel.recommendationType().ldlControl.email).replace('#bpadvice#', appmodel.recommendationType().bpControl.email).replace('#smokingadvice#',appmodel.recommendationType().smokingControl.email).replace('#diabetesadvice#', appmodel.recommendationType().diabetesControl.email).replace('#aspirinadvice#', appmodel.recommendationType().aspirinControl.email);
    }
    message += breakline;
    message += breakline;
    // message += emailText.desclaimer
    
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
        //console.log("calling else", message);
        var mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
        window.location.href = mymail;
    }
};