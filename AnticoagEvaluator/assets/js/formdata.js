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
	ethnicity: [
		{ id: 0, name: "African American", value: 0.375675102 },
		{ id: 1, name: "Asian", value: -0.609609055 },
		{ id: 2, name: "Caucasian", value: 0 },
		{ id: 3, name: "Hispanic/Latino", value: 0.157023564 },
		{ id: 4, name: "Other", value: 0.375675102 }
	],
	cha2ds2: [
		{ id: '6', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age65', text: 'Age 65-74 yrs', value: '1', showInfo: true, tooltipTitle: 'Patient is 65 to 74 years old (+1)', emailText: '65-74 yrs' },
		{ id: '2', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age75', text: 'Age 75-84 yrs', value: '2', showInfo: true, tooltipTitle: 'Patient is 75 years or older (+2)', emailText: '≥ 75 yrs' },
		{ id: '8', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age85', text: 'Age ≥ 85 yrs', value: '1', showInfo: true, tooltipTitle: '', emailText: '≥ 85 yrs' },
		{ id: '7', canToggle: false, garfieldMultplr: 0, mortalValue: -0.306202287, hasTooltip: true, isDisabled: true, htmlID: 'cv2-female', text: 'Sex: Female', value: '1', showInfo: true, tooltipTitle: 'Female sex confers higher risk in some risk models', emailText: 'Female' },
		{ id: '0', canToggle: true, garfieldMultplr: 0.233182644, mortalValue: 0.693789082, hasTooltip: true, isDisabled: false, htmlID: 'cv2-chflv', text: 'CHF/LV dysfunction', value: '1', showInfo: true, tooltipTitle: 'Congestive Heart Failure/Left Ventricular Dysfunction. Signs/symptoms of heart failure confirmed with objective evidence of cardiac dysfunction.', emailText: 'CHF/LV dysfunction' },
		{ id: '10', canToggle: true, garfieldMultplr: 0.478831506, mortalValue: 0.345481149, hasTooltip: true, isDisabled: false, htmlID: 'cv2-current_smoker', text: 'Current smoker', value: '1', showInfo: true, tooltipTitle: 'Defined as cigarette smoker based on patient population studied in relevant clinical trials. use clinical discretion in regards to patients who use e-cigarettes and other tobacco products', emailText: 'Current smoker' },
		{ id: '11', canToggle: true, garfieldMultplr: 0.513221391, mortalValue: 0.489453313, hasTooltip: false, isDisabled: false, htmlID: 'cv2-dementia', text: 'Dementia', value: '1', showInfo: true, tooltipTitle: '', emailText: 'Dementia' },
		{ id: '3', canToggle: true, garfieldMultplr: 0.211995445, mortalValue: 0.280133213, hasTooltip: true, isDisabled: false, htmlID: 'cv2-diabetes', text: 'Diabetes mellitus', value: '1', showInfo: true, tooltipTitle: 'Fasting glucose > 125 mg/dL or treatment with oral hypoglycemic agent and/or insulin', emailText: 'Diabetes' },
		{ id: '1', canToggle: true, garfieldMultplr: 0, mortalValue: 0, hasTooltip: true, isDisabled: false, htmlID: 'cv2-hypertension', text: 'Hypertension', value: '1', showInfo: true, tooltipTitle: 'Resting BP > 140/90 mmHg on at least 2 occasions or current antihypertensive pharmacologic treatment', emailText: 'Hypertension' },
		{ id: '12', canToggle: true, garfieldMultplr: 0.29883967, mortalValue: 0.385407386, hasTooltip: false, isDisabled: false, htmlID: 'cv2-prev_bleed', text: 'Previous bleeding', value: '1', showInfo: true, tooltipTitle: '', emailText: 'Previous bleeding' },
		{ id: '4', canToggle: true, garfieldMultplr: 0.800863063, mortalValue: 0.26585298, hasTooltip: true, isDisabled: false, htmlID: 'cv2-tiastroke', text: 'Previous stroke or TIA', value: '2', showInfo: true, tooltipTitle: 'Prior stroke, transient ischemic attack, or thromboembolism. Includes any history of cerebral ischemia', emailText: 'Stroke/TIA/TE' },
		{ id: '13', canToggle: true, garfieldMultplr: 0, mortalValue: 0, hasTooltip: true, isDisabled: false, htmlID: 'cv2-proteinuria', text: 'Proteinuria', value: '1', showInfo: true, tooltipTitle: 'Elevated protein in the urine', emailText: 'Proteinuria' },
		{ id: '9', canToggle: true, garfieldMultplr: 0.349516938, mortalValue: 0.377903886, hasTooltip: true, isDisabled: false, htmlID: 'cv2-renal', text: 'Renal disease', value: '1', showInfo: true, tooltipTitle: 'Moderate to severe chronic kidney disease (CKD class III-V)', emailText: 'Renal disease' },
		{ id: '5', canToggle: true, garfieldMultplr: 0.197919709, mortalValue: 0.306120964, hasTooltip: true, isDisabled: false, htmlID: 'cv2-vasculardisease', text: 'Vascular disease', value: '1', showInfo: true, tooltipTitle: 'Prior myocardial infarction, peripheral arterial disease, or aortic plaque', emailText: 'Vascular disease' },
		// { id: '6', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age65', text: 'Age 65-74 yrs', value: '1', showInfo: true, tooltipTitle: 'Patient is 65 to 74 years old (+1)', emailText: '65-74 yrs' },
		// { id: '10', canToggle: true, garfieldMultplr: 0.478831506, mortalValue: 0.345481149, hasTooltip: true, isDisabled: false, htmlID: 'cv2-current_smoker', text: 'Current smoker', value: '1', showInfo: true, tooltipTitle: 'Defined as cigarette smoker based on patient population studied in relevant clinical trials. use clinical discretion in regards to patients who use e-cigarettes and other tobacco products', emailText: 'Current smoker' },
		// { id: '4', canToggle: true, garfieldMultplr: 0.800863063, mortalValue: 0.26585298, hasTooltip: true, isDisabled: false, htmlID: 'cv2-tiastroke', text: 'Previous stroke or TIA', value: '2', showInfo: true, tooltipTitle: 'Prior stroke, transient ischemic attack, or thromboembolism. Includes any history of cerebral ischemia', emailText: 'Stroke/TIA/TE' },
		// { id: '2', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age75', text: 'Age 75-84 yrs', value: '2', showInfo: true, tooltipTitle: 'Patient is 75 years or older (+2)', emailText: '≥ 75 yrs' },
		// { id: '11', canToggle: true, garfieldMultplr: 0.513221391, mortalValue: 0.489453313, hasTooltip: false, isDisabled: false, htmlID: 'cv2-dementia', text: 'Dementia', value: '1', showInfo: true, tooltipTitle: '', emailText: 'Dementia' },
		// { id: '13', canToggle: true, garfieldMultplr: 0, mortalValue: 0, hasTooltip: true, isDisabled: false, htmlID: 'cv2-proteinuria', text: 'Proteinuria', value: '1', showInfo: true, tooltipTitle: 'Elevated protein in the urine', emailText: 'Proteinuria' },
		// { id: '8', canToggle: false, garfieldMultplr: 0, mortalValue: 0, hasTooltip: false, isDisabled: true, htmlID: 'cv2-age85', text: 'Age ≥ 85 yrs', value: '1', showInfo: true, tooltipTitle: '', emailText: '≥ 85 yrs' },
		// { id: '3', canToggle: true, garfieldMultplr: 0.211995445, mortalValue: 0.280133213, hasTooltip: true, isDisabled: false, htmlID: 'cv2-diabetes', text: 'Diabetes mellitus', value: '1', showInfo: true, tooltipTitle: 'Fasting glucose > 125 mg/dL or treatment with oral hypoglycemic agent and/or insulin', emailText: 'Diabetes' },
		// { id: '9', canToggle: true, garfieldMultplr: 0.349516938, mortalValue: 0.377903886, hasTooltip: true, isDisabled: false, htmlID: 'cv2-renal', text: 'Renal disease', value: '1', showInfo: true, tooltipTitle: 'Moderate to severe chronic kidney disease (CKD class III-V)', emailText: 'Renal disease' },
		// { id: '7', canToggle: false, garfieldMultplr: 0, mortalValue: -0.306202287, hasTooltip: true, isDisabled: true, htmlID: 'cv2-female', text: 'Sex: Female', value: '1', showInfo: true, tooltipTitle: 'Female sex confers higher risk in some risk models', emailText: 'Female' },
		// { id: '1', canToggle: true, garfieldMultplr: 0, mortalValue: 0, hasTooltip: true, isDisabled: false, htmlID: 'cv2-hypertension', text: 'Hypertension', value: '1', showInfo: true, tooltipTitle: 'Resting BP > 140/90 mmHg on at least 2 occasions or current antihypertensive pharmacologic treatment', emailText: 'Hypertension' },
		// { id: '5', canToggle: true, garfieldMultplr: 0.197919709, mortalValue: 0.306120964, hasTooltip: true, isDisabled: false, htmlID: 'cv2-vasculardisease', text: 'Vascular disease', value: '1', showInfo: true, tooltipTitle: 'Prior myocardial infarction, peripheral arterial disease, or aortic plaque', emailText: 'Vascular disease' },
		// { id: '0', canToggle: true, garfieldMultplr: 0.233182644, mortalValue: 0.693789082, hasTooltip: true, isDisabled: false, htmlID: 'cv2-chflv', text: 'CHF/LV dysfunction', value: '1', showInfo: true, tooltipTitle: 'Congestive Heart Failure/Left Ventricular Dysfunction. Signs/symptoms of heart failure confirmed with objective evidence of cardiac dysfunction.', emailText: 'CHF/LV dysfunction' },
		// { id: '12', canToggle: true, garfieldMultplr: 0.29883967, mortalValue: 0.385407386, hasTooltip: false, isDisabled: false, htmlID: 'cv2-prev_bleed', text: 'Previous bleeding', value: '1', showInfo: true, tooltipTitle: '', emailText: 'Previous bleeding' }

	],
	hasbledModifiable: [
		{ id: '0', htmlID: 'hb-hypertension', text: 'Hypertension', value: '1', showInfo: true, tooltipTitle: 'Uncontrolled, >160 mmHg systolic (+1)', emailText: 'Hypertension' },
		{ id: '1', htmlID: 'hb-alcohol', text: 'Current “excess” of Alcohol', value: '1', showInfo: true, tooltipTitle: 'Frequently defined as 8 alcohol drinks or more per week (+1)', emailText: 'Current \'excess\' of Alcohol' },
		{ id: '2', htmlID: 'hb-renalfunction', text: 'Abnormal Renal Function', value: '1', showInfo: true, tooltipTitle: 'Dialysis, transplant, creatinine > 2.3 mg/dL or >200 µmol/L (+1)', emailText: 'Abnormal Renal Function' },
		{ id: '3', htmlID: 'hb-liverfunction', text: 'Abnormal Liver Function', value: '1', showInfo: true, tooltipTitle: 'Cirrhosis or bilirubin > 2x normal with AST/ALT/AP > 3x normal (+1)', emailText: 'Abnormal Liver Function' },
		{ id: '4', htmlID: 'hb-antiplatelet', text: 'Currently taking antiplatelet drugs or NSAIDs', value: '1', showInfo: true, tooltipTitle: 'Medication usage predisposing to bleeding (antiplatelet agents, NSAIDs) (+1)', emailText: 'Currently taking antiplatelet drugs or NSAIDs' }
	],
	hasbledNonModifiable: [
		{ id: '0', isDisabled: false, htmlID: 'hb-tiastroke', text: 'History of Stroke/TIA/TE', value: '1', showInfo: true, tooltipTitle: 'Prior history of stroke, transient ischemic attack, or thromboembolism (+1)', emailText: 'Stroke/TIA/TE' },
		{ id: '1', isDisabled: false, htmlID: 'hb-majorbleed', text: 'History of Major Bleeding', value: '1', showInfo: true, tooltipTitle: 'Prior major bleeding or predisposition to bleeding.  Major bleeding refers to intracranial bleeding, bleeding requiring hospitalization, a hemoglobin decrease of more than 2 g/dL, or the need for transfusion secondary to bleeding.  (+1)', emailText: 'H/o Major Bleeding' },
		{ id: '2', isDisabled: false, htmlID: 'hb-liabile', text: 'History of Labile INR', value: '1', showInfo: true, tooltipTitle: 'Unstable/high INRs, time in therapeutic range <60%.  Applies to warfarin patients only. (+1)', emailText: 'H/o Labile INR' },
		{ id: '3', isDisabled: true, htmlID: 'hb-age65', text: 'Age > 65 yrs', value: '1', showInfo: true, tooltipTitle: 'Age >65 years old (+1)', emailText: '> 65 yrs' }
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
			drugInfoLink: 'https://bit.ly/44zdlW6'
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
			hasbledModifier: '1.0',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '150 mg BID',
			drugInfoLink: 'https://bit.ly/3y8lO6o'
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
			relativeRisk: '71',
			hasbledModifier: '0.8',
			populationAvgAnnualMajorBleed: '3.02',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '60 mg QD',
			drugInfoLink: 'https://bit.ly/4bnicM7'
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
			hasbledModifier: '1.0',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: '20 mg QD w/evening meal',
			drugInfoLink: 'https://bit.ly/4b7y99o'
		},
		{
			id: '7',
			doseInstruction: 'May need lower doses for Asians, elderly (> 60 years old), hepatic impairment, or patients with known genetic variation in CYP2C9 and VKORC1.',
			sideEffects: 'Hemorrhagic event, tissue necrosis, systematic atheroemboli or cholesterol microemboli',
			dose: ko.observable('Initial dose 0.5 - 7 mg daily. Individualize dose based on INR and patient factors. Target INR = 2.5, 2.0 to 3.0'),
			standardDose: ko.observable('Initial dose 0.5 - 7 mg daily. Individualize dose based on INR and patient factors. Target INR = 2.5, 2.0 to 3.0'),
			text: 'Warfarin',
			modifier: '0.34',
			drungInteractions: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s017lbl.pdf',
			relativeRisk: '66',
			hasbledModifier: '1',
			populationAvgAnnualMajorBleed: '3.8',
			reversalStrategies:
				'https://www.acc.org/-/media/Non-Clinical/Images/Tools-and-Practice-Support/Mobile-Resources/ManageAnticoag/B20115-Reversal-Agent-Fact-Sheet.pdf',
			emailTemplate: 'Initial dose 0.5 - 7mg daily %0AIndividualize dose based on INR and patient factors. Target INR = 2.5, 2.0 to 3.0',
			drugInfoLink: 'https://bit.ly/4btob1N'
		}
	],
	emailTemplate: {
		subjectLine: 'ACC AnticoagEvaluator Results (#genratedon#)',
		patientInfo: 'PATIENT%0A#age#%0A#gender#%0A#ethnicity#%0A#weight#%0A#dbp#%0A#pulse#%0A',
		cha2ds2: 'STROKE RISK%0A#riskclass#%0A#riskmodel# Risk Magnitude: #riskmag# annual risk of stroke%0A#cha2ds2selected#',
		renalFunction: 'RENAL FUNCTION%0A#crclscore#%0A#serum#%0A',
		hasbled: 'HAS-BLED Score: #hasbledscore#%0A#hasbledselected#',
		concomitant: 'Concomitant Medications:%0A#concomitantselected#',
		therapyGuidance: 'THERAPY GUIDANCE%0A#riskinfo#%0A',
		therapyDosing: 'THERAPY DOSING',
		mortality: 'ANNUAL MORTALITY RISK%0AWith no OAC Therapy: #nooac#%0AWith DOAC: #wdoac#%0AWith Warfarin/VKA: #wwv#%0A'
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
	therapyGuidanceFooter: `<br>In patients with AF at risk for stroke, reevaluation of the need for and choice of stroke risk reduction therapy at periodic intervals is recommended to reassess stroke and bleeding risk, net clinical benefit, and proper dosing. (1, B-NR)
							<br>This app and the recommendations above are meant for atrial fibrillation patients who do not have moderate-to-severe mitral stenosis or a mechanical heart valve.`,
	advices: [
		{
			id: 0,
			emailText: 'Oral anticoagulation may be omitted due to low stroke risk',
			conditional: '(Gender === "Male" && ChadVascScore === 0) || (Gender === Female && ChadVascScore === 1)',
			guidanceBoxHeading: 'Low Risk: Absolute Risk of Stroke < 1% per year',
			guidanceBoxDescription: `<b>If prescribing an oral anticoagulant:</b>
										<ul>
											<li>DOACs are recommended over warfarin to reduce the risk of mortality, stroke, systemic embolism, and ICH. (1, A)</li>
											<li>Without an indication for antiplatelet therapy, aspirin either alone or in combination with clopidogrel as an alternative to anticoagulation is not recommended to reduce stroke risk. (3-Harm, B-R)</li>
										</ul>`,
			guidePreBleed: `<br><b>If History of Bleeding is indicated:</b><ul><li>Patients should be evaluated for factors that specifically indicate a higher risk of bleeding, such as previous bleeding and use of drugs that increase bleeding risk, in order to identify possible interventions to prevent bleeding on anticoagulation. (1, B-NR)</li></ul>`,
			guideRenal: '',
			guideLiver: ''

		},
		{
			id: 1,
			emailText: 'Oral anticoagulation may be considered due to intermediate stroke risk',
			conditional: '(Gender === "Male" && ChadVascScore === 1) || (Gender === "Female" && ChadVascScore === 2)',
			guidanceBoxHeading: `Intermediate Risk<br>
								Anticoagulation is reasonable to prevent stroke and systemic thromboembolism. (2a, A)`,
			guidanceBoxDescription: `<b>If prescribing an oral anticoagulant:</b>
										<ul>
											<li>DOACs are recommended over warfarin to reduce the risk of mortality, stroke, systemic embolism, and ICH. (1, A)</li>
											<li>If receiving warfarin: a target INR between 2 and 3 is recommended, as well as optimal management of drug-drug interactions, consistency in vitamin K dietary intake, and routine INR monitoring to improve time in therapeutic range and to minimize risks of preventable thromboembolism or major bleeding. (1, B-R)</li>
											<li>Without an indication for antiplatelet therapy, aspirin either alone or in combination with clopidogrel as an alternative to anticoagulation is NOT recommended to reduce stroke risk. (3-Harm, B-R)</li>
										</ul>`,
			guidePreBleed: `<br>
										<b>If History of Bleeding is indicated:</b>
											<ul>
												<li>Patients should be evaluated for factors that specifically indicate a higher risk of bleeding, such as previous bleeding and use of drugs that increase bleeding risk, to identify possible interventions to prevent bleeding on anticoagulation. (1, B-NR)</li>
											</ul>`,
			guideRenal: `<br>
										<b>If Abnormal Renal Function is indicated:</b>
											<ul>
												<li>For patients with AF who have end-stage CKD or are on dialysis, it might be reasonable to prescribe warfarin (INR 2.0-3.0) or an evidence-based dose of apixaban for oral anticoagulation. (2b, B-NR)</li>
											</ul>`,
			guideLiver: `<br>
										<b>If Abnormal Liver Function is indicated:</b>
											<ul>
												<li>For patients with AF who have mild or moderate liver disease (Child-Pugh class A or B), it is reasonable to prescribe DOACs over warfarin. (2a, B-NR)</li>
												<li>For patients with AF who have moderate liver disease (Child-Pugh class B), Rivaroxaban is CONTRAINDICATED due to the potentially increased risk of bleeding. (3-Harm, C-LD)</li>
											</ul>`

		},
		{
			id: 2,
			emailText: 'Oral anticoagulation is recommended due to high stroke risk',
			conditional: '(Gender === "Male" && ChadVascScore >= 2) || (Gender === "Female" && ChadVascScore >= 3)',
			guidanceBoxHeading: `High Risk<br>
								Anticoagulation is recommended to prevent stroke and systemic thromboembolism. (1, A)`,
			guidanceBoxDescription: `<b>If prescribing an oral anticoagulant:</b>
										<ul>
											<li>DOACs are recommended over warfarin to reduce the risk of mortality, stroke, systemic embolism, and ICH. (1, A)</li>
											<li>If receiving warfarin: a target INR between 2 and 3 is recommended, as well as optimal management of drug-drug interactions, consistency in vitamin K dietary intake, and routine INR monitoring to improve time in therapeutic range and to minimize risks of preventable thromboembolism or major bleeding. (1, B-R)</li>
											<li>Without an indication for antiplatelet therapy, aspirin either alone or in combination with clopidogrel as an alternative to anticoagulation is NOT recommended to reduce stroke risk. (3-Harm, B-R)</li>
											<li>Bleeding risk scores should not be used in isolation to determine eligibility for oral anticoagulation but instead to identify and modify bleeding risk factors and to inform medical decision-making. (3-No Benefit, B-NR)</li>
										</ul>`,
			guidePreBleed: `<br>
										<b>If History of Bleeding is indicated:</b>
											<ul>
												<li>Patients should be evaluated for factors that specifically indicate a higher risk of bleeding, such as previous bleeding and use of drugs that increase bleeding risk, to identify possible interventions to prevent bleeding on anticoagulation. (1, B-NR)</li>
											</ul>`,
			guideRenal: `<br>
										<b>If Abnormal Renal Function is indicated:</b>
											<ul>
												<li>For patients with AF who have end-stage CKD or are on dialysis, it might be reasonable to prescribe warfarin (INR 2.0-3.0) or an evidence-based dose of apixaban for oral anticoagulation. (2b, B-NR)</li>
											</ul>`,
			guideLiver: `<br>
										<b>If Abnormal Liver Function is indicated:</b>
											<ul>
												<li>For patients with AF who have mild or moderate liver disease (Child-Pugh class A or B), it is reasonable to prescribe DOACs over warfarin. (2a, B-NR)</li>
												<li>For patients with AF who have moderate liver disease (Child-Pugh class B), Rivaroxaban is CONTRAINDICATED due to the potentially increased risk of bleeding. (3-Harm, C-LD)</li>
											</ul>`
		},
		{
			id: 3,
			guidanceBoxHeading: '',
			guidanceBoxDescription: '',
			guidePreBleed: '',
			guideRenal: '',
			guideLiver: ''
		}
	]
};
