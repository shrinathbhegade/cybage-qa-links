/*!
* databaseConstantsModel JS
* databaseConstantsModel is used to define database constants to populate in fields.
*/
define(['knockout',"jquery","pager"], function(ko,$,pager) {
    
    var proceduralBleedRiskDropDown = [
		{ bleedrisk_dropdown_id: "1", bleed_risks_name: "High", bleed_risks_name_display: "High Risk" },
		{ bleedrisk_dropdown_id: "2", bleed_risks_name: "Intermediate", bleed_risks_name_display: "Intermediate Risk" },
		{ bleedrisk_dropdown_id: "3", bleed_risks_name: "Low", bleed_risks_name_display: "Low Risk" },
		{ bleedrisk_dropdown_id: "4", bleed_risks_name: "Not clinically important", bleed_risks_name_display: "Risk Not clinically important"            },
		{ bleedrisk_dropdown_id: "5", bleed_risks_name: "Uncertain", bleed_risks_name_display: "Uncertain Risk" }
		];
    
    var therapyType = [
        { drug_id: "1", drugs: "Apixaban", drug_type: "DOAC - Anti-Xa" },
        { drug_id: "2", drugs: "Dabigatran", drug_type: "DOAC – DTI" },
        { drug_id: "3", drugs: "Edoxaban", drug_type: "DOAC - Anti-Xa" },
        { drug_id: "4", drugs: "Rivaroxaban", drug_type: "DOAC - Anti-Xa" },
        { drug_id: "5", drugs: "Warfarin", drug_type: "VKA" }
    ];
    
    var patientBleedRiskQuestions = [
        { bleed_id: "1", questions: "Prior bleed event within 3 months", bleed_info_title: "", bleed_show_info: "false" },
        { bleed_id: "2", questions: "Bleed complications from similar procedure", bleed_info_title: "", bleed_show_info: "false" },
        { bleed_id: "3", questions: "Bleeding with bridging in the past", bleed_info_title: "", bleed_show_info: "false" },
        { bleed_id: "4", questions: "Quantitative or qualitative platelet abnormality", bleed_info_title: "For instance, uremia, concomitant use of antiplatelet therapy, including aspirin use (or other medications/supplements associated with platelet dysfunction)", bleed_show_info: "true" },
        { bleed_id: "5", questions: "INR above therapeutic range", bleed_info_title: "Warfarin patients only", bleed_show_info: "true" }
    ];
    
    var proceduralBleedRisks = [
      {
        procedure_id: "0", 
        procedure_name: "My procedure is not in the list",
        bleed_risks: "Uncertain",
        comments: ""
      },
      {
        procedure_id: "1", 
        procedure_name: "Valvuloplasty, aortic",
        bleed_risks: "Uncertain",
        comments: "Classified Intermediate Risk the Society for Cardiovascular Angiography and Interventions and High Risk by ACC's Interventional Section Council   "
      },
      {
        procedure_id: "2", 
        procedure_name: "MCS (mechanical circulatory support)",
        bleed_risks: "High",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "3", 
        procedure_name: "Valvuloplasty, mitral",
        bleed_risks: "Uncertain",
        comments: "Classified Low Risk by the Society for Cardiovascular Angiography and Interventions and High Risk by ACC's Interventional Section Council  "
      },
      {
        procedure_id: "4", 
        procedure_name: "LAAO (left atrial appendage occlusion), Lariat procedure",
        bleed_risks: "High",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "5", 
        procedure_name: "Cardiac exploration (i.e., removal foreign body) w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "6", 
        procedure_name: "Suture repair of aorta/great vessels w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "7", 
        procedure_name: "Repair, aortic valve (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "8", 
        procedure_name: "Replacement, aortic valve (homograft, stentless bioprosthetic) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "9", 
        procedure_name: "Replacement, aortic valve (stented bioprosthetic or mechanical) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "10", 
        procedure_name: "Replacement, aortic valve w/ root enlargement (non-coronary) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "11", 
        procedure_name: "Valvuloplasty, aortic (open, surgical w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "12", 
        procedure_name: "Repair, LVOT (left ventricular outflow tract) w/ patch (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "13", 
        procedure_name: "Ventriculomyotomy (i.e., septal myomectomy) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "14", 
        procedure_name: "Repair, mitral valve (open w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "15", 
        procedure_name: "Replacement, mitral valve (open w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "16", 
        procedure_name: "Valvotomy, mitral valve (open) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "17", 
        procedure_name: "Repair, tricuspid valve (open w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "18", 
        procedure_name: "Replacement, tricuspid valve (open w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "19", 
        procedure_name: "Repair, pulmonary valve (open w/ bypass) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "20", 
        procedure_name: "Replacement, pulmonary valve (open) w/ bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "21", 
        procedure_name: "Valve surgery, re-operation w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "22", 
        procedure_name: "RVOT (right ventricular outflow tract) enlargement (patch) w/ bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "23", 
        procedure_name: "Repair, coronary artery anomalies (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "24", 
        procedure_name: "Embolectomy, pulmonary artery (acute) w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "25", 
        procedure_name: "Thrombo-embolectomy, pulmonary artery (chronic) w/ bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "26", 
        procedure_name: "Transplant, heart (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "27", 
        procedure_name: "Transplant, lung (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "28", 
        procedure_name: "Transplant, heart-Lung (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "29", 
        procedure_name: "ECMO (extracorporeal membrane oxygenation) cannulation (veno-venous, veno-arterial – central) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "30", 
        procedure_name: "ECMO (extracorporeal membrane oxygenation) cannula revision (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "31", 
        procedure_name: "Replacement, ascending aorta (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "32", 
        procedure_name: "Replacement, ascending aorta w/ root and coronary re-implant (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "33", 
        procedure_name: "Replacement, aortic arch (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "34", 
        procedure_name: "Advancement, aortic arch (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "35", 
        procedure_name: "Re-operation, cardiac surgery (any) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "36", 
        procedure_name: "Implant, LVAD (left ventricular assist device), RVAD (right ventricular assist device), or Bi-VAD (biventricular assist device) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "37", 
        procedure_name: "Removal, LVAD (left ventricular assist device), RVAD (right ventricular assist device), or Bi-VAD (biventricular assist device) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "38", 
        procedure_name: "Repair, LV (left ventricular) aneurysm (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "39", 
        procedure_name: "Surgical ablation (e.g., MAZE) w/ resection of tissue w/ bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "40", 
        procedure_name: "Lead extraction, chronic pacemaker/ICD (implantable cardioverter defibrillator) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "41", 
        procedure_name: "Placement, epicardial pacemaker leads (via thoracotomy) (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "42", 
        procedure_name: "Resection, extra-cardiac tumor w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "43", 
        procedure_name: "Resection, intracardiac tumor w/ bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "44", 
        procedure_name: "Complex congenital open heart surgery  (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "45", 
        procedure_name: "Congenital open heart surgery w/ or w/o bypass (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "46", 
        procedure_name: "Re-operation, congenital heart defects (pediatric)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "47", 
        procedure_name: "Decortication, partial or complete",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "48", 
        procedure_name: "Resection, apical (Pancoast) tumor w/ chest resection",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "49", 
        procedure_name: "Pericardiectomy, partial/total w/ or w/o bypass",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "50", 
        procedure_name: "Resection, intracardiac tumor w/ bypass",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "51", 
        procedure_name: "Resection, extracardiac tumor w/ or w/o bypass",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "52", 
        procedure_name: "Transmyocardial revascularization",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "53", 
        procedure_name: "Placement of epicardial pacemaker leads (via thor)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "54", 
        procedure_name: "Chronic Pacer/ICD Lead extraction",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "55", 
        procedure_name: "Ablation of afib/WPW/VT-VF (VATS/thor/sternotomy)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "56", 
        procedure_name: "Repair of cardiac wound (w/wo bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "57", 
        procedure_name: "Cardiac exploration (i.e. removal foreign body) (w/wo bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "58", 
        procedure_name: "Suture repair of aorta or great vessels (w/wo bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "59", 
        procedure_name: "TAVR/TAVI – transapical",
        bleed_risks: "High",
        comments: "Classified by both ACC's Interventaional Section Council and the Society for Cardiovascular Angiography and Interventions "
      },
      {
        procedure_id: "60", 
        procedure_name: "Repair, aortic valve",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "61", 
        procedure_name: "Replacement, aortic valve (stented bioprosthetic or mechanical)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "62", 
        procedure_name: "Valvuloplasty, aortic (open, surgical w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "63", 
        procedure_name: "Aortic valve replacement (homograft, stentless)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "64", 
        procedure_name: "AVR with root enlargement (non-coronary)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "65", 
        procedure_name: "Repair of LVOT with patch",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "66", 
        procedure_name: "Resection of sub-aortic membrane",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "67", 
        procedure_name: "Ventriculomyotomy (i.e. septal myomectomy)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "68", 
        procedure_name: "Mitral valve valvotomy (closed)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "69", 
        procedure_name: "Mitral valve repair (open, w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "70", 
        procedure_name: "Mitral valve valvotomy (open)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "71", 
        procedure_name: "Tricuspid valve valvotomy (closed)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "72", 
        procedure_name: "Tricuspid valve repair (open, w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "73", 
        procedure_name: "Tricuspid valve replacement (open, w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "74", 
        procedure_name: "Tricuspid valve valvotomy (open)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "75", 
        procedure_name: "Pulmonary valve valvotomy (closed)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "76", 
        procedure_name: "Pulmonary valve repair (open, w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "77", 
        procedure_name: "Pulmonary valve replacement (open, w/ bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "78", 
        procedure_name: "Pulmonary valve valvotomy (open)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "79", 
        procedure_name: "RVOT enlargement (patch, bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "80", 
        procedure_name: "Repair of coronary artery anomalies",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "81", 
        procedure_name: "Re-operative valve surgery",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "82", 
        procedure_name: "Coronary endarterectomy",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "83", 
        procedure_name: "Pulmonary artery embolectomy (w/wo bypass) – acute",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "84", 
        procedure_name: "Pulmonary artery thrombo-embolectomy (w/ bypass)-chronic",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "85", 
        procedure_name: "Heart Transplant",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "86", 
        procedure_name: "Lung Transplant",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "87", 
        procedure_name: "Heart-Lung Transplant",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "88", 
        procedure_name: "Esophagectomy",
        bleed_risks: "High",
        comments: "Classified by both ACC's Surgeons Section Council and the Society for Thoracic Surgeons"
      },
      {
        procedure_id: "89", 
        procedure_name: "Repair of esophageal perforation",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "90", 
        procedure_name: "Resection of intra-luminal esophageal tumor",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "91", 
        procedure_name: "Esophageal myectomy",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "92", 
        procedure_name: "Photodynamic therapy (lung, esophageal)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "93", 
        procedure_name: "Replace ascending aorta",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "94", 
        procedure_name: "Replace ascending aorta with root (coronary re-implant)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "95", 
        procedure_name: "Replace aortic arch",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "96", 
        procedure_name: "Re-operative cardiac surgery (any)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "97", 
        procedure_name: "Implant LVAD/RVAD/Bi-VAD",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "98", 
        procedure_name: "Removal of LVAD/RVAD/Bi-VAD",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "99", 
        procedure_name: "Repair LV aneurysm",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "100", 
        procedure_name: "Repair paraesophageal hernia – open",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "101", 
        procedure_name: "Resection of diaphragm",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "102", 
        procedure_name: "Replace descending aorta",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "103", 
        procedure_name: "Major elective lower extremity surgery, THA (total hip arthroplasty), TKA (total knee arthroplasty), or revision of THA/TKA",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "104", 
        procedure_name: "Major soft tissue resection, lower extremity",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "105", 
        procedure_name: "Trauma, upper extremity fracture w/o tourniquet ",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "106", 
        procedure_name: "Trauma, lower extremity fracture w/o tourniquet",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "107", 
        procedure_name: "Trauma, hip, pelvis and acetabular fractures",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "108", 
        procedure_name: "Substantial hand and upper extremity surgery (e.g., total elbow or shoulder arthroplasty)",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "109", 
        procedure_name: "Spine surgeries (all)",
        bleed_risks: "High",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "110", 
        procedure_name: "Craniotomy",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "111", 
        procedure_name: "Laminectomy",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "112", 
        procedure_name: "Discectomy",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "113", 
        procedure_name: "Fusion, spinal",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "114", 
        procedure_name: "Endarterectomy, carotid",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "115", 
        procedure_name: "Embolization, intracranial",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "116", 
        procedure_name: "Embolectomy, stroke",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "117", 
        procedure_name: "Stimulation, deep brain",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "118", 
        procedure_name: "Stimulation, spinal cord",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "119", 
        procedure_name: "Craniectomy",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "120", 
        procedure_name: "VP (ventriculoperitioneal) shunt",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "121", 
        procedure_name: "LP (lumbar puncture)",
        bleed_risks: "Uncertain",
        comments: "Classified Intermediate Risk by the America College of Physicians and High Risk by the American Association of Neurological Surgeons"
      },
      {
        procedure_id: "122", 
        procedure_name: "Pituitary surgery",
        bleed_risks: "High",
        comments: "Classified by American Association of Neurological Surgeons"
      },
      {
        procedure_id: "123", 
        procedure_name: "Facial trauma repair by open techniques",
        bleed_risks: "High",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "124", 
        procedure_name: "Corrective jaw or facial surgery",
        bleed_risks: "High",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "125", 
        procedure_name: "Excision, bone or large soft tissue pathology",
        bleed_risks: "High",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "126", 
        procedure_name: "Radical hysterectomy, endoscopic or laparotomy",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "127", 
        procedure_name: "Node dissection, endoscopic or laparatomy",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "128", 
        procedure_name: "Peritoneal (ovarian) cancer debulking",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "129", 
        procedure_name: "Cesarean delivery, primary or repeat",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "130", 
        procedure_name: "Spontaneous vaginal delivery",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "131", 
        procedure_name: "Operative vaginal delivery, w/ forceps, vacuum",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "132", 
        procedure_name: "Myomectomy, endoscopic or laparotomy for a markedly enlarged uterus and/or a large number of leiomyomata",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "133", 
        procedure_name: "Vulvectomy ",
        bleed_risks: "High",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "134", 
        procedure_name: "Axillary dissection",
        bleed_risks: "High",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "135", 
        procedure_name: "Mastectomy (all types except partial), w/ or w/o SLN (sentinel lymph node) biopsy, axillary dissection, or reconstruction (all types)",
        bleed_risks: "High",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "136", 
        procedure_name: "Reduction mammoplasty",
        bleed_risks: "High",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "137", 
        procedure_name: "Lumpectomy w/ oncoplastic reconstruction (advancement of adjacent tissue)",
        bleed_risks: "High",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "138", 
        procedure_name: "Native kidney biopsy, percutaneous",
        bleed_risks: "High",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "139", 
        procedure_name: "Transplant kidney biopsy, percutaneous",
        bleed_risks: "High",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "140", 
        procedure_name: "Banding, AV (arteriovenous) fistula (e.g., percutaneous-MILLER, e-DAB)",
        bleed_risks: "High",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "141", 
        procedure_name: "Trial and implant, spinal cord stimulator (SCS)",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "142", 
        procedure_name: "Implant, intrathecal catheter and pump",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "143", 
        procedure_name: "Vertebral augmentation (vertebroplasty and kyphoplasty)",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "144", 
        procedure_name: "Epiduroscopy and epidural compression",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "145", procedure_name: "Regional nerve block, deep and non-compressible plexus/peripheral (e.g., supraclavicular, lumbar plexus)",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "146", 
        procedure_name: "Neuraxial block (spinal, epidural) ",
        bleed_risks: "High",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "147", 
        procedure_name: "Prostate outlet procedures w/ electrocautery",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "148", 
        procedure_name: "TURBT (Transurethral resection of bladder tumor), not CBF, upon resumption of anticoagulants",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "149", 
        procedure_name: "Incisional biopsy (highly vascular organs), renal capsule and/or parenchyma ",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "150", 
        procedure_name: "Incisional biopsy (highly vascular organs, tunica albuginea of testes ",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "151", 
        procedure_name: "Pelvic dissection for cystectomy/prostatectomy w/ or w/o lymph node dissection",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "152", 
        procedure_name: "Sacrocolpopexy (any method) (Female reconstructive procedure)",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "153", 
        procedure_name: "Hysterectomy for prolapse (Female reconstructive procedure)",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "154", 
        procedure_name: "Percutaneous nephroscopy (newly treated tract)",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "155", 
        procedure_name: "Urethroplasty (male reconstructive procedure)",
        bleed_risks: "High",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "156", 
        procedure_name: "Lead extraction, mechanical/laser assisted",
        bleed_risks: "High",
        comments: "Classified by Electrophysiology Section Leadership Council of the American College of Cardiology "
      },
      {
        procedure_id: "157", 
        procedure_name: "Ablation, epicardial VT (ventricular tachycardia)",
        bleed_risks: "Uncertain",
        comments: "Classified High Risk by ACC's Electrophysiology Section Council and Intermediate Risk by the Heart Rhythm Society "
      },
      {
        procedure_id: "158", 
        procedure_name: "Lead extraction, PM (pacemaker) or ICD (implantable cardioverter defibrillator)",
        bleed_risks: "High",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "159", 
        procedure_name: "Implant, leadless PM (pacemaker)",
        bleed_risks: "High",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "160", 
        procedure_name: "TAVR (transaortic valve replacement), direct aortic",
        bleed_risks: "High",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "161", 
        procedure_name: "Abdominal vascular surgery, open (aortic surgery for aneurysm or occlusive disease, visceral arterial or venous reconstruction)",
        bleed_risks: "High",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "162", 
        procedure_name: "Thoracic vascular surgery, open (aneurysm repair, reconstruction for occlusive disease)",
        bleed_risks: "High",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "163", 
        procedure_name: "CABG (coronary artery bypass graft) surgery",
        bleed_risks: "High",
        comments: "Classified by both ACC's Surgeons Section Council and the Society for Thoracic Surgeons"
      },
      {
        procedure_id: "164", 
        procedure_name: "Replacement, aortic valve",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "165", 
        procedure_name: "Repair, mitral valve",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "166", 
        procedure_name: "Repair, mitral valve with CABG (coronary artery bypass graft) surgery",
        bleed_risks: "High",
        comments: "Classified by both ACC's Surgeons Section Council and the Society for Thoracic Surgeons"
      },
      {
        procedure_id: "167", 
        procedure_name: "Replacement, mitral valve",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "168", 
        procedure_name: "Replacement, mitral valve with CABG (coronary artery bypass graft) surgery",
        bleed_risks: "High",
        comments: "Classified by both ACC's Surgeons Section Council and the Society for Thoracic Surgeons"
      },
      {
        procedure_id: "169", 
        procedure_name: "Replacement, aortic and mitral valve",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "170", 
        procedure_name: "Aortic procedures (e.g., treatment of aneurysm, dissection)",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "171", 
        procedure_name: "Pulmonary segmentectomy",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "172", 
        procedure_name: "Pneumonectomy",
        bleed_risks: "Uncertain",
        comments: "Classified Intermediate Risk by ACC's Surgeons Section Council and High Risk by the Society for Throacic Surgeons "
      },
      {
        procedure_id: "173", 
        procedure_name: "Pulmonary lobectomy",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "174", 
        procedure_name: "Pulmonary wedge resection",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "175", 
        procedure_name: "Excision, mediastinal mass",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "176", 
        procedure_name: "Thymectomy",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "177", 
        procedure_name: "Pulmonary decortication",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "178", 
        procedure_name: "PCI (percutaneous coronary intervention), transfemoral",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "179", 
        procedure_name: "Pericardiocentesis",
        bleed_risks: "Uncertain",
        comments: "Classified Low Risk by the Society for Cardiovascular Angiography and Interventions, Intermediate Risk by ACC's Interventional Section Council, and Uncertain Risk by ACC's Surgeon Section Leadership Council "
      },
      {
        procedure_id: "180", 
        procedure_name: "Mitral valve repair, percutaneous (MitraClip procedure)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "181", 
        procedure_name: "IABP (intra-aortic balloon pump)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "182", 
        procedure_name: "Grafting, endovascular",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "183", 
        procedure_name: "LAAO (left atrial appendage occlusion), Watchman device ",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Interventional Section Council "
      },
      {
        procedure_id: "184", 
        procedure_name: "Resection, sub-aortic membrane (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "185", 
        procedure_name: "Valvotomy, tricuspid valve (open) (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "186", 
        procedure_name: "Valvtotomy, pulmonary valve (open) (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "187", 
        procedure_name: "ECMO (extracorporeal membrane oxygenation) cannulation (veno-venous, veno-arterial – peripheral) (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "188", 
        procedure_name: "ECMO (extracorporeal membrane oxygenation) decannulation (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "189", 
        procedure_name: "Pericardial window (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "190", 
        procedure_name: "Mediastinotomy (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "191", 
        procedure_name: "Resection, mediastinal cyst (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "192", 
        procedure_name: "Resection, mediastinal tumor (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "193", 
        procedure_name: "Repositioning, epicardial lead (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "194", 
        procedure_name: "Upgrade, epicardial pacemaker system (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "195", 
        procedure_name: "Replacement, aortic valve with CABG (coronary artery bypass graft) surgery",
        bleed_risks: "High",
        comments: "Classified by Society of Thoracic Surgeons"
      },
      {
        procedure_id: "196", 
        procedure_name: "Surgical ablation (MAZE) with resection of tissue (w bypass)",
        bleed_risks: "High",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "197", 
        procedure_name: "Resection, pericardial cyst (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "198", 
        procedure_name: "Pericardiectomy, partial/total w/ or w/o bypass (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "199", 
        procedure_name: "Sternotomy for thymectomy (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "200", 
        procedure_name: "Pleurodesis (chemical) (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "201", 
        procedure_name: "Repair, coarctation of the aorta via thoracotomy (pediatric)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "202", 
        procedure_name: "Tracheostomy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "203", 
        procedure_name: "Bronchoscopy, w/ biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "204", 
        procedure_name: "Bronchoscopy w/ trans-bronchial biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "205", 
        procedure_name: "Reconstruction, carina",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "206", 
        procedure_name: "Thoracostomy w/ rib section for empyema w/ or w/o flap",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "207", 
        procedure_name: "Thoracotomy w/ lung biopsy/wedge",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "208", 
        procedure_name: "Thoracotomy with pleural biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "209", 
        procedure_name: "Lobectomy, single or bi-lobe",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "210", 
        procedure_name: "Lobectomy (segmentectomy)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "211", 
        procedure_name: "VATS (video-assisted thoracoscopic surgery) w/ lung biopsy/wedge",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "212", 
        procedure_name: "VATS (video-assisted thoracoscopic surgery) w/ pleural biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "213", 
        procedure_name: "Tube thoracostomy (chest tube)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "214", 
        procedure_name: "Thoracentesis",
        bleed_risks: "Uncertain",
        comments: "Classified Low Risk by the American College of Chest Physicians, and Intermediate Risk by both the American College of Physicians and ACC's Surgeon Section Council"
      },
        {
        procedure_id: "215", 
        procedure_name: "Pleurodesis (chemical)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "216", 
        procedure_name: "VATS (video-assisted thoracoscopic surgery) resection, pleural or pericardial cyst",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "217", 
        procedure_name: "Sternotomy for thymectomy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "218", 
        procedure_name: "VATS (video-assisted thoracoscopic surgery) for thymectomy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "219", 
        procedure_name: "VATS (video-assisted thoracoscopic surgery)/thoracotomy for lymphadenectomy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "220", 
        procedure_name: "Resection, pericardial cyst",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "221", 
        procedure_name: "Implant new pacemaker/ICD",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "222", 
        procedure_name: "Pacemaker system upgrade",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "223", 
        procedure_name: "TAVR/TAVI – axillary/direct access",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "224", 
        procedure_name: "Valvuloplasty, aortic (catheter based, closed)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "225", 
        procedure_name: "EGD with feeding tube (PEG)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "226", 
        procedure_name: "Pericardial window",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "227", 
        procedure_name: "Removal IABP (open cut-down)",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "228", 
        procedure_name: "Mediastinotomy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "229", 
        procedure_name: "Resection mediastinal cyst",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "230", 
        procedure_name: "Mediastial resection of tumor",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "231", 
        procedure_name: "Mediastonoscopy w biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "232", 
        procedure_name: "Repair laceration of diaphragm",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "233", 
        procedure_name: "Repair paraesophageal hernia – closed",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "234", 
        procedure_name: "Repair hernia/defect of diaphragm",
        bleed_risks: "Intermediate",
        comments: "Classified by ACC Surgeons Section Council"
      },
        {
        procedure_id: "235", 
        procedure_name: "Major lower extremity fracture ORIF (open reduction and internal fixation), (femur, tibia, or peri-articular)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
        {
        procedure_id: "236", 
        procedure_name: "Lower extremity fracture closed reduction and internal fixation",
        bleed_risks: "Intermediate",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
        {
        procedure_id: "237", 
        procedure_name: "Ankle/foot fracture ORIF (open reduction and internal fixation)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
        {
        procedure_id: "238", 
        procedure_name: "Moderate hand and upper extremity surgery, (e.g., cubital tunnel release, trapeziometacarpal (thumb) arthroplasty, ORIF (open reduction and internal fixation) of distal radius fracture)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
        {
        procedure_id: "239", 
        procedure_name: "Angiogram, cerebral",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Neurological Surgeons"
      },
        {
        procedure_id: "240", 
        procedure_name: "Stent, carotid",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Neurological Surgeons"
      },
        {
        procedure_id: "241", 
        procedure_name: "Embolization, spinal",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Neurological Surgeons"
      },
        {
        procedure_id: "242", 
        procedure_name: "Decompression, peripheral nerve",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Neurological Surgeons"
      },
        {
        procedure_id: "243", 
        procedure_name: "Dental extractions (surgical), complex, >3 teeth",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "244", 
        procedure_name: "Extractions, impacted teeth flap, bone removal",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "245", 
        procedure_name: "Dental implant surgery",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "246", 
        procedure_name: "Bone grafting, alveolar ridge",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "247", 
        procedure_name: "Biopsy or excisions, oral soft tissue lesions",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "248", 
        procedure_name: "Preprosthetic surgery",
        bleed_risks: "Intermediate",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
        {
        procedure_id: "249", 
        procedure_name: "Pleural biopsy, closed",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "250", 
        procedure_name: "Lung needle aspiration biopsy, percutaneous",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "251", 
        procedure_name: "Chest drain insertion, larger drain",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "252", 
        procedure_name: "FOB (fiberoptic bronchoscopy) w/ brushing or endobronchial biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "253", 
        procedure_name: "FOB (fiberoptic bronchoscopy) w/ transbronchial forceps or needle biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "254", 
        procedure_name: "Endobronchial ultrasound FNA (fine needle aspiration)",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "255", 
        procedure_name: "Navigational bronchoscopy w/ biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "256", 
        procedure_name: "Navigational bronchoscopy w/ fiducial marker placement",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Chest Physicians"
      },
        {
        procedure_id: "257", 
        procedure_name: "Hysterectomy (laparotomy)*",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "258", 
        procedure_name: "Hysterectomy (vaginal) *",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "259", 
        procedure_name: "Hysterectomy (endoscopic) *",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "260", 
        procedure_name: "Adnexectomy (laparotomy) *",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "261", 
        procedure_name: "Adnexectomy (endoscopic) *",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "262", 
        procedure_name: "Operative laparoscopy (other than items listed above), high complexity",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "263", 
        procedure_name: "Cervical conization (cold knife)",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "264", 
        procedure_name: "D & E (dilation and evacuation)",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "265", 
        procedure_name: "Myomectomy, endoscopic or laparotomy",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "266", 
        procedure_name: "Vaginal reconstructive surgery procedures for prolapse",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "267", 
        procedure_name: "Vaginal procedures for urinary incontinence",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Obstetricians and Gynecologists. True risk stratification should depend on patient indications."
      },
        {
        procedure_id: "268", 
        procedure_name: "Bone marrow aspiration",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Physicians"
      },
        {
        procedure_id: "269", 
        procedure_name: "CVC (central venous catheter) placement",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Physicians"
      },
        {
        procedure_id: "270", 
        procedure_name: "Wound debridement",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Physicians"
      },
        {
        procedure_id: "271", 
        procedure_name: "Sigmoidoscopy",
        bleed_risks: "Intermediate",
        comments: "Classified by American College of Physicians"
      },
        {
        procedure_id: "272", 
        procedure_name: "Minimally invasive biopsy w/ vacuum assisted, rotating or any other device designed to obtain for minimally invasive biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "273", 
        procedure_name: "Breast biopsy, excisional",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "274", 
        procedure_name: "Insertion of intraoperative or accelerated partial breast radiation device",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "275", 
        procedure_name: "Duct excision",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "276", 
        procedure_name: "SLN (sentinel lymph node) biopsy alone",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "277", 
        procedure_name: "Biopsy, excisional",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "278", 
        procedure_name: "I and D (incision and drainage), abscess",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "279", 
        procedure_name: "Partial mastectomy (lumpectomy)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "280", 
        procedure_name: "Lumpectomy and SLN (sentinel lymph node) biopsy",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Breast Surgeons"
      },
        {
        procedure_id: "281", 
        procedure_name: "AV (arteriovenous)  graft angioplasty/Stent",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "282", 
        procedure_name: "AV (arteriovenous)  fistula thrombectomy/Stent",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "283", 
        procedure_name: "AV (arteriovenous)  graft thrombectomy/Stent",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "284", 
        procedure_name: "Placement, percutaneous peritoneal dialysis catheter (fluoroscopic or peritoneoscopic)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "285", 
        procedure_name: "Removal, peritoneal dialysis catheter",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "286", 
        procedure_name: "Exchange, percutaneous peritoneal dialysis catheter (fluoroscopic or peritoneoscopic)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach."
      },
        {
        procedure_id: "287", 
        procedure_name: "Nerve block, peripheral, deep and non-compressible",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "288", 
        procedure_name: "Epidural injection, interlaminar and transforaminal",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "289", 
        procedure_name: "Paravertebral blocks",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "290", 
        procedure_name: "Intradiscal injections",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "291", 
        procedure_name: "Sympathetic blocks (e.g., stellate, thoracic, splanchnic, celiac, lumbar paravertebral, hypogastric)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "292", 
        procedure_name: "Trial and implant, peripheral nerve stimulator",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "293", 
        procedure_name: "Pocket revision, IPG (internal pulse generator)/ITP (intrathecal pump)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
        {
        procedure_id: "294", 
        procedure_name: "Other regional nerve blocks*",
        bleed_risks: "Intermediate",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine. *Bleeding risk of other regional nerve blocks is based on compressibility, patient body habitus, co-morbidities and the degree and duration of anticoagulation."
      },
      {
        procedure_id: "295", 
        procedure_name: "Prostate outlet procedures (any) upon resumption of anticoagulants",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "296", 
        procedure_name: "Renal enucleation procedures w/o capsular closure",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "297", 
        procedure_name: "Shock wave lithotripsy (uncontained surroundings)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "298", 
        procedure_name: "Retroperitoneal dissection for kidney cancer, testes cancer, or adrenal cancer w/ complete, not partial, organ removal",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "299", 
        procedure_name: "Sling, anterior colporrhaphy (Female reconstructive procedure)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "300", 
        procedure_name: "Prostate biopsy, transperineal or transrectal",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "301", 
        procedure_name: "Drainage, lymphocele, abscess or hydrocele",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "302", 
        procedure_name: "Other urologic surgery involving bowel",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "303", 
        procedure_name: "Penile prosthesis, artificial sphincters (male reconstructive procedure)",
        bleed_risks: "Intermediate",
        comments: "Classified by American Urological Association"
      },
        {
        procedure_id: "304", 
        procedure_name: "Ablation, supraventricular or ventricular arrhythmia",
        bleed_risks: "Intermediate",
        comments: "Classified by Heart Rhythm Society"
      },
        {
        procedure_id: "305", 
        procedure_name: "Ablation, PV (pulmonary vein) isolation",
        bleed_risks: "Intermediate",
        comments: "Classified by Heart Rhythm Society"
      },
        {
        procedure_id: "306", 
        procedure_name: "Implant or explant, subcutaneous ICD (implantable cardioverter defibrillator)",
        bleed_risks: "Intermediate",
        comments: "Classified by Heart Rhythm Society"
      },
        {
        procedure_id: "307", 
        procedure_name: "Closure of LAA (left atrial appendage), percutaneous",
        bleed_risks: "Intermediate",
        comments: "Classified by Heart Rhythm Society"
      },
        {
        procedure_id: "308", 
        procedure_name: "TAVR (transaortic valve replacement), transfemoral",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
        {
        procedure_id: "309", 
        procedure_name: "MCS (mechanical circulatory support)",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
        {
        procedure_id: "310", 
        procedure_name: "Pulmonary thrombolysis, ultrasound-enhanced",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
        {
        procedure_id: "311", 
        procedure_name: "Arterial revascularization, lower extremity (femoral, popliteal, tibial)",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "312", 
        procedure_name: "Deep venous reconstruction, lower extremity ",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "313", 
        procedure_name: "EVAR (endovascular aneurysm repair), including FEVAR (fenestrated endovascular aneurysm repair), PEVAR (percutaneous endovascular aneurysm repair) and TEVAR (thoracic endovascular aneurysm repair) ",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "314", 
        procedure_name: "Arterial procedures, percutaneous with >/8 French sheath ",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "315", 
        procedure_name: "Bypass, extra-anatomic",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "316", 
        procedure_name: "Cardiovascular surgery of the head and neck (carotid, subclavian, or vertebral surgery including venous procedures)",
        bleed_risks: "Intermediate",
        comments: "Classified by Society for Vascular Surgery"
      },
        {
        procedure_id: "317", 
        procedure_name: "Paraesophageal Hernia Fundoplication",
        bleed_risks: "Intermediate",
        comments: "Classified by Society of Thoracic Surgeons"
      },
        {
        procedure_id: "318", 
        procedure_name: "Hiatal Hernia Fundoplication",
        bleed_risks: "Intermediate",
        comments: "Classified by Society of Thoracic Surgeons"
      },
        {
        procedure_id: "319", 
        procedure_name: "Ablation, structural VT (ventricular tachycardia)*",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "320", 
        procedure_name: "Ablation, PVC (premature ventricular complex)*",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "321", 
        procedure_name: "Ablation, atrial fibrillation*",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "322", 
        procedure_name: "Ablation, atrial flutter",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "323", 
        procedure_name: "Implant or generator replacement, CIED (cardiac implantable electronic device)",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "324", 
        procedure_name: "Implant, subcutaneous ICD (implantable cardioverter defibrillator)",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "325", 
        procedure_name: "Ablation, SVT (supraventricular tachycardia)",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "326", 
        procedure_name: "Implant, ILR (implantable loop recorder)",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "327", 
        procedure_name: "Ablation, endocardial VT (ventricular tachycardia)",
        bleed_risks: "Low",
        comments: "Classified by ACC Electrophysiology Section Council"
      },
        {
        procedure_id: "328", 
        procedure_name: "Coronary angiography, transradial",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "329", 
        procedure_name: "PCI (percutaneous coronary intervention), transradial",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "330", 
        procedure_name: "Right heart catheterization",
        bleed_risks: "Low",
        comments: "Classified by both ACC's Interventaional Section Council and the Society for Cardiovascular Angiography and Interventions "
      },
        {
        procedure_id: "331", 
        procedure_name: "Replacement, existing pacemaker (leads already in place) (pediatric)",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "332", 
        procedure_name: "Tube thoracostomy (chest tube) (pediatric)",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "333", 
        procedure_name: "Bronchoscopy w/ BAL (bronchoalveolar lavage), brushings",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "334", 
        procedure_name: "Stenting, bronchial/tracheal",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "335", 
        procedure_name: "Thoracotomy for resection of bullae (or LVRS (lung volume reduction surgery) or spontaneous pneumothorax",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "336", 
        procedure_name: "Insertion, tunneled pleural catheter w/ cuff",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "337", 
        procedure_name: "Removal, indwelling tunneled pleural catheter",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
        {
        procedure_id: "338", 
        procedure_name: "Insertion temp. transvenous pacemaker lead",
        bleed_risks: "Low",
        comments: "Classified by ACC Interventional Section Council"
      },
      {
        procedure_id: "339",
        procedure_name: "Replace existing pacemaker (leads already in place)",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "340",
        procedure_name: "Repositioning of lead",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "341",
        procedure_name: "Ablation of afib/WPW/VT-VF (transvenous)",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "342",
        procedure_name: "TAVR/TAVI – femoral/iliac",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "343",
        procedure_name: "Esophageal stent",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "344",
        procedure_name: "Esophageal dilation",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "345",
        procedure_name: "EGD",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "346",
        procedure_name: "Implant intra-aortic balloon pump",
        bleed_risks: "Low",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "347",
        procedure_name: "Minor soft tissue resection, lower extremity",
        bleed_risks: "Low",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "348",
        procedure_name: "Trauma, upper extremity fracture w/ tourniquet",
        bleed_risks: "Low",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "349",
        procedure_name: "Trauma, lower extremity fracture w/ tourniquet",
        bleed_risks: "Low",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "350",
        procedure_name: "Minor hand surgery, carpal tunnel release, trigger finger or benign tumor",
        bleed_risks: "Low",
        comments: "Classified by American Academy of Orthopaedic Surgeons"
      },
      {
        procedure_id: "351",
        procedure_name: "Local anesthesia by inferior alveolar nerve blocks",
        bleed_risks: "Low",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "352",
        procedure_name: "Dental extractions, simple or erupted, 1-3 teeth",
        bleed_risks: "Low",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "353",
        procedure_name: "Incision and drainage, intra-oral swellings",
        bleed_risks: "Low",
        comments: "Classified by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "354",
        procedure_name: "Chest drain insertion, smaller drain",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "355",
        procedure_name: "CVC (central venous catheter) insertion, ultrasound-guided",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "356",
        procedure_name: "CVC (central venous catheter) insertion, non-ultrasound-guided (i.e., subclavian) ",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "357",
        procedure_name: "Peripheral arterial line insertion",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "358",
        procedure_name: "FOB (fiberoptic bronchoscopy), nasal or oral route",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "359",
        procedure_name: "FOB (fiberoptic bronchoscopy), through E-T (endotracheal), N-T (nasotracheal), or tracheostomy tube",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "360",
        procedure_name: "FOB (fiberoptic bronchoscopy) w/ washing or BAL (bronchoalveolar lavage) only",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "361",
        procedure_name: "Intubation, laryngoscopic/endoscopic E-T (endotracheal) ",
        bleed_risks: "Low",
        comments: "Classified by American College of Chest Physicians"
      },
      {
        procedure_id: "362",
        procedure_name: "Diagnostic laparoscopy",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "363",
        procedure_name: "Hysteroscopy, diagnostic or operative",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "364",
        procedure_name: "Cervical LEEP (loop electrosurgical excision procedure) or LLETZ (large loop excision of the transformation zone)",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "365",
        procedure_name: "Cervical biopsy",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "366",
        procedure_name: "Vulvar (skin) biopsy, wide local excision",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "367",
        procedure_name: "Assisted reproduction procedures (e.g., egg retrieval, IVF [in vitro fertilization])",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "368",
        procedure_name: "D & C (dilation and curettage) (gynecologic procedure)",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "369",
        procedure_name: "Suction curettage (pregnancy)",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "370",
        procedure_name: "Amniocentesis",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "371",
        procedure_name: "CVS (chorionic villus sampling)",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "372",
        procedure_name: "Postpartum tubal sterilization",
        bleed_risks: "Low",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "373",
        procedure_name: "Arterial puncture",
        bleed_risks: "Low",
        comments: "Classified by American College of Physicians"
      },
      {
        procedure_id: "374",
        procedure_name: "Arthrocentesis",
        bleed_risks: "Low",
        comments: "Classified by American College of Physicians"
      },
      {
        procedure_id: "375",
        procedure_name: "Paracentesis, abdominal",
        bleed_risks: "Low",
        comments: "Classified by American College of Physicians"
      },
      {
        procedure_id: "376",
        procedure_name: "Skin biopsy",
        bleed_risks: "Low",
        comments: "Classified by American College of Physicians"
      },
      {
        procedure_id: "377",
        procedure_name: "FNA (fine needle aspiration), breast",
        bleed_risks: "Low",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "378",
        procedure_name: "FNA (fine needle aspiration), axillary node",
        bleed_risks: "Low",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "379",
        procedure_name: "Breast biopsy, core needle breast biopsy",
        bleed_risks: "Low",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "380",
        procedure_name: "Needle aspiration, breast cyst or abscess",
        bleed_risks: "Low",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "381",
        procedure_name: "Punch biopsy, skin",
        bleed_risks: "Low",
        comments: "Classified by American Society of Breast Surgeons"
      },
      {
        procedure_id: "382",
        procedure_name: "Diagnostic endoscopy, including EGD (esophagogastroduodenoscopy), colonoscopy, flexible sigmoidoscopy including mucosal biopsy",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "383",
        procedure_name: "ERCP (endoscopic retrograde cholangiopancreatography) w/ biliary or pancreatic stent placement or papillary balloon dilation w/o sphincterotomy",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "384",
        procedure_name: "Push enteroscopy and diagnostic balloon-assisted enteroscopy",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "385",
        procedure_name: "Capsule endoscopy",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "386",
        procedure_name: "Enteral stent deployment (controversial)",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "387",
        procedure_name: "EUS (endoscopic ultrasound) w/o FNA (fine needle aspiration)",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "388",
        procedure_name: "Argon plasma coagulation",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "389",
        procedure_name: "Barrett’s ablation",
        bleed_risks: "Low",
        comments: "Classified by American Society of Gastrointestinal Endoscopy"
      },
      {
        procedure_id: "390",
        procedure_name: "Tunneled hemodialysis catheter exchange",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "391",
        procedure_name: "Tunneled hemodialysis catheter removal",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "392",
        procedure_name: "Angiogram, AV (arteriovenous) fistula or graft",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "393",
        procedure_name: "Intermittent hemodialysis",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "394",
        procedure_name: "CRRT (continuous renal replacement therapy)",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "395",
        procedure_name: "Venogram",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "396",
        procedure_name: "Peritoneogram",
        bleed_risks: "Low",
        comments: "Classified by American Society of Nephrology. See app resources for further info on ASN's risk stratification approach. "
      },
      {
        procedure_id: "397",
        procedure_name: "Nerve block, peripheral, superficial and compressible",
        bleed_risks: "Low",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "398",
        procedure_name: "Peripheral joint and musculoskeletal injection",
        bleed_risks: "Low",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "399",
        procedure_name: "Nerve block, SI (sacro-iliac) joint and sacral lateral branch",
        bleed_risks: "Low",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "400",
        procedure_name: "Regional nerve block, superficial and compressible plexus/peripheral (e.g. axillary, femoral)",
        bleed_risks: "Low",
        comments: "Classified by American Society of Regional Anesthesia and Pain Medicine"
      },
      {
        procedure_id: "401",
        procedure_name: "Endoscopic procedures (e.g., ureteroscopy) w/ or w/o laser lithotripsy",
        bleed_risks: "Low",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "402",
        procedure_name: "Biopsy, CBF, needle",
        bleed_risks: "Low",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "403",
        procedure_name: "Ureteral stenting/exchange, uncomplicated",
        bleed_risks: "Low",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "404",
        procedure_name: "Transurethral instrumentation w/o mucosal incision (e.g., cystoscopy, urodynamic procedures, routine catheter placement)",
        bleed_risks: "Low",
        comments: "Classified by American Urological Association"
      },
      {
        procedure_id: "405",
        procedure_name: "EP (electrophysiology) study, diagnostic",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "406",
        procedure_name: "Implant, PM (pacemaker)",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "407",
        procedure_name: "Implant, ICD (implantable cardioverter defibrillator)",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
          procedure_id: "408",
        procedure_name: "Implant, CRT (cardiac resynchronization therapy) device",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "409",
        procedure_name: "Generator replacement, PM (pacemaker), ICD (implantable cardioverter defibrillator), CRT (cardiac resynchronization therapy) device",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "410",
        procedure_name: "Insertion or removal, ILR (implantable loop recorder)",
        bleed_risks: "Low",
        comments: "Classified by Heart Rhythm Society"
      },
      {
        procedure_id: "411",
        procedure_name: "Coronary angiography and PCI (percutaneous coronary intervention), transradial",
        bleed_risks: "Low",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "412",
        procedure_name: "Coronary angiography, transfemoral",
        bleed_risks: "Uncertain",
        comments: "Classified Uncertain Risk by ACC's Interventional Section Council  and Low Risk by the Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "413",
        procedure_name: "PCI (percutaneous coronary intervention), transfemoral",
        bleed_risks: "Low",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "414",
        procedure_name: "Closure of LAA (left atrial appendage)",
        bleed_risks: "Low",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "415",
        procedure_name: "Mitral valve repair, percutaneous (MitraClip procedure)",
        bleed_risks: "Low",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "416",
        procedure_name: "Temporary pacemaker, transvenous",
        bleed_risks: "Low",
        comments: "Classified by Society for Cardiovascular Angiography and Interventions"
      },
      {
        procedure_id: "417",
        procedure_name: "Arterial procedures, percutaneous with </8 French sheath",
        bleed_risks: "Low",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "418",
        procedure_name: "Venous procedures, percutaneous",
        bleed_risks: "Low",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "419",
        procedure_name: "Venous ablation, percutaneous",
        bleed_risks: "Low",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "420",
        procedure_name: "Stab phlebectomy",
        bleed_risks: "Low",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "421",
        procedure_name: "Biopsy, temporal artery",
        bleed_risks: "Low",
        comments: "Classified by Society for Vascular Surgery"
      },
      {
        procedure_id: "422",
        procedure_name: "Local anesthesia by infiltration",
        bleed_risks: "Not clinically important",
        comments: "Assigned by American Association of Oral and Maxillofacial Surgeons"
      },
      {
        procedure_id: "423",
        procedure_name: "Arthrocentesis (aspiration and injections of the joint)",
        bleed_risks: "Not clinically important",
        comments: "Assigned by American College of Rheumatology"
      },
      {
        procedure_id: "424",
        procedure_name: "Injection, bursal, tendon and soft tissue",
        bleed_risks: "Not clinically important",
        comments: "Assigned by American College of Rheumatology"
      },
      {
        procedure_id: "425",
        procedure_name: "Injection, trigger point",
        bleed_risks: "Not clinically important",
        comments: "Assigned by American College of Rheumatology"
      },
      {
        procedure_id: "426",
        procedure_name: "Insertion, temporary central venous hemodialysis catheter",
        bleed_risks: "Uncertain",
        comments: " The American Society of Nephrology classified more specifically as \"low-intermediate\". See table for more info an classification method.  "
      },
      {
        procedure_id: "427",
        procedure_name: "Arteriogram",
        bleed_risks: "Uncertain",
        comments: " The American Society of Nephrology classified more specifically as \"low-intermediate\". See app resources for further info on ASN's risk stratification approach.   "
      },
      {
        procedure_id: "428",
        procedure_name: "Insertion, tunneled hemodialysis catheter",
        bleed_risks: "Uncertain",
        comments: " The American Society of Nephrology classified more specifically as \"low-intermediate\". See app resources for further info on ASN's risk stratification approach.   "
      },
      {
        procedure_id: "429",
        procedure_name: "Repair, tracheal wound",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "430",
        procedure_name: "Thoracotomy for exploration",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "431",
        procedure_name: "Ligation of left atrial appendage",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "432",
        procedure_name: "ECMO cannulation (Veno-veno, veno-arterial - central)",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "433",
        procedure_name: "ECMO cannulation (Veno-veno, veno-arterial – peripheral)",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "434",
        procedure_name: "ECMO cannula revision",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "435",
        procedure_name: "ECMO decannulation",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "436",
        procedure_name: "Esophageal biopsy",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "437",
        procedure_name: "Esophageal diversion ",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "438",
        procedure_name: "Stent graft of descending aorta",
        bleed_risks: "Uncertain",
        comments: "Classified by ACC Surgeons Section Council"
      },
      {
        procedure_id: "439",
        procedure_name: "Operative laparoscopy (other than items listed above), low complexity",
        bleed_risks: "Uncertain",
        comments: "Classified by American College of Obstetricians and Gynecologists"
      },
      {
        procedure_id: "440",
        procedure_name: "Polypectomy",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "441",
        procedure_name: "Sphincterotomy, biliary or pancreatic",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "442",
        procedure_name: "Treatment of varices",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "443",
        procedure_name: "PEG (percutaneous endoscopic gastrostomy) placement* ",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "444",
        procedure_name: "Enteroscopy, therapeutic, balloon-assisted",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "445",
        procedure_name: "Endoscopic hemostasis",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "446",
        procedure_name: "Tumor ablation",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "447",
        procedure_name: "Cystgastrostomy",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "448",
        procedure_name: "Ampullary resection",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "449",
        procedure_name: "EMR (endoscopic mucosal resection)",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "450",
        procedure_name: "Endoscopic submucosal dissection",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "451",
        procedure_name: "Dilation, pneumatic or bougie",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "452",
        procedure_name: "PEJ (percutaneous endoscopic jejunostomy)",
        bleed_risks: "High",
        comments: "Bleed risk ratings published in 2016 by the American Society for Gastrointestinal Endoscopy’s Standards of Practice Committee. Note: While this procedure is rated 'High' for the purposes of this app, the ASGE's actual rating is 'higher'"
      },
      {
        procedure_id: "453",
        procedure_name: "Ablative procedures of the kidney, percutaneous",
        bleed_risks: "Intermediate",
        comments: "Bleed risk rating provided in 2016 by the American Urological Association"
      }
    ];
    
    var chadsVascQuestions = [
        { chadsvasc_id: "1", questions: "CHF/LV dysfunction", points: "1", info_title: "Congestive Heart Failure/Left Ventricular Dsyfunction", show_info: "true" },
        { chadsvasc_id: "2", questions: "Diabetes mellitus", points: "1", info_title: "", show_info: "false" },
        { chadsvasc_id: "3", questions: "Hypertension", points: "1", info_title: "Resting blood pressure > 140/90 mmHg on ≥2 occasions or current antihypertensive pharmacologic treatment", show_info: "true" },
        { chadsvasc_id: "4", questions: "Vascular disease", points: "1", info_title: "Prior Myocardial Infarction, Peripheral Artery Disease, or Aortic Plaque", show_info: "true" },
        { chadsvasc_id: "5", questions: "Stroke/TIA/TE", points: "2", info_title: "Stroke, Transient Ischemic Attack, or Thromboembolism", show_info: "true" }
    ];
    
    var chadsVascGender = [
        { gender_id: "1", gender_options: "male", gender_points: "0" },
        { gender_id: "2", gender_options: "female", gender_points: "1" }
    ];
    
    var chadsVascAge = [
        { age_id: "1", age_options: "lessThan65", age_points: "0" },
        { age_id: "2", age_options: "between65To74", age_points: "1" },
        { age_id: "3", age_options: "greaterThan74", age_points: "2" }
    ];
    
    var restartQuestions = [
        { restart_question_id: "1", questions: "Bleeding complications occurred", restart_info_title: "Lorem ipsum", restart_show_info: "false" },
        { restart_question_id: "2", questions: "Involved potentially catastrophic bleed location", restart_info_title: "Sites where bleeding carries a high risk of morbidity or mortality, e.g., intracranial, intraspinal", restart_show_info: "true" },
        { restart_question_id: "3", questions: "Patient has features that indicate increased bleed risk", restart_info_title: "E.g., history of recent bleeding, qualitative or quantitative platelet abnormalities, abnormalities in coagulation studies", restart_show_info: "true" }
    ];
	
	return {
        therapyType:therapyType,
        patientBleedRiskQuestions: patientBleedRiskQuestions,
        proceduralBleedRisks: proceduralBleedRisks,
        chadsVascQuestions: chadsVascQuestions,
        chadsVascGender: chadsVascGender,
        chadsVascAge: chadsVascAge,
        restartQuestions: restartQuestions,
	    proceduralBleedRiskDropDown :proceduralBleedRiskDropDown,
		
    };
})

