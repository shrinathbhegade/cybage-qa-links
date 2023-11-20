var languages = [{
    "id": "1",
    "label": "English",
    "value": "en",
},
{
    "id": "2",
    "label": "Português",
    "value": "pt",
},
{
    "id": "3",
    "label": "Español",
    "value": "es",
},
{
    "id": "4",
    "label": "Deutsch",
    "value": "de",
},
{
    "id": "5",
    "label": "Bahasa Indonesia",
    "value": "in",
},
{
    "id": "6",
    "label": "عربى",
    "value": "ar",
}
]

var toolTips = {
    en: {
        age: "For patients ≥ 80 y/o, a default of 79 y/o may be reasonably used as the 10-year ASCVD risk for this population is generally >10%.",
        smokerYes: "Smokes every day or on some days.",
        smokerNo: "Does not smoke or has been abstinent from smoking for at least 7 days.",
        smokerInfo: "Defined as cigarette smoker based on patient population studied in relevant clinical trials. Use clinical discretion in regards to patients who use e-cigarettes and other tobacco products."
    },
    ar: {
        age: "للمرضى البالغين من العمر 80 عامًا أو أصغر، يجوز اعتبار البالغين من العمر 79 عامًا من الأشخاص المعرضين لخطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين على مدى 10 سنوات ضمن هذه الفئة بنسبة >10% بشكل عام.",
        smokerYes: "يدخن يوميًا أو في بعض الأيام.",
        smokerNo: "لا يدخن أو ممتنع عن التدخين لمدة 7 أيام على الأقل.",
        smokerInfo: "تحديد المريض بأنه مدخن للسجائر بناءً على فئة المرضى التي دُرست في التجارب السريرية ذات الصلة. استخدم التقييم السريري للمرضى الذين يستخدمون السجائر الإلكترونية ومنتجات التبغ الأخرى."
    },
    pr: {
        age: "Para pacientes ≥ 80 anos, um padrão de 79 anos pode ser razoavelmente usado, visto que o risco de DCVA em 10 anos para esta população é geralmente > 10%.",
        smokerYes: "Fuma todos os dias ou em alguns dias.",
        smokerNo: "Não fuma ou está abstinente de fumar há pelo menos 7 dias.",
        smokerInfo: "Definido como fumante de cigarro com base na população de pacientes estudada em estudos clínicos relevantes. Use critério clínico em relação aos pacientes que usam cigarros eletrônicos e outros produtos do tabaco."
    },
    es: {
        age: "Para pacientes ≥80, se podría usar el valor predeterminado de 79 años porque el riesgo de enfermedad cardiovascular aterosclerótica (ASCVD) en 10 años para esta población normalmente es >10 %.",
        smokerYes: "Fuma todos los días o algunos días.",
        smokerNo: "No fuma o lleva al menos 7 días sin fumar.",
        smokerInfo: "Definido como fumador de cigarrillos según la población de pacientes estudiada en ensayos clínicos relevantes. Use su criterio médico para aquellos pacientes que usan cigarrillos electrónicos o toman otros productos con tabaco."
    },
    de: {
        age: "Bei Patienten ≥ 80 J. kann ein Standardwert von 79 J. vernünftigerweise verwendet werden, da das 10-Jahres-Risiko für ASCVD für diese Population im Allgemeinen > 10 % beträgt.",
        smokerYes: "Raucht jeden Tag oder an einigen Tagen.",
        smokerNo: "Raucht nicht oder hat seit mindestens 7 Tagen nicht geraucht.",
        smokerInfo: "Definiert als Zigarettenraucher basierend auf der Patientenpopulation, die in relevanten klinischen Studien untersucht wurde. Bei Patienten, die E-Zigaretten und andere Tabakerzeugnisse konsumieren, ist das Urteil des Arztes zu verwenden."
    },
    in: {
        age: "Untuk pasien usia ≥ 80 tahun, angka default 79 tahun mungkin layak digunakan karena risiko ASCVD 10 tahun untuk populasi usia ini pada umumnya > 10%.",
        smokerYes: "Merokok setiap hari atau kadang-kadang.",
        smokerNo: "Tidak merokok atau sudah berhenti merokok selama minimum 7 hari.",
        smokerInfo: "Didefinisikan sebagai perokok berdasarkan populasi pasien yang sedang diteliti dalam uji klinis yang relevan. Gunakan pertimbangan klinis terkait pasien yang menggunakan rokok elektrik atau produk tembakau lainnya."
    }
}

var formDataEnglish = {
    headerNavigation: {
        "estimateRisk": "Estimate Risk",
        "summary": {
            "tabText": "Summary",
            "viewSummaryLbl": "View Summary",
            "tabTooltip": "Summary section is accessible when all characteristics for patients 40-79 years of age are entered."
        }
    },
    scorebar: {
        "intermediateText": "Intermediate",
        "invalidAgeMessage": 'This calculator only provides 10-year risk estimates for individuals 40-79 years of age.&nbsp;<a data-open="young-recommendation-modal" id="modalLaucher"  class="link">Click here</a> to view brief suggestions for younger patients.',
        "currentRiskText": "Current 10-Year<br>ASCVD Risk<sup>**</sup>",
        "lifetimeRisklbl": "Lifetime ASCVD Risk: &nbsp;&nbsp;",
        "lifetimeRiskText": "Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.",
        "optimalRisklbl": "Optimal ASCVD Risk: &nbsp;&nbsp;",
        "optimalRiskText": "Optimal ASCVD Risk Calculator only provides optimal risk estimates for individuals 40 to 79 years of age."
    },
    riskRanges: {
        "low": "Low",
        "borderline": "Borderline",
        "intermediate": "Intermediate",
        "high": "High",
        "na": "N/A"
    },
    selectLanguageRow: {
        "selectLanguage": "Language Selection",
        "unitOfMeasure": "Unit of Measure",
        "resetAll": '<i class="fa fa-repeat"></i>Reset All'
    },
    warningBox: {
        "welcomeText": "Welcome to the Multilingual ASCVD Risk Estimator",
        "termsOfServiceHeader": "Terms of Service",
        "termsOfServiceText": '<p>Click the Terms tab at the bottom of the app before using the Multilingual ASCVD Risk Estimator (“the Product”) to read the full Terms of Service and License Agreement (the “Agreement”) which governs the use of the Product. The Agreement includes, among other detailed terms and conditions, certain disclaimers of warranties by the American College of Cardiology Foundation (“ACCF”) and requires the user to agree to release ACCF from any and all liability arising in connection with your use of the Product. By using the Product, you accept and agree to be bound by all of the terms and conditions set forth in the Agreement, including such disclaimers and releases. If you do not accept the terms and conditions of the Agreement, you may not proceed to use the Product.<br>The Agreement is subject to change from time to time, and your continued use of the Product constitutes your acceptance of and agreement to be bound by any revised terms of the Agreement.</p><p>This Risk Estimator enables health care providers and patients to estimate 10-year, optimal, and lifetime risks for atherosclerotic cardiovascular disease (ASCVD). Use the information in this tool to help with clinician-patient discussions on risk and risk-lowering interventions.<br>The results and recommendations provided by this application are intended to inform but do not replace clinical judgment. Therapeutic options should be individualized and determined after discussion between the patient and their care provider.</p>',
        "aboutAppText": '<p>See the <b>About the App</b> screen in this app for a definition of terms and additional instructions.</p>',
        "notShowAgain": "Do not show me this again",
        "secondWarningBoxText": "App should be used for primary prevention patients (those without ASCVD) only."
    },
    formLabelText: {
        "current_age": "Current Age",
        "sex": "Sex",
        "race": "Race",
        "sys_blood_pressure": 'Systolic Blood Pressure <small class="pre">(mm Hg)</small>',
        "diastolic_blood_pressure": 'Diastolic Blood Pressure <small class="pre">(mm Hg)</small>',
        "total_cholesterol": "Total Cholesterol",
        "hdl_cholesterol": "HDL Cholesterol",
        "diabetes_history": "History of Diabetes?",
        "smoker": "Smoker?",
        "on_hypertension_treatment": "On Hypertension Treatment?",
        "cholesterol_us_unit": "(mg/dL)",
        "cholesterol_is_unit": "(mmol/L)",
        "hdl_cholesterol_us": 'HDL Cholesterol <small class="pre">(mg/dL)</small>',
        "hdl_cholesterol_is": 'HDL Cholesterol <small class="pre">(mmol/L)</small>',
        "total_cholesterol_us": 'Total Cholesterol <small class="pre">(mg/dL)</small>',
        "total_cholesterol_is": 'Total Cholesterol <small class="pre">(mmol/L)</small>'
    },
    formHints: {
        "current_age_hint": "Age must be between 20-79",
        "sys_blood_pressure_hint": "Value must be between 90-200",
        "diastolic_blood_pressure_hint": "Value must be between 60-130",
        "total_cholesterol_us_hint": "Value must be between 130 - 320",
        "total_cholesterol_is_hint": "Value must be between 3.367 - 8.288",
        "hdl_cholesterol_us_hint": "Value must be between 20 - 100",
        "hdl_cholesterol_is_hint": "Value must be between 0.518 - 2.59"
    },
    otherRaceNote: {
        "note": "<b>Note:</b> The 10 year risk calculation (Pooled Cohort Equation) was developed based on studies of Americans, namely white and African American patient populations and is used as an approximation for risk in other ethnicities. These estimates may underestimate the 10-year and lifetime risk for persons from some race/ethnic groups, especially Native Americans, some Asians (e.g., of south Asian ancestry), and some Hispanics (e.g., Puerto Ricans), and may overestimate the risk for others, including some Asians (e.g., of east Asian ancestry) and some Hispanics (e.g., Mexican). Because the primary use of these risk estimates is to facilitate the very important discussion regarding risk reduction through lifestyle change, the imprecision introduced is small enough to justify proceeding with lifestyle change counseling informed by these results.",
    },
    estimateRiskFooter: {
        moreInfo: '<b>For more information about the inputs and calculations used in this app, see “Terms and Concepts” in the Resources tab below.</b><br/><sup>**</sup>ASCVD = atherosclerotic cardiovascular disease<br/>10-year risk for ASCVD is categorized as:<br/>Low-risk (&lt;5%)<br/>Borderline risk (5% to 7.4%)<br/>Intermediate risk (7.5% to 19.9%)<br/>High risk (≥20%)<br/>',
        footerNavigations: {
            "resources": "Resources",
            "terms": "Terms",
            "aboutShortText": "About",
            "aboutLongText": "About the App"
        }
    },
    youngPatientRecommendationModal: {
        "title": "Key Suggestions for Patients age 20-39",
        "ldl_text": "LDL-C Management",
        "recommandationList": [
            'In patients without phenotypically severe hypercholesterolemia:<br>-	Begin risk assessment by estimating lifetime risk. Multiple risk factors indicate lifestyle intervention.',
            'In patients with persistent, moderate hypercholesterolemia (LDL-C 160-189 mg/dL (4.1-4.8 mmol/L)):<br>-	Lifestyle intervention is indicated, and long-term statin therapy would be beneficial, especially for those with other risk enhancing factors.',
            'In patients with severe hypercholesterolemia (LDL-C >190 mg/dL (≥4.9 mmol/L)):<br>-	Lifestyle intervention is indicated.<br>- Maximally tolerated therapy statin therapy is recommended.  (I, B-R)<br>-	If recommended LDL-C reduction of > 50% is not achieved, then possible addition of non-statin therapies is also recommended.',
            'In patients with diabetes either of long duration (≥10 years of T2D, ≥20 years of T1D), and/or albuminuria (≥30 mcg albumin/mg creatinine), eGFR &lt;60 ml/min/m2, retinopathy, neuropathy:<br>- Lifestyle intervention is indicated.<br>-	It may be reasonable to initiate statin therapy. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "Blood Pressure Management",
        "blood_pressure_mgmt_text": "Lifetime risk may be calculated for these patients. Because the ACC/AHA pooled cohort equations are currently validated for patients aged 40-79, a default age of 40 may be used for younger adult patients in order to view certain advice from the 2017 ACC/AHA High Blood Pressure Guideline, with the awareness that the specific calculated 10-year risk and related advice tied to a risk threshold is more approximate for these patients."
    },
    summary: {
        "visit_summary_header": "Summary",
        "visit_summary_text": "Below is a summary of patient’s risk based on the data provided. See the Resources section for detailed recommendations and treatment advice.",
        "email_summary_lbl": "Email Advice",
        "print_summary_lbl": "Print",
        inputs: {
            "input_lbl": "Inputs",
            "sex_lbl": "Sex: ",
            "race_lbl": "Race: ",
            "values_lbl": "Values",
            "followUpValue": "Current",
            "age_lbl": "Age:",
            "total_cholestoral_lbl": "Total Cholesterol",
            "hdl_cholesterol_lbl": "HDL Cholesterol",
            "diabities": "Diabetes:",
            "smoker_lbl": "Smoker:",
            "hypertension_treatment_lbl": "Treatment for Hypertension:"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;Estimate Risk',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>Disclaimer: The results and recommendations provided by this application are intended to inform but do not replace clinical judgment. Therapeutic options should be individualized and determined after discussion between the patient and their care provider. <br>This tool is translated from English and was originally designed for a North American audience but still can be used as an approximation for risk in other ethnicities. Use clinical judgement when weighing the impact of cultural and socioeconomic factors, as well as drug availability when using this tool.</p>'
    },
    sex: [{
        "label": "Male",
        "value": "Male"
    }, {
        "label": "Female",
        "value": "Female"
    }],
    diabetic: [{
        "label": "Yes",
        "value": "Yes"
    }, {
        "label": "No",
        "value": "No"
    }],
    smoker: [{
        "label": "Yes",
        "value": "Yes",
        "tooltip": "Smokes every day or on some days."
    }, {
        "label": "No",
        "value": "No",
        "tooltip": "Does not smoke or has been abstinent from smoking for at least 7 days."
    }],
    hypertension: [{
        "label": "Yes",
        "value": "Yes"
    }, {
        "label": "No",
        "value": "No"
    }],
    onStatin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    onAspirin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    visitType: [{
        "label": "Yes",
        "value": true
    }, {
        "label": "No",
        "value": false
    }],
    YesNoQuestion: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
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
        scorebar: {
            "text": "Optimal risk factors include: Total cholesterol of ≤ 170 mg/dL (4.40 mmol/L), HDL-cholesterol of ≥ 50 mg/dL (1.30 mmol/L), Systolic BP of ≤ 110 mm Hg, Not taking medications for hypertension, Not a diabetic, Not a smoker",
        }
    },
    race: [{
        "label": "Other",
        "value": "Other"
    }, {
        "label": "African American/Black",
        "value": "African American/Black"
    }, {
        "label": "White",
        "value": "White"
    }],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
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
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 20-79 years'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
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
            'message': 'Please enter a value in the format xxx'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx.xxx'
        }],
        hdlCholesterol: [{
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
                'message': 'Please enter a value in the format xx or xxx'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineLdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 30-300 mg/dL'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 0.777-7.770 mmol/L'
            }, {
                'status': 'warning',
                'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },

    formToolTips: {
        smokerToolTip: {
            id: '0',
            htmlID: 'smokingInfo',
            text: 'Is smoker?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Defined as cigarette smoker based on patient population studied in relevant clinical trials. Use clinical discretion in regards to patients who use e-cigarettes and other tobacco products.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ldlToolTip: {
            id: '1',
            htmlID: 'ldlInfo',
            text: 'ldl < 190',
            value: '1',
            showInfo: true,
            tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2',
            htmlID: 'statinInfo',
            text: 'statin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3',
            htmlID: 'aspirinInfo',
            text: 'aspirin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ageToolTip: {
            id: '0',
            htmlID: 'ageInfo',
            text: 'What is current age?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'For patients ≥ 80 y/o, a default of 79 y/o may be reasonably used as the 10-year ASCVD risk for this population is generally >10%.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        previousvisitToolTip: {
            id: '0',
            htmlID: 'previousvisitInfo',
            text: 'Do you want to compare?',
            value: '1',
            showInfo: true,
            tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0',
            htmlID: 'currentAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        baselineAgeValToolTip: {
            id: '1',
            htmlID: 'baselineAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    treatmentOne: [{
            id: '0',
            htmlID: 't1QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking',
            gaLabel: 'Quit Smoking'
        },
        {
            id: '1',
            htmlID: 't1Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin',
            gaLabel: 'Add_Intensify Statin'
        },
        {
            id: '2',
            htmlID: 't1BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds',
            gaLabel: 'Add_Intensify BP Med'
        },
        {
            id: '3',
            htmlID: 't1Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin',
            gaLabel: 'Start_Cont Aspirin'
        }
    ],
    treatmentTwo: [{
            id: '0',
            htmlID: 't2QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't2Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't2BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't2Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
    ],
    treatmentThree: [{
            id: '0',
            htmlID: 't3QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't3Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't3BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't3Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        }
    },
    emailTemplate: {
        subjectLine: 'ASCVD Risk Results #timestamp#',
        followuprisk: '10 YEAR ASCVD RISK: #followuprisk#%0D%0A',
        lifetimerisk: 'Lifetime risk: #lifetimerisk#%0D%0A',
        optimalrisk: 'Optimal risk: #optimalrisk#%0D%0A',
        patientinformation: '----PATIENT INFORMATION----%0D%0ASex: #sex#%0D%0ARace: #race#%0D%0A',
        followup: 'Age: #age#y',
        labs: '%0D%0ABP: #bloodPresure#/#dbloodPressure#%0D%0ATotal Chol : #totalCholesterol#%0D%0AHDL: #hdlCholesterol#',
        personalHistory: '%0D%0ADiabetic : #diabetic#%0D%0ASmoker: #smoker#%0D%0AHTN Treatment: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>This site uses cookies to improve your experience.</h1> By continuing to use our site, you agree to our <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank"> Cookie Policy</a>, <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank"> Privacy Policy</a> and <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank"> Terms of Service</a>.',
        buttonText: 'OK'
    }
}

var formDataPortuguese = {
    headerNavigation: {
        "estimateRisk": "Risco Estimado",
        "summary": {
            "tabText": "Resumo",
            "viewSummaryLbl": "Ver Resumo",
            "tabTooltip": "A seção de resumo está acessível quando as características necessárias para pacientes de 40 a 79 anos de idade são inseridas."
        }
    },
    scorebar: {
        "intermediateText": "Intermediário",
        "invalidAgeMessage": 'Esta calculadora fornece apenas estimativas de risco de 10 anos para indivíduos de 40 a 79 anos de idade.&nbsp;<a data-open="young-recommendation-modal" id="modalLaucher"  class="link">Clicque aqui</a> para ver sugestões breves para pacientes mais jovens.',
        "currentRiskText": "Risco de DCVA<br>Atual de 10 anos<sup>**</sup>",
        "lifetimeRisklbl": "Risco de DCVA ao longo da vida: &nbsp;&nbsp;",
        "lifetimeRiskText": "Calculadora de Risco ao Longo da Vida fornece apenas estimativas de risco ao londo da vida para indivíduos de 20 a 59 anos de idade.",
        "optimalRisklbl": "Risco ideal de DCVA: &nbsp;&nbsp;",
        "optimalRiskText": "Calculadora de Risco Ideal de DCVA fornece apenas estimativas de risco ideal para indivíduos de 40 a 79 anos de idade."
    },
    riskRanges: {
        "low": "Baixo",
        "borderline": "Limítrofe",
        "intermediate": "Intermediário",
        "high": "Elevado",
        "na": "N/A"
    },
    selectLanguageRow: {
        "selectLanguage": "Seleção de Idioma",
        "unitOfMeasure": "Unidade de Medida",
        "resetAll": '<i class="fa fa-repeat"></i>Reiniciar Tudo'
    },
    warningBox: {
        "welcomeText": "Bem-vindo ao Estimador de Risco de DCVA Multilíngue",
        "termsOfServiceHeader": "Termos de Serviço",
        "termsOfServiceText": '<p>Clique na guia Termos na parte inferior do aplicativo antes de usar o Estimador de Risco de DCVA Multilíngue (“o Produto”) para ler os Termos de Serviço e o Contrato de Licença completos (o “Contrato”) que regem o uso do Produto. O Contrato inclui, entre outros termos e condições detalhados, certas isenções de responsabilidade da American College of Cardiology Foundation [Fundação do Colégio Americano de Cardiologia] ("ACCF") e exige que o usuário concorde em isentar a ACCF de toda e qualquer responsabilidade decorrente do uso do Produto. Ao usar o Produto, você aceita e concorda em obedecer a todos os termos e condições estabelecidos no Contrato, incluindo tais isenções de responsabilidade e liberações. Se você não aceitar os termos e condições do Contrato, não poderá continuar a usar o Produto. <br> O Contrato está sujeito a alterações de tempos em tempos, e seu uso continuado do Produto constitui sua aceitação e concordância em ser regido por quaisquer termos revisados do Contrato. </p><p> Este Estimador de Risco permite que profissionais de saúde e pacientes façam uma estimativa dos riscos de doença cardiovascular aterosclerótica (DCVA) em 10 anos, ideais e ao longo da vida. Use as informações desta ferramenta para ajudar nas discussões entre médico e paciente sobre risco e intervenções para redução de risco. <br> Os resultados e recomendações fornecidos por este aplicativo têm como objetivo informar, mas não substituir o julgamento clínico. As opções terapêuticas devem ser individualizadas e determinadas após discussão entre o paciente e seu médico.</p>',
        "aboutAppText": '<p>Consulte a tela <b>Sobre o Aplicativo</b> neste aplicativo para uma definição de termos e instruções adicionais.</p>',
        "notShowAgain": "Não me mostre isso novamente",
        "secondWarningBoxText": "O aplicativo deve ser usado apenas para pacientes de prevenção primária (aqueles sem doença cardiovascular aterosclerótica estabelecida)."
    },
    formLabelText: {
        "current_age": "Idade Atual",
        "sex": "Sexo",
        "race": "Etnia",
        "sys_blood_pressure": 'Pressão Arterial Sistólica <small class="pre">(mm Hg)</small>',
        "diastolic_blood_pressure": 'Pressão Arterial Diastólica <small class="pre">(mm Hg)</small>',
        "total_cholesterol": "Colesterol Total",
        "hdl_cholesterol": "Colesterol HDL",
        "diabetes_history": "Histórico de Diabetes?",
        "smoker": "Fumante?",
        "on_hypertension_treatment": "Em Tratamento de Hipertensão?",
        "cholesterol_us_unit": "(mg/dL)",
        "cholesterol_is_unit": "(mmol/L)",
        "hdl_cholesterol_us": 'Colesterol HDL <small class="pre">(mg/dL)</small>',
        "hdl_cholesterol_is": 'Colesterol HDL <small class="pre">(mmol/L)</small>',
        "total_cholesterol_us": 'Colesterol Total <small class="pre">(mg/dL)</small>',
        "total_cholesterol_is": 'Colesterol Total <small class="pre">(mmol/L)</small>'
    },
    formHints: {
        "current_age_hint": "Idade deve ser entre 20-79",
        "sys_blood_pressure_hint": "Valor deve ser entre 90-200",
        "diastolic_blood_pressure_hint": "Valor deve ser entre 60-130",
        "total_cholesterol_us_hint": "Valor deve ser entre 130 - 320",
        "total_cholesterol_is_hint": "Valor deve ser entre 3,367 - 8,288",
        "hdl_cholesterol_us_hint": "Valor deve ser entre 20 - 100",
        "hdl_cholesterol_is_hint": "Valor deve ser entre 0,518 - 2,59"
    },
    otherRaceNote: {
        "note": "<b>Observação:</b> O cálculo do risco de 10 anos (Equação de Coorte Agrupada) foi desenvolvido com base em estudos de americanos, ou seja, populações de pacientes brancos e afro-americanos e é usado como uma aproximação para o risco em outras etnias. Essas estimativas podem subestimar o risco de 10 anos e ao longo da vida para pessoas de algumas grupos étnicos, especialmente nativos americanos, alguns asiáticos (por exemplo, de ascendência do sul da Ásia) e alguns hispânicos (por exemplo, porto-riquenhos), e podem superestimar os risco para outros, incluindo alguns asiático-americanos (por exemplo, de ascendência do leste asiático) e alguns hispânicos (por exemplo, mexicanos-americanos). Como o uso principal dessas estimativas de risco é facilitar a discussão muito importante a respeito da redução de risco por meio da mudança do estilo de vida, a imprecisão introduzida é pequena o suficiente para justificar o prosseguimento do aconselhamento para mudança de estilo de vida informado por esses resultados.",
    },
    estimateRiskFooter: {
        moreInfo: '<b>Para obter mais informações sobre as entradas e cálculos usados neste aplicativo, consulte “Termos e Conceitos” na guia Recursos abaixo.</b><br/><sup>**</sup>DCVA = doença cardiovascular aterosclerótica<br/>O risco de 10 anos para DCVA é categorizado como:<br/>Risco baixo (&lt;5%)<br/>Risco limítrofe (5% a 7,4%)<br/>Risco intermediário (7,5% a 19,9%)<br/>Risco alto (≥20%)<br/>',
        footerNavigations: {
            "resources": "Recursos",
            "terms": "Termos",
            "aboutShortText": "Sobre",
            "aboutLongText": "Sobre o Aplicativo"
        }
    },
    youngPatientRecommendationModal: {
        "title": "Sugestões principais para pacientes de 20 a 39 anos",
        "ldl_text": "Gerenciamento de LDL-C",
        "recommandationList": [
            'Em pacientes sem hipercolesterolemia fenotipicamente grave:<br>-	Comece a avaliação de risco estimando o risco ao longo da vida. Vários fatores de risco indicam intervenção no estilo de vida.',
            'Em pacientes com hipercolesterolemia moderada persistente (LDL-C 160-189 mg/dL (4,1-4,8 mmol/L)): <br>	Intervenção no estilo de vida é indicada e a terapia de longo prazo com estatinas seria benéfica, especialmente para aqueles com outros fatores de aumento de risco.',
            'Em pacientes com hipercolesterolemia grave (LDL-C >190 mg/dL (≥4,9 mmol/L)):<br>-	Intervenção no estilo de vida é indicada.<br>- Terapia máxima tolerada, terapia com estatina é recomendada.  (I, B-R)<br>-	Se a redução recomendada do LDL-C de > 50% não for alcançada, então a possível adição de terapias sem estatinas também é recomendada.',
            'Em pacientes com diabetes de longa duração (≥10 anos de DT2, ≥20 anos de DT1) e/ou albuminúria (≥30 mcg de albumina/mg de creatinina), TFGe &lt;60 ml/min/m2, retinopatia, neuropatia:<br>-Intervenção no estilo de vida é indicada.<br>-	 Pode ser razoável iniciar a terapia com estatinas. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "Gerenciamento de Pressão Arterial",
        "blood_pressure_mgmt_text": "O risco ao longo da vida pode ser calculado para esses pacientes. Como as equações de coorte agrupadas do ACC/AHA são atualmente validadas para pacientes com idades entre 40-79, uma idade padrão de 40 anos pode ser usada para pacientes adultos mais jovens, a fim de ver certos conselhos da Diretriz de Pressão Arterial do ACC/AHA 2017, com o conhecimento que o risco específico calculado de 10 anos e o aconselhamento relacionado vinculado a um limite de risco são mais aproximados para esses pacientes."
    },
    summary: {
        "visit_summary_header": "Resumo",
        "visit_summary_text": "Abaixo está um resumo do risco dos paciente's com base nos dados fornecidos. Consulte a seção Recursos para recomendações detalhadas e conselhos sobre tratamento.",
        "email_summary_lbl": "Conselhos por email",
        "print_summary_lbl": "Impressão",
        inputs: {
            "input_lbl": "Características do Paciente",
            "sex_lbl": "Sexo: ",
            "race_lbl": "Etnia: ",
            "values_lbl": "Valores",
            "followUpValue": "Atuais",
            "age_lbl": "Idade:",
            "total_cholestoral_lbl": "Colesterol Total",
            "hdl_cholesterol_lbl": "Colesterol HDL",
            "diabities": "Diabetes:",
            "smoker_lbl": "Fumante:",
            "hypertension_treatment_lbl": "Tratamento para Hipertensão:"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;Risco Estimado',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>Isenção de responsabilidade: Os resultados e recomendações fornecidos por este aplicativo têm como objetivo informar, mas não substituir o julgamento clínico. As opções terapêuticas devem ser individualizadas e determinadas após discussão entre o paciente e seu médico. <br>Esta ferramenta foi traduzida do inglês e foi originalmente projetada para o público norte-americano, mas ainda pode ser usada como uma aproximação para risco em outras etnias. Use o julgamento clínico ao pesar o impacto de fatores culturais e socioeconômicos, bem como a disponibilidade de medicamentos ao usar esta ferramenta.</p>'
    },
    sex: [{
        "label": "Masculino",
        "value": "Male"
    }, {
        "label": "Feminino",
        "value": "Female"
    }],
    diabetic: [{
        "label": "Sim",
        "value": "Yes"
    }, {
        "label": "Não",
        "value": "No"
    }],
    smoker: [{
        "label": "Sim",
        "value": "Yes",
        "tooltip": "Fuma todos os dias ou em alguns dias."
    }, {
        "label": "Não",
        "value": "No",
        "tooltip": "Não fuma ou está abstinente de fumar há pelo menos 7 dias."
    }],
    hypertension: [{
        "label": "Sim",
        "value": "Yes"
    }, {
        "label": "Não",
        "value": "No"
    }],
    onStatin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    onAspirin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    visitType: [{
        "label": "Yes",
        "value": true
    }, {
        "label": "No",
        "value": false
    }],
    YesNoQuestion: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
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
        scorebar: {
            "text": "Os fatores de risco ideais incluem: colesterol total de ≤ 170 mg/dL (4,40 mmol/L), colesterol HDL de ≥ 50 mg/dL (1,30 mmol/L), PA sistólica de ≤ 110 mm Hg, não tomar medicamentos para hipertensão, Não é diabético, não é fumante",
        }
    },
    race: [{
        "label": "Outro",
        "value": "Other"
    }, {
        "label": "Afrodescendente/Negro",
        "value": "African American/Black"
    }, {
        "label": "Branco",
        "value": "White"
    }],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
        }],
        smokingSelect: [{
            'id': 0,
            'status': 'warning',
            'message': 'Selecione um valor'
        }],
        sex: [{
            'status': 'warning',
            'message': 'Selecione um valor'
        }],
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'Insira um valor'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Insira um valor entre 20-79 anos'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'Esta calculadora fornece apenas estimativas de risco de 10 anos para indivíduos de 40 a 79 anos de idade.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Você pode prosseguir com o cálculo do risco de 10 anos, mas o risco ao longo da vida é calculado apenas para idades de 20 a 59 anos.'
        }],
        race: [{
            'status': 'warning',
            'message': 'Selecione um valor'
        }, {
            'status': 'highlighted',
            'message': 'Veja o aviso de estimativa abaixo'
        }],
        totalCholesterol: [{
            'status': 'warning',
            'message': 'Insira um valor'
        }, {
            'status': 'warning',
            'message': 'Insira um valor entre 130 - 320 mg/dL'
        }, {
            'status': 'warning',
            'message': 'Insira um valor entre 3,367 - 8,288 mmol/L'
        }, {
            'status': 'error',
            'message': ' Insira um valor no formato xxx'
        }, {
            'status': 'error',
            'message': 'Insira um valor no formato xxx.xxx ou xxx,xxx'
        }],
        hdlCholesterol: [{
                'status': 'warning',
                'message': 'Insira um valor'
            },
            {
                'status': 'warning',
                'message': 'Insira um valor entre  20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Insira um valor entre 0,518 - 2,59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Insira um valor no formato xx ou xxx'
            },
            {
                'status': 'error',
                'message': 'Insira um valor no formato xxx.xxx ou xxx,xxx'
            }
        ],
        bloodPresure: [{
            'status': 'warning',
            'message': 'Insira um valor'
        }, {
            'status': 'warning',
            'message': 'Insira um valor entre 90 -200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Insira um valor no formato xxx'
        }],
        dbloodPresure: [{
            'status': 'warning',
            'message': 'Insira um valor'
        }, {
            'status': 'warning',
            'message': 'Insira um valor entre 60 -130 mm Hg'
        }, {
            'status': 'error',
            'message': 'Insira um valor no formato xxx'
        }],
        allData: [{
            'status': 'warning',
            'message': 'Faltam dados. As entradas abaixo foram destacadas.'
        }, {
            'status': 'error',
            'message': 'Existem erros na página. As entradas abaixo foram destacadas.'
        }],
        diabetic: [{
            'status': 'warning',
            'message': 'Selecione um valor'
        }],
        smoker: [{
            'status': 'warning',
            'message': 'Selecione um valor'
        }],
        hypertension: [{
            'status': 'warning',
            'message': 'Selecione um valor'
        }, {
            'status': 'warning',
            'message': 'O risco de acompanhamento é baseado na suposição de que aqueles em tratamento para hipertensão no início do estudo ainda precisam dele.'
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineLdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 30-300 mg/dL'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 0.777-7.770 mmol/L'
            }, {
                'status': 'warning',
                'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },

    formToolTips: {
        smokerToolTip: {
            id: '0',
            htmlID: 'smokingInfo',
            text: 'Is smoker?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Definido como fumante de cigarro com base na população de pacientes estudada em estudos clínicos relevantes. Use critério clínico em relação aos pacientes que usam cigarros eletrônicos e outros produtos do tabaco.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ldlToolTip: {
            id: '1',
            htmlID: 'ldlInfo',
            text: 'ldl < 190',
            value: '1',
            showInfo: true,
            tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2',
            htmlID: 'statinInfo',
            text: 'statin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3',
            htmlID: 'aspirinInfo',
            text: 'aspirin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ageToolTip: {
            id: '0',
            htmlID: 'ageInfo',
            text: 'What is current age?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Para pacientes ≥ 80 anos, um padrão de 79 anos pode ser razoavelmente usado, visto que o risco de DCVA em 10 anos para esta população é geralmente > 10%.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        previousvisitToolTip: {
            id: '0',
            htmlID: 'previousvisitInfo',
            text: 'Do you want to compare?',
            value: '1',
            showInfo: true,
            tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0',
            htmlID: 'currentAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Esta calculadora fornece apenas estimativas de risco de 10 anos para indivíduos de 40 a 79 anos de idade.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        baselineAgeValToolTip: {
            id: '1',
            htmlID: 'baselineAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    treatmentOne: [{
            id: '0',
            htmlID: 't1QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking',
            gaLabel: 'Quit Smoking'
        },
        {
            id: '1',
            htmlID: 't1Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin',
            gaLabel: 'Add_Intensify Statin'
        },
        {
            id: '2',
            htmlID: 't1BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds',
            gaLabel: 'Add_Intensify BP Med'
        },
        {
            id: '3',
            htmlID: 't1Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin',
            gaLabel: 'Start_Cont Aspirin'
        }
    ],
    treatmentTwo: [{
            id: '0',
            htmlID: 't2QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't2Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't2BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't2Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
    ],
    treatmentThree: [{
            id: '0',
            htmlID: 't3QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't3Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't3BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't3Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        }
    },
    emailTemplate: {
        subjectLine: 'Resultados do Risco da Doença Cardiovascular Aterosclerótica #timestamp#',
        followuprisk: 'RISCO DE DCVA DE 10 ANOS: #followuprisk#%0D%0A',
        lifetimerisk: 'Risco ao longo da vida: #lifetimerisk#%0D%0A',
        optimalrisk: 'Risco Ideal: #optimalrisk#%0D%0A',
        patientinformation: '----INFORMAÇÃO DO PACIENTE----%0D%0ASexo: #sex#%0D%0ARaça: #race#%0D%0A',
        followup: 'Idade: #age#y',
        labs: '%0D%0ABP: #bloodPresure#/#dbloodPressure#%0D%0ATotal Chol : #totalCholesterol#%0D%0AHDL: #hdlCholesterol#',
        personalHistory: '%0D%0ADiabetic : #diabetic#%0D%0ASmoker: #smoker#%0D%0AHTN Treatment: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>Este site usa cookies para melhorar sua experiência.</h1> Ao continuar a usar nosso site, você concorda com nossas <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank"> Política de Cookies</a>, <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank"> Política de Privacidade</a> e <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank"> Termos de Serviço</a>.',
        buttonText: 'OK'
    }
}

var formDataArabic = {
    headerNavigation: {
        "estimateRisk": "تقدير مخاطر الإصابة",
        "summary": {
            "tabText": "ملخص",
            "viewSummaryLbl": "عرض الملخص",
            "tabTooltip": "يمكن الوصول إلى قسم الملخص بعد إدخال جميع الخصائص للمرضى الذين تتراوح أعمارهم بين 40 و79 عامًا."
        }
    },
    scorebar: {
        "intermediateText": "متوسط",
        "invalidAgeMessage": 'لا توفر هذه الحاسبة سوى تقديرات لخطر الإصابة على مدى 10 سنوات للأفراد الذين تتراوح أعمارهم بين 40 و79 عامًا.&nbsp;<a data-open="young-recommendation-modal" id="modalLaucher"  class="link">انقر هنا</a> لعرض ملخص الاقتراحات المتعلقة بالمرضى الأصغر سنًا.',
        "currentRiskText": "المخاطر الحالية للإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين<br>على مدى 10 سنوات<sup>**</sup>",
        "lifetimeRisklbl": "مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين طوال العمر: &nbsp;&nbsp;",
        "lifetimeRiskText": "لا توفر حاسبة مخاطر الإصابة طوال العمر سوى تقديرات لمخاطر الإصابة طوال العمر للأفراد الذين تتراوح أعمارهم بين 20 و59 عامًا.",
        "optimalRisklbl": "المستوى المناسب من مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين: &nbsp;&nbsp;",
        "optimalRiskText": "لا توفر حاسبة المستوى المناسب من مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين سوى تقديرات للأفراد الذين تتراوح أعمارهم بين 40 و79 عامًا."
    },
    riskRanges: {
        "low": "منخفض",
        "borderline": "حدي",
        "intermediate": "متوسط",
        "high": "مرتفع",
        "na": "لا يوجد"
    },
    selectLanguageRow: {
        "selectLanguage": "اختيار اللغة",
        "unitOfMeasure": "وحدة القياس",
        "resetAll": '<i class="fa fa-repeat"></i>إعادة تعيين الكل'
    },
    warningBox: {
        "welcomeText": "مرحبًا بكم في أداة تقدير مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين متعددة اللغات",
        "termsOfServiceHeader": "بنود الخدمة",
        "termsOfServiceText": '<p>انقر فوق علامة التبويب "البنود" في الجزء السفلي للتطبيق قبل استخدام أداة تقدير مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين متعددة اللغات ("المنتج") لقراءة بنود الخدمة واتفاقية الترخيص ("الاتفاقية") كاملة التي تنظم استخدام المنتج. تشمل الاتفاقية، من بين الشروط والأحكام الأخرى التفصيلية، بيانات معينة لإخلاء المسؤولية عن الضمانات من مؤسسة الكلية الأمريكية لأمراض القلب ("ACCF") وتُلزم المستخدم بالموافقة لإعفاء ACCF من أي وجميع المسؤوليات التي تنشأ في إطار استخدامك للمنتج. باستخدامك للمنتج، فإنك تقبل الالتزام بجميع الشروط والأحكام المنصوص عليها في الاتفاقية وتوافق عليها، بما فيها تلك الإخلاءات والإعفاءات. إن لم توافق على شروط الاتفاقية وأحكامها، فلا يجوز لك المتابعة في استخدام المنتج. <br> الاتفاقية عرضة للتغيير من حين إلى آخر، ويمثل استمرارك في استخدام المنتج قبولاً من طرفك على الالتزام بشروط الاتفاقية المُعدَّلة والموافقة عليها. </p><p> تُمكِّن أداة تقدير مخاطر الإصابة مقدمي الرعاية الصحية والمرضى من تقدير مخاطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين (ASCVD) على مدى 10 سنوات، والمستوى المناسب للإصابة بها، وكذلك مخاطر الإصابة بها طوال العمر. يمكن الاستفادة من المعلومات الواردة في هذه الأداة للمساعدة في إدارة المناقشة بين الطبيب والمريض بخصوص مخاطر الإصابة والتدخلات الخافضة لمخاطر الإصابة. <br> الهدف من النتائج والتوصيات الواردة في هذا التطبيق هو الاطلاع ولا تحل محل الرأي السريري. ينبغي أن تكون الخيارات العلاجية وفقًا للاحتياجات الفردية، وتُحدد بعد إجراء المناقشة بين المريض ومُقدِّم الرعاية الصحية.</p>',
        "aboutAppText": '<p>راجع شاشة <b>نبذة عن التطبيق</b> داخل التطبيق للحصول على تعريف للشروط والأحكام وتعليمات إضافية.</p>',
        "notShowAgain": "لا تُظهر هذا مرة أخرى",
        "secondWarningBoxText": "ينبغي استخدام التطبيق لمرضى الوقاية الأولية فقط (مَن ليس لديهم أمراض قلبية وعائية ناتجة عن تصلب الشرايين)."
    },
    formLabelText: {
        "current_age": "العمر الحالي",
        "sex": "الجنس",
        "race": "العرق",
        "sys_blood_pressure": 'ضغط الدم الانقباضي <small class="pre">(ملم زئبق)</small>',
        "diastolic_blood_pressure": 'ضغط الدم الانبساطي <small class="pre">(ملم زئبق)</small>',
        "total_cholesterol": "إجمالي نسبة الكوليسترول",
        "hdl_cholesterol": "كوليسترول البروتين الدهني مرتفع الكثافة",
        "diabetes_history": "هل يوجد تاريخ للإصابة بمرض السكري؟",
        "smoker": "هل أنت مدخن؟",
        "on_hypertension_treatment": "هل تتلقى علاجًا لارتفاع ضغط الدم؟",
        "cholesterol_us_unit": "(مجم/ديسيلتر)",
        "cholesterol_is_unit": "(مليمول/لتر)",
        "hdl_cholesterol_us": 'كوليسترول البروتين الدهني مرتفع الكثافة <small class="pre">(مجم/ديسيلتر)</small>',
        "hdl_cholesterol_is": 'كوليسترول البروتين الدهني مرتفع الكثافة <small class="pre">(مليمول/لتر)</small>',
        "total_cholesterol_us": 'إجمالي نسبة الكوليسترول <small class="pre">(مجم/ديسيلتر)</small>',
        "total_cholesterol_is": 'إجمالي نسبة الكوليسترول <small class="pre">(مليمول/لتر)</small>'
    },
    formHints: {
        "current_age_hint": "يجب أن يكون العمر بين 20 و79 عامًا",
        "sys_blood_pressure_hint": "يجب أن تكون القيمة بين 90 و200",
        "diastolic_blood_pressure_hint": "يجب أن تكون القيمة بين 60 و130",
        "total_cholesterol_us_hint": "يجب أن تكون القيمة بين 130 و320",
        "total_cholesterol_is_hint": "يجب أن تكون القيمة بين 3.367 و8.288",
        "hdl_cholesterol_us_hint": "يجب أن تكون القيمة بين 20 و100",
        "hdl_cholesterol_is_hint": "يجب أن تكون القيمة بين 0.518 و2.59"
    },
    otherRaceNote: {
        "note": "<b>ملاحظة:</b> تم إجراء حساب المخاطر على مدى 10 سنوات (مخاطر الفوج المجمعة) بناء على دراسات أجريت على أمريكيين، أي المرضى الأمريكيين أصحاب البشرة البيضاء والأمريكيين من أصل أفريقي ويستخدم هذا الحساب لتحديد الخطر في الأعراض الأخرى بشكل تقريبي. تلك التقديرات قد تقلل من قيمة مخاطر الإصابة على مدى 10 سنوات ومخاطر الإصابة طوال العمر للأشخاص من بعض المجموعات العرقية أو الإثنية، خاصة الأمريكيين الأصليين، وبعض الآسيويين (مثل ذوي الأصول الأسيوية الجنوبية)، وبعض ذوي الأصول الأسبانية (مثل سكان بورتوريكو). كما أنها قد تزيد من قيمة المخاطر لدى آخرين من ضمنهم بعض الآسيويين (مثل ذوي الأصول الأسيوية الشرقية)، وبعض ذوي الأصول الأسبانية (مثل الأمريكيين المكسيكيين). لأن الهدف الأساسي من تقديرات مخاطر الإصابة تلك هو تيسير النقاش شديد الأهمية المتعلق بالحد من مخاطر الإصابة عن طريق تغيير أسلوب الحياة، فإن عدم الدقة الناتج يسير بما يكفي لتبرير المضي قدمًا في استشارات تغيير أسلوب الحياة وفقًا لتلك النتائج.",
    },
    estimateRiskFooter: {
        moreInfo: '<b> للحصول على مزيد من المعلومات حول المدخلات والحسابات المستخدمة في هذا التطبيق، راجع "المصطلحات والمفاهيم" في علامة التبويب "الموارد" أدناه.</b><br/><sup>**</sup>ASCVD = الأمراض القلبية الوعائية الناتجة عن تصلب الشرايين <br/>يتم تصنيف خطر الإصابة بـ ASCVD على مدى 10 سنوات كما يلي:<br/>خطر منخفض (&lt;5%)<br/>خطر حدي (5% إلى 7.4%)<br/>خطر متوسط (7.5% إلى 19.9%) <br/>خطر مرتفع (≥20%)<br/>',
        footerNavigations: {
            "resources": "الموارد",
            "terms": "البنود",
            "aboutShortText": "نبذة عن",
            "aboutLongText": "نبذة عن التطبيق"
        }
    },
    youngPatientRecommendationModal: {
        "title": "الاقتراحات الرئيسة للمرضى الذين تتراوح أعمارهم بين 20 و39",
        "ldl_text": "معالجة كوليسترول البروتين الدهني منخفض الكثافة (LDL-C)",
        "recommandationList": [
            'بالنسبة للمرضى غير الواضح عليهم الإصابة بفرط كوليسترول الدم الحاد:<br>-	ابدأ تقييم المخاطر بتقدير الخطر طوال العمر. تشير عوامل الخطر المتعددة إلى ضرورة التدخلات في أسلوب الحياة.',
            'بالنسبة لمرضى فرط كوليسترول الدم الحاد (كوليسترول البروتين الدهني منخفض الكثافة 160 -189 مجم/ ديسيلتر (4.1 - 4.8 مليمول/لتر) الدائم والمتوسط: <br>-	يوصى بالتدخل بتغيير أسلوب الحياة، كما أنَّ العلاج بالستاتين طويل الأجل قد يعود بالنفع، خاصة لأولئك الذين لديهم عوامل أخرى تزيد من خطر الإصابة.',
            'بالنسبة لمرضى فرط كوليسترول الدم الحاد (كوليسترول البروتين الدهني منخفض الكثافة >190 مجم/ ديسيلتر (≥4.9 مليمول/لتر):<br>-	يوصى بالتدخل بتغيير أسلوب الحياة.<br>- يوصى بالعلاج بستاتين بأقصى قدر يمكن تحمله.  (I, B-R)<br>-	في حالة عدم خفض معدل كوليسترول البروتين الدهني منخفض الكثافة (LDL-C) الموصى به بنسبة > 50٪، فعندئذٍ يوصى أيضًا بإمكانية إضافة العلاج بأدوية غير الستاتين.',
            'بالنسبة للمرضى المصابين بمرض السكري إما لفترة طويلة (≥10 أعوام من مرض السكري من النوع الثاني، ≥20 عامًا من مرض السكري من النوع الأول)، و/أو البول الزلالي (≥30 مكجم من الألبومين/مجم كرياتينين)، معدل الترشيح الكلوي المُقدَّر (eGFR) &lt;60 مل/دقيقة/م2، اعتلال الشبكية، الاعتلال العصبي:<br>- يوصى بالتدخل بتغيير أسلوب الحياة.<br>-	قد يكون من المعقول بدء العلاج بالستاتين. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "التحكم في ضغط الدم",
        "blood_pressure_mgmt_text": "قد تُحسب مخاطر الإصابة مدى الحياة لهؤلاء المرضى. نظرًا لأن معادلات مخاطر الفوج المجمعة للكلية الأمريكية لأمراض القلب/ جمعية القلب الأمريكية قد تم إقرارها حاليًا للمرضى الذين تتراوح أعمارهم بين 40 و79 عامًا، فقد يُحدد سن الأربعين كعمر افتراضي للمرضى البالغين الأصغر سنًا لعرض نصيحة مُعيَّنة من المبادئ التوجيهية لارتفاع ضغط الدم التابعة للكلية الأمريكية لأمراض القلب/ جمعية القلب الأمريكية لعام 2017، ومن خلال التوعية بأن المخاطر المحددة والمحسوبة على مدى 10 أعوام والنصائح ذات الصلة ترتبط بالحد من المخاطر فإن ذلك يعد تقديرًا تقريبيًا أكثر لهؤلاء المرضى."
    },
    summary: {
        "visit_summary_header": "ملخص",
        "visit_summary_text": "يرد فيما يلي ملخص لمخاطر الإصابة الخاصة'بالمريض استنادًا إلى البيانات المقدمة. راجع قسم الموارد للحصول على توصيات مفصلة ونصائح بشأن العلاج.",
        "email_summary_lbl": "إرسال النصائح عبر البريد الإلكتروني",
        "print_summary_lbl": "الطباعة",
        inputs: {
            "input_lbl": "المدخلات",
            "sex_lbl": "الجنس: ",
            "race_lbl": "العرق:",
            "values_lbl": "القيم",
            "followUpValue": "الحالي",
            "age_lbl": "العمر:",
            "total_cholestoral_lbl": "إجمالي نسبة الكوليسترول",
            "hdl_cholesterol_lbl": "كوليسترول البروتين الدهني مرتفع الكثافة",
            "diabities": "داء السكري:",
            "smoker_lbl": "هل أنت مدخن؟:",
            "hypertension_treatment_lbl": "علاج ارتفاع ضغط الدم:"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;تقدير مخاطر الإصابة',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>ملحوظة: الهدف من النتائج والتوصيات الواردة في هذا التطبيق هو الاطلاع ولا تحل محل الرأي السريري. ينبغي أن تكون الخيارات العلاجية وفقًا للاحتياجات الفردية، وتُحدد بعد إجراء المناقشة بين المريض ومُقدِّم الرعاية الصحية. <br>تُرجمت هذه الأداة من اللغة الإنجليزية وتم إعدادها في الأصل للجمهور في أمريكا الشمالية إلا أنه يمكن استخدامها كتقدير للمخاطر في الأعراق الأخرى .يم تأثير العوامل الثقافية والاجتماعية والاقتصادية، فضلاً عن توفر الأدوية عند استخدام هذه الأداة.</p>'
    },
    sex: [{
        "label": "ذكر",
        "value": "Male"
    }, {
        "label": "أنثى",
        "value": "Female"
    }],
    diabetic: [{
        "label": "نعم",
        "value": "Yes"
    }, {
        "label": "لا",
        "value": "No"
    }],
    smoker: [{
        "label": "نعم",
        "value": "Yes",
        "tooltip": "يدخن يوميًا أو في بعض الأيام."
    }, {
        "label": "لا",
        "value": "No",
        "tooltip": "لا يدخن أو ممتنع عن التدخين لمدة 7 أيام على الأقل."
    }],
    hypertension: [{
        "label": "نعم",
        "value": "Yes"
    }, {
        "label": "لا",
        "value": "No"
    }],
    onStatin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    onAspirin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    visitType: [{
        "label": "Yes",
        "value": true
    }, {
        "label": "No",
        "value": false
    }],
    YesNoQuestion: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
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
        scorebar: {
            "text": "تتضمن المستويات المناسبة من المخاطر: مستوى نسبة الكوليسترول الإجمالي ≤ 170 مجم/ديسيلتر (4.40 مليمول/لتر)، ومستوى كوليسترول البروتين الدهني مرتفع الكثافة (HDL) ≥ 50 مجم/ديسيلتر (1.30 مليمول/لتر)، وضغط الدم الانقباضي الذي يبلغ ≤ 110 ملم زئبق ولا يتناول أدوية ارتفاع ضغط الدم وليس مريضًا بالسكري، وليس مدخنًا",
        }
    },
    race: [{
        "label": "أخرى",
        "value": "Other"
    }, {
        "label": "أمريكي من أصول أفريقية/ ذو بشرة سوداء",
        "value": "African American/Black"
    }, {
        "label": "ذو بشرة بيضاء",
        "value": "White"
    }],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
        }],
        smokingSelect: [{
            'id': 0,
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }],
        sex: [{
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }],
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'أدخل قيمة'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'يرجى إدخال قيمة تتراوح بين 20 و79 عامًا'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'لا توفر الحاسبة هذه سوى تقديرات مخاطر الإصابة على مدى 10 أعوام بالنسبة للأشخاص الذين تتراوح أعمارهم بين 40 و79 عامًا.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'لا توفر حاسبة مخاطر الإصابة طوال العمر سوى تقديرات لمخاطر الإصابة طوال العمر للأفراد الذين تتراوح أعمارهم بين 20 و 56 عامًا.'
        }],
        race: [{
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }, {
            'status': 'highlighted',
            'message': 'راجع التحذير الخاص بالتقدير أدناه'
        }],
        totalCholesterol: [{
            'status': 'warning',
            'message': 'أدخل قيمة'
        }, {
            'status': 'warning',
            'message': 'يرجى إدخال قيمة تتراوح بين 130 و320 مجم/ديسيلتر'
        }, {
            'status': 'warning',
            'message': 'يرجى إدخال قيمة تتراوح بين 3.367 و8.288 مليمول/لتر '
        }, {
            'status': 'error',
            'message': 'يرجى إدخال القيمة بتنسيق xxx'
        }, {
            'status': 'error',
            'message': 'يرجى إدخال القيمة بتنسيق xxx.xxx'
        }],
        hdlCholesterol: [{
                'status': 'warning',
                'message': 'أدخل قيمة'
            },
            {
                'status': 'warning',
                'message': 'يرجى إدخال القيمة التي تتراوح بين   20 و100 مجم/ديسيلتر'
            },
            {
                'status': 'warning',
                'message': 'يرجى إدخال القيمة التي تتراوح بين 0.518 و2.59 مليمول/لتر'
            },
            {
                'status': 'error',
                'message': 'يرجى إدخال القيمة بتنسيق xx أو xxx'
            },
            {
                'status': 'error',
                'message': 'يرجى إدخال القيمة بتنسيق xxx.xxx'
            }
        ],
        bloodPresure: [{
            'status': 'warning',
            'message': 'أدخل قيمة'
        }, {
            'status': 'warning',
            'message': 'يرجى إدخال قيمة تتراوح بين 90 و200 ملم زئبق'
        }, {
            'status': 'error',
            'message': 'يرجى إدخال قيمة بتنسيق xxx'
        }],
        dbloodPresure: [{
            'status': 'warning',
            'message': 'أدخل قيمة'
        }, {
            'status': 'warning',
            'message': 'يرجى إدخال قيمة تتراوح بين 60 و130 ملم زئبق'
        }, {
            'status': 'error',
            'message': 'يرجى إدخال قيمة بتنسيق xxx'
        }],
        allData: [{
            'status': 'warning',
            'message': 'توجد بيانات مفقودة. تم تمييز المدخلات أدناه.'
        }, {
            'status': 'error',
            'message': 'توجد أخطاء في الصفحة. تم تمييز المدخلات أدناه.'
        }],
        diabetic: [{
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }],
        smoker: [{
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }],
        hypertension: [{
            'status': 'warning',
            'message': 'حدِّد قيمة'
        }, {
            'status': 'warning',
            'message': 'تستند مخاطر المتابعة إلى افتراض أن المرضي الذين يخضعون لعلاج ارتفاع ضغط الدم ما زالوا بحاجة إليه في الأساس.'
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineLdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 30-300 mg/dL'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 0.777-7.770 mmol/L'
            }, {
                'status': 'warning',
                'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },
    formToolTips: {
        smokerToolTip: {
            id: '0',
            htmlID: 'smokingInfo',
            text: 'Is smoker?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'تحديد المريض بأنه مدخن للسجائر بناءً على فئة المرضى التي دُرست في التجارب السريرية ذات الصلة. استخدم التقييم السريري للمرضى الذين يستخدمون السجائر الإلكترونية ومنتجات التبغ الأخرى.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ldlToolTip: {
            id: '1',
            htmlID: 'ldlInfo',
            text: 'ldl < 190',
            value: '1',
            showInfo: true,
            tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2',
            htmlID: 'statinInfo',
            text: 'statin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3',
            htmlID: 'aspirinInfo',
            text: 'aspirin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        ageToolTip: {
            id: '0',
            htmlID: 'ageInfo',
            text: 'What is current age?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'للمرضى البالغين من العمر 80 عامًا أو أصغر، يجوز اعتبار البالغين من العمر 79 عامًا من الأشخاص المعرضين لخطر الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين على مدى 10 سنوات ضمن هذه الفئة بنسبة >10% بشكل عام.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        previousvisitToolTip: {
            id: '0',
            htmlID: 'previousvisitInfo',
            text: 'Do you want to compare?',
            value: '1',
            showInfo: true,
            tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0',
            htmlID: 'currentAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'لا توفر الحاسبة هذه سوى تقديرات مخاطر الإصابة على مدى 10 أعوام بالنسبة للأشخاص الذين تتراوح أعمارهم بين 40 و79 عامًا.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        baselineAgeValToolTip: {
            id: '1',
            htmlID: 'baselineAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    treatmentOne: [{
            id: '0',
            htmlID: 't1QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking',
            gaLabel: 'Quit Smoking'
        },
        {
            id: '1',
            htmlID: 't1Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin',
            gaLabel: 'Add_Intensify Statin'
        },
        {
            id: '2',
            htmlID: 't1BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds',
            gaLabel: 'Add_Intensify BP Med'
        },
        {
            id: '3',
            htmlID: 't1Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin',
            gaLabel: 'Start_Cont Aspirin'
        }
    ],
    treatmentTwo: [{
            id: '0',
            htmlID: 't2QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't2Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't2BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't2Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
    ],
    treatmentThree: [{
            id: '0',
            htmlID: 't3QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't3Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't3BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't3Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        }
    },
    emailTemplate: {
        subjectLine: '#timestamp#\u202A\u202C نتائج مخاطر الإصابة بـ \u202C\u202AASCVD',
        followuprisk: '#followuprisk#\u202A :مخاطر ASCVD%0D%0A',
        lifetimerisk: '#lifetimerisk#\u202A :مخاطر الإصابة طوال العمر \u202A %0D%0A',
        optimalrisk: '#optimalrisk#\u202A :أقصى قدر من المخاطر \u202A %0D%0A%0D%0A',
        patientinformation: '----معلومات المريض----%0D%0Aالجنس: \u202A#sex#%0D%0Aالعِرق: \u202A#race#%0D%0A',
        followup: 'العمر :عامًا \u202A#age#',
        labs: '%0D%0Aضغط الدم: #bloodPresure#/#dbloodPressure#%0D%0Aإجمالي نسبة الكوليسترول: #totalCholesterol#%0D%0Aكوليسترول البروتين الدهني مرتفع الكثافة: #hdlCholesterol#',
        personalHistory: '%0D%0Aمصاب بمرض السكري:  #diabetic#%0D%0Aمدخن:  #smoker#%0D%0Aيتناول علاجًا لضغط الدم المرتفع: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك.</h1> وبمتابعة استخدام موقعنا، فإنك توافق على <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank"> سياسة ملفات تعريف الارتباط</a>، و<a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank">سياسة الخصوصية</a> و<a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank">بنود الخدمة</a>.',
        buttonText: 'موافق'
    },
    printRiskScores: {
        tenyearRisk: ':مخاطر ASCVD',
        lifetimeRisk: ':مخاطر الإصابة طوال العمر',
        optimalRisk: ':المستوى المناسب من المخاطر'
    }
}

var formDataSpanish = {
    headerNavigation: {
        "estimateRisk": "Riesgo estimado",
        "summary": {
            "tabText": "Resumen",
            "viewSummaryLbl": "Ver resumen",
            "tabTooltip": "La sección de resumen estará disponible cuando se hayan introducido todas las características de los pacientes de entre 40 y 79 años."
        }
    },
    scorebar: {
        "intermediateText": "Intermedio",
        "invalidAgeMessage": 'Esta calculadora solo ofrece estimaciones del riesgo en 10 años para personas de entre 40 y 79 años. Haga <a data-open="young-recommendation-modal" id="modalLaucher"  class="link">clic aquí</a> para ver breves sugerencias para pacientes más jóvenes.',
        "currentRiskText": "<br>Riesgo actual de padecer ASCVD en un periodo de 10 años<sup>**</sup>",
        "lifetimeRisklbl": "Riesgo de padecer ASCVD en algún momento de la vida: &nbsp;&nbsp;",
        "lifetimeRiskText": "La calculadora del riesgo en algún momento de la vida solo ofrece estimaciones del riesgo en algún momento de la vida para personas de entre 20 y 59 años.",
        "optimalRisklbl": "Riesgo más bajo posible de padecer ASCVD:&nbsp;&nbsp;",
        "optimalRiskText": "La calculadora del riesgo óptimo de padecer ASCVD solo ofrece estimaciones del riesgo óptimo para personas de entre 40 y 79 años."
    },
    riskRanges: {
        "low": "Bajo",
        "borderline": "Escaso",
        "intermediate": "Intermedio",
        "high": "Alto",
        "na": "ND"
    },
    selectLanguageRow: {
        "selectLanguage": "Selección del idioma",
        "unitOfMeasure": "Unidad de medida",
        "resetAll": '<i class="fa fa-repeat"></i>Restablecer todo'
    },
    warningBox: {
        "welcomeText": "Le damos la bienvenida al Estimador multilingüe de riesgo de enfermedad cardiovascular aterosclerótica (ASCVD)",
        "termsOfServiceHeader": "Términos de servicio",
        "termsOfServiceText": '<p>Haga clic en la pestaña "Términos" que se encuentra en la parte inferior de la aplicación antes de usar el Estimador multilingüe de riesgo de enfermedad cardiovascular aterosclerótica (ASCVD) (“el Producto”) para leer todos los Términos de servicio y el Acuerdo de licencia (el “Acuerdo”) que rige el uso del Producto. El Acuerdo incluye, entre otros términos y condiciones detallados, varias exenciones de garantías de la American College of Cardiology Foundation (“ACCF”) y requiere que el usuario acepte la renuncia de ACCF de cualquier responsabilidad que surja en relación con su uso del Producto. Al usar este Producto, acepta respetar todos los términos y las condiciones expuestas en el Acurdo, incluidas tales exenciones y renuncias. Si no acepta los términos y las condiciones del Acuerdo, no podrá seguir usando el Producto.<br>El Acuerdo está sujeto a cambios de vez en cuando, y su uso continuado del Producto implica que acepta y acuerda respetar todos los términos revisados del Acuerdo.</p><p>Este Estimador de riesgo permite a los profesionales sanitarios y a los pacientes calcular los riesgos óptimos de padecer ASCVD en algún momento de la vida en 10 años. Use la información de esta herramienta como ayuda en conversaciones entre médicos y pacientes sobre intervenciones de riesgo y de disminución del riesgo.<br>Los resultados y las recomendaciones proporcionadas en esta aplicación tienen un fin informativo, pero no sustituyen a los criterios médicos. Las opciones de tratamiento deben ser individualizadas y determinarse tras una conversación entre el paciente y el profesional sanitario.</p>',
        "aboutAppText": '<p>Consulte la sección <b>Acerca de la aplicación</b> de esta aplicación para consultar una definición de los términos y obtener instrucciones adicionales.</p>',
        "notShowAgain": "No mostrar este mensaje de nuevo",
        "secondWarningBoxText": "La aplicación se debe usar únicamente para pacientes de prevención primaria (sin ASCVD)."
    },
    formLabelText: {
        "current_age": "Edad actual",
        "sex": "Sexo",
        "race": "Raza",
        "sys_blood_pressure": 'Tensión arterial sistólica <small class="pre">(mm Hg)</small>',
        "diastolic_blood_pressure": 'Tensión arterial diastólica <small class="pre">(mm Hg)</small>',
        "total_cholesterol": "Colesterol total",
        "hdl_cholesterol": "Colesterol HDL",
        "diabetes_history": "¿Antecedentes de diabetes?",
        "smoker": "¿Fumador?",
        "on_hypertension_treatment": "¿Recibe tratamiento para la hipertensión?",
        "cholesterol_us_unit": "(mg/dl)",
        "cholesterol_is_unit": "(mmol/l)",
        "hdl_cholesterol_us": 'Colesterol HDL <small class="pre">(mg/dl)</small>',
        "hdl_cholesterol_is": 'Colesterol HDL <small class="pre">(mmol/l)</small>',
        "total_cholesterol_us": 'Colesterol total <small class="pre">(mg/dl)</small>',
        "total_cholesterol_is": 'Colesterol total <small class="pre">(mmol/l)</small>'
    },
    formHints: {
        "current_age_hint": "La edad debe estar entre 20 y 79 años",
        "sys_blood_pressure_hint": "El valor debe estar entre 90 y 200",
        "diastolic_blood_pressure_hint": "El valor debe estar entre 60 y 130",
        "total_cholesterol_us_hint": "El valor debe estar entre 130 y 320",
        "total_cholesterol_is_hint": "El valor debe estar entre 3,367 y 8,288",
        "hdl_cholesterol_us_hint": "El valor debe estar entre 20 y 100",
        "hdl_cholesterol_is_hint": "El valor debe estar entre 0,518 y 2,59"
    },
    otherRaceNote: {
        "note": "<b>Nota:</b> el cálculo del riesgo en 10 años (ecuación de cohortes agrupadas) se ha desarrollado con estudios de estadounidenses, es decir, poblaciones de pacientes estadounidenses blancos y de raza negra y se usa como una aproximación del riesgo en otras etnias. Es posible que en estos cálculos se subestime el riesgo en 10 años y en algún momento de la vida en personas de ciertos grupos étnicos o determinadas razas, sobre todo indígenas estadounidenses, algunas asiáticas (p. ej., con ascendencia del sur de Asia) y algunas hispanas (p. ej., puertorriqueño). Además, es posible que se sobrestime el riesgo para otras, como algunas asiáticas (p. ej., con ascendencia del este de Asia) y algunas hispanas (p. ej., mexicanas). Como el uso principal de estas estimaciones de riesgo es que la conversación fundamental sobre la reducción del riesgo mediante cambios en el estilo de vida sea más sencilla, la imprecisión introducida es lo suficientemente pequeña como para que se pueda continuar con el asesoramiento sobre cambios en el estilo de vida a partir de estos resultados.",
    },
    estimateRiskFooter: {
        moreInfo: '<b>Para obtener más información sobre los datos introducidos y los cálculos que se usan en esta aplicación, consulte “Términos y conceptos” en la pestaña "Recursos" que aparece a continuación.</b><br/><sup>**</sup>ASCVD = enfermedad cardiovascular aterosclerótica<br/>El riesgo en 10 años de ASCVD se categoriza de la siguiente manera:<br/>Riesgo bajo (&lt;5 %)<br/>Riesgo escaso (de 5 % a 7,4 %)<br/>Riesgo intermedio (de 7,5 % a 19,9 %)<br/>Riesgo alto (≥20 %)<br/>',
        footerNavigations: {
            "resources": "Recursos",
            "terms": "Términos",
            "aboutShortText": "Acerca de",
            "aboutLongText": "Acerca de la aplicación"
        }
    },
    youngPatientRecommendationModal: {
        "title": "Sugerencias esenciales para pacientes de entre 20 y 39 años",
        "ldl_text": "Tratamiento para el colesterol de las LDL",
        "recommandationList": [
            'En pacientes sin hipercolesterolemia fenotípicamente grave:<br>-	Comenzar a evaluar el riesgo mediante la estimación del riesgo en algún momento de la vida. Si existen varios factores de riesgo, hay que hacer cambios en el estilo de vida.',
            'En pacientes con hipercolesterolemia moderada persistente (colesterol de las LDL 160-189 mg/dl [4,1-4,8 mmol/l]):<br>-	Se recomienda hacer cambios en el estilo de vida. Un tratamiento con estatinas a largo plazo sería beneficioso, sobre todo para aquellas personas con otros factores que aumenten el riesgo.',
            'En pacientes con hipercolesterolemia grave (colesterol de las LDL >190 mg/dl [≥4,9 mmol/l]):<br>-	Se recomienda hacer cambios en el estilo de vida.<br>- Se recomienda aplicar el tratamiento con estatinas a la dosis máxima tolerada.  (I, B-R)<br>-	Si la reducción recomendada de >50 % del colesterol de las LDL no se consigue, también se recomienda la posibilidad de añadir tratamientos sin estatinas.',
            'En pacientes con diabetes de larga duración (≥10 años de DT2, ≥20 años de DT1) o albuminuria (≥30 mcg albumina/mg creatinina), FGe &lt;60 ml/min/m2, retinopatía, neuropatía:<br>- Se recomienda hacer cambios en el estilo de vida.<br>-	Sería razonable iniciar el tratamiento con estatinas. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "Tratamiento para la tensión arterial",
        "blood_pressure_mgmt_text": "Se puede calcular el riesgo en algún momento de la vida de estos pacientes. Como las ecuaciones de cohortes agrupadas de ACC/AHA están validados actualmente para pacientes de entre 40 y 79 años, se puede usar una edad predeterminada de 40 para pacientes jóvenes adultos con el fin de consultar los consejos de la 2017 ACC/AHA High Blood Pressure Guideline (Guía ACC/AHA 2017 de hipertensión arterial), teniendo en cuenta que el riesgo específico calculado en 10 años y los consejos relacionados asociados a un umbral de riesgo son más aproximados para estos pacientes."
    },
    summary: {
        "visit_summary_header": "Resumen",
        "visit_summary_text": "A continuación tiene un resumen del riesgo del paciente según la información proporcionada. Consulte la sección Recursos para obtener recomendaciones detalladas y asesoramiento sobre el tratamiento.",
        "email_summary_lbl": "Enviar asesoramiento por correo electrónico",
        "print_summary_lbl": "Imprimir",
        inputs: {
            "input_lbl": "Datos introducidos",
            "sex_lbl": "Sexo: ",
            "race_lbl": "Raza: ",
            "values_lbl": "Valores",
            "followUpValue": "Actual",
            "age_lbl": "Edad",
            "total_cholestoral_lbl": "Colesterol total",
            "hdl_cholesterol_lbl": "Colesterol HDL",
            "diabities": "Diabetes:",
            "smoker_lbl": "Fumador",
            "hypertension_treatment_lbl": "Tratamiento para la hipertensión"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;Estimar riesgo',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>Exención de responsabilidad: los resultados y las recomendaciones proporcionadas en esta aplicación tienen un fin informativo, pero no sustituyen a los criterios médicos. Las opciones de tratamiento deben ser individualizadas y determinarse tras una conversación entre el paciente y el profesional sanitario.<br>Esta herramienta se ha traducido del inglés y se diseñó inicialmente para un público estadounidense, pero se puede usar como una aproximación del riesgo en otros grupos étnicos. Cuando utilice esta herramienta, siga su criterio médico a la hora de considerar el impacto de los factores culturales y socioeconómicos, además de la disponibilidad de los medicamentos.</p>'
    },
    sex: [{
        "label": "Hombre",
        "value": "Male"
    }, {
        "label": "Mujer",
        "value": "Female"
    }],
    diabetic: [{
        "label": "Sí",
        "value": "Yes"
    }, {
        "label": "No",
        "value": "No"
    }],
    smoker: [{
        "label": "Sí",
        "value": "Yes",
        "tooltip": "Fuma a diario o algunos días."
    }, {
        "label": "No",
        "value": "No",
        "tooltip": "No fuma o lleva al menos 7 días sin fumar."
    }],
    hypertension: [{
        "label": "Sí",
        "value": "Yes"
    }, {
        "label": "No",
        "value": "No"
    }],
    onStatin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    onAspirin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    visitType: [{
        "label": "Yes",
        "value": true
    }, {
        "label": "No",
        "value": false
    }],
    YesNoQuestion: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
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
        scorebar: {
            "text": "Factores de riesgo óptimos: colesterol total ≤170 mg/dl (4,40 mmol/l), colesterol de las HDL ≥50 mg/dl (1,30 mmol/l), TA sistólica ≤110 mm Hg, no tomar medicamentos para la hipertensión, no padecer diabetes, no fumar",
        }
    },
    race: [{
        "label": "Otro",
        "value": "Other"
    }, {
        "label": "De raza negra",
        "value": "African American/Black"
    }, {
        "label": "De raza blanca",
        "value": "White"
    }],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
        }],
        smokingSelect: [{
            'id': 0,
            'status': 'warning',
            'message': 'Seleccione un valor'
        }],
        sex: [{
            'status': 'warning',
            'message': 'Seleccione un valor'
        }],
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'Introduzca un valor'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Introduzca un valor que esté entre 20 y 79 años'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'Esta calculadora solo ofrece estimaciones del riesgo en 10 años para personas de entre 40 y 79 años.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'La calculadora del riesgo en algún momento de la vida solo ofrece estimaciones del riesgo en algún momento de la vida para personas de entre 20 y 59 años.'
        }],
        race: [{
            'status': 'warning',
            'message': 'Seleccione un valor'
        }, {
            'status': 'highlighted',
            'message': 'Lea el aviso de estimación que aparece a continuación'
        }],
        totalCholesterol: [{
            'status': 'warning',
            'message': 'Introduzca un valor'
        }, {
            'status': 'warning',
            'message': 'Introduzca un valor que esté entre 130 y 320 mg/dl'
        }, {
            'status': 'warning',
            'message': 'Introduzca un valor que esté entre 3,367 y 8,288 mmol/l'
        }, {
            'status': 'error',
            'message': 'Introduzca un valor con el formato xxx'
        }, {
            'status': 'error',
            'message': 'Introduzca un valor con el formato xxx.xxx o xxx,xxx'
        }],

        hdlCholesterol: [{
                'status': 'warning',
                'message': 'Introduzca un valor'
            },
            {
                'status': 'warning',
                'message': 'Introduzca un valor que esté entre 20 y 100 mg/dl'
            },
            {
                'status': 'warning',
                'message': 'Introduzca un valor que esté entre 0,518 y 2,59 mmol/l'
            },
            {
                'status': 'error',
                'message': 'Introduzca un valor con el formato xx o xxx'
            },
            {
                'status': 'error',
                'message': 'Introduzca un valor con el formato xxx.xxx o xxx,xxx'
            }
        ],
        bloodPresure: [{
            'status': 'warning',
            'message': 'Introduzca un valor'
        }, {
            'status': 'warning',
            'message': 'Introduzca un valor que esté entre 90 y 200 mm Hg.'
        }, {
            'status': 'error',
            'message': 'Introduzca un valor con el formato xxx'
        }],
        dbloodPresure: [{
            'status': 'warning',
            'message': 'Introduzca un valor'
        }, {
            'status': 'warning',
            'message': 'Introduzca un valor que esté entre 60 y 130 mm Hg'
        }, {
            'status': 'error',
            'message': 'Introduzca un valor con el formato xxx'
        }],
        allData: [{
            'status': 'warning',
            'message': 'Faltan datos. Se han destacado los datos introducidos que aparecen a continuación.'
        }, {
            'status': 'error',
            'message': 'Hay errores en la página. Se han destacado los datos introducidos que aparecen a continuación.'
        }],
        diabetic: [{
            'status': 'warning',
            'message': 'Seleccione un valor'
        }],
        smoker: [{
            'status': 'warning',
            'message': 'Seleccione un valor'
        }],
        hypertension: [{
            'status': 'warning',
            'message': 'Seleccione un valor'
        }, {
            'status': 'warning',
            'message': 'El riesgo de seguimiento se basa en la suposición de que las personas que tomen tratamiento para la hipertensión al inicio lo siguen necesitando.'
        }],

        /* No language translation required for commented code */
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineLdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 30-300 mg/dL'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 0.777-7.770 mmol/L'
            }, {
                'status': 'warning',
                'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },
    /* No language translation required for commented code */
    formToolTips: {
        smokerToolTip: {
            id: '0',
            htmlID: 'smokingInfo',
            text: 'Is smoker?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Definido como fumador de cigarrillos según la población de pacientes estudiada en ensayos clínicos relevantes. Use su criterio médico para aquellos pacientes que usan cigarrillos electrónicos o toman otros productos con tabaco.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        ldlToolTip: {
            id: '1',
            htmlID: 'ldlInfo',
            text: 'ldl < 190',
            value: '1',
            showInfo: true,
            tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2',
            htmlID: 'statinInfo',
            text: 'statin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3',
            htmlID: 'aspirinInfo',
            text: 'aspirin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        ageToolTip: {
            id: '0',
            htmlID: 'ageInfo',
            text: 'What is current age?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Para pacientes ≥80, se podría usar el valor predeterminado de 79 años porque el riesgo de ASCVD en 10 años para esta población normalmente es >10 %.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        previousvisitToolTip: {
            id: '0',
            htmlID: 'previousvisitInfo',
            text: 'Do you want to compare?',
            value: '1',
            showInfo: true,
            tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
        /* No language translation required for commented code */
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0',
            htmlID: 'currentAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Esta calculadora solo ofrece estimaciones del riesgo en 10 años para personas de entre 40 y 79 años.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        baselineAgeValToolTip: {
            id: '1',
            htmlID: 'baselineAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    treatmentOne: [{
            id: '0',
            htmlID: 't1QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking',
            gaLabel: 'Quit Smoking'
        },
        {
            id: '1',
            htmlID: 't1Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin',
            gaLabel: 'Add_Intensify Statin'
        },
        {
            id: '2',
            htmlID: 't1BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds',
            gaLabel: 'Add_Intensify BP Med'
        },
        {
            id: '3',
            htmlID: 't1Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin',
            gaLabel: 'Start_Cont Aspirin'
        }
    ],
    treatmentTwo: [{
            id: '0',
            htmlID: 't2QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't2Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't2BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't2Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
    ],
    treatmentThree: [{
            id: '0',
            htmlID: 't3QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't3Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't3BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't3Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        } /* No language translation required for commented code */
    },
    emailTemplate: {
        subjectLine: 'Resultados del riesgo de ASCVD #timestamp#',
        followuprisk: 'RIESGO DE ASCVD EN 10 AÑOS: #followuprisk#%0D%0A',
        lifetimerisk: 'Riesgo en algún momento de la vida: #lifetimerisk#%0D%0A',
        optimalrisk: 'Riesgo más bajo posible de padecer ASCVD: #optimalrisk#%0D%0A',
        patientinformation: '----INFORMACIÓN SOBRE EL PACIENTE----%0D%0ASexo: #sex#%0D%0ARaza: #race#%0D%0A',
        followup: 'Edad: #age#a',
        labs: '%0D%0ATA: #bloodPresure#/#dbloodPressure#%0D%0ACol. total: #totalCholesterol#%0D%0AHDL: #hdlCholesterol#',
        personalHistory: '%0D%0ADiabético: #diabetic#%0D%0AFumador: #smoker#%0D%0ATratamiento para la hipertensión: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>Este sitio usa cookies para mejorar su experiencia.</h1>Si sigue usando nuestro sitio, estará aceptando nuestra <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank">Política de cookies</a>, nuestra <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank">Política de privacidad</a> y nuestros <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank">Términos de servicio</a>.',
        buttonText: 'Aceptar'
    }
}

var formDataGerman = {
    headerNavigation: {
        "estimateRisk": "Risiko abschätzen",
        "summary": {
            "tabText": "Zusammenfassung",
            "viewSummaryLbl": "Zusammenfassung ansehen",
            "tabTooltip": "Die Zusammenfassung ist abrufbar, wenn alle Daten für Patienten im Alter von 40–79 Jahren eingegeben wurden."
        }
    },
    scorebar: {
        "intermediateText": "Mittel",
        "invalidAgeMessage": 'Dieser Rechner liefert 10-Jahres-Risikoschätzungen nur für Personen im Alter von 40 bis 79 Jahren. <a data-open="young-recommendation-modal" id="modalLaucher"  class="link">Klicken Sie hier</a>, um kurze Empfehlungen für jüngere Patienten zu sehen.',
        "currentRiskText": "Derzeitiges 10-Jahres-Risiko für <br>ASCVD<sup>**:</sup>",
        "lifetimeRisklbl": "Lebenslanges ASCVD-Risiko: &nbsp;&nbsp;",
        "lifetimeRiskText": "Der Lifetime Risk Calculator liefert nur Schätzungen für das lebenslange Risiko von Personen im Alter von 20 bis 59 Jahren.",
        "optimalRisklbl": "Optimales ASCVD-Risiko: &nbsp;&nbsp;",
        "optimalRiskText": "Der Optimal ASCVD Risk Calculator bietet optimale Risikoschätzungen nur für Personen im Alter von 40 bis 79 Jahren."
    },
    riskRanges: {
        "low": "Niedrig",
        "borderline": "Grenzwertig",
        "intermediate": "Mittel",
        "high": "Hoch",
        "na": "N. z."
    },
    selectLanguageRow: {
        "selectLanguage": "Sprachauswahl",
        "unitOfMeasure": "Maßeinheit",
        "resetAll": '<i class="fa fa-repeat"></i>Alle zurücksetzen'
    },
    warningBox: {
        "welcomeText": "Willkommen beim Multilingual ASCVD Risk Estimator (Risiko-Schätzer)",
        "termsOfServiceHeader": "Nutzungsbedingungen",
        "termsOfServiceText": '<p>Klicken Sie unten in der App auf das Feld Bedingungen, bevor Sie den Multilingual ASCVD Risk Estimator („das Produkt“) verwenden, um die vollständige Service- und Lizenzvereinbarung (die „Vereinbarung“) zu lesen, die die Verwendung des Produkts regelt. Die Vereinbarung enthält neben anderen detaillierten Bedingungen bestimmte Gewährleistungsausschlüsse der American College of Cardiology Foundation („ACCF“) und verpflichtet die Benutzer, ACCF von jeglicher Haftung im Zusammenhang mit Ihrer Verwendung des Produkts freizustellen. Durch die Verwendung des Produkts erklären Sie sich mit allen in der Vereinbarung festgelegten Bedingungen einverstanden, einschließlich der Haftungsausschlüsse und Freigaben. Wenn Sie die Bedingungen der Vereinbarung nicht akzeptieren, dürfen Sie das Produkt nicht verwenden.<br> Die Vereinbarung kann jederzeit geändert werden. Mit der Weiterverwendung des Produktes stimmen Sie den Veränderungen zu und erklären gleichzeitig Ihr Einverständnis, weiterhin an die vertraglichen Bedingungen gebunden zu sein.</p><p>Mit diesem Risk Estimator können Gesundheitsdienstleister und Patienten das 10-Jahres-Risiko sowie das lebenslange Risiko für atherosklerotische kardiovaskuläre Erkrankungen (ASCVD) bewerten (berechnetes Risiko sowie Risiko bei optimalen Risikofaktoren). Verwenden Sie die Informationen in diesem Tool, um Gespräche zwischen Arzt und Patient über Risiken und risikosenkende Interventionen zu erleichtern.<br>Die Ergebnisse und Empfehlungen dieser Anwendung sollen informieren, aber nicht die klinische Beurteilung ersetzen. Therapeutische Optionen sollten individualisiert und nach dem Gespräch zwischen Arzt und Patient entschieden werden.</p>',
        "aboutAppText": '<p>Gehen Sie zur Seite <b>App-Infos</b> in dieser App bzgl. Begriffsdefinitionen und zusätzlichen Anweisungen.',
        "notShowAgain": "Nicht mehr anzeigen",
        "secondWarningBoxText": "Die App sollte nur für Primärpräventionspatienten (ohne ASCVD) verwendet werden."
    },
    formLabelText: {
        "current_age": "Aktuelles Alter",
        "sex": "Geschlecht",
        "race": "Rasse",
        "sys_blood_pressure": 'Systolischer Blutdruck <small class="pre">(mmHg)</small>',
        "diastolic_blood_pressure": 'Diastolischer Blutdruck <small class="pre">(mmHg)</small>',
        "total_cholesterol": "Gesamtcholesterin",
        "hdl_cholesterol": "HDL-Cholesterin",
        "diabetes_history": "Vorgeschichte von Diabetes?",
        "smoker": "Raucher*in?",
        "on_hypertension_treatment": "In Hypertonie-Behandlung?",
        "cholesterol_us_unit": "(mg/dl)",
        "cholesterol_is_unit": "(mmol/l)",
        "hdl_cholesterol_us": 'HDL-Cholesterin <small class="pre">(mg/dl)</small>',
        "hdl_cholesterol_is": 'HDL-Cholesterin <small class="pre">(mmol/l)</small>',
        "total_cholesterol_us": 'Gesamtcholesterin <small class="pre">(mg/dl)</small>',
        "total_cholesterol_is": 'Gesamtcholesterin <small class="pre">(mmol/l)</small>'
    },
    formHints: {
        "current_age_hint": "Alter muss zwischen 20–79 sein",
        "sys_blood_pressure_hint": "Wert muss zwischen 90–200 liegen",
        "diastolic_blood_pressure_hint": "Wert muss zwischen 60–130 liegen",
        "total_cholesterol_us_hint": "Wert muss zwischen 130–320 liegen",
        "total_cholesterol_is_hint": "Der Wert muss zwischen 3,367–8,288 liegen",
        "hdl_cholesterol_us_hint": "Der Wert muss zwischen 20–100 liegen",
        "hdl_cholesterol_is_hint": "Der Wert muss zwischen 0,518–2,59 liegen"
    },
    otherRaceNote: {
        "note": "<b>Hinweis:</b> Die 10-Jahres-Risikoberechnung (gepoolte Kohortengleichung) wurde auf der Grundlage von Studien mit Amerikanern, und zwar weißen und afroamerikanischen Patientenpopulationen, entwickelt und wird als Risiko-Approximation bei anderen Ethnien verwendet. Diese Schätzungen können das 10-Jahres- und lebenslange Risiko für Personen aus einigen Rassen/ethnischen Gruppen, insbesondere amerikanische Ureinwohner, einige Asiaten (z. B. südasiatischer Abstammung) und einige Hispanoamerikaner (z. B. Puerto-Ricaner), unterschätzen. Auch könnte das Risiko für andere überschätzt werden, darunter einige Asiaten (z. B. ostasiatischer Abstammung) und einige Hispanoamerikaner (z. B. Mexikaner). Da diese Risikoschätzungen hauptsächlich dazu dienen, die wichtige Diskussion über die Risikoreduzierung durch Lebensstiländerungen zu erleichtern, ist die eingeführte Ungenauigkeit gering genug, um die Fortsetzung der durch diese Ergebnisse informierten Beratung zur Änderung der Lebensweise zu rechtfertigen.",
    },
    estimateRiskFooter: {
        moreInfo: '<b>Weitere Informationen zu den in dieser App verwendeten Eingabedaten und Berechnungen finden Sie unter „Bestimmungen und Konzepte“ in der unten stehenden Registerkarte „Ressourcen“.</b><br/><sup>**ASCVD = atherosklerotische kardiovaskuläre Erkrankung<br/>10-Jahres-Risiko für ASCVD wird kategorisiert als:<br/>Niedriges Risiko (&lt;5 %)<br/>Grenzwertiges Risiko (5 bis 7,4 %)<br/>Mittleres Risiko (7,5 bis 19,9 %)<br/>Hohes Risiko (≥20 %)<br/>',
        footerNavigations: {
            "resources": "Ressourcen",
            "terms": "Bestimmungen",
            "aboutShortText": "Über",
            "aboutLongText": "Über diese App"
        }
    },
    youngPatientRecommendationModal: {
        "title": "Wichtige Empfehlungen für Patienten im Alter von 20–39 Jahren",
        "ldl_text": "LDL-C-Management",
        "recommandationList": [
            'Bei Patienten ohne phänotypisch schwere Hypercholesterinämie:<br>-	Risikobewertung durch Schätzung des lebenslangen Risikos beginnen. Mehrere Risikofaktoren deuten auf eine Lebensstilintervention hin.',
            'Bei Patienten mit persistierender, mäßiger Hypercholesterinämie (LDL-C 160-189 mg/dl (4,1 bis 4,8 mmol/l)):<br>-	Lifestyle-Interventionen sind indiziert und eine langfristige Statin-Therapie wäre von Vorteil, insbesondere für Patienten mit anderen Risikofaktoren.',
            'Bei Patienten mit schwerer Hypercholesterinämie (LDL-C >190 mg/dl (≥ 4,9 mmol/l)):<br>-	Lifestyle-Interventionen sind indiziert.<br>- Maximal verträgliche Statin-Therapie wird empfohlen.  (I, B-R)<br>-	Wenn die empfohlene LDL-C-Reduktion von > 50 % nicht erreicht wird, wird auch eine mögliche Zugabe von nicht statinhaltigen Therapien empfohlen.',
            'Bei Patienten mit Diabetes über lange zeit (≥ 10 Jahre T2D, ≥ 20 Jahre T1D) und/oder Albuminurie (≥ 30 mcg Albumin/mg Kreatinin), eGFR &lt;60 ml/min/m2, Retinopathie, Neuropathie:<br>	- Lifestyle-Interventionen sind indiziert.<br>-Es kann sinnvoll sein, eine Statintherapie einzuleiten. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "Blutdruckmanagement",
        "blood_pressure_mgmt_text": "Für diese Patienten kann das lebenslange Risiko berechnet werden. Da die gepoolten ACC/AHA-Kohortengleichungen derzeit für Patienten im Alter von 40 bis 79 Jahren validiert sind, kann für jüngere erwachsene Patienten ein Standardalter von 40 Jahren verwendet werden, um bestimmte Ratschläge aus der  2017 ACC/AHA High Blood Pressure Guideline anzuzeigen. Dabei sollte man sich bewusst sein, dass das spezifische berechnete 10-Jahres-Risiko und die damit verbundenen Ratschläge, die an einen Risikoschwellenwert gebunden sind, für diese Patienten approximativer sind."
    },
    summary: {
        "visit_summary_header": "Zusammenfassung",
        "visit_summary_text": "Im Folgenden finden Sie eine Zusammenfassung des Patientenrisikos auf der Grundlage der bereitgestellten Daten. Ausführliche Empfehlungen und Behandlungsempfehlungen finden Sie im Abschnitt „Ressourcen“.",
        "email_summary_lbl": "E-Mail-Beratung",
        "print_summary_lbl": "Drucken",
        inputs: {
            "input_lbl": "Eingabedaten",
            "sex_lbl": "Geschlecht: ",
            "race_lbl": "Rasse: ",
            "values_lbl": "Werte",
            "followUpValue": "Aktuell",
            "age_lbl": "Alter:",
            "total_cholestoral_lbl": "Gesamtcholesterin",
            "hdl_cholesterol_lbl": "HDL-Cholesterin",
            "diabities": "Diabetes:",
            "smoker_lbl": "Raucher:",
            "hypertension_treatment_lbl": "In Hypertonie-Behandlung:"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;Risiko abschätzen',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>Haftungsausschluss: Die in dieser Anwendung bereitgestellten Ergebnisse und Empfehlungen dienen der Information, ersetzen aber nicht die Beurteilung durch einen Arzt. Die Therapieoptionen sollten nach einem Gespräch zwischen Patienten und Arzt individualisiert festgelegt werden. <br>Dieses Tool ist aus dem Englischen übersetzt und wurde ursprünglich für ein nordamerikanisches Publikum entwickelt, kann aber immer noch als Risiko-Approximation bei anderen Ethnien verwendet werden. Verwenden Sie beim Einsatz dieses Tools Ihr klinisches Urteilsvermögen, wenn Sie die Auswirkungen kultureller und sozioökonomischer Faktoren sowie die Verfügbarkeit von Arzneimitteln abwägen.</p>'
    },
    sex: [{
        "label": "Männlich",
        "value": "Male"
    }, {
        "label": "Weiblich",
        "value": "Female"
    }],
    diabetic: [{
        "label": "Ja",
        "value": "Yes"
    }, {
        "label": "Nein",
        "value": "No"
    }],
    smoker: [{
        "label": "Ja",
        "value": "Yes",
        "tooltip": "Raucht jeden Tag oder an einigen Tagen."
    }, {
        "label": "Nein",
        "value": "No",
        "tooltip": "Raucht nicht oder hat seit mindestens 7 Tagen nicht geraucht."
    }],
    hypertension: [{
        "label": "Ja",
        "value": "Yes"
    }, {
        "label": "Nein",
        "value": "No"
    }],
    onStatin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    onAspirin: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
    visitType: [{
        "label": "Yes",
        "value": true
    }, {
        "label": "No",
        "value": false
    }],
    YesNoQuestion: [{
        "label": "Yes",
        "value": "true"
    }, {
        "label": "No",
        "value": "false"
    }],
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
        scorebar: {
            "text": "Zu den optimalen Risikofaktoren gehören: Gesamtcholesterin von ≤ 170 mg/dl (4,40 mmol/l), HDL-Cholesterin von ≥ 50 mg/dl (1,30 mmol/l), systolischer Blutdruck von ≤ 110 mmHg, keine Medikamente gegen Hypertonie, kein Diabetiker, Nichtraucher",
        }
    },
    race: [{
        "label": "Andere",
        "value": "Other"
    }, {
        "label": "Afroamerikanisch/Schwarz",
        "value": "African American/Black"
    }, {
        "label": "Weiß",
        "value": "White"
    }],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
        }],
        smokingSelect: [{
            'id': 0,
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }],
        sex: [{
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }],
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'Geben Sie einen Wert ein'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Bitte geben Sie einen Wert zwischen 20 und 79 Jahren ein'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'Dieser Rechner liefert nur 10-Jahres-Risikoschätzungen für Personen im Alter von 40 bis 79 Jahren.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Der Lifetime Risk Calculator liefert nur Schätzungen für das lebenslange Risiko von Personen im Alter von 20 bis 59 Jahren.'
        }],
        race: [{
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }, {
            'status': 'highlighted',
            'message': 'Siehe die Warnung zur Schätzung unten'
        }],
        totalCholesterol: [{
            'status': 'warning',
            'message': 'Geben Sie einen Wert ein'
        }, {
            'status': 'warning',
            'message': 'Geben Sie einen Wert zwischen 130 und 320 mg/dl ein'
        }, {
            'status': 'warning',
            'message': 'Bitte geben Sie einen Wert zwischen 3,367 und 8,288 mmol/l ein'
        }, {
            'status': 'error',
            'message': 'Bitte geben Sie einen Wert im Format xxx ein'
        }, {
            'status': 'error',
            'message': 'Bitte geben Sie einen Wert im Format xxx.xxx oder xxx,xxx ein'
        }],
        hdlCholesterol: [{
                'status': 'warning',
                'message': 'Geben Sie einen Wert ein'
            },
            {
                'status': 'warning',
                'message': 'Bitte geben Sie einen Wert zwischen 20 und 100 mg/dl ein'
            },
            {
                'status': 'warning',
                'message': 'Bitte geben Sie einen Wert zwischen 0,518 und 2,59 mmol/l ein'
            },
            {
                'status': 'error',
                'message': 'Bitte geben Sie einen Wert im Format xx oder xxx ein'
            },
            {
                'status': 'error',
                'message': 'Bitte geben Sie einen Wert im Format xxx.xxx oder xxx,xxx ein'
            } 
        ],
        bloodPresure: [{
            'status': 'warning',
            'message': 'Geben Sie einen Wert ein'
        }, {
            'status': 'warning',
            'message': 'Bitte geben Sie einen Wert zwischen 90 und 200 mmHg ein'
        }, {
            'status': 'error',
            'message': 'Bitte geben Sie einen Wert im Format xxx ein'
        }],
        dbloodPresure: [{
            'status': 'warning',
            'message': 'Geben Sie einen Wert ein'
        }, {
            'status': 'warning',
            'message': 'Bitte geben Sie einen Wert zwischen 60 und 130 mmHg ein'
        }, {
            'status': 'error',
            'message': 'Bitte geben Sie einen Wert im Format xxx ein'
        }],
        allData: [{
            'status': 'warning',
            'message': 'Es fehlen Angaben. Die folgenden Eingaben wurden hervorgehoben.'
        }, {
            'status': 'error',
            'message': 'Auf der Seite sind Fehler aufgetreten. Die folgenden Eingaben wurden hervorgehoben.'
        }],
        diabetic: [{
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }],
        smoker: [{
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }],
        hypertension: [{
            'status': 'warning',
            'message': 'Wählen Sie einen Wert aus'
        }, {
            'status': 'warning',
            'message': 'Das Follow-up-Risiko basiert auf der Annahme, dass Patienten, die zu Beginn (Baseline) einer Hypertonie-Behandlung unterzogen wurden, weiterhin eine Hypertonie-Behandlung benötigen.'
        }],

        /* No language translation required for commented code */
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineLdlCholesterol: [{
                'status': 'warning',
                'message': 'Enter a value'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 30-300 mg/dL'
            }, {
                'status': 'warning',
                'message': 'Please enter a value between 0.777-7.770 mmol/L'
            }, {
                'status': 'warning',
                'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }
        ],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },
    /* No language translation required for commented code */
    formToolTips: {
        smokerToolTip: {
            id: '0',
            htmlID: 'smokingInfo',
            text: 'Is smoker?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Definiert als Zigarettenraucher basierend auf der Patientenpopulation, die in relevanten klinischen Studien untersucht wurde. Bei Patienten, die E-Zigaretten und andere Tabakerzeugnisse konsumieren, ist das Urteil des Arztes zu verwenden.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        ldlToolTip: {
            id: '1',
            htmlID: 'ldlInfo',
            text: 'ldl < 190',
            value: '1',
            showInfo: true,
            tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2',
            htmlID: 'statinInfo',
            text: 'statin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3',
            htmlID: 'aspirinInfo',
            text: 'aspirin yes no',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        ageToolTip: {
            id: '0',
            htmlID: 'ageInfo',
            text: 'What is current age?',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Bei Patienten ≥ 80 J. kann ein Standardwert von 79 J. vernünftigerweise verwendet werden, da das 10-Jahres-Risiko für ASCVD für diese Population im Allgemeinen > 10 % beträgt.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        previousvisitToolTip: {
            id: '0',
            htmlID: 'previousvisitInfo',
            text: 'Do you want to compare?',
            value: '1',
            showInfo: true,
            tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        } /* No language translation required for commented code */
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0',
            htmlID: 'currentAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Dieser Rechner liefert nur 10-Jahres-Risikoschätzungen für Personen im Alter von 40 bis 79 Jahren.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        },
        /* No language translation required for commented code */
        baselineAgeValToolTip: {
            id: '1',
            htmlID: 'baselineAgeInfo',
            text: '',
            value: '1',
            showInfo: true,
            tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true)
        }
    },

    treatmentOne: [{
            id: '0',
            htmlID: 't1QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking',
            gaLabel: 'Quit Smoking'
        },
        {
            id: '1',
            htmlID: 't1Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin',
            gaLabel: 'Add_Intensify Statin'
        },
        {
            id: '2',
            htmlID: 't1BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds',
            gaLabel: 'Add_Intensify BP Med'
        },
        {
            id: '3',
            htmlID: 't1Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin',
            gaLabel: 'Start_Cont Aspirin'
        }
    ],
    treatmentTwo: [{
            id: '0',
            htmlID: 't2QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't2Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't2BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't2Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
    ],
    treatmentThree: [{
            id: '0',
            htmlID: 't3QuitSmoke',
            text: 'Quit Smoking',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.',
            therapyText: 'Smoking Cessation',
            responsiveClass: 'small-12 medium-6 large-2',
            enable: ko.observable(true),
            chartText: 'no&nbsp;smoking'
        },
        {
            id: '1',
            htmlID: 't3Statin',
            text: 'Start/Intensify Statin',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ',
            therapyText: 'Statin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'statin'
        },
        {
            id: '2',
            htmlID: 't3BP',
            text: 'Start/Add Blood Pressure Medication(s)',
            value: '1',
            showInfo: true,
            tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.',
            therapyText: 'BP Medication',
            responsiveClass: 'small-12 medium-6 large-4',
            enable: ko.observable(true),
            chartText: 'BP meds'
        },
        {
            id: '3',
            htmlID: 't3Aspirin',
            text: 'Start/continue aspirin therapy',
            value: '1',
            showInfo: true,
            tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383',
            therapyText: 'Aspirin Therapy',
            responsiveClass: 'small-12 medium-6 large-3',
            enable: ko.observable(true),
            chartText: 'aspirin'
        }
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        } /* No language translation required for commented code */
    },
    emailTemplate: {
        subjectLine: 'Ergebnisse der ASCVD-Risikobewertung #timestamp#',
        followuprisk: '10-Jahres-Risiko für ASCVD: #followuprisk#%0D%0A',
        lifetimerisk: 'Lebenslanges Risiko: #lifetimerisk#%0D%0A',
        optimalrisk: '"Optimales" Risiko: #optimalrisk#%0D%0A',
        patientinformation: '----PATIENTENINFORMATIONEN----%0D%0AGeschlecht: #sex#%0D%0ARasse: #race#%0D%0A',
        followup: 'Alter: #age# J.',
        labs: '%0D%0ABD: #bloodPresure#/#dbloodPressure#%0D%0AGesamtchol.: #totalCholesterol#%0D%0AHDL: #hdlCholesterol#',
        personalHistory: '%0D%0ADiabetiker: #diabetic#%0D%0ARaucher: #smoker#%0D%0AHTN-Behandlung: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.</h1> Durch die fortgesetzte Nutzung unserer Website erklären Sie sich mit unserer <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank"> Cookie-Richtlinie</a> und <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank"> Datenschutzrichtlinie</a> sowie unseren <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank"> Nutzungsbedingungen</a> einverstanden.',
        buttonText: 'OK'
    }
}

var formDataIndonesian = {
    headerNavigation: {
        "estimateRisk": "Estimasi Risiko",
        "summary": {
            "tabText": "Ringkasan",
            "viewSummaryLbl": "Lihat Ringkasan",
            "tabTooltip": "Bagian ringkasan hanya dapat diakses apabila seluruh karakteristik untuk pasien usia 40-79 tahun telah dimasukkan."
        }
    },
    scorebar: {
        "intermediateText": "Menengah",
        "invalidAgeMessage": 'Kalkulator ini hanya memberikan estimasi risiko 10 tahun untuk individu usia 40 hingga 79 tahun.&nbsp;<a data-open="young-recommendation-modal" id="modalLaucher"  class="link">Klik di sini</a> untuk melihat saran singkat untuk pasien yang lebih muda.',
        "currentRiskText": "Risiko ASCVD<br>10 Tahun Saat Ini<sup>**</sup>",
        "lifetimeRisklbl": "Risiko ASCVD Seumur Hidup: &nbsp;&nbsp;",
        "lifetimeRiskText": "Kalkulator Risiko Seumur Hidup hanya memberikan estimasi risiko seumur hidup untuk individu usia 20 hingga 59 tahun.",
        "optimalRisklbl": "Risiko ASCVD Optimal: &nbsp;&nbsp;",
        "optimalRiskText": "Kalkulator Risiko ASCVD Optimal hanya memberikan estimasi risiko optimal untuk individu usia 40 hingga 79 tahun."
    },
    riskRanges: {
      "low":"Rendah",
      "borderline":"Ambang",
      "intermediate":"Menengah",
      "high":"Tinggi",
      "na":"Tidak tersedia"
    },
    selectLanguageRow: {
        "selectLanguage": "Pilihan Bahasa",
        "unitOfMeasure": "Satuan Ukuran",
        "resetAll": '<i class="fa fa-repeat"></i>Setel Ulang Semua'
    },
    warningBox: {
        "welcomeText": "Selamat Datang di Multilingual ASCVD Risk Estimator",
        "termsOfServiceHeader": "Ketentuan Layanan",
        "termsOfServiceText": '<p>Klik tab Ketentuan di bagian bawah aplikasi sebelum menggunakan Multilingual ASCVD Risk Estimator ("Produk") untuk membaca seluruh Ketentuan Layanan dan Perjanjian Lisensi ("Perjanjian") yang mengatur penggunaan Produk ini. Perjanjian ini mencakup syarat dan ketentuan terperinci, serta penafian garansi tertentu oleh American College of Cardiology Foundation ("ACCF"). Perjanjian ini juga mewajibkan pengguna untuk membebaskan ACCF dari tanggung jawab apa pun yang ditimbulkan oleh penggunaan Produk ini. Dengan menggunakan Produk ini, berarti Anda menerima dan menyetujui untuk terikat oleh seluruh syarat dan ketentuan yang telah termaktub di dalam Perjanjian ini, termasuk penafian dan pembebasan tanggung jawab. Anda hanya diperkenankan untuk terus menggunakan Produk ini jika menerima syarat dan ketentuan Perjanjian ini.<br>Perjanjian ini bisa berubah dari waktu ke waktu. Dengan terus menggunakan Produk ini, berarti Anda menerima dan setuju untuk terikat oleh ketentuan apa pun yang telah direvisi dalam Perjanjian ini.</p><p>Risk Estimator ini memungkinkan penyedia layanan kesehatan dan pasien untuk menghitung estimasi risiko 10 tahun, risiko optimal, dan risiko seumur hidup terhadap penyakit kardiovaskular aterosklerosis (ASCVD). Gunakan informasi dalam alat ini untuk membantu dokter dan pasien mendiskusikan risiko dan intervensi untuk menurunkan risiko.<br>Hasil rekomendasi aplikasi ini dimaksudkan untuk sekadar memberi informasi, bukan menggantikan penilaian klinis. Opsi terapeutik sebaiknya disesuaikan dengan tiap pasien dan ditentukan setelah ada diskusi antara pasien dengan penyedia layanan kesehatan.</p>',
        "aboutAppText": '<p>Buka layar <b>Tentang Aplikasi Ini</b> di aplikasi ini untuk membaca definisi ketentuan dan instruksi tambahan.</p>',
        "notShowAgain": "Jangan perlihatkan lagi",
        "secondWarningBoxText": "Aplikasi sebaiknya hanya digunakan untuk pasien kategori pencegahan primer (tanpa ASCVD)."
    },
    formLabelText: {
        "current_age": "Usia Saat Ini",
        "sex": "Jenis Kelamin",
        "race": "Ras",
        "sys_blood_pressure": 'Tekanan Darah Sistolik <small class="pre">(mm Hg)</small>',
        "diastolic_blood_pressure": 'Tekanan Darah Diastolik <small class="pre">(mm Hg)</small>',
        "total_cholesterol": "Kolesterol Total",
        "hdl_cholesterol": "Kolesterol HDL",
        "diabetes_history": "Riwayat Diabetes?",
        "smoker": "Perokok?",
        "on_hypertension_treatment": "Dalam Perawatan Hipertensi?",
        "cholesterol_us_unit": "(mg/dL)",
        "cholesterol_is_unit": "(mmol/L)",
        "hdl_cholesterol_us":'Kolesterol HDL <small class="pre">(mg/dL)</small>',
        "hdl_cholesterol_is":'Kolesterol HDL <small class="pre">(mmol/L)</small>',
        "total_cholesterol_us":'Kolesterol Total <small class="pre">(mg/dL)</small>',
        "total_cholesterol_is":'Kolesterol Total <small class="pre">(mmol/L)</small>'
    },
    formHints: {
        "current_age_hint": "Usia harus antara 20-79",
        "sys_blood_pressure_hint": "Nilai harus antara 90-200",
        "diastolic_blood_pressure_hint": "Nilai harus antara 60-130",
        "total_cholesterol_us_hint": "Nilai harus antara 130-320",
        "total_cholesterol_is_hint": "Nilai harus antara 3,367-8,288",
        "hdl_cholesterol_us_hint": "Nilai harus antara 20-100",
        "hdl_cholesterol_is_hint": "Nilai harus antara 0,518-2,59"
    },
    otherRaceNote: {
        "note": "<b>Catatan:</b> Perhitungan risiko 10 tahun (Persamaan Kohort Gabungan) dikembangkan berdasarkan studi terhadap populasi pasien orang kulit putih (Amerika) dan Afrika-Amerika, serta digunakan untuk menghitung estimasi risiko penyakit pada etnis lainnya. Jika dibandingkan dengan nilai sebenarnya, estimasi risiko 10 tahun dan seumur hidup alat ini mungkin lebih rendah untuk orang dari kelompok etnis/ras tertentu, khususnya orang Amerika asli, Asia tertentu (mis. keturunan Asia Selatan), dan Hispanik tertentu (mis. orang Puerto Riko). Sementara itu, estimasi tersebut mungkin lebih tinggi untuk etnis/ras lainnya, termasuk Asia tertentu (mis. keturunan Asia Timur) dan Hispanik tertentu (mis. orang Meksiko). Mengingat estimasi risiko tersebut digunakan utamanya untuk memfasilitasi diskusi yang sangat penting terkait penurunan risiko melalui perubahan gaya hidup, ketidakpresisian estimasi dari alat ini cukup rendah sehingga pelaksanaan konseling perubahan gaya hidup berdasarkan hasil estimasi tersebut layak dilakukan.",
    },
    estimateRiskFooter: {
        moreInfo: '<b>Untuk informasi lebih lanjut tentang input dan perhitungan yang digunakan dalam aplikasi ini, lihat "Istilah dan Konsep dalam Aplikasi Ini" di tab Sumber Informasi di bawah ini.</b><br/><sup>**</sup>ASCVD = penyakit kardiovaskular aterosklerosis</br>Risiko 10 tahun untuk ASCVD dikategorikan sebagai:<br/>Risiko rendah (&lt;5%)<br/>Risiko ambang (5% hingga 7,4%)<br/>Risiko menengah (7,5% hingga 19,9%)<br/>Risiko tinggi (≥ 20%)<br/>',
        footerNavigations: {
            "resources": "Sumber Informasi",
            "terms": "Ketentuan",
            "aboutShortText": "Tentang",
            "aboutLongText": "Tentang Aplikasi Ini"
        }
    },
    youngPatientRecommendationModal: {
        "title": "Saran Utama untuk Pasien Usia 20-39 Tahun",
        "ldl_text": "Manajemen LDL-C",
        "recommandationList": [
            'Pada pasien tanpa hiperkolesterolemia berat secara fenotipik:<br>-	Mulai penilaian risiko dengan menghitung estimasi risiko seumur hidup. Adanya beberapa faktor risiko mengindikasikan kebutuhan intervensi gaya hidup.',
            'Pada pasien dengan hiperkolesterolemia sedang dan persisten (LDL-C 160-189 mg/dL (4,1-4,8 mmol/L)):<br>-	Mengindikasikan perlunya intervensi gaya hidup, terapi statin jangka panjang akan bermanfaat, terutama bagi orang dengan faktor peningkat risiko lainnya.',
            'Pada pasien dengan hiperkolesterolemia berat (LDL-C > 190 mg/dL (≥ 4,9 mmol/L)):<br>-	Mengindikasikan perlunya intervensi gaya hidup.<br>- Direkomendasikan untuk menjalani terapi statin yang dapat ditoleransi secara maksimum.  (I, B-R)<br>-	Jika rekomendasi penurunan LDL-C sebesar > 50% tidak tercapai, kemungkinan penambahan terapi non-statin juga direkomendasikan.',
            'Pada pasien penderita diabetes, baik jangka panjang (≥ 10 tahun untuk DT2, ≥ 20 tahun untuk DT1), dan/atau albuminuria (≥ 30 mcg albumin/mg kreatinin), eGFR &lt;60 mL/mnt/m2, retinopati, neuropati:<br>- Mengindikasikan perlunya Intervensi gaya hidup.<br>-	Inisiasi terapi statin mungkin layak dilakukan. (IIb, C-LD)'
        ],
        "blood_pressure_mgmt_lbl": "Manajemen Tekanan Darah",
        "blood_pressure_mgmt_text": "Risiko seumur hidup dapat dihitung untuk pasien-pasien ini. Karena persamaan kohort gabungan ACC/AHA saat ini sudah divalidasi untuk pasien usia 40-79 tahun, usia default 40 tahun dapat digunakan untuk pasien dewasa muda guna melihat anjuran tertentu dari 2017 ACC/AHA High Blood Pressure Guideline, dengan menyadari bahwa risiko 10 tahun yang dihitung dan anjuran khusus terkait ambang batas risiko merupakan perkiraan lebih lanjut untuk pasien-pasien ini."
    },
    summary: {
        "visit_summary_header": "Ringkasan",
        "visit_summary_text": "Berikut adalah ringkasan risiko pasien berdasarkan data yang disediakan. Lihat Sumber Informasi untuk detail rekomendasi dan anjuran perawatan.",
        "email_summary_lbl": "E-mail Anjuran",
        "print_summary_lbl": "Cetak",
        inputs: {
            "input_lbl": "Input",
            "sex_lbl": "Jenis Kelamin: ",
            "race_lbl": "Ras: ",
            "values_lbl": "Nilai",
            "followUpValue": "Saat Ini",
            "age_lbl": "Usia:",
            "total_cholestoral_lbl": "Kolesterol Total",
            "hdl_cholesterol_lbl": "Kolesterol HDL",
            "diabities": "Diabetes:",
            "smoker_lbl": "Perokok:",
            "hypertension_treatment_lbl": "Perawatan Hipertensi:"
        },
        "estimate_risk_button": '<i class="fa fa-arrow-circle-left fa-6"></i>&nbsp;&nbsp;Estimasi Risiko',
        "disclaimer": '<p class="italic disclaimer-print" id="disclaimer-print"><sup>*</sup>Penafian: Hasil dan rekomendasi aplikasi ini dimaksudkan sekadar untuk memberi informasi, bukan menggantikan penilaian klinis. Opsi terapeutik sebaiknya disesuaikan dengan tiap pasien dan ditentukan setelah ada diskusi antara pasien dengan penyedia layanan kesehatan. <br>Alat ini diterjemahkan dari bahasa Inggris dan awalnya didesain bagi orang Amerika Utara, tetapi masih dapat digunakan untuk menghitung estimasi risiko bagi etnis lainnya. Gunakan penilaian klinis saat menimbang dampak dari faktor budaya, sosial, dan ekonomi, serta ketersediaan obat saat menggunakan alat ini.</p>'
    },
    sex: [
        {
            "label": "Laki-laki",
            "value": "Male"
        }, {
            "label": "Perempuan",
            "value": "Female"
        }
    ],
    diabetic: [
        {
            "label": "Ya",
            "value": "Yes"
        }, {
            "label": "Tidak",
            "value": "No"
        }
    ],
    smoker: [
        {
            "label": "Ya",
            "value": "Yes",
            "tooltip": "Merokok setiap hari atau kadang-kadang."
        }, {
            "label": "Tidak",
            "value": "No",
            "tooltip": "Tidak merokok atau sudah berhenti merokok selama minimum 7 hari."
        }
    ],
    hypertension: [
        {
            "label": "Ya",
            "value": "Yes"
        }, {
            "label": "Tidak",
            "value": "No"
        }
    ],
    onStatin: [
        {
            "label": "Yes",
            "value": "true"
        }, {
            "label": "No",
            "value": "false"
        }
    ],
    onAspirin: [
        {
            "label": "Yes",
            "value": "true"
        }, {
            "label": "No",
            "value": "false"
        }
    ],
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
        scorebar: { "text": "Faktor risiko optimal meliputi: Kolesterol total ≤ 170 mg/dL (4,40 mmol/L), Kolesterol HDL ≥ 50 mg/dL (1,30 mmol/L), TD Sistolik ≤ 110 mm Hg, Tidak mengonsumsi obat hipertensi, Bukan penderita diabetes, Bukan perokok", }
    },
    race: [
        {
            "label": "Lainnya",
            "value": "Other"
        }, {
            "label": "Kulit Hitam/Afrika-Amerika",
            "value": "African American/Black"
        }, {
            "label": "Kulit Putih",
            "value": "White"
        }
    ],
    notifications: {
        blank: [{
            'status': '',
            'message': ''
        }],
        smokingSelect: [{
            'id': 0,
            'status': 'warning',
            'message': 'Pilih nilai'
        }],
        sex: [{
            'status': 'warning',
            'message': 'Pilih nilai'
        }],
        age: [{
            'id': 0,
            'status': 'warning',
            'message': 'Masukkan nilai'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Masukkan nilai antara 20-79 tahun'

        }, {
            'id': 2,
            'status': 'highlighted',
            'message': 'Kalkulator ini hanya memberikan estimasi risiko 10 tahun untuk individu usia 40 hingga 79 tahun.'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Kalkulator Risiko Seumur Hidup hanya memberikan estimasi risiko seumur hidup untuk individu usia 20 hingga 59 tahun.'
        }],
        race: [{
            'status': 'warning',
            'message': 'Pilih nilai'
        }, {
            'status': 'highlighted',
            'message': 'Lihat Peringatan Estimasi di bawah'
        }],
        totalCholesterol: [{
            'status': 'warning',
            'message': 'Masukkan nilai'
        }, {
            'status': 'warning',
            'message': 'Masukkan nilai antara 130-320 mg/dL'
        }, {
            'status': 'warning',
            'message': 'Masukkan nilai antara 3,367-8,288 mmol/L'
        }, {
            'status': 'error',
            'message': 'Masukkan nilai dengan format xxx'
        }, {
            'status': 'error',
            'message': 'Masukkan nilai dengan format xxx.xxx atau xxx,xx'
        }],
        hdlCholesterol: [
            {
                'status': 'warning',
                'message': 'Masukkan nilai'
            },
            {
                'status': 'warning',
                'message': 'Masukkan nilai antara 20-100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Masukkan nilai antara 0,518-2,59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Masukkan nilai dengan format xx atau xxx'
            },
            {
                'status': 'error',
                'message': 'Masukkan nilai dengan format xxx.xxx atau xxx,xxx'
            }],
        bloodPresure: [{
            'status': 'warning',
            'message': 'Masukkan nilai'
        }, {
            'status': 'warning',
            'message': 'Masukkan nilai antara 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Masukkan nilai dengan format xxx'
        }],
        dbloodPresure: [{
            'status': 'warning',
            'message': 'Masukkan nilai'
        }, {
            'status': 'warning',
            'message': 'Masukkan nilai antara 60-130 mm Hg'
        }, {
            'status': 'error',
            'message': 'Masukkan nilai dengan format xxx'
        }],
        allData: [{
            'status': 'warning',
            'message': 'Ada data yang hilang. Input di bawah telah disorot.'
        }, {
            'status': 'error',
            'message': 'Ada kesalahan pada halaman. Input di bawah telah disorot.'
        }],
        diabetic: [{
            'status': 'warning',
            'message': 'Pilih nilai'
        }],
        smoker: [{
            'status': 'warning',
            'message': 'Pilih nilai'
        }],
        hypertension: [{
            'status': 'warning',
            'message': 'Pilih nilai'
        }, {
            'status': 'warning',
            'message': 'Risiko tindak lanjut didasarkan pada asumsi bahwa orang yang menjalani perawatan hipertensi pada baseline dianggap masih membutuhkannya.'
        }],
        
        /* No language translation required for commented code */
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
        baselineAge: [{
            'id': 0,
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'id': 1,
            'status': 'warning',
            'message': 'Please enter a value between 40-79 years'

        }, {
            'id': 2,
            'status': 'warning',
            'message': 'Value must be lesser than or equal to current age'
        }, {
            'id': 3,
            'status': 'highlighted',
            'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
        }],
        baselineTotalCholesterol: [{
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
        baselineHdlCholesterol: [
            {
                'status': 'warning',
                'message': 'Enter a value'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 20 - 100 mg/dL'
            },
            {
                'status': 'warning',
                'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
            },
            {
                'status': 'error',
                'message': 'Please enter a value in the format xxx.xxx'
            }],
        baselineLdlCholesterol: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 30-300 mg/dL'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 0.777-7.770 mmol/L'
        }, {
            'status': 'warning',
            'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
        },
        {
            'status': 'error',
            'message': 'Please enter a value in the format xxx.xxx'
        }],
        baselineBloodPresure: [{
            'status': 'warning',
            'message': 'Enter a value'
        }, {
            'status': 'warning',
            'message': 'Please enter a value between 90-200 mm Hg'
        }, {
            'status': 'error',
            'message': 'Please enter a value in the format xxx'
        }],
        baselineHypertension: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineDiabetic: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
        baselineSmoker: [{
            'status': 'warning',
            'message': 'Select a value'
        }],
    },
 /* No language translation required for commented code */
    formToolTips: {
        smokerToolTip: {
            id: '0', htmlID: 'smokingInfo', text: 'Is smoker?', value: '1', showInfo: true, tooltipTitle: 'Didefinisikan sebagai perokok berdasarkan populasi pasien yang sedang diteliti dalam uji klinis yang relevan. Gunakan pertimbangan klinis terkait pasien yang menggunakan rokok elektrik atau produk tembakau lainnya.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        },
         /* No language translation required for commented code */
        ldlToolTip: {
            id: '1', htmlID: 'ldlInfo', text: 'ldl < 190', value: '1', showInfo: true, tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        },
        statinToolTip: {
            id: '2', htmlID: 'statinInfo', text: 'statin yes no', value: '1', showInfo: true, tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        },
        aspirinToolTip: {
            id: '3', htmlID: 'aspirinInfo', text: 'aspirin yes no', value: '1', showInfo: true, tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        }, /* No language translation required for commented code */
        ageToolTip: {
            id: '0', htmlID: 'ageInfo', text: 'What is current age?', value: '1', showInfo: true, tooltipTitle: 'Untuk pasien usia ≥ 80 tahun, angka default 79 tahun mungkin layak digunakan karena risiko ASCVD 10 tahun untuk populasi usia ini pada umumnya > 10%.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        }, /* No language translation required for commented code */
       previousvisitToolTip: {
            id: '0', htmlID: 'previousvisitInfo', text: 'Do you want to compare?', value: '1', showInfo: true, tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        } /* No language translation required for commented code */
    },

    scorebarToolTips: {
        currentAgeValToolTip: {
            id: '0', htmlID: 'currentAgeInfo', text: '', value: '1', showInfo: true, tooltipTitle: 'Kalkulator ini hanya memberikan estimasi risiko 10 tahun untuk individu usia 40 hingga 79 tahun.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
        }, /* No language translation required for commented code */
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

    },

    ldlAdviceText: {
        DUMMY: {
            conditional: "some condition here",
            adviceLDLSection: "some advice here",
            adviceTherapyImpact: "some advice here"
        },
        CASE1: {
            conditional: "age >= 20 && age <= 39",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
            email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
            ldlgaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "ldl >= 190",
            adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
            adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
            email: "Maximally tolerated statin recommended after clinician-patient discussion.",
            ldlgaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "ldl <= 69",
            adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
            email: "Emphasize a heart healthy lifestyle.",
            ldlgaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
            adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
            ldlgaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
            adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
            adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
            email: "Conduct a clinical assessment and risk assessment.",
            ldlgaLabel: "",
            id: 5
        },
        CASE6: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
            adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
            adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
            email: "Emphasize lifestyle to reduce risk factors.",
            ldlgaLabel: "",
            id: 6
        },
        CASE7: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
            adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
            ldlgaLabel: "",
            id: 7
        },
        CASE8: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
            ldlgaLabel: "",
            id: 8
        },
        CASE9: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
            adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
            email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
            ldlgaLabel: "",
            id: 9
        },
        CASE10: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
            adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
            ldlgaLabel: "",
            id: 10
        },
        CASE11: {
            conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
            adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
            adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
            adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
            ldlgaLabel: "",
            id: 11
        }

    },
    smokingAdviceText: {
        DUMMY: {
            adviceTherapyImpact: "Address smoking cessation as needed.",
            email: "Address smoking cessation as needed."
        },
        CASE1: {
            conditional: "typeSmoker == 'Never'",
            adviceSmokingSection: "",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
            adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
            email: "Assess for tobacco use at every visit and avoid second hand smoke.",
            smokinggaLabel: "",
            id: 1
        },
        CASE2: {
            conditional: "typeSmoker == 'Current'",
            adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
            adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
            email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
            smokinggaLabel: "",
            id: 2
        },
        CASE3: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 3
        },
        CASE4: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 4
        },
        CASE5: {
            conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
            adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
            adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='https://www.acc.org/guidelines#doctype=Guidelines'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='http://www.onlinejacc.org/content/accj/early/2018/11/29/j.jacc.2018.10.027.full.pdf?_ga=2.102338881.1179034590.1547488181-802214008.1537885437'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
            adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
            email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
            smokinggaLabel: "",
            id: 5
        },
    },
    aspirinAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some aspirin advice here",
            adviceAspirinSection: "some aspirin advice here",
            email: "some aspirin advice here",
            id: 0
        },
        CASE1: {
            conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
            adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
            email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
            id: 1
        },
        CASE2: {
            conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
            email: "Can consider low dose aspirin for select higher risk patients.",
            id: 2
        },
        CASE3: {
            conditional: "age > 70",
            adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
            adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
            email: "Do not use low dose aspirin for prevention in patients 70 or older.",
            id: 3
        }
    },
    diabetesAdviceText: {
        DUMMY: {
            conditional: "",
            adviceTherapyImpact: "some diabetes advice here",
            adviceDiabetesSection: "some diabetes advice here",
            email: "some diabetes email advice here",
            id: 0
        },
        CASE1: {
            conditional: "diabetic === true",
            adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
            adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
            email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
            id: 1
        },
        CASE2: {
            conditional: "diabetic === false",
            adviceTherapyImpact: "N/A",
            adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
            email: "No T2D present.",
            id: 2
        } /* No language translation required for commented code */
    },
    emailTemplate: {
        subjectLine: 'Hasil Risiko ASCVD #timestamp#',
        followuprisk: 'RISIKO ASCVD 10 TAHUN: #followuprisk#%0D%0A',
        lifetimerisk: 'Risiko seumur hidup: #lifetimerisk#%0D%0A',
        optimalrisk: 'Risiko optimal: #optimalrisk#%0D%0A',
        patientinformation: '----INFORMASI PASIEN----%0D%0AJenis Kelamin: #sex#%0D%0ARas: #race#%0D%0A',
        followup: 'Usia: #age#thn',
        labs: '%0D%0ATD: #bloodPresure#/#dbloodPressure#%0D%0ATotal Kol.: #totalCholesterol#%0D%0AHDL: #hdlCholesterol#',
        personalHistory: '%0D%0APenderita Diabetes: #diabetic#%0D%0APerokok: #smoker#%0D%0APerawatan Hipertensi: #hypertension#'
    },
    gdprBanner: {
        bannerText: '<h1>Situs ini menggunakan cookie untuk meningkatkan pengalaman Anda.</h1> Dengan terus menggunakan situs kami, Anda menyetujui <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank">Kebijakan Cookie</a>, <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank">Kebijakan Privasi,</a> dan <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank">Ketentuan Layanan</a> kami.',
        buttonText: 'OKE'    
    }
  }
