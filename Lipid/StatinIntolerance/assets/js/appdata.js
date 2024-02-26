var data = { 
	statins : [
		{
			id:"0",
			name:"Select",
			dose:[
				{
					name: "Other",
					type: "Other",
					value: "Other",
					htmlText: "Other"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type: "halflife",
					value: "--"
				},
				{
					name: "Lipophilic?",
					type: "lipophilic",
					value: "--"
				},
				{
					name: "Optimal Frequency",
					type: "timeofday",
					value: "--"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "--"
				},
				{
					name: "Pregnancy Category X",
					type: "pregnancy",
					value: "--"
				},
				{
					name: "Primary Metabolism",
					type: "metabolism",
					value: "--"
				},	
			],
			reactions:[
				{
					id: "0",
					warningLevel: "error",
					warningMessage: "No Statin Selected"
				},
			],
		},
		{
			id: "1",
			name: "Atorvastatin (Lipitor®)",
			dose:[
				{
					name: "Low Intensity Dose",
					type: "doselow",
					value: "--",
					htmlText: "--"
				},
				{
					name: "Moderate Intensity Dose",
					type: "dosemedium",
					value: "10 (20) mg",
					htmlText: "<b>10</b> <i>(20)</i> <b>mg</b>"
				},
				{
					name: "High Intensity Dose",
					type: "dosehigh",
					value: "(40†)–80 mg",
					htmlText: "<b>(40†)–80 mg</b>"
				},
				{
					name: "Other",
					type: "other",
					value: "other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "14 (Mean plasma elimination) 20-30 (inhibitory activity for HMG-CoA reductase is 20 to 30 hours due to the contribution of active metabolites)"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Any time of day/evening - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "Yes"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "CYP3A4"
				},	
			],
			reactions:[
				{
					id:'0',
					// name:"Amiodarone*",
					warningLevel:"warning",
					warningMessage:"May require lower starting and maintenance dose of atorvastatin†",
				},
				{
					id:'2',
					// name:"Atazanavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Use lowest possible dose of atorvastatin; titrate slowly; monitor for muscle symptoms§"
				},
				{
					id:'3',
					// name:"Boceprevir+",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 40 mg daily†"
				},
				{
					id:'4',
					// name:"Clarithromycin",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'5',
					// name:"Cobicistat-containing products*",
					warningLevel:"warning",
					warningMessage:"Initiate atorvastatin with lowest starting dose; titrate"
				},
					{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use†"
				},
				{
					id:'9',
					// name:"Darunavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'10',
					// name:"Diltiazem",
					warningLevel:"warning",
					warningMessage:"May increase atorvastatin exposure; monitor for muscle symptoms§"
				},
				{
					id:'11',
					// name:"Dronedarone",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'12',
					// name:"Erythromycin*",
					warningLevel:"warning",
					warningMessage:"Use caution; monitor for muscle symptoms§"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'14',
					// name:"Fluconazole",
					warningLevel:"warning",
					warningMessage:"Use caution; monitor for muscle symptoms§"
				},
				{
					id:'15',
					// name:"Fosamprenavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'16',
					// name:"Fosamprenavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'18',
					// name:"Grapefruit Juice",
					warningLevel:"warning",
					warningMessage:"Consuming more than 1.2 liters daily of grapefruit juice may increase atorvastatin level§"
				},
				{
					id:'19',
					// name:"Itraconazole*",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'20',
					// name:"Ketoconazole*",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'21',
					// name:"Lomitapide",
					warningLevel:"warning",
					warningMessage:"Do not exceed lomitapide 30 mg; monitor for muscle symptoms§"
				},
				{
					id:'22',
					// name:"Lopinavir plus ritonavir",
					warningLevel:"warning",
					warningMessage:"Use with caution and lowest dose of atorvastatin necessary†"
				},
				{
					id:'23',
					// name:"Nefazodone*",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'24',
					// name:"Nelfinavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 40 mg daily†"
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'26',
					// name:"Posaconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated§"
				},
				{
					id:'27',
					// name:"Ranolazine",
					warningLevel:"warning",
					warningMessage:"Use caution; monitor for muscle symptoms§"
				},
				{
					id:'28',
					// name:"Rifampin",
					warningLevel:"warning",
					warningMessage:"If used concomitantly, give at same time§"
				},
				{
					id:'29',
					// name:"Saquinavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed atorvastatin 20 mg daily†"
				},
				{
					id:'30',
					// name:"Telaprevir+",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use†"
				},
				{
					id:'31',
					// name:"Telithromycin*",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use§"
				},
				{
					id:'32',
					// name:"Tipranavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use†"
				},
				{
					id:'33',
					// name:"Verapamil",
					warningLevel:"warning",
					warningMessage:"May need lower dose; monitor for muscle symptoms§"
				},
			],
		},
		{
			id:"2",
			name:"Fluvastatin (Lescol®)",
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "20–40 mg",
					htmlText: "<i>20–40 mg</i>"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "40 mg BID",
					htmlText: "<b>40 mg</b> BID"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Other',
					type:'other',
					value: "other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "3"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Evening/bedtime - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "No"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
				},
			],
			reactions:[
				{
					id:'4',
					// name:"Clarithromycin",
					warningLevel:"warning",
					warningMessage:"Use Caution§"
				},
				{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"warning",
					warningMessage:"Do not exceed fluvastatin 20 mg†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'14',
					// name:"Fluconazole",
					warningLevel:"warning",
					warningMessage:"Do not exceed fluvastatin 20 mg twice daily; monitor for muscle symptoms.†"
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation* Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'35',
					// name:"Warfarin and other coumarin anticoagulants",
					warningLevel:"warning",
					warningMessage:"Monitor PT/INR†"
				},
			]
		},
		{
			id:"3",
			name:"Fluvastatin XL (Lescol XL®)",
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "80 mg ",
					htmlText: "<i>80 mg</i>"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Other',
					type:'other',
					value: "other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "9"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes" 
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Any time of day/evening-food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "No"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
				},
			],
			reactions:[
				{
					id:'4',
					// name:"Clarithromyci",
					warningLevel:"warning",
					warningMessage:"Use Caution§"
				},
				{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"warning",
					warningMessage:"Do not exceed fluvastatin 20 mg†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'14',
					// name:"Fluconazole",
					warningLevel:"warning",
					warningMessage:"Do not exceed fluvastatin 20 mg twice daily; monitor for muscle symptoms†"
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation* Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'35',
					// name:"Warfarin and other coumarin anticoagulants",
					warningLevel:"warning",
					warningMessage:"Monitor PT/INR†"
				},
			]
		},
		{
			id:"4",
			name:"Lovastatin (Mevacor®)",
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "20 mg",
					htmlText: "<b>20 mg</b>"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "40 mg",
					htmlText: "<b>40 mg</b>"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Other',
					type:'other',
					value: "Other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				},
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "1.1-1.7"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Evening/bedtime - Food required except for Altoprev extended-release formulation"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "Yes"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "CYP3A4"
				},
			],
			reactions:[
				{
					id:'0',
					// name:"Amiodarone*",
					warningLevel:"warning",
					warningMessage:"Do not exceed 40 mg lovastatin daily†"
				},
				{
					id:'2',
					// name:"Atazanavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'3',
					// name:"Boceprevir+",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'4',
					// name:"Clarithromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'5',
					// name:"Cobicistat-containing products*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'8',
					// name:"Danazol",
					warningLevel:"warning",
					warningMessage:"Do not exceed lovastatin 20 mg daily†"
				},
				{
					id:'9',
					// name:"Darunavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'10',
					// name:"Diltiazem",
					warningLevel:"warning",
					warningMessage:"Do not exceed lovastatin 20 mg daily†"
				},
				{
					id:'11',
					// name:"Dronedarone",
					warningLevel:"warning",
					warningMessage:"Do not exceed lovastatin 20 mg daily†"
				},
				{
					id:'12',
					// name:"Erythromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'14',
					// name:"Fluconazole",
					warningLevel:"warning",
					warningMessage:"Use caution; monitor for muscle symptoms.§"
				},
				{
					id:'15',
					// name:"Fosamprenavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'16',
					// name:"Fosamprenavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'18',
					// name:"Grapefruit Juice",
					warningLevel:"warning",
					warningMessage:"Avoid grapefruit juice†"
				},
				{
					id:'19',
					// name:"Itraconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'20',
					// name:"Ketoconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'21',
					// name:"Lomitapide",
					warningLevel:"warning",
					warningMessage:"Avoid concomitant use§"
				},
				{
					id:'22',
					// name:"Lopinavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'23',
					// name:"Nefazodone*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'24',
					// name:"Nelfinavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'26',
					// name:"Posaconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'27',
					// name:"Ranolazine",
					warningLevel:"warning",
					warningMessage:"Consider using a lower of lovastatin; monitor for muscle symptoms§"
				},
				{
					id:'29',
					// name:"Saquinavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'30',
					// name:"Telaprevir+",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'31',
					// name:"Telithromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'32',
					// name:"Tipranavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'33',
					// name:"Verapamil",
					warningLevel:"warning",
					warningMessage:"Do not exceed lovastatin 20 mg daily†"
				},
				{
					id:'34',
					// name:"Voriconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
			]
		},
		{
			id:"5",
			name:"Pitavastatin (Livalo®)",
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "1 mg",
					htmlText: "<i>1 mg</i>"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "2-4 mg",
					htmlText: "<i>2-4 mg</i>"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Other',
					type:'other',
					value: "Other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				},
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "12"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Any time of day/evening - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "No"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "Minimal CYP2C9 and CYP2C8"
				},
			],
			reactions:[
				{
					id:'6',
					// name:"Colchicine*",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine*",
					warningLevel:"error",
					warningMessage:"Contraindicated§"
				},
				{
					id:'12',
					// name:"Erythromycin*",
					warningLevel:"warning",
					warningMessage:"Do not exceed 1 mg once daily†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid*",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'17',
					// name:"Gemfibrozil*",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day *",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'28',
					// name:"Rifampin*",
					warningLevel:"warning",
					warningMessage:"Do not exceed 2 mg once daily†"
				},
				{
					id:'35',
					// name:"Warfarin and other coumarin anticoagulants*",
					warningLevel:"warning",
					warningMessage:"Monitor PT/INR†"
				},
			]
		},
		{
			id:"6",
			name:"Pravastatin (Pravachol®)",
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "10–20 mg",
					htmlText: "<b>10–20 mg</b>"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "40 (80) mg",
					htmlText: "<b>40 (80)</b> mg"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Other',
					type:'other',
					value: "Other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				},
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "1.8"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "No"
				},
				{
					name: "Optimal way to take Time of day Food required?",
					type:"timeofday",
					value: "Any time of day/evening - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "No"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "Minimal CYP450 metabolism"
				},
			],
			reactions:[
				{
					id:'3',
					// name:"Boceprevir+",
					warningLevel:"warning",
					warningMessage:"Concomitant use increases pravastatin exposure; may initiate pravastatin at recommended dose; monitor for muscle symptoms§"
				},
				{
					id:'4',
					// name:"Clarithromycin*",
					warningLevel:"warning",
					warningMessage:"Do not exceed pravastatin 40 mg once daily†"
				},
				{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"warning",
					warningMessage:"Do not exceed pravastatin 20 mg  once daily†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day ",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
			]
		},
		{
			id:"7",
			name:"Rosuvastatin (Crestor®)",
			alert:[
				{
					race:'Asian',
					warning:'Consider a 5 mg starting dose for Rosuvastatin in Asian population.'
				}
			],
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "--",
					htmlText: "--"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "(5) 10mg",
					htmlText: "<i>(5)</i> <b>10 mg</b>"
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "20 (40)mg",
					htmlText: "<b>20</b> <i>(40)</i> <b>mg</b>"
				},
				{
					name:'Other',
					type:'other',
					value: "other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "19"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "No"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Any time of day/evening - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "No"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "Minimal CYP2C9"
				},
			],
			reactions:[
				{
					id:'2',
					// name:"Atazanavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed rosuvasatin 10 mg once daily†"
				},
				{
					id:'4',
					// name:"Clarithromycin*",
					warningLevel:"warning",
					warningMessage:"Use Caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"warning",
					warningMessage:"Do not exceed rosuvastatin 5 mg once daily†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Avoid concomitant use* Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'22',
					// name:"Lopinavir plus ritonavir++",
					warningLevel:"warning",
					warningMessage:"Do not exceed 10 mg once daily†"
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day ",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'35',
					// name:"Warfarin and other coumarin anticoagulants",
					warningLevel:"warning",
					warningMessage:"Monitor PT/INR†"
				},
			]
		},
		{
			id:"8",
			name:"Simvastatin (Zocor®)",
			alert:[
				{
					dose:'80',
					warning:'Simvastatin – Initiation at 80mg daily or increase of up to 80mg daily may cause harm (III, A).'
				},
			],	
			dose:[
				{
					name:'Low Intensity Dose',
					type:'doselow',
					value: "10 mg",
					htmlText: "<i>10 mg</i>"
				},
				{
					name:'Moderate Intensity Dose',
					type:'dosemedium',
					value: "20-40 mg",
					htmlText: "<b>20-40 mg</b>"
					
				},
				{
					name:'High Intensity Dose',
					type:'dosehigh',
					value: "80mg‡",
					htmlText: "80mg‡"
				},
				{
					name:'Other',
					type:'other',
					value: "other",
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			],
			characteristics:[
				{
					name: "Half-life (h)",
					type:"halflife",
					value: "1.9"
				},
				{
					name: "Lipophilic?",
					type: 'lipophilic',
					value: "Yes"
				},
				{
					name: "Optimal Frequency",
					type:"timeofday",
					value: "Evening/bedtime - Food not required"
				},
				{
					name: "P-glycoprotein substrate?",
					type: "pglycoprotein",
					value: "Yes"
				},
				{
					name: "Pregnancy Category X",
					type: 'pregnancy',
					value: "Yes"
				},
				{
					name: "Primary Metabolism",
					type: 'metabolism',
					value: "CYP3A4"
				},
			],
			reactions:[
				{
					id:'0',
					// name:"Amiodarone*",
					warningLevel:"warning",
					warningMessage:"Do not exceed 20 mg daily†"
				},
				{
					id:'1',
					// name:"Amlodipine",
					warningLevel:"warning",
					warningMessage:"Do not exceed 20 mg daily†"
				},
				{
					id:'2',
					// name:"Atazanavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'3',
					// name:"Boceprevir+",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'4',
					// name:"Clarithromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'5',
					// name:"Cobicistat-containing products*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'6',
					// name:"Colchicine",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'7',
					// name:"Cyclosporine",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'8',
					// name:"Danazol",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'9',
					// name:"Darunavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'10',
					// name:"Diltiazem",
					warningLevel:"warning",
					warningMessage:"Do not exceed simvastatin 10 mg daily†"
				},
				{
					id:'11',
					// name:"Dronedarone",
					warningLevel:"warning",
					warningMessage:"Do not exceed simvastatin 10 mg daily†"
				},
				{
					id:'12',
					// name:"Erythromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'13',
					// name:"Fenofibrate/ Fenofibric acid",
					warningLevel:"warning",
					warningMessage:"Use caution.‡ - Recommended only with low or moderate intensity statin, and may be considered only if the benefits from ASCVD risk reduction or triglyceride lowering outweigh the potential risk for adverse effects. Renal status should be evaluated before fenofibrate initiation, within 3 months after initiation, and every 6 months thereafter. See ACC/AHA Blood Cholesterol Guideline for more guidance on renal function."
				},
				{
					id:'14',
					// name:"Fluconazole",
					warningLevel:"warning",
					warningMessage:"Use caution§"
				},
				{
					id:'15',
					// name:"Fosamprenavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'16',
					// name:"Fosamprenavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'17',
					// name:"Gemfibrozil",
					warningLevel:"error",
					warningMessage:"Contraindicated† Guideline Recommendation Gemfibrozil should not be initiated in patients on statin therapy because of an increased risk for muscle symptoms and rhabdomyolysis."
				},
				{
					id:'18',
					// name:"Grapefruit Juice",
					warningLevel:"warning",
					warningMessage:"Avoid grapefruit juice†"
				},
				{
					id:'19',
					// name:"Itraconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'20',
					// name:"Ketoconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'21',
					// name:"Lomitapide",
					warningLevel:"warning",
					warningMessage:"For patients with Homozygous Familial Hypercholesterolemia (HoFH), do not exceed 20 mg simvastatin daily.† For patients who have been taking 80 mg simvastatin chronically (e.g. for 12 months or more) without evidence of muscle toxicity, do not exceed 40 mg simvastatin while taking lomitapide†"
				},
				{
					id:'22',
					// name:"Lopinavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'23',
					// name:"Nefazodone*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'24',
					// name:"Nelfinavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'25',
					// name:"Niacin ≥ 1 g/day ",
					warningLevel:"warning",
					warningMessage:"Use caution with concomitant use†- To reduce the frequency and severity of adverse cutaneous flushing symptoms, it is reasonable to start niacin at a low dose and increase dose gradually over a period of weeks as tolerated. Take niacin with food or pre-medicate with aspirin 325 mg 30 minutes before niacin dosing. See ACC/AHA Blood Cholesterol Guideline for more information."
				},
				{
					id:'26',
					// name:"Posaconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'27',
					// name:"Ranolazine",
					warningLevel:"warning",
					warningMessage:"Do not exceed 20 mg daily†"
				},
				{
					id:'29',
					// name:"Saquinavir plus ritonavir++",Or, use worksheet to assess severity
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'30',
					// name:"Telaprevir+",error
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},

				{
					id:'31',
					// name:"Telithromycin*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'32',
					// name:"Tipranavir plus ritonavir++",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'33',
					// name:"Verapamil",
					warningLevel:"warning",
					warningMessage:"Do not exceed simvastatin 10 mg daily†"
				},
				{
					id:'34',
					// name:"Voriconazole*",
					warningLevel:"error",
					warningMessage:"Contraindicated†"
				},
				{
					id:'35',
					// name:"Warfarin and other coumarin anticoagulants",
					warningLevel:"warning",
					warningMessage:"Monitor PT/INR†"
				},
			]
		}
	],
	secondaryDrugs : [
		{
			id:"0",
			value:"false",
			name:"Amiodarone",
			category:'Other'
		},
		{
			id:"1",
			value:"true",
			name:"Amlodipine",
			category:'Other'
		},
		{
			id:"2",
			value:"false",
			name:"Atazanavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"3",
			value:"false",
			name:"Boceprevir",
			category:'Hepatitis C Protease Inhibitors'
		},
		{
			id:"4",
			value:"false",
			name:"Clarithromycin",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"5",
			value:"false",
			name:"Cobicistat-containing products",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"6",
			value:"false",
			name:"Colchicine",
			category:'Other'
		},
		{
			id:"7",
			value:"false",
			name:"Cyclosporine",
			category:'Other'
		},
		{
			id:"8",
			value:"false",
			name:"Danazol",
			category:'Other'
		},
		{
			id:"9",
			value:"false",
			name:"Darunavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"10",
			value:"false",
			name:"Diltiazem",
			category:'Other'
		},
		{
			id:"11",
			value:"false",
			name:"Dronedarone",
			category:'Other'
		},
		{
			id:"12",
			value:"false",
			name:"Erythromycin",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"13",
			value:"false",
			name:"Fibrate/Fibric acid",
			category:'Other'
		},
		{
			id:"14",
			value:"false",
			name:"Fluconazole",
			category:'Other'
		},
		{
			id:"15",
			value:"false",
			name:"Fosamprenavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
			{
			id:"16",
			value:"false",
			name:"Fosamprenavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"17",
			value:"false",
			name:"Gemfibrozil",
			category:'Other'
		},
		{
			id:"18",
			value:"false",
			name:"Excessive Grapefruit Juice (> 1.2 liters per day)",
			category:'Other'
		},
		{
			id:"19",
			value:"false",
			name:"Itraconazole",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"20",
			value:"false",
			name:"Ketoconazole",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"21",
			value:"false",
			name:"Lomitapide",
			category:'Other'
		},
		{
			id:"22",
			value:"false",
			name:"Lopinavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"23",
			value:"false",
			name:"Nefazodone",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"24",
			value:"false",
			name:"Nelfinavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"25",
			value:"false",
			name:"Niacin ≥ 1 g/day",
			category:'Other'
		},
		{
			id:"26",
			value:"false",
			name:"Posaconazole",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"27",
			value:"false",
			name:"Ranolazine",
			category:'Other'
		},
		{
			id:"28",
			value:"false",
			name:"Rifampin",
			category:'Other'
		},
		{
			id:"29",
			value:"false",
			name:"Saquinavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"30",
			value:"false",
			name:"Telaprevir",
			category:'Hepatitis C Protease Inhibitors'
		},
		{
			id:"31",
			value:"false",
			name:"Telithromycin",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"32",
			value:"false",
			name:"Tipranavir plus ritonavir",
			category:'HIV Protease Inhibitors'
		},
		{
			id:"33",
			value:"false",
			name:"Verapamil",
			category:'Other'
		},
		{
			id:"34",
			value:"false",
			name:"Voriconazole",
			category:'Strong CYP3A4 Inhibitors'
		},
		{
			id:"35",
			value:"false",
			name:"Warfarin and other coumarin anticoagulants",
			category:'Other'
		}
	],
	nextSteps : [
		{
			id:"0",
			value:"true",
			what:"any",
			selected:"any",
			copy:"<b>Conduct any <a href='#!/subpages/labsEvaluate'><u>labs needed</u></a></b> to establish risk factors or secondary causes.",
		},
		{
			id:"1",
			value:"servere",
			selected:"muscleServerity",
			copy:"<b>Consider suspending statins until symptoms resolve.</b>",
		},
		{
			id:"2",
			value:"servere",
			selected:"muscleServerity_CK_Combo",
			copy:"<b>Check for rhabdomyolysis</b> by evaluating CK level and creatinine, and performing urinalysis for myoglobinuria. Fever, discolored urine, and/ or marked weakness in the patient signal the need for emergency attention.",
		},
		{
			id:"3",
			value:"yes",
			selected:"CK",
			copy:"<b>Check for rhabdomyolysis</b> by evaluating CK level and creatinine, and performing urinalysis for myoglobinuria. Fever, discolored urine, and/ or marked weakness in the patient signal the need for emergency attention.",
		},
		{
			id:"4",
			value:"dontKnow",
			selected:"CK",
			copy:"<b>Check CK level</b> for elevation above 5x ULN.",
		},
		{
			id:"5",
			value:"any",
			selected:"secondaryCauses",
			copy:"If symptoms were determined to arise from non-statin cause or if the predisposing condition has been treated, you may resume statin therapy at original dose.",
		},
		{
			id:"6",
			value:"mild",
			selected:"muscleServerity",
			copy:"<b>If no secondary cause for symptoms confirmed, consider benefit of statin to patient, risk of discontinuing statin, and patient preference. If appropriate, temporarily discontinue statin until symptoms resolve.</b>",
		},
		{
			id:"7",
			value:"true",
			what:"any",
			copy:"See Follow-up tab for next steps in continuing statin therapy. See Drug Comparison tab for help in selecting a different statin.",
		},
	]
}

