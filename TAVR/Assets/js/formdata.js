/*!
Formdata JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd.
This file contains application related data.
Code licensed under the Cybage license.

*/
/**
 * This formdata variable contains the JSON objects that are bind to UI components of the application.
 * @emailTemplate: contains the email template text that to be replaced with the application overall results/scores/therapy dosing info.
 * @infoText: contains the captions for therapy options.
 */
var aboutDate = {'dateToday':'14', 'suffix':'th' ,'monthYear':'April 2016'};
var appStorage = {'result':'', 'isValidate':false, isWarningOn:true};
var formdata = {
    infotext :{
        defaulttext: 'The type of procedure is determined based on the clinical status of the patient prior to the procedure.',
	elective: 'Procedure could be defered w/o increased risk of compromised cardiac outcome since the patients cardiac function has been stable in the days or weeks prior to the operation.' ,
	urgent: 'Procedure required during same hospitalization to minimize chance of further clinical deterioration. (ex HF, AMI, IABP, angina, worsening).',
        emergency: 'Procedure performed when patient has ongoing, refractory, unrelenting cardiac compromise, w/ or w/o hemodynamic instability, and is not responsive to any form of therapy except cardiac surgery.',
        salvage: 'Patient is undergoing CPR en route to the procedure or prior to anesthesia induction or has ongoing ECMO to maintain life.'
    },
    warningtext :{
        creatinineWarningTextSI: 'Please enter a value between 8.8 and 13260',
	creatinineWarningFormatSI: 'Enter values in the format x.x OR xx.x OR xxx.x OR x,x OR xx,x OR xxx,x OR xxxx,x OR xxxxx,x' ,
	creatinineWarningTextUS: 'Please enter a value between 0.1 and 150',
        creatinineWarningFormatUS: 'Enter values in the format x.x OR xx.x OR xxx.x OR x,x OR xx,x OR xxx,x'
    },
    emailTemplate: {
        subjectLine: 'Adjusted TAVR In-Hospital Mortality Risk of #genderEmailtext# / #patientAge#y (generated on #timestamp#)',
        patientrisk:'Patient\'s Risk: #predictedRiskValue# %25.%0A',
        nationalavg:'National Average: 4%25.%0A%0A',
        guidance: 'Guidance: In the United States, the average mortality of all patients undergoing this procedure is 4%25. Taking into account the patient\'s specific clinical condition, the statistical estimate that #gendertext# might not survive the procedure is #predictedRiskValue#%25. This means that for every 100 patients having a similar clinical makeup, there would be #predictedRiskValue# who did not survive.%0A',
        evaltext: 'This is based on the following evaluation.%0A',
        patientdemographics: 'Patient Demographics%0AAge: #patientAge# years%0ASex: #sex#%0ARace: #race#%0A',
        preproceduralchara: 'Patient Pre-Procedural Characteristics%0ARenal Function%0ASerum Creatinine (SCr): #creatinine# #creatinineSIUniteText#%0ADialysis: #dialysis#%0AGlomerular Filtration Rate (calculated): #xgfr# mL/min/1.73m2%0ANYHA Class IV: #nyha#%0ASevere Chronic Lung Disease: #scld#%0AProcedure Access Site: #proaccsite#%0A',
        acuitystatus: 'Acuity Status: #acuityStatusText#%0AProcedure Status: #procedureStatus#%0APrior cardiac arrest within 24 hrs?: #pcarrest#%0APrior cardio shock within 24 hrs?: #pcshock#%0APre-procedure inotropes within 24 hrs?: #ppinotropes#%0APre-procedure mechanical assist device?: #ppmechanical#',
    }
};
