/*!
Formdata JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd.
This file contains application related data.
Code licensed under the Cybage license.

*/
/**
 * This formdata variable contains the JSON objects that are bind to UI components of the application.
 * @sex: contains values for Sex field dropdown.
 * @cha2ds2: contains the CHA2DS2-VASc section fields and properties mapped to respective field.
 * @hasbled: contains the HAS-BLED section fields and properties mapped to respective field.
 * @antiplatelet : contains the Concomitant Medications section fields and properties mapped to respective field.
 * @allTherapyOptions: contains the factors, standard dose text and SPARC tool's modifier for respective therapy options.
 * @emailTemplate: contains the email template text that to be replaced with the application overall results/scores/therapy dosing info.
 * @therapyOptions: contains the captions for therapy options.
 */
var formdata = {
	sex: [
		{ text: 'Male', value: '1' },
		{ text: 'Female', value: '0.85' }
	],
	cha2ds2: [
		{ id: '0', htmlID: 'cv2-chflv', text: 'CHF/LV dysfunction', value: '1', showInfo: true, tooltipTitle: 'Congestive Heart Failure/Left Ventricular Dysfunction. Signs/symptoms of heart failure confirmed with objective evidence of cardiac dysfunction. (+1)', emailText: 'CHF/LV dysfunction' },
		{ id: '1', htmlID: 'cv2-hypertension', text: 'Hypertension', value: '1', showInfo: true, tooltipTitle: 'Resting BP > 140/90 mmHg on at least 2 occasions or current antihypertensive pharmacologic treatment (+1)', emailText: 'Hypertension' },
		{ id: '2', htmlID: 'cv2-age75', text: 'Age ≥ 75 yrs', value: '2', showInfo: true, tooltipTitle: 'Patient is 75 years or older (+2)', emailText: '≥ 75 yrs' },
		{ id: '3', htmlID: 'cv2-diabetes', text: 'Diabetes mellitus', value: '1', showInfo: true, tooltipTitle: 'Fasting glucose > 125 mg/dL or treatment with oral hypoglycemic agent and/or insulin (+1)', emailText: 'Diabetes' },
		{ id: '4', htmlID: 'cv2-tiastroke', text: 'Stroke/TIA/TE', value: '2', showInfo: true, tooltipTitle: 'Prior stroke, transient ischemic attack, or thromboembolism.  Includes any history of cerebral ischemia. (+2)', emailText: 'Stroke/TIA/TE' },
		{ id: '5', htmlID: 'cv2-vasculardisease', text: 'Vascular disease', value: '1', showInfo: true, tooltipTitle: 'Prior myocardial infarction, peripheral arterial disease, or aortic plaque (+1)', emailText: 'Vascular disease' },
		{ id: '6', htmlID: 'cv2-age65', text: 'Age 65-74 yrs', value: '1', showInfo: true, tooltipTitle: 'Patient is 65 to 74 years old (+1)', emailText: '65-74 yrs' },
		{ id: '7', htmlID: 'cv2-female', text: 'Sex: Female', value: '1', showInfo: true, tooltipTitle: 'Female gender confers higher risk (+1)', emailText: 'Female' }
	],
	hasbledModifiable: [
		{ id: '0', htmlID: 'hb-hypertension', text: 'Hypertension', value: '1', showInfo: true, tooltipTitle: 'Uncontrolled, >160 mmHg systolic (+1)', emailText: 'Hypertension' },
		{ id: '1', htmlID: 'hb-alcohol', text: 'Current “excess” of Alcohol', value: '1', showInfo: true, tooltipTitle: 'Frequently defined as 8 alcohol drinks or more per week (+1)', emailText: 'Current \'excess\' of Alcohol' },
		{ id: '2', htmlID: 'hb-renalfunction', text: 'Abnormal Renal Function', value: '1', showInfo: true, tooltipTitle: 'Dialysis, transplant, creatinine > 2.3 mg/dL or >200 µmol/L (+1)', emailText: 'Abnormal Renal Function' },
		{ id: '3', htmlID: 'hb-liverfunction', text: 'Abnormal Liver Function', value: '1', showInfo: true, tooltipTitle: 'Cirrhosis or bilirubin > 2x normal with AST/ALT/AP > 3x normal (+1)', emailText: 'Abnormal Liver Function' },
		{ id: '4', htmlID: 'hb-antiplatelet', text: 'Currently taking antiplatelet drugs or NSAIDs', value: '1', showInfo: true, tooltipTitle: 'Medication usage predisposing to bleeding (antiplatelet agents, NSAIDs) (+1)', emailText: 'Currently taking antiplatelet drugs or NSAIDs' }
	],
	hasbledNonModifiable: [
		{ id: '0', htmlID: 'hb-tiastroke', text: 'History of Stroke/TIA/TE', value: '1', showInfo: true, tooltipTitle: 'Prior history of stroke, transient ischemic attack, or thromboembolism (+1)', emailText: 'Stroke/TIA/TE' },
		{ id: '1', htmlID: 'hb-majorbleed', text: 'History of Major Bleeding', value: '1', showInfo: true, tooltipTitle: 'Prior major bleeding or predisposition to bleeding.  Major bleeding refers to intracranial bleeding, bleeding requiring hospitalization, a hemoglobin decrease of more than 2 g/dL, or the need for transfusion secondary to bleeding.  (+1)', emailText: 'H/o Major Bleeding' },
		{ id: '2', htmlID: 'hb-liabile', text: 'History of Labile INR', value: '1', showInfo: true, tooltipTitle: 'Unstable/high INRs, time in therapeutic range <60%.  Applies to warfarin patients only. (+1)', emailText: 'H/o Labile INR' },
		{ id: '3', htmlID: 'hb-age65', text: 'Age > 65 yrs', value: '1', showInfo: true, tooltipTitle: 'Age >65 years old (+1)', emailText: '> 65 yrs' }
	],
	antiplatelet: [
		{ id: '0', htmlID: 'a-aspirin', text: 'Aspirin (any dose)', value: '1', showInfo: false, tooltipTitle: '', displayText: 'Aspirin (any dose)' },
		{ id: '1', htmlID: 'a-drugs-p2y12', text: 'P2Y12 Inhibitors', value: '1', showInfo: true, tooltipTitle: 'For example: clopidogrel, prasugrel, and ticagrelor', displayText: 'P2Y12 Inhibitors' },
		{ id: '2', htmlID: 'a-drugs-nsaids', text: 'NSAIDs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', value: '1', showInfo: false, tooltipTitle: '', displayText: 'NSAIDs' },
		{ id: '3', htmlID: 'a-drugs-others', text: '<span class=\'short-text\'>Other <br/> antiplatelets</span><span class=\'long-text\'>Other antiplatelets</span>', value: '1', showInfo: true, tooltipTitle: 'For example: cilostazol, aspirin-dipyridamole, vorapaxar', displayText: 'Other antiplatelets' }
	],
	allTherapyOptions: [
		{
			id: '0',
			doseInstruction: '(N/A)',
			sideEffects: '(N/A)',
			dose: ko.observable('Not applicable'),
			standardDose: ko.observable('Not applicable'),
			text: 'No Therapy',
			modifier: '1',
			drungInteractions: '',
			relativeRisk: '',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '0.6'
		},
		{
			id: 1,
			doseInstruction: '(N/A)',
			sideEffects: 'Hypersensitivity, Reye’s syndrome, GI bleeding, nephrotoxicity',
			dose: ko.observable('80-325 mg daily'),
			standardDose: ko.observable('80-325 mg daily'),
			text: 'Aspirin',
			modifier: '0.66',
			drungInteractions: 'https://www.drugs.com/monograph/aspirin.html',
			relativeRisk: '22',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '1.1',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '80 to 325 mg QD'
		},
		{
			id: 2,
			doseInstruction: '(N/A)',
			sideEffects: 'Hemorrhagic event, acute liver failure, anaphylaxis, angioedema, aplastic anemia, agranulocytosis, GI bleeding, hypersensitivity, nephrotoxicity, pancreatitis, Reye’s syndrome, Stevens-Johnson syndrome, thrombotic thrombocytopenia',
			dose: ko.observable('Aspirin 75-100 mg once daily + Clopidogrel 75 mg once daily'),
			standardDose: ko.observable('Aspirin 75-100 mg once daily + Clopidogrel 75 mg once daily'),
			text: 'Aspirin + Clopidogrel',
			modifier: '0.56',
			drungInteractions: 'https://packageinserts.bms.com/pi/pi_plavix.pdf',
			relativeRisk: '44',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: 'Aspirin 75 to 100 mg QD w/ clopidogrel 75 mg QD',
			drugInfoLink: 'http://goo.gl/HsbKYm'
		},
		{
			id: '3',
			doseInstruction: 'With strong dual inhibitors of CYP3A4 and P-gp, (e.g., ketoconazole, itraconazole, ritonavir, or clarithromycin): decrease dose to 2.5 mg twice daily or do not use apixaban',
			sideEffects: 'Hemorrhagic event',
			dose: ko.observable('Alternate Dose'),
			standardDose: ko.observable('5 mg twice daily'),
			text: 'Apixaban',
			modifier: '0.2607',
			drungInteractions: 'https://packageinserts.bms.com/pi/pi_eliquis.pdf',
			relativeRisk: '74',
			hasbledModifier: '0.69',
			populationAvgAnnualMajorBleed: '2.622',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '5 mg BID',
			drugInfoLink: 'http://goo.gl/HsbKYm'
		},
		{
			id: '4',
			doseInstruction: '(N/A)',
			sideEffects: 'Hemorrhagic event',
			dose: ko.observable('Alternate Dose'),
			standardDose: ko.observable('150 mg twice daily'),
			text: 'Dabigatran',
			modifier: '0.2145',
			drungInteractions: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/022512s035lbl.pdf',
			relativeRisk: '79',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '150 mg BID',
			drugInfoLink: 'http://goo.gl/0TtgO6'
		},
		{
			id: '5',
			doseInstruction: 'Assess CrCl before initiating edoxaban therapy',
			sideEffects: 'Hemorrhagic event',
			dose: ko.observable('60 mg once daily'),
			standardDose: ko.observable('60 mg once daily'),
			text: 'Edoxaban',
			modifier: '0.29',
			drungInteractions: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/206316s012lbl.pdf',
			relativeRisk: '66',
			hasbledModifier: '0.8',
			populationAvgAnnualMajorBleed: '3.02',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '60 mg QD',
			drugInfoLink: 'http://goo.gl/SJQBt5'
		},
		{
			id: '6',
			doseInstruction: '(N/A)',
			sideEffects: 'Hemorrhagic event',
			dose: ko.observable('20 mg once daily with the evening meal'),
			standardDose: ko.observable('20 mg once daily with the evening meal'),
			text: 'Rivaroxaban',
			modifier: '0.34',
			drungInteractions: 'http://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/XARELTO-pi.pdf',
			relativeRisk: '66',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '20 mg QD w/evening meal',
			drugInfoLink: 'http://goo.gl/VZ1Vg2'
		},
		{
			id: '7',
			doseInstruction: 'May need lower doses for Asians, elderly (> 60 years old), hepatic impairment, or patients with known genetic variation in CYP2C9 and VKORC1.',
			sideEffects: 'Hemorrhagic event, tissue necrosis, systematic atheroemboli or cholesterol microemboli',
			dose: ko.observable('Initial dose 0.5 -7 mg daily. Individualize dose based on INR and patient factors. Target INR = 2.5, 2.0 to 3.0'),
			standardDose: ko.observable('Initial dose 0.5 -7 mg daily. Individualize dose based on INR and patient factors. Target INR = 2.5, 2.0 to 3.0'),
			text: 'Warfarin',
			modifier: '0.34',
			drungInteractions: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s017lbl.pdf',
			relativeRisk: '66',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: 'Initial dose 0.5 -7mg daily %0AIndividualize dose based on INR and %0Apatient factors. Target INR = 2.5, 2.0 to 3.0',
			drugInfoLink: 'http://goo.gl/6qGxH4'
		}
	],
	emailTemplate: {
		subjectLine: 'ACC AnticoagEvaluator Results (#genratedon#)',
		patientInfo: 'PATIENT%0A#age#%0A#gender#%0A',
		cha2ds2: 'CHA2DS2-VASc%0ASCORE:#cha2ds2score#,#riskstatus#%0A#cha2ds2selected#',
		renalFunction: 'RENAL FUNCTION%0A#crclscore#%0A#serum#%0A',
		hasbled: 'HAS-BLED Score: #hasbledscore#%0A#hasbledselected#',
		concomitant: 'Concomitant Medications:%0A#concomitantselected#',
		therapyGuidance: 'THERAPY GUIDANCE%0A#riskinfo#%0A',
		therapyDosing: 'THERAPY DOSING%0A'
	},
	therapyOptions: {
		NoTherapy: 'No Therapy',
		Aspirin: 'Aspirin',
		AspirinClopidogrel: 'Aspirin + Clopidogrel',
		Apixaban: 'Apixaban',
		Dabigatran: 'Dabigatran',
		Edoxaban: 'Edoxaban',
		Rivaroxaban: 'Rivaroxaban',
		Warfarin: 'Warfarin'
	},
	advices: [
		{
			id: 0,
			conditional: '(Gender === "Male" && ChadVascScore === 0) || (Gender === Female && ChadVascScore === 1)',
			guidanceBoxHeading: 'It is reasonable to omit anticoagulant therapy for this patient. (IIa, B)',
			guidanceBoxDescription: '',
			emailText: 'Oral anticoagulation may be omitted due to low stroke risk'
		},
		{
			id: 1,
			conditional: '(Gender === "Male" && ChadVascScore === 1) || (Gender === "Female" && ChadVascScore === 2)',
			guidanceBoxHeading: 'Prescribing an oral anticoagulant to reduce thromboembolic stroke risk may be considered. (IIb, C)',
			guidanceBoxDescription: '<p>If prescribing an oral anticoagulant: <ul><li><b>In NOAC-eligible patients<sup>*</sup>:</b><ul class="circle-bullet-list"><li>NOACs are recommended over warfarin (I, A).</li><li>Renal and hepatic function should be evaluated before NOAC initiation and reevaluated at least annually (I,B). NOACs are not recommended for patients with severe hepatic dysfunction, and all NOACs have dosing defined by renal function.</li><li>Coverage of NOACs by patient’s insurance carrier should also be considered.</li></ul></li><li><b>In patients initiating/taking warfarin<sup>*</sup>:</b><ul class="circle-bullet-type"><li>INR should be determined at least weekly during initiation and monthly when anticoag (INR in range) is stable (I,A). </li><li>For patients unable to maintain a therapeutic INR level, NOACs are recommended (I,C). </li></ul></li><li><b>If on dialysis and/or with end-stage CKD (CrCl <15 mL/min):</b><ul class="circle-bullet-type"><li>Dabigatran, rivaroxaban and edoxaban are NOT recommended (III,C)</li></ul></li></ul><br><p class="italic"><sup>*</sup>Selection of anticoagulation should be individualized based on shared decision making (I,C) and thromboembolism risk irrespective of whether AF is paroxysmal, persistent, or permanent (I,B).<br/> This app and the recommendations above are meant for atrial fibrillation patients who do not have moderate-to-severe mitral stenosis or a mechanical heart valve. If your patient does have a mechanical heart valve, warfarin is recommended (I,B) and dabigatran SHOULD NOT be used. (III, B)<br>See “Resource” tab at the bottom of this app for full text recommendations from the 2018 ACC/AHA Atrial Fibrillation Guideline Focused Update. </p></p>',
			emailText: 'Oral anticoagulation may be considered due to intermediate stroke risk'
		},
		{
			id: 2,
			conditional: '(Gender === "Male" && ChadVascScore >= 2) || (Gender === "Female" && ChadVascScore >= 3)',
			guidanceBoxHeading: 'Oral anticoagulant is recommended. (I,A)',
			guidanceBoxDescription: '<p>If prescribing an oral anticoagulant: <ul><li><b>In NOAC-eligible patients <sup>*</sup>:</b><ul class="circle-bullet-list"><li>NOACs are recommended over warfarin (I, A).</li><li>Renal and hepatic function should be evaluated before NOAC initiation and reevaluated at least annually (I,B). NOACs are not recommended for patients with severe hepatic dysfunction, and all NOACs have dosing defined by renal function.</li><li>Coverage of NOACs by patient’s insurance carrier should also be considered.</li></ul></li><li><b>In patients initiating/taking warfarin<sup>*</sup>:</b><ul class="circle-bullet-type"><li>INR should be determined at least weekly during initiation and monthly when anticoag (INR in range) is stable (I,A). </li><li>For patients unable to maintain a therapeutic INR level, NOACs are recommended (I,C). </li></ul></li><li><b>If on dialysis and/or with end-stage CKD (CrCl <15 mL/min):</b><ul class="circle-bullet-type"><li>It is reasonable to prescribe apixaban or warfarin (IIa,B)</li><li>Dabigatran, rivaroxaban and edoxaban are NOT recommended (III,C)</li></ul></li><li><b>If moderate-to-severe CKD:</b><ul class="circle-bullet-list"><li>Reduced doses of NOACs may be considered (IIb,B)</li><li>CKD criteria for reduced dosing is defined by prescribing info: (apixaban, SCr ≥1.5 mg/dL ); (dabigatran or rivaroxaban, CrCl 15-30 mL/min); (edoxaban, 15-50 mL/min)</li></ul></li></ul><br><p class="italic"><sup>*</sup>Selection of anticoagulation should be individualized based on shared decision making (I,C) and thromboembolism risk irrespective of whether AF is paroxysmal, persistent, or permanent (I,B).<br/> This app and the recommendations above are meant for atrial fibrillation patients who do not have moderate-to-severe mitral stenosis or a mechanical heart valve. If your patient does have a mechanical heart valve, warfarin is recommended (I,B) and dabigatran SHOULD NOT be used. (III, B)<br>See “Resource” tab at the bottom of this app for full text recommendations from the 2018 ACC/AHA Atrial Fibrillation Guideline Focused Update.</p></p>',
			emailText: 'Oral anticoagulation is recommended due to high stroke risk'
		},
		{
			id: 3,
			guidanceBoxHeading: '',
			guidanceBoxDescription: ''
		}
	]
};
