var appStorage = { 'result': '', 'isValidate': false, isWarningOn: true };
var userActivity = { 'patientGroupType': '', 'patientBenefitGroup': '', 'questions': [], currentLDLC: '', 'nonHDLC': '', 'statin': '', 'dose': '', 'baselineLDLC': '' };
var questions = { 'takeAstatin': '', 'baselineLDLC_range': '', 'ascvd': '', 'ageRange': '', 'comorbidities': '', 'diabetes': '', 'ascvd10yr': '' };
let cacText = {
  1: "CAC measured 0 AU",
  2: "CAC measured at 1 to 99 AU and <75th percentile for age/sex/race",
  3: "CAC measured at ≥100 AU or ≥75th percentile for age/sex/race",
  4: "CAC measured at ≥1000 AU",
  5: "CAC not quantified",
};


var formdata = {
  statins: [
    {
      'id': 'Atorvastatin',
      'title': 'Atorvastatin (Lipitor®)',
      'dose': [
        {
          'title': '10 or 20 (moderate)',
          'dose': '10 or 20',
          'intensity': 'moderate'
        },
        {
          'title': '40-80 (high)',
          'dose': '40-80',
          'intensity': 'high'
        }
      ]
    },
    {
      'id': 'Fluvastatin',
      'title': 'Fluvastatin (Lescol®)',
      'dose': [
        {
          'title': '20-40 (low)',
          'dose': '20-40',
          'intensity': 'low'
        },
        {
          'title': '40 BID (moderate)',
          'dose': '40 BID',
          'intensity': 'moderate'
        }
      ]
    },
    {
      'id': 'FluvastatinXL',
      'title': 'Fluvastatin XL (Lescol XL®)',
      'dose': [
        {
          'title': '80 (moderate)',
          'dose': '80',
          'intensity': 'moderate'
        }
      ]
    },
    {
      'id': 'Lovastatin',
      'title': 'Lovastatin (Mevacor®)',
      'dose': [
        {
          'title': '20 (low)',
          'dose': '20',
          'intensity': 'low'
        },
        {
          'title': '40 (moderate)',
          'dose': '40',
          'intensity': 'moderate'
        }
      ]
    },
    {
      'id': 'Pitavastatin',
      'title': 'Pitavastatin (Livalo®)',
      'dose': [
        {
          'title': '1 (low)',
          'dose': '1',
          'intensity': 'low'
        },
        {
          'title': '2-4 (moderate)',
          'dose': '2-4',
          'intensity': 'moderate'
        }
      ]
    },
    {
      'id': 'Pravastatin',
      'title': 'Pravastatin (Pravachol®)',
      'dose': [
        {
          'title': '10-20 (low)',
          'dose': '10-20',
          'intensity': 'low'
        },
        {
          'title': '40 or 80 (moderate)',
          'dose': '40 or 80',
          'intensity': 'moderate'
        }
      ]
    },
    {
      'id': 'Rosuvastatin',
      'title': 'Rosuvastatin (Crestor®)',
      'dose': [
        {
          'title': '10 (moderate)',
          'dose': '10',
          'intensity': 'moderate'
        },
        {
          'title': '20 or 40 (high)',
          'dose': '20 or 40',
          'intensity': 'high'
        }
      ]
    },
    {
      'id': 'Simvastatin',
      'title': 'Simvastatin (Zocor®)',
      'dose': [
        {
          'title': '10 (low)',
          'dose': '10',
          'intensity': 'low'
        },
        {
          'title': '20-40 (moderate)',
          'dose': '20-40',
          'intensity': 'moderate'
        }
      ]
    }
  ],
  LDLTherapyData: [
    {
      'benefitGroup': 'group2a',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 55',
      'recommended_LDL_C_mmol': '< 1.424',
      'recommended_non_HDL_C_mg': '< 85',
      'recommended_non_HDL_C_mmol': '< 2.201',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'group2b',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': '< 100',
      'recommended_non_HDL_C_mmol': '< 2.590',
      'recommended_statin_intensity': 'High <br/> (May consider moderate if patient >75 y/o or had/at risk for statin-related adverse effects)'
    },
    {
      'benefitGroup': 'group2c',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': '< 100',
      'recommended_non_HDL_C_mmol': '< 2.590',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'group3',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 100',
      'recommended_LDL_C_mmol': '< 2.590',
      'recommended_non_HDL_C_mg': '< 130',
      'recommended_non_HDL_C_mmol': '< 3.367',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'group4_1',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 100',
      'recommended_LDL_C_mmol': '< 2.590',
      'recommended_non_HDL_C_mg': '< 130',
      'recommended_non_HDL_C_mmol': '< 3.367',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'group4_2',
      'recommended_reduction': '30-49% (with moderate-intensity statin) <br/> ≥ 50% (with high-intensity statin if needed)',
      'recommended_LDL_C_mg': '< 100',
      'recommended_LDL_C_mmol': '< 2.590',
      'recommended_non_HDL_C_mg': '< 130',
      'recommended_non_HDL_C_mmol': '< 3.367',
      'recommended_statin_intensity': 'Moderate'
    },
    {
      'benefitGroup': 'group5',
      'intensity': {
        'low': {
          'recommended_reduction': '30-49% (with moderate-intensity statin) <br/> ≥ 50% (with high-intensity statin)',
          'recommended_LDL_C_mg': '< 100',
          'recommended_LDL_C_mmol': '< 2.590',
          'recommended_non_HDL_C_mg': '< 130',
          'recommended_non_HDL_C_mmol': '< 3.367',
          'recommended_statin_intensity': 'Moderate-to-High'
        },
        'moderate': {
          'recommended_reduction': '30-49% (with moderate-intensity statin) <br/> ≥ 50% (with high-intensity statin)',
          'recommended_LDL_C_mg': '< 100',
          'recommended_LDL_C_mmol': '< 2.590',
          'recommended_non_HDL_C_mg': '< 130',
          'recommended_non_HDL_C_mmol': '< 3.367',
          'recommended_statin_intensity': 'Moderate-to-High'
        },
        'high': {
          'recommended_reduction': '30-49% (with moderate-intensity statin) <br/> ≥ 50% (with high-intensity statin)',
          'recommended_LDL_C_mg': '< 100',
          'recommended_LDL_C_mmol': '< 2.590',
          'recommended_non_HDL_C_mg': '< 130',
          'recommended_non_HDL_C_mmol': '< 3.367',
          'recommended_statin_intensity': 'Moderate-to-High'
        }
      }
    },
    {
      'benefitGroup': 'group2b_1',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': "< 100",
      'recommended_non_HDL_C_mmol': '< 2.590',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'group2b_2',
      'recommended_reduction': "≥ 50% (with maximally tolerated statin)",
      'recommended_LDL_C_mg': "< 70",
      'recommended_LDL_C_mmol': "< 1.813",
      'recommended_non_HDL_C_mg': "< 100",
      'recommended_non_HDL_C_mmol': "< 2.590",
      'recommended_statin_intensity': "High"
    },
    {
      'benefitGroup': 'group2c_1',
      'recommended_reduction': "≥ 50% (with maximally tolerated statin)",
      'recommended_LDL_C_mg': "< 70",
      'recommended_LDL_C_mmol': "< 1.813",
      'recommended_non_HDL_C_mg': "< 100",
      'recommended_non_HDL_C_mmol': "< 2.590",
      'recommended_statin_intensity': "High"
    },
    {
      'benefitGroup': 'group2c_2',
      'recommended_reduction': "≥ 50% (with maximally tolerated statin)",
      'recommended_LDL_C_mg': "< 70",
      'recommended_LDL_C_mmol': "< 1.813",
      'recommended_non_HDL_C_mg': "< 100",
      'recommended_non_HDL_C_mmol': "< 2.590",
      'recommended_statin_intensity': "High"
    },
    {
      'benefitGroup': 'group2d',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 55',
      'recommended_LDL_C_mmol': '< 1.424',
      'recommended_non_HDL_C_mg': '< 85',
      'recommended_non_HDL_C_mmol': '< 2.201',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'dg1',
      'recommended_reduction': '30-49% (with moderate intensity statin)',
      'recommended_LDL_C_mg': '< 100',
      'recommended_LDL_C_mmol': '< 2.590',
      'recommended_non_HDL_C_mg': '< 130',
      'recommended_non_HDL_C_mmol': '< 3.367',
      'recommended_statin_intensity': 'Moderate to High'
    },
    {
      'benefitGroup': 'dg2',
      'recommended_reduction': 'N/A',
      'recommended_LDL_C_mg': 'N/A',
      'recommended_LDL_C_mmol': 'N/A',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'N/A'
    },
    {
      'benefitGroup': 'dg3',
      'recommended_reduction': '≥ 50% (with maximally tolerated statin)',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': '< 100',
      'recommended_non_HDL_C_mmol': '< 2.590',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'dg4',
      'recommended_reduction': 'N/A',
      'recommended_LDL_C_mg': 'N/A',
      'recommended_LDL_C_mmol': 'N/A',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'N/A'
    },
    {
      'benefitGroup': 'ndg1',
      'recommended_reduction': '30-49%',
      'recommended_LDL_C_mg': '< 100',
      'recommended_LDL_C_mmol': '< 2.590',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'Moderate'
    },
    {
      'benefitGroup': 'ndg2',
      'recommended_reduction': '≥ 50%',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'High'
    },
    {
      'benefitGroup': 'ndg3',
      'recommended_reduction': '30-49% (with moderate intensity statin) <br/> ≥ 50% (with high-intensity statin)',
      'recommended_LDL_C_mg': '< 70',
      'recommended_LDL_C_mmol': '< 1.813',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'Moderate to high'
    },
    {
      'benefitGroup': 'ndg4',
      'recommended_reduction': 'N/A',
      'recommended_LDL_C_mg': 'N/A',
      'recommended_LDL_C_mmol': 'N/A',
      'recommended_non_HDL_C_mg': 'N/A',
      'recommended_non_HDL_C_mmol': 'N/A',
      'recommended_statin_intensity': 'N/A'
    }
  ],

  sex: [
    {
      "label": "Male",
      "value": "m"
    }, {
      "label": "Female",
      "value": "f"
    }
  ],
  Diabetic: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  smoker: [
    {
      "label": "Yes",
      "value": "true",
      "cssClass": 'smoker-btn1'
    }, {
      "label": "No",
      "value": "Quit",
      "cssClass": 'smoker-btn2'
    },
  ],
  hypertension: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  warningtext: {
    currentLDLCWarningTextSI: 'Please enter a value between 8.8 and 13260',
    currentLDLCWarningFormatSI: 'Enter values in the format x.x OR xx.x OR xxx.x OR x,x OR xx,x OR xxx,x OR xxxx,x OR xxxxx,x',
    currentLDLCWarningTextUS: 'Please enter a value between 0.1 and 150',
    currentLDLCWarningFormatUS: 'Enter values in the format x.x OR xx.x OR xxx.x OR x,x OR xx,x OR xxx,x'
  },
  emailTemplate: {
    subjectLine: 'LDL-C Lowering Therapy App Advice (generated on #timestamp#)',
    headline: 'Patient Characteristics:%0D%0A',
    triglycerides: '%0D%0A#triglycerides#%0D%0A',
    ascvd: '%0D%0A#ascvd#%0D%0A',
    age: '%0D%0A#age#%0D%0A',
    diabetes: '%0D%0A#diabetic#%0D%0A',
    ascvd10yr: '%0D%0A#ascvd10yr#%0D%0A',
    ldlc: '%0D%0A#ldlc#%0D%0A',
    currentStatin: '#statin#%0D%0A#dose# mg%0D%0A',
    patientGroup: '%0D%0A#groupType# %0D%0A',
    patientNumbers: '%0D%0A#CurrentLDLC# %0D%0A',
    accSuggestedNumbers: 'ACC SUGGESTED NUMBERS %0D%0ALDL-C Reduction: #AccSuggestedLDLReduction# %0D%0ALDL-C: #AccSuggestedLDLC# %0D%0ANon-HDL-C: #AccSuggestednonHDLC#',
    disclaimer: 'Once acceptable response is achieved with lipid-lowering therapy, continue to monitor adherence to lifestyle modifications, medications, and LDL-C response to therapy. If persistent hypertriglyceridemia, refer to the ACC Hypertriglyceridemia application. %0D%0A%0D%0AFor additional considerations for lowering LDL-C, please see the resources page: https://tools.acc.org/LDL/index.html#!/content/resources/  %0D%0A%0D%0AThis email contains a summary of the advice from the ACC LDL-C Lowering Therapy tool.%0D%0AEmail content generated by the app does not contain Protected Health Information. %0D%0AUsers are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.'
  },
  emailGroupAdvice: {
    'group2a': 'With ASCVD %0D%0ANo Comorbidities %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider ezetimibe %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding or replacing with PCSK9',
    'group2b': 'With ASCVD %0D%0AWith Comorbidities %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed',
    'group2b_1': 'With ASCVD %0D%0AWith Comorbidities %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed',
    'group2b_2': 'With ASCVD %0D%0AWith Comorbidities %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed',
    'group2c': 'With ASCVD %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Refer to lipid specialist and RDN %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed ',
    'group2c_1': 'With ASCVD %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Refer to lipid specialist and RDN %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed ',
    'group2c_2': 'With ASCVD %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Refer to lipid specialist and RDN %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed ',
    'group2d': 'With ASCVD %0D%0ANo Comorbidities %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider ezetimibe %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding or replacing with PCSK9',
    'group3': 'No ASCVD %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Refer to lipid specialist and RDN %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----FIRST: Consider either ezetimibe or PCSK9 %0D%0A If response still insufficient %0D%0A ----SECOND: Consider adding other agent not used first if needed',
    'group4_1': 'With Diabetes %0D%0ANo ASCVD %0D%0AASCVD 10yr Risk ≥ 7.5%25  %0D%0AAge 40-75 %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A -Discuss any new therapy with patient %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----Consider ezetimibe %0D%0A ----Consider BAS if ezetimibe intolerant and triglycerides < 300 mg/dL',
    'group4_2': 'With Diabetes %0D%0ANo ASCVD %0D%0AASCVD 10yr Risk < 7.5%25  %0D%0AAge 40-75 %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A -Discuss any new therapy with patient %0D%0A -Consider increasing to high intensity statin %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----Consider ezetimibe %0D%0A ----Consider BAS if ezetimibe intolerant and triglycerides < 300 mg/dL',
    'group5': 'No Diabetes %0D%0ANo ASCVD %0D%0AASCVD 10yr Risk ≥ 7.5%25  %0D%0AAge 40-75 %0D%0ABaseline LDL-C #groupBaselineLDLC# %0D%0A%0D%0A#patientNumbers# %0D%0A%0D%0A#accSuggestedNumbers# %0D%0A%0D%0AACC ADVICE %0D%0A -Optimize current therapy %0D%0A ----Increase to high intensity statin if needed %0D%0A -Discuss any new therapy with patient %0D%0A -Consider increasing to high intensity statin %0D%0A -Consider additional non-statin therapy if statin response insufficient %0D%0A ----Consider ezetimibe %0D%0A ----May consider BAS if ezetimibe intolerant and triglycerides < 300 mg/dL',
    'set1': '%0D%0ASteps for lowering triglycerides: %0D%0A•  Rule out secondary causes  %0D%0A•  Implement very low-fat diet in select patients and optimize lifestyle %0D%0A• 	Optimize glycemic control (in diabetes)%0D%0A•	 Consider fibrate or prescription omega-3 fatty acids (icosapent ethyl or omega-3 acid ethyl esters) to reduce risk of pancreatitis%0D%0A•  Consider statin initiation or intensification in appropriate patient management groups %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle',
    'set2': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A%0D%0AIf the patient has persistent fasting HT of 500 – 999 mg/dL after the above steps…%0D%0A%0D%0A•	 Emphasize low-fat diet. Reasonable to consider very low-fat diet in select patients Further optimize diet and lifestyle%0D%0A•	 Consider fibrate or prescription omega-3 fatty acids (icosapent ethyl or omega-3 acid ethyl esters) to reduce risk of pancreatitis',
    'set3': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A•	 Initiate or increase intensity of statin therapy and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 500 – 999 mg/dL after the above steps…%0D%0A%0D%0A•	 Emphasize low-fat diet. Reasonable to consider very low-fat diet in select patients%0D%0A•	 Increase intensity of statin therapy and optimize statin adherence%0D%0A•	 Consider fibrate or prescription omega-3 fatty acids (icosapent ethyl or omega-3 acid ethyl esters) to reduce risk of pancreatitis',
    'set2l': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	See Additional Lifestyle Recommendations section below for in-depth information%0D%0A%0D%0AIf the patient has persistent fasting HT of 500 – 999 mg/dL after the above steps…%0D%0A%0D%0A•	 Emphasize low-fat diet. Reasonable to consider very low-fat diet in select patients%0D%0A•	 Consider fibrate or prescription omega-3 fatty acids (icosapent ethyl or omega-3 acid ethyl esters) to reduce risk of pancreatitis',
    'set2h': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A•	 Initiate or increase intensity of statin therapy and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 500 – 999 mg/dL after the above steps…%0D%0A%0D%0A•	 Emphasize low-fat diet. Reasonable to consider very low-fat diet in select patients%0D%0A•	 Increase intensity of statin therapy and optimize statin adherence%0D%0A•	 Consider fibrate or prescription omega-3 fatty acids (icosapent ethyl or omega-3 acid ethyl esters) to reduce risk of pancreatitis',
    'set4': '%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle',
    'set1a': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A•	 Maximize statin therapy, preferably high-intensity statin, and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A•	 Rule out secondary causes%0D%0A•	  Further optimize diet and lifestyle%0D%0A•	  May consider icosapent ethyl %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated',
    'set1b': '%0D%0ASteps for lowering triglycerides: %0D%0A•  Rule out secondary causes  %0D%0A•  Optimize diet and lifestyle%0D%0A•  Optimize glycemic control%0D%0A•  Maximize statin therapy%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A•  Clinicians can use TG risk-based approach once LDL-C levels are good and vice versa%0D%0A%0D%0ATG risk-based approach:%0D%0A•  May consider icosapent ethyl %0D%0A%0D%0ALDL-C risk-based approach:%0D%0A•  LDL-C guided nonstatin therapy %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated',
    'set1c': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A•	 Maximize statin therapy, preferably high-intensity statin, and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A• 	 Maximize statin therapy and optimize adherence%0D%0A• 	 Consider LDL-C-guided nonstatin therapy as per 2018 AHA/ACC/multisociety cholesterol guideline  %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated',
    'set2a': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A•	 Maximize statin therapy, preferably high-intensity statin, and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A• 	Continue shared decision-making and patient preference%0D%0A•	 May consider icosapent ethyl %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated',
    'set2b': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A• 	Optimize glycemic control%0D%0A•	 Maximize statin therapy, preferably high-intensity statin, and optimize statin adherence%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps, continue LDL-C- risk-basked approach. %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle',
    'set5a': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A•	 Continue to optimize diet and lifestyle%0D%0A•	 Periodic 10-year ASCVD risk assessment %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle',
    'set5b': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A•	 Continue shared decision-making, patient preference%0D%0A•	 Consider initiation or intensification of statin therapy %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices%0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity%0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle',
    'set5c': '%0D%0ASteps for lowering triglycerides: %0D%0A•	 Rule out secondary causes  %0D%0A•	 Optimize diet and lifestyle%0D%0A%0D%0AIf the patient has persistent fasting HT of 150 – 499 mg/dL after the above steps…%0D%0A%0D%0A•	 Continue shared decision-making, patient preference%0D%0A•	 Initiate or intensify to high-intensity statin therapy  %0D%0A%0D%0ALifestyle Intervention Recommendations:%0D%0A•	  Assess non-lifestyle secondary causes %0D%0A•  	Assess lifestyle practices  %0D%0A• 	 Emphasize healthy dietary pattern and increased physical activity  %0D%0A•  	Monitor response to intervention%0D%0A•	  Consider referral to registered dietician nutritionist, exercise trainer, or other supportive services%0D%0A•	  Continue intervention or adjust as indicated%0D%0A•  Additional resource: Screening Questions for Assessing Effects of Lifestyle on Triglycerides%0D%0A•  Additional resource: Clinician Messages to Patients to Encourage Healthy Lifestyle'
  },
  emailGroupConsiderations: {
    'group3': `Considerations for Lowering LDL-C: %0D%0A1.	Consider ezetimibe and/or PCSK9 mAb.%0D%0A2.	It may be reasonable to consider bempedoic acid or inclisiran.%0D%0A3.	It may be reasonable to consider evinacumab, lomitapide, and/or LDL apheresis for HoFH under care of lipid specialist.%0D%0A%0D%0A`,
    'dg1': `Considerations for Lowering LDL-C:%0D%0AIncrease to a high intensity statin if not already taking.%0D%0A%0D%0A`,
    'dg2': `Considerations for Lowering LDL-C:%0D%0AIt may be reasonable to consider ezetimibe.%0D%0A%0D%0A`,
    'dg3': `Considerations for Lowering LDL-C:%0D%0AIt may be reasonable to consider ezetimibe.%0D%0A%0D%0A`,
    'ndg1': `Considerations for Lowering LDL-C:%0D%0AIncrease to a high intensity statin if not already taking.%0D%0A%0D%0A`,
    'ndg2': `Considerations for Lowering LDL-C:%0D%0AIt may be reasonable to consider ezetimibe.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider PCSK9 mAb.%0D%0A%0D%0A`,
    'ndg3': `Considerations for Lowering LDL-C:%0D%0AIt may be reasonable to consider ezetimibe.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider PCSK9 mAb.%0D%0A%0D%0A`,
    'ndg4': '',
    'group2a': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe and/or PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`,
    'group2b_1': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider adding or replacing with PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`,
    'group2b_2': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider adding or replacing with PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`,
    'group2c_1': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe and/or PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider LDL apheresis under care of lipid specialist.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`,
    'group2c_2': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe and/or PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider LDL apheresis under care of lipid specialist.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`,
    'group2d': `Considerations for Lowering LDL-C:%0D%0AConsider ezetimibe and/or PCSK9 mAb.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider bempedoic acid or inclisiran.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, it may be reasonable to consider evinacumab, lomitapide, and/or LDL apheresis for HoFH under care of lipid specialist.%0D%0A%0D%0AIf lipid-lowering response is still less-than-anticipated, refer to a lipid specialist or registered dietician nutritionist.%0D%0A%0D%0A`
  },
  email_LDLC_RiskText: {
    'group3': `LDL-C ≥#unitValue#`,
    'dg1': `LDL-C <#unitValue#; Diabetes%0D%0A#riskScore# 10-year ASCVD risk score, with no diabetes-specific risk enhancers, and with no subclinical atherosclerosis%0D%0A`,
    'dg2': `LDL-C <#unitValue#; Diabetes%0D%0A#riskScore# 10-year ASCVD risk score, with diabetes-specific risk enhancers or with subclinical atherosclerosis%0D%0A`,
    'dg3': `LDL-C <#unitValue#; Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A`,
    'ndg1': `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#No Significant Burden of Subclinical Atherosclerosis%0D%0A`,
    'ndg2': ``,
    'ndg3': `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#No Significant Burden of Subclinical Atherosclerosis%0D%0A`,
    'ndg4': `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#No Significant Burden of Subclinical Atherosclerosis%0D%0A`,
    'group2a': `LDL-C ≥#unitValue# not due to secondary causes: NO%0D%0AVery High-risk: YES%0D%0AFamilial Hypercholesterolemia: Not Applicable%0D%0A`,
    'group2b_1': `LDL-C ≥#unitValue# not due to secondary causes: NO%0D%0AVery High-risk: NO%0D%0AFamilial Hypercholesterolemia: Not Applicable%0D%0A`,
    'group2b_2': `LDL-C ≥#unitValue# not due to secondary causes: YES%0D%0AVery High-risk: NO%0D%0AFamilial Hypercholesterolemia: Yes%0D%0A`,
    'group2c_1': `LDL-C ≥#unitValue# not due to secondary causes: YES%0D%0AVery High-risk: NO%0D%0AFamilial Hypercholesterolemia: No%0D%0A`,
    'group2c_2': `LDL-C ≥#unitValue# not due to secondary causes: YES%0D%0AVery High-risk: YES%0D%0AFamilial Hypercholesterolemia: No%0D%0A`,
    'group2d': `LDL-C ≥#unitValue# not due to secondary causes: YES%0D%0AVery High-risk: YES%0D%0AFamilial Hypercholesterolemia: Yes%0D%0A`
  },
  riskTextNDG2: {
    1: `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#Significant Burden of Subclinical Atherosclerosis%0D%0A`,
    2: `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#No Significant Burden of Subclinical Atherosclerosis%0D%0A`,
    3: `LDL-C <#unitValue#; No Diabetes%0D%0A#riskScore# 10-year ASCVD risk score%0D%0A#cacText#`
  },
  cacText: {
    1: "CAC measured 0 AU%0D%0A",
    2: "CAC measured at 1 to 99 AU and <75th percentile for age/sex/race%0D%0A",
    3: "CAC measured at ≥100 AU or ≥75th percentile for age/sex/race%0D%0A",
    4: "CAC measured at ≥1000 AU%0D%0A",
    5: "CAC not quantified%0D%0A"
  },
  db21to39EmailResponse: `Patient Characteristics:%0D%0AAge 21-39%0D%0APrimary Prevention Group%0D%0ALDL-C <#unitValue#; Diabetes%0D%0A%0D%0AConsiderations for Lowering LDL-C:%0D%0AIt is recommended that for adults aged 20-39 years with long duration of diabetes, albuminuria, eGFR <60 ml/min/1.73 m², retinopathy, neuropathy, or ABI <0.9, it may be reasonable to initiate statin therapy.%0D%0A%0D%0AOnce acceptable response is achieved with lipid-lowering therapy, continue to monitor adherence to lifestyle modifications, medications, and LDL-C response to therapy. If persistent hypertriglyceridemia, refer to the ACC Hypertriglyceridemia application.%0D%0AFor additional considerations for lowering LDL-C, please see the resources page: https://tools.acc.org/LDL/index.html#!/content/resources/ %0D%0A%0D%0AThis email contains a summary of the advice from the ACC LDL-C Lowering Therapy tool.%0D%0AEmail content generated by the app does not contain Protected Health Information.%0D%0AUsers are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.`,

  dbgt75EmailResponse: `Patient Characteristics:%0D%0AAge 75+%0D%0APrimary Prevention Group%0D%0ALDL-C <#unitValue#; Diabetes%0D%0A%0D%0AConsiderations for Lowering LDL-C:%0D%0AIt is reasonable to continue moderate- or high-intensity statin therapy in patients with diabetes after age 75 years if therapy is well-tolerated.%0D%0A%0D%0AOnce acceptable response is achieved with lipid-lowering therapy, continue to monitor adherence to lifestyle modifications, medications, and LDL-C response to therapy. If persistent hypertriglyceridemia, refer to the ACC Hypertriglyceridemia application.%0D%0A%0D%0AFor additional considerations for lowering LDL-C, please see the resources page: https://tools.acc.org/LDL/index.html#!/content/resources/ %0D%0A%0D%0AThis email contains a summary of the advice from the ACC LDL-C Lowering Therapy tool.%0D%0AEmail content generated by the app does not contain Protected Health Information.%0D%0AUsers are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.`,

  ndb21to39EmailResponse: `Patient Characteristics:%0D%0AAge 21-39%0D%0APrimary Prevention Group%0D%0ALDL-C <#unitValue#; No Diabetes%0D%0A%0D%0AConsiderations for Lowering LDL-C:%0D%0APatients aged <40 years without ASCVD but with ASCVD risk factors should not be considered for 10-year risk assessment%0D%0A%0D%0AAdults <40 years of age with LDL-C values ≥160 mg/dL and/or a family history of premature cardiovascular disease may benefit from statin consideration.%0D%0A%0D%0AContinue to monitor adherence to lifestyle modifications, medications, and LDL-C response to therapy. If persistent hypertriglyceridemia, refer to the ACC Hypertriglyceridemia application.%0D%0A%0D%0AFor additional considerations for lowering LDL-C, please see the resources page: https://tools.acc.org/LDL/index.html#!/content/resources/ %0D%0A%0D%0AThis email contains a summary of the advice from the ACC LDL-C Lowering Therapy tool.%0D%0AEmail content generated by the app does not contain Protected Health Information.%0D%0AUsers are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.`,

  ndbgt75EmailResponse: `Patient Characteristics:%0D%0AAge 75+%0D%0APrimary Prevention Group%0D%0ALDL-C <#unitValue#; No Diabetes%0D%0A%0D%0AConsiderations for Lowering LDL-C:%0D%0APatient-clinician discussion should consider the limited adequate RCT data to inform these decisions. It is recommended to consider ASCVD risk in the context of patient goals, competing risks for non-cardiovascular disease death, patient frailty, susceptibility to adverse effects, and polypharmacy to derive individual-level recommendations for statin initiation in this highly heterogenous group.%0D%0A%0D%0AOnce acceptable response is achieved with lipid-lowering therapy, continue to monitor adherence to lifestyle modifications, medications, and LDL-C response to therapy. If persistent hypertriglyceridemia, refer to the ACC Hypertriglyceridemia application.%0D%0A%0D%0AFor additional considerations for lowering LDL-C, please see the resources page: https://tools.acc.org/LDL/index.html#!/content/resources/ %0D%0A%0D%0AThis email contains a summary of the advice from the ACC LDL-C Lowering Therapy tool.%0D%0AEmail content generated by the app does not contain Protected Health Information.%0D%0AUsers are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.`,
  visitType: [
    {
      "label": "Yes",
      "value": true
    }, {
      "label": "No",
      "value": false
    }
  ],
  YesNoQuestion: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  quiteSmoking: [{
    "label": "Unknown",
    "value": "1",
    "id": "1"
  }, {
    "label": "Less than 6 months ago",
    "value": "1",
    "id": "2"
  }, {
    "label": "6 months-1.5 years ago",
    "value": "0.85",
    "id": "3"
  }, {
    "label": "1.5-2.5 years ago",
    "value": "0.73",
    "id": "4"
  }, {
    "label": "2.5-3.5 years ago",
    "value": "0.62",
    "id": "5"
  }, {
    "label": "3.5-5 years ago",
    "value": "0.53",
    "id": "6"
  }, {
    "label": "More than 5 years ago",
    "value": "0.45",
    "id": "7"
  }],
  infotext: {
    scorebar: { "text": "Optimal risk factors include: Total cholesterol of ≤ 170 mg/dL (4.40 mmol/L), HDL-cholesterol of ≥ 50 mg/dL (1.30 mmol/L), Systolic BP of ≤ 110 mm Hg, Not taking medications for hypertension, Not a diabetic, Not a smoker", }
  },
  race: [
    {
      "label": "African American",
      "value": "aa"

    }, {
      "label": "White",
      "value": "wh"

    }, {
      "label": "Other",
      "value": "o"

    }
  ],

  notifications: {
    blank: [{
      'status': '',
      'message': ''
    }],

    age: [{
      'id': 0,
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'id': 1,
      'status': 'warning',
      'message': 'Please enter a value between 40-75 years'

    }],

    smokingSelect: [{
      'id': 0,
      'status': 'warning',
      'message': 'Select a value'
    }],
    sex: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    race: [{
      'status': 'warning',
      'message': 'Select a value'
    }, {
      'status': 'highlighted',
      'message': 'See the Estimate Warning below'
    }],
    totalCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 130 - 320 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 3.367 - 8.288 mmol/L'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format x.xxx'
    }],
    hdlCholesterol: [
      {
        'status': 'warning',
        'message': 'Enter a value'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between  20 - 100 mg/dL'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
      },
      {
        'status': 'error',
        'message': 'Please enter a value in the format xxx.xxx'
      }],
    bloodPresure: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 90-200 mm Hg'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx'
    }],
    dbloodPresure: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 60-130 mm Hg'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx'
    }],
    allData: [{
      'status': 'warning',
      'message': 'There is missing data. The inputs below have been highlighted.'
    }, {
      'status': 'error',
      'message': 'There are errors on the page. The inputs below have been highlighted.'
    }],
    diabetic: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    smoker: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    hypertension: [{
      'status': 'warning',
      'message': 'Select a value'
    }, {
      'status': 'warning',
      'message': 'Follow-up risk is based on the assumption that those on hypertension treatment at baseline are assumed to still need it.'
    }],
    visitType: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    statin: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    aspirin: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    ldlCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 30 - 300 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 0.777-7.770 mmol/L'
    }, {
      'status': 'warning',
      'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }],

  },
  formToolTips: {
    smokerToolTip: {
      id: '0', htmlID: 'smokingInfo', text: 'Is smoker?', value: '1', showInfo: true, tooltipTitle: 'Defined as cigarette smoker based on patient population studied in relevant clinical trials. Use clinical discretion in regards to patients who use e-cigarettes and other tobacco products.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    ldlToolTip: {
      id: '1', htmlID: 'ldlInfo', text: 'ldl < 190', value: '1', showInfo: true, tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    statinToolTip: {
      id: '2', htmlID: 'statinInfo', text: 'statin yes no', value: '1', showInfo: true, tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    aspirinToolTip: {
      id: '3', htmlID: 'aspirinInfo', text: 'aspirin yes no', value: '1', showInfo: true, tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    ageToolTip: {
      id: '0', htmlID: 'ageInfo', text: 'What is current age?', value: '1', showInfo: true, tooltipTitle: 'Age is pre-populated from the Evaluate page.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    previousvisitToolTip: {
      id: '0', htmlID: 'previousvisitInfo', text: 'Do you want to compare?', value: '1', showInfo: true, tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    }
  },

  scorebarToolTips: {
    currentAgeValToolTip: {
      id: '0', htmlID: 'currentAgeInfo', text: '', value: '1', showInfo: true, tooltipTitle: 'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    baselineAgeValToolTip: {
      id: '1', htmlID: 'baselineAgeInfo', text: '', value: '1', showInfo: true, tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    }
  },
  treatmentOne: [
    { id: '0', htmlID: 't1QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking', gaLabel: 'Quit Smoking' },
    { id: '1', htmlID: 't1Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin', gaLabel: 'Add_Intensify Statin' },
    { id: '2', htmlID: 't1BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds', gaLabel: 'Add_Intensify BP Med' },
    { id: '3', htmlID: 't1Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin', gaLabel: 'Start_Cont Aspirin' }
  ],
  treatmentTwo: [
    { id: '0', htmlID: 't2QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking' },
    { id: '1', htmlID: 't2Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin' },
    { id: '2', htmlID: 't2BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds' },
    { id: '3', htmlID: 't2Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin' }
  ],
  treatmentThree: [
    { id: '0', htmlID: 't3QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking' },
    { id: '1', htmlID: 't3Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin' },
    { id: '2', htmlID: 't3BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds' },
    { id: '3', htmlID: 't3Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin' }
  ],
  bpAdviceText: {
    DUMMY: {
      conditional: "some condition here",
      adviceTherapyImpact: "some advice here",
      adviceBPSection: "some advice here",
      email: "some email text here"
    },
    CASE01: {
      conditional: "cvRisk < 10 && bp >= 180 && dbp >= 60 && dbp <= 130",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I,B)</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 1,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE02: {
      conditional: "cvRisk < 10 && bp < 120 && dbp < 80",
      adviceTherapyImpact: "For normal blood pressure, repeat evaluation every year is reasonable. ",
      adviceBPSection: "<div class='callout'>Patient has normal blood pressure. </div><ul><li>Repeat evaluation every year is reasonable.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a normal BP, repeat evaluation every year is reasonable (IIa, C)</li></ul>",
      email: "Normal BP: Repeat evaluation every year.",
      id: 2,
      bpgaLabel: "BP_Normal BP"
    },
    CASE03: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10%  should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B)</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 3,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE04: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 4,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE05: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 5,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE06: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp < 80",
      adviceTherapyImpact: "For Elevated BP, manage with nonpharmacological therapy.",
      adviceBPSection: "<div class='callout'>Patient has elevated blood pressure. </div><ul><li>	Manage with nonpharmalogical therapy. </li><li>Conduct a repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Elevated BP: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 6,
      bpgaLabel: "BP_Elevated BP"
    },
    CASE07: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension. </div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 7,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE08: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension. </div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 8,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE09: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 9,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE10: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 10,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE11: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 11,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE12: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended.</li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 12,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE13: {
      conditional: "cvRisk < 10 && bp >= 140 && bp <= 179 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I,C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 13,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE14: {
      conditional: "cvRisk < 10 && bp >= 140 && bp <= 179 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 14,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE15: {
      conditional: "cvRisk >= 10 && bp >= 180 && dbp >= 60 && dbp <= 130",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 15,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE16: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp < 80",
      adviceTherapyImpact: "For normal blood pressure, repeat evaluation every year is reasonable. ",
      adviceBPSection: "<div class='callout'>Patient has normal blood pressure. </div><ul><li>Repeat evaluation every year is reasonable.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a normal BP, repeat evaluation every year is reasonable (IIa, C)</li></ul>",
      email: "Normal BP: Repeat evaluation every year.",
      id: 16,
      bpgaLabel: "BP_Normal BP"
    },
    CASE17: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 17,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE18: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 18,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE19: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 19,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE20: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp < 80",
      adviceTherapyImpact: "For Elevated BP, manage with nonpharmacological therapy.",
      adviceBPSection: "<div class='callout'>Patient has elevated blood pressure. </div><ul><li>Manage with nonpharmalogical therapy. </li><li>Conduct a repeat BP evaluation within 3 to 6 months.  </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Prevention of hypertension and treatment of established hypertension are complementary approaches to reducing CVD risk in the population, but prevention of hypertension provides the optimal means of reducing risk and avoiding the harmful consequences of hypertension. Nonpharmacological therapy alone is especially useful for prevention of hypertension, including in adults with elevated BP, and for management of high BP in adults with milder forms of hypertension (Guideline discussion text)</li><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I, B).</li></ul>",
      email: "Elevated BP: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 20,
      bpgaLabel: "BP_Elevated BP"
    },
    CASE21: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A). </li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 21,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE22: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 22,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE23: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 23,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE24: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 24,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE25: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 25,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE26: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 26,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE27: {
      conditional: "cvRisk >= 10 && bp >= 140 && bp <= 179 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 27,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE28: {
      conditional: "cvRisk >= 10 && bp >= 140 && bp <= 179 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 28,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    }

  }
}
