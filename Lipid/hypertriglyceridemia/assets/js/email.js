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
/*
     sendEmail function iis used to draft email.
    */
self.sendEmail = function () {
    var linebreak = "%0D%0A";
    var doublelinebreak = linebreak + linebreak;
    var emailText, subject, message;
    var datetime = new Date();
    var timestamp = (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
    emailText = appmodel.FormData.emailTemplate;
    subject = emailText.subjectLine;
    subject = subject.replace('#timestamp#', timestamp);
    message = emailText.headLine;
    message = message.replace('#Age#', appmodel.Form().Age());

    if (appmodel.Form().triglyceridesRange) {
        
        //triglycerides = emailText.triglycerides.replace('#triglycerides#',appmodel.Form().triglyceridesRange());
        if (appmodel.Form().triglyceridesRange() == 'group1') {
            if (appmodel.Form().UnitOfMeasure()) {
                triglycerides = '1.694 fasted/1.976 non fasted - 5.634 mmol/L%0D%0A';
            }
            else {
                triglycerides = '150 fasted (175 non fasted) – 499 mg/dL%0D%0A';
            }
        }
        else if (appmodel.Form().triglyceridesRange() == 'group2') {
            if (appmodel.Form().UnitOfMeasure()) {
                triglycerides = '5.645 - 11.279 mmol/L%0D%0A';
            }
            else {
                triglycerides = '500-999 mg/dL%0D%0A';
            }
        }
        else if (appmodel.Form().triglyceridesRange() == 'group3') {
            if (appmodel.Form().UnitOfMeasure()) {
                triglycerides = '11.29+ mmol/L%0D%0A';

            }
            else {
                triglycerides = '1000+ mg/dL%0D%0A';
            }
        }
        message += triglycerides;
    }
    if (appmodel.Form().ascvd()) {

        if (appmodel.Form().ascvd() == 'yes') {
            message += 'ASCVD%0D%0A';
        }
        else {
            message += 'No ASCVD%0D%0A';
        }
    }
    if (appmodel.Form().Diabetic()) {
        if (appmodel.Form().Diabetic() == 'yes') {
            message += 'Has diabetes%0D%0A';
        }
        else {
            message += 'No diabetes%0D%0A';
        }
    }
    if (appmodel.Form().highRisk()) {
        if (appmodel.Form().highRisk() == 'yes') {
            message += 'Has high risk features%0D%0A';
        }
        else {
            message += 'No high risk features%0D%0A';
        }
    }
    if (appmodel.Form().asvd10yrrisk()) {
        if (appmodel.Form().asvd10yrrisk() == 'Low') {
            message += 'Low (< 5%25) 10-year ASCVD risk%0D%0A';
        }
        else if (appmodel.Form().asvd10yrrisk() == 'Intermediate') {
            message += 'Borderline to intermediate (5 to < 20%25) 10-year ASCVD risk%0D%0A';
        }
        else if (appmodel.Form().asvd10yrrisk() == 'High') {
            message += 'High (> 20%25) 10-year ASCVD risk%0D%0A';

        }
    }
    if (appmodel.Form().ldlcRange()) {
        if (appmodel.Form().ldlcRange() == 'group1a') {
            if (appmodel.Form().UnitOfMeasure()) { ldlc = 'LDL-C < 1.810 mmol/L%0D%0A'; }
            else { ldlc = 'LDL-C < 70 mg/dL%0D%0A'; }
        }
        else if (appmodel.Form().ldlcRange() == 'group1b') {
            if (appmodel.Form().UnitOfMeasure()) { ldlc = '%0D%0ALDL-C 1.810-2.56 mmol/L%0D%0A'; }
            else { ldlc = 'LDL-C 70-99 mg/dL%0D%0A'; }
        }
        else if (appmodel.Form().ldlcRange() == 'group1c') {
            if (appmodel.Form().UnitOfMeasure()) { ldlc = '%0D%0ALDL-C >= 2.586 mmol/L%0D%0A'; }
            else { ldlc = 'LDL-C >= 100 mg/dL%0D%0A'; }
        }
        message += ldlc;
    }

    groupID = appmodel.Form().showAdviceContent();
    groupAdvice = appmodel.FormData.emailGroupAdvice[groupID];
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
            body: message.replace(new RegExp('%0D%0A', 'g'), '<br>'),
            isHtml: true
        });
    } else {
        mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
        window.location.href = mymail;
    }
};