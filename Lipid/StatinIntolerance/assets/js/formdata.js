var charactisiticsOption =[
		{Value: "",Text: "Select"},
		{Value: "dosage",Text: "Dose Intensity"},
		{Value: "halflife",Text: "Half-life (h)"},
		{Value: "lipophilic",Text: "Lipophilic?"},
		{Value: "timeofday",Text: "Optimal Frequency"},
		{Value: "pglycoprotein",Text: "P-glycoprotein substrate?"},
		{Value: "pregnancy",Text: "Pregnancy Category X"},
		{Value: "metabolism",Text: "Primary Metabolism"}		
	]

var genderOption = [
		{Text:"Male",Value:"0"},
		{Text:"Female",Value:"1"}
	]

var raceOption = [
		{Text:"American Indian or Alaska Native",Value:"0"},
		{Text:"Asian",Value:"1"},
		{Text:"Black or African American",Value:"2"},
		{Text:"Hispanic or Latino",Value:"3"},
		{Text:"Native Hawaiian or Other Pacific Islander",Value:"4"},
		{Text:"White",Value:"5"},
	]

var ageOption = [
		{Text:"≤ 18",Value:"0"},
		{Text:"19-39",Value:"1"},
		{Text:"40-74",Value:"2"},
		{Text:"≥ 75",Value:"3"}
	]

var frequencyOption = [
		{Text:"Once daily",Value:"0"},
		{Text:"Twice daily",Value:"1"},
		{Text:"Every other day",Value:"2"},
		{Text:"Once a week",Value:"3"},
		{Text:"Twice a week",Value:"4"},
		{Text:"Other",Value:"5"}
	]

var timedayOption = [
		{Text:"Morning",Value:"0"},
		{Text:"Afternoon/Evening",Value:"1"},
		{Text:"Bedtime",Value:"2"},
	]

var monthOption = [
		{Text:"January",Value:"0"},
		{Text:"February",Value:"1"},
		{Text:"March",Value:"2"},
		{Text:"April",Value:"3"},
		{Text:"May",Value:"4"},
		{Text:"June",Value:"5"},
		{Text:"July",Value:"6"},
		{Text:"August",Value:"7"},
		{Text:"September",Value:"8"},
		{Text:"October",Value:"9"},
		{Text:"November",Value:"10"},
		{Text:"December",Value:"11"},
	]

// var yearOption = [
// 		{Text:"2016"},{Text:"2015"},{Text:"2014"},{Text:"2013"},{Text:"2012"},{Text:"2011"},{Text:"2010"},{Text:"2009"},{Text:"2008"},{Text:"2007"},{Text:"2006"},{Text:"2005"},{Text:"2004"},{Text:"2003"},{Text:"2002"},{Text:"2001"},{Text:"2000"},{Text:"1999"},{Text:"1998"},{Text:"1997"},{Text:"1996"},{Text:"1995"},{Text:"1994"},{Text:"1993"},{Text:"1992"},{Text:"1991"},{Text:"1990"},{Text:"1988"},{Text:"1987"},{Text:"1986"},{Text:"1985"},{Text:"1984"},{Text:"1983"},{Text:"1982"},{Text:"1981"},{Text:"1980"},{Text:"1979"},{Text:"1978"},{Text:"1977"},{Text:"1976"},{Text:"1975"},{Text:"1974"},{Text:"1973"},{Text:"1972"},{Text:"1971"},{Text:"1970"},{Text:"1969"},{Text:"1968"},{Text:"1967"},{Text:"1966"},{Text:"1965"},{Text:"1964"},{Text:"1963"},{Text:"1962"},{Text:"1961"},{Text:"1960"},{Text:"1959"},{Text:"1958"},{Text:"1957"},{Text:"1956"},{Text:"1955"},{Text:"1954"},{Text:"1953"},{Text:"1952"},{Text:"1951"},{Text:"1950"},{Text:"1949"},{Text:"1948"},{Text:"1947"},{Text:"1946"},{Text:"1945"},{Text:"1944"},{Text:"1943"},{Text:"1942"},{Text:"1941"},{Text:"1940"},{Text:"1939"},{Text:"1938"},{Text:"1937"},{Text:"1936"},{Text:"1935"},{Text:"1934"},{Text:"1933"},{Text:"1932"},{Text:"1931"},{Text:"1930"},{Text:"1929"},{Text:"1928"},{Text:"1927"},{Text:"1926"},{Text:"1925"},{Text:"1924"},{Text:"1923"},{Text:"1922"},{Text:"1921"},{Text:"1920"},{Text:"1919"},{Text:"1918"},{Text:"1917"},{Text:"1916"},{Text:"1915"},{Text:"1914"},{Text:"1913"},{Text:"1912"},{Text:"1911"},{Text:"1910"},
// 	]

var painLevelOptions = [	
		{Text:"0-2 (Mild)",Value:"0"},
		{Text:"3-5 (Moderate)",Value:"1"},
		{Text:"6-10 (Severe)",Value:"2"}
	]

var PainFrequencyOptions = [
		{Text:"1-2 (Mild)",Value:"0"},
		{Text:"3-4 (Moderate)",Value:"1"},
		{Text:"5-7 (Severe)",Value:"2"}	
	]
var resultTable = {
	Gender:[
			{
				id:'0',
				name: "Sex",
				value:"Male",
				tableCopy:"Sex",
				tableResults:"Male",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Sex",
				value:"Female",
				tableCopy:"Sex",
				tableResults:"Female predisposes to statin adverse effects. May need lower dose or alternate statin.",
				result:"possible",
				status: 'alert'
			}],
	Age:[
			{
				id:"1",
				name: "Age",
				value :"≤18",
				tableCopy:"Age",
				tableResults:"≤ 18 Statin intolerance is rare in the pediatric population",
				result:'unlikely',
				status: 'alert'
			},
			{
				id:'2',
				name: "Age",
				value:"19-39",
				tableCopy:"Age",
				tableResults:"19-39",
				result:"none",
				status:'none'
			},
			{
				id:'3',
				name: "Age",
				value:"40-74",
				tableCopy:"Age",
				tableResults:"40-74",
				result:"none",
				status:'none'
			},
			{
				id:'4',
				name: "Age",
				value:"≥75",
				tableCopy:"Age",
				tableResults:"≥ 75 predisposes to statin adverse effects. May need lower dose or alternate statin.",
				result:"possible",
				status:"warning"
			}
	],
	Race:[
			{
				id:'1',
				name: "Race/Ethnicity",
				value:"American Indian or Alaska Native",
				tableCopy:"Race/Ethnicity",
				tableResults:"American Indian or Alaska Native",
				result:"none",
				status:'none'
			},
			{
				id:'2',
				name: "Race/Ethnicity",
				value:"Asian",
				tableCopy:"Race/Ethnicity",
				tableResults:"Asian ancestry predisposes to statin adverse effects. May need to lower dose or alternate statin",
				result:"possible",
				status:"warning"
			},
			{
				id:'3',
				name: "Race/Ethnicity",
				value:"Black or African American",
				tableCopy:"Race/Ethnicity",
				tableResults:"Black or African American",
				result:"none",
				status:'none'
			},
			{
				id:'4',
				name: "Race/Ethnicity",
				value:"Hispanic or Latino",
				tableCopy:"Race/Ethnicity",
				tableResults:"Hispanic or Latino",
				result:"none",
				status:'none'
			},
			{
				id:'5',
				name: "Race/Ethnicity",
				value:"Native Hawaiian or Other Pacific Islander",
				tableCopy:"Race/Ethnicity",
				tableResults:"Native Hawaiian or Other Pacific Islander",
				result:"none",
				status:'none'
			},
			{
				id:'6',
				name: "Race/Ethnicity",
				value:"White",
				tableCopy:"Race/Ethnicity",
				tableResults:"White",
				result:"none",
				status:'none'
			}
	],
	PainSymptoms:[
			{
				id:'0',
				name: "Symptom Type",
				value:"Pain Symptoms",
				tableCopy:"Symptoms Type",
				tableResults:"Tingling, Twitching, Shooting Pain, Nocturnal Cramps, Joint Pain",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Symptom Type",
				value:"Pain Symptoms",
				tableCopy:"Symptoms Type",
				tableResults:"Muscle ache, Weakness, Soreness, Stiffness, Cramping, Tenderness General Fatigue",
				result:"possible",
				status: 'alert'
			}],
	PainArea:[
			{
				id:'0',
				name: "Symptom Location",
				value:"Pain Area",
				tableCopy:"Symptom Location",
				tableResults:"Unilateral",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Symptom Location",
				value:"Pain Area",
				tableCopy:"Symptom Location",
				tableResults:"Bilateral",
				result:"possible",
				status: 'alert'
			}],
	CKStatus:[
			{
				id:'0',
				name: "CK Elevated > 5x ULN?",
				value:"CK Elevated",
				tableCopy:"CK Elevated?",
				tableResults:"Yes",
				result:"possible",
				status: 'alert'
			},
			{
				id:'1',
				name: "CK Elevated > 5x ULN?",
				value:"CK Elevated",
				tableCopy:"CK Elevated?",
				tableResults:"No",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'2',
				name: "CK Elevated > 5x ULN?",
				value:"CK Elevated",
				tableCopy:"CK Elevated?",
				tableResults:"Don't Know",
				result:"unlikely",
				status: 'alert'
			}],
	RiskFactor:[
			{
				id:'0',
				name: "Risk Factors for Statin Symptoms",
				value:"Risk Factors",
				tableCopy:"Risk Factors",
				tableResults:"None Identified",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Risk Factors for Statin Symptoms",
				value:"Risk Factors",
				tableCopy:"Risk Factors",
				tableResults:"Identified",
				result:"possible",
				status: 'alert'
			}],
	SecondaryCause:[
			{
				id:'0',
				name: "Non-Statin Causes",
				value:"Secondary Causes",
				tableCopy:"Secondary Causes",
				tableResults:"Identified",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Non-Statin Causes",
				value:"Secondary Causes",
				tableCopy:"Secondary Causes",
				tableResults:"None Identified",
				result:"possible",
				status: 'alert'
			}],
	TimeWarning:[
			{
				id:'0',
				name: "Symptom timing allows for statin intolerance",
				value:"Year of Symptoms",
				tableCopy:"No - Symptoms predate current statin use.",
				tableResults:"Identified",
				result:"unlikely",
				status: 'alert'
			},
			{
				id:'1',
				name: "Symptom timing allows for statin intolerance",
				value:"Year of Symptoms",
				tableCopy:"Yes",
				tableResults:"None Identified",
				result:"possible",
				status: 'alert'
			}],
}
		
var formData = {
	patientRisk : [
			{
				name: 'Patient Characteristics',
				type: 'Group',
				checks: [
					{
						id:"0",
						value:"false",
						name:"Low BMI"
					},
					{
						id:"1",
						value:"false",
						name:"Frailty"
					},
					{
						id:"2",
						value:"false",
						name:"Excessive grapefruit juice consumption (> 1.2 liters per day)"
					},
					{
						id:"3",
						value:"false",
						name:"High alcohol consumption"
					},
					{
						id:"4",
						value:"false",
						name:"Drug abuse (cocaine, amphetamine, heroin)"
					},
					{
						id:"5",
						value:"false",
						name:"Heavy exercise/physical exertion",
					},
					{
						id:"6",
						value:"false",
						name:"Dehydration or decrease in daily fluid intake"
					},
					{
						id:"7",
						value:"false",
						name:"Personal or immediate family history of statin intolerance"
					}
				]
			},
			{
				name:"Medical History",
				type: 'Group',
				checks:[
					// {
					// 	id:"8",
					// 	value:"false",
					// 	name:"Hemorrhagic stroke history (reconsider use of high intensity statin)"
					// },
					{
						id:"8",
						value:"false",
						name:"Unexplained ALT elevations ≥3 times ULN"
					},
					{
						id:"9",
						value:"false",
						name:"Renal insufficiency"
					},
					{
						id:"10",
						value:"false",
						name:"Hepatic dysfunction"
					},
					{
						id:"11",
						value:"false",
						name:"Multiple or serious comorbidities"
					},
					// {
					// 	id:"13",
					// 	value:"false",
					// 	name:"Elevated ESR (erythrocyte sedimentation rate)"
					// }
				]
			},
		],
	nonStanin:[
		{
		name:"Medical History",
		type:"Group",
			checks:[
				{
					id:"0",
					value:"false",
					name:"Multiple or serious comorbidities",
					category:'Medical History'
				},
				{
					id:"1",
					value:"false",
					name:"Previous muscle disorder history",
					category:'Medical History'
				},
				{
					id:"2",
					value:"false",
					name:"Heavy exercise/Physical exertion",
					category:'Medical History'
				},
				{
					id:"3",
					value:"false",
					name:"Trauma",
					category:'Medical History'
				},
				{
					id:"4",
					value:"false",
					name:"Seizures",
					category:'Medical History'
				},
				{
					id:"5",
					value:"false",
					name:"Electrolytic abnormalities",
					category:'Medical History'
				},
				{
					id:"6",
					value:"false",
					name:"Vitamin D deficiency",
					category:'Medical History'
				},
				{
					id:"7",
					value:"false",
					name:"Hypothyroidism",
					category:'Medical History'
				},
				{
					id:"8",
					value:"false",
					name:"Multi-organ disease",
					category:'Medical History'
				},
				{
					id:"9",
					value:"false",
					name:"Post-op state, especially surgery with high metabolic demands",
					category:'Medical History'
				},
				{
					id:"10",
					value:"false",
					name:"Elevated ESR (erythrocyte sedimentation rate)",
					category:'Medical History'
				},
			],
		},
		{
		name:"Medical Conditions",
		type:"Group",
		checks:[]
		},
		{
		name:"Primary Muscle Diseases",
		type: 'SubGroup',
			checks:[
				{
					id:"11",
					value:"false",
					name:"Muscular Dystrophy",
				},
				{
					id:"12",
					value:"false",
					name:"Polymyalgia rheumatica",
				},
				{
					id:"13",
					value:"false",
					name:"Polymyosytis",
				},
				{
					id:"14",
					value:"false",
					name:"Rhabdomyolysis",
				},
				{
					id:"15",
					value:"false",
					name:"Steroid myopathy",
				},
			],
		},
		{
		name:"Rheumatological Disorders",
		type: 'SubGroup',
			checks:[
				{
					id:"16",
					value:"false",
					name:"Arthritis",
				},
				{
					id:"17",
					value:"false",
					name:"Fibromyalgia",
				},
				{
					id:"18",
					value:"false",
					name:"Systemic Lupus",
				},
				{
					id:"19",
					value:"false",
					name:"Tendonitis or joint disorder",
				},
			],
		},
		{
		name:"Additional Disorders",
		type: 'SubGroup',
			checks:[
				{
					id:"20",
					value:"false",
					name:"Diabetes",
				},
				{
					id:"21",
					value:"false",
					name:"Adrenal insufficiency/Cushing Syndrome",
				},
				{
					id:"22",
					value:"false",
					name:"Addison’s disease",
				},
				{
					id:"23",
					value:"false",
					name:"Anemia",
				},
				{
					id:"24",
					value:"false",
					name:"Hypoparathyroidism",
				},
				{
					id:"25",
					value:"false",
					name:"Peripheral arterial disease",
				},
				{
					id:"26",
					value:"false",
					name:"Viral illness",
				},
			],
		},
	]
}