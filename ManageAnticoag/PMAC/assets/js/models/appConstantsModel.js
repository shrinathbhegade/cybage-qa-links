/*!
* appConstantsModel JS
* appConstantsModel is used to define constants to populate in fields.
*/
define(['knockout',"jquery","pager"], function(ko,$,pager) {
    
    var googleshortUrlKey = "AIzaSyAwqtbu6FaE1oRSuRjjqVKHP66BWYIOTWA";
    var googleAppStoreLink = "https://play.google.com/store/apps/dev?id=5189912010956845696&hl=en";
    var iosAppStoreLink = "https://itunes.apple.com/us/developer/american-college-cardiology/id502174543";
    var goToFibrillationGuidelineLink = "http://www.onlinejacc.org/content/64/21/2246";
    var expertConsensusLink= "https://www.jacc.org/doi/abs/10.1016/j.jacc.2016.11.024";
    var goToFillFeedbackLink = "https://www.surveymonkey.com/r/BridgeAnticoag";
    var goToClinicalAppCollectionLink = "http://www.acc.org/tools-and-practice-support/mobile-resources?w_nav=MN#Clinical";
    var goToBloodFactSheetLink = "https://www.cardiosmart.org/~/media/Documents/Fact%20Sheets/en/zu1595.ashx";
    var goToSafeUseFactLink = "https://www.cardiosmart.org/~/media/Documents/Fact%20Sheets/en/abk5223.ashx";
    var goToTopicCollectionLink = "https://www.cardiosmart.org/Heart-Conditions/Atrial-Fibrillation";

        
        
    
    //Restart algorithm for advice generation 
    
    var doac_dti = "DOAC – DTI";
    var doac_anti_xa = "DOAC - Anti-Xa";
    var warfarin = "Warfarin";
    var doac_warning = "Parenteral bridging not indicated for DOACs. Given the short-half lives of DOACS, bridging with a parenteral agent is rarely, if ever, needed prior to procedures."
    var restart_doac_advice_info_title = "Vitamin K antagonist. VKA advice in this app refers specifically to warfarin, the most common VKA in the US. If outside the US, check the pharmacokinetics of the VKA and adjust accordingly.";
    var restart_doac_default_advice = "Answer questions above to generate advice.";
     var restart_doac_advice_one = "Consider parenteral anticoagulation until oral medications are possible. Start parenteral agent 48-72 hours following procedure at a dose based on post-procedural renal function. When tolerating oral medications, convert from parenteral agent to DOAC.";
     var restart_doac_advice_two = "Consider parenteral anticoagulation until oral medications are possible. Start parenteral agent within 24 hours following procedure at a dose based on post-procedural renal function. When tolerating oral medications, convert from parenteral agent to DOAC.";
    var restart_doac_advice_three = "Reasonable to re-initiate DOAC 48-72 hours after the procedure at a dose based on post-procedural renal function. Cooperate with the managing team and the surgeon/proceduralist.";
    var restart_doac_advice_four = "Reasonable to re-initiate DOAC within 24 hours of procedure at a dose based on post-procedural renal function. Consider using reduced dose on the evening after the procedure in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_doac_advice_five = "Use clinical judgment in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_doac_advice_six = "Consider delaying re-initiation of anticoagulation. Use clinical judgement in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_doac_advice_seven = "Start VKA within 24 hours in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_doac_advice_eight = "Start VKA within 24 hours. If applicable, restart parenteral agent 48-72 hours following procedure. Discontinue parenteral when INR reaches 2.";
    var restart_doac_advice_nine = "Start VKA within 24 hours. If applicable, restart parenteral agent within 24 hours following procedure. Discontinue parenteral when INR reaches 2.";
    var restart_doac_advice_continue_with_anticoag = "Recommend anticoagulation therapy using a VKA.";
    
    var restart_warfarin_advice_start_vka = "Start VKA";
    var restart_warfarin_advice_one = "Start VKA within 24 hours in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_warfarin_advice_after_icon_one = "within 24 hours in cooperation with the managing team and the surgeon/proceduralist.";
    var restart_within_24_hrs = "within 24 hours. "
    var restart_warfarin_advice_after_icon_two = "If applicable, restart parenteral agent 48-72 hours following procedure.";
    var restart_warfarin_advice_after_icon_three = "If applicable, restart parenteral agent within 24 hours following procedure.";
    var restart_warfarin_discontinue = "Discontinue parenteral when INR reaches 2."
   var restart_warfarin_advice_two = "within 24 hours. If applicable, restart parenteral agent 48-72 hours following procedure. Discontinue parenteral when INR reaches 2.";
    var restart_warfarin_advice_three = "within 24 hours. If applicable, restart parenteral agent within 24 hours following procedure. Discontinue parenteral when INR reaches 2.";
    var restart_warfarin_advice_four = "Consider delaying re-initiation of anticoagulation. Use clinical judgement in cooperation with the managing team and the surgeon/proceduralist.";
    var ADVICE_WARFARIN = "ADVICE_WARFARIN";
    var ADVICE_DOAC = "ADVICE_DOAC";
    var YES = "YES";
    var NO = "NO";
    var homostasis_yes = "homostasis-yes";
    var homostasis_no = "homostasis-no";
    var parental_agent_no = "parental-agent-no";
    var parental_agent_yes = "parental-agent-yes";
    var cardiac_no = "cardiac-no";
    var cardiac_yes = "cardiac-yes";
    var oral_medication_no = "oral-medication-no";
    var oral_medication_yes = "oral-medication-yes";
    var high = "high";
    var low = "low";
    var Interrupt_anticoagulant = "Interrupt anticoagulant."
    
    
//DOAC : Interrupt alrorithm advice with respective bellow value
    
        var WhentoInterrupt_Warfarin_advice_Supratherapeutic = "Discontinue at least 5 days before procedure depending on current INR, time to procedure and desired INR for procedure; recheck INR 24 hours before procedure.";
        var WhentoInterrupt_Warfarin_advice_Goal_level = "Discontinue 5 days before procedure depending on current INR, time to procedure and desired INR for procedure; recheck INR 24 hours before procedure.";
        var WhentoInterrupt_Warfarin_advice_Subtherapeutic = "Discontinue 3-4 days before procedure. Recheck INR 24 hours before procedure if a normal INR is desired.";
        var WhetherInterrupt_Warfrain_advice_No_Uncertain = "Insufficient data on best practices.Likely interrupt but consult with proceduralists and use clinical judgment.<br/><ul><li> If persistent concern for bleeding is present: Interrupt anticoagulation.</li><li> If no persistent concern for bleeding: Perform the procedure uninterrupted.</li></ul>";
     var WhetherInterrupt_Warfrain_advice_No_Uncertain1 = "Insufficient data on best practices. Likely interrupt but consult with proceduralists and use clinical judgment. If persistent concern for bleeding is present: Interrupt anticoagulation. If no persistent concern for bleeding: Perform the procedure uninterrupted.";
        var whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant =  "Insufficient data on best practices.Likely interrupt but consult with proceduralists and use clinical judgment.<br/><ul><li> If persistent concern for bleeding is present: Interrupt anticoagulation.</li><li> If no persistent concern for bleeding: Perform the procedure uninterrupted.</li></ul>";
     var whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant1 =  "Insufficient data on best practices. Likely interrupt but consult with proceduralists and use clinical judgment. If persistent concern for bleeding is present: Interrupt anticoagulation. If no persistent concern for bleeding: Perform the procedure uninterrupted.";
        var whetherInterrupt_warfrain_advice_Interrupt_anticoagulant = "Interrupt anticoagulant.";
        var whetherInterrupt_warfrain_advice_Perform_procedure = "Perform the procedure uninterrupted.";
        var not_advised_proceed_with_caution = "Not advised, proceed with caution."
        var inter_yes = "yes";
        var interrupt_crcl_needed = "Must provide CrCl above to view requested information.";
        var advice_not_applicable = "Advice not applicable to current patient.";
        var wetherToInterruptAdd = "Insufficient data on best practices. Likely interrupt but consult with procedural lists and use clinical judgment. If persistent concern for bleeding is present: Interrupt anticoagulation. If no persistent concern for bleeding: Perform the procedure uninterrupted.";
        var start_typing = "Start typing message in input box above.";
        var not_clinically_important = "Not clinically important";
        var inter_no = "No";
        var inter_low = "Low";
        var inter_supratherapeutic = "Supratherapeutic";
        var inter_subtherapeutic = "Subtherapeutic";
        var goal_level = "Goal level";
        var intermediate = "Intermediate";
        var inter_high = "High";
        var uncertain = "Uncertain";
        var inter_interrupt_anticoagulant = "Interrupt anticoagulant.";
        var weather_inter_advice = "Perform the procedure uninterrupted but time it at DOAC interval trough.";
        var select_inr = "Must select INR above to view advice.";
        var success = "success";
        var positive = "positive";
        var warning = "warning";
        var error = "error";
        var nagative = "nagative";
        var interrupt = "interrupt";
    
    //Patient_has_increased_bleed_risk  ---> Procedural_bleed_risk --> DOAC_type --->  CrCl 
    
        var patientBleed_yes_procedural_NA_Doactype_either_crclVal_NA = "Insufficient data on best practices. Interrupt at least as long as determined by CrCl and possibly longer. (see “Recommended Durations for Withholding DOACs” in Quick Reference section for guidance). Use clinical judgement.";
        var patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Less15 = "No data; consider dilute thrombin time assay and/or discontinuation \u2265 96 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_DTI_crclVal_15To29 = "Discontinue \u2265 72 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_DTI_crclVal_30To49 = "Discontinue \u2265 48 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_DTI_crclVal_50To79 = "Discontinue \u2265 36 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Greater80 = "Discontinue \u2265 24 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Less5 = "No data, consider anti-Xa level and/or discontinuation \u2265 48 hours prior to procedure.";
        var patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_15To29 = "Discontinue \u2265 36 hours prior to procedure.";

        var patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Geater30 = "Discontinue \u2265 24 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Less15 = "No data, consider dilute thrombin time assay.";
        var patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_15To29 = "Discontinue \u2265 120 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_30To49 = "Discontinue \u2265 96 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_50To79 = "Discontinue \u2265 72 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Greater80 = "Discontinue \u2265 48 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Less30 = "No data: consider anti Xa level and/or discontinuation \u2265 72 hours prior to procedure.";
        var patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Greater30 = "Discontinue \u2265 48 hours prior to procedure.";
    
    //Wizard
    var wizard_yes="Yes";
    var wizard_no="No";
    var wizard_crcl_valid="Please enter a clinically valid value.";
    var wizard_crcl_weight_one="Please enter a weight value between 4.5-453 kgs.";
    var wizard_crcl_weight_two="Please enter a weight value between 10-999 lbs.";
    var wizard_crcl_age_one="Please enter an age 18 or over.";
    var wizard_crcl_age_two="Please enter an age of 140 or under.";
    var interrupt_crcl_value="Please enter correct CrCl value.";
    var wizard_male="male";
    var wizard_female="female";
    var wizard_gender_id_1="1";
    var wizard_gender_id_2="2";
    var wizard_age_id_1="1";
    var wizard_age_id_2="2";
    var wizard_age_id_3="3";
    var wizard_lessThan65="lessThan65";
    var wizard_between65To74="between65To74";
    var wizard_greaterThan74="greaterThan74";
    
    //Bridge page
    var bridge_prior_stroke_tia = "Prior stroke or TIA?";
    var CHADsVasValues = ["0","1","2","3","4","5","6","7","8","9"];
    var case_type_none = "None";
    var case_type_within3Months = "Within3Months";
    var case_type_morethan3Months = "Morethan3Months";
    var bridge_low = "Low";
    var bridge_high = "High";
    var bridge_moderate = "Moderate";
    var bridge_major_ICH_3_months = "Major bleed or ICH < 3 months?";
    var bridge_do_not_bridge = "<div class='text-center small-12 medium-7 auto-margin'><label><span class='text'>Do not Bridge.</span></label>Use of parenteral agent not indicated. Perform the procedure without bridging.</div>";
   var bridge_do_not_bridge1 = "Do not Bridge. Use of parenteral agent not indicated. Perform the procedure without bridging.";
    var bridge_consider_delay = "Consider delaying the procedure.";
    var bridge_indication_for_bridging2 = "<div class='text-center small-12 medium-7 auto-margin'><label><span class='text'>Bridge.</span></label>There is an indication for bridging; strongly consider parenteral agent.</div>";
    var bridge_indication_for_bridging = "<div class='text-center small-12 medium-7 auto-margin'><label><span class='text'>Bridge.</span></label>There is an indication for bridging; strongly consider parenteral agent.</div>";
  var bridge_indication_for_bridging1 = "Bridge. There is an indication for bridging; strongly consider parenteral agent.";
    var bridge_likely_do_not_bridge = "<div class='text-center small-12 medium-3 auto-margin'><label><span class='text'>Likely do <i>not</i> bridge.</span></label>Use clinical judgement.</div>";
    var bridge_likely_do_not_bridge1 = "Likely do not bridge. Use clinical judgement.";
    var bridge_likely_bridge = "<div class='text-center small-12 medium-3 auto-margin'><label><span class='text'>Likely bridge.</span></label>Use clinical judgement.</div>";
    var bridge_likely_bridge1 = "Likely bridge. Use clinical judgement.";
    var bridge_likely_bridge_address_other_factors = "<div class='text-center small-12 medium-7 auto-margin'><label><span class='text'>Likely bridge.</span></label>Address other factors: ASA, high INR. Also consider bleed history. Use clinical judgement.</div>";
    var bridge_likely_bridge_address_other_factors1 = "Likely bridge. Address other factors: ASA, high INR. Also consider bleed history. Use clinical judgement.";
    var secondary = "secondary";
    //var bridge_start_ufh = "Start UFH when INR <2, or if INR not measured, after omitting 2-3 doses of OAC. Discontinue >4 hours prior to procedure and if aPTT in normal range. If aPTT is not in the normal range, delay the procedure and recheck aPTT every 2 hours. Perform the procedure when aPTT is in normal range.";
    var bridge_start_ufh = "<ul><li> Start UFH when INR <2, or if INR not measured, after omitting 2-3 doses of OAC.</li><li> Discontinue >4 hours prior to procedure and if aPTT in normal range.</li><li>If aPTT is not in the normal range, delay the procedure and recheck aPTT every 2 hours.</li><li>Perform the procedure when aPTT is in normal range.</li></ul>";
    //var bridge_start_lmhw = "Start LMWH when INR <2, or if INR not measured, after omitting 2-3 doses of OAC. Discontinue > 12-24 hours prior to procedure based on renal function and whether you are administering it once daily or every 12 hours.";
    var bridge_start_lmhw = "<ul><li>Start LMWH when INR <2, or if INR not measured, after omitting 2-3 doses of OAC.</li><li>Discontinue > 12-24 hours prior to procedure based on renal function and whether you are administering it once daily or every 12 hours.</li></ul>";
    var bridge_consider_individual_strategy = "Consider individualized strategies such as using prophylactic/low-dose parenteral anticoagulant, or postoperative bridging only.";
    var bridge_follow_local_protocol = "Follow local protocol for management of HIT or heparin allergy.";
    var bridge_UFH = "UFH";
    var bridge_LMWH = "LMWH";
    var bridge_must_answer_remaining = "Must answer remaining questions above.";
    
    var current_anticoagulant = "Current anticoagulant";
    var action_selected = "Selected";
    var gaPatient_screen = "Patient";
    var gaCategory_Guidance = "Guidance";
    
    var UFH_advice_static = "Start UFH when the INR is <2 or after omitting 2-3 doses of the OAC if the INR is not measured. Discontinue >4 hours prior to the procedure and if the activated partial thromboplastin time assay (aPTT) is the normal range. If the aPTT is not in the normal range, delay the procedure and recheck the aPTT every 2 hours until it is in the normal range.";
    var UFH_advice = "<ul><li> Start UFH when INR <2, or if INR not measured, after omitting 2-3 doses of OAC.</li><li> Discontinue >4 hours prior to procedure and if aPTT in normal range.</li><li>If aPTT is not in the normal range, delay the procedure and recheck aPTT every 2 hours.</li><li>Perform the procedure when aPTT is in normal range.</li></ul>";
    var LMWH_advice = "<ul><li>Start LMWH when the INR is <2 or after omitting 2-3 doses of the OAC if the INR is not measured.</li><li> Discontinue >12-24 hours prior to the procedure based on renal function and whether you are administering in once daily or every 12 hours.</li></ul>";
    var LMWH_advice_static = "Start LMWH when the INR is <2 or after omitting 2-3 doses of the OAC if the INR is not measured. Discontinue >12-24 hours prior to the procedure based on renal function and whether you are administering in once daily or every 12 hours.";
    
    //advice
    var age_65_74 = "65-74";
    var age_less65 = "<65";
    var age_more74 = ">74";
    var adviceMale = "Male";
    var adviceFemale = "Female";
    var adviceINTERRUPT = "INTERRUPT";
    var adviceBRIDGE = "BRIDGE";
    var adviceRESTART_DOAC = "RESTART_DOAC";
    var adviceRESTART_WARFARIN = "RESTART_WARFARIN";
    var VKA = "VKA";
    //var advice_summary_link = "This is high-level summary of the inputs and advice from the BridgeAnticoag app. Use this link to access a full summary:";
    var advice_summary_link = "This is a summary of the inputs and advice entered in the Periprocedural Planning section of the ACC ManageAnticoag app. View full advice generated by the app here:";
    var generated_on = "Generated on";
    var mail_footer = "This email contains advice from the ACC ManageAnticoag app. Email content generated by the app does not contain Protected Health Information. Users are advised to refrain from sharing identifiable patient information via unsecured email or other sources.";
    var not_calculated = "Not Calculated";
    var patient_case = "---PATIENT DETAILS---";
    var drug = "Drug: ";
    var procedure = "Procedure: ";
    var increased_patient_risk = "Increased Patient Bleed Risk: ";
    var procedure_risk = "Procedural Bleed Risk: ";
    var thrombotic_risk = "Thrombotic Risk: ";
    var post_procedure_risk = "Post-Procedural Risk: ";
    var ADVICE = "---ADVICE--- ";
    var INTERRUPTION = "INTERRUPTION ";
    var BRIDGING = "BRIDGING ";
    var ANTICOAG_RESTART = "ANTICOAG RESTART ";

	return {
        googleshortUrlKey : googleshortUrlKey,
        googleAppStoreLink : googleAppStoreLink,
        iosAppStoreLink : iosAppStoreLink,
        goToFibrillationGuidelineLink : goToFibrillationGuidelineLink,
        expertConsensusLink : expertConsensusLink,
        goToFillFeedbackLink : goToFillFeedbackLink,
        goToClinicalAppCollectionLink : goToClinicalAppCollectionLink,
        goToBloodFactSheetLink : goToBloodFactSheetLink,
        goToSafeUseFactLink : goToSafeUseFactLink,
        goToTopicCollectionLink : goToTopicCollectionLink,
        UFH_advice : UFH_advice,
        LMWH_advice : LMWH_advice,
        doac_dti:doac_dti,
        doac_anti_xa:doac_anti_xa,
        warfarin:warfarin,
        restart_doac_advice_info_title:restart_doac_advice_info_title,
        restart_doac_default_advice:restart_doac_default_advice,
        restart_doac_advice_one:restart_doac_advice_one,
        restart_doac_advice_two:restart_doac_advice_two,
        restart_doac_advice_three:restart_doac_advice_three,
        restart_doac_advice_four:restart_doac_advice_four,
        restart_doac_advice_five:restart_doac_advice_five,
        restart_doac_advice_six:restart_doac_advice_six,
        restart_doac_advice_seven:restart_doac_advice_seven,
        restart_doac_advice_eight:restart_doac_advice_eight,
        restart_doac_advice_nine:restart_doac_advice_nine,
        restart_doac_advice_continue_with_anticoag:restart_doac_advice_continue_with_anticoag,
        restart_warfarin_advice_start_vka:restart_warfarin_advice_start_vka,
        restart_warfarin_advice_one:restart_warfarin_advice_one,
        restart_warfarin_advice_after_icon_one:restart_warfarin_advice_after_icon_one,
        restart_warfarin_advice_after_icon_two:restart_warfarin_advice_after_icon_two,
        restart_warfarin_advice_after_icon_three:restart_warfarin_advice_after_icon_three,
        restart_warfarin_advice_two:restart_warfarin_advice_two,
        restart_within_24_hrs:restart_within_24_hrs,
        restart_warfarin_advice_three:restart_warfarin_advice_three,
        restart_warfarin_advice_four:restart_warfarin_advice_four,
        ADVICE_WARFARIN:ADVICE_WARFARIN,
        ADVICE_DOAC:ADVICE_DOAC,
        YES:YES,
        NO:NO,
        homostasis_yes:homostasis_yes,
        homostasis_no:homostasis_no,
        parental_agent_no:parental_agent_no,
        parental_agent_yes:parental_agent_yes,
        cardiac_no:cardiac_no,
        cardiac_yes:cardiac_yes,
        oral_medication_no:oral_medication_no,
        oral_medication_yes:oral_medication_yes,
        high:high,
        low:low,
        Interrupt_anticoagulant:Interrupt_anticoagulant,
        
        //DOAC : Interrupt alrorithm advice with respective bellow value
        
        WhentoInterrupt_Warfarin_advice_Supratherapeutic:WhentoInterrupt_Warfarin_advice_Supratherapeutic,
        WhentoInterrupt_Warfarin_advice_Goal_level:WhentoInterrupt_Warfarin_advice_Goal_level,
		WhentoInterrupt_Warfarin_advice_Subtherapeutic:WhentoInterrupt_Warfarin_advice_Subtherapeutic,
        WhetherInterrupt_Warfrain_advice_No_Uncertain:WhetherInterrupt_Warfrain_advice_No_Uncertain,	whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant:whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant,	whetherInterrupt_warfrain_advice_Interrupt_anticoagulant:whetherInterrupt_warfrain_advice_Interrupt_anticoagulant,
		whetherInterrupt_warfrain_advice_Perform_procedure:whetherInterrupt_warfrain_advice_Perform_procedure,
		start_typing:start_typing,
		not_advised_proceed_with_caution:not_advised_proceed_with_caution,
		inter_yes:inter_yes,
		interrupt_crcl_needed:interrupt_crcl_needed,
		advice_not_applicable:advice_not_applicable,
		wetherToInterruptAdd:wetherToInterruptAdd,
		not_clinically_important:not_clinically_important,
		inter_no:inter_no,
		inter_low:inter_low,
		inter_supratherapeutic:inter_supratherapeutic,
		inter_subtherapeutic:inter_subtherapeutic,
		goal_level:goal_level,
		intermediate:intermediate,
		inter_high:inter_high,
		uncertain:uncertain,
		inter_interrupt_anticoagulant:inter_interrupt_anticoagulant,
		weather_inter_advice:weather_inter_advice,
		select_inr:select_inr,
        
        //Patient_has_increased_bleed_risk  ---> Procedural_bleed_risk --> DOAC_type --->  CrCl 
        
        patientBleed_yes_procedural_NA_Doactype_either_crclVal_NA : patientBleed_yes_procedural_NA_Doactype_either_crclVal_NA,	patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Less15:patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Less15,	patientBleed_No_procedural_Low_Doactype_DTI_crclVal_15To29:patientBleed_No_procedural_Low_Doactype_DTI_crclVal_15To29,	patientBleed_No_procedural_Low_Doactype_DTI_crclVal_30To49:patientBleed_No_procedural_Low_Doactype_DTI_crclVal_30To49,	patientBleed_No_procedural_Low_Doactype_DTI_crclVal_50To79:patientBleed_No_procedural_Low_Doactype_DTI_crclVal_50To79,
		patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Greater80 :patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Greater80,
		patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Less5 : patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Less5,
		patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_15To29 : patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_15To29,
        patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Geater30 :patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Geater30,
		patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Less15 : patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Less15,
		patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_15To29  : patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_15To29,
		patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_30To49 : patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_30To49,
		patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_50To79 : patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_50To79,
		patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Greater80 : patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Greater80,
		patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Less30 : patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Less30,
		patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Greater30 : patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Greater30,
        
        //Wizard
        
        wizard_yes:wizard_yes,
        wizard_no:wizard_no,
        wizard_crcl_valid:wizard_crcl_valid,
        wizard_crcl_weight_one:wizard_crcl_weight_one,
        wizard_crcl_weight_two:wizard_crcl_weight_two,
        wizard_crcl_age_one:wizard_crcl_age_one,
        wizard_crcl_age_two:wizard_crcl_age_two,
        interrupt_crcl_value:interrupt_crcl_value,
        wizard_male:wizard_male,
        wizard_female:wizard_female,
        wizard_gender_id_1:wizard_gender_id_1,
        wizard_gender_id_2:wizard_gender_id_2,
        wizard_age_id_1:wizard_age_id_1,
        wizard_age_id_2:wizard_age_id_2,
        wizard_age_id_3:wizard_age_id_3,
        wizard_lessThan65:wizard_lessThan65,
        wizard_between65To74:wizard_between65To74,
        wizard_greaterThan74:wizard_greaterThan74,
        
        //Bridge page
        CHADsVasValues:CHADsVasValues,
        case_type_none:case_type_none,
        case_type_within3Months:case_type_within3Months,
        case_type_morethan3Months:case_type_morethan3Months,
        bridge_low:bridge_low,
        bridge_high:bridge_high,
        bridge_moderate:bridge_moderate,
        bridge_major_ICH_3_months:bridge_major_ICH_3_months,
        success:success,
		positive:positive,
		warning:warning,
        error:error,
		nagative:nagative,
		interrupt:nagative,
        bridge_do_not_bridge:bridge_do_not_bridge,
        bridge_consider_delay:bridge_consider_delay,
        bridge_indication_for_bridging:bridge_indication_for_bridging,
        bridge_prior_stroke_tia:bridge_prior_stroke_tia,
        bridge_likely_do_not_bridge:bridge_likely_do_not_bridge,
        bridge_likely_bridge:bridge_likely_bridge,
        bridge_likely_bridge_address_other_factors:bridge_likely_bridge_address_other_factors,
        secondary:secondary,
        bridge_start_ufh:bridge_start_ufh,
        bridge_start_lmhw:bridge_start_lmhw,
        bridge_consider_individual_strategy:bridge_consider_individual_strategy,
        bridge_follow_local_protocol:bridge_follow_local_protocol,
        bridge_UFH:bridge_UFH,
        bridge_LMWH:bridge_LMWH,
        bridge_must_answer_remaining:bridge_must_answer_remaining,
        gaCategory_Guidance : gaCategory_Guidance,
        gaPatient_screen : gaPatient_screen,
        action_selected : action_selected,
        current_anticoagulant : current_anticoagulant,
        //advice
        age_65_74:age_65_74,
        age_less65:age_less65,
        age_more74:age_more74,
        adviceMale :adviceMale,
        adviceFemale:adviceFemale,
        adviceINTERRUPT:adviceINTERRUPT,
        adviceBRIDGE:adviceBRIDGE,
        adviceRESTART_DOAC:adviceRESTART_DOAC,
        adviceRESTART_WARFARIN:adviceRESTART_WARFARIN,
        VKA:VKA,
        advice_summary_link:advice_summary_link,
        mail_footer: mail_footer,
        generated_on:generated_on,
        not_calculated:not_calculated,
        patient_case:patient_case,
        drug:drug,
        procedure:procedure,
        increased_patient_risk:increased_patient_risk,
        procedure_risk:procedure_risk,
        thrombotic_risk:thrombotic_risk,
        post_procedure_risk:post_procedure_risk,
        ADVICE:ADVICE,
        INTERRUPTION:INTERRUPTION,
        BRIDGING:BRIDGING,
        restart_warfarin_discontinue:restart_warfarin_discontinue,
        ANTICOAG_RESTART:ANTICOAG_RESTART,
        bridge_indication_for_bridging1:bridge_indication_for_bridging1,
        bridge_likely_do_not_bridge1 : bridge_likely_do_not_bridge1,
        bridge_do_not_bridge1 : bridge_do_not_bridge1,
        bridge_likely_bridge1 : bridge_likely_bridge1,
        bridge_likely_bridge_address_other_factors1 : bridge_likely_bridge_address_other_factors1,
        whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant1 : whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant1,
        WhetherInterrupt_Warfrain_advice_No_Uncertain1 : WhetherInterrupt_Warfrain_advice_No_Uncertain1,
        UFH_advice_static : UFH_advice_static,
        LMWH_advice_static : LMWH_advice_static,
        doac_warning : doac_warning
    };
})

