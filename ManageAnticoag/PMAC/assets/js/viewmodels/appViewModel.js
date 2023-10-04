/*!
* appViewModel JS
* appViewModel contains the functional code for web and mobile application.
*/
define(['knockout',"jquery","pager","databaseModel","databaseConstantsModel","appConstantsModel","util"], function(ko,$,pager,databaseModel,databaseConstantsModel,appConstantsModel,util) {
    
    return function appViewModel() {
        initalTooltips();
        setfoundationForTooltip();
        getNotifications();
        selectAllTherapyFromTable();
        fetchBleedQuestionsFromTable();
        selectProceduresFromTable();
        fetchSavedDataFromProcedureTable();
        selectChadVascQuestionsFromTable();
        fetchSavedDataFromCrClTableOnChadVasc();
        fetchSavedChadVascDataOnChadVascScreen();
        fetchRestartQuestionsFromTable();
        fetchRestartQuestionsFromTableOnDOAC();
        var pageArrays = [];
        
        var selectedTherapyValueFlag = sessionStorage.getItem("SELECTED_THERAPY_FLAG");
        if(selectedTherapyValueFlag === null) {
            sessionStorage.setItem("SELECTED_THERAPY_FLAG", "false");
            selectedTherapyValueFlag = false;
        }
        
        function initalTooltips(){  
            $(document).foundation();
        }
        sessionStorage.setItem("CURRENT_PAGE","1"); //For browser back functionality//
        sessionStorage.setItem("PREV_PAGE","0"); //For browser back functionality//
    
        var self = this;
        
        this.arrayOfPages = ko.observableArray([]);
        self.arrayOfPages.push([0,1]);
        
        sessionStorage.setItem("arrayValue",self.arrayOfPages());
        this.chadsvascLock = ko.observable(false);
        var value_advice_show_info;
        var bridgeAdviceWarningForStatic = null;
        var statusInterrupt = null;
        var statusInterruptEncode = null;
        var statusBridgeEncode = null;
        var statusBridge = null;
        var chadvascScoreForStatic = "Not Calculated";
        var chadvascScoreForStaticEncode;
        var chadvascAgeForStatic = "Not Calculated";
        var chadvascSexForStatic = "Not Calculated";
        var chadvascAgeForStaticEncode;
        var chadvascSexForStaticEncode;
        var crclScoreForStatic = "Not Calculated";
        var crclScoreForStaticEncode = null;
        var crclAgeForStatic = "Not Calculated";
        var crclAgeForStaticEncode = null;
        var crclSexForStatic = "Not Calculated";
        var crclSexForStaticEncode = null;
        var crclWeightForStatic = "Not Calculated";
        var crclWeightForStaticEncode = null;
        var crclSerumForStatic = "Not Calculated";
        var crclSerumForStaticEncode = null;
        var hemostasisForStatic = "Not Calculated";
        var hemostasisForStaticEncode = null;
        
        /* Patient Entry */
	    this.postProceduralRiskAdvice = ko.observable("Not Calculated");
	    this.critialNotifiationTitle = ko.observable();
        this.critialNotifiationText = ko.observable();
        this.showCritialNotifiationLink = ko.observable(false);
	    this.receviedCriticalNotification = ko.observable(false);
        this.newsFeeds = ko.observableArray();
        this.patientMainYesNoChecked = ko.observable();
        this.patientMainSelectedDrug = ko.observable();
        this.patientViewHasReset = ko.observable(true);
        this.patientViewEnableReset = ko.observable(false);
        this.patientMainInactiveList = ko.observable(true);
        this.patientMainActiveList = ko.observable(false);
        this.patientMainAvailableDrugs = ko.observableArray([]);
        this.patientMainTherapyTypeSelected = ko.observable(false);
        this.PatientMainYesNoSelected = ko.observable(false);
        this.lockedPatientSection = ko.observable(false);
        this.enableTherapyDropdown = ko.observable(true);
        this.patientMainDisableBtn = ko.observable(null);
        this.patientMainLockedLinkSection = ko.observable(false);
        this.patientMainUnlockedLinkSection = ko.observable(true);
        this.patientMainDOACtype = ko.observableArray([]);
		this.patientMainAdviceActiveTab = ko.observable(false);
        
        this.aboutAdviceActiveTab = ko.observable(false);
        this.resourceAdviceActiveTab = ko.observable(false);
        this.disclaimerAdviceActiveTab = ko.observable(false);
        this.newsAdviceActiveTab = ko.observable(false);
        
        this.patientBleedQA = ko.observableArray();
        this.patientMainBreadcrumbActive = ko.observable(false);
        this.breadcrumbAvailable = ko.observable(true);
        this.showInitialWarning = ko.observable(false);
        this.lockIconOnPatientForInterruptTab = ko.observable(false);
        var patientMainYesNoValue;
        var patientMainTherapyType;
        var patientLockValue = ""; //checking if patient entry screen locked
        
        checkCalloutWarning();
            
        /* Interrupt Screen */
        var wizadValue = sessionStorage.getItem("goFromwizard"); 
        var crclWizavalue = sessionStorage.getItem("goFromCrclwizard"); 
        
        this.interruptBridgeLockIcon = ko.observable(false);
        this.interruptSelectedProcedureName = ko.observable();
        this.interruptShowProcedureName = ko.observable(false);
        this.interruptdisableValue = ko.observable(null);
        this.interruptCrclManualValue = ko.observable(null);
        this.interruptPatienthasincreasedbleedrisk = ko.observable();
        this.interruptProceduralbleedrisk = ko.observable();
        this.interruptTherapyValue = ko.observable();
        this.interruptDOACtype = ko.observable();
        this.interruptChecked = ko.observable(true);

        this.interruptShouldShowErrorMessage = ko.observable(false);
        this.interruptshouldShowWhenMessage = ko.observable(true);
        this.interruptAvailableItem = ko.observableArray();
        this.interruptCrclInputValue = ko.observable("");
        this.interruptLockedSection = ko.observable(false);
        this.interruptLockedCrclSection = ko.observable(false);
        
        this.interruptInputLockCrcl = ko.observable(false);
        this.interruptTherapyDOACSelected = ko.observable(false);
        this.interruptInactiveWhetherToInterrupt = ko.observable(true);
        this.interruptActiveInterrupt = ko.observable(false);
        this.interruptAdviceActiveTab = ko.observable(false);
        this.interruptVisibleInterruptBtn =  ko.observable(false);
        this.interruptInActiveClearBtn =  ko.observable(true);
        this.interruptActiveClearBtn = ko.observable(false);
        this.interruptSelectedItem = ko.observable();
        this.interruptEnableCrclInput = ko.observable(true);
        this.interruptWhenToInterruptAdviceSubbox = ko.observable(appConstantsModel.not_advised_proceed_with_caution);
        this.interruptWhenToInterruptAdviceSubboxVisible = ko.observable(false);
        
        this.interruptWhetherToIntrruptAdvice = ko.observable(appConstantsModel.restart_doac_default_advice);
        this.interruptWhenToInterruptAdvice = ko.observable(appConstantsModel.restart_doac_default_advice);
		this.interruptWheherToadviceToSave  = ko.observable("");
		this.interruptWhenToadviceTosave = ko.observable("");
        var interruptProceduralBleedRiskHighUncertain = false;
        var interruptAnsweredCrcl = false;
        var interruptAnswerProceduralRisk = false;
        var interruptWantToInterrupt = false;
		var interruptRiskType;
      	this.interruptVisibleCrcl = ko.observable(true);
		this.interruptINRValue = ko.observable();
		this.interruptINRchecked = ko.observable();
        this.interruptAdviceBoxColor = ko.observable(appConstantsModel.secondary);
        this.interruptAdviceBoxColorForWhenToInerrupt = ko.observable(appConstantsModel.secondary);
        var interruptLockValue = ""; //checking if interrupt screen locked
        
        setInterruptScreenLocked();
        selectAllBleedRiskFromTable();
        selectTherapyData();
        selectBleedRiskYesNo();
        
        /* Procedural Bleed Risk Wizard Screen */
        var insertProceduralBleedFlag = sessionStorage.getItem("INSERT_PROCEDURAL_BLEED_RISK");
        if(insertProceduralBleedFlag === null) {
            sessionStorage.setItem("INSERT_PROCEDURAL_BLEED_RISK", "false");
            insertProceduralBleedFlag = false;
        }
        
		this.proceduralVMsearchValue = ko.observable("");
        this.proceduralVMactiveReset = ko.observable(false);
        this.proceduralVMinactiveReset = ko.observable(true);
        this.proceduralVMinactiveDone = ko.observable(true);
        this.proceduralVMactiveDone = ko.observable(false);
        this.procedurePlaceHolder = ko.observable("Enter procedure being performed");
        this.proceduralVMprocedureName = ko.observable("");
        this.proceduralVMprocedureRisk = ko.observable("");
        this.proceduralVMprocedureComment = ko.observable("");
        this.proceduralVMcolorChange = ko.observable(true);
        this.proceduralVMshowIcon = ko.observable(false);
        this.proceduralVMshowNotFoundError = ko.observable(false);
        this.proceduralVMprocedureBleedRisks = ko.observableArray();
        this.proceduralVMprocedureEvent = ko.observableArray();
        var proceduralVMprocedureArrayToShow = [];
        var proceduralVMprocedureBleedRisksArray = [];
        proceduralVMprocedureBleedRisksArray = self.proceduralVMprocedureBleedRisks();
        var proceduralVMfoundProceduresListArray = [];
        this.proceduralVMfoundselectedValue;
        var proceduralVMprocedureId;
        var proceduralVMpreviouslySelectedItemsUsingSearch = [];
        var proceduralVMpreviouslySelectedItemsFirst = [];
        var proceduralVMpreviouslySelectedItemsSecond = [];
        var proceduralVMprocedureNameValue;
        var proceduralVMprocedureRiskValue;
        var proceduralVMprocedureCommentValue;
        var proceduralVMwizardTypeIs;
        
        /* crcl screen */
        var crclVMcrclSelectedValueFlag = sessionStorage.getItem("CRCL_SELECTED");
        if(crclVMcrclSelectedValueFlag === null) {
            sessionStorage.setItem("CRCL_SELECTED", "false");
            crclVMcrclSelectedValueFlag = false;
        }
        var weight = undefined;
        var serum = undefined;
        var crclVMcrclVal = -1;
        var crclVMgenderModifier = 1;
        var crclVMvalidateSuccess = false;
        var crclVMfirstTimeLoadingFlag = true;
        this.crclVMhasDone = ko.observable(false);
        this.crclVMactiveReset=ko.observable(false);
        this.crclVMinactiveReset=ko.observable(true);
        this.crclVMinactiveDone=ko.observable(true);
        this.crclVMactiveDone=ko.observable(false);
        this.crclVMCrClValue=ko.observable();
        this.crclVMweightScrVisibiltyUS=ko.observable(true);
        this.crclVMweightScrVisibiltySI=ko.observable(false);
        this.crclVMCrClUnits = ko.observable(false);
        this.crclVMageInYears = ko.observable("");
        this.crclVMweightInLbs = ko.observable("");
        this.crclVMserumCr = ko.observable("");
        this.crclVMgender = ko.observable(0);
        this.crclVMresetGender = ko.observable();
        this.crclVMshowValue =ko.observable(false);
        this.crclVMdontShowValue =ko.observable(true);
        this.crclVMcheckedOnLoad =ko.observable();
        this.crclVMserumErrTxt=ko.observable(appConstantsModel.wizard_crcl_valid);
        this.crclVMweightErrSiTxt=ko.observable(appConstantsModel.wizard_crcl_weight_one);
        this.crclVMweightErrUsTxt=ko.observable(appConstantsModel.wizard_crcl_weight_two);
        this.crclVMageErrTxt=ko.observable(appConstantsModel.wizard_crcl_age_one);
        this.crclVMInterruptValue=ko.observable(appConstantsModel.interrupt_crcl_value);
        this.crclVMageErr1Txt=ko.observable(appConstantsModel.wizard_crcl_age_two);
        this.crclVMshouldShowSrErrorMessage=ko.observable(false);
        this.crclVMshouldShowAgeErrorMessage=ko.observable(false);
        this.crclVMshouldShowWtErrorMessage=ko.observable(false);
        this.crclVMshouldShow_Above140_AgeErrorMessage=ko.observable(false);
        this.crclVMCrclVMInterruptValue=ko.observable(false);
        this.crclVMshouldShow_below18_AgeErrorMessage=ko.observable(false);
        this.crclVMshowSiMsg = ko.observable();
        this.crclVMshowUsMsg = ko.observable();
 
        /* Bridge Screen */
        var bridgeVMinsertBridgeSessionisFlag = sessionStorage.getItem("INSERT_RESTART_SESSION");
        if(bridgeVMinsertBridgeSessionisFlag === null) {
            sessionStorage.setItem("INSERT_RESTART_SESSION", "false");
            bridgeVMinsertBridgeSessionisFlag = false;
        }

        this.bridgeVMisApproved1 = ko.observable();
        this.bridgeVMisApproved2 = ko.observable();
        this.bridgeVMisApprovedTIA = ko.observable();
        this.bridgeVMisApprovedHIT = ko.observable();
        this.bridgeVMisApprovedCrcl = ko.observable();
        this.bridgeVMisApprovedUFH = ko.observable();
        this.bridgeVMshouldShowErrorMessage = ko.observable(true);
        this.bridgeVMshowCrclViewAndAdministerUFHOrLWMH = ko.observable(false);
        this.bridgeVMsshowWasItAStrokeOrTIA = ko.observable(true);
        this.bridgeVMshouldShowWhetherMessage = ko.observable(true);
        this.bridgeVMhasReset = ko.observable(false);
        this.bridgeVMchadVascInputValue = ko.observable();
        this.bridgeVMenableChadVascInput = ko.observable(true);
        this.bridgeVMsaveTherapyValue = ko.observable();
        this.bridgeVMsavedDOACtype = ko.observable();
        this.bridgeVMwarningMessage = ko.observable();
        this.bridgeVMclearPageVisibility = ko.observable(true);
        this.bridgeVMscoreSectionVisibility = ko.observable(true);
        this.bridgeVMwhetherVisibility = ko.observable(true);
        this.bridgeVMwhenVisibility = ko.observable(true);
        this.bridgeVMdisableAdviceValue = ko.observable("disabled");
        this.bridgeVMenableAdvice = ko.observable(false);
        this.bridgeVMlockedSection = ko.observable(false);
        this.bridgeVMTEchecked= ko.observable();
        this.bridgeVMTEcheckedValue = ko.observable();
        this.bridgeVMpriorTE3RdQeustion = ko.observable();
        this.bridgeVMpatientHasBleedRisk = ko.observable();
        this.bridgeVMwantBridgeAnywayBtn = ko.observable(false);
        this.bridgeVMwhetherAdviceMsg = ko.observable(appConstantsModel.restart_doac_default_advice);
        this.bridgeVMwhenToAdviceMsg = ko.observable(appConstantsModel.restart_doac_default_advice);
        this.bridgeVMwhetherYesNo3QuesChecked = ko.observable();
        this.disableBridgeCrclClick = ko.observable(null);
        this.lockIconOnPatientForBridgeTab = ko.observable(false);

        this.bridgeVMheparinBtnVal = ko.observable();
        this.bridgeVMcrclCheckVal = ko.observable();
        this.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues = ko.observable(false);
        this.bridgeVMcheckedUFH = ko.observable();
        this.bridgeVMtherapeuticagent = ko.observable();
        this.bridgeVMadviceBoxColor = ko.observable("secondary");
        this.bridgeVMadviceBoxColorForWhenToBridge = ko.observable("secondary")
        this.bridgeVMdisableValue = ko.observable(false);
        this.bridgeVMaddClassWhenDisabled = ko.observable("clear-grey-btn");
        var bridgeVMhromboticRiskCalculationVal = "";
        this.bridgeVMdisableClearBtn= ko.observable("disabled");
        this.bridgeNayway = ko.observable(false);
        this.bridgeVMdisableValueDropDown = ko.observable(false);
        this.bridgeVMavailableChadVascValues = ko.observableArray(appConstantsModel.CHADsVasValues);
        this.bridgeVMinputLockChadVas = ko.observable(false);
        this.bridgeVMwhenToBridgeAdviceSubboxVisible = ko.observable(false);
        var bridgeVMtherapyType;
        var displayWasItAStrokeOrTIACountVariable = 0;
        var bridgeLockValue = ""; //checking if bridge screen locked
        
        /* Chads Vasc Wizard Screen */
        var chadsVascSelectedValueFlag = sessionStorage.getItem("CHADVASC_SELECTED");
        if(chadsVascSelectedValueFlag === null) {
            sessionStorage.setItem("CHADVASC_SELECTED", "false");
            chadsVascSelectedValueFlag = false;
        }
        
        this.activeChadVascReset = ko.observable(false);
        this.inactiveChadVascReset = ko.observable(true);
        this.inactiveChadVascDone = ko.observable(true);
        this.activeChadVascDone = ko.observable(false);
        this.chadsVascQA = ko.observableArray();
        this.selectChadVascCHF = ko.observableArray();
        this.showChadVascTxtMsg = ko.observable();
        this.checkedChadVascGenderOnLoad = ko.observable(); 
        this.checkedChadVascAgeOnLoad = ko.observable();
        this.colorChadVascChange = ko.observable(true);
        this.dontShowChadVascValue = ko.observable(true);
        this.showChadVascScore = ko.observable(false);
        this.disableChadVascClick = ko.observable(null);
        var chadsVasc = 0;
        var chadsVasc1 = 0;
        var chadsVasc2 = 0;
        var chadsVasc3 = 0;
        var chadVascGender ;
        var chadVascAge ;
        var chadVascScoreMap = {};
        chadVascScoreMap[1] = 1;
        chadVascScoreMap[2] = 1;
        chadVascScoreMap[3] = 1;
        chadVascScoreMap[4] = 1;
        chadVascScoreMap[5] = 2;
        var chadVascPointsId;
        var storeSelectedChadVascItem = [];
        var previouslySelectedChadVascItems = [];
        var chadVascValue;
        
        /* Bridge crcl Screen */
        bridgeCrclfetchSavedDataFromCrClTable();
        bridgeCrclfetchSavedDataFromChadVascSessionTable();
        
        var bridgeCrclVMcrclSelectedValueFlag  = sessionStorage.getItem("CRCL_SELECTED");
        if(bridgeCrclVMcrclSelectedValueFlag  === null) {
            sessionStorage.setItem("CRCL_SELECTED", "false");
            bridgeCrclVMcrclSelectedValueFlag  = false;
        }

        var bridgeCrclVMcrclVal = -1;
        var bridgeCrclVMgenderModifier = 1;
        var bridgeCrclVMvalidateSuccess = false;
        var bridgeCrclVMfirstTimeLoadingFlag = true;
        this.bridgeCrclVMhasDone = ko.observable(false);
        this.bridgeCrclVMactiveReset=ko.observable(false);
        this.bridgeCrclVMinactiveReset=ko.observable(true);
        this.bridgeCrclVMinactiveDone=ko.observable(true);
        this.bridgeCrclVMactiveDone=ko.observable(false);
        this.bridgeCrclVMCrClValue=ko.observable();
        this.bridgeCrclweightScrVisibiltyUS=ko.observable(true);
        this.bridgeCrclVMweightScrVisibiltySI=ko.observable(false);
        this.bridgeCrclVMCrClUnits = ko.observable(false);
        this.bridgeCrclVMageInYears = ko.observable();
        this.bridgeCrclVMweightInLbs = ko.observable();
        this.bridgeCrclVMserumCr = ko.observable();
        this.bridgeCrclVMgender = ko.observable(0);
        this.bridgeCrclVMresetGender = ko.observable();
        this.bridgeCrclVMshowValue =ko.observable(false);
        this.bridgeCrclVMdontShowValue =ko.observable(true);
        this.bridgeCrclVMcheckedOnLoad =ko.observable();
        this.bridgeCrclVMserumErrTxt=ko.observable(appConstantsModel.wizard_crcl_valid);
        this.bridgeCrclVMweightErrSiTxt=ko.observable(appConstantsModel.wizard_crcl_weight_one);
        this.bridgeCrclVMweightErrUsTxt=ko.observable(appConstantsModel.wizard_crcl_weight_two);
        this.bridgeCrclVMageErrTxt=ko.observable(appConstantsModel.wizard_crcl_age_one);
        this.bridgeCrclVMageErr1Txt=ko.observable(appConstantsModel.wizard_crcl_age_two);
        this.bridgeCrclVMshouldShowSrErrorMessage=ko.observable(false);
        this.bridgeCrclVMshouldShowAgeErrorMessage=ko.observable(false);
        this.bridgeCrclVMshouldShowWtErrorMessage=ko.observable(false);
        this.bridgeCrclVMshouldShow_Above140_AgeErrorMessage=ko.observable(false);
        this.bridgeCrclVMshouldShow_below18_AgeErrorMessage=ko.observable(false);
        this.bridgeCrclVMshowSiMsg = ko.observable();
        this.bridgeCrclVMshowUsMsg = ko.observable();
        
        function setfoundationForTooltip(){
        $('body').on('click', '.has-tip' ,function (event) {
            if($(this).hasClass('open')){
                var dataAttr = $(this).attr('data-yeti-box');
                if(isiPhone()){
                    setTimeout(function(){
                        $("#"+dataAttr).css('display','none');
                    },10);
                }
                else{
                    setTimeout(function(){
                        $("#"+dataAttr).css('display','none');
                    },100);
                }
                $(this).removeClass('open');
            }
            else{
                $(this).addClass('open');
                var dataAttr = $(this).attr('data-yeti-box');
                $('.has-tip').each(function(){
                    if($(this).hasClass('open')){
                        if($(this).attr('data-yeti-box') != dataAttr){
                            $(this).removeClass('open');
                        }
                        else{
                            if(isiPhone() && $("#"+dataAttr).css('display','none'))
                                $("#"+dataAttr).css('display','block');
                        }
                    }
                });
            }
        });
        $('body').on('click touchstart',function(event){
            if(!$(event.target).hasClass('has-tip')){
                $('.has-tip').each(function(){
                    if($(this).hasClass('open')){
                        var dataAttr = $(this).attr('data-yeti-box');
                        $("#"+dataAttr).css('display','none');
                        $(this).removeClass('open');
                    }
                });
            }
        });
        }
       function isiPhone(){
        return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1));
       }
        /* Restart Warfarin Screen */
        var insertYesFlagRestartWarfarin = sessionStorage.getItem("INSERT_YES_NO_RESTART_WARFARIN");
        if(insertYesFlagRestartWarfarin === null) {
            sessionStorage.setItem("INSERT_YES_NO_RESTART_WARFARIN", "false");
            insertYesFlagRestartWarfarin = false;
        }
        
        var insertSessionisFlagRestartWarfarin = sessionStorage.getItem("INSERT_SESSION_RESTART_WARFARIN");
        if(insertSessionisFlagRestartWarfarin === null) {
            sessionStorage.setItem("INSERT_SESSION_RESTART_WARFARIN", "false");
            insertSessionisFlagRestartWarfarin = false;
        }
        
        var insertAdviceisFlagRestartWarfarin = sessionStorage.getItem("INSERT_ADVICE_RESTART_WARFARIN");
        if(insertAdviceisFlagRestartWarfarin === null) {
            sessionStorage.setItem("INSERT_ADVICE_RESTART_WARFARIN", "false");
            insertAdviceisFlagRestartWarfarin = false;
        }
        
        var insertRestartSessionisFlagRestartWarfarin = sessionStorage.getItem("INSERT_RESTART_SESSION_RESTART_WARFARIN");
        if(insertRestartSessionisFlagRestartWarfarin === null) {
            sessionStorage.setItem("INSERT_RESTART_SESSION_RESTART_WARFARIN", "false");
            insertRestartSessionisFlagRestartWarfarin = false;
        }
       
        this.restartWarfarinQA = ko.observableArray();
        this.selectRestartWarfarinQA = ko.observableArray();
        this.homostasisOnLoadRestartWarfarin = ko.observable("");
        this.postProceduralOnLoadRestartWarfarin = ko.observable("");
        this.parentalAgentOnLoadRestartWarfarin = ko.observable("");
        this.showWhatQARestartWarfarin = ko.observable(false);
        this.showOralRestartWarfarin = ko.observable(false);
        this.advice_restart_warfarin_show_info = ko.observable(false);
        this.showAdviceRestartWarfarin = ko.observable(appConstantsModel.restart_doac_default_advice);
        this.advice_restart_warfarin_info_title = ko.observable(appConstantsModel.restart_doac_advice_info_title);
        this.showAdviceNewRestartWarfarin = ko.observable("");
        this.inactiveRestartWarfarinReset = ko.observable(true);
        this.activeRestartWarfarinReset = ko.observable(false);
        this.showQARestartWarfarin = ko.observable(false);
        this.enableRestartWarfarinAdvice = ko.observable(false);
        this.showAdviceAfterIconRestartWarfarin = ko.observable("");
        this.disableAdviceValueRestartWarfarin = ko.observable("disabled");
        this.setRestartWarfarinColor = ko.observable(null);
        this.restartWarfarinProcedureQuestionOnLoad = ko.observable("");
        this.adviceInBullets = ko.observableArray();
        this.showAdviceInBullets = ko.observable(false);
        
        var restart_warfarin_item = "NO";
        var previouslySelectedRestartWarfarinItems = [];
        var restartWarfarinAdvice, restartWarfarinAdviceHeader, restart_warfarin_info_item, restart_warfarin_show_advice_info;
        
        /* Restart DOAC Screen */
        var insertYesFlagRestartDOAC = sessionStorage.getItem("INSERT_YES_NO_RESTART_DOAC");
        if(insertYesFlagRestartDOAC === null) {
            sessionStorage.setItem("INSERT_YES_NO_RESTART_DOAC", "false");
            insertYesFlagRestartDOAC = false;
        }
        
        var insertSessionisFlagRestartDOAC = sessionStorage.getItem("INSERT_SESSION_RESTART_DOAC");
        if(insertSessionisFlagRestartDOAC === null) {
            sessionStorage.setItem("INSERT_SESSION_RESTART_DOAC", "false");
            insertSessionisFlagRestartDOAC = false;
        }
        
        var insertRestartSessionisFlagRestartDOAC = sessionStorage.getItem("INSERT_RESTART_SESSION_RESTART_DOAC");
        if(insertRestartSessionisFlagRestartDOAC === null) {
            sessionStorage.setItem("INSERT_RESTART_SESSION_RESTART_DOAC", "false");
            insertRestartSessionisFlagRestartDOAC = false;
        }
        
        var insertAdviceisFlagRestartDOAC = sessionStorage.getItem("INSERT_ADVICE_RESTART_DOAC");
        if(insertAdviceisFlagRestartDOAC === null) {
            sessionStorage.setItem("INSERT_ADVICE_RESTART_DOAC", "false");
            insertAdviceisFlagRestartDOAC = false;
        }
        
        this.restartQARestartDOAC = ko.observableArray();
        this.selectRestartQARestartDOAC = ko.observableArray();
        this.cardiacSurgeryOnLoadRestartDOAC = ko.observable(""); 
        this.homostasisOnLoadRestartDOAC = ko.observable("");
        this.postProceduralOnLoadRestartDOAC = ko.observable("");
        this.oralMedicationOnLoadRestartDOAC = ko.observable("");
        this.parentalAgentOnLoadRestartDOAC = ko.observable("");
        this.restart_doac_advice_show_info = ko.observable(false);
        
        this.advice_show_info_notBullet_restart_doac = ko.observable(false);
        this.advice_info_title_notBullet_restart_doac = ko.observable(appConstantsModel.restart_doac_advice_info_title);
        
        this.showWhatQARestartDOAC = ko.observable(false);
        this.showOralRestartDOAC = ko.observable(false);
        this.showWarningRestartDOAC = ko.observable(true);
        this.showAdviceRestartDOAC = ko.observable(appConstantsModel.restart_doac_default_advice);
        this.showAdviceNewRestartDOAC = ko.observable("");
        this.inactiveResetRestartDOAC = ko.observable(true);
        this.activeResetRestartDOAC = ko.observable(false);
        this.showQARestartDOAC = ko.observable(false);
        this.enableAdviceRestartDOAC = ko.observable(false);
        this.disableAdviceValueRestartDOAC = ko.observable("disabled");
        this.setRestartDOACColor = ko.observable(null);
        this.restartDoacProcedureQuestionOnLoad = ko.observable("");
        var previouslySelectedRestartDOACItems = [];
        
        this.adviceInBulletsRestartDOAC = ko.observableArray();
        this.showAdviceInBulletsRestartDOAC = ko.observable(false);
        
        var restart_doac_item = "NO";
        var restartDoacAdvice, restartDoacAdviceHeader, restart_doac_info_item, restart_doac_show_advice_info;
        
        insertRestartDoacYesNoInSession();
        fetchInterruptAdviceOnRestartDOAC();
        
        /* Advice Screen */
        this.restartNoAdvice = ko.observable(true);
        this.restartHasAdvice = ko.observable(false);
        this.interruptNoAdvice = ko.observable(true);
        this.interruptHasAdvice = ko.observable(false);
        this.bridgeNoAdvice = ko.observable(true);
        this.bridgeHasAdvice = ko.observable(false);
        this.showRestartAdviceHeader = ko.observable("");
        this.advice_show_info = ko.observable(false);
        this.advice_info_title = ko.observable();
        this.showRestartAdviceText = ko.observable("");
        this.weatherInterruptAdvice = ko.observable("");
        this.whenInterruptAdvice = ko.observable("");
        this.weatherBridgeAdviceWarning = ko.observable("");
        this.weatherBridgeAdvice = ko.observable("");
        this.whenBridgeAdvice = ko.observable("");
        this.bleedRiskOnAdvice = ko.observable("");
        this.riskTypeOnAdvice = ko.observable("Not Calculated");
        this.procedureNameOnAdvice = ko.observable("");
        this.chadvascAgeOnAdvice = ko.observable("");
        this.chadvascSexOnAdvice = ko.observable("");
        this.chadVascScoreOnAdvice = ko.observable("");
        this.crclAgeOnAdvice = ko.observable("");
        this.crclSexOnAdvice = ko.observable("");
        this.crclWeightOnAdvice = ko.observable("");
        this.crclScoreOnAdvice = ko.observable("");
        this.crclScoreValueOnAdvice = ko.observable("Not Calculated");
        this.thromboticRisk = ko.observable("Not Calculated");
        this.restartAdvice = ko.observable("");
        this.drugTypeOnAdvice = ko.observable("");
        this.showWarningTrueAdvice = ko.observable(true);
        this.showWarningFalseAdvice = ko.observable(false);
        this.interruptAdviceStatus = ko.observable(true);
        this.bridgeAdviceStatus = ko.observable(true);
        this.adviceInputs = ko.observable(false);
        this.showRiskOnAdvice = ko.observable(false);
        this.showRestartAdvice = ko.observable(false);
        this.showAfterCompute = ko.observable(false);
        this.showChadvascOnAdvice = ko.observable(false);
        this.showCrclOnAdvice = ko.observable(false);
        this.showTabViewSummary = ko.observable(true);
        this.showTabViewProfile = ko.observable(true);
        this.adviceTabValueSummary = ko.observable(null);
        this.adviceTabValueProfile = ko.observable(null);
        this.hideAdviceHeader = ko.observable(true);
        this.setClassForRestart = ko.observable(null);
        var warningMessage = sessionStorage.getItem("WARNING");
        
        getTherapyTypeFromTableOnAdvice();
        selectDataFromInterruptOnAdvice(); 
        selectDataFromRestartTableOnAdvice();
        selectTherapyFromTableOnAdvice();
        selectProcedureOnAdvice();
        selectCHADVASCOnAdvice();
        selectcrclOnAdvice();
        selectRestartOnAdvice();
        selectDrugTypeOnAdvice();
        
        /***************** Patient Entry Screen ******************/
        
        /**
         * this function is used to check status of the calloutWarning message
         */
        function checkCalloutWarning(){
            var calloutWarning = sessionStorage.getItem("showCalloutWarning");
            if(calloutWarning != "false"){
                self.showInitialWarning(true);
            }
        }
        
        /**
         * this function is used to hide callout waring message
         */
        this.closeInitialWarning =  function(){
            self.showInitialWarning(false);
            sessionStorage.setItem("showCalloutWarning",'false');
        }
        /*
	* this function is used to unlock chadvasc input
	*/
        this.chadsvascUnlock = function(){
            if(!self.bridgeVMlockedSection()){
                self.chadsvascLock(false);
                self.resetChadVascWizard();
            }
        }
        
        /**
         * this function is used to unlock patient entry screen
         */
        this.unlockPatient = function(){
            interruptWantToInterrupt = false;
            sessionStorage.setItem("LOCK_PATIENT_PAGE","NO");
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","NO");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
            sessionStorage.setItem("INTERRUPT_ADVICE",null);
            sessionStorage.removeItem("PROCEDURE_SELECTED");    //Inserted by Cybage
            
            patientLockValue = "NO";
            self.patientViewHasReset(false);
            self.patientViewEnableReset(true);
            self.lockedPatientSection(false);
            self.enableTherapyDropdown(true);
            self.patientMainDisableBtn(null);
            self.patientMainLockedLinkSection(false);
            self.patientMainUnlockedLinkSection(true);
            self.patientMainInactiveList(false);
            self.patientMainActiveList(true);
            self.patientMainBreadcrumbActive(true);
            self.interruptLockedCrclSection(false);
            util.clearSessionTable("CRCL_SESSION_DATA");
            util.clearSessionTable("CHADVASC_SESSION_DATA");
            util.clearSessionTable("PROCEDURE_SESSION_DATA");
            util.clearSessionTable("PROCEDURE_DATA");       //Inserted by Cybage
            util.clearSessionTable("RESTART_SESSION_DATA");
            util.clearSessionTable("INTERRUPT_DATA");
            util.clearSessionTable("ALL_Bridge_DATA");
            self.interruptClearData();
            self.resetBragePage();
            self.clearRestartWarfarin();
            self.clearRestartDOAC();
            
            self.patientMainAdviceActiveTab(false);
            self.interruptAdviceActiveTab(false);
            self.bridgeVMenableAdvice(false);
            self.enableAdviceRestartDOAC(false);
            self.enableRestartWarfarinAdvice(false);
            self.disableAdviceValueRestartWarfarin("disabled");
            self.disableAdviceValueRestartDOAC("disabled");
            setTimeout(function(){
                self.bridgeVMdisableAdviceValue("disabled");
                 enableAdviceTab();
            },500);
            
            
            sessionStorage.setItem("ADVICE_FROM_INTERRUPT",null);
            sessionStorage.setItem("INTERRUPT_DATA",null);
            sessionStorage.setItem("ADVICE_FROM_BRIDGE",null);
            sessionStorage.setItem("BRIDGE_DATA",null);
            sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE",null);
            sessionStorage.setItem("ADVICE_FROM_RESTART",null);
            sessionStorage.setItem("INSERT_ADVICE_RESTART_DOAC","false");
            sessionStorage.setItem("INSERT_ADVICE_RESTART_WARFARIN","false");
            sessionStorage.setItem("WARNING","false");
            sessionStorage.setItem("WARNING_FROM_BRIDGE_DOAC","");
            sessionStorage.setItem("FINAL_PAGE","");
            
            self.lockIconOnPatientForBridgeTab(false);
            self.lockIconOnPatientForInterruptTab(false);
            self.interruptBridgeLockIcon(false);
            
            self.breadcrumbInterruptPresentOnAdvice(false); //Inserted OK by Cybage
            self.breadcrumbInterruptPresentOnBridge(false); //Inserted OK by Cybage
            self.breadcrumbBridgePresentOnAdvice(false);    //Inserted OK by Cybage
        }
        
        /**
         * this function is used to enable navigation bars on patient entry screen
         */
        this.patientMainYesNoChecked.subscribe(function(newValue) {
             enablePatientMainResetButton();
             self.PatientMainYesNoSelected(true);
             enablePatientMainNavigation();
        });
        
        /**
         * this function is used to click on yes/no on patient entry screen 
         */
        this.patientMainYesNoClick = function() {
            enablePatientMainResetButton();
            self.PatientMainYesNoSelected(true);
            enablePatientMainNavigation();
            updatePatientMainYesNoInSessionTable();
            return true;
        }
        /**
         * this function is used to select and save therapy type from dropdown on patient entry screen
         */
        this.patientMainSelectTherapyType = function(){ 
            if(self.patientMainSelectedDrug() == undefined || self.patientMainSelectedDrug() == null || self.patientMainSelectedDrug() == ""){ 
                if(self.PatientMainYesNoSelected() == false){
                    disablePatientMainResetButton();
                } else {
                    enablePatientMainResetButton();
                }
            } else {
                enablePatientMainResetButton();
            }
            
            saveSelectedTherapyTypeInSessionTable();
            self.patientMainTherapyTypeSelected(true);
            enablePatientMainNavigation();
            return true;
        }
        
        /**
         * this function is used to reset patient entry screen 
         */
        this.resetPatientPage = function(){
            if(patientLockValue != "YES"){
                self.patientMainSelectedDrug(null);
                self.patientMainYesNoChecked(null);
                disablePatientMainResetButton();
                self.patientMainTherapyTypeSelected(false);
                self.PatientMainYesNoSelected(false);

                if(self.patientViewHasReset() == true) {
                    self.patientMainInactiveList(true);
                    self.patientMainActiveList(false);
                    self.patientMainBreadcrumbActive(false);
                } else {
                    enablePatientMainNavigation();
                }

                util.clearSessionTable("THERAPY_SESSION_DATA");
                util.clearSessionTable("YES_NO_STORAGE");
            }
        }
        
        /**
         * this function is used to navigate to interrupt page
         */
        this.goToInterruptPage = function(){
            selectTherapyData();
            selectBleedRiskYesNo();
            
            sessionStorage.setItem("CURRENT_PAGE","2"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","1"); //For browser back functionality//
            self.arrayOfPages.push([1,2]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
            sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
            
            var destinationPage = sessionStorage.getItem("FINAL_PAGE");
            if(destinationPage == "restartWarfarin") {
                sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
                self.interruptBridgeLockIcon(true);
            } else if(destinationPage == "restartDoac") {
                sessionStorage.setItem("FINAL_PAGE","restartDoac");
                self.interruptBridgeLockIcon(true);
            } else {
                sessionStorage.setItem("FINAL_PAGE","Interrupt");
                self.interruptBridgeLockIcon(false);
            }
            
            setInterruptScreenLocked();
            
            enableAdviceTab();  //Inserted by Cybage
        }

        /**
         * this function is used to navigate to bridge screen
         */
        this.goToBridgePage = function(){
            fetchSavedChadVascData();
            selectTherapyDataOnBridge();
            getBleedRiskYesNoData();
            getCrclValueFromWizard();
            sessionStorage.setItem("CURRENT_PAGE","3"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","1"); //For browser back functionality//
            
            self.arrayOfPages.push([1,3]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
            pageArrays.push("bridgePage");
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
            sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
            
            
            var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
            if(destinationPage == "restartWarfarin") {
                sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
            } else if(destinationPage == "restartDoac") {
                sessionStorage.setItem("FINAL_PAGE","restartDoac");
            } else {
                sessionStorage.setItem("FINAL_PAGE","Bridge");
            }
            setBridgeScreenLocked();
            
            self.breadcrumbInterruptPresentOnAdvice(false); //Inserted OK by Cybage
            self.breadcrumbInterruptPresentOnBridge(false); //Inserted OK by Cybage
            
            enableAdviceTab();  //Inserted by Cybage
        }

        /**
         * this function is used to navigate to restart screen
         */
        this.goToRestartPageFromPatient = function(){
            sessionStorage.setItem("CURRENT_PAGE","4"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","1"); //For browser back functionality//
            self.arrayOfPages.push([1,4]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
            fetchTherapyTypeFromTable();
            fetchInterruptAdviceOnRestartDOAC();
        }
        
        /**
        * goToOACRestart function
        * goToOACRestart is used to navigate to OAC restart tool from shortcuts
        */
        //Inserted OK by Cybage
        this.goToOACRestart = function() {
            sessionStorage.setItem('INTENTIONAL_OAC_FROM_BAv1', true);
            saveAdviceAndGo();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
        * goToOACRestartFromHamburger function
        * goToOACRestartFromHamburger is used to navigate to OAC restart tool from shortcuts
        */
        //Inserted OK by Cybage
        this.goToOACRestartFromHamburger = function() {
            saveAdviceAndGo();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
        * goToManageBleed function
        * goToManageBleed is used to navigate to Manage Bleed tool 
        */
        //Inserted OK by Cybage
        this.goToManageBleed = function() {
            saveAdviceAndGo();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
        * goToHomePage function
        * goToHomePage is used to navigate to Landing Page tool 
        */
        //Inserted OK by Cybage
        this.goToHomePage = function() {
            saveAdviceAndGo();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            if(window.location.href.indexOf('staticAdviceViewPage') == -1)
                window.location.href = "../index.html";
            return true;                                            //Inserted OK by Cybage
            
        }
        
        /**
         * this function is used to navigate to quick reference screen Inserted OK by Cybage
         */
        this.goToQuickReferencePage = function() {
            saveAdviceAndGo();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
         * this function is used to navigate to resource screen
         */
        this.goToResourcePage = function(){
            //pager.navigate("#!/resourceViewPage");    //Commented by Cybage
            //pageArrays.push("resourceViewPage");      //Commented by Cybage
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }

        /**
         * this function is used to navigate to about screen
         */
        this.goToAboutTheAppPage = function(){            
            //pager.navigate("#!/aboutViewPage");       //Commented by Cybage
            //pageArrays.push("aboutViewPage");         //Commented by Cybage
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }

        /**
         * this function is used to navigate to news screen
         */
        this.goToNewsPage = function(){
            //pager.navigate("#!/newsViewPage");        //Commented by Cybage
            //pageArrays.push("aboutViewPage");         //Commented by Cybage
            getNotifications();
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
         * this function is used to navigate to disclaimer screen
         */
        this.goToDisclaimerPage = function(){
            //pager.navigate("#!/disclaimerViewPage");     //Commented by Cybage
            //pageArrays.push("disclaimerViewPage");       //Commented by Cybage
            enableAdviceTab();
            saveDataAndGo("","disable");                            //Inserted OK by Cybage (for Interrupt)
            saveAlldata("","disable");                              //Inserted OK by Cybage (for Bridge)
            return true;                                            //Inserted OK by Cybage
        }
        
        /**
         * enablePatientMainNavigation function
		 * enablePatientMainNavigation is used to enable other tabs to navigate to other screens from patient screen.
		 */
        function enablePatientMainNavigation() { 
            if(self.patientMainTherapyTypeSelected() == true && self.PatientMainYesNoSelected() == true) {
                self.patientMainInactiveList(false);
                self.patientMainActiveList(true);
                self.patientMainBreadcrumbActive(true);
            } else {
                self.patientMainInactiveList(true);
                self.patientMainActiveList(false);
                self.patientMainBreadcrumbActive(false);
            }
            
            if(self.patientMainSelectedDrug() == undefined || self.patientMainSelectedDrug() == null || self.patientMainSelectedDrug() == ""){ 
                self.patientMainInactiveList(true);
                self.patientMainActiveList(false);
                self.patientMainBreadcrumbActive(false);
            }
        }
        
        /**
         * enablePatientMainResetButton function
		 * enablePatientMainResetButton is used to enable reset button on patient screen.
		 */
        function enablePatientMainResetButton() {
            self.patientViewHasReset(false);
            self.patientViewEnableReset(true);
        }
        
        /**
         * disablePatientMainResetButton function
		 * disablePatientMainResetButton is used to disable reset button on patient screen.
		 */
        function disablePatientMainResetButton() {
            self.patientViewHasReset(true);
            self.patientViewEnableReset(false);
        }

        /**
         * selectAllTherapyFromTable function
         * selectAllTherapyFromTable is used to select all therapy from table.
         */
        function selectAllTherapyFromTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("THERAPY_DATA"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            if(value != null){
                                self.patientMainAvailableDrugs.push([value.drugs]);
                                self.patientMainDOACtype.push([value.drug_type]);
                                fetchSavedTherapyTypeFromSession();
                                selectYesNoAnswerFromSessionTable();
                                sessionStorage.setItem("CURRENT_PAGE","1"); //For browser back functionality//
                                sessionStorage.setItem("PREV_PAGE","0"); //For browser back functionality//
                            }
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of therapy type : " + ex.message);
            }
        }
        
        /**
         * saveSelectedTherapyType function
         * saveSelectedTherapyType is used to save selected therapy type in session table.
         */
        function saveSelectedTherapyTypeInSessionTable(){
            insertTherapyTypeInSession();
        }
        
        /**
         * insertTherapyTypeInSession function
         * insertTherapyTypeInSession is used to insert therapy in session table.
         */
        function insertTherapyTypeInSession(){
            try {
                setTimeout(function(){
                    if(!selectedTherapyValueFlag){
                        var index = self.patientMainAvailableDrugs.indexOf(self.patientMainSelectedDrug());
                        var sessionColumnData = [{ session_value_id: "1", selected_therapy_type: self.patientMainSelectedDrug(),selected_DOACtype:self.patientMainDOACtype()[index] }];
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("THERAPY_SESSION_DATA", dataToStore);
                        selectedTherapyValueFlag = true;
                        sessionStorage.setItem("SELECTED_THERAPY_FLAG", "true");
                    } else {
                        updateTherapyTypeIntoSessionTable();
                    }
                },50);
            } catch(ex){
                console.log("appViewModel() : Error in insertion of therapy type in session table: " + ex.message);
            }
        }
        
        /**
         * updateTherapyTypeIntoSessionTable function
         * updateTherapyTypeIntoSessionTable is used to update therapy in session table.
         */
        function updateTherapyTypeIntoSessionTable(){
            try {
                setTimeout(function(){
                    var index = self.patientMainAvailableDrugs.indexOf(self.patientMainSelectedDrug());
                    var sessionColumnData = [{ session_value_id: "1", selected_therapy_type: self.patientMainSelectedDrug(),selected_DOACtype:self.patientMainDOACtype()[index] }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("THERAPY_SESSION_DATA", dataToStore);
                },50);
            } catch(ex){
                console.log("appViewModel() : Error in updation of therapy type in session table: " + ex.message);
            }
        }
        
        /**
         * selectYesNoAnswerFromSessionTable function
         * selectYesNoAnswerFromSessionTable is used to fetch yes/no from YES_NO session table.
         */
        function selectYesNoAnswerFromSessionTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("YES_NO_STORAGE"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            if(value != null){
                                patientMainYesNoValue = (value.yes_no);
                                if(patientMainYesNoValue != "" && patientMainYesNoValue == "Yes"){
                                    self.patientMainYesNoChecked("Yes");
                                    enablePatientMainResetButton();
                                } else if(patientMainYesNoValue != ""  && patientMainYesNoValue == "No"){
                                    self.patientMainYesNoChecked("No");
                                    enablePatientMainResetButton();
                                } else {
                                    self.patientMainYesNoChecked("");
                                    disablePatientMainResetButton();
                                }
                            }
                        });
                        setPatientScreenLocked();
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in fetching of yes/no value : " + ex.message);
            }
        }
        
        /**
         * setPatientScreenLocked function
         * setPatientScreenLocked is used to lock patient screen.
         */
        function setPatientScreenLocked(){
            patientLockValue = sessionStorage.getItem("LOCK_PATIENT_PAGE");
            if(patientLockValue == "YES"){
                self.patientViewHasReset(true);
                self.patientViewEnableReset(false);
                self.lockedPatientSection(true);
                self.enableTherapyDropdown(false);
                self.patientMainDisableBtn("disabled");
                self.patientMainLockedLinkSection(true);
                self.patientMainUnlockedLinkSection(false);
                
                var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
                if(destinationPage == "Interrupt") {
                    sessionStorage.setItem("LOCK_INTERRUPT_PAGE","NO");
                    sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
                    self.lockIconOnPatientForBridgeTab(false);
                    self.lockIconOnPatientForInterruptTab(false);
                } else if(destinationPage == "Bridge") {
                    sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
                    self.lockIconOnPatientForBridgeTab(false);
                    self.lockIconOnPatientForInterruptTab(true);
                } else {
                    sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");    //BY Cybage comment: locks the interrupt. Because saveDataAndGo() is called without pageName in AX sections, destinationPage is set as restartDOAC
                    sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                    self.lockIconOnPatientForBridgeTab(true);
                    self.lockIconOnPatientForInterruptTab(true);
                }
                
            }
        }
        
        /**
         * updatePatientMainYesNoInSessionTable function
         * updatePatientMainYesNoInSessionTable is used to update manual entry of yes/no into session table.
         */
        function updatePatientMainYesNoInSessionTable(){
            try {
                setTimeout(function(){
                    var sessionColumnData = [{ yes_no_id: "1", yes_no: self.patientMainYesNoChecked() }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("YES_NO_STORAGE", dataToStore);
                },50);
            } catch(ex){
                console.log("appViewModel() : Error in updation of data : " + ex.message);
            }
        }
        
        /**
         * fetchSavedTherapyTypeFromSession function
         * fetchSavedTherapyTypeFromSession is used to fetch saved therapy type from session table.
         */
        function fetchSavedTherapyTypeFromSession(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            if(value != null){
                                patientMainTherapyType = ([value.selected_therapy_type]);
                                self.patientMainSelectedDrug(""+patientMainTherapyType);
                            }
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of yes no value : " + ex.message);
            }
        }
        
        /**
         * fetchTherapyTypeFromTable function
         * fetchTherapyTypeFromTable is used to select saved therapy from table and navigate to restart screen.
         */
        function fetchTherapyTypeFromTable() {
            try {
                setTimeout(function() {
                    var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            if ((value.selected_DOACtype[0]) === "DOAC - Anti-Xa" || (value.selected_DOACtype[0]) === "DOAC – DTI" ) {
                                selectRestartStoredDataFromTableOnRestartDoac();
                                sessionStorage.setItem("DESTINATION", "RESTART_DOAC");
                                pager.navigate("#!/restartPage");
                                pageArrays.push("restartPage");
                                sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                                sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                                sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                                sessionStorage.setItem("FINAL_PAGE","restartDoac");
                                sessionStorage.setItem("CURRENT_PAGE","Patient"); //For browser back functionality//
                                sessionStorage.setItem("NEXT_PAGE","restartDoac"); //For browser back functionality//
                            } else if((value.selected_DOACtype[0]) === "VKA") {
                                selectRestartStoredDataFromTableOnWarfarin();
                                sessionStorage.setItem("DESTINATION", "RESTART_WARFARIN");
                                pager.navigate("#!/restartPageWarfarin");
                                pageArrays.push("restartPageWarfarin");
                                sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                                sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                                sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                                sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
                                sessionStorage.setItem("CURRENT_PAGE","Patient"); //For browser back functionality//
                                sessionStorage.setItem("NEXT_PAGE","restartWarfarin"); //For browser back functionality//
                            }
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of therapy : " + ex.message);
            }
        }
		
		/**
         * this function is used to get advice from patient screen 
         */
		this.getAdviceFromPatient = function(){
            sessionStorage.setItem("DESTINATION", "PATIENT");
            pager.navigate("#!/adviceViewPage");
             pageArrays.push("adviceViewPage");
            getAdvices();
        }
        
        /***************** Patient Wizard Screen ******************/
        
        
        /**
         * getPatientBleedValue function
         * getPatientBleedValue is used to get and pass patient bleed questions to the view.
         */
        function getPatientBleedValue(id, name, bleed_info_title, bleed_show_info) {
            var self = this;
            self.patientBleedId = ko.observable(id);
            self.patientBleedName = ko.observable(name);
            self.patient_info_title = ko.observable(bleed_info_title);
            self.selectedPatientBleedQA = ko.observable(true);
            
            if(bleed_show_info == "false") {
                self.patient_show_info = ko.observable(false);
            } else {
                self.patient_show_info = ko.observable(true);
            }
        }
        
        /**
         * fetchBleedQuestionsFromTable function
         * fetchBleedQuestionsFromTable is used to select all bleed questions from table.
         */
        function fetchBleedQuestionsFromTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("PATIENT_BLEED_RISK"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            self.patientBleedQA.push(new getPatientBleedValue([value.bleed_id],[value.questions], [value.bleed_info_title],[value.bleed_show_info]));
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in fetching of bleed questions : " + ex.message);
            }
        }
        
        
        /*---------------interrupt functionality start ----------------------------------*/
        this.interruptHideProcedureName =  function(){
            
            if(self.interruptLockedSection() != true){
                self.resetProcedureWizard();
                sessionStorage.removeItem("PROCEDURE_SELECTED");    //Inserted by Cybage
                self.interruptShowProcedureName(false);
                
            }

        }
        /*
        * setUIForWarfarin function
        * setUIForWarfarin show UI for Warfarin.
        */
		function setUIForWarfarinInterrupt(){
			 self.interruptTherapyDOACSelected(true);
			 self.interruptVisibleCrcl(false);
			  if(interruptAnswerProceduralRisk == true){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptVisibleInterruptBtn(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithmWarfarin("");
                }
		}
		/*
        * supratherapeuticChecked function
        * supratherapeuticChecked is used when supratherapeutic is clicked.
        */
		this.supratherapeuticChecked = function(){
            setWhenToInterruptBox();
			self.interruptINRValue(appConstantsModel.inter_supratherapeutic);
			interruptAnsweredCrcl = true;
			self.interruptActiveClearBtn(true);
			 if(interruptAnswerProceduralRisk == true){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptVisibleInterruptBtn(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithmWarfarin("");
                }
			return true;
		}
        
        this.interruptUnlockSection = function(){
            checkActiveClrBtn();
            sessionStorage.setItem("FINAL_PAGE","Interrupt");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","NO");
            self.interruptLockedSection(false);
            self.interruptdisableValue(null);
            
            if(self.interruptInputLockCrcl() == true){
                self.interruptLockedCrclSection(true);
            } else {
                self.interruptLockedCrclSection(false);
            }
            
            if(self.crclVMageInYears() != ""){
                self.interruptInputLockCrcl(true);
                self.interruptCrclManualValue("disabled");
            }else{
                self.interruptInputLockCrcl(false);
                self.interruptCrclManualValue(null);
            }
            if(self.interruptCrclInputValue() == undefined || self.interruptCrclInputValue() == ""){
                self.interruptInputLockCrcl(false);
                self.interruptCrclManualValue(null);
                util.clearSessionTable("CRCL_SESSION_DATA");
            }
            
            util.clearSessionTable("CHADVASC_SESSION_DATA");
            util.clearSessionTable("RESTART_DOAC_ADVICE_STORAGE");
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            util.clearSessionTable("BRIDGE_DATA");
            sessionStorage.setItem("ADVICE_FROM_BRIDGE ",null);
            sessionStorage.setItem("BRIDGE_DATA",null);
            sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE",null);
            sessionStorage.setItem("ADVICE_FROM_RESTART",null);
            sessionStorage.setItem("INSERT_ADVICE_RESTART_DOAC","false");
            sessionStorage.setItem("INSERT_ADVICE_RESTART_WARFARIN","false");
            sessionStorage.setItem("WARNING","false");
            sessionStorage.setItem("WARNING_FROM_BRIDGE_DOAC","");
            self.interruptBridgeLockIcon(false);
            
            resetAllData();
            sessionStorage.setItem("goFromBridgeCrclwizard","");
            self.resetChadVascWizard();
            self.bridgeCrclVMresetPage();       
            self.clearRestartWarfarin();
            self.clearRestartDOAC();
            setTimeout(function(){
               enableAdviceTab();
            },500);
            
            self.breadcrumbInterruptPresentOnAdvice(false); //Inserted OK by Cybage
            self.breadcrumbInterruptPresentOnBridge(false); //Inserted OK by Cybage
            self.breadcrumbBridgePresentOnAdvice(false);    //Inserted OK by Cybage
        }
		/*
        * goalLavelChecked function
        * goalLavelChecked is used when goal lavel is clicked.
        */
		this.goalLavelChecked = function(){
            setWhenToInterruptBox();
			self.interruptINRValue("Goal level");
			interruptAnsweredCrcl = true;
			self.interruptActiveClearBtn(true);
			 if(interruptAnswerProceduralRisk == true){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptVisibleInterruptBtn(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithmWarfarin("");
                }
			return true;
		}
		/*
        * subtherpeuticChecked function
        * subtherpeuticChecked is used when subtherpeutic is clicked.
        */
		this.subtherpeuticChecked = function(){
            setWhenToInterruptBox();
			self.interruptINRValue(appConstantsModel.inter_subtherapeutic);
			interruptAnsweredCrcl = true;
			self.interruptActiveClearBtn(true);
			 if(interruptAnswerProceduralRisk == true){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptVisibleInterruptBtn(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithmWarfarin("");
                }
			return true;
		}  
        
        // setWhenToInterruptBox function for setting when to interrupt value
        function setWhenToInterruptBox(){
            //interruptWantToInterrupt = false;
            self.interruptWhenToInterruptAdviceSubboxVisible(false);
            self.interruptAdviceBoxColorForWhenToInerrupt('secondary');
        }
        
        /**
         * fetchSavedDataFromProcedureTable function
         * fetchSavedDataFromProcedureTable is used to fetch single risk from procedure table.
         */
         function fetchSavedDataFromProcedureTable(){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("PROCEDURE_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            $.each(localData, function(key, value){
                                if(wizadValue == appConstantsModel.inter_yes|| crclWizavalue == appConstantsModel.inter_yes ){
                                    self.interruptSelectedItem(value.procedure_value_risk);
                                    var crclval = sessionStorage.getItem("crclValue");
                                    if(crclval != undefined && crclval != ""){
                                        //crclInputValue(crclval)
                                        self.interruptCrclInputValue(crclval);//Inserted by Cybage
                                    }
                                    var INRValues = sessionStorage.getItem("INRValue");
                                    if(INRValues != undefined && INRValues != ""){
                                        setINRvalue(INRValues)
                                    }
                                }
                            });
                        }
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of risk : " + ex.message);
            }
        }
        
        /*
        * setINRvalue function
        * setINRvalue is used to for setting INRValue.
        */
       function setINRvalue(INRVal){
         if(self.interruptTherapyValue() == "Warfarin"){
		   self.interruptINRValue(INRVal);
		   self.interruptINRchecked(INRVal)
			interruptAnsweredCrcl = true;
			 if(interruptAnswerProceduralRisk == true){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptVisibleInterruptBtn(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithmWarfarin("");
                   
                }
         }
	   }
		
        /*
        * insertProcedureDataIntoSessionTableFromInterrupt function
        * insertProcedureDataIntoSessionTableFromInterrupt is used to insert data into procedure session table on interrupt screen.
        */
        function insertProcedureDataIntoSessionTableFromInterrupt(){
        
            var isWizardValue = sessionStorage.getItem("goFromProcedureWizard");
            try {
                if(isWizardValue == "yes" || self.interruptShowProcedureName() == true) {
                    setTimeout(function(){
                        sessionStorage.setItem("goFromProcedureWizard","no");
                    },10);
                } else {
                    if(self.interruptSelectedItem()){
                    setTimeout(function(){
                        var sessionColumnData = [{ procedure_value_id: "1", procedure_value_name: "", procedure_value_risk: self.interruptSelectedItem()[0], procedure_value_coment: "",selected_item_search:"",selected_item_first:"",selected_item_second:"", procedure_wizard_type: "0"}];

                        if(self.interruptLockedSection() != true){
                            self.interruptShowProcedureName(false);
                        }
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("PROCEDURE_SESSION_DATA", dataToStore);
                        sessionStorage.setItem("goFromProcedureWizard","no");
                    },10);
                    }else{
                        sessionStorage.setItem("PROCEDURE_SESSION_DATA", null);
                        sessionStorage.setItem("goFromProcedureWizard","no");
                    }
                }
            } catch(ex){
                console.log("appViewModel() : Error in updation of data : " + ex.message);
            }
        }
        
         /*
        * fetchSelectedRiskFromTable function
        * fetchSelectedRiskFromTable is used to fetch single risk from chad vasc table.
        */
         function fetchSavedDataCrclTable(){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("CRCL_SESSION_DATA");
                    var cancel_data = sessionStorage.getItem("CANCEL_CRCL");
                    if(data)
                        var localData = JSON.parse(data);
                        if(localData !=null && localData !=""){
                            $.each(localData, function(key, value){
                                if(crclWizavalue == appConstantsModel.inter_yes){
                                    self.interruptCrclInputValue(value.crcl_value)
                                    self.interruptActiveClearBtn(false);
                                    self.interruptInActiveClearBtn(true);

                                    if(cancel_data !=  appConstantsModel.inter_yes){
                                        self.interruptEnableCrclInput(false);
                                        self.interruptInputLockCrcl(true);
                                    }else{
                                        sessionStorage.setItem("CANCEL_CRCL","")
                                    }
                                    interruptAnsweredCrcl =  true;
                                }
                            });
                        }
                    
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of questions : " + ex.message);
            }
        }
        
        /**
         * clearCrcl function
         * clearCrcl is used to clear crcl input.
         */
        this.clearCrcl = function(){
            self.interruptCrclManualValue (null);
            util.clearSessionTable("CRCL_SESSION_DATA");
            self.crclVMresetPage();    
            self.interruptEnableCrclInput(true); 
            self.interruptCrclInputValue(undefined);
            self.interruptInputLockCrcl(false);
            self.interruptLockedCrclSection(false);
            
			validationForCrcl();
            if(self.interruptSelectedItem() == undefined){
                self.interruptActiveClearBtn(false);
            }
            if((self.interruptCrclInputValue() == "" || self.interruptCrclInputValue() == undefined) && self.interruptVisibleInterruptBtn() == true){
                 self.interruptActiveInterrupt(false);
             }else{
                 self.interruptActiveInterrupt(true);
             }
        }
 
        /**
         * selectTherapyData function
         * selectTherapyData is used to select all therapy from table.
         */
        function selectTherapyData(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                if(localData !=null && localData !=""){
                    $.each(localData, function(key, value){
                        self.interruptTherapyValue(value.selected_therapy_type);
                        self.interruptDOACtype(value.selected_DOACtype);
                        fetchSavedRiskFromSession();
                        if(self.interruptTherapyValue() == "Warfarin"){
                            setUIForWarfarinInterrupt();
                        }else{
                            self.interruptVisibleCrcl(true);
							self.interruptTherapyDOACSelected(false);
                        }
                    });
                }
            } catch(ex){
                console.log("appViewModel() : Error in selection selectAllBleedRisk : " + ex.message);
            }
        }
        
          /*
        * selectBleedRiskYesNo function
        * selectBleedRiskYesNo is used to select final answer from table.
        */
        function selectBleedRiskYesNo(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("YES_NO_STORAGE"));
                if(localData !=null && localData !=""){
                    $.each(localData, function(key, value){
                        var item = ([value.yes_no]);
                        self.interruptPatienthasincreasedbleedrisk(item);
                    });
                }
            } catch(ex){
                console.log("patientBleedRiskWizardModel() : Error in selection of yes no value : " + ex.message);
            }
        }

        /*
        * selectAllBleedRiskFromTable function
        * selectAllBleedRiskFromTable is used to select all therapy from table.
        */
        function selectAllBleedRiskFromTable(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("BLEEDRISK_DROPDOWN"));
                if(localData !=null && localData !=""){
                    self.interruptAvailableItem([]);
                    $.each(localData, function(key, value){
                        self.interruptAvailableItem.push([value.bleed_risks_name]);
                        fetchSavedRiskFromSession();
                    });
                }
        
            } catch(ex){
                console.log("appViewModel() : Error in selection selectAllBleedRisk : " + ex.message);
            }
        }
        
        /**
         * setInterruptScreenLocked function
         * setInterruptScreenLocked is used to lock interrupt screen.
         */
        function setInterruptScreenLocked(){
            interruptLockValue = sessionStorage.getItem("LOCK_INTERRUPT_PAGE");
            if(interruptLockValue == "YES"){
                self.interruptLockedSection(true);
                self.interruptLockedCrclSection(true);
                self.interruptdisableValue("disabled");
                self.interruptCrclManualValue("disabled");
                setPreviousData();
                setClearBtnInactive();
            } else if(interruptLockValue == "NO"){
                self.interruptLockedSection(false);
                self.interruptdisableValue(null);
                self.interruptCrclManualValue(null);
                util.clearSessionTable("CHADVASC_SESSION_DATA");
                checkActiveClrBtn();
            }
        }
		
		/*
        * fetchSavedRiskFromSession function
        * fetchSavedRiskFromSession is used to fetch saved risk type from session table.
        */
        function fetchSavedRiskFromSession(){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("PROCEDURE_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData !=null && localData !=""){
                            $.each(localData, function(key, value){
                                if(value != null){
                                    interruptRiskType = ([value.procedure_value_risk]);
                                    if(wizadValue == appConstantsModel.inter_yes || crclWizavalue == appConstantsModel.inter_yes ){
                                        self.interruptSelectedItem(""+interruptRiskType);
                                        var crclval = sessionStorage.getItem("crclValue");
                                        if(crclval != undefined && crclval != ""){
                                            self.interruptCrclInputValue(crclval);
                                        }
                                        var INRValues = sessionStorage.getItem("INRValue");
                                        if(INRValues != undefined || INRValues != ""){
                                            setINRvalue(INRValues);
                                        }
                                    }
                                }
                            });
                        }
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of yes no value : " + ex.message);
            }
        }
        
        
        function getMobileOperatingSystem() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;

            if (/windows phone/i.test(userAgent)) {
                return "Windows Phone";
            }

            if (/android/i.test(userAgent)) {
                return "Android";
            }

            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "iOS";
            }
           
            return "unknown";
        }
        
        
		/*
        * interruptCrclInputChangeOnKeyChange function
        * interruptCrclInputChangeOnKeyChange is used on change keyup.
        */
        this.interruptCrclInputChangeOnKeyChange = function(data,event){

                var check = false;
               var str =  self.interruptCrclInputValue();
               for(var i=0; i<str.length;i++){
                   if (((str.charCodeAt(i) > 47) && (str.charCodeAt(i) < 58)) || (str.charCodeAt(i) == 190) || (str.charCodeAt(i) == 46) || (str.charCodeAt(i) == 13) || (str.charCodeAt(i) == 20)){
                       if(check == true){
                           self.crclVMCrclVMInterruptValue(true);
                       }else{
                           self.crclVMCrclVMInterruptValue(false);
                       }
                    } else {
                        check = true;
                            self.interruptCrclInputValue(undefined);
                            self.crclVMCrclVMInterruptValue(true);
                        activeResetButton();
                        
                    }  
                   validationForCrcl();
               }   
           
        if(self.interruptCrclInputValue() !=undefined){
            if (self.interruptCrclInputValue().indexOf(".") != self.interruptCrclInputValue().lastIndexOf(".")){
                self.crclVMCrclVMInterruptValue(true);
                self.interruptCrclInputValue(undefined);
                activeResetButton();
                validationForCrcl();
            }else if(self.interruptCrclInputValue() > 7678.2 || self.interruptCrclInputValue() < 0){
                self.crclVMCrclVMInterruptValue(true);
                self.interruptCrclInputValue(undefined);
                activeResetButton();
                validationForCrcl();
            }
        }else{
            sessionStorage.setItem("CRCL_SESSION_DATA",null);

        }
            
		}
        
         this.interruptCrclInputChangeOnKeyUP = function(){
             if(self.interruptCrclInputValue()){}else{
                 sessionStorage.setItem("CRCL_SESSION_DATA",null);
             }
             activeResetButton();
             validationForCrcl();
             self.interruptCrclInputChangeOnKeyChange();
             
             if((self.interruptCrclInputValue() == "" || self.interruptCrclInputValue() == undefined ) && self.interruptVisibleInterruptBtn() == true){
                 self.interruptActiveInterrupt(false);
             }
         }

         function activeResetButton(){
             if(self.interruptCrclInputValue() == undefined ||self.interruptCrclInputValue() == ""){
                 if(self.interruptSelectedItem() == undefined){
                     self.interruptActiveClearBtn(false);
                 }
             }else{
                 self.interruptActiveClearBtn(true);
             }
         }

        function validationForCrcl() {
            if(self.interruptSelectedItem() == undefined && self.interruptCrclInputValue() == ""){
				    self.interruptWhenToInterruptAdviceSubboxVisible(false);
					self.interruptActiveClearBtn(false);
					self.interruptInActiveClearBtn(true);
					self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
					self.interruptWhetherToIntrruptAdvice(appConstantsModel.restart_doac_default_advice);
                    self.interruptAdviceBoxColor(appConstantsModel.secondary);
                    self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
			} else if(self.interruptSelectedItem() == undefined && self.interruptCrclInputValue() != "" &&  self.interruptCrclInputValue() != undefined ){
				self.interruptActiveClearBtn(true);
				self.interruptInActiveClearBtn(false);
				self.interruptWhenToInterruptAdviceSubboxVisible(false);
				self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
				self.interruptWhetherToIntrruptAdvice(appConstantsModel.restart_doac_default_advice);
                 self.interruptAdviceBoxColor(appConstantsModel.secondary);
                self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
			} else if(self.interruptSelectedItem() != undefined  && (self.interruptCrclInputValue() == "" ||  self.interruptCrclInputValue() == undefined ) && interruptWantToInterrupt == true){
				self.interruptWhenToInterruptAdvice(appConstantsModel.interrupt_crcl_needed);
               // interruptWantToInterrupt = false;
				self.interruptWhenToInterruptAdviceSubboxVisible(false);
                self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
			}
            
            
            if(self.interruptSelectedItem() != undefined  && interruptWantToInterrupt == false ){
                if(self.interruptVisibleInterruptBtn() == true){
                     self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
                } else{
                    self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
                }
				self.interruptWhenToInterruptAdviceSubboxVisible(false);
                self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
               
			} else if(self.interruptSelectedItem() != undefined  && interruptWantToInterrupt == true){
                if(self.interruptCrclInputValue() != "" &&  self.interruptCrclInputValue() != undefined ){
                    self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
                }
            } 
			 if(self.interruptSelectedItem() != undefined  && interruptWantToInterrupt == true && (self.interruptCrclInputValue() != "" &&  self.interruptCrclInputValue() != undefined ) ){
				 self.interruptWhenToInterruptAdviceSubboxVisible(true);
			 }
			 if(self.interruptCrclInputValue() !=undefined && self.interruptCrclInputValue() !=""){
                 interruptAnsweredCrcl = true;
                 var crclMsg = appConstantsModel.interrupt_crcl_needed;
                 if(interruptAnswerProceduralRisk == true && self.interruptWhenToInterruptAdvice() != crclMsg){
                    self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                    self.interruptInactiveWhetherToInterrupt(false);
                    self.interruptActiveClearBtn(true);
                    calcuateAlgorithm();
                 } else{
                    self.interruptWhenToInterruptAdviceSubboxVisible(false);
                 }
                 var data = sessionStorage.getItem("CRCL_SESSION_DATA");

                 if(data){
                    var localData = JSON.parse(data);
                    if(localData !=null && localData !=""){
                    $.each(localData, function(key, value){
                        var sessionColumnData = [{ crcl_id: "1", crcl_value: self.interruptCrclInputValue(), crcl_gender: value.crcl_gender, crcl_age: value.crcl_age, crcl_weight:value.crcl_weight, crcl_serum: value.crcl_serum, crcl_unit: value.crcl_unit }]
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("CRCL_SESSION_DATA", dataToStore);
                        sessionStorage.setItem("CRCL_INTERRUPT_VALUE", self.interruptCrclInputValue());
                        });
                    }
                 } else{
                    var sessionColumnData = [{ crcl_id: "1", crcl_value: self.interruptCrclInputValue(), crcl_gender: "", crcl_age: "", crcl_weight:"", crcl_serum: "", crcl_unit: "" }]
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("CRCL_SESSION_DATA", dataToStore);
                     sessionStorage.setItem("CRCL_INTERRUPT_VALUE", self.interruptCrclInputValue());
                 }
             } else{
                interruptAnsweredCrcl = false;
             }
        }
        
        //activeWhetherToInterrpt : this function is used to enable the whether to interrupt block
          this.interruptActiveWhetherToInterrpt = function(){
              self.interruptShowProcedureName(false)
              var doneProcedural = sessionStorage.getItem("doneProcedural");
             
			  self.interruptAdviceBoxColor(appConstantsModel.secondary);
              self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
              self.interruptWhenToInterruptAdviceSubboxVisible(false);
			  if(self.interruptSelectedItem() == undefined  ){
                  sessionStorage.setItem("INTERRUPT_DATA","");
                  self.interruptShowProcedureName(false);
                  sessionStorage.setItem("ADVICE_FROM_INTERRUPT",null);
				 if(self.interruptCrclInputValue() == undefined || self.interruptCrclInputValue() == ""){
					self.interruptActiveClearBtn(false);
					self.interruptInActiveClearBtn(true);	
				 }
				 if(self.interruptTherapyValue() ==appConstantsModel.warfarin && self.interruptINRchecked() !=undefined){
					 self.interruptActiveClearBtn(true);
				 }
				 interruptAnswerProceduralRisk = false;
				 self.interruptActiveInterrupt(false);
				 self.interruptAdviceActiveTab(false);
				 self.interruptInactiveWhetherToInterrupt(true);
				 self.interruptWhenToInterruptAdviceSubboxVisible(false);
				 self.interruptVisibleInterruptBtn(false);
				 self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
				 self.interruptWhetherToIntrruptAdvice(appConstantsModel.restart_doac_default_advice);
                  //sessionStorage.setItem("PROCEDURE_SESSION_DATA", null);
                  insertProcedureDataIntoSessionTableFromInterrupt();
			  }else{
                  self.interruptActiveInterrupt(false);
                   sessionStorage.setItem("ADVICE_FROM_INTERRUPT","true");
                  if(self.interruptTherapyValue() != appConstantsModel.warfarin){
                        self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                        self.interruptInactiveWhetherToInterrupt(false);
                        self.interruptVisibleInterruptBtn(false);
                        self.interruptActiveClearBtn(true);
                        self.interruptInActiveClearBtn(false);
                        self.interruptWhenToInterruptAdviceSubboxVisible(false);
                        interruptAnswerProceduralRisk = true;
                        interruptWantToInterrupt = false;
                        self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice)
                        if(self.interruptProceduralbleedrisk() == appConstantsModel.uncertain || self.interruptProceduralbleedrisk() == appConstantsModel.intermediate || self.interruptProceduralbleedrisk() == appConstantsModel.inter_high ){
                            interruptProceduralBleedRiskHighUncertain = true;
                        }else {
                            interruptProceduralBleedRiskHighUncertain = false;
                        }
                        calcuateAlgorithm();
                        insertProcedureDataIntoSessionTableFromInterrupt();
                  }else{
                        self.interruptActiveInterrupt(false);
                        self.interruptAdviceActiveTab(true);
                        interruptAnswerProceduralRisk = true;
                        self.interruptProceduralbleedrisk(self.interruptSelectedItem())
                        self.interruptInactiveWhetherToInterrupt(false);
                        self.interruptVisibleInterruptBtn(false);
                        self.interruptActiveClearBtn(true);
                        nswerProceduralRisk = true;
                        self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
                        calcuateAlgorithmWarfarin();
                        insertProcedureDataIntoSessionTableFromInterrupt();
                }
			 }
          }
     
          var advice1 = appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic;
		  
		  var advice2 = appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic;
		  
		  var advice3 = appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic;
		  var wetherToInterruptAdd = appConstantsModel.wetherToInterruptAdd;
		  var wether_yes_notClinically = appConstantsModel.wetherToInterruptAdd;
		  /*
        * calcuateAlgorithmWarfarin function
        * calcuateAlgorithmWarfarin for calculating advice.
        */
          function calcuateAlgorithmWarfarin(type){
            if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no && (self.interruptProceduralbleedrisk() == appConstantsModel.not_clinically_important || self.interruptProceduralbleedrisk() == appConstantsModel.inter_low)){
                self.interruptWhetherToIntrruptAdvice(appConstantsModel.whetherInterrupt_warfrain_advice_Perform_procedure);
                self.interruptVisibleInterruptBtn(true);
               
                if(self.interruptINRValue() !=undefined && self.interruptINRValue() !=""){
                    self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
                }
                 saveAdviceData();
                self.interruptAdviceBoxColor(appConstantsModel.error);
                if(type !=undefined && interruptWantToInterrupt == true){
                   self.interruptWhenToInterruptAdviceSubboxVisible(true);
                    self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.error);
                    activeInturrupt();
                    if(self.interruptINRValue() ==appConstantsModel.inter_supratherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic);
                        
                    }else if(self.interruptINRValue() ==appConstantsModel.goal_level){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Goal_level);
                  
                    }else if(self.interruptINRValue() ==appConstantsModel.inter_subtherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic);
                       
                    }
                    saveAdviceData();
                }
            }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no && (self.interruptProceduralbleedrisk() == appConstantsModel.intermediate || self.interruptProceduralbleedrisk() == appConstantsModel.inter_high)){
               self.interruptAdviceBoxColor(appConstantsModel.success);
                self.interruptWhetherToIntrruptAdvice(appConstantsModel.whetherInterrupt_warfrain_advice_Interrupt_anticoagulant);
                activeInturrupt();
                saveAdviceData();
                if(interruptAnsweredCrcl){
                    self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                    if(self.interruptINRValue() ==appConstantsModel.inter_supratherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic);
                        
                    }else if(self.interruptINRValue() ==appConstantsModel.goal_level){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Goal_level);
                  
                    }else if(self.interruptINRValue() ==appConstantsModel.inter_subtherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic);
                       
                    }
                    saveAdviceData();
                } 
            }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no && self.interruptProceduralbleedrisk() == appConstantsModel.uncertain){
                self.interruptWhetherToIntrruptAdvice(appConstantsModel.WhetherInterrupt_Warfrain_advice_No_Uncertain);
                self.interruptVisibleInterruptBtn(true);
                if(self.interruptINRValue() !=undefined && self.interruptINRValue() !=""){
                    self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
                }
                saveAdviceData();
                 self.interruptAdviceBoxColor(appConstantsModel.warning);
                if(type !=undefined && interruptWantToInterrupt == true){
                    self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.warning);
                    self.interruptWhenToInterruptAdviceSubboxVisible(false);
                    activeInturrupt();
                    if(self.interruptINRValue() ==appConstantsModel.inter_supratherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic);
                        
                    }else if(self.interruptINRValue() ==appConstantsModel.goal_level){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Goal_level);
                  
                    }else if(self.interruptINRValue() ==appConstantsModel.inter_subtherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic);
                       
                    }
                 saveAdviceData();
                  
                }
            }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.wizard_yes && (self.interruptProceduralbleedrisk() == appConstantsModel.not_clinically_important || self.interruptProceduralbleedrisk() == appConstantsModel.inter_low)){
                 self.interruptWhetherToIntrruptAdvice(appConstantsModel.WhetherInterrupt_Warfrain_advice_No_Uncertain);
              self.interruptVisibleInterruptBtn(true);
              self.interruptAdviceBoxColor(appConstantsModel.warning);
                self.interruptAdviceActiveTab(true);
                if(self.interruptINRValue() !=undefined && self.interruptINRValue() !=""){
                    self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
                }
                saveAdviceData();
                if(type !=undefined && interruptWantToInterrupt == true){
                    self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.warning);
                    activeInturrupt();
                    self.interruptWhenToInterruptAdviceSubboxVisible(false);
                    if(self.interruptINRValue() ==appConstantsModel.inter_supratherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic);
                        
                    }else if(self.interruptINRValue() ==appConstantsModel.goal_level){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Goal_level);
                  
                    }else if(self.interruptINRValue() ==appConstantsModel.inter_subtherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic);
                       
                    }
                    saveAdviceData();
                }
            }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.wizard_yes && (self.interruptProceduralbleedrisk() == appConstantsModel.intermediate || self.interruptProceduralbleedrisk() == appConstantsModel.inter_high || self.interruptProceduralbleedrisk() == appConstantsModel.uncertain)){
                self.interruptAdviceBoxColor(appConstantsModel.success);
self.interruptWhetherToIntrruptAdvice(appConstantsModel.whetherInterrupt_warfrain_advice_Interrupt_anticoagulant);
                 activeInturrupt();
                 saveAdviceData();
                 if(interruptAnsweredCrcl){
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                   if(self.interruptINRValue() ==appConstantsModel.inter_supratherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Supratherapeutic);
                        
                    }else if(self.interruptINRValue() ==appConstantsModel.goal_level){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Goal_level);
                  
                    }else if(self.interruptINRValue() ==appConstantsModel.inter_subtherapeutic){
                        self.interruptWhenToInterruptAdvice(appConstantsModel.WhentoInterrupt_Warfarin_advice_Subtherapeutic);
                       
                    }
                }
                saveAdviceData();
            }  
        }
		  
          //Inserted OK by Cybage
          var toBoolean = function(value) {
            if(value==null || value==undefined) {
                return false;
            }
            else if(value=="false") {
                return false;
            }
              else return true;
          }
          this.breadcrumbBridgePresentOnAdvice = ko.observable(toBoolean(sessionStorage.getItem('breadcrumbBridgePresentOnAdvice')));
          this.breadcrumbInterruptPresentOnAdvice = ko.observable(toBoolean(sessionStorage.getItem('breadcrumbInterruptPresentOnAdvice')));
          this.breadcrumbInterruptPresentOnBridge = ko.observable(toBoolean(sessionStorage.getItem('breadcrumbInterruptPresentOnBridge')));
          this.breadcrumbBridgePresentOnAdvice.subscribe(function(newValue) {
              sessionStorage.setItem("breadcrumbBridgePresentOnAdvice", newValue);
          });
          this.breadcrumbInterruptPresentOnAdvice.subscribe(function(newValue) {
              sessionStorage.setItem("breadcrumbInterruptPresentOnAdvice", newValue);
              self.breadcrumbInterruptPresentOnBridge(newValue);
          });
          this.breadcrumbInterruptPresentOnBridge.subscribe(function(newValue) {
              sessionStorage.setItem("breadcrumbInterruptPresentOnBridge", newValue);
              self.breadcrumbInterruptPresentOnAdvice(newValue);
          });
        
          
          //All code above is Inserted OK by Cybage
        
		  this.interruptGetAdvice = function(){
            self.crclVMCrclVMInterruptValue(false);
              sessionStorage.setItem("ADVICE_FROM_INTERRUPT", "true");
              sessionStorage.setItem("DESTINATION", "INTERRUPT");
              
              sessionStorage.setItem("CURRENT_PAGE","9"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","2"); //For browser back functionality//
            
              self.arrayOfPages.push([2,9]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());
              
              saveDataAndGoToadvice();
              
              self.breadcrumbBridgePresentOnAdvice(false);     //Inserted OK by Cybage
              self.breadcrumbInterruptPresentOnAdvice(true);   //Inserted OK by Cybage
		  }
		  
		  function saveAdviceData(){
			   var whetherAdviceMsg = "";
			   var whenToAdviceMsg = "";
			   if(self.interruptWhetherToIntrruptAdvice() != undefined){
				   whetherAdviceMsg = self.interruptWhetherToIntrruptAdvice();
			   }
			   if(self.interruptWhenToInterruptAdvice() != undefined){
				   whenToAdviceMsg = self.interruptWhenToInterruptAdvice();
			   }
			
				var sessionColumnData = [{ adviceId: "1", whetherAdvice: whetherAdviceMsg, whenAdvice:whenToAdviceMsg}];
				var dataToStore = JSON.stringify(sessionColumnData);
				sessionStorage.setItem("INTERRUPT_ADVICE", dataToStore);
				sessionStorage.setItem("ADVICE_FROM_INTERRUPT", "true");
		  }
		  
		  
		  /*
		  *
		  */
          function activeInturrupt(){
              self.interruptActiveInterrupt(true);
              self.interruptAdviceActiveTab(true);
          }
		  
        function setColor(){
            setTimeout(function(){
                self.interruptAdviceBoxColorForWhenToInerrupt("success");
            },100);
        }
        
		 /*
        * calcuateAlgorithm function
        * calcuateAlgorithm for calculating advice.
        */
          function calcuateAlgorithm(){
			  
              if(self.interruptPatienthasincreasedbleedrisk() ==  "Yes"){
				  activeInturrupt();
                  self.interruptWhetherToIntrruptAdvice(appConstantsModel.inter_interrupt_anticoagulant);

                  saveAdviceData();
                 if(self.interruptCrclInputValue() !=undefined && self.interruptCrclInputValue() != "" && self.interruptCrclInputValue() != "undefined" ){

                     self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_yes_procedural_NA_Doactype_either_crclVal_NA);
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                     saveAdviceData();
                     setColor();
                 } 
				self.interruptAdviceBoxColor(appConstantsModel.success);
              }
              else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no  && self.interruptProceduralbleedrisk() == appConstantsModel.inter_low){
                  activeInturrupt();
                  self.interruptWhetherToIntrruptAdvice(appConstantsModel.inter_interrupt_anticoagulant);
                  self.interruptAdviceBoxColor(appConstantsModel.success);
				  saveAdviceData();
                  if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) <15){
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Less15);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >14 && self.interruptCrclInputValue()<29.999){
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_15To29);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >29.999 && self.interruptCrclInputValue()<= 49.999){
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_30To49);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >49.999 && self.interruptCrclInputValue()<= 79.999){
                     self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_50To79);
					  saveAdviceData();
                      self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >=80 ){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Greater80);
					  saveAdviceData();
                      self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); 
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) <15){
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); 
		  self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Less5);
				   saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) >= 15 && parseInt(self.interruptCrclInputValue()) <= 29){
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); 
		  self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_15To29);
				   saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) >= 30){
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
		   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Geater30);
				   saveAdviceData();
              }
          //end first if    
          }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no && interruptProceduralBleedRiskHighUncertain == true ){
              activeInturrupt();
              self.interruptWhetherToIntrruptAdvice(appConstantsModel.inter_interrupt_anticoagulant);
			  saveAdviceData();
              self.interruptAdviceBoxColor(appConstantsModel.success);
              if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) <15){
                 self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success); self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Less15);
				  saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >14 && self.interruptCrclInputValue()<30){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_15To29);
					  saveAdviceData();
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                  
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >29.999 && self.interruptCrclInputValue()<= 49.999){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_30To49);
					  saveAdviceData();
                      self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >49.999 && self.interruptCrclInputValue()<= 79.999){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_50To79);
					  saveAdviceData();
                      self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >=80 ){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_DTI_crclVal_Greater80);
					  saveAdviceData();
                      self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) < 30){
                   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Less30);
				   saveAdviceData();
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) >= 30){
                   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Uncertain_Doactype_AntiXa_crclVal_Greater30);
				   saveAdviceData();
                  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.success);
              }
            // end second else if  
          }else if(self.interruptPatienthasincreasedbleedrisk() ==  appConstantsModel.inter_no && self.interruptProceduralbleedrisk() == appConstantsModel.not_clinically_important ){
              self.interruptVisibleInterruptBtn(true);
              self.interruptWhetherToIntrruptAdvice(appConstantsModel.weather_inter_advice);
              self.interruptWhenToInterruptAdvice(appConstantsModel.advice_not_applicable);
			  saveAdviceData();
			  self.interruptAdviceActiveTab(true);
              self.interruptAdviceBoxColor(appConstantsModel.error);
              if(interruptWantToInterrupt == true){
				  self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.error);
                if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) <15){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Less15);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >14 && self.interruptCrclInputValue()<29.999){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_15To29);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >29.999 && self.interruptCrclInputValue()<= 49.999){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_30To49);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >49.999 && self.interruptCrclInputValue()<= 79.999){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_50To79);
					  saveAdviceData();
                  }else if(self.interruptDOACtype() == appConstantsModel.doac_dti && parseInt(self.interruptCrclInputValue()) >=80 ){
                      self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_DTI_crclVal_Greater80);
					  saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) <15){
                   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Less5);
				   saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) >= 15 && parseInt(self.interruptCrclInputValue()) <= 29){
                   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_15To29);
				   saveAdviceData();
              }else if(self.interruptDOACtype() == appConstantsModel.doac_anti_xa && parseInt(self.interruptCrclInputValue()) >= 30){
                   self.interruptWhenToInterruptAdvice(appConstantsModel.patientBleed_No_procedural_Low_Doactype_AntiXa_crclVal_Geater30);
				   saveAdviceData();
              
            }
              }//end if wantto interruptAnyway
          }
            setAciveTab();
          }
              
          // function for set active tab
          function setAciveTab(){
                if((self.interruptCrclInputValue() ==undefined || self.interruptCrclInputValue() == "" || self.interruptCrclInputValue() == "undefined" ) && self.interruptVisibleInterruptBtn() == true){
                    self.interruptActiveInterrupt(false);
                     if(self.interruptCrclInputValue() !=null && self.interruptCrclInputValue() != ""){
                        self.interruptAdviceActiveTab(false);
                    }
                }else{
                    if(interruptWantToInterrupt ==  true){
                     self.interruptActiveInterrupt(true);
                    }
                }
          }
              
          //interruptAnyway : this function is used active interrupt anyway
          this.interruptAnyway = function(){
			    
                if(self.interruptTherapyValue() != appConstantsModel.warfarin){

                    if(interruptAnsweredCrcl){
                        self.interruptWhenToInterruptAdviceSubbox(appConstantsModel.not_advised_proceed_with_caution);
                        self.interruptWhenToInterruptAdviceSubboxVisible(true);
                        self.interruptActiveInterrupt(true);
                        self.interruptAdviceActiveTab(true);
                        interruptWantToInterrupt = true;
                        calcuateAlgorithm();
                    }else{
                        interruptWantToInterrupt = true;
                        self.interruptWhenToInterruptAdvice(appConstantsModel.interrupt_crcl_needed);
                    }
                } else{
                    if(interruptAnsweredCrcl){
                        self.interruptWhenToInterruptAdviceSubbox(appConstantsModel.not_advised_proceed_with_caution);
                        self.interruptWhenToInterruptAdviceSubboxVisible(true);
                        self.interruptActiveInterrupt(true);
                        self.interruptAdviceActiveTab(true);
                        interruptWantToInterrupt = true;
                        calcuateAlgorithmWarfarin("interrupt");
                    }else{
                        interruptWantToInterrupt = true;
                        self.interruptWhenToInterruptAdvice(appConstantsModel.select_inr);
                    }

                }
          }
          
          //clearData : this function is used to reset data of the page
          this.interruptClearData = function(){
                interruptWantToInterrupt = false;
                util.clearSessionTable("CRCL_SESSION_DATA");
                util.clearSessionTable("PROCEDURE_SESSION_DATA");
                self.interruptCrclInputValue("");
                self.interruptSelectedItem(undefined);
                self.interruptVisibleInterruptBtn(false);
                self.interruptAdviceBoxColorForWhenToInerrupt(appConstantsModel.secondary);
                self.interruptAdviceBoxColor(appConstantsModel.secondary);
                interruptAnsweredCrcl = false;
                self.interruptWhetherToIntrruptAdvice(appConstantsModel.restart_doac_default_advice);
                self.interruptWhenToInterruptAdvice(appConstantsModel.restart_doac_default_advice);
                self.interruptINRchecked(undefined);
                self.interruptAdviceActiveTab(false);
                self.interruptActiveInterrupt(false);
                self.interruptActiveClearBtn(false);
                self.crclVMresetPage();    
                self.interruptEnableCrclInput(true); 
                self.interruptCrclInputValue(undefined);
                self.interruptInputLockCrcl(false);
                self.resetProcedureWizard();
                self.crclVMCrclVMInterruptValue(false);
                self.interruptLockedCrclSection(false);
                sessionStorage.setItem("CRCL_INTERRUPT_VALUE", undefined);
                sessionStorage.setItem("ADVICE_FROM_INTERRUPT",null);
          }
          
          //activeWhenToInterrpt : this function is used to enable the when to interrupt block
		  this.activeWhenToInterrpt = function(){
              self.interruptshouldShowWhenMessage(false);
              self.enableResetButton(false);
          }

          //function to open forcefully interrupt view
          this.forcefullyInterruptModel = function(){
              self.interruptShouldShowErrorMessage(true);
          }

          //navigate to patient page 
          this.interruptGoToPatientPage = function(){
              self.crclVMCrclVMInterruptValue(false);
              sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
              
              var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
              if(destinationPage == "Interrupt") {
                  sessionStorage.setItem("LOCK_INTERRUPT_PAGE","NO");
                  sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
              } else {
                  sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
              }
              saveDataAndGo("patientPage");
              enableAdviceTab();
              getNotifications();
          }

          //navigate to bridge page
           this.interruptGoToBridgePage = function(){
               
               var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
               if(destinationPage == "restartWarfarin") {
                    sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
               } else if(destinationPage == "restartDoac") {
                    sessionStorage.setItem("FINAL_PAGE","restartDoac");
               } else {
                    sessionStorage.setItem("FINAL_PAGE","Bridge");
               }

              self.crclVMCrclVMInterruptValue(false);
              fetchSavedChadVascData();
              selectTherapyDataOnBridge();
              getBleedRiskYesNoData();
              getCrclValueFromWizard();

               
              sessionStorage.setItem("CURRENT_PAGE","3"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","2"); //For browser back functionality//
               
              self.arrayOfPages.push([2,3]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());
               
              saveDataAndGo("bridgePage");
              enableAdviceTab();
              
               self.breadcrumbInterruptPresentOnBridge(true); //Inserted OK by Cybage
          }

          //navigate to bridge page
          this.interruptGoToRestartPage = function(){
              self.crclVMCrclVMInterruptValue(false);
              sessionStorage.setItem("CURRENT_PAGE","4"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","2"); //For browser back functionality//
              self.arrayOfPages.push([2,4]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());
              
              saveDataAndGo("restartpage");
              enableAdviceTab();
          }

          //navigate to CRCL wizard
          this.interruptNavigateToProceduralWizard = function(){
              self.crclVMCrclVMInterruptValue(false);
              sessionStorage.setItem("CURRENT_PAGE","5"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","2"); //For browser back functionality//
            
              self.arrayOfPages.push([2,5]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());
              
			   if(self.interruptCrclInputValue() != undefined && self.interruptCrclInputValue != ""){
				   sessionStorage.setItem("crclValue",self.interruptCrclInputValue());
			   }
			   if(self.interruptINRchecked() != undefined && self.interruptINRchecked != ""){
				   sessionStorage.setItem("INRValue",self.interruptINRchecked());
			   }
               pager.navigate("#!/proceduralBleedRiskPage");
               pageArrays.push("proceduralBleedRiskPage");
               self.clearProceduralSearchedField();
               fetchSavedProceduralDataFromSessionTable();
          }

          //navigate to procedural wizard
          this.interruptNavigateToCRCLWizard = function(){
               self.crclVMCrclVMInterruptValue(false);
               crclVMfirstTimeLoadingFlag = true;
               
               sessionStorage.setItem("CURRENT_PAGE","6"); //For browser back functionality//
               sessionStorage.setItem("PREV_PAGE","2"); //For browser back functionality//
            
               self.arrayOfPages.push([2,6]);
               sessionStorage.setItem("arrayValue",self.arrayOfPages());
              pageArrays.push("crclPage");
               pager.navigate("#!/crclPage");
               fetchSavedDataFromCrClTable();
          }
		  
		  //ToStartNewPatient: this method to start a new patient
          this.ToStartNewPatient = function(){
              interruptWantToInterrupt = false;
                patientLockValue == "NO";
                sessionStorage.setItem("LOCK_PATIENT_PAGE","NO");
                sessionStorage.setItem("LOCK_INTERRUPT_PAGE","NO");
                sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
                self.crclVMCrclVMInterruptValue(false);
                self.resetBragePage();
                self.interruptClearData();
                self.clearRestartWarfarin();
                self.clearRestartDOAC();
                sessionStorage.setItem("DESTINATION", "PATIENT");
			    pager.navigate("#!/patientPage");
              
                self.patientMainSelectedDrug(null);
                self.patientMainYesNoChecked(null);
                disablePatientMainResetButton();
                self.patientMainTherapyTypeSelected(false);
                self.PatientMainYesNoSelected(false);
                self.lockedPatientSection(false);
                self.patientMainLockedLinkSection(false);
                self.patientMainUnlockedLinkSection(true);
                self.enableTherapyDropdown(true);
                self.patientMainDisableBtn(null);
              
                self.patientMainInactiveList(true);
                self.patientMainActiveList(false);
                self.patientMainBreadcrumbActive(false);

                if(self.patientViewHasReset() == true) {
                    self.patientMainInactiveList(true);
                    self.patientMainActiveList(false);
                    self.patientMainBreadcrumbActive(false);
                } else {
                    enablePatientMainNavigation();
                }

                util.clearSessionTable("THERAPY_SESSION_DATA");
                util.clearSessionTable("INTERRUPT_ADVICE");
                util.clearSessionTable("YES_NO_STORAGE");
                util.clearSessionTable("FINAL_PAGE");
                util.clearSessionTable("NEXT_PAGE");
                util.clearSessionTable("LOCK_PATIENT_PAGE");
               sessionStorage.setItem("WARNING_FROM_BRIDGE_DOAC", "");
                self.lockIconOnPatientForBridgeTab(false);
                self.lockIconOnPatientForInterruptTab(false);
                self.interruptBridgeLockIcon(false);
                getNotifications();
              self.patientMainBreadcrumbActive(false);
              pager.navigate("#!/patientPage");
              
              self.breadcrumbInterruptPresentOnAdvice(false);   //Inserted OK by Cybage
            self.breadcrumbInterruptPresentOnBridge(false);     //Inserted OK by Cybage
            self.breadcrumbBridgePresentOnAdvice(false);        //Inserted OK by Cybage
          }
           

        
        // checkActiveClrBtn function for checking clear btn
        function checkActiveClrBtn(){
            if(self.interruptTherapyValue() ==appConstantsModel.warfarin){
                if(self.interruptSelectedItem() ==undefined  && self.interruptINRchecked() ==undefined){
                    self.interruptActiveClearBtn(false);
                } else{
                    self.interruptActiveClearBtn(true);
                }
            } else{
                if(self.interruptSelectedItem() ==undefined  && (self.interruptCrclInputValue() ==undefined || self.interruptCrclInputValue() == "")){
                 self.interruptActiveClearBtn(false);
                } else{
                    self.interruptActiveClearBtn(true);
                }
                
            }
            

        }
        
        // funciton for inactive Clear Button
        function setClearBtnInactive(){
            setTimeout(function(){
                self.interruptActiveClearBtn(false);
            },500);
        }
        
        //saveDataAndGo function to save interrupt data 
        function saveDataAndGo (pageName, disable){ //Inserted by Cybage "disable"
            var whetherAdviceMsg = "";
            var whenToAdviceMsg = "";
            var whenToAdviceStatusVal = "";
            var whetherToadviceStatusVal = "";
            var InrVal = "";
            
            if(self.interruptWhetherToIntrruptAdvice() != undefined){
               whetherAdviceMsg = self.interruptWhetherToIntrruptAdvice();
            }
            
            if(self.interruptWhenToInterruptAdvice() != undefined){
               whenToAdviceMsg = self.interruptWhenToInterruptAdvice();
            }

            if(self.interruptAdviceBoxColor() == appConstantsModel.success){
                whetherToadviceStatusVal = appConstantsModel.positive;
            } else if (self.interruptAdviceBoxColor() == appConstantsModel.error){
                whetherToadviceStatusVal = appConstantsModel.nagative;
            }

            if(self.interruptAdviceBoxColorForWhenToInerrupt() == appConstantsModel.success){
                whenToAdviceStatusVal = appConstantsModel.positive;
            } else if (self.interruptAdviceBoxColor() == appConstantsModel.error){
                interruptAdviceBoxColorForWhenToInerrupt = appConstantsModel.nagative;
            }

            var interruptSelectedItemVal = "";
            if(self.interruptSelectedItem()!= undefined){
                interruptSelectedItemVal = self.interruptSelectedItem()[0];
            }
            if(self.interruptWhetherToIntrruptAdvice() != undefined && self.interruptWhetherToIntrruptAdvice() !=appConstantsModel.restart_doac_default_advice){
               sessionStorage.setItem("ADVICE_FROM_INTERRUPT","true");

            }
            var savedData = [{  
                proceduralDropDown :interruptSelectedItemVal,
                crclValue : self.interruptCrclInputValue(),
                whetherToadvice : whetherAdviceMsg,
                whenToadvie : whenToAdviceMsg,
                interruptAnsweredCrcl : interruptAnsweredCrcl,
                interruptVisibleInterruptBtn : self.interruptVisibleInterruptBtn(),
                interruptAdviceBoxColor : self.interruptAdviceBoxColor(),
                interruptAdviceBoxColorForWhenToInerrupt : self.interruptAdviceBoxColorForWhenToInerrupt(),
                whenToAdviceStatus : whenToAdviceStatusVal,
                whetherToadviceStatus : whetherToadviceStatusVal,
                interruptINRchecked  : self.interruptINRchecked(),
                interruptAdviceActiveTab : self.interruptAdviceActiveTab(),
                interruptActiveInterrupt : self.interruptActiveInterrupt(),
                interruptWhenToInterruptAdviceSubboxVisible : self.interruptWhenToInterruptAdviceSubboxVisible(),
                interruptShowProcedureName : self.interruptShowProcedureName()
                
            }];
            
            sessionStorage.setItem("INTERRUPT_DATA",JSON.stringify(savedData));
            
            if(pageName == "bridgePage"){
                sessionStorage.setItem("DESTINATION", "BRIDGE");
                fetchInterruptAdviceOnRestartDOAC();
                pager.navigate("#!/bridgePage");
                pageArrays.push("bridgePage");
                setBridgeScreenLocked();
            } else if(pageName == "patientPage") {
                sessionStorage.setItem("DESTINATION", "PATIENT");
                pager.navigate("#!/patientPage");
                 pageArrays.push("patientPage");
                setPatientScreenLocked();
                getNotifications();
            } else {
                
                var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                if(localData != null && localData != ""){
                    $.each(localData, function(key, value){
                        if ((value.selected_DOACtype[0]) === appConstantsModel.doac_anti_xa || (value.selected_DOACtype[0]) === appConstantsModel.doac_dti ) {
                            selectRestartStoredDataFromTableOnRestartDoac();
                            sessionStorage.setItem("CURRENT_PAGE","Interrupt"); //For browser back functionality//
                            sessionStorage.setItem("NEXT_PAGE","restartDoac"); //For browser back functionality//
                            sessionStorage.setItem("FINAL_PAGE","restartDoac");
                            sessionStorage.setItem("DESTINATION", "RESTART_DOAC");
                             fetchInterruptAdviceOnRestartDOAC();
                            if(disable == undefined)                                     //Inserted by Cybage to disable pager navigate
                                pager.navigate("#!/restartPage");
                             pageArrays.push("restartPage");
                        }else if((value.selected_DOACtype[0]) === appConstantsModel.VKA) {
                            selectRestartStoredDataFromTableOnWarfarin();
                            sessionStorage.setItem("CURRENT_PAGE","Interrupt"); //For browser back functionality//
                            sessionStorage.setItem("NEXT_PAGE","restartWarfarin"); //For browser back functionality//
                            sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
                            sessionStorage.setItem("DESTINATION", "RESTART_WARFARIN");
                             fetchInterruptAdviceOnRestartDOAC();
                            if(disable == undefined)                 //Inserted by Cybage to disable pager navigate for back button
                                pager.navigate("#!/restartPageWarfarin");
                            pageArrays.push("restartPageWarfarin");
                        }
                    });
                }
            }
            enableAdviceTab();
        }
        
        //Inserted OK by Cybage
        self.viewHeight = function() {
                var viewportheight;

                // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
                if (typeof window.innerHeight !== 'undefined') {
                    viewportheight = window.innerHeight;
                }

                    //	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
                else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
                    viewportheight = document.documentElement.clientHeight;
                }

                    //	 older versions of IE
                else {
                    viewportheight = document.getElementsByTagName('body')[0].clientHeight;
                }
                return viewportheight;
        }
     
        
        //Inserted by Cybage    Commenting below code solves AB-1862
        self.interruptShowProcedureName.subscribe(function(newValue) {
            /*var selectedProcedure = JSON.parse(sessionStorage.getItem("PROCEDURE_SELECTED"));
            if(selectedProcedure!=null && newValue==false) {
                self.interruptShowProcedureName(true);
            }
            else if(selectedProcedure==null) {
                self.interruptShowProcedureName(false);
            }*/
        });
        
        //setPreviousData set previous data 
        function setPreviousData(){
             setTimeout(function(){
                var data = sessionStorage.getItem("INTERRUPT_DATA");
                 console.log("CALLED");
                if(data){
                    var localData = JSON.parse(data);
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            self.interruptCrclInputValue(value.crclValue);
                            var selectedProcedure = JSON.parse(sessionStorage.getItem("PROCEDURE_SELECTED"));//Inserted by Cybage
                            self.interruptSelectedItem(value.proceduralDropDown);   //Inserted by Cybage to load Procedure type
                            
                            if(selectedProcedure) {
                                self.interruptSelectedProcedureName(selectedProcedure[0]['procedure_value_name']);
                            }
                            
                            self.interruptVisibleInterruptBtn(value.interruptVisibleInterruptBtn);
                            self.interruptAdviceBoxColorForWhenToInerrupt(value.interruptAdviceBoxColor);
                            self.interruptAdviceBoxColorForWhenToInerrupt(value.interruptAdviceBoxColorForWhenToInerrupt);
                            interruptAnsweredCrcl = value.interruptAnsweredCrcl;
                            self.interruptWhetherToIntrruptAdvice(value.whetherToadvice);
                            self.interruptWhenToInterruptAdvice(value.whenToadvie);
                            self.interruptINRchecked(value.interruptINRchecked);
                            self.interruptWhenToInterruptAdviceSubboxVisible(value.interruptWhenToInterruptAdviceSubboxVisible);
                            self.interruptShowProcedureName(value.interruptShowProcedureName);
                            if(value.interruptShowProcedureName != true && value.interruptShowProcedureName != "true"){
                            }
                            if(value.interruptAdviceActiveTab == "true" || value.interruptAdviceActiveTab == true){
                               setActiveTab(true,value.interruptActiveInterrupt);
                            } else {
                               setActiveTab(false,value.interruptActiveInterrupt);
                            }
                        });
                    }
                }
            },100);
        }
       
        // funciton setActiveTab active the tab bar
        function setActiveTab(val,interruptVal){
            setTimeout(function(){
                self.interruptAdviceActiveTab(val);
                self.interruptActiveInterrupt(interruptVal)
            },100);
        }
        

        function saveDataAndGoToadvice(){
            var whetherAdviceMsg = "";
            var whenToAdviceMsg = "";
            var whenToAdviceStatusVal = "";
            var whetherToadviceStatusVal = "";
            var InrVal = "";
            if(self.interruptWhetherToIntrruptAdvice() != undefined){
                whetherAdviceMsg = self.interruptWhetherToIntrruptAdvice();
            }
            if(self.interruptWhenToInterruptAdvice() != undefined){
                whenToAdviceMsg = self.interruptWhenToInterruptAdvice();
            }

            if(self.interruptAdviceBoxColor() == appConstantsModel.success){
                whetherToadviceStatusVal = appConstantsModel.positive;
            } else if (self.interruptAdviceBoxColor() == appConstantsModel.error){
                whetherToadviceStatusVal = appConstantsModel.nagative;
            }

            if(self.interruptAdviceBoxColorForWhenToInerrupt() == appConstantsModel.success){
                whenToAdviceStatusVal = appConstantsModel.positive;
            } else if (self.interruptAdviceBoxColor() == appConstantsModel.error){
                interruptAdviceBoxColorForWhenToInerrupt = appConstantsModel.nagative;
            }

            var interruptSelectedItemVal = "";
            if(self.interruptSelectedItem()!= undefined){
                interruptSelectedItemVal = self.interruptSelectedItem()[0];
            }


            var savedData = [{  
                proceduralDropDown :interruptSelectedItemVal,
                crclValue : self.interruptCrclInputValue(),
                whetherToadvice : whetherAdviceMsg,
                whenToadvie : whenToAdviceMsg,
                interruptAnsweredCrcl : interruptAnsweredCrcl,
                interruptVisibleInterruptBtn : self.interruptVisibleInterruptBtn(),
                interruptAdviceBoxColor : self.interruptAdviceBoxColor(),
                interruptAdviceBoxColorForWhenToInerrupt : self.interruptAdviceBoxColorForWhenToInerrupt(),
                whenToAdviceStatus : whenToAdviceStatusVal,
                whetherToadviceStatus : whetherToadviceStatusVal,
                interruptINRchecked  : self.interruptINRchecked(),
                interruptAdviceActiveTab : self.interruptAdviceActiveTab(),
                interruptActiveInterrupt : self.interruptActiveInterrupt(),
                interruptShowProcedureName : self.interruptShowProcedureName()
            }];
            
            sessionStorage.setItem("INTERRUPT_DATA",JSON.stringify(savedData));
            pager.navigate("#!/adviceViewPage");
            pageArrays.push("adviceViewPage");
            getAdvices();
        }
        //----------------------end interrupt---------------------------------------------------
          
          /**
         * this function is used to navigate to interrupt screen from crcl or procedural wizard
         */
        this.backToInterruptFromWizard = function(){
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
        }
        
        /**
         * selectProceduresFromTable function
         * selectProceduresFromTable is used to select all procedures from table.
         */
        function selectProceduresFromTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("PROCEDURAL_BLEED_RISK"));
                    var len = localData.length, i;
                     localData.sort(function(x, y) {
                        return ((x.procedure_name.toLowerCase() == y.procedure_name.toLowerCase()) ? 0 : ((x.procedure_name.toLowerCase() > y.procedure_name.toLowerCase()) ? 1 : -1 ));
                     })
                    for (i = 0; i < len; i++){
                        self.proceduralVMprocedureBleedRisks.push(new getProcedural([localData[i].procedure_id],                       [localData[i].procedure_name],[localData[i].bleed_risks],[localData[i].comments]));
                        proceduralVMprocedureArrayToShow.push(localData[i].procedure_name);
                    }
                },10);
            } catch(ex){
                console.log("appViewModel() : Error in selection of list of procedures : " + ex.message);
            }
        }
        
        /**
         * fetchSavedProceduralDataFromSessionTable function
         * fetchSavedProceduralDataFromSessionTable is used to fetch saved procedural data from session table.
         */
        function fetchSavedProceduralDataFromSessionTable(){
            try {
                    var data = sessionStorage.getItem("PROCEDURE_SESSION_DATA");
                    if(data != null && data != 'null'){
                        var localData = JSON.parse(data);

                        if(localData != null && localData != ""){
                            $.each(localData, function(key, results){
                                proceduralVMprocedureNameValue = results.procedure_value_name;
                                proceduralVMprocedureRiskValue = results.procedure_value_risk;
                                proceduralVMprocedureCommentValue = results.procedure_value_coment;
                                proceduralVMwizardTypeIs = results.procedure_wizard_type;

                                proceduralVMpreviouslySelectedItemsUsingSearch = ([results.selected_item_search]);

                                updateProceduralWizardView();
                            });
                        }
                    } else {
                        self.resetProcedureWizard1();
                    }
            } catch(ex){
                console.log("appViewModel() : Error in selection of saved value : " + ex.message);
            }
        }
        
        /**
         * updateProceduralWizardView function
         * updateProceduralWizardView is used to update procedural wizard view
         */
        function updateProceduralWizardView() {
            if(proceduralVMwizardTypeIs == 1) {
                
                var localData = JSON.parse(sessionStorage.getItem("PROCEDURAL_BLEED_RISK"));
                var len = localData.length;
 localData.sort(function(x, y) {
                        return ((x.procedure_name.toLowerCase() == y.procedure_name.toLowerCase()) ? 0 : ((x.procedure_name.toLowerCase() > y.procedure_name.toLowerCase()) ? 1 : -1 ));
                     })
                if(proceduralVMpreviouslySelectedItemsUsingSearch[0] != "") {
                    var idValue = proceduralVMpreviouslySelectedItemsUsingSearch[0].split("-");
                    var searchedItemId = idValue[idValue.length - 1];
                    self.proceduralVMprocedureEvent(""+["yes-no-radio-" +searchedItemId]);
                }

                if(proceduralVMprocedureNameValue != "") {
                    self.proceduralVMprocedureName(proceduralVMprocedureNameValue);
                    self.proceduralVMprocedureRisk(proceduralVMprocedureRiskValue);
                    self.proceduralVMprocedureComment(proceduralVMprocedureCommentValue);
                } else {
                    self.proceduralVMprocedureName("");
                    self.proceduralVMprocedureRisk("");
                    self.proceduralVMprocedureComment("");
                }

                if(proceduralVMpreviouslySelectedItemsUsingSearch[0] != "" || proceduralVMpreviouslySelectedItemsFirst[0] != "" || proceduralVMpreviouslySelectedItemsSecond[0] != "") {
                    self.proceduralVMactiveReset(true);
                    self.proceduralVMinactiveReset(false);
                    self.proceduralVMactiveDone(true);
                    self.proceduralVMinactiveDone(false);
                    self.proceduralVMcolorChange(false);    //Inserted by Cybage to change the green color of callout
                } else {
                    self.proceduralVMactiveReset(false);
                    self.proceduralVMinactiveReset(true);
                    self.proceduralVMactiveDone(false);
                    self.proceduralVMinactiveDone(true);
                }
            } else { 
                self.proceduralVMprocedureEvent([]);
                self.proceduralVMprocedureName("");
                self.proceduralVMprocedureRisk("");
                self.proceduralVMprocedureComment("");
                self.proceduralVMactiveReset(false);
                self.proceduralVMinactiveReset(true);
                self.proceduralVMactiveDone(false);
                self.proceduralVMinactiveDone(true);
                self.proceduralVMcolorChange(true);
                
            }
        }
        
        /** getProcedural()
         *  getProcedural():this function is used to get passed value from the procedures array
         */
        function getProcedural(id, name, type, comment) {
            var self = this;
            self.procedureId = ko.observable(id);
            self.procedureRiskName = ko.observable(name);
            self.riskType = ko.observable(type);
            self.comment = ko.observable(comment);
            self.procedureSelected = ko.observable(false);
        }
        
        /** proceduralRiskEventToggleAssociation()
         *  proceduralRiskEventToggleAssociation():this function is used to select procedures from the list
         */
        this.proceduralRiskEventToggleAssociation = function (item) {
            if (item.procedureSelected() === true){
                proceduralVMprocedureId = item.procedureId();
                fetchSelectedRisksFromTable();
                self.proceduralVMcolorChange(false);
                self.proceduralVMactiveReset(true);
                self.proceduralVMinactiveReset(false);
                self.proceduralVMinactiveDone(false);
                self.proceduralVMactiveDone(true);
            } else {
                self.proceduralVMcolorChange(false);
                self.proceduralVMactiveReset(true);
                self.proceduralVMinactiveReset(false);
                self.proceduralVMinactiveDone(false);
                self.proceduralVMactiveDone(true);
                proceduralVMprocedureId = item.procedureId();
                fetchSelectedRisksFromTable();
            }
            item.procedureSelected(!(item.procedureSelected()));
            return true;
        };
        
        /** resetProcedureWizard()
         *  resetProcedureWizard(): this function is used to reset all procedural wizard data
         */
        this.resetProcedureWizard = function() {
            interruptWantToInterrupt = false;
            self.proceduralVMprocedureEvent([]);
            self.proceduralVMsearchValue("");
            self.proceduralVMprocedureName("");
            self.proceduralVMprocedureRisk("");
            self.proceduralVMprocedureComment("");
            self.proceduralVMactiveReset(false);
            self.proceduralVMinactiveReset(true);
            self.proceduralVMinactiveDone(true);
            self.proceduralVMactiveDone(false);
            self.proceduralVMcolorChange(true);
            self.proceduralVMshowIcon(false);
            self.proceduralVMprocedureBleedRisks(proceduralVMprocedureBleedRisksArray);
            util.clearSessionTable("PROCEDURE_SESSION_DATA");
            sessionStorage.removeItem("PROCEDURE_SELECTED");    //Inserted by Cybage
            self.interruptSelectedItem(undefined);
            self.interruptActiveWhetherToInterrpt();
            
        }
         this.resetProcedureWizard1 = function() {
             interruptWantToInterrupt = false;
            self.proceduralVMprocedureEvent([]);
            self.proceduralVMsearchValue("");
            self.proceduralVMprocedureName("");
            self.proceduralVMprocedureRisk("");
            self.proceduralVMprocedureComment("");
            self.proceduralVMactiveReset(false);
            self.proceduralVMinactiveReset(true);
            self.proceduralVMinactiveDone(true);
            self.proceduralVMactiveDone(false);
            self.proceduralVMcolorChange(true);
            self.proceduralVMshowIcon(false);
            self.proceduralVMprocedureBleedRisks(proceduralVMprocedureBleedRisksArray);
            util.clearSessionTable("PROCEDURE_SESSION_DATA");
            sessionStorage.removeItem("PROCEDURE_SELECTED");    //Inserted by Cybage
            //self.interruptSelectedItem(undefined);
            self.interruptActiveWhetherToInterrpt();
             self.clearProceduralSearchedField();
            
        }
        function resetProcedureWizardOnChange(){
            if(getMobileOperatingSystem() == "iOS"){
                sessionStorage.setItem("PROCEDURE_SESSION_DATA",null);
            }else{
                util.clearSessionTable("PROCEDURE_SESSION_DATA");
            }
            self.proceduralVMsearchValue("");
            self.proceduralVMshowIcon(false);
            self.proceduralVMshowNotFoundError(false);
//            setPaginationActive();
//            self.showNextPageBtn(true);
//            showSelectedSearchedItemOnUI();
        }
        
        /** clearProceduralSearchedField()
         *  clearProceduralSearchedField():this function is used to clear searched data and selected result
         */
        this.clearProceduralSearchedField = function() {
            self.proceduralVMsearchValue("");
            self.proceduralVMshowIcon(false);
            self.proceduralVMshowNotFoundError(false);
            showSelectedSearchedItemOnUI();
        }
        
        /**
         * this function is used to search a procedure in the list of procedures
         */
        this.searchProcedureOnWizard = function() {
            self.proceduralVMshowIcon(true);
            proceduralVMfoundProceduresListArray = [];
            var proceduralVMfoundselectedValue = self.proceduralVMsearchValue();

            if(proceduralVMfoundselectedValue === "") {
                self.clearProceduralSearchedField();
            } else {
                proceduralVMfoundProceduresListArray = [];
                var len = proceduralVMprocedureArrayToShow.length;
                var k = 0, i = 0;
                for(i = 0; i < len; i++){
                if((proceduralVMprocedureArrayToShow[i].toLowerCase()).includes(proceduralVMfoundselectedValue.toLowerCase())) {
                        proceduralVMfoundProceduresListArray.push(proceduralVMprocedureBleedRisksArray[i]);
                    }
                }
                
                if(proceduralVMfoundProceduresListArray.length === 0){
                    self.proceduralVMshowNotFoundError(true);
                } else if(proceduralVMfoundProceduresListArray.length > 0){
                    self.proceduralVMshowNotFoundError(false);
                }
                
                self.proceduralVMprocedureBleedRisks(proceduralVMfoundProceduresListArray);
               
            }
            return true;
        }
        
        
        this.showFloatingButton = ko.observable(true);
        // settng prototype for includes for IE
        if (!String.prototype.includes) {
            String.prototype.includes = function() {
                'use strict';
                return String.prototype.indexOf.apply(this, arguments) !== -1;
            };
        }
       /**Function to hide floating icons in IOS**/
       this.hideFloatingButtons = function(){
            if(getMobileOperatingSystem() == 'iOS'){
                self.showFloatingButton(false);
            }
       }
       /**Function to show floating icons in IOS**/
       this.showFloatingButtons = function(){
            if(getMobileOperatingSystem() == 'iOS'){
                self.showFloatingButton(true);
            }
       }
        
        /**
         * this function is used to navigate to interrupt screen from wizard screen on click of Done button
         */ 
        this.navigateToInterruptFromWizardDone = function(){
            self.proceduralVMsearchValue("");
            self.proceduralVMshowIcon(false);
            self.proceduralVMshowNotFoundError(false);
            saveProcedureValueInTable();
        }
        
        /**
         * saveProcedureValueInTable function
         * saveProcedureValueInTable is used to save procedure data in session table.
         */
        function saveProcedureValueInTable(){
            insertProcedureDataIntoSessionTable();
        }
        
        /**
         * insertProcedureDataIntoSessionTable function
         * insertProcedureDataIntoSessionTable is used to insert data into procedure session table.
         */
        function insertProcedureDataIntoSessionTable(){
            try {
                if(!insertProceduralBleedFlag){
                    
                    var sessionColumnData = [{ procedure_value_id: "1", procedure_value_name: self.proceduralVMprocedureName(), procedure_value_risk: self.proceduralVMprocedureRisk(), procedure_value_coment: self.proceduralVMprocedureComment(), selected_item_search: self.proceduralVMprocedureEvent(), procedure_wizard_type: "1" }];
                    
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("PROCEDURE_SESSION_DATA", dataToStore);
                    sessionStorage.setItem("PROCEDURE_SELECTED", dataToStore);  //Inserted by Cybage
                    insertProceduralBleedFlag = true;
                    sessionStorage.setItem("INSERT_PROCEDURAL_BLEED_RISK", "true");
                    sessionStorage.setItem("goFromwizard","yes");
                    sessionStorage.setItem("goFromCrclwizard","yes");
                    sessionStorage.setItem("DESTINATION", "INTERRUPT");
                    sessionStorage.setItem("goFromProcedureWizard","yes");
                    sessionStorage.setItem("doneProcedural","yes");
                    
                    self.interruptSelectedProcedureName(self.proceduralVMprocedureName());
                    pager.navigate("#!/interruptPage");
                     pageArrays.push("interruptPage");
                    self.interruptSelectedItem(self.proceduralVMprocedureRisk());
                    setValue();
                } else {
                    updateProcedureDataIntoSessionTable();
                }
            } catch(ex){
                console.log("appViewModel() : Error in insertion of procedure in session table: " + ex.message);
            }
        }
        function setValue(){
            window.setTimeout(function(){self.interruptShowProcedureName(true);},200)
        }
        /**
         * updateProcedureDataIntoSessionTable function
         * updateProcedureDataIntoSessionTable is used to update data into procedure session table.
         */
        function updateProcedureDataIntoSessionTable(){
            try {
                var sessionColumnData = [{ procedure_value_id: "1", procedure_value_name: self.proceduralVMprocedureName(), procedure_value_risk: self.proceduralVMprocedureRisk(), procedure_value_coment: self.proceduralVMprocedureComment(), selected_item_search: self.proceduralVMprocedureEvent(), procedure_wizard_type: "1" }];
                
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("PROCEDURE_SESSION_DATA", dataToStore);
                sessionStorage.setItem("PROCEDURE_SELECTED", dataToStore);  //Inserted by Cybage
                sessionStorage.setItem("goFromwizard","yes");
                sessionStorage.setItem("goFromCrclwizard","yes");
                sessionStorage.setItem("goFromProcedureWizard","yes");
                sessionStorage.setItem("DESTINATION", "INTERRUPT");
                sessionStorage.setItem("doneProcedural","yes");
                
                 self.interruptSelectedProcedureName(self.proceduralVMprocedureName());
                pager.navigate("#!/interruptPage");
                pageArrays.push("interruptPage");
                self.interruptSelectedItem(self.proceduralVMprocedureRisk());
                setValue();
            } catch(ex){
                console.log("appViewModel() : Error in updation of session value : " + ex.message);
            }
        }
        
        /**
         * fetchSelectedRisksFromTable function
         * fetchSelectedRisksFromTable is used to fetch list of selected risks from table.
         */
        function fetchSelectedRisksFromTable(){
           fetchSelectedRiskFromTable();
        }
        
        /**
         * fetchSelectedRiskFromTable function
         * fetchSelectedRiskFromTable is used to fetch single risk from chad vasc table.
         */
        function fetchSelectedRiskFromTable(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("PROCEDURAL_BLEED_RISK"));
                self.proceduralVMprocedureName(localData[proceduralVMprocedureId].procedure_name);
                self.proceduralVMprocedureRisk(localData[proceduralVMprocedureId].bleed_risks);
                self.proceduralVMprocedureComment(localData[proceduralVMprocedureId].comments);
            } catch(ex){
                console.log("appViewModel() : Error in fetching of risk : " + ex.message);
            }
        }
        
        /**
         * showSelectedSearchedItemOnUI function
         * showSelectedSearchedItemOnUI is used to display searched item in the list
         */
        function showSelectedSearchedItemOnUI() {
            var localData = JSON.parse(sessionStorage.getItem("PROCEDURAL_BLEED_RISK"));
            self.proceduralVMprocedureBleedRisks(proceduralVMprocedureBleedRisksArray);
        }
        
        
        
        /* crcl screen functionality */
         
        
        /*
         * this function is for selecting male or female option
         */
        this.selectYesNo = function(){
            self.crclVMactiveReset(true);
            self.crclVMinactiveReset(false);
            toActiveDoneButton();
            if(self.crclVMcheckedOnLoad()=="male")
                self.crclVMgender(1);
            else
                self.crclVMgender(0.85);
            self.computeDone();
            return true;
        }
        
        /**
         * this function is for closing all warning message
         */
        function toCloseALLWarningMessage(){
            self.crclVMshouldShowSrErrorMessage(false);
            self.crclVMshouldShowAgeErrorMessage(false);
            self.crclVMshouldShowWtErrorMessage(false);
            self.crclVMshouldShow_Above140_AgeErrorMessage(false);
            self.crclVMshouldShow_below18_AgeErrorMessage(false);
        }
        
         /**
         * this function is to activate DONE button
         */
        function toActiveDoneButton(){
            if(self.crclVMageInYears() != undefined && self.crclVMweightInLbs() != undefined && self.crclVMserumCr() != undefined && self.crclVMageInYears() != "" && self.crclVMweightInLbs() != "" && self.crclVMserumCr() != "" && (self.crclVMcheckedOnLoad() != null)){
                self.crclVMinactiveDone(false);
                self.crclVMactiveDone(true);
            }else{
                self.crclVMinactiveDone(true);
                self.crclVMactiveDone(false);
            }
        }
        
         /**
         * this function is to validate age field
         */
        this.ageValidation = function() {
            if(self.crclVMageInYears() != ""){
                var crclInterruptValue = getRoundedValue(self.crclVMageInYears());
            }
                if(self.crclVMageInYears() >= 18){
                     if(self.crclVMageInYears() > 140){
                         if(self.crclVMageInYears() < 140.5){
                              self.crclVMageInYears(undefined);
                             self.crclVMshouldShowAgeErrorMessage(false);
                             crclVMcrclVal= -1;
                             activeResetButtonCRCL();
                         } else {
                             self.crclVMageInYears(crclInterruptValue);
                             if( isNaN(self.crclVMageInYears()) ){
                                    crclVMcrclVal= -1;
                                    self.crclVMshouldShowAgeErrorMessage(true);
                                    self.crclVMshouldShow_below18_AgeErrorMessage(true);
                                    self.crclVMageInYears("");
                                    self.crclVMdontShowValue(true);
                                    self.crclVMshowValue(false);
                                    activeResetButtonCRCL();
                             }else{
                                    crclVMcrclVal= -1;
                                    self.crclVMshouldShowAgeErrorMessage(true);
                                    self.crclVMshouldShow_below18_AgeErrorMessage(false);
                                    self.crclVMshouldShow_Above140_AgeErrorMessage(true);
                                    self.crclVMdontShowValue(true);
                                    self.crclVMshowValue(false);
                                    self.crclVMageInYears("");
                                    activeResetButtonCRCL();
                             }
                         }
                    }else{
                         self.crclVMageInYears(crclInterruptValue);
                         self.crclVMshouldShowAgeErrorMessage(false);
                         self.crclVMshouldShow_below18_AgeErrorMessage(true);
                         self.crclVMshouldShow_Above140_AgeErrorMessage(false);
                         self.crclVMdontShowValue(true);
                         self.crclVMshowValue(false);
                         activeResetButtonCRCL();
                    }
                }else{
                    if(self.crclVMageInYears() >= 17.5){
                        self.crclVMageInYears(undefined);
                        self.crclVMshouldShowAgeErrorMessage(false);
                    }else{
                        self.crclVMshouldShow_below18_AgeErrorMessage(true);
                        self.crclVMshouldShow_Above140_AgeErrorMessage(false);
                        self.crclVMshouldShowAgeErrorMessage(true);
                        self.crclVMageInYears("");
                        self.crclVMdontShowValue(true);
                        self.crclVMshowValue(false);
                    }
                    crclVMcrclVal= -1;
                    activeResetButtonCRCL();
                 }
            self.computeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after age validation
         */
        this.activeDoneForAge = function() {
            self.crclVMactiveReset(true);
            self.crclVMinactiveReset(false);
            if(self.crclVMageInYears() == "" && self.crclVMserumCr() == "" && self.crclVMweightInLbs() == "" && self.crclVMcheckedOnLoad() == null){
                 self.crclVMactiveReset(false);
                 self.crclVMinactiveReset(true);
            }
            
            toActiveDoneButton();
        }
        
        /**
         * this function is to validate weight field
         */
        this.weightValidation = function() {
            
                if (crclVMvalidateSuccess){
                    if(self.crclVMweightInLbs()<4.5 || self.crclVMweightInLbs()>453 || isNaN(self.crclVMweightInLbs())) {
                            crclVMcrclVal= -1;
                            self.crclVMshouldShowWtErrorMessage(true);
                            self.crclVMshowSiMsg(true);
                            self.crclVMshowUsMsg(false);
                            self.crclVMweightInLbs("");
                            self.crclVMdontShowValue(true);
                            self.crclVMshowValue(false);
                        activeResetButtonCRCL();
                    }else{
                        self.crclVMshouldShowWtErrorMessage(false);
                         
                    }
        
                }else{
                    if(self.crclVMweightInLbs()<10 || self.crclVMweightInLbs()>999 || isNaN(self.crclVMweightInLbs())){
                        crclVMcrclVal= -1;
                        self.crclVMshouldShowWtErrorMessage(true);
                        self.crclVMshowSiMsg(false);
                        self.crclVMshowUsMsg(true);
                        self.crclVMweightInLbs("");
                        self.crclVMdontShowValue(true);
                        self.crclVMshowValue(false);
                         activeResetButtonCRCL();
                    }else{
                        self.crclVMshouldShowWtErrorMessage(false);
                         activeResetButtonCRCL();
                    }
                }
          self.computeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after weight validation
         */
        this.activeDoneForWeight = function() {
            self.crclVMactiveReset(true);
            self.crclVMinactiveReset(false);
            if(self.crclVMageInYears() == "" && self.crclVMserumCr() == "" && self.crclVMweightInLbs() == "" && self.crclVMcheckedOnLoad() == null){
                 self.crclVMactiveReset(false);
                 self.crclVMinactiveReset(true);
            }
           
            toActiveDoneButton();
        }
         
        /**
         * this function is to validate Serum field
         */
        this.scrValidation = function() {
            if (crclVMvalidateSuccess){
                if(self.crclVMserumCr()<8.8 || self.crclVMserumCr()>9989.2 || isNaN(self.crclVMserumCr())){
                    crclVMcrclVal= -1;
                    self.crclVMshouldShowSrErrorMessage(true);
                    self.crclVMserumCr("");
                    self.crclVMdontShowValue(true);
                    self.crclVMshowValue(false);
                    activeResetButtonCRCL();
                }else{
                    self.crclVMshouldShowSrErrorMessage(false);
                     
                }
            }else{
                if( self.crclVMserumCr()<0.1 || self.crclVMserumCr()>113 || isNaN(self.crclVMserumCr())){
                    crclVMcrclVal= -1;
                    self.crclVMshouldShowSrErrorMessage(true);
                    self.crclVMserumCr("");
                    self.crclVMdontShowValue(true);
                    self.crclVMshowValue(false);
                    activeResetButtonCRCL();
                }else{
                     self.crclVMshouldShowSrErrorMessage(false);
                    
                } 
            }
             self.computeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after serum validation
         */
        this.activeDoneForScr = function() {
            self.crclVMactiveReset(true);
            self.crclVMinactiveReset(false);
            if(self.crclVMageInYears() == "" && self.crclVMserumCr() == "" && self.crclVMweightInLbs() == "" && self.crclVMcheckedOnLoad() == null){
                 self.crclVMactiveReset(false);
                 self.crclVMinactiveReset(true);
            }
            toActiveDoneButton();
        }

        function activeResetButtonCRCL(){
             if((self.crclVMweightInLbs() == "" || self.crclVMweightInLbs() == undefined) && (self.crclVMserumCr() == "" || self.crclVMserumCr() == undefined) && (self.crclVMageInYears() == "" || self.crclVMageInYears() == undefined) && (self.crclVMgender() == "0" || self.crclVMgender() == undefined)){
                self.crclVMactiveReset(false);
                self.crclVMinactiveReset(true);
            }
         }
        
        /**
         * this function is used to reset page 
         */
        this.crclVMresetPage = function(){
            self.crclVMageInYears("");
            self.crclVMweightInLbs("");
            self.crclVMserumCr("");
            self.crclVMgender(0);
            self.crclVMactiveReset(false);
            self.crclVMinactiveReset(true);
            self.crclVMinactiveDone(true);
            self.crclVMactiveDone(false);
            self.crclVMresetGender();
            self.crclVMcheckedOnLoad(null);
            self.crclVMCrClValue("");
            self.crclVMshowValue(true);
            self.crclVMdontShowValue(false);
            self.crclVMdontShowValue(true);
            self.crclVMshowValue(false);
            self.crclVMshouldShowSrErrorMessage(false);
            self.crclVMshouldShowAgeErrorMessage(false);
            self.crclVMshouldShowWtErrorMessage(false);
            self.crclVMshouldShow_Above140_AgeErrorMessage(false);
            self.crclVMshouldShow_below18_AgeErrorMessage(false);
            self.interruptEnableCrclInput(true); 
            self.interruptCrclInputValue(undefined);
            self.interruptInputLockCrcl(false);
            util.clearSessionTable("CRCL_SESSION_DATA");
            self.crclVMCrClUnits(false);
        }
        
        /**
         * this function is used for clicking crclunit switch button
         * on selecting crclunit, weight and scr value is changed
         */
        self.crclVMCrClUnits.subscribe(function (newValue) {
           
            if((self.crclVMweightInLbs() == "" || self.crclVMweightInLbs() == undefined) && (self.crclVMserumCr() == "" || self.crclVMserumCr() == undefined) && (self.crclVMageInYears() == "" || self.crclVMageInYears() == undefined) && (self.crclVMgender() == "0" || self.crclVMgender() == undefined)){
                self.crclVMactiveReset(false);
                self.crclVMinactiveReset(true);
                self.crclVMshouldShowAgeErrorMessage(false);
                self.crclVMshouldShowWtErrorMessage(false);
                self.crclVMshouldShowSrErrorMessage(false);
            }
            
            
            
            if(crclVMfirstTimeLoadingFlag != true){
                if(self.crclVMCrClUnits()){
                    crclVMvalidateSuccess = true;
                    toCloseALLWarningMessage();
                    self.crclVMweightScrVisibiltyUS(false);
                    self.crclVMweightScrVisibiltySI(true);
                    if(self.crclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.crclVMweightInLbs()) * 0.453592).toFixed(2))){
                                self.crclVMweightInLbs( parseFloat(parseFloat(self.crclVMweightInLbs()) * 0.453592).toFixed(2));
                            }
                    }
                    if(self.crclVMserumCr() !== undefined){
                             if(!isNaN(parseFloat(parseFloat(self.crclVMserumCr()) * 88.4).toFixed(2))){
                                self.crclVMserumCr( parseFloat(parseFloat(self.crclVMserumCr()) * 88.4).toFixed(2));
                             }
                    }
                }else{
                    crclVMvalidateSuccess = false;
                     toCloseALLWarningMessage();
                    self.crclVMweightScrVisibiltyUS(true);
                    self.crclVMweightScrVisibiltySI(false);
                    if(self.crclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.crclVMweightInLbs()) / 0.453592).toFixed(2))){
                                self.crclVMweightInLbs( parseFloat(parseFloat(self.crclVMweightInLbs()) / 0.453592).toFixed(2));
                            }
                    }
                    if(self.crclVMserumCr() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.crclVMserumCr()) / 88.4).toFixed(2))){
                                self.crclVMserumCr( parseFloat(parseFloat(self.crclVMserumCr()) / 88.4).toFixed(2));
                            }
                    }
                }
            }else{
                if(self.crclVMCrClUnits()){
                    crclVMvalidateSuccess = true;
                    self.crclVMweightScrVisibiltyUS(false);
                    self.crclVMweightScrVisibiltySI(true);
                    
                    if(weight == undefined){
                        if(!isNaN(parseFloat(parseFloat(self.crclVMweightInLbs()) * 0.453592).toFixed(2))){
                                self.crclVMweightInLbs( parseFloat(parseFloat(self.crclVMweightInLbs()) * 0.453592).toFixed(2));
                                }
                    }
                     if(serum == undefined){
                             if(!isNaN(parseFloat(parseFloat(self.crclVMserumCr()) * 88.4).toFixed(2))){
                                self.crclVMserumCr( parseFloat(parseFloat(self.crclVMserumCr()) * 88.4).toFixed(2));
                             }
                        }       
                }else{
                    crclVMvalidateSuccess = false;
                    self.crclVMweightScrVisibiltyUS(true);
                    self.crclVMweightScrVisibiltySI(false);
                }
             
            }
            crclVMfirstTimeLoadingFlag = false;
        });

        /**
         * this function is used to calculate CrCl
         */

        this.computeDone = ko.pureComputed(function() {
             toActiveDoneButton();
            if(self.crclVMageInYears() != ""){
               	if(!isNaN(self.crclVMageInYears())){
					self.crclVMageInYears(getRoundedValue(self.crclVMageInYears()));
				}
            }
                    if (self.crclVMgender()) {
                        crclVMgenderModifier = parseFloat(self.crclVMgender());
                    }
            
                    if (self.crclVMageInYears() !== undefined && self.crclVMweightInLbs() !== undefined && self.crclVMserumCr() !== undefined && self.crclVMgender() !== undefined && self.crclVMgender() > 0 && self.crclVMageInYears() !== '' && self.crclVMserumCr() !== '' && self.crclVMweightInLbs() !== '') {
                            if (crclVMvalidateSuccess) {
                                 crclVMcrclVal= Math.round((((140 - parseFloat(self.crclVMageInYears())) * (parseFloat(self.crclVMweightInLbs())) * crclVMgenderModifier) / (72 * (parseFloat(parseFloat(self.crclVMserumCr()) / 88.4)))) * 100) / 100;
                                
                            }else {
                                crclVMcrclVal= Math.round(((140 - parseFloat(self.crclVMageInYears())) * (parseFloat(self.crclVMweightInLbs()) * 0.453592) * crclVMgenderModifier) / (72 * parseFloat(self.crclVMserumCr())) * 100) / 100;
                            }
                        if (crclVMcrclVal>= 0) {
                            self.crclVMdontShowValue(false);
                            self.crclVMshowValue(true);
                            self.crclVMCrClValue(crclVMcrclVal.toFixed(1));
                        } else{
                            self.crclVMdontShowValue(true);
                            self.crclVMshowValue(false);
                        }
                    }
            }, this);

        /**
         * this function is used to navigate to interrupt page
         */
        this.saveDone = function(){
            saveCrclValueInTable();
            self.interruptLockedCrclSection(true);
            if((self.interruptCrclInputValue() == "" || self.interruptCrclInputValue() == undefined) && self.interruptVisibleInterruptBtn() == true){
                 self.interruptActiveInterrupt(false);
             }else{
                 self.interruptActiveInterrupt(true);
             }
        }
        
        /**
         * this function is used to navigate to interrupt page
         */
        this.crclVMcancel = function(){
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
        }

        /**
         * this function is used to take of US and SI value
         */
        this.checkedCRCLEvent = function(){
            return true;
        }

        /*
        * saveCrclValueInTable function
        * saveCrclValueInTable is used to save crcl value in session table.
        */
        function saveCrclValueInTable(){
            insertCrclDataIntoSessionTable();  
        }

        /*
        * insertCrclDataIntoSessionTable function
        * insertCrclDataIntoSessionTable is used to insert data into crcl session table.
        */
        function insertCrclDataIntoSessionTable(){
            var sessionColumnData = [{ crcl_id: "1", crcl_value: self.crclVMCrClValue(), crcl_gender: self.crclVMcheckedOnLoad(), crcl_age: self.crclVMageInYears(), crcl_weight: self.crclVMweightInLbs(), crcl_serum: self.crclVMserumCr(), crcl_unit: self.crclVMCrClUnits() }];
            var dataToStore = JSON.stringify(sessionColumnData);
            sessionStorage.setItem("CRCL_SESSION_DATA", dataToStore);
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
            self.interruptCrclInputValue(self.crclVMCrClValue());
            validationForCrcl();
            self.interruptEnableCrclInput(false);
            self.interruptInputLockCrcl(true);    
        }

       
        
        /*
        * This function is used to rounding off the age
        */
        function getRoundedValue(value) {
            return Math.round(value);
        }
        
        /*
        * fetchSavedDataFromCrClTable function
        * fetchSavedDataFromCrClTable is used fetch the value of age and gender from crcl.
        */ 
        function fetchSavedDataFromCrClTable(){
           
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("CRCL_SESSION_DATA");
                    if(data != null && data != ""){
                        var localData = JSON.parse(data);   
                        $.each(localData, function(key, value){
                           try{
                                gender = (value.crcl_gender);
                                age = (value.crcl_age);
                                weight = (value.crcl_weight);
                                serum = (value.crcl_serum);
                               
                               if(age==null || age==undefined || age == "" || weight==null || weight==undefined || weight == "" || serum==null || serum==undefined || serum == "" ){
                                   crclValue = "";
                               }else{
                                    crclValue = (value.crcl_value);
                                    self.crclVMCrClValue(crclValue);
                                    self.crclVMshowValue(true);
                                    self.crclVMdontShowValue(false);
                                    self.crclVMactiveReset(true);
                                    self.crclVMinactiveReset(false);
                               }
                               
                                crclVMCrClUnits = (value.crcl_unit);
                                self.crclVMageInYears(age);
                                self.crclVMweightInLbs(weight);
                                self.crclVMserumCr(serum);
                              
                               if(crclVMCrClUnits == true){
                                   self.crclVMCrClUnits(true);
                               }else{
                                   crclVMfirstTimeLoadingFlag = false;
                                   self.crclVMCrClUnits(false);
                               }
                               if(gender != ""){
                                   if(gender == "male"){
                                       self.crclVMcheckedOnLoad("male");
                                       // document.getElementById("male").checked = true;
                                       self.crclVMgender(1);
                                   }else if(gender == "female"){
                                      self.crclVMcheckedOnLoad("female");
                                      //  document.getElementById("female").checked = true;
                                       self.crclVMgender(0.85);
                                   }
                               } else{
                                   self.crclVMcheckedOnLoad(null);
                                    self.crclVMshouldShowAgeErrorMessage(false);
                                   self.crclVMshouldShowWtErrorMessage(false);
                                   self.crclVMshouldShowSrErrorMessage(false);
                                   self.crclVMactiveReset(false);
                                   self.crclVMinactiveReset(true);
                               }
                               sessionStorage.setItem("goFromWizad",false);
                               toActiveDoneButton();
                           }catch(ex){
                                crclVMfirstTimeLoadingFlag = false;
                                console.log("CAtch Entered" + ex.message);
                           }

                        });
					}else{
                        self.crclVMresetPage();
                    }
                },100);
            } catch(ex){
               console.log("CRCL fetchSavedDataFromCrClTable : Error in getting the values : " + ex.message);
            }
        }
        
      /* bridge functionality */
      fetchSavedChadVascData();
      selectTherapyDataOnBridge();
      getBleedRiskYesNoData();
      getCrclValueFromWizard();
   
      this.activeNone = function(){
          self.bridgeVMisApproved1(false);
          self.bridgeVMisApproved2(null);
      }
      
      checkforWizadData();
      
      function resetAllData(){
          setTimeout(function(){
             self.bridgeVMTEchecked(undefined);
             self.bridgeVMsshowWasItAStrokeOrTIA(true);
             self.bridgeVMpriorTE3RdQeustion("Prior stroke or TIA?");
             self.bridgeVMwhetherYesNo3QuesChecked(undefined);
             self.bridgeVMheparinBtnVal(undefined)
             self.bridgeVMcrclCheckVal(undefined)
             self.bridgeVMcheckedUFH(undefined)
             self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(false);
             self.bridgeVMshouldShowWhetherMessage(true)
             self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
	         self.bridgeVMenableChadVascInput(true);
             self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
             self.bridgeVMadviceBoxColor('secondary');
             self.bridgeVMadviceBoxColorForWhenToBridge('secondary');
             self.bridgeVMwantBridgeAnywayBtn(false);
             bridgeVMhromboticRiskCalculationVal = "";
             self.bridgeVMwhetherAdviceMsg(appConstantsModel.restart_doac_default_advice);
             self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
             sessionStorage.setItem("THRMOBOEMBOIC_EVENT_TE",undefined);
             sessionStorage.setItem("showWasItAStrokeOrTIA",false);
             sessionStorage.setItem("bridgeVMpriorTE3RdQeustion","Prior stroke or TIA?");
             sessionStorage.setItem("bridgeVMwhetherYesNo3QuesChecked",undefined);
             sessionStorage.setItem("bridgeVMheparinBtnVal",undefined);
             sessionStorage.setItem("bridgeVMcrclCheckVal",undefined);
             sessionStorage.setItem("bridgeVMcheckedUFH",undefined);
             sessionStorage.setItem("thrombotic","Not Calculated");
             self.bridgeVMdisableValueDropDown(false);
             self.bridgeVMchadVascInputValue(undefined);
             self.bridgeVMinputLockChadVas(false);
             self.bridgeVMdisableClearBtn(true);
             sessionStorage.setItem("ADVICE_FROM_BRIDGE",null);
            
             enableAdviceTab();
         },100);
      }
        this.resetAllData = resetAllData;
        
        /**
         * setBridgeScreenLocked function
         * setBridgeScreenLocked is used to lock bridge screen.
         */
        function setBridgeScreenLocked(){
            bridgeLockValue = sessionStorage.getItem("LOCK_BRIDGE_PAGE");
            if(bridgeLockValue == "YES"){
                
                self.bridgeVMlockedSection(true);
                self.bridgeVMdisableValue(true);
                self.bridgeVMdisableValueDropDown(true);
                previousData();
                self.bridgeVMenableChadVascInput(false);
                
                setTimeout(function(){
                    self.bridgeVMdisableClearBtn(true);
                    self.bridgeVMaddClassWhenDisabled("clear-grey-btn");
                },700);
                
            } else if(bridgeLockValue == "NO") {
                self.bridgeVMlockedSection(false);
                self.bridgeVMdisableValue(null);
                self.bridgeVMdisableValue(false);
                if(self.chadsvascLock() != true){
                    self.bridgeVMdisableValueDropDown(false);
                }
                self.bridgeVMenableChadVascInput(true);
                setClearBtn();
            }
        }
        
        function saveAlldata(page, disable){

            var datas ={
                bridgeVMTEchecked : self.bridgeVMTEchecked(),
                bridgeVMsshowWasItAStrokeOrTIA : self.bridgeVMsshowWasItAStrokeOrTIA(),
                bridgeVMpriorTE3RdQeustion : self.bridgeVMpriorTE3RdQeustion(),
                bridgeVMwhetherYesNo3QuesChecked : self.bridgeVMwhetherYesNo3QuesChecked(),
                bridgeVMheparinBtnVal : self.bridgeVMheparinBtnVal(),
                bridgeVMcrclCheckVal : self.bridgeVMcrclCheckVal(),
                bridgeVMcheckedUFH : self.bridgeVMcheckedUFH(),
                bridgeVMshowCrclViewAndAdministerUFHOrLWMH : self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(),
                bridgeVMshouldShowWhetherMessage : self.bridgeVMshouldShowWhetherMessage(),
                bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues : self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(),
                bridgeVMenableChadVascInput : self.bridgeVMenableChadVascInput(),
                bridgeVMwhetherAdviceMsg : self.bridgeVMwhetherAdviceMsg(),
                bridgeVMwhenToAdviceMsg  : self.bridgeVMwhenToAdviceMsg(),
                bridgeVMadviceBoxColor : self.bridgeVMadviceBoxColor(),
                bridgeVMadviceBoxColorForWhenToBridge : self.bridgeVMadviceBoxColorForWhenToBridge(),
                bridgeVMhromboticRiskCalculationVal1 : bridgeVMhromboticRiskCalculationVal,
                bridgeVMchadVascInputValue : self.bridgeVMchadVascInputValue(),
                bridgeNayway : self.bridgeNayway(),
                bridgeVMwantBridgeAnywayBtn : self.bridgeVMwantBridgeAnywayBtn() 
            }

            sessionStorage.setItem("ALL_Bridge_DATA",JSON.stringify(datas));
            setInterruptScreenLocked();
            selectTherapyData();
            selectBleedRiskYesNo();
            if(disable == undefined)    //Inserted by Cybage    "disable" key
                pager.navigate("#!/"+page);
            pageArrays.push(page);
            getAdvices();
           
        }
        
        
        function previousData(){
            
            var fetchedData = JSON.parse(sessionStorage.getItem("ALL_Bridge_DATA"));
            if(fetchedData != null){
                self.bridgeVMchadVascInputValue(fetchedData.bridgeVMchadVascInputValue);
                self.bridgeVMTEchecked(fetchedData.bridgeVMTEchecked);
                self.bridgeVMsshowWasItAStrokeOrTIA(fetchedData.bridgeVMsshowWasItAStrokeOrTIA);
                self.bridgeVMpriorTE3RdQeustion(fetchedData.bridgeVMpriorTE3RdQeustion);
                self.bridgeVMwhetherYesNo3QuesChecked(fetchedData.bridgeVMwhetherYesNo3QuesChecked);
                self.bridgeVMheparinBtnVal(fetchedData.bridgeVMheparinBtnVal);
                self.bridgeVMcrclCheckVal(fetchedData.bridgeVMcrclCheckVal);
                self.bridgeVMcheckedUFH(fetchedData.bridgeVMcheckedUFH);
                self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(fetchedData.bridgeVMshowCrclViewAndAdministerUFHOrLWMH);
                self.bridgeVMshouldShowWhetherMessage(fetchedData.bridgeVMshouldShowWhetherMessage);
                self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(fetchedData.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues);
                self.bridgeVMenableChadVascInput(fetchedData.bridgeVMenableChadVascInput);
                self.bridgeVMwhetherAdviceMsg(fetchedData.bridgeVMwhetherAdviceMsg);
                self.bridgeVMwhenToAdviceMsg(fetchedData.bridgeVMwhenToAdviceMsg);
                self.bridgeVMadviceBoxColor(fetchedData.bridgeVMadviceBoxColor);
                self.bridgeVMadviceBoxColorForWhenToBridge(fetchedData.bridgeVMadviceBoxColorForWhenToBridge);
                bridgeVMhromboticRiskCalculationVal= fetchedData.bridgeVMhromboticRiskCalculationVal1;
                self.bridgeVMwantBridgeAnywayBtn(fetchedData.bridgeVMwantBridgeAnywayBtn);
                self.bridgeNayway(fetchedData.bridgeNayway);
                showWaringMsg();                    //Inserted by Cybage
            }else{
                console.log("Data holding null value"+ fetchedData);
            }
            
               
        }
        
        this.resetBragePage = function(){
             util.clearSessionTable("CHADVASC_SESSION_DATA");
			 util.clearSessionTable("CRCL_SESSION_DATA");
             util.clearSessionTable("ALL_Bridge_DATA");
             self.chadsvascLock(false);
             resetAllData();
             sessionStorage.setItem("goFromBridgeCrclwizard","");
             self.resetChadVascWizard();
             self.bridgeCrclVMresetPage
             self.disableBridgeCrclClick(null);
        }
        
        function checkforWizadData(){
            var bridgeWizad = sessionStorage.getItem("goFromBridgeCrclwizard");
            if(bridgeWizad == "yes"){
                previousData();
            }
        }
      
       /*
        * fetchSelectedRiskFromTable function
        * fetchSelectedRiskFromTable is used to fetch single risk from chad vasc table.
        */
         function getCrclValueFromWizard(){
 
            var data = sessionStorage.getItem("CRCL_SESSION_DATA");
            var fromCrcl = sessionStorage.getItem("goFromBridgeCrclwizard");
            setTimeout(function(){
                if(data){
                     var localData = JSON.parse(data);
                    if(localData !=null && localData !=""){
                      $.each(localData, function(key, value){
                          
                          if(value.crcl_bridge_wizard_type == 0) {
                              if(value.crcl_value == "Yes") {
                                  self.bridgeVMcrclCheckVal("Yes");
                              } else {
                                  self.bridgeVMcrclCheckVal("No");
                              }
                          } else {
                              if(value.crcl_value >= 30) {
                                 self.bridgeVMcrclCheckVal("Yes");
                                 self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(true);
                                 sessionStorage.setItem("bridgeVMcrclCheckVal",self.bridgeVMcrclCheckVal());
                                 self.bridgeVMdisableClearBtn(false);
                                 self.bridgeVMaddClassWhenDisabled(false); 
                              } else {
                                 self.bridgeVMcrclCheckVal("No");
                                 self.bridgeVMcheckedUFH(undefined);
                                 self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
                                 calculateWhenToBridge();
                                 self.bridgeVMdisableClearBtn(false); 
                                 self.bridgeVMaddClassWhenDisabled(false); 
                                 sessionStorage.setItem("bridgeVMcrclCheckVal",self.bridgeVMcrclCheckVal());
                              }
                          }
                        });
                    }  
                }else{
                    setClearButton();
                }
            },600);
        }
      
      function setClearButton(){
          if((self.bridgeVMchadVascInputValue() !="" && self.bridgeVMchadVascInputValue() !=undefined) || self.bridgeVMTEchecked() !=undefined || self.bridgeVMheparinBtnVal() !=undefined){
                self.bridgeVMdisableClearBtn(false); 
              
            }else{
                 self.bridgeVMdisableClearBtn(true); 
            }
      }
	  //activeShowErrorMessage : this function is used to enable the error part of whether to bridge block
      this.activeShowErrorMessage = function(){
		  self.bridgeVMshouldShowErrorMessage(false);
	  }
	  
     
		
		//enable reset button
      this.displayCrclViewAndAdministerUFHOrLWMH = function(){
          self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(true);
          self.bridgeVMshouldShowWhetherMessage(false)
          return true;
      }
      
      
      this.displayCrclViewAndAdministerUFHOrLWMHYes = function(){
          displayWhenToBridgeAdvice();
          self.bridgeVMcheckedUFH(undefined);
          self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(false);
          self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
          sessionStorage.setItem("bridgeVMheparinBtnVal", self.bridgeVMheparinBtnVal())
          self.bridgeVMcrclCheckVal(undefined);
          calculateWhenToBridge();
          self.bridgeVMshouldShowWhetherMessage(true);
          self.bridgeVMdisableClearBtn(false);
          self.bridgeVMaddClassWhenDisabled(false);
          return true;
      }
      
      this.displayCrclViewAndAdministerUFHOrLWMHNo = function(){
          displayWhenToBridgeAdvice();
          self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(true);
          self.bridgeVMshouldShowWhetherMessage(false)
          self.bridgeVMdisableClearBtn(false);
          sessionStorage.setItem("bridgeVMheparinBtnVal", self.bridgeVMheparinBtnVal());
          self.bridgeVMaddClassWhenDisabled(false);
          calculateWhenToBridge();
          return true;
      }
      
      this.activeTELess = function(){
		  self.bridgeVMisApproved1(true);
          self.bridgeVMisApproved2(null);
	  }
      
      this.activeTEGreater = function(){
		  self.bridgeVMisApproved2(false);
          self.bridgeVMisApproved1(null);
	  }
      
      this.activeTIA = function(){
		  self.bridgeVMisApprovedTIA(false);
	  }
      
      this.activeTIANo = function(){
		  self.bridgeVMisApprovedTIA(true);
	  }
      
      this.activeHIT = function(){
		  self.bridgeVMisApprovedHIT(false);
	  }
      
      this.activeHITNo = function(){
		  self.bridgeVMisApprovedHIT(true);
	  }
      
      this.activeCrclYes = function(){
		  self.bridgeVMisApprovedCrcl(false);
	  }
      
      this.activeCrclNo = function(){
		  self.bridgeVMisApprovedCrcl(true);
	  }
      
       this.activeUFHYes = function(){
		  self.bridgeVMisApprovedUFH(false);
	  }
      
      this.activeUFHNo = function(){
		  self.bridgeVMisApprovedUFH(true);
	  }
      
      this.patientPageFromBridge = function(){
          sessionStorage.setItem("DESTINATION", "PATIENT");
          sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
          sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
          
          var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
          if(destinationPage == "Bridge") {
              sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
              self.lockIconOnPatientForBridgeTab(false);
              self.lockIconOnPatientForInterruptTab(true);
          } else {
              sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
              self.lockIconOnPatientForBridgeTab(true);
          }
          saveAdviceAndGo();
          saveAlldata("patientPage");
          setPatientScreenLocked();
          enableAdviceTab();
	  }
      
      this.interruptPageFromBridge = function(){
          sessionStorage.setItem("DESTINATION", "INTERRUPT");
          sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
          var destinationPage = sessionStorage.getItem("FINAL_PAGE");
              
          if(destinationPage == "Bridge") {
              sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
              self.lockIconOnPatientForBridgeTab(false);
          } else {
              sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
              self.lockIconOnPatientForBridgeTab(true);
              self.interruptBridgeLockIcon(true);
          }
          
          saveAdviceAndGo();
          saveAlldata("interruptPage");
          enableAdviceTab();
	  }
      
	  this.goToRestartPageFromBridge = function(){
            sessionStorage.setItem("LOCK_COME_FROM","");
            saveAdviceAndGo();
          
            sessionStorage.setItem("CURRENT_PAGE","4"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","3"); //For browser back functionality//
            self.arrayOfPages.push([3,4]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
        
            var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
            if(localData != null && localData != ""){
                $.each(localData, function(key, value){
                    if ((value.selected_DOACtype[0]) === appConstantsModel.doac_anti_xa || (value.selected_DOACtype[0]) === appConstantsModel.doac_dti ) {
                        sessionStorage.setItem("DESTINATION", "RESTART_DOAC");
                        selectRestartStoredDataFromTableOnRestartDoac();
                        sessionStorage.setItem("CURRENT_PAGE","Bridge"); //For browser back functionality//
                        sessionStorage.setItem("NEXT_PAGE","restartDoac"); //For browser back functionality//
                        saveAlldata("restartPage", "disable");      //Inserted by Cybage "disable"
                        sessionStorage.setItem("FINAL_PAGE","restartDoac");
                        enableAdviceTab();
                    }else if((value.selected_DOACtype[0]) === appConstantsModel.VKA) {
                        sessionStorage.setItem("DESTINATION", "RESTART_WARFARIN");
                        selectRestartStoredDataFromTableOnWarfarin();
                        sessionStorage.setItem("CURRENT_PAGE","Bridge"); //For browser back functionality//
                        sessionStorage.setItem("NEXT_PAGE","restartWarfarin"); //For browser back functionality//
                        saveAlldata("restartPageWarfarin", "disable");  //Inserted by Cybage "disable"
                        sessionStorage.setItem("FINAL_PAGE","restartWarfarin");
                        enableAdviceTab();
                    }
                });
            }
          self.goToOACRestart(); //Inserted by Cybage
          return true;           //Inserted by Cybage
	  }
      
      this.goToChadsVasc = function(){
           if(!self.chadsvascLock()){
              sessionStorage.setItem("CURRENT_PAGE","7"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","3"); //For browser back functionality//

              self.arrayOfPages.push([3,7]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());

              saveAlldata("CHADsVAScWizard");
              fetchSavedChadVascDataOnChadVascScreen();
              fetchSavedDataFromCrClTableOnChadVasc();
           }
      }
      
      this.goToCrCl = function(){
          bridgeCrclfetchSavedDataFromCrClTable();
          bridgeCrclfetchSavedDataFromChadVascSessionTable();
          sessionStorage.setItem("CURRENT_PAGE","8"); //For browser back functionality//
           sessionStorage.setItem("PREV_PAGE","3"); //For browser back functionality//
          
           self.arrayOfPages.push([3,8]);
           sessionStorage.setItem("arrayValue",self.arrayOfPages());
          saveAlldata("crclBridgeViewPage");
      }
	  
      //displayWasItAStrokeOrTIA: function to display "Was it a Stroke or TIA" tab
      this.displayWasItAStrokeOrTIANone2 = function(){
           self.bridgeVMsshowWasItAStrokeOrTIA(false);
		   return true;
      }
       //displayWasItAStrokeOrTIA: function to display "Was it a Stroke or TIA" tab
      this.displayWasItAStrokeOrTIANone= function(){
          displayWasItAStrokeOrTIACountVariable = 1;
          self.bridgeVMaddClassWhenDisabled(false);
	      self.bridgeVMwhetherYesNo3QuesChecked(undefined);
          self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
          self.bridgeNayway(false);
          self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
          self.bridgeVMwantBridgeAnywayBtn(false);
          self.bridgeVMTEchecked("None");
          self.bridgeVMdisableClearBtn(false);
          sessionStorage.setItem("THRMOBOEMBOIC_EVENT_TE",self.bridgeVMTEchecked());
           hromboticRiskCalculation()
		   return true;
      }
       //displayWasItAStrokeOrTIA: function to display "Was it a Stroke or TIA" tab
      this.displayWasItAStrokeOrTIAWithin3 = function(){
          displayWasItAStrokeOrTIACountVariable = 2;
          self.bridgeVMaddClassWhenDisabled(false);
           self.bridgeVMwhetherYesNo3QuesChecked(undefined);
          self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
           self.bridgeNayway(false);
          self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
           self.bridgeVMwantBridgeAnywayBtn(false);
           self.bridgeVMTEchecked("Within3Months");
          self.bridgeVMdisableClearBtn(false);
          sessionStorage.setItem("THRMOBOEMBOIC_EVENT_TE",self.bridgeVMTEchecked());
           hromboticRiskCalculation();
		   return true;
      }
    this.displayWasItAStrokeOrTIAMoreThan3 = function(){
            displayWasItAStrokeOrTIACountVariable = 3;
            self.bridgeVMwhetherYesNo3QuesChecked(undefined);
            self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
            self.bridgeNayway(false);
            self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
            self.bridgeVMwantBridgeAnywayBtn(false);
            self.bridgeVMTEchecked("Morethan3Months");
            self.bridgeVMdisableClearBtn(false);
            sessionStorage.setItem("THRMOBOEMBOIC_EVENT_TE",self.bridgeVMTEchecked());
            hromboticRiskCalculation()
            return true;
      }
       
     function hromboticRiskCalculation(){
         if(self.bridgeVMchadVascInputValue() != undefined && self.bridgeVMTEchecked() !=undefined && self.bridgeVMTEchecked() !=null && self.bridgeVMchadVascInputValue() !="0" ){
             
             if(parseInt(self.bridgeVMchadVascInputValue()) >=1 && parseInt(self.bridgeVMchadVascInputValue()) <= 4){
                    switch(self.bridgeVMTEchecked()) {
                        case appConstantsModel.case_type_none:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_low;
                        break;
                        case appConstantsModel.case_type_within3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_high;
                        break;
                        case appConstantsModel.case_type_morethan3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_moderate;
                        break;
                    }
             }else if(parseInt(self.bridgeVMchadVascInputValue()) >=5 && parseInt(self.bridgeVMchadVascInputValue()) <= 6){
                      switch(self.bridgeVMTEchecked()) {
                        case appConstantsModel.case_type_none:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_moderate;
                        break;
                        case appConstantsModel.case_type_within3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_high;
                        break;
                          case appConstantsModel.case_type_morethan3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_moderate;
                        break;
                    }
                            
             }else if(parseInt(self.bridgeVMchadVascInputValue()) >=7 && parseInt(self.bridgeVMchadVascInputValue()) <= 9){
                      switch(self.bridgeVMTEchecked()) {
                        case appConstantsModel.case_type_none:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_high;
                        break;
                        case appConstantsModel.case_type_within3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_high;
                        break;
                          case appConstantsModel.case_type_morethan3Months:
                            bridgeVMhromboticRiskCalculationVal = appConstantsModel.bridge_high;
                        break;
                    }
                            
             }else{
                 bridgeVMhromboticRiskCalculationVal = "";
             }
         }
         
         
         showWhetherThirdQuestion()
     }
        
        
        //showWhetherThirdQuestion for showing third question;
        function showWhetherThirdQuestion(){
            if(bridgeVMhromboticRiskCalculationVal ==appConstantsModel.bridge_low){
                self.bridgeVMsshowWasItAStrokeOrTIA(true);
                generateWhetherToBridgeAdvice();
                self.bridgeVMpriorTE3RdQeustion("")
                sessionStorage.setItem("bridgeVMpriorTE3RdQeustion",self.bridgeVMpriorTE3RdQeustion());
                 sessionStorage.setItem("showWasItAStrokeOrTIA",self.bridgeVMsshowWasItAStrokeOrTIA());
            }else if(bridgeVMhromboticRiskCalculationVal =="Moderate"){
                if((self.bridgeVMchadVascInputValue() >= 1 && self.bridgeVMchadVascInputValue() <= 4) && self.patientMainYesNoChecked() == "Yes"){
                    self.bridgeVMsshowWasItAStrokeOrTIA(true);
                } else if((self.bridgeVMchadVascInputValue() >= 5 && self.bridgeVMchadVascInputValue() <= 6) && self.patientMainYesNoChecked() == "Yes" && (displayWasItAStrokeOrTIACountVariable == 1  || displayWasItAStrokeOrTIACountVariable == 3)){
                    self.bridgeVMsshowWasItAStrokeOrTIA(true);
                }else {
                    self.bridgeVMsshowWasItAStrokeOrTIA(false);
                }
                
                self.bridgeVMpriorTE3RdQeustion("Prior stroke or TIA?");
                sessionStorage.setItem("bridgeVMpriorTE3RdQeustion",self.bridgeVMpriorTE3RdQeustion());
                sessionStorage.setItem("showWasItAStrokeOrTIA",false);
                generateWhetherToBridgeAdvice();
                
            }else if (bridgeVMhromboticRiskCalculationVal ==appConstantsModel.bridge_high){
                if((self.bridgeVMchadVascInputValue() >= 7 && self.bridgeVMchadVascInputValue() <= 9) && self.patientMainYesNoChecked() == "No" && (displayWasItAStrokeOrTIACountVariable == 1  || displayWasItAStrokeOrTIACountVariable == 3)){
                        self.bridgeVMsshowWasItAStrokeOrTIA(true);
                   } else {
                       self.bridgeVMsshowWasItAStrokeOrTIA(false);
                   }
                
                self.bridgeVMpriorTE3RdQeustion(appConstantsModel
                                       .bridge_major_ICH_3_months);
                
                sessionStorage.setItem("bridgeVMpriorTE3RdQeustion",self.bridgeVMpriorTE3RdQeustion());
                 sessionStorage.setItem("showWasItAStrokeOrTIA",false);
                generateWhetherToBridgeAdvice();
            }else{
                self.bridgeVMpriorTE3RdQeustion(appConstantsModel.bridge_major_ICH_3_months);
                self.bridgeVMsshowWasItAStrokeOrTIA(true);
                self.bridgeVMwhetherYesNo3QuesChecked(undefined);
            }   
           return true;
        }

        function saveAdvice(){
            var whetherToadviceBridge = "";
            var whenToadvieBridge = "";
            sessionStorage.setItem("whetherToadviceBridge",self.bridgeVMwhetherAdviceMsg());
            sessionStorage.setItem("whenToadvieBridge",self.bridgeVMwhenToAdviceMsg());
            
            if(self.bridgeVMwhetherAdviceMsg() != undefined && self.bridgeVMwhetherAdviceMsg() != appConstantsModel.restart_doac_default_advice){
                whetherToadviceBridge = self.bridgeVMwhetherAdviceMsg();
                sessionStorage.setItem("ADVICE_FROM_BRIDGE", "true");
                enableAdviceTab();
            }

            if(self.bridgeVMwhenToAdviceMsg() != undefined && self.bridgeVMwhenToAdviceMsg() != appConstantsModel.restart_doac_default_advice){
                whenToadvieBridge = self.bridgeVMwhenToAdviceMsg();
                sessionStorage.setItem("ADVICE_FROM_BRIDGE", "true");
                enableAdviceTab();
            }

            var sessionColumnData = [{ adviceId: "1", whetherAdvice: whetherToadviceBridge, whenAdvice:whenToadvieBridge}];
            var dataToStore = JSON.stringify(sessionColumnData);
            sessionStorage.setItem("BRIGDE_ADVICE", dataToStore);

            if(self.bridgeVMadviceBoxColor() == appConstantsModel.success){
              whenToAdviceStatusBridge = appConstantsModel.positive;
            } else if (self.bridgeVMadviceBoxColor() == appConstantsModel.error){
              whenToAdviceStatusBridge = appConstantsModel.nagative;
            }
        }
        this.saveAdviceBridge = saveAdvice; //Insered by cybage for Bridge
        // generateWhetherToBridgeAdvice(): For generating whether to bridge advice
        function generateWhetherToBridgeAdvice(){
            
            if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_low){
                 self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_do_not_bridge);
                self.bridgeVMadviceBoxColor(appConstantsModel.error);
                self.bridgeVMwantBridgeAnywayBtn(true);
 
                if (self.bridgeNayway() == true && self.bridgeVMwhenToAdviceMsg() == appConstantsModel.bridge_must_answer_remaining){
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_must_answer_remaining);
                 }else{
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.advice_not_applicable);
                 }
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
                saveAdvice();
                self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMTEchecked() == appConstantsModel.case_type_within3Months ){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_consider_delay);
                self.bridgeVMadviceBoxColor(appConstantsModel.error);
 		        self.bridgeVMwantBridgeAnywayBtn(true);

                
                 if (self.bridgeNayway() == true && self.bridgeVMwhenToAdviceMsg() == "Must answer remaining questions above."){
                     self.bridgeVMwhenToAdviceMsg("Must answer remaining questions above.");
                 }else{
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.advice_not_applicable);
                 }
                
                
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
                saveAdvice();
 		        self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate  && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_yes){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_do_not_bridge);
                self.bridgeVMadviceBoxColor(appConstantsModel.error);
                self.bridgeVMwantBridgeAnywayBtn(true);

                if (self.bridgeNayway() == true && self.bridgeVMwhenToAdviceMsg() == appConstantsModel.bridge_must_answer_remaining){
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_must_answer_remaining);
                 }else{
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.advice_not_applicable);
                 }
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
                saveAdvice();
		        self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high  && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_indication_for_bridging);
                self.bridgeVMadviceBoxColor(appConstantsModel.success);
                saveAdvice();
		        self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate  && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMpriorTE3RdQeustion() ==  appConstantsModel.bridge_prior_stroke_tia && self.bridgeVMwhetherYesNo3QuesChecked() == appConstantsModel.wizard_no){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_likely_do_not_bridge);
                self.bridgeVMadviceBoxColor(appConstantsModel.warning);
                saveAdvice();
		        self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate  && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMpriorTE3RdQeustion() ==  appConstantsModel.bridge_prior_stroke_tia && self.bridgeVMwhetherYesNo3QuesChecked() == appConstantsModel.wizard_yes){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_likely_bridge);
                self.bridgeVMadviceBoxColor(appConstantsModel.warning);
                saveAdvice();
		        self.bridgeVMenableAdvice(true);
            }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high  && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_yes && self.bridgeVMpriorTE3RdQeustion() ==  appConstantsModel.bridge_major_ICH_3_months && self.bridgeVMwhetherYesNo3QuesChecked() == appConstantsModel.wizard_yes){
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_likely_do_not_bridge);
                
                self.bridgeVMadviceBoxColor(appConstantsModel.warning);
                saveAdvice();
		        self.bridgeVMenableAdvice(true);
            } else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high  && self.bridgeVMpatientHasBleedRisk()       == appConstantsModel.wizard_yes && self.bridgeVMpriorTE3RdQeustion() ==                                       appConstantsModel.bridge_major_ICH_3_months && self.bridgeVMwhetherYesNo3QuesChecked() ==                     appConstantsModel.wizard_no){
                
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.bridge_likely_bridge_address_other_factors);
                self.bridgeVMadviceBoxColor(appConstantsModel.warning);
                saveAdvice();
                self.bridgeVMenableAdvice(true);
            }else{
               
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.restart_doac_default_advice);
                self.bridgeVMadviceBoxColor(appConstantsModel.secondary);
                self.bridgeVMwantBridgeAnywayBtn(false);
                self.bridgeNayway(false);
            }
            calculateWhenToBridge();
        }
        
        // showWaringMsg for showing warning message for advice
        function showWaringMsg(){
      
            if(self.bridgeNayway() == true){
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(true);
            }else{
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false)
            }
        }
        
        var advice1 = appConstantsModel.bridge_start_ufh;
        var advice2 = appConstantsModel.bridge_start_lmhw;
        // function calculateWhenToBridge
        
        function calculateWhenToBridge(){
            
            if(self.bridgeVMwantBridgeAnywayBtn() == true && self.bridgeNayway() !=true){
            
            }else if(self.bridgeVMwhetherAdviceMsg() == appConstantsModel.restart_doac_default_advice){
              	 self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
                 self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                 self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
		       
            }else{
                algorithmWhenToBridge();
            }
        }
        
        var whenToadvice1 = appConstantsModel.bridge_start_ufh;
        
         function algorithmWhenToBridge(){


              if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_yes){
                    self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_consider_individual_strategy);
                    self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                    saveAdvice();
                    showWaringMsg();
                    self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_yes){
                  self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_follow_local_protocol);
                  self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                  saveAdvice();
                  showWaringMsg();
		          self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_yes) {
                    self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                    self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_follow_local_protocol);
                    self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                    saveAdvice();
                    showWaringMsg();
		            self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_low && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_yes) {
                 self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_follow_local_protocol);
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor())
                 saveAdvice();
                 showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_no) {
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor())
                 self.bridgeVMwhenToAdviceMsg(advice1);
                 saveAdvice();
                 showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate  && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_no) {
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor())
                 self.bridgeVMwhenToAdviceMsg(advice1);
                 showWaringMsg();
                 saveAdvice();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_low  && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_no) {
                 self.bridgeVMwhenToAdviceMsg(advice1);
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor())
                 saveAdvice();
                 showWaringMsg();
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes && self.bridgeVMcheckedUFH() == appConstantsModel.bridge_UFH ) {
                 self.bridgeVMwhenToAdviceMsg(appConstantsModel.UFH_advice);
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                 saveAdvice();
                 showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate &&  self.bridgeVMheparinBtnVal() ==appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes && self.bridgeVMcheckedUFH() == appConstantsModel.bridge_UFH ) {
                 self.bridgeVMwhenToAdviceMsg(appConstantsModel.UFH_advice);
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                 saveAdvice();
                 showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_low &&  self.bridgeVMheparinBtnVal() ==appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes && self.bridgeVMcheckedUFH() == appConstantsModel.bridge_UFH ) {
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                 self.bridgeVMwhenToAdviceMsg(appConstantsModel.UFH_advice);
                 saveAdvice();
                 showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high &&  self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_no && self.bridgeVMheparinBtnVal() == appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes && self.bridgeVMcheckedUFH() == appConstantsModel.bridge_LMWH ) {
                 self.bridgeVMwhenToAdviceMsg(appConstantsModel.LMWH_advice);
                 self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                 saveAdvice();
		         showWaringMsg();
		         self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_low &&  self.bridgeVMheparinBtnVal()         ==appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes &&             self.bridgeVMcheckedUFH() == appConstantsModel.bridge_LMWH ) {
                 
                self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.LMWH_advice);
                 saveAdvice();
                 showWaringMsg();
                 self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate &&  self.bridgeVMheparinBtnVal() ==appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes &&  self.bridgeVMcheckedUFH() == appConstantsModel.bridge_LMWH ) {
                 
               self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.LMWH_advice);
                 saveAdvice();
                 showWaringMsg();
                 self.bridgeVMenableAdvice(true);
             }else if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_moderate &&  self.bridgeVMheparinBtnVal() ==appConstantsModel.wizard_no && self.bridgeVMcrclCheckVal() == appConstantsModel.wizard_yes && self.bridgeVMcheckedUFH() == appConstantsModel.bridge_LMWH ) {
                 
                self.bridgeVMadviceBoxColorForWhenToBridge(self.bridgeVMadviceBoxColor());
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.LMWH_advice);
                 saveAdvice();
                 showWaringMsg();
                 self.bridgeVMenableAdvice(true);
             }else{
                 if(self.bridgeVMwantBridgeAnywayBtn() == true){
                    self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_must_answer_remaining);
                 }else{
                     self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
                 }
                  self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                 self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
             }
         }
        
        this.bridgeAnywayClick =  function(){
            self.bridgeNayway(true);        //CHECKED BY CYBAGE
            if(self.bridgeVMheparinBtnVal() ==undefined){
                if(bridgeVMhromboticRiskCalculationVal == appConstantsModel.bridge_high && self.bridgeVMpatientHasBleedRisk() == appConstantsModel.wizard_yes){
                     calculateWhenToBridge();
                }else{
                    self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_must_answer_remaining);
                }
            }else{
                calculateWhenToBridge();
            }
        }
        
        this.bridgeCrclYesClick =  function(){
            displayWhenToBridgeAdvice();
            self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(true);
            sessionStorage.setItem("bridgeVMcrclCheckVal",self.bridgeVMcrclCheckVal());
            calculateWhenToBridge();
            self.bridgeVMcrclCheckVal(self.bridgeVMcrclCheckVal());
            insertCrclValueInSessionTableFromBridge();
            return true;
                
        }
        
        
         this.bridgeCrclNoClick =  function(){
            displayWhenToBridgeAdvice();
            self.bridgeVMcheckedUFH(undefined);
            self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
            calculateWhenToBridge();
            sessionStorage.setItem("bridgeVMcrclCheckVal",self.bridgeVMcrclCheckVal());
            self.bridgeVMcrclCheckVal(self.bridgeVMcrclCheckVal());
            insertCrclValueInSessionTableFromBridge();
            return true;
        }
        /*
        * insertCrclValueInSessionTableFromBridge function
        * insertCrclValueInSessionTableFromBridge is used to insert crcl data into crcl session table on bridge screen.
        */
        function insertCrclValueInSessionTableFromBridge(){
            try {
                
                setTimeout(function(){
                    var sessionColumnData = [{ crcl_id: "1", crcl_value: self.bridgeVMcrclCheckVal(), crcl_gender: "", crcl_age: "", crcl_weight:"", crcl_serum:"", crcl_unit:"", crcl_bridge_wizard_type: "0"}];

                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("CRCL_SESSION_DATA", dataToStore);
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in updation of data : " + ex.message);
            }
        }
        
        
        // function whetherYesQues
        
        this.whetherYes3Ques = function(){
             displayWhenToBridgeAdviceThird();
            sessionStorage.setItem("bridgeVMwhetherYesNo3QuesChecked",self.bridgeVMwhetherYesNo3QuesChecked());
            generateWhetherToBridgeAdvice();
            return true;
        }
        
        this.whetherNo3Ques = function(){
            displayWhenToBridgeAdviceThird();
             sessionStorage.setItem("bridgeVMwhetherYesNo3QuesChecked",self.bridgeVMwhetherYesNo3QuesChecked());
            generateWhetherToBridgeAdvice();
            return true;
        }
        function displayWhenToBridgeAdviceThird(){
             if (self.bridgeNayway() == true && self.bridgeVMwhenToAdviceMsg() == appConstantsModel.bridge_must_answer_remaining){
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.bridge_must_answer_remaining);
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
            }else{
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
            }
        }
        this.administerUFH =  function(){
            displayWhenToBridgeAdvice();
            sessionStorage.setItem("bridgeVMcheckedUFH",self.bridgeVMcheckedUFH());
            calculateWhenToBridge();
            return true;
        }
        this.administerLMWH =  function(){
            displayWhenToBridgeAdvice();
            sessionStorage.setItem("bridgeVMcheckedUFH",self.bridgeVMcheckedUFH());
            calculateWhenToBridge();
            return true;
        }
      /* 
      * displayWhenToBridgeAdvice function
      */
        function displayWhenToBridgeAdvice() {
            if (self.bridgeNayway() == true ){
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.advice_not_applicable);
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
            }
        }
      /* getBleedRiskYesNoData function
      *
      */
        function getBleedRiskYesNoData(){
            var data = sessionStorage.getItem("YES_NO_STORAGE");
            if(data){
                var localData = JSON.parse(data);
                self.bridgeVMpatientHasBleedRisk(localData[0].yes_no);   
            }
        }
       /*
        * fetchSavedChadVascData function
        * fetchSavedChadVascData is used to fetch data from chad vasc session table.
        */
        function fetchSavedChadVascData(){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("CHADVASC_SESSION_DATA");
                    if(data){
                    var localData = JSON.parse(data);
                    var bridgeWizad = sessionStorage.getItem("goFromBridgeChatVaswizard");
                    if(localData !=null && localData !=""){
                        $.each(localData, function(key, value){
                            if(bridgeWizad == appConstantsModel.inter_yes){
                                self.bridgeVMchadVascInputValue(value.chadsVasc_value);
                                self.bridgeVMdisableValueDropDown(true);
                                self.bridgeVMinputLockChadVas(true);
                            }
                        });
                    }
                        sessionStorage.setItem("goFromBridgeChatVaswizard","");
                    }
                },100);
            } catch(ex){
                console.log("bridgeViewModel() : Error in selection of chad vasc value : " + ex.message);
            }
        }
        
        /*
        * selectTherapyDataOnBridge function
        * selectTherapyDataOnBridge is used to fetch selected therapy type from session table.
        */
        function selectTherapyDataOnBridge(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            self.bridgeVMsaveTherapyValue(value.selected_therapy_type);
                            self.bridgeVMsavedDOACtype(value.selected_DOACtype);
                            if(self.bridgeVMsaveTherapyValue() == appConstantsModel.warfarin) {
                                bridgeVMtherapyType = appConstantsModel.warfarin;
                                setUIForWarfarin();
                                enableAdviceTab();
                            } else {
                                sessionStorage.setItem("ADVICE_FROM_BRIDGE","true");
                                setUIForDOAC();
                                enableAdviceTab();
                            }
                        });
                    }
                },100);
            } catch(ex){
                console.log("bridgeViewModel() : Error in fetching of selected therapy type : " + ex.message);
            }
        }
        
        /*
        * bridgeGoToAdvice function
        * bridgeGoToAdvice is used to go to advice page.
        */
        this.bridgeGoToAdvice = function() {
            sessionStorage.setItem("CURRENT_PAGE","9"); //For browser back functionality//
              sessionStorage.setItem("PREV_PAGE","3"); //For browser back functionality//
            
              self.arrayOfPages.push([3,9]);
              sessionStorage.setItem("arrayValue",self.arrayOfPages());
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            saveAdviceAndGo();
            saveAlldata("adviceViewPage");
            
            self.breadcrumbBridgePresentOnAdvice(true); //Inserted OK by Cybage
            
            //Inserted by Cybage for generating bridge advice when value is present before
            if(self.patientMainSelectedDrug()!=undefined && self.patientMainSelectedDrug()[0]=="Warfarin")
                self.onchangeCha2dsVas();   
        }
        
        function saveAdviceAndGo(){
            var whetherToadviceBridge = "";
            var whenToadvieBridge = "Answer questions above to generate advice.";
            var whenToAdviceStatusBridge = "";

            if(self.bridgeVMwhetherAdviceMsg() != undefined && self.bridgeVMwhetherAdviceMsg() !=appConstantsModel.restart_doac_default_advice){
                whetherToadviceBridge = self.bridgeVMwhetherAdviceMsg();
                sessionStorage.setItem("WARNING", "FALSE");
                enableAdviceTab();
            } else {
                sessionStorage.setItem("WARNING", "TRUE");
                enableAdviceTab();

            }
            
            if(self.bridgeVMwhenToAdviceMsg() != undefined && self.bridgeVMwhenToAdviceMsg() !=appConstantsModel.restart_doac_default_advice){
                whenToadvieBridge = self.bridgeVMwhenToAdviceMsg();
                sessionStorage.setItem("WARNING", "FALSE");
            }

            if(self.bridgeVMadviceBoxColor() == appConstantsModel.success){
                whenToAdviceStatusBridge = appConstantsModel.positive;
            }else if (self.bridgeVMadviceBoxColor() == appConstantsModel.error){
                whenToAdviceStatusBridge =appConstantsModel.nagative;
            }

            var savedData = [{  
                whetherToadviceBridge : whetherToadviceBridge,
                whenToadvieBridge : whenToadvieBridge,
                whenToAdviceStatusBridge : whenToAdviceStatusBridge

            }];

            var bridgeVMwarningMessage = sessionStorage.getItem("WARNING");
            if(bridgeVMwarningMessage === "FALSE"){
                sessionStorage.setItem("thrombotic",bridgeVMhromboticRiskCalculationVal);
                sessionStorage.setItem("BRIDGE_DATA",JSON.stringify(savedData));
            }else if (bridgeVMwarningMessage === "TRUE"){
                sessionStorage.setItem("WARNING_FROM_BRIDGE_DOAC", appConstantsModel.doac_warning);
            }
            enableAdviceTab();
        }
        
        this.bridgeVMunlockSection = function(){
            self.bridgeVMlockedSection(false);
            self.bridgeVMdisableValue(null);
            self.bridgeVMdisableValue(false);
            if(!self.chadsvascLock()){
                self.bridgeVMdisableValueDropDown(false);
            }

            self.bridgeVMenableChadVascInput(true)
            setClearBtn();
            util.clearSessionTable("RESTART_DOAC_ADVICE_STORAGE");
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            self.clearRestartWarfarin();
            self.clearRestartDOAC();
            enableAdviceTab();
            sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE",null);
            sessionStorage.setItem("ADVICE_FROM_RESTART",null);
            sessionStorage.setItem("INSERT_ADVICE_RESTART_DOAC","false");
            sessionStorage.setItem("INSERT_ADVICE_RESTART_WARFARIN","false");
            sessionStorage.setItem("FINAL_PAGE","Bridge");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","NO");
            self.interruptBridgeLockIcon(false);
        }

        function setClearBtn(){
            if((self.bridgeVMchadVascInputValue() !="" && self.bridgeVMchadVascInputValue() !=undefined) || self.bridgeVMTEchecked() !=undefined || self.bridgeVMheparinBtnVal() !=undefined){
                self.bridgeVMdisableClearBtn(false);
                self.bridgeVMaddClassWhenDisabled(false);
            } else{
                 self.bridgeVMdisableClearBtn(true); 
                 self.bridgeVMaddClassWhenDisabled("clear-grey-btn");
            }
        }
        /*
        * setUIForWarfarin function
        * setUIForWarfarin is used to set view based on the therapy type Warfarin.
        */
        function setUIForWarfarin() {
            self.bridgeVMwarningMessage(false);
            self.bridgeVMclearPageVisibility(true);
            self.bridgeVMscoreSectionVisibility(true);
            self.bridgeVMwhetherVisibility(true);
            self.bridgeVMwhenVisibility(true);
            self.bridgeVMdisableAdviceValue(null);
        }
        
        /*
        * setUIForDOAC function
        * setUIForDOAC is used to set view based on the therapy type DOAC.
        */
        function setUIForDOAC() {
            self.bridgeVMwarningMessage(true);
            self.bridgeVMclearPageVisibility(false);
            self.bridgeVMscoreSectionVisibility(false);
            self.bridgeVMwhetherVisibility(false);
            self.bridgeVMwhenVisibility(false);
        }
        
        this.onchangeCha2dsVas = function(){
            if((self.bridgeVMchadVascInputValue() !="" && self.bridgeVMchadVascInputValue() !=undefined) || self.bridgeVMTEchecked() !=undefined || self.bridgeVMheparinBtnVal() !=undefined){
                self.bridgeVMdisableClearBtn(false); 
                if(self.bridgeVMheparinBtnVal() !="0"){
                    self.bridgeVMaddClassWhenDisabled(false); 
                    hromboticRiskCalculation();
                }
            }else{
	             bridgeVMhromboticRiskCalculationVal = "";
                 self.bridgeVMdisableClearBtn(true);
                 self.bridgeVMaddClassWhenDisabled("clear-grey-btn"); 
            }
            
              if(self.bridgeVMchadVascInputValue() !=undefined  && self.bridgeVMchadVascInputValue() !="" && self.bridgeVMchadVascInputValue() !="0"){
                sessionStorage.setItem("CHADVAS_INPUT_VALUE",self.bridgeVMchadVascInputValue());
            }else{
                sessionStorage.setItem("ADVICE_FROM_BRIDGE",null);
                enableAdviceTab();
		        bridgeVMhromboticRiskCalculationVal = "";
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.restart_doac_default_advice);
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
                self.bridgeVMadviceBoxColor(appConstantsModel.secondary);
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
                self.bridgeVMwantBridgeAnywayBtn(false);
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                self.bridgeNayway(false);
                sessionStorage.setItem("ADVICE_FROM_BRIDGE",null);
                sessionStorage.setItem("BRIDGE_DATA",null);
            }
            
            hromboticRiskCalculation();
        }
        
        this.onchangeCha2dsVasKeyUp = function(){
            if(self.bridgeVMchadVascInputValue() !=undefined  && self.bridgeVMchadVascInputValue() !="" && self.bridgeVMchadVascInputValue() !="0"){
                sessionStorage.setItem("CHADVAS_INPUT_VALUE",self.bridgeVMchadVascInputValue());
            }else{
                self.bridgeVMwhetherAdviceMsg(appConstantsModel.restart_doac_default_advice);
                self.bridgeVMwhenToAdviceMsg(appConstantsModel.restart_doac_default_advice);
                self.bridgeVMwhenToBridgeAdviceSubboxVisible(false);
                self.bridgeVMadviceBoxColor(appConstantsModel.secondary);
                self.bridgeVMadviceBoxColorForWhenToBridge(appConstantsModel.secondary);
            }
        }
        
        /***************** Chads Vasc Wizard Screen ******************/
        /**
         * this function is used to get chad vasc value and display on UI
         */        
        function getChadVascValue(id, name, points, infoTitle, showChadVascInfo) {
            var self = this;
            self.chadVascId = ko.observable(id);
            self.chadVascName = ko.observable(name);
            self.points = ko.observable(points);
            self.infoTitle = ko.observable(infoTitle);
            self.chadVascSelected = ko.observable(true);
            
            
            if(showChadVascInfo == "false") {
                self.showChadVascInfo = ko.observable(false);
            } else {
                self.showChadVascInfo = ko.observable(true);
            }
        }
        
        /**
         * this function is used to select gender as male or female
         */
        this.selectChadVascMaleFemale = function() {
            chadVascGender = self.checkedChadVascGenderOnLoad();
            fetchChadVascGenderPoints();
            if(self.checkedChadVascGenderOnLoad() && self.checkedChadVascAgeOnLoad()){
                enableChadVascResetAndDone(); 
            }
            return true;
        }
        
        /**
         * this function is used to select age
         */
        this.selectChadVascAge = function(){
            chadVascAge = self.checkedChadVascAgeOnLoad();
            fetchChadVascAgePoints();
            if(self.checkedChadVascGenderOnLoad() && self.checkedChadVascAgeOnLoad()){
                enableChadVascResetAndDone(); 
             }
            return true;
        }
        
        /**
         * this function is used to select procedure on toggle
         */
        this.selectChadVascCHFToggleAssociation = function (item) {
            self.showChadVascScore(false);
           
            if (getIndex(storeSelectedChadVascItem,item.chadVascId()) > -1) {
                item.chadVascSelected(false);
                var chadVascIndex = getIndex(storeSelectedChadVascItem,item.chadVascId());
                storeSelectedChadVascItem.splice(chadVascIndex,1);
            } else {
                item.chadVascSelected(true);
                storeSelectedChadVascItem.push(item.chadVascId());
            }
          
            chadVascPointsId = item.chadVascId();
            fetchSelectedChadVascPointsFromTable();
            item.chadVascSelected(!(item.chadVascSelected()));
            return true;
        };
        
        /**
         * this function is used to reset chad vasc wizard
         */
        this.resetChadVascWizard = function() {
            self.disableChadVascClick(null);
            storeSelectedChadVascItem = [];
			self.showChadVascTxtMsg("");
            self.activeChadVascReset(false);
            self.inactiveChadVascReset(true);
            self.inactiveChadVascDone(true);
            self.activeChadVascDone(false);
            self.selectChadVascCHF([]);
            self.checkedChadVascGenderOnLoad(null);
            self.checkedChadVascAgeOnLoad(null);
            self.colorChadVascChange(true);
            self.dontShowChadVascValue(true);
            self.disableBridgeCrclClick(null);
            self.chadsvascLock(false);
            chadsVasc = 0;
            chadsVasc1 = 0;
            chadsVasc2 = 0;
            chadsVasc3 = 0;
            sessionStorage.setItem("CLEAR_CHADVASC","TRUE");
            util.clearSessionTable("CHADVASC_SESSION_DATA");
            self.bridgeVMdisableValueDropDown(false);
            self.bridgeVMchadVascInputValue(undefined);
            self.bridgeVMinputLockChadVas(false);
            self.onchangeCha2dsVas();
            setClearButton();
            return true;
        }
        
        /**
         * this function is used to get the index of array
         */
        function getIndex(array,item){
            for(var i = 0; i < array.length; i++){
               if(String(array[i]) == String(item)){
                   return i;
                   break;
               } 
            }
            return -1;
        }
        
        /**
         * this function is used to enable reset and done button
         */
        function enableChadVascResetAndDone() {
             self.inactiveChadVascDone(false);
             self.activeChadVascDone(true);
             self.inactiveChadVascReset(false);
             self.activeChadVascReset(true);
             
        }
        
        /**
         * this function is used to navigate to bridge page on click of done
         */
        this.doneChadVascWizard = function() {
            saveChadsVascValueInTable();
        }
        
        /**
         * this function is used to navigate to bridge page on click of cancel
         */
        this.cancelChadVascWizard = function(){
            sessionStorage.setItem("goFromBridgeChatVaswizard","yes")
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
            pageArrays.push("bridgePage");
            fetchSavedChadVascData();
        }
        
        /**
         * selectChadVascQuestionsFromTable function
         * selectChadVascQuestionsFromTable is used to select chad vasc questions from table.
         */
        function selectChadVascQuestionsFromTable(){
            fetchChadVascQuestionsFromTable();
        }
        
        /**
         * fetchChadVascQuestionsFromTable function
         * fetchChadVascQuestionsFromTable is used to select all chad vasc questions from table.
         */
        function fetchChadVascQuestionsFromTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("CHADS_VASC_TABLE"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            self.chadsVascQA.push(new getChadVascValue([value.chadsvasc_id],[value.questions], [value.points],[value.info_title],[value.show_info]));
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of questions : " + ex.message);
            }
        }
        
        /**
         * fetchSelectedChadVascPointsFromTable function
         * fetchSelectedChadVascPointsFromTable is used to fetch selected points from chad vasc table.
         */
        function fetchSelectedChadVascPointsFromTable(){
            fetchChadVascRowPointFromTable();
        }
        
        /**
         * fetchChadVascRowPointFromTable function
         * fetchChadVascRowPointFromTable is used to fetch selected row points from chad vasc table.
         */
        function fetchChadVascRowPointFromTable(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("CHADS_VASC_TABLE"));
                if(localData != null && localData != ""){
                    $.each(localData, function(key, value){
                        points = (value.points);
                        getChadVascPointValue(points);
                    });
                }
            } catch(ex){
                console.log("appViewModel() : Error in fetching of points : " + ex.message);
            }
        }
        
        /**
         * fetchChadVascGenderPoints function
         * fetchChadVascGenderPoints is used to fetch gender points from chad vasc gender table.
         */
        function fetchChadVascGenderPoints(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("CHADS_VASC_GENDER_TABLE"));
                var pointsGender;
                var genderID;
                if(chadVascGender == "male" || self.checkedChadVascGenderOnLoad() == "male") {
                    genderID ="1";
                    pointsGender = (localData[0].gender_points);
                } else {
                    genderID = "2";
                    pointsGender = (localData[1].gender_points);
                }
                getChadVascPointsGenderValue(pointsGender);
            } catch(ex){
                console.log("appViewModel() : Error in fetching of gender points : " + ex.message);
            }
        }
        
        /**
         * fetchChadVascAgePoints function
         * fetchChadVascAgePoints is used to fetch age points from chad vasc age table.
         */
        function fetchChadVascAgePoints(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("CHADS_VASC_AGE_TABLE"));
                var pointsAge;
                var ageID;
                if(chadVascAge == "lessThan65" || self.checkedChadVascAgeOnLoad() === "lessThan65" ) {
                    ageID = "1";
                    pointsAge = (localData[0].age_points);
                } else if(chadVascAge == "between65To74" || self.checkedChadVascAgeOnLoad() === "between65To74"){
                    ageID = "2";
                    pointsAge = (localData[1].age_points);
                } else {
                    ageID = "3";
                    pointsAge = (localData[2].age_points);
                }
                getChadVascPointsAgeValue(pointsAge);
            } catch(ex){
                console.log("appViewModel() : Error in fetching of age points : " + ex.message);
            }
        }
        
        /**
         * getChadVascPointValue function
         * getChadVascPointValue is used to get points and calculate score
         */
        function getChadVascPointValue(points) {
            chadsVasc1 = 0;
            for(var i = 0; i<storeSelectedChadVascItem.length; i++){
               chadsVasc1+= chadVascScoreMap[storeSelectedChadVascItem[i]];
            }
            chadsVasc = chadsVasc1 + parseInt(chadsVasc2) + parseInt(chadsVasc3);
            self.colorChadVascChange(false);
            self.dontShowChadVascValue(false);
            self.activeChadVascReset(true);
            self.inactiveChadVascReset(false);
            self.showChadVascTxtMsg(chadsVasc);
            self.showChadVascScore(true);
        }
        
        /**
         * getChadVascPointsGenderValue function
         * getChadVascPointsGenderValue is used to get gender points and calculate score
         */
        function getChadVascPointsGenderValue(pointsGender){
            chadsVasc2 = pointsGender;
            chadsVasc = chadsVasc1 + parseInt(chadsVasc2) + parseInt(chadsVasc3);
            self.colorChadVascChange(false);
            self.dontShowChadVascValue(false);
            self.showChadVascTxtMsg(chadsVasc);
            self.activeChadVascReset(true);
            self.inactiveChadVascReset(false);
        }
        
        /**
         * getChadVascPointsAgeValue function
         * getChadVascPointsAgeValue is used to get age points and calculate score
         */
        function getChadVascPointsAgeValue(pointsAge){
            chadsVasc3 = pointsAge;
            chadsVasc = chadsVasc1 + parseInt(chadsVasc2) + parseInt(chadsVasc3);
            self.colorChadVascChange(false);
            self.dontShowChadVascValue(false);
            self.showChadVascTxtMsg(chadsVasc);
            self.activeChadVascReset(true);
            self.inactiveChadVascReset(false);
        }
        
        /**
         * saveChadsVascValueInTable function
         * saveChadsVascValueInTable is used to save chads vasc data in session table.
         */
        function saveChadsVascValueInTable(){
            insertChadsVascDataIntoSessionTable();
        }
        
        /**
         * insertChadsVascDataIntoSessionTable function
         * insertChadsVascDataIntoSessionTable is used to insert chads vasc value in session table.
         */
        function insertChadsVascDataIntoSessionTable(){
            try {
                if(!chadsVascSelectedValueFlag){
                    var sessionColumnData = [{ chad_vasc_value_id: "1", chadsVasc_value: self.showChadVascTxtMsg(), selected_item: self.selectChadVascCHF(), selected_gender: self.checkedChadVascGenderOnLoad(), selected_age: self.checkedChadVascAgeOnLoad(),item_array:storeSelectedChadVascItem }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("CHADVASC_SESSION_DATA", dataToStore);
                    if( sessionStorage.getItem("CRCL_SESSION_DATA") != null){
                        if(self.checkedChadVascGenderOnLoad() != undefined && self.checkedChadVascAgeOnLoad() != undefined){
                            var sessionColumnDataCrcl = [{ crcl_id: "1", crcl_value: self.bridgeCrclVMCrClValue(), crcl_gender: self.checkedChadVascGenderOnLoad(), crcl_age: self.bridgeCrclVMageInYears(), crcl_weight: self.bridgeCrclVMweightInLbs(), crcl_serum: self.bridgeCrclVMserumCr(), crcl_unit: self.bridgeCrclVMCrClUnits(), crcl_bridge_wizard_type: "1"  }];
                            var dataToStoreCrcl = JSON.stringify(sessionColumnDataCrcl);
                            sessionStorage.setItem("CRCL_SESSION_DATA", dataToStoreCrcl);
                        }
                    }
                    chadsVascSelectedValueFlag = true;
                    sessionStorage.setItem("CHADVASC_SELECTED", "true");
                    sessionStorage.setItem("goFromBridgeChatVaswizard","yes");
                    sessionStorage.setItem("DESTINATION", "BRIDGE");
                    self.chadsvascLock(true);
                    pager.navigate("#!/bridgePage");
                    pageArrays.push("bridgePage");
                    self.bridgeVMchadVascInputValue(self.showChadVascTxtMsg());
                    self.bridgeVMdisableValueDropDown(true);
                    self.bridgeVMinputLockChadVas(true);
                } else {
                    updateChadsVascDataIntoSessionTable();
                }
            } catch(ex){
                console.log("appViewModel() : Error in insertion of chad vasc data in session table: " + ex.message);
            }
        }
        
        /**
         * updateChadsVascDataIntoSessionTable function
         * updateChadsVascDataIntoSessionTable is used to update chads vasc data in session table.
         */
        function updateChadsVascDataIntoSessionTable(){
            try {
                var sessionColumnData = [{ chad_vasc_value_id: "1", chadsVasc_value: self.showChadVascTxtMsg(), selected_item: self.selectChadVascCHF(), selected_gender: self.checkedChadVascGenderOnLoad(), selected_age: self.checkedChadVascAgeOnLoad(),item_array:storeSelectedChadVascItem }];
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("CHADVASC_SESSION_DATA", dataToStore);
                if( sessionStorage.getItem("CRCL_SESSION_DATA") != null){
                        if(self.checkedChadVascGenderOnLoad() != undefined && self.checkedChadVascAgeOnLoad() != undefined){
                            var sessionColumnDataCrcl = [{ crcl_id: "1", crcl_value: self.bridgeCrclVMCrClValue(), crcl_gender: self.checkedChadVascGenderOnLoad(), crcl_age: self.bridgeCrclVMageInYears(), crcl_weight: self.bridgeCrclVMweightInLbs(), crcl_serum: self.bridgeCrclVMserumCr(), crcl_unit: self.bridgeCrclVMCrClUnits(), crcl_bridge_wizard_type: "1"  }];
                            var dataToStoreCrcl = JSON.stringify(sessionColumnDataCrcl);
                            sessionStorage.setItem("CRCL_SESSION_DATA", dataToStoreCrcl);
                        }
                    }
                sessionStorage.setItem("goFromBridgeChatVaswizard","yes");
                sessionStorage.setItem("DESTINATION", "BRIDGE");
                self.chadsvascLock(true);
                pager.navigate("#!/bridgePage");
                pageArrays.push("bridgePage");
                self.bridgeVMchadVascInputValue(self.showChadVascTxtMsg());
                self.bridgeVMdisableValueDropDown(true);
                self.bridgeVMinputLockChadVas(true);
            } catch(ex){
                console.log("appViewModel() : Error in updation of chad vasc data in session table: " + ex.message);
            }
        }
        
        /**
         * fetchSavedDataFromCrClTableOnChadVasc function
         * fetchSavedDataFromCrClTableOnChadVasc is used fetch the value of age and gender from crcl on chad vasc wizard.
         */
        function fetchSavedDataFromCrClTableOnChadVasc(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("CRCL_SESSION_DATA"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){ 
                            if(value.crcl_bridge_wizard_type == "1"){
	                            self.disableChadVascClick("disabled");
	                            self.checkedChadVascGenderOnLoad(value.crcl_gender);
	                            fetchChadVascGenderPoints();
	                            chadVascAge = (value.crcl_age);
	                            if(chadVascAge < 65) {
	                                self.checkedChadVascAgeOnLoad("lessThan65");
	                                fetchChadVascAgePoints();
	                            } else if(chadVascAge>= 65 && chadVascAge<= 74) {
	                                self.checkedChadVascAgeOnLoad("between65To74");
	                                fetchChadVascAgePoints();
	                            } else if(chadVascAge>74) {
	                                self.checkedChadVascAgeOnLoad("greaterThan74");
	                                fetchChadVascAgePoints();
	                            }
	                            chadsVasc = chadsVasc1 + parseInt(chadsVasc2) + parseInt(chadsVasc3);
	                            enableChadVascResetAndDone();
	                            }
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of crcl value on chad vasc wizard : " + ex.message);
            }
        }
        
        /**
         * fetchSavedChadVascDataOnChadVascScreen function
         * fetchSavedChadVascDataOnChadVascScreen is used to fetch saved chad vasc data from session table.
         */
        function fetchSavedChadVascDataOnChadVascScreen(){
            try {
                setTimeout(function() {
                    var data = sessionStorage.getItem("CHADVASC_SESSION_DATA");
                    if(data) {
                        var localData = JSON.parse(data);
                        if(localData != null && localData != "") {
                            $.each(localData, function(key, value) {
                                chadVascValue = ([value.chadsVasc_value]);
                                previouslySelectedChadVascItems = ([value.selected_item]);
                                self.checkedChadVascGenderOnLoad(value.selected_gender);
                                fetchChadVascGenderPoints();
                                self.checkedChadVascAgeOnLoad(value.selected_age);
                                fetchChadVascAgePoints();
                                chadsVasc = chadsVasc1 + parseInt(chadsVasc2) + parseInt(chadsVasc3);
                                updateChadVascWizardView();
                                enableChadVascResetAndDone();
                            });
                        }
                    } else {
                        self.resetChadVascWizard();
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of chad vasc value : " + ex.message);
            }
        }
        
        /**
         * updateChadVascWizardView function
         * updateChadVascWizardView is used to update chad vasc wizard view
         */
        function updateChadVascWizardView() {
            self.selectChadVascCHF(previouslySelectedChadVascItems[0]);
            
            if(chadVascValue != "") {
                self.dontShowChadVascValue(false);
                self.showChadVascTxtMsg(chadVascValue);
            } else {
                self.showChadVascTxtMsg("");
                self.dontShowChadVascValue(true);
            }

            if(previouslySelectedChadVascItems[0] != "") {
                self.activeChadVascReset(true);
                self.inactiveChadVascReset(false);
            } else {
                self.activeChadVascReset(false);
                self.inactiveChadVascReset(true);
            }
        }
       
        /********** Bridge Crcl Functionality **************/
        
         /**
         * this function is for selecting male or female option
         */
        this.bridgeCrclVMselectYesNo = function(){
            self.bridgeCrclVMactiveReset(true);
            self.bridgeCrclVMinactiveReset(false);
            bridgeCrclVMtoActiveDoneButton();
            if(self.bridgeCrclVMcheckedOnLoad()=="male")
                self.bridgeCrclVMgender(1);
            else
                self.bridgeCrclVMgender(0.85);
            self.bridgeCrclVMcomputeDone();
            return true;
        }
        
        /**
         * this function is for closing all warning message
         */
        function bridgeCrclVMtoCloseALLWarningMessage(){
            self.bridgeCrclVMshouldShowSrErrorMessage(false);
            self.bridgeCrclVMshouldShowAgeErrorMessage(false);
            self.bridgeCrclVMshouldShowWtErrorMessage(false);
            self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(false);
            self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(false);
        }
        
         /**
         * this function is to activate DONE button
         */
        function bridgeCrclVMtoActiveDoneButton(){
            if(self.bridgeCrclVMageInYears() != undefined && self.bridgeCrclVMweightInLbs() != undefined && self.bridgeCrclVMserumCr() != undefined && self.bridgeCrclVMageInYears() != "" && self.bridgeCrclVMweightInLbs() != "" && self.bridgeCrclVMserumCr() != "" && (self.bridgeCrclVMcheckedOnLoad() != null)){
                self.bridgeCrclVMinactiveDone(false);
                self.bridgeCrclVMactiveDone(true);
            }else{
                self.bridgeCrclVMinactiveDone(true);
                self.bridgeCrclVMactiveDone(false);
            }
        }
        
         /**
         * this function is to validate age field
         */
        this.bridgeCrclVMageValidation = function() {
            if(self.bridgeCrclVMageInYears() != ""){
               var crclBridgeValue = bridgeCrclVMgetRoundedValue(self.bridgeCrclVMageInYears());
            }
                if(self.bridgeCrclVMageInYears()>=18){
                     if(self.bridgeCrclVMageInYears()>140){
                         if(self.bridgeCrclVMageInYears() < 140.5){
                             self.bridgeCrclVMageInYears(undefined);
                             self.bridgeCrclVMshouldShowAgeErrorMessage(false);
                             bridgeCrclVMcrclVal= -1;
                             activeResetButtonCRCLBridge();
                         } else {
                             self.bridgeCrclVMageInYears(crclBridgeValue);
                                if( isNaN(self.bridgeCrclVMageInYears()) ){
                                    bridgeCrclVMcrclVal= -1;
                                    self.bridgeCrclVMshouldShowAgeErrorMessage(true);
                                    self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(true);
                                    self.bridgeCrclVMageInYears("");
                                    self.bridgeCrclVMdontShowValue(true);
                                    self.bridgeCrclVMshowValue(false);
                                    activeResetButtonCRCLBridge();
                                 }else{
                                    bridgeCrclVMcrclVal= -1;
                                    self.bridgeCrclVMshouldShowAgeErrorMessage(true);
                                    self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(false);
                                    self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(true);
                                    self.bridgeCrclVMdontShowValue(true);
                                    self.bridgeCrclVMshowValue(false);
                                    self.bridgeCrclVMageInYears("");
                                    activeResetButtonCRCLBridge();
                                 }
                         }
                    }else{
                         self.bridgeCrclVMageInYears(crclBridgeValue);
                         self.bridgeCrclVMshouldShowAgeErrorMessage(false);
                         self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(true);
                         self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(false);
                         self.bridgeCrclVMdontShowValue(true);
                         self.bridgeCrclVMshowValue(false);
                         activeResetButtonCRCLBridge();
                    }
                }else{
                        if(self.bridgeCrclVMageInYears() >= 17.5){
                            self.bridgeCrclVMageInYears(undefined);
                            self.bridgeCrclVMshouldShowAgeErrorMessage(false);
                        }else{
                            self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(true);
                            self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(false);
                            self.bridgeCrclVMshouldShowAgeErrorMessage(true);
                            self.bridgeCrclVMageInYears("");
                            self.bridgeCrclVMdontShowValue(true);
                            self.bridgeCrclVMshowValue(false);
                        }
                    bridgeCrclVMcrclVal= -1;
                    activeResetButtonCRCLBridge();
                    
                 }
            self.bridgeCrclVMcomputeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after age validation
         */
        this.bridgeCrclVMactiveDoneForAge = function() {
            self.bridgeCrclVMactiveReset(true);
            self.bridgeCrclVMinactiveReset(false);
            if(self.bridgeCrclVMageInYears() == ""){
                if(self.bridgeCrclVMweightInLbs() == ""){
                    if(self.bridgeCrclVMserumCr() == ""){
                        if(self.bridgeCrclVMcheckedOnLoad() == null){
                            self.bridgeCrclVMactiveReset(false);
                            self.bridgeCrclVMinactiveReset(true);
                        }
                    }
                }
            }
            
            bridgeCrclVMtoActiveDoneButton();
        }
        
        /**
         * this function is to validate weight field
         */
        this.bridgeCrclVMweightValidation = function() {
            
                if (bridgeCrclVMvalidateSuccess){
                    if(self.bridgeCrclVMweightInLbs()<4.5 || self.bridgeCrclVMweightInLbs()>453 || isNaN(self.bridgeCrclVMweightInLbs())) {
                            bridgeCrclVMcrclVal= -1;
                            self.bridgeCrclVMshouldShowWtErrorMessage(true);
                            self.bridgeCrclVMshowSiMsg(true);
                            self.bridgeCrclVMshowUsMsg(false);
                            self.bridgeCrclVMweightInLbs("");
                            self.bridgeCrclVMdontShowValue(true);
                            self.bridgeCrclVMshowValue(false);
                         activeResetButtonCRCLBridge();
                        
                    }else{
                        self.bridgeCrclVMshouldShowWtErrorMessage(false);
                    }
        
                }else{
                    if(self.bridgeCrclVMweightInLbs()<10 || self.bridgeCrclVMweightInLbs()>999 || isNaN(self.bridgeCrclVMweightInLbs())){
                        bridgeCrclVMcrclVal= -1;
                        self.bridgeCrclVMshouldShowWtErrorMessage(true);
                        self.bridgeCrclVMshowSiMsg(false);
                        self.bridgeCrclVMshowUsMsg(true);
                        self.bridgeCrclVMweightInLbs("");
                        self.bridgeCrclVMdontShowValue(true);
                        self.bridgeCrclVMshowValue(false);
                         activeResetButtonCRCLBridge();
                    }else{
                        self.bridgeCrclVMshouldShowWtErrorMessage(false);
                    }
                }
          self.bridgeCrclVMcomputeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after weight validation
         */
        this.bridgeCrclVMactiveDoneForWeight = function() {
            self.bridgeCrclVMactiveReset(true);
            self.bridgeCrclVMinactiveReset(false);
            if(self.bridgeCrclVMweightInLbs() == ""){
                if(self.bridgeCrclVMageInYears() == ""){
                    if(self.bridgeCrclVMserumCr() == ""){
                        if(self.bridgeCrclVMcheckedOnLoad() == null){
                            self.bridgeCrclVMactiveReset(false);
                            self.bridgeCrclVMinactiveReset(true);
                        }
                    }
                }
            }
           
            bridgeCrclVMtoActiveDoneButton();
        }
         
        /**
         * this function is to validate Serum field
         */
        this.bridgeCrclVMscrValidation = function() {
            if (bridgeCrclVMvalidateSuccess){
                if(self.bridgeCrclVMserumCr()<8.8 || self.bridgeCrclVMserumCr()>9989.2 || isNaN(self.bridgeCrclVMserumCr())){
                    bridgeCrclVMcrclVal= -1;
                    self.bridgeCrclVMshouldShowSrErrorMessage(true);
                    self.bridgeCrclVMserumCr("");
                    self.bridgeCrclVMdontShowValue(true);
                    self.bridgeCrclVMshowValue(false);
                     activeResetButtonCRCLBridge();
                }else{
                    self.bridgeCrclVMshouldShowSrErrorMessage(false);
                }
            }else{
                if( self.bridgeCrclVMserumCr()<0.1 || self.bridgeCrclVMserumCr()>113 || isNaN(self.bridgeCrclVMserumCr())){
                    bridgeCrclVMcrclVal= -1;
                    self.bridgeCrclVMshouldShowSrErrorMessage(true);
                    self.bridgeCrclVMserumCr("");
                    self.bridgeCrclVMdontShowValue(true);
                    self.bridgeCrclVMshowValue(false);
                     activeResetButtonCRCLBridge();
                }else{
                     self.bridgeCrclVMshouldShowSrErrorMessage(false);
                } 
            }
             self.bridgeCrclVMcomputeDone();
        }
        
        /**
         * this function is to activate DONE and CLEAR PAGE button after serum validation
         */
        this.bridgeCrclVMactiveDoneForScr = function() {
            self.bridgeCrclVMactiveReset(true);
            self.bridgeCrclVMinactiveReset(false);
            if(self.bridgeCrclVMserumCr() == ""){
                if(self.bridgeCrclVMageInYears() == ""){
                    if(self.bridgeCrclVMweightInLbs() == ""){
                        if(self.bridgeCrclVMcheckedOnLoad() == null){
                            self.bridgeCrclVMactiveReset(false);
                            self.bridgeCrclVMinactiveReset(true);
                        }
                    }
                }
            }
            bridgeCrclVMtoActiveDoneButton();
        }

        function activeResetButtonCRCLBridge(){
             if((self.bridgeCrclVMweightInLbs() == "" || self.bridgeCrclVMweightInLbs() == undefined) && (self.bridgeCrclVMserumCr() == "" || self.bridgeCrclVMserumCr() == undefined) && (self.bridgeCrclVMageInYears() == "" || self.bridgeCrclVMageInYears() == undefined) && (self.bridgeCrclVMgender() == "0" || self.bridgeCrclVMgender() == undefined)){
                self.bridgeCrclVMactiveReset(false);
                self.bridgeCrclVMinactiveReset(true);
            }
         }
        
        /**
         * this function is used to reset page 
         */
        this.bridgeCrclVMresetPage = function(){
            
            self.bridgeCrclVMageInYears("");
            self.bridgeCrclVMweightInLbs("");
            self.bridgeCrclVMserumCr("");
            self.bridgeCrclVMgender(0);
            self.bridgeCrclVMactiveReset(false);
            self.bridgeCrclVMinactiveReset(true);
            self.bridgeCrclVMinactiveDone(true);
            self.bridgeCrclVMactiveDone(false);
            self.bridgeCrclVMresetGender();
            self.bridgeCrclVMcheckedOnLoad(null);
            self.bridgeCrclVMCrClValue("");
            self.bridgeCrclVMshowValue(true);
            self.bridgeCrclVMdontShowValue(false);
            self.bridgeCrclVMdontShowValue(true);
            self.bridgeCrclVMshowValue(false);
            self.bridgeCrclVMshouldShowSrErrorMessage(false);
            self.bridgeCrclVMshouldShowAgeErrorMessage(false);
            self.bridgeCrclVMshouldShowWtErrorMessage(false);
            self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(false);
            self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(false);
            self.disableBridgeCrclClick(null);
            self.bridgeCrclVMCrClUnits(false);
            self.bridgeVMcheckedUFH(null);
            self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
           
            if(self.interruptCrclInputValue == undefined || self.interruptCrclInputValue()== ""){
                util.clearSessionTable("CRCL_SESSION_DATA");
                self.bridgeVMcrclCheckVal(null);
            }
            
        }
        
        /**
         * this function is used for clicking crclunit switch button
         * on selecting crclunit, weight and scr value is changed
         */
        self.bridgeCrclVMCrClUnits.subscribe(function (newValue) {

            if((self.bridgeCrclVMweightInLbs() == "" || self.bridgeCrclVMweightInLbs() == undefined) && (self.bridgeCrclVMserumCr() == "" || self.bridgeCrclVMserumCr() == undefined) && (self.bridgeCrclVMageInYears() == "" || self.bridgeCrclVMageInYears() == undefined) && (self.bridgeCrclVMgender() == "0" || self.bridgeCrclVMgender() == undefined)){
                self.bridgeCrclVMactiveReset(false);
                self.bridgeCrclVMinactiveReset(true);
                self.bridgeCrclVMshouldShowAgeErrorMessage(false);
                self.bridgeCrclVMshouldShowWtErrorMessage(false);
                self.bridgeCrclVMshouldShowSrErrorMessage(false);
            }
             
           
            if(bridgeCrclVMfirstTimeLoadingFlag != true){
                if(self.bridgeCrclVMCrClUnits()){
                    bridgeCrclVMvalidateSuccess = true;
                    bridgeCrclVMtoCloseALLWarningMessage();
                    self.bridgeCrclweightScrVisibiltyUS(false);
                    self.bridgeCrclVMweightScrVisibiltySI(true);

                    if(self.bridgeCrclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) * 0.453592).toFixed(2))){
                                self.bridgeCrclVMweightInLbs( parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) * 0.453592).toFixed(2));
                            }
                    }
                    if(self.bridgeCrclVMserumCr() !== undefined){
                             if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMserumCr()) * 88.4).toFixed(2))){
                                self.bridgeCrclVMserumCr( parseFloat(parseFloat(self.bridgeCrclVMserumCr()) * 88.4).toFixed(2));
                             }
                    }

                }else{
                    bridgeCrclVMvalidateSuccess = false;
                     bridgeCrclVMtoCloseALLWarningMessage();
                    self.bridgeCrclweightScrVisibiltyUS(true);
                    self.bridgeCrclVMweightScrVisibiltySI(false);
                    if(self.bridgeCrclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) / 0.453592).toFixed(2))){
                                self.bridgeCrclVMweightInLbs( parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) / 0.453592).toFixed(2));
                            }
                    }
                    if(self.bridgeCrclVMserumCr() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMserumCr()) / 88.4).toFixed(2))){
                                self.bridgeCrclVMserumCr( parseFloat(parseFloat(self.bridgeCrclVMserumCr()) / 88.4).toFixed(2));
                            }
                    }
                }
            }else{
                if(self.bridgeCrclVMCrClUnits()){
                    bridgeCrclVMvalidateSuccess = true;
                     self.bridgeCrclweightScrVisibiltyUS(false);
                    self.bridgeCrclVMweightScrVisibiltySI(true);
                    if(self.bridgeCrclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) * 0.453592).toFixed(2))){
                                self.bridgeCrclVMweightInLbs( parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) * 0.453592).toFixed(2));
                            }
                    }
                    if(self.bridgeCrclVMserumCr() !== undefined){
                             if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMserumCr()) * 88.4).toFixed(2))){
                                self.bridgeCrclVMserumCr( parseFloat(parseFloat(self.bridgeCrclVMserumCr()) * 88.4).toFixed(2));
                             }
                    }
                }else{
                    bridgeCrclVMvalidateSuccess = false;
                    self.bridgeCrclweightScrVisibiltyUS(true);
                    self.bridgeCrclVMweightScrVisibiltySI(false);
                    if(self.bridgeCrclVMweightInLbs() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) / 0.453592).toFixed(2))){
                                self.bridgeCrclVMweightInLbs( parseFloat(parseFloat(self.bridgeCrclVMweightInLbs()) / 0.453592).toFixed(2));
                            }
                    }
                    if(self.bridgeCrclVMserumCr() !== undefined){
                            if(!isNaN(parseFloat(parseFloat(self.bridgeCrclVMserumCr()) / 88.4).toFixed(2))){
                                self.bridgeCrclVMserumCr( parseFloat(parseFloat(self.bridgeCrclVMserumCr()) / 88.4).toFixed(2));
                            }
                    }
                }
            
            }
               
            
            
            
            bridgeCrclVMfirstTimeLoadingFlag = false;
        });

        /**
         * this function is used to calculate CrCl
         */

        this.bridgeCrclVMcomputeDone = function(){
             bridgeCrclVMtoActiveDoneButton();
            if(self.bridgeCrclVMageInYears() != ""){
               	if(!isNaN(self.bridgeCrclVMageInYears())){
					self.bridgeCrclVMageInYears(bridgeCrclVMgetRoundedValue(self.bridgeCrclVMageInYears()));
				}
            }
                    if (self.bridgeCrclVMgender()) {
                        bridgeCrclVMgenderModifier = parseFloat(self.bridgeCrclVMgender());
                    }
            
                    if (self.bridgeCrclVMageInYears() !== undefined && self.bridgeCrclVMweightInLbs() !== undefined && self.bridgeCrclVMserumCr() !== undefined && self.bridgeCrclVMgender() !== undefined && self.bridgeCrclVMgender() > 0 && self.bridgeCrclVMageInYears() !== '' && self.bridgeCrclVMserumCr() !== '' && self.bridgeCrclVMweightInLbs() !== '') {
                            if (bridgeCrclVMvalidateSuccess) {
                                 bridgeCrclVMcrclVal= Math.round((((140 - parseFloat(self.bridgeCrclVMageInYears())) * (parseFloat(self.bridgeCrclVMweightInLbs())) * bridgeCrclVMgenderModifier) / (72 * (parseFloat(parseFloat(self.bridgeCrclVMserumCr()) / 88.4)))) * 100) / 100;
                                
                            }else {
                                bridgeCrclVMcrclVal= Math.round(((140 - parseFloat(self.bridgeCrclVMageInYears())) * (parseFloat(self.bridgeCrclVMweightInLbs()) * 0.453592) * bridgeCrclVMgenderModifier) / (72 * parseFloat(self.bridgeCrclVMserumCr())) * 100) / 100;
                            }
                        if (bridgeCrclVMcrclVal>= 0) {
                            self.bridgeCrclVMdontShowValue(false);
                            self.bridgeCrclVMshowValue(true);
                            self.bridgeCrclVMCrClValue(bridgeCrclVMcrclVal.toFixed(1));
                        } else{
                            self.bridgeCrclVMdontShowValue(true);
                            self.bridgeCrclVMshowValue(false);
                        }
                    }
            }

        /**
         * this function is used to navigate to interrupt page
         */
        this.bridgeCrclVMsaveDone = function(){
            bridgeCrclVMsaveCrclValueInTable();
            
        }
        
        /**
         * this function is used to navigate to interrupt page
         */
        this.bridgeCrclVMcancel = function(){
            sessionStorage.setItem("goFromBridgeCrclwizard","yes");
            sessionStorage.setItem("goFromBridgeChatVaswizard","yes");
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
            pageArrays.push("bridgePage");
            bridgeCrclfetchSavedDataFromCrClTable();
        }

   

        /*
        * bridgeCrclVMsaveCrclValueInTable function
        * bridgeCrclVMsaveCrclValueInTable is used to save crcl value in session table.
        */
        function bridgeCrclVMsaveCrclValueInTable(){
          bridgeCrclVMinsertCrclDataIntoSessionTable();  
        }

        /*
        * bridgeCrclVMinsertCrclDataIntoSessionTable function
        * bridgeCrclVMinsertCrclDataIntoSessionTable is used to insert data into crcl session table.
        */
        function bridgeCrclVMinsertCrclDataIntoSessionTable(){
                        var sessionColumnData = [{ crcl_id: "1", crcl_value: self.bridgeCrclVMCrClValue(), crcl_gender: self.bridgeCrclVMcheckedOnLoad(), crcl_age: self.bridgeCrclVMageInYears(), crcl_weight: self.bridgeCrclVMweightInLbs(), crcl_serum: self.bridgeCrclVMserumCr(), crcl_unit: self.bridgeCrclVMCrClUnits(), crcl_bridge_wizard_type: "1"  }];
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("CRCL_SESSION_DATA", dataToStore);
                        if(sessionStorage.getItem("CHADVASC_SESSION_DATA") != null){
                            if(self.bridgeCrclVMcheckedOnLoad() != undefined && self.bridgeCrclVMageInYears() != undefined){
                                var sessionColumnDataChadvasc = [{ chad_vasc_value_id: "1", chadsVasc_value: self.showChadVascTxtMsg(), selected_item: self.selectChadVascCHF(), selected_gender: self.bridgeCrclVMcheckedOnLoad(), selected_age: self.checkedChadVascAgeOnLoad(),item_array:storeSelectedChadVascItem }];
                                        var dataToStoreChadVasc = JSON.stringify(sessionColumnDataChadvasc);
                                        sessionStorage.setItem("CHADVASC_SESSION_DATA", dataToStoreChadVasc);
                            }
                        }
                        bridgeCrclVMcrclSelectedValueFlag  = true;
						sessionStorage.setItem("goFromBridgeCrclwizard","yes");
                        sessionStorage.setItem("CRCL_SELECTED", "true");
                        bridgeCrclVMsetCrclInBridge();
                        sessionStorage.setItem("DESTINATION", "BRIDGE");
                        pager.navigate("#!/bridgePage");
                        pageArrays.push("bridgePage");
        }
        /*
        * bridgeCrclVMsetCrclInBridge function
        * bridgeCrclVMsetCrclInBridge is used to set crcl value in bridge page.
        */
        function bridgeCrclVMsetCrclInBridge(){
            if(parseFloat(self.bridgeCrclVMCrClValue()) >= 30){
                 self.bridgeVMcrclCheckVal("Yes");
                 self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(true);
                 sessionStorage.setItem("crclCheckVal",self.bridgeCrclVMCrClValue());
                 self.bridgeVMdisableClearBtn(false);
                 self.bridgeVMaddClassWhenDisabled(false); 
            }else{
                 self.bridgeVMcrclCheckVal("No");
                 self.bridgeVMcheckedUFH(undefined);
                 self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(false);
                 calculateWhenToBridge();
                 self.bridgeVMdisableClearBtn(false); 
                 self.bridgeVMaddClassWhenDisabled(false); 
                 sessionStorage.setItem("crclCheckVal",self.bridgeCrclVMCrClValue());
            }
        }
       
        /*
        * This function is used to rounding off the age
        */
        function bridgeCrclVMgetRoundedValue(value) {
            return Math.round(value);
        }
        
        /*
        * bridgeCrclfetchSavedDataFromCrClTable function
        * bridgeCrclfetchSavedDataFromCrClTable is used fetch the value of age and gender from crcl.
        */ 
        function bridgeCrclfetchSavedDataFromCrClTable(){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("CRCL_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData !=null && localData !=""){
                            $.each(localData, function(key, value){
                                try{
                                    
                                    var bridgeCrclgender = (value.crcl_gender);
                                    var bridgeCrclage = (value.crcl_age);
                                    var bridgeCrclweight = (value.crcl_weight);
                                    var bridgeCrclserum = (value.crcl_serum);
                                    var bridgeCrclcrclValue = (value.crcl_value);
                                    var bridgeCrclcrclUnits = (value.crcl_unit);
                                    var bridgeCrclWizardType = (value.crcl_bridge_wizard_type);
                                     updateBridgeCrclWizardView(bridgeCrclgender,bridgeCrclage,bridgeCrclweight,bridgeCrclserum,bridgeCrclcrclValue,bridgeCrclcrclUnits,bridgeCrclWizardType);
                                }catch(ex){
                                    bridgeCrclVMfirstTimeLoadingFlag = false;
                                    console.log("CAtch Entered" + ex.message);
                                }
                            });
                        }
                    }else{
                        self.bridgeCrclVMresetPage();
                    }
                },10);
            } catch(ex){
            console.log("CRCLBridgeViewModel() : Error in getting the values : " + ex.message);
            }
        }
        
        function updateBridgeCrclWizardView(bridgeCrclgender,bridgeCrclage,bridgeCrclweight,bridgeCrclserum,bridgeCrclcrclValue,bridgeCrclcrclUnits,bridgeCrclWizardType) {
            if(bridgeCrclWizardType == 1) {
                
                self.bridgeCrclVMageInYears(bridgeCrclage);
                self.bridgeCrclVMweightInLbs(bridgeCrclweight);
                self.bridgeCrclVMserumCr(bridgeCrclserum);
                self.bridgeCrclVMCrClValue(bridgeCrclcrclValue);
                self.bridgeCrclVMdontShowValue(false);
                self.bridgeCrclVMshowValue(true);
                self.bridgeCrclVMactiveReset(true);
                self.bridgeCrclVMinactiveReset(false);
                if(bridgeCrclcrclUnits == true){
                   self.bridgeCrclVMCrClUnits(true);
                }else{
                    bridgeCrclVMfirstTimeLoadingFlag = false;  
                    self.bridgeCrclVMCrClUnits(false);
                }
                if(bridgeCrclgender == "male"){
                    self.bridgeCrclVMcheckedOnLoad("male");
                    self.bridgeCrclVMgender(1);
                }else if (bridgeCrclgender == "female"){                                                    //document.getElementById("femaleBridge").checked = true;
                    self.bridgeCrclVMcheckedOnLoad("female");
                    self.bridgeCrclVMgender(0.85);
                }
                sessionStorage.setItem("goFromWizad",false);
                bridgeCrclVMtoActiveDoneButton();
            } else {
                self.bridgeCrclVMageInYears("");
                self.bridgeCrclVMweightInLbs("");
                self.bridgeCrclVMserumCr("");
                self.bridgeCrclVMgender(0);
                self.bridgeCrclVMactiveReset(false);
                self.bridgeCrclVMinactiveReset(true);
                self.bridgeCrclVMinactiveDone(true);
                self.bridgeCrclVMactiveDone(false);
                self.bridgeCrclVMresetGender();
                self.bridgeCrclVMcheckedOnLoad(null);
                self.bridgeCrclVMCrClValue("");
                self.bridgeCrclVMshowValue(true);
                self.bridgeCrclVMdontShowValue(false);
                self.bridgeCrclVMdontShowValue(true);
                self.bridgeCrclVMshowValue(false);
                self.bridgeCrclVMshouldShowSrErrorMessage(false);
                self.bridgeCrclVMshouldShowAgeErrorMessage(false);
                self.bridgeCrclVMshouldShowWtErrorMessage(false);
                self.bridgeCrclVMshouldShow_Above140_AgeErrorMessage(false);
                self.bridgeCrclVMshouldShow_below18_AgeErrorMessage(false);
            }
        }
        
        /*
        * bridgeCrclfetchSavedDataFromChadVascSessionTable  function
        * bridgeCrclfetchSavedDataFromChadVascSessionTable  is used to fetch saved chad vasc data from session table.
        */
        function bridgeCrclfetchSavedDataFromChadVascSessionTable (){
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("CHADVASC_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData !=null && localData !=""){
                            self.disableBridgeCrclClick("disabled");
                            $.each(localData, function(key, value){
                              var   genders = value.selected_gender;
                                if(genders == "male"){
                                    self.bridgeCrclVMcheckedOnLoad("male");
                                    self.bridgeCrclVMgender(1);
                                    self.bridgeCrclVMactiveReset(true);
                                    self.bridgeCrclVMinactiveReset(false);
                                }else{
                                    self.bridgeCrclVMcheckedOnLoad("female");
                                    self.bridgeCrclVMgender(0.85);
                                    self.bridgeCrclVMactiveReset(true);
                                    self.bridgeCrclVMinactiveReset(false);
                                }
                            });
                        }
                    }
                },20);
            } catch(ex){
                console.log("CHADsVAScWizardModel() : Error in selection of chad vasc value : " + ex.message);
            }
        }
        
        /* end bridge crcl */
        
        /***************** Restart Warfarin Screen ******************/
        
        insertRestartWarfarinYesNoInSession();
        
        var restartWarfarinAdviceValue = sessionStorage.getItem("DESTINATION_FROM");
        if(restartWarfarinAdviceValue == appConstantsModel.ADVICE_WARFARIN){
            selectRestartStoredDataFromTableOnWarfarin();
            sessionStorage.setItem("DESTINATION_FROM","");
        }
        
        var restartWarfarinLockedValue = sessionStorage.getItem("LOCKED-VALUE");
        if(restartWarfarinLockedValue == appConstantsModel.NO){
            selectRestartStoredDataFromTableOnWarfarin();
            sessionStorage.setItem("UNLOCKED-VALUE","NO");
        }
        
        var restartWarfarinUnlockedValue = sessionStorage.getItem("UNLOCKED-VALUE");
        if(restartWarfarinUnlockedValue == appConstantsModel.YES){
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            sessionStorage.setItem("UNLOCKED-VALUE","NO");
        }
        
        /**
         * getRestartWarfarinValue function
         * getRestartWarfarinValue is used to get restart warfarin questions values.
         */
        function getRestartWarfarinValue(id, questions, restart_info_title, restart_show_info) {
            var self = this;
            self.restartWarfarinId = ko.observable(id);
            self.restartWarfarinName = ko.observable(questions);
            self.restart_warfarin_info_title = ko.observable(restart_info_title);
            self.restartWarfarinSelected = ko.observable(true);
            
            if(restart_show_info == "false") {
                self.restart_warfarin_show_info = ko.observable(false);
            } else {
                self.restart_warfarin_show_info = ko.observable(true);
            }
        }
        
        /**
         * restartWarfarinProcedureQuestionYes function
         * restartWarfarinProcedureQuestionYes is used to update yes as restart warfarin question's answer.
         */
        this.restartWarfarinProcedureQuestionYes = function (item) {
            self.inactiveRestartWarfarinReset(false);
            self.activeRestartWarfarinReset(true);
            updateRestartWarfarinYesIntoTable();
            return true;
        };
        
        /**
         * restartWarfarinProcedureQuestionNo function
         * restartWarfarinProcedureQuestionNo is used to update no as restart warfarin question's answer.
         */
        this.restartWarfarinProcedureQuestionNo = function(){
            self.inactiveRestartWarfarinReset(false);
            self.activeRestartWarfarinReset(true);
            updateRestartWarfarinNoIntoTable();
            return true;
        };
        
        /**
         * selectRestartWarfarinCompleteHemostasis function
         * selectRestartWarfarinCompleteHemostasis is used to select restart complete hemostasis
         */
        this.selectRestartWarfarinCompleteHemostasis = function() {
            self.inactiveRestartWarfarinReset(false);
            self.activeRestartWarfarinReset(true);
            insertSelectedDataInSessionRestartWarfarin();
            return true;
        }
        
        /**
         * selectPostProceduralRestartWarfarin function
         * selectPostProceduralRestartWarfarin is used to select restart post procedural
         */
        this.selectPostProceduralRestartWarfarin = function() {
            self.inactiveRestartWarfarinReset(false);
            self.activeRestartWarfarinReset(true);
            insertSelectedDataInSessionRestartWarfarin();
            return true;
        }
        
        /**
         * selectParentalAgentRestartWarfarin function
         * selectParentalAgentRestartWarfarin is used to select parental agent
         */
        this.selectParentalAgentRestartWarfarin = function() {
            self.inactiveRestartWarfarinReset(false);
            self.activeRestartWarfarinReset(true);
            insertSelectedDataInSessionRestartWarfarin();
            return true;
        }
        
        /**
         * clearRestartWarfarin function
         * clearRestartWarfarin is used to reset all restart warfarin data
         */
        this.clearRestartWarfarin = function() {
            self.homostasisOnLoadRestartWarfarin(null);
            self.showWhatQARestartWarfarin(false);
            self.showOralRestartWarfarin(false);
            self.showAdviceInBullets(false);
            self.adviceInBullets([]);
            self.showAdviceRestartWarfarin(appConstantsModel.restart_doac_default_advice);
            sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE",null);
            util.clearSessionTable("RESTART_YES_NO_STORAGE");
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            util.clearSessionTable("RESTART_DOAC_ADVICE_STORAGE");
            util.clearSessionTable("RESTART_SESSION_DATA");
            sessionStorage.setItem("ADVICE_FROM_RESTART",null);
            self.setRestartWarfarinColor(null);
            updateRestartWarfarinNoIntoTable();
            //self.disableAdviceValueRestartWarfarin("disabled");
            //self.enableRestartWarfarinAdvice(false);
            self.showQARestartWarfarin(false);
            self.showAdviceNewRestartWarfarin("");
            self.showAdviceAfterIconRestartWarfarin("");
            self.advice_restart_warfarin_show_info(false);
            self.parentalAgentOnLoadRestartWarfarin(null);
            self.postProceduralOnLoadRestartWarfarin(null);
            self.inactiveRestartWarfarinReset(true);
            self.activeRestartWarfarinReset(false);
            self.selectRestartWarfarinQA([]);
            self.restartWarfarinProcedureQuestionOnLoad(null);
            
            enableAdviceTab();
        }
        
         /**
         * getAdviceInBullet function
         * getAdviceInBullet is used to advice to the view.
         */
        function getAdviceInBullet(adviceNames, advice_info_title, advice_show_info, showAdviceAfterIcon) {
            var self = this;
            setToolTipinfo();
            self.adviceNamesRestartWarfarin = ko.observable(adviceNames);
            self.advice_restart_warfarin_info_title = ko.observable(advice_info_title);
            self.showAdviceAfterIconRestartWarfarin = ko.observable(showAdviceAfterIcon);
            if(advice_show_info == "false") {
                self.advice_restart_warfarin_show_info = ko.observable(false);
            } else {
                self.advice_restart_warfarin_show_info = ko.observable(true);
            }
        }
       
        /**
         * fetchRestartQuestionsFromTable function
         * fetchRestartQuestionsFromTable is used to select all restart questions from table.
         */
        function fetchRestartQuestionsFromTable() {
            try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("RESTART_QUESTIONS");
                    if(data) {
                        var localData = JSON.parse(data);
                        if(localData != null && localData != "") {
                            $.each(localData, function(key, value) {
                               self.restartWarfarinQA.push(new getRestartWarfarinValue([value.restart_question_id],[value.questions], [value.restart_info_title],[value.restart_show_info]));
                            });
                        }
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of questions : " + ex.message);
            }
        }
        
        /**
         * insertRestartWarfarinYesNoInSession function
         * insertRestartWarfarinYesNoInSession is used to insert yes/no in session table on restart warfarin.
         */
        function insertRestartWarfarinYesNoInSession() {
            try {
                setTimeout(function(){
                    if(!insertYesFlagRestartWarfarin){
                        var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "NO" }];
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                        insertYesFlagRestartWarfarin = true;
                        sessionStorage.setItem("INSERT_YES_NO_RESTART_WARFARIN", "true");
                        selectYesNoAnswerFromTableOnRestartWarfarin();
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in insertion of yes/no in session table: " + ex.message);
            }
        }
        
        /**
         * updateRestartWarfarinYesIntoTable function
         * updateRestartWarfarinYesIntoTable is used to update yes into session table on restart warfarin.
         */
        function updateRestartWarfarinYesIntoTable() {
            try {
                setTimeout(function() {
                    var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "YES" }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                    selectYesNoAnswerFromTableOnRestartWarfarin();
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in updation of yes value : " + ex.message);
            }
        }

        /**
         * updateRestartWarfarinNoIntoTable function
         * updateRestartWarfarinNoIntoTable is used to update no value into session table.
         */
        function updateRestartWarfarinNoIntoTable() {
            try {
                setTimeout(function() {
                    var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "NO" }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                    selectYesNoAnswerFromTableOnRestartWarfarin();
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in updation of no value : " + ex.message);
            }
        }
        
        /**
         * selectYesNoAnswerFromTableOnRestartWarfarin function
         * selectYesNoAnswerFromTableOnRestartWarfarin is used to select final answer from table.
         */
        function selectYesNoAnswerFromTableOnRestartWarfarin(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("RESTART_YES_NO_STORAGE"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            restart_warfarin_item = (value.yes_no);
                            insertSelectedDataInSessionRestartWarfarin();
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of yes no value : " + ex.message);
            }
        }
        
        /**
         * insertSelectedDataInSessionRestartWarfarin function
         * insertSelectedDataInSessionRestartWarfarin is used to insert all selected data into table.
         */
        function insertSelectedDataInSessionRestartWarfarin(){
            try {
                if(!insertSessionisFlagRestartWarfarin){
                    var sessionColumnData = [{ restart_session_id: "1", homeostasis_value: self.homostasisOnLoadRestartWarfarin(),yes_no:restart_warfarin_item,restartDoacProcedureQuestion_value:self.restartWarfarinProcedureQuestionOnLoad(),post_procedural_value:self.postProceduralOnLoadRestartWarfarin(),parental_agent_value:self.parentalAgentOnLoadRestartWarfarin() }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_SESSION_STORAGE", dataToStore);
                    insertSessionisFlagRestartWarfarin = true;
                    sessionStorage.setItem("INSERT_SESSION_RESTART_WARFARIN", "true");
                    selectAllRestartWarfarinDataFromSessionTable();
                }else{
                    updateSelectedDataIntoTableRestartWarfarin();
                }
            } catch(ex){
                console.log("appViewModel() : Error in insertion of restart warfarin data in table: " + ex.message);
            }
        }
        
        /**
         * updateSelectedDataIntoTableRestartWarfarin function
         * updateSelectedDataIntoTableRestartWarfarin is used to update all selected data into table.
         */
        function updateSelectedDataIntoTableRestartWarfarin(){
            try {
                var sessionColumnData = [{ restart_session_id: "1", homeostasis_value: self.homostasisOnLoadRestartWarfarin(),yes_no:restart_warfarin_item,restartDoacProcedureQuestion_value:self.restartWarfarinProcedureQuestionOnLoad(),post_procedural_value:self.postProceduralOnLoadRestartWarfarin(),parental_agent_value:self.parentalAgentOnLoadRestartWarfarin() }];
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("RESTART_SESSION_STORAGE", dataToStore);
                selectAllRestartWarfarinDataFromSessionTable();
            } catch(ex){
                console.log("appViewModel() : Error in updation of selected restart warfarin data value : " + ex.message);
            }
        }
        
        /**
         * selectAllRestartWarfarinDataFromSessionTable function
         * selectAllRestartWarfarinDataFromSessionTable is used to select final answer from table.
         */
        function selectAllRestartWarfarinDataFromSessionTable(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("RESTART_SESSION_STORAGE"));
                $.each(localData, function(key, value){
                    if(value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.NO){
                        self.adviceInBullets([]);
                        self.showAdviceInBullets(false);
                        self.showWhatQARestartWarfarin(false);
                        self.showOralRestartWarfarin(false);
                        self.showQARestartWarfarin(true);
                        self.showAdviceRestartWarfarin(appConstantsModel.restart_doac_default_advice);
                        self.setRestartWarfarinColor(null);
                        
                        if(value.parental_agent_value === appConstantsModel.parental_agent_no){
                            
                             self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                            
                            self.showWhatQARestartWarfarin(false);
                            self.showOralRestartWarfarin(false);
                            self.showQARestartWarfarin(true);
                            restart_warfarin_show_advice_info = "true";
                            restartWarfarinAdviceHeader = appConstantsModel.restart_warfarin_advice_start_vka;
                            restart_warfarin_info_item = appConstantsModel.restart_doac_advice_info_title;
                            restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_after_icon_one;
                            self.advice_restart_warfarin_show_info(true);
                             self.adviceInBullets.push(new getAdviceInBullet([restartWarfarinAdviceHeader + "  "],[appConstantsModel.restart_doac_advice_info_title],[restart_warfarin_show_advice_info],[appConstantsModel.restart_warfarin_advice_after_icon_one]));
                       $(document).foundation();
                            
                             self.showAdviceNewRestartWarfarin("");
                            self.setRestartWarfarinColor("success");
                            self.showAdviceRestartWarfarin("");
                            self.disableAdviceValueRestartWarfarin(null);
                            self.enableRestartWarfarinAdvice(true);
                            self.postProceduralOnLoadRestartWarfarin(null);
                            insertRestartWarfarinAdviceInTable();

                        } else if(value.parental_agent_value === appConstantsModel.parental_agent_yes){
                             self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                            self.showWhatQARestartWarfarin(true);
                            self.showOralRestartWarfarin(false);
                            self.showQARestartWarfarin(true);
                            self.showAdviceRestartWarfarin(appConstantsModel.restart_doac_default_advice);
                            self.showAdviceNewRestartWarfarin("");
                            self.setRestartWarfarinColor(null);
                            self.showAdviceAfterIconRestartWarfarin("");
                            self.advice_restart_warfarin_show_info(false);
                            if(value.post_procedural_value === appConstantsModel.high){
                                self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                                restartWarfarinAdviceHeader = appConstantsModel.restart_warfarin_advice_start_vka;
                                restart_warfarin_show_advice_info = "true";
                                restart_warfarin_info_item = appConstantsModel.restart_doac_advice_info_title;
                                restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_two;
                                self.advice_restart_warfarin_show_info(true);

                                
                                 self.adviceInBullets.push(new getAdviceInBullet([restartWarfarinAdviceHeader + " "],["Vitamin K antagonist. VKA advice in this app refers specifically to warfarin, the most common VKA in the US.  If outside the US, check the pharmacokinetics of the VKA and adjust accordingly."],[restart_warfarin_show_advice_info],[appConstantsModel.restart_within_24_hrs]));
                                self.adviceInBullets.push(new getAdviceInBullet([appConstantsModel.restart_warfarin_advice_after_icon_two],[""],["false"],[""]));
                                self.adviceInBullets.push(new getAdviceInBullet([appConstantsModel.restart_warfarin_discontinue],[""],["false"],[""]));
                                self.showAdviceNewRestartWarfarin("");
                                
                                self.setRestartWarfarinColor("success");
                                self.showAdviceRestartWarfarin("");
                                self.disableAdviceValueRestartWarfarin(null);
                                self.enableRestartWarfarinAdvice(true);
                                insertRestartWarfarinAdviceInTable();
                            } else if(value.post_procedural_value === appConstantsModel.low){
                                self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                                restartWarfarinAdviceHeader =appConstantsModel.restart_warfarin_advice_start_vka;
                                restart_warfarin_show_advice_info = "true";
                                restart_warfarin_info_item=appConstantsModel.restart_doac_advice_info_title;  
                                restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_three;
                                self.advice_restart_warfarin_show_info(true);
                                
                                self.adviceInBullets.push(new getAdviceInBullet([restartWarfarinAdviceHeader + " "],["Vitamin K antagonist. VKA advice in this app refers specifically to warfarin, the most common VKA in the US.  If outside the US, check the pharmacokinetics of the VKA and adjust accordingly."],[restart_warfarin_show_advice_info],[appConstantsModel.restart_within_24_hrs]));
                        self.adviceInBullets.push(new getAdviceInBullet([appConstantsModel.restart_warfarin_advice_after_icon_three],[""],["false"],[""]));
                        self.adviceInBullets.push(new getAdviceInBullet([appConstantsModel.restart_warfarin_discontinue],[""],["false"],[""]));
                        self.showAdviceNewRestartWarfarin("");
                              
                                self.showAdviceRestartWarfarin("");
                                self.setRestartWarfarinColor("success");
                                self.disableAdviceValueRestartWarfarin(null);
                                self.enableRestartWarfarinAdvice(true);
                                insertRestartWarfarinAdviceInTable();
                            }
                        }
                    } else if( value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.YES){ 
                        
                        self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                        restart_warfarin_show_advice_info = "false";
                        restartWarfarinAdviceHeader = "";
                        restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_four;
                        self.advice_restart_warfarin_show_info(false);
                        
                        var adviceOne = restartWarfarinAdvice.split(".")[0];
                        var adviceTwo = restartWarfarinAdvice.split(".")[1];
                        self.adviceInBullets.push(new getAdviceInBullet([adviceOne + "."],[""],["false"],[""]));
                        self.adviceInBullets.push(new getAdviceInBullet([adviceTwo + "."],[""],["false"],[""]));
                        self.showAdviceNewRestartWarfarin("");
                        
                        self.showAdviceAfterIconRestartWarfarin("");
                        self.showAdviceRestartWarfarin("");
                        self.setRestartWarfarinColor("success");
                        self.disableAdviceValueRestartWarfarin(null);
                        self.enableRestartWarfarinAdvice(true);
                        insertRestartWarfarinAdviceInTable();
                        self.showWhatQARestartWarfarin(false);
                        self.showOralRestartWarfarin(false);
                        self.showQARestartWarfarin(false);
                        self.postProceduralOnLoadRestartWarfarin(null);
                        self.parentalAgentOnLoadRestartWarfarin(null);
               
                    } else if( value.homeostasis_value === appConstantsModel.homostasis_no && value.yes_no === appConstantsModel.YES){
                        self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                        restart_warfarin_show_advice_info = "false";
                        restartWarfarinAdviceHeader="";
                        restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_four;
                        self.advice_restart_warfarin_show_info(false);
                        
                        var adviceOne = restartWarfarinAdvice.split(".")[0];
                        var adviceTwo = restartWarfarinAdvice.split(".")[1];
                        self.adviceInBullets.push(new getAdviceInBullet([adviceOne + "."],[""],["false"],[""]));
                        self.adviceInBullets.push(new getAdviceInBullet([adviceTwo + "."],[""],["false"],[""]));
                        self.showAdviceNewRestartWarfarin("");
                        
                        self.showAdviceAfterIconRestartWarfarin("");
                        self.showAdviceRestartWarfarin("");
                        self.disableAdviceValueRestartWarfarin(null);
                        self.setRestartWarfarinColor("success");
                        self.enableRestartWarfarinAdvice(true);
                        insertRestartWarfarinAdviceInTable();
                        self.showWhatQARestartWarfarin(false);
                        self.showOralRestartWarfarin(false);
                        self.showQARestartWarfarin(false);
                        self.postProceduralOnLoadRestartWarfarin(null);
                        self.parentalAgentOnLoadRestartWarfarin(null);
               
                    }else if( value.homeostasis_value === appConstantsModel.homostasis_no && value.yes_no === appConstantsModel.NO){
                        self.adviceInBullets([]);
                        self.showAdviceInBullets(true);
                        restart_warfarin_show_advice_info = "false";
                        restartWarfarinAdviceHeader="";
                        restartWarfarinAdvice = appConstantsModel.restart_warfarin_advice_four;
                        self.advice_restart_warfarin_show_info(false);
                        
                        var adviceOne = restartWarfarinAdvice.split(".")[0];
                        var adviceTwo = restartWarfarinAdvice.split(".")[1];
                        self.adviceInBullets.push(new getAdviceInBullet([adviceOne + "."],[""],["false"],[""]));
                        self.adviceInBullets.push(new getAdviceInBullet([adviceTwo + "."],[""],["false"],[""]));
                        self.showAdviceNewRestartWarfarin("");
                        
                        self.showAdviceAfterIconRestartWarfarin("");
                        self.showAdviceRestartWarfarin("");
                        self.disableAdviceValueRestartWarfarin(null);
                        self.enableRestartWarfarinAdvice(true);
                        insertRestartWarfarinAdviceInTable();
                        self.setRestartWarfarinColor("success");
                        self.showWhatQARestartWarfarin(false);
                        self.showOralRestartWarfarin(false);
                        self.showQARestartWarfarin(false);
                        self.postProceduralOnLoadRestartWarfarin(null);
                        self.parentalAgentOnLoadRestartWarfarin(null);
                    }
                });
            } catch(ex){
                console.log("appViewModel() : Error in selection of restart warfarin data : " + ex.message);
            }
        }
        
        /**
         * insertRestartWarfarinAdviceInTable function
         * insertRestartWarfarinAdviceInTable is used to insert restart warfarin advice into table.
         */
        function insertRestartWarfarinAdviceInTable(){
            try {
                if(!insertAdviceisFlagRestartWarfarin){
                    var sessionColumnData = [{ restart_advice_id: "1", advice_value:restartWarfarinAdvice,advice_header:restartWarfarinAdviceHeader,info_advice_title:restart_warfarin_info_item,advice_info_show:restart_warfarin_show_advice_info  }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE", dataToStore);
                    insertAdviceisFlagRestartWarfarin = true;
                    sessionStorage.setItem("INSERT_ADVICE_RESTART_WARFARIN", "true");
                }else{
                    updateRestartWarfarinAdviceIntoTable();
                }
            } catch(ex){
                console.log("appViewModel() : Error in insertion of restart warfarin advice into table: " + ex.message);
            }
        }
        
        /**
         * updateRestartWarfarinAdviceIntoTable function
         * updateRestartWarfarinAdviceIntoTable is used to update restart warfarin advice into session table.
         */
        function updateRestartWarfarinAdviceIntoTable(){
            try {
                var sessionColumnData = [{ restart_advice_id: "1",advice_value:restartWarfarinAdvice,advice_header:restartWarfarinAdviceHeader,info_advice_title:restart_warfarin_info_item,advice_info_show:restart_warfarin_show_advice_info  }];
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE", dataToStore);
            } catch(ex){
                console.log("appViewModel() : Error in updation of restart warfarin advice : " + ex.message);
            }
        }
        
        /**
         * goToBridgeFromRestartWarfarin function
         * goToBridgeFromRestartWarfarin is used to navigate to bridge page from restart warfarin
         */
        this.goToBridgeFromRestartWarfarin = function(){
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
            pageArrays.push("bridgePage");
            fetchSavedChadVascData();
            selectTherapyDataOnBridge();
            getBleedRiskYesNoData();
            getCrclValueFromWizard();
            setBridgeScreenLocked();
            enableAdviceTab();
        }
        
        /**
         * patientPageFromRestartWarfarin function
         * patientPageFromRestartWarfarin is used to navigate to patient page from restart warfarin
         */
        this.patientPageFromRestartWarfarin = function(){
            sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "PATIENT");
		    pager.navigate("#!/patientPage");
            pageArrays.push("patientPage");
            
            self.lockIconOnPatientForBridgeTab(true);
            self.lockIconOnPatientForInterruptTab(true);
            setPatientScreenLocked();
            enableAdviceTab();
            getNotifications();
        }
        
        /**
         * goToInterruptFromRestartWarfarin function
         * goToInterruptFromRestartWarfarin is used to navigate to interrupt page from restart warfarin
         */
        this.goToInterruptFromRestartWarfarin = function(){
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
            self.interruptBridgeLockIcon(true);
            selectTherapyData();
            selectBleedRiskYesNo();
            setInterruptScreenLocked();
	    
            enableAdviceTab();
        }
       
        /**
         * goToAdviceFromRestartWarfarin function
         * goToAdviceFromRestartWarfarin is used to navigate to advice page from restart warfarin
         */
        this.goToAdviceFromRestartWarfarin = function(){
            sessionStorage.setItem("CURRENT_PAGE","9"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","4"); //For browser back functionality//
            
            self.arrayOfPages.push([4,9]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
            
            sessionStorage.setItem("DESTINATION", "RESTART_WARFARIN");
            sessionStorage.setItem("GET_ITEM_LOCKED","TRUE");
            pager.navigate("#!/adviceViewPage");
            pageArrays.push("adviceViewPage");
            getAdvices();
        }
        
        /**
         * selectRestartStoredDataFromTableOnWarfarin function
         * selectRestartStoredDataFromTableOnWarfarin is used fetch the value restart session storage.
         */ 
        function selectRestartStoredDataFromTableOnWarfarin(){
            try {
                var data = sessionStorage.getItem("RESTART_SESSION_STORAGE");
                if(data){
                    var localData = JSON.parse(data);
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                           try{
                               self.homostasisOnLoadRestartWarfarin(value.homeostasis_value);
                               self.postProceduralOnLoadRestartWarfarin(value.post_procedural_value);
                               self.parentalAgentOnLoadRestartWarfarin(value.parental_agent_value);
                               self.restartWarfarinProcedureQuestionOnLoad(value.restartDoacProcedureQuestion_value);
                               selectAllRestartWarfarinDataFromSessionTable();
                             if(value.homeostasis_value != ""){
                               self.inactiveRestartWarfarinReset(false);
                               self.activeRestartWarfarinReset(true);
                             }
                           } catch(ex){
                               console.log("Error in geeting restart session storage value : " + ex.message);
                           }
                        });
                    }
                }
            } catch(ex){
               console.log("appViewModel() : Error in getting the restart session storage values : " + ex.message);
            }
        }
        
        /***************** Restart DOAC Screen ******************/
        
        /**
         * fetchInterruptAdviceOnRestartDOAC function
         * fetchInterruptAdviceOnRestartDOAC is used to fetch interrupt advice in restart doac screen
         */
        function fetchInterruptAdviceOnRestartDOAC(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("INTERRUPT_ADVICE"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            if(value.whetherAdvice === appConstantsModel.Interrupt_anticoagulant){
                                self.showWarningRestartDOAC(false);
                            }else{
                                self.showWarningRestartDOAC(true);
                            }
                        });
                    }else{
                         self.showWarningRestartDOAC(true);
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of interrupt advice : " + ex.message);
            }
        }
        
        var restartDoacAdviceValue = sessionStorage.getItem("DESTINATION_FROM");
        if(restartDoacAdviceValue == appConstantsModel.ADVICE_DOAC){
            selectRestartStoredDataFromTableOnRestartDoac();
            sessionStorage.setItem("DESTINATION_FROM","");
        
        }
        
        var restartDoacUnlockedValue = sessionStorage.getItem("UNLOCKED-VALUE");
        if(restartDoacUnlockedValue == appConstantsModel.YES){
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            sessionStorage.setItem("UNLOCKED-VALUE","NO");
        }
   
        var restartDoacLockedValue = sessionStorage.getItem("LOCKED-VALUE");
        if(restartDoacLockedValue == appConstantsModel.NO){
            selectRestartStoredDataFromTableOnRestartDoac();
            sessionStorage.setItem("UNLOCKED-VALUE","NO");
        }
        
        /**
         * getRestartDoacValue function
         * getRestartDoacValue is used to get restart doac questions value
         */
        function getRestartDoacValue(id, questions, restart_info_title, restart_show_info) {
            var self = this;
            self.restartDoacId = ko.observable(id);
            self.restartDOACName = ko.observable(questions);
            self.restart_doac_info_title = ko.observable(restart_info_title);
            self.restartDOACSelected = ko.observable(true);
            
            if(restart_show_info == "false") {
                self.restart_doac_show_info = ko.observable(false);
            } else {
                self.restart_doac_show_info = ko.observable(true);
            }
        }
        
        /**
         * restartDoacProcedureQuestionYes function
         * restartDoacProcedureQuestionYes is used to update yes as restart doac question's answer
         */
        this.restartDoacProcedureQuestionYes = function (item) {
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            updateRestartDoacYesIntoTable();
            return true;
        };
        
        /**
         * restartDoacProcedureQuestionNo function
         * restartDoacProcedureQuestionNo is used to update no as restart doac question's answer
         */
        this.restartDoacProcedureQuestionNo = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            updateRestartDoacNoIntoTable();
            return true;
        };
        
        /**
         * selectCardiacSurgeryRestartDOAC function
         * selectCardiacSurgeryRestartDOAC is used to select cardiac surgery on restart doac
         */
        this.selectCardiacSurgeryRestartDOAC = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            insertSelectedDataInSessionRestartDoac();
            return true;
        }
        
        /**
         * selectCompleteHemostasisRestartDOAC function
         * selectCompleteHemostasisRestartDOAC is used to select complete hemostasis on restart doac
         */
        this.selectCompleteHemostasisRestartDOAC = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            insertSelectedDataInSessionRestartDoac();
            return true;
        
        }
        
        /**
         * selectPostProceduralRestartDOAC function
         * selectPostProceduralRestartDOAC is used to select post procedural on restart doac
         */
        this.selectPostProceduralRestartDOAC = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            insertSelectedDataInSessionRestartDoac();
            return true;
        }
        
        /**
         * selectOralMedicationRestartDOAC function
         * selectOralMedicationRestartDOAC is used to select oral medication on restart doac
         */
        this.selectOralMedicationRestartDOAC = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            insertSelectedDataInSessionRestartDoac();
            return true;
        }
        
        /**
         * selectParentalAgentRestartDOAC function
         * selectParentalAgentRestartDOAC is used to select parental agent on restart doac
         */
        this.selectParentalAgentRestartDOAC = function(){
            self.inactiveResetRestartDOAC(false);
            self.activeResetRestartDOAC(true);
            insertSelectedDataInSessionRestartDoac();
            return true;
        }
        
        /**
         * clearRestartDOAC function
         * clearRestartDOAC is used to reset all restart doac data
         */
        this.clearRestartDOAC = function(){
            self.cardiacSurgeryOnLoadRestartDOAC(null);
            self.homostasisOnLoadRestartDOAC(null);
            self.showWhatQARestartDOAC(false);
            self.showOralRestartDOAC(false);
            self.showQARestartDOAC(false);
            
            self.showAdviceInBulletsRestartDOAC(false);
            self.adviceInBulletsRestartDOAC([]);
            self.advice_show_info_notBullet_restart_doac(false);
            
            self.showAdviceRestartDOAC(appConstantsModel.restart_doac_default_advice);
            self.setRestartDOACColor(null);
            self.showAdviceNewRestartDOAC("");
            self.restart_doac_advice_show_info(false);
            self.parentalAgentOnLoadRestartDOAC(null);
            self.oralMedicationOnLoadRestartDOAC(null);
            self.postProceduralOnLoadRestartDOAC(null);
            sessionStorage.setItem("ADVICE_FROM_RESTART",null);
            updateRestartDoacNoIntoTable();
            util.clearSessionTable("RESTART_YES_NO_STORAGE");
            util.clearSessionTable("RESTART_SESSION_STORAGE");
            util.clearSessionTable("RESTART_DOAC_ADVICE_STORAGE");
            util.clearSessionTable("RESTART_SESSION_DATA");
            sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE",null);
            self.inactiveResetRestartDOAC(true);
            self.activeResetRestartDOAC(false);
            self.selectRestartQARestartDOAC([]);
            self.restartDoacProcedureQuestionOnLoad(null);
            enableAdviceTab();
        }
        
        /**
         * getAdviceInBulletRestartDoac function
         * getAdviceInBulletRestartDoac is used to advice to the view.
         */
        function getAdviceInBulletRestartDoac(adviceNames, advice_info_title, advice_show_info) {
         setToolTipinfo();
            var self = this;
            self.adviceNamesRestartDoac = ko.observable(adviceNames);
            self.restart_doac_advice_info_title = ko.observable(advice_info_title);
            if(advice_show_info == "false") {
                self.restart_doac_advice_show_info = ko.observable(false);
            } else {
                self.restart_doac_advice_show_info = ko.observable(true);
            }
        }
        function setToolTipinfo(){
            $(document).foundation();
        }
        /**
         * fetchRestartQuestionsFromTableOnDOAC function
         * fetchRestartQuestionsFromTableOnDOAC is used to select all restart doac questions from table.
         */
        function fetchRestartQuestionsFromTableOnDOAC(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("RESTART_QUESTIONS"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                           self.restartQARestartDOAC.push(new getRestartDoacValue([value.restart_question_id],[value.questions], [value.restart_info_title],[value.restart_show_info]));
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of doac questions : " + ex.message);
            }
        }
        
        /**
         * insertRestartDoacYesNoInSession function
         * insertRestartDoacYesNoInSession is used to insert yes/no in session table.
         */
        function insertRestartDoacYesNoInSession(){
            try {
                setTimeout(function(){
                    if(!insertYesFlagRestartDOAC){
                        var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "NO" }];
                        var dataToStore = JSON.stringify(sessionColumnData);
                        sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                        insertYesFlagRestartDOAC = true;
                        sessionStorage.setItem("INSERT_YES_NO_RESTART_DOAC", "true");
                        selectRestartDoacAnswerFromTable();
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in insertion of yes/no in session table: " + ex.message);
            }
        }
        
        /**
         * updateRestartDoacYesIntoTable function
         * updateRestartDoacYesIntoTable is used to update yes into session table.
         */
        function updateRestartDoacYesIntoTable(){
            try {
                setTimeout(function(){
                    var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "YES" }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                    selectRestartDoacAnswerFromTable();
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in updation of yes value : " + ex.message);
            }
        }

        /**
         * updateRestartDoacNoIntoTable function
         * updateRestartDoacNoIntoTable is used to update no value into session table.
         */
        function updateRestartDoacNoIntoTable(){
            try {
                setTimeout(function(){
                    var sessionColumnData = [{ restart_yes_no_id: "1", yes_no: "NO" }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_YES_NO_STORAGE", dataToStore);
                    selectRestartDoacAnswerFromTable();
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in updation of no value : " + ex.message);
            }
        }
        
        /**
         * selectRestartDoacAnswerFromTable function
         * selectRestartDoacAnswerFromTable is used to select final answer from table.
         */
        function selectRestartDoacAnswerFromTable(){
            try {
                setTimeout(function(){
                    var localData = JSON.parse(sessionStorage.getItem("RESTART_YES_NO_STORAGE"));
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            restart_doac_item = (value.yes_no);
                            insertSelectedDataInSessionRestartDoac();
                        });
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in selection of yes no value : " + ex.message);
            }
        }
        
        /**
         * insertSelectedDataInSessionRestartDoac function
         * insertSelectedDataInSessionRestartDoac is used to insert selected data in session table.
         */
        function insertSelectedDataInSessionRestartDoac(){
            try {
                if(!insertSessionisFlagRestartDOAC){
                    var sessionColumnData = [{ restart_session_id: "1", homeostasis_value: self.homostasisOnLoadRestartDOAC(),cardiac_value : self.cardiacSurgeryOnLoadRestartDOAC(),yes_no:restart_doac_item,restartDoacProcedureQuestion_value:self.restartDoacProcedureQuestionOnLoad(),oral_medication_value:self.oralMedicationOnLoadRestartDOAC(),post_procedural_value:self.postProceduralOnLoadRestartDOAC(),parental_agent_value:self.parentalAgentOnLoadRestartDOAC() }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_SESSION_STORAGE", dataToStore);
                    insertSessionisFlagRestartDOAC = true;
                    sessionStorage.setItem("INSERT_SESSION_RESTART_DOAC", "true");
                    selectAllRestartDoacDataFromSessionTable();
                }else{
                    updateSelectedDataInSessionRestartDoac();
                }
            } catch(ex){
                console.log("appViewModel() : Error in insertion of selected data in session table: " + ex.message);
            }
        }
        
        /**
         * updateSelectedDataInSessionRestartDoac function
         * updateSelectedDataInSessionRestartDoac is used to update selected data into session table.
         */
        function updateSelectedDataInSessionRestartDoac(){
            try {
                var sessionColumnData = [{ restart_session_id: "1", homeostasis_value: self.homostasisOnLoadRestartDOAC(),cardiac_value:self.cardiacSurgeryOnLoadRestartDOAC() ,yes_no:restart_doac_item,restartDoacProcedureQuestion_value:self.restartDoacProcedureQuestionOnLoad(),oral_medication_value:self.oralMedicationOnLoadRestartDOAC(),post_procedural_value:self.postProceduralOnLoadRestartDOAC(),parental_agent_value:self.parentalAgentOnLoadRestartDOAC() }];
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("RESTART_SESSION_STORAGE", dataToStore);
                selectAllRestartDoacDataFromSessionTable();
            } catch(ex){
                console.log("appViewModel() : Error in updation of selected value : " + ex.message);
            }
        }
        
        /**
         * selectAllRestartDoacDataFromSessionTable function
         * selectAllRestartDoacDataFromSessionTable is used to select all data from table.
         */
        function selectAllRestartDoacDataFromSessionTable(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("RESTART_SESSION_STORAGE"));
                $.each(localData, function(key, value){
                    if(value.cardiac_value === appConstantsModel.cardiac_no && value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.NO){
                        
                         self.adviceInBulletsRestartDOAC([]);  
                        self.parentalAgentOnLoadRestartDOAC(null);
                         self.showWhatQARestartDOAC(true);
                         self.showOralRestartDOAC(true);
                         self.showQARestartDOAC(false);
                         self.advice_show_info_notBullet_restart_doac(false);
                        
                         self.showAdviceRestartDOAC("Answer questions above to generate advice.");
                         self.setRestartDOACColor(null);
                         self.showAdviceNewRestartDOAC("");  
                         if(value.post_procedural_value === appConstantsModel.high && value.oral_medication_value === appConstantsModel.oral_medication_no){
                             
                            self.adviceInBulletsRestartDOAC([]);
                             restartDoacAdviceHeader="";
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_one;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            var adviceThree = restartDoacAdvice.split(".")[2];
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne+"."],[""],["false"]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo+"."],[""],["false"]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree+"."],[""],["false"]));
                             
                            self.showAdviceNewRestartDOAC("");
                             
                            self.setRestartDOACColor("success");
                            self.showAdviceRestartDOAC("");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            insertRestartDoacAdviceInTable();
                        
                         } else if(value.post_procedural_value === appConstantsModel.low && value.oral_medication_value === appConstantsModel.oral_medication_no){
                             
                            self.adviceInBulletsRestartDOAC([]);
                             
                            restart_doac_show_advice_info = "false";
                            self.advice_show_info_notBullet_restart_doac(false);
                             restartDoacAdviceHeader="";
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_two;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            var adviceThree = restartDoacAdvice.split(".")[2];
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree + "."],[""],[restart_doac_show_advice_info]));
                            self.showAdviceNewRestartDOAC("");
                             
                            self.setRestartDOACColor("success");
                            self.showAdviceRestartDOAC("");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            insertRestartDoacAdviceInTable();
                         } else if(value.post_procedural_value === appConstantsModel.high && value.oral_medication_value === appConstantsModel.oral_medication_yes){
                             
                             
                            self.adviceInBulletsRestartDOAC([]);
                             
                            restart_doac_show_advice_info = "false";
                            self.advice_show_info_notBullet_restart_doac(false);
                             restartDoacAdviceHeader="";
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_three;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],[restart_doac_show_advice_info]));
                            self.showAdviceNewRestartDOAC("");
                             
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            self.setRestartDOACColor("success");
                            self.showAdviceRestartDOAC("")
                            insertRestartDoacAdviceInTable();
                         } else if(value.post_procedural_value === appConstantsModel.low && value.oral_medication_value === appConstantsModel.oral_medication_yes){
                             
                            self.adviceInBulletsRestartDOAC([]);
                             
                            restart_doac_show_advice_info = "false";
                            self.advice_show_info_notBullet_restart_doac(false);
                             restartDoacAdviceHeader="";
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_four;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],[restart_doac_show_advice_info]));
                            self.showAdviceNewRestartDOAC("");
                             
                            self.setRestartDOACColor("success");
                            self.showAdviceRestartDOAC("");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            insertRestartDoacAdviceInTable();
                        }
                    
                    }else if(value.cardiac_value === appConstantsModel.cardiac_no && value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.YES){
                        
                        self.adviceInBulletsRestartDOAC([]);
                        
                        self.showWhatQARestartDOAC(false);
                        self.showOralRestartDOAC(false);
                        self.showQARestartDOAC(false);
                        
                        self.showAdviceInBulletsRestartDOAC(false);
                        restartDoacAdviceHeader = "";
                        restartDoacAdvice = appConstantsModel.restart_doac_advice_five;
                        self.showAdviceNewRestartDOAC(restartDoacAdvice);
                        self.setRestartDOACColor("success");
                        self.showAdviceRestartDOAC("");
                        self.disableAdviceValueRestartDOAC(null);
                        self.enableAdviceRestartDOAC(true);
                        self.oralMedicationOnLoadRestartDOAC(null)
                        self.postProceduralOnLoadRestartDOAC(null)
                        self.parentalAgentOnLoadRestartDOAC(null)
                        insertRestartDoacAdviceInTable();
                    }else if(value.cardiac_value === appConstantsModel.cardiac_no && value.homeostasis_value === appConstantsModel.homostasis_no && value.yes_no === appConstantsModel.YES){
                        
                         self.adviceInBulletsRestartDOAC([]);
                        
                        restart_doac_show_advice_info = "false";
                        self.advice_show_info_notBullet_restart_doac(false);
                        self.showAdviceInBulletsRestartDOAC(false);
                        restartDoacAdviceHeader="";
                        restartDoacAdvice =appConstantsModel.restart_doac_advice_five;
                        self.showAdviceNewRestartDOAC(restartDoacAdvice);
                        self.disableAdviceValueRestartDOAC(null);
                        self.setRestartDOACColor("success");
                        self.showAdviceRestartDOAC("");
                        self.enableAdviceRestartDOAC(true);
                        insertRestartDoacAdviceInTable();
                        self.showWhatQARestartDOAC(false);
                        self.showOralRestartDOAC(false);
                        self.showQARestartDOAC(false);
                    }else if(value.cardiac_value === appConstantsModel.cardiac_no && value.homeostasis_value === appConstantsModel.homostasis_no && value.yes_no === appConstantsModel.NO){
                        
                        self.adviceInBulletsRestartDOAC([]);
                        
                        restart_doac_show_advice_info = "false";
                        
                        self.advice_show_info_notBullet_restart_doac(false);
                        self.showAdviceInBulletsRestartDOAC(false);
                        restartDoacAdviceHeader="";
                        restartDoacAdvice = appConstantsModel.restart_doac_advice_five;
                        self.showAdviceNewRestartDOAC(restartDoacAdvice);
                        self.setRestartDOACColor("success");
                        self.showAdviceRestartDOAC("");
                        self.disableAdviceValueRestartDOAC(null);
                        self.enableAdviceRestartDOAC(true);
                        insertRestartDoacAdviceInTable();
                        self.showWhatQARestartDOAC(false);
                        self.showOralRestartDOAC(false);
                        self.showQARestartDOAC(false);
                        self.oralMedicationOnLoadRestartDOAC(null);
                        self.postProceduralOnLoadRestartDOAC(null);
                        self.parentalAgentOnLoadRestartDOAC(null);
                    }else if(value.cardiac_value === appConstantsModel.cardiac_yes){
                        
                        self.adviceInBulletsRestartDOAC([]);
                        self.oralMedicationOnLoadRestartDOAC(null);
                        self.showQARestartDOAC(true);
                        self.showWhatQARestartDOAC(false);
                        
                        self.showAdviceInBulletsRestartDOAC(false);
                        
                        self.showAdviceRestartDOAC(appConstantsModel.restart_doac_default_advice);
                        
                        self.showAdviceInBulletsRestartDOAC(false);
                        
                        self.setRestartDOACColor(null);
                        self.advice_show_info_notBullet_restart_doac(false);
                        
                        if( value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.YES){
                            
                            self.showAdviceInBulletsRestartDOAC(true);
                  self.adviceInBulletsRestartDOAC([]);
                            self.showQARestartDOAC(false);
                            self.showOralRestartDOAC(false);
                            self.showAdviceRestartDOAC("");
                            self.showWhatQARestartDOAC(false);
                            restart_doac_show_advice_info = "true"
                            
                             self.advice_show_info_notBullet_restart_doac(false);
                            
                            restartDoacAdviceHeader =appConstantsModel.restart_doac_advice_continue_with_anticoag ;
                            restart_doac_info_item = appConstantsModel.restart_doac_advice_info_title;
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_six;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],["false"]));
                            self.showAdviceNewRestartDOAC("");
                            
                            self.setRestartDOACColor("success");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            self.oralMedicationOnLoadRestartDOAC(null)
                            self.postProceduralOnLoadRestartDOAC(null)
                            self.parentalAgentOnLoadRestartDOAC(null)
                            insertRestartDoacAdviceInTable();
                        }else if(value.homeostasis_value === appConstantsModel.homostasis_no && value.yes_no === appConstantsModel.YES){
                            
                            self.showAdviceInBulletsRestartDOAC(true);
                            self.adviceInBulletsRestartDOAC([]);
                            
                            self.showQARestartDOAC(false);
                            self.showOralRestartDOAC(false);
                            self.showAdviceRestartDOAC("");
                            self.showWhatQARestartDOAC(false);
                            restart_doac_show_advice_info = "true"
                            self.advice_show_info_notBullet_restart_doac(false);
                            restartDoacAdviceHeader =appConstantsModel.restart_doac_advice_continue_with_anticoag;
                            restart_doac_info_item=appConstantsModel.restart_doac_advice_info_title;
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_six;
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],["false"]));
                            self.showAdviceNewRestartDOAC("");
                            
                            self.setRestartDOACColor("success");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            insertRestartDoacAdviceInTable();
                        }else if(value.homeostasis_value === "homostasis-no" && value.yes_no === "NO"){
                            
                            self.showAdviceInBulletsRestartDOAC(true);
                            self.adviceInBulletsRestartDOAC([]);
                            
                            self.showQARestartDOAC(false);
                            self.showOralRestartDOAC(false);
                            self.showAdviceRestartDOAC("");
                            self.showWhatQARestartDOAC(false);
                            restart_doac_show_advice_info = "true"
                            self.advice_show_info_notBullet_restart_doac(false);
                            restartDoacAdviceHeader = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                            restart_doac_info_item = appConstantsModel.restart_doac_advice_info_title;
                            restartDoacAdvice = appConstantsModel.restart_doac_advice_six;
                            
                            self.showAdviceInBulletsRestartDOAC(true);
                            var adviceOne = restartDoacAdvice.split(".")[0];
                            var adviceTwo = restartDoacAdvice.split(".")[1];
                            var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                            self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],["false"]));
                            self.showAdviceNewRestartDOAC("");
                            
                            self.setRestartDOACColor("success");
                            self.disableAdviceValueRestartDOAC(null);
                            self.enableAdviceRestartDOAC(true);
                            self.oralMedicationOnLoadRestartDOAC(null)
                            self.postProceduralOnLoadRestartDOAC(null)
                            self.parentalAgentOnLoadRestartDOAC(null)
                            insertRestartDoacAdviceInTable();
                        }else if(value.homeostasis_value === appConstantsModel.homostasis_yes && value.yes_no === appConstantsModel.NO){
                            self.showAdviceInBulletsRestartDOAC(false);
                            self.adviceInBulletsRestartDOAC([]);
                            
                            self.showQARestartDOAC(true);
                            self.showOralRestartDOAC(false);
                            self.showAdviceRestartDOAC(appConstantsModel.restart_doac_default_advice);
                             self.showAdviceInBulletsRestartDOAC(false);
                            self.showWhatQARestartDOAC(false);
                            self.setRestartDOACColor(null);
                            self.showAdviceNewRestartDOAC("");
                            if(value.parental_agent_value === appConstantsModel.parental_agent_no){
                                 self.postProceduralOnLoadRestartDOAC(null);
                                self.showAdviceInBulletsRestartDOAC(true);
                                self.adviceInBulletsRestartDOAC([]);
                                restart_doac_show_advice_info = "true";

                                
                                self.advice_show_info_notBullet_restart_doac(false);
                                self.showAdviceRestartDOAC("");
                                
                                restartDoacAdviceHeader = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                restart_doac_info_item = appConstantsModel.restart_doac_advice_info_title;
                                restartDoacAdvice = appConstantsModel.restart_doac_advice_seven;
                                var adviceOne = restartDoacAdvice.split(".")[0];
                                var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                                self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                                self.showAdviceNewRestartDOAC("");
                                
                                self.setRestartDOACColor("success");
                                self.disableAdviceValueRestartDOAC(null);
                                self.enableAdviceRestartDOAC(true);
                                insertRestartDoacAdviceInTable();
                                self.showWhatQARestartDOAC(false);
                            }else if(value.parental_agent_value === appConstantsModel.parental_agent_yes){
                                self.showWhatQARestartDOAC(true);
                                if(value.post_procedural_value === appConstantsModel.high && value.parental_agent_value === appConstantsModel.parental_agent_yes){
                                    
                                    self.showAdviceInBulletsRestartDOAC(true);
                                    self.adviceInBulletsRestartDOAC([]);
                                    restart_doac_show_advice_info = "true";
                                    self.advice_show_info_notBullet_restart_doac(false);
                                    self.showAdviceRestartDOAC("");
                                    restartDoacAdviceHeader = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                    restart_doac_info_item = appConstantsModel.restart_doac_advice_info_title;
                                    restartDoacAdvice = appConstantsModel.restart_doac_advice_eight;
                                    var adviceOne = restartDoacAdvice.split(".")[0];
                                    var adviceTwo = restartDoacAdvice.split(".")[1];
                                    var adviceFour = restartDoacAdvice.split(".")[2];
                                    var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],["false"]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceFour + "."],[""],["false"]));
                                    self.showAdviceNewRestartDOAC("");
                                    
                                    self.setRestartDOACColor("success");
                                    self.disableAdviceValueRestartDOAC(null);
                                    self.enableAdviceRestartDOAC(true);
                                    insertRestartDoacAdviceInTable();
                                }else if(value.post_procedural_value === appConstantsModel.low && value.parental_agent_value === appConstantsModel.parental_agent_yes){
                                     self.showAdviceInBulletsRestartDOAC(true);
                       self.adviceInBulletsRestartDOAC([]);
                                    restart_doac_show_advice_info = "true";
                                    self.advice_show_info_notBullet_restart_doac(false);
                                    self.showAdviceRestartDOAC("");
                                    restartDoacAdviceHeader =appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                    restart_doac_info_item=appConstantsModel.restart_doac_advice_info_title;
                                    restartDoacAdvice = appConstantsModel.restart_doac_advice_nine;
                                    
                                     var adviceOne = restartDoacAdvice.split(".")[0];
                                    var adviceTwo = restartDoacAdvice.split(".")[1] ;
                                    var adviceFour =restartDoacAdvice.split(".")[2];
                                    var adviceThree = appConstantsModel.restart_doac_advice_continue_with_anticoag;
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceThree ],[appConstantsModel.restart_doac_advice_info_title],[restart_doac_show_advice_info]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceOne + "."],[""],["false"]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceTwo + "."],[""],["false"]));
                                    self.adviceInBulletsRestartDOAC.push(new getAdviceInBulletRestartDoac([adviceFour + "."],[""],["false"]));
                                    self.showAdviceNewRestartDOAC("");
                                    
                                    self.setRestartDOACColor("success");
                                    self.disableAdviceValueRestartDOAC(null);
                                    self.enableAdviceRestartDOAC(true);
                                    self.oralMedicationOnLoadRestartDOAC(null);
                                    insertRestartDoacAdviceInTable();
                                }
                            }
                        }
                    } else {
                       self.advice_show_info_notBullet_restart_doac(false);
                       self.showAdviceRestartDOAC(appConstantsModel.restart_doac_default_advice);
                       self.showAdviceInBulletsRestartDOAC(false);
                       self.setRestartDOACColor(null);
                    } 
                });
            } catch(ex){
                console.log("appViewModel() : Error in insertion of restart doac advice : " + ex.message);
            }
        }
        
        /**
         * insertRestartDoacAdviceInTable function
         * insertRestartDoacAdviceInTable is used to insert advice in session table.
         */
        function insertRestartDoacAdviceInTable(){
            try {
                sessionStorage.setItem("ADVICE_FROM_RESTART", "true");
                if(!insertAdviceisFlagRestartDOAC){
                    var sessionColumnData = [{ restart_advice_id: "1", advice_value:restartDoacAdvice,advice_header:restartDoacAdviceHeader,info_advice_title:restart_doac_info_item,advice_info_show:restart_doac_show_advice_info }];
                    var dataToStore = JSON.stringify(sessionColumnData);
                    sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE", dataToStore);
                    insertAdviceisFlagRestartDOAC = true;
                    sessionStorage.setItem("INSERT_ADVICE_RESTART_DOAC", "true");
                }else{
                    updateRestartDoacAdviceIntoTable();
                }
            } catch(ex){
                console.log("appViewModel() : Error in updation of restart doac advice in table: " + ex.message);
            }
        }
        
        /**
         * updateRestartDoacAdviceIntoTable function
         * updateRestartDoacAdviceIntoTable is used to update restart doac advice into table.
         */
        function updateRestartDoacAdviceIntoTable(){
            try {
                var sessionColumnData = [{ restart_advice_id: "1",advice_value:restartDoacAdvice,advice_header:restartDoacAdviceHeader,info_advice_title:restart_doac_info_item,advice_info_show:restart_doac_show_advice_info }];
                var dataToStore = JSON.stringify(sessionColumnData);
                sessionStorage.setItem("RESTART_DOAC_ADVICE_STORAGE", dataToStore);
            } catch(ex){
                console.log("appViewModel() : Error in updation of restart doac advice : " + ex.message);
            }
        }
        
        /**
         * goToBridgeFromRestartDOAC function
         * goToBridgeFromRestartDOAC is used to navigate to the bridge page.
         */
        this.goToBridgeFromRestartDOAC = function(){
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
            pageArrays.push("bridgePage");
            fetchSavedChadVascData();
            selectTherapyDataOnBridge();
            getBleedRiskYesNoData();
            getCrclValueFromWizard();
            setBridgeScreenLocked();
            enableAdviceTab();
            
        }
        
        /**
         * patientPageFromRestartDOAC function
         * patientPageFromRestartDOAC is used to navigate to the patient page.
         */
        this.patientPageFromRestartDOAC = function(){
            sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "PATIENT");
            pager.navigate("#!/patientPage");
            pageArrays.push("patientPage");
            self.lockIconOnPatientForBridgeTab(true);
            self.lockIconOnPatientForInterruptTab(true);
            setPatientScreenLocked();
            enableAdviceTab();
            getNotifications();
        }
      
	    /**
         * goToInterruptFromRestartDOAC function
         * goToInterruptFromRestartDOAC is used to navigate to the interrupt page.
         */
        this.goToInterruptFromRestartDOAC = function(){
            sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
            sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
            self.interruptBridgeLockIcon(true);
            selectTherapyData();
            selectBleedRiskYesNo();
            setInterruptScreenLocked();
	        enableAdviceTab();
        }
        
        /**
         * goToAdviceFromRestartDOAC function
         * goToAdviceFromRestartDOAC is used to navigate to the advice page.
         */
        this.goToAdviceFromRestartDOAC = function(){
            sessionStorage.setItem("CURRENT_PAGE","9"); //For browser back functionality//
            sessionStorage.setItem("PREV_PAGE","4"); //For browser back functionality//
            
            self.arrayOfPages.push([4,9]);
            sessionStorage.setItem("arrayValue",self.arrayOfPages());
            
            sessionStorage.setItem("GET_ITEM_LOCKED","TRUE");
            sessionStorage.setItem("DESTINATION", "RESTART_DOAC");
            pager.navigate("#!/adviceViewPage");
            pageArrays.push("adviceViewPage");
            getAdvices();
        }
        
        /**
         * selectRestartStoredDataFromTableOnRestartDoac function
         * selectRestartStoredDataFromTableOnRestartDoac is used fetch the value of restrat from restart.
         */ 
        function selectRestartStoredDataFromTableOnRestartDoac(){
            try {
                var data = sessionStorage.getItem("RESTART_SESSION_STORAGE");
                if(data){
                    var localData = JSON.parse(data);
                    if(localData != null && localData != ""){
                        $.each(localData, function(key, value){
                            try{
                               self.cardiacSurgeryOnLoadRestartDOAC(value.cardiac_value);
                               self.homostasisOnLoadRestartDOAC(value.homeostasis_value);
                               self.postProceduralOnLoadRestartDOAC(value.post_procedural_value);
                               self.oralMedicationOnLoadRestartDOAC(value.oral_medication_value);
                               self.parentalAgentOnLoadRestartDOAC(value.parental_agent_value);
                               self.restartDoacProcedureQuestionOnLoad(value.restartDoacProcedureQuestion_value);
                               selectAllRestartDoacDataFromSessionTable();
                               if(value.homeostasis_value != ""){
                                   self.inactiveResetRestartDOAC(false);
                                   self.activeResetRestartDOAC(true);
                               }

                               
                            }catch(ex){
                                console.log("Catch Entered" + ex.message);
                            }
                        });
                    }
                }
            } catch(ex){
               console.log("appViewModel() : Error in getting the stored restart doac data : " + ex.message);
            }
        }
        
        /***************** Advice Screen ******************/
        
        /**
         * selectTherapyFromTableOnAdvice function
         * selectTherapyFromTableOnAdvice is used fetch the value of bleed type on advice.
         */ 
        function selectTherapyFromTableOnAdvice(){
             try {
                 setTimeout(function() {
                     var data = sessionStorage.getItem("YES_NO_STORAGE");
                     if(data){
                         var localData = JSON.parse(data);
                         if(localData != null && localData != ""){
                             self.adviceInputs(true);
                             $.each(localData, function(key, value) {
                                try {
                                    self.bleedRiskOnAdvice(value.yes_no);
                                } catch(ex) {
                                    console.log("Catch Entered" + ex.message);
                                }
                       
                            });
                        }
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the risk values on advice : " + ex.message);
            }
        }
        
        /**
         * selectProcedureOnAdvice function
         * selectProcedureOnAdvice is used fetch the value of procedure on advice.
         */ 
        function selectProcedureOnAdvice(){
             try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("PROCEDURE_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            self.showRiskOnAdvice(true);
                            $.each(localData, function(key, value){
                               try{
                                   self.riskTypeOnAdvice(value.procedure_value_risk);
                                   self.procedureNameOnAdvice(value.procedure_value_name);
                               } catch(ex){
                                    console.log("CAtch Entered" + ex.message);
                               }
                            });
                        }else{
                            self.showRiskOnAdvice(false);
                            self.riskTypeOnAdvice("Not Calculated");
                        }
                    }else{
                         self.showRiskOnAdvice(false);
                        self.riskTypeOnAdvice("Not Calculated");
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the procedure values on advice : " + ex.message);
            }
        }
        this.showChadvascOnAdviceInput = ko.observable(true)
        /**
         * selectCHADVASCOnAdvice function
         * selectCHADVASCOnAdvice is used fetch the value of chad vasc.
         */ 
        function selectCHADVASCOnAdvice(){
             try {
                setTimeout(function() {
                    var data = sessionStorage.getItem("CHADVASC_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            self.showChadvascOnAdvice(true);
                            self.showChadvascOnAdviceInput(true);
                            $.each(localData, function(key, value){
                               try{
                                   var chadvascAgeValue = (value.selected_age);
                                   if(chadvascAgeValue == appConstantsModel.wizard_between65To74){
                                       self.chadvascAgeOnAdvice(appConstantsModel.age_65_74);
                                   }else if(chadvascAgeValue == appConstantsModel.wizard_lessThan65){
                                        self.chadvascAgeOnAdvice(appConstantsModel.age_less65);
                                   }else if(chadvascAgeValue == appConstantsModel.wizard_greaterThan74){
                                        self.chadvascAgeOnAdvice(appConstantsModel.age_more74);
                                   }

                                   var chadvascGender = (value.selected_gender);
                                   if(chadvascGender == appConstantsModel.wizard_male){
                                        self.chadvascSexOnAdvice(appConstantsModel.adviceMale)
                                   } else if(chadvascGender == appConstantsModel.wizard_female){
                                        self.chadvascSexOnAdvice(appConstantsModel.adviceFemale);
                                   }
                                   self.chadVascScoreOnAdvice(value.chadsVasc_value);
                                   chadvascAgeForStatic = String(self.chadvascAgeOnAdvice());
                                   chadvascSexForStatic = String(self.chadvascSexOnAdvice());
                                   chadvascAgeForStaticEncode = Base64.encode(chadvascAgeForStatic); 
                                   chadvascSexForStaticEncode = Base64.encode(chadvascSexForStatic); 
                                   chadvascScoreForStatic = String(value.chadsVasc_value);
                                   chadvascScoreForStaticEncode = Base64.encode(chadvascScoreForStatic); 
                                } catch(ex){
                                    console.log("Catch Entered" + ex.message);
                                }
                       
                            });
                        }
                    }else{
                      
                         if(!self.bridgeVMchadVascInputValue()){
                             self.showChadvascOnAdviceInput(false);
                            self.showChadvascOnAdvice(false);
                            self.chadVascScoreOnAdvice('')
                            chadvascAgeForStatic = null;
                            chadvascSexForStatic = null;
                            chadvascAgeForStaticEncode = null;
                            chadvascSexForStaticEncode = null;
                            chadvascScoreForStatic = null;
                            chadvascScoreForStaticEncode = undefined; 
                         }else{
                             self.showChadvascOnAdviceInput(false);
                             self.showChadvascOnAdvice(true);
                             self.chadVascScoreOnAdvice(self.bridgeVMchadVascInputValue());
                             chadvascScoreForStatic = String(self.bridgeVMchadVascInputValue());
                             chadvascScoreForStaticEncode = Base64.encode(chadvascScoreForStatic);
                             chadvascAgeForStatic = null;
                             chadvascSexForStatic = null;
                             chadvascAgeForStaticEncode = null;
                             chadvascSexForStaticEncode = null;
                         }
                    
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the chad vasc values on advice : " + ex.message);
            }
        }
        
        /**
         * selectDrugTypeOnAdvice function
         * selectDrugTypeOnAdvice is used fetch the value of drug type.
         */ 
        function selectDrugTypeOnAdvice(){
             try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("THERAPY_SESSION_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            $.each(localData, function(key, value){
                               try{
                                   self.drugTypeOnAdvice(value.selected_therapy_type[0]);
                               } catch(ex){
                                    console.log("Catch Entered" + ex.message);
                               }
                            });
                        }
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the drug type values on advice : " + ex.message);
            }
        }
        
        /**
         * selectcrclOnAdvice function
         * selectcrclOnAdvice is used fetch the value of advice from crcl.
         */ 
        function selectcrclOnAdvice(){
             try {
                setTimeout(function(){
                     self.showCrclOnAdvice(true);
                     var crclValueFromBridge = sessionStorage.getItem("bridgeVMcrclCheckVal");
                     var crclValueFromInterruptInput = sessionStorage.getItem("CRCL_INTERRUPT_VALUE");
                     if(crclValueFromBridge == appConstantsModel.wizard_yes ){
                         
                           self.crclScoreValueOnAdvice(appConstantsModel.wizard_yes)
                           crclScoreForStatic =(appConstantsModel.wizard_yes);
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                     }else if (crclValueFromBridge == appConstantsModel.wizard_no){
                           self.crclScoreValueOnAdvice(appConstantsModel.wizard_no)
                           crclScoreForStatic =(appConstantsModel.wizard_no);
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);

                     }else if(crclValueFromBridge == undefined || crclValueFromBridge == "undefined" || crclValueFromBridge == null ){
                             self.crclScoreValueOnAdvice("Not Calculated");
                            crclScoreForStatic = ("Not Calculated");
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                     
                     }
                    
                    if(crclValueFromInterruptInput >= 30){
                    
                        crclScoreForStatic =(appConstantsModel.wizard_yes);
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                    }else if(crclValueFromInterruptInput < 30){
                   
                        if(crclValueFromInterruptInput != null){
                        crclScoreForStatic =(appConstantsModel.wizard_no);
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                        }else{
                           
                            if(!self.bridgeVMcrclCheckVal()){
                                crclScoreForStatic = ("Not Calculated");
                            }
                            
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                        }
                    
                    }else if (crclValueFromInterruptInput == undefined || crclValueFromInterruptInput =="undefined"){
                    
                        crclScoreForStatic =("Not Calculated");
                          crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                    }
                    
                   
                       
                          
                     var data = sessionStorage.getItem("CRCL_SESSION_DATA");
                     if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != "" && localData != "null"){
                            $.each(localData, function(key, value){
                                if(value.crcl_value >= 30 || value.crcl_value == "Yes"){
                                    self.crclScoreValueOnAdvice(appConstantsModel.wizard_yes)
                                }else{
                                   self.crclScoreValueOnAdvice(appConstantsModel.wizard_no)

                                }
                                if(value.crcl_age == "" && value.crcl_gender == "" && value.crcl_weight == "" && value.crcl_serum == ""){
                                     self.showAfterCompute(false);
					self.crclAgeOnAdvice(null);
					self.crclSexOnAdvice(null);
					self.crclWeightOnAdvice(null);
					self.crclScoreOnAdvice(null);
					crclAgeForStatic = null;
					crclAgeForStaticEncode =  null;
					crclSexForStatic = null;
					crclSexForStaticEncode = null;
					crclWeightForStatic =null
					crclWeightForStaticEncode = null
					crclSerumForStatic = null
					crclSerumForStaticEncode = null;
					crclScoreForStatic = "Not Calcluated"
                                }else{ 
                                    self.showAfterCompute(true);
                                       try{
                                           if(value.crcl_unit == false){
                                               self.crclAgeOnAdvice(value.crcl_age);
                                               var crclGender = (value.crcl_gender);
                                               if(crclGender == appConstantsModel.wizard_male){
                                                   self.crclSexOnAdvice(appConstantsModel.adviceMale);
                                               }else if(crclGender == appConstantsModel.wizard_female){
                                                   self.crclSexOnAdvice(appConstantsModel.adviceFemale);
                                               }

                                               self.crclWeightOnAdvice(value.crcl_weight + " lbs (in US)");
                                               self.crclScoreOnAdvice(value.crcl_serum + " mg/dl (in US)");
                                               if(value.crcl_weight == undefined || value.crcl_weight == null || value.crcl_weight == "" || value.crcl_weight == 'undefined' ){
                                                   self.showAfterCompute(false);
                                               }
                                           
                                           } else{
                                               self.crclAgeOnAdvice(value.crcl_age );
                                               var crclGender = (value.crcl_gender);
                                               if(crclGender == appConstantsModel.wizard_male){
                                                   self.crclSexOnAdvice(appConstantsModel.adviceMale);
                                               }else if(crclGender == appConstantsModel.wizard_female){
                                                   self.crclSexOnAdvice(appConstantsModel.adviceFemale);
                                               }
                                               self.crclWeightOnAdvice(value.crcl_weight + " kgs (in SI)");
                                               self.crclScoreOnAdvice(value.crcl_serum + " µmol/L (in SI)");
                                           }
                                           if(value.crcl_value >= 30){
                                               self.crclScoreValueOnAdvice(appConstantsModel.wizard_yes)
                                               crclScoreForStatic = (appConstantsModel.wizard_yes);
                                                crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);
                                           }else{
                                               self.crclScoreValueOnAdvice(appConstantsModel.wizard_no)
                                               crclScoreForStatic = (appConstantsModel.wizard_no);
                                                crclScoreForStaticEncode = Base64.encode(crclScoreForStatic);

                                           }
                                           
                                          
                                          
                                           crclAgeForStatic = String(self.crclAgeOnAdvice());
                                           crclAgeForStaticEncode = Base64.encode(crclAgeForStatic);
                                           crclSexForStatic = String(self.crclSexOnAdvice());
                                           crclSexForStaticEncode = Base64.encode(crclSexForStatic);
                                           crclWeightForStatic = String(self.crclWeightOnAdvice());
                                           crclWeightForStaticEncode = Base64.encode(crclWeightForStatic);
                                           crclSerumForStatic = String(self.crclScoreOnAdvice());
                                           crclSerumForStaticEncode = Base64.encode(crclSerumForStatic);
                                           
                                       }catch(ex){
                                            console.log("Catch Entered" + ex.message);
                                       }
                                  }
                            });
                        }
                    }else{
                    
			self.showAfterCompute(false);
			self.crclAgeOnAdvice(null);
			self.crclSexOnAdvice(null);
			self.crclWeightOnAdvice(null);
			self.crclScoreOnAdvice(null);
			crclAgeForStatic = null;
			crclAgeForStaticEncode =  null;
			crclSexForStatic = null;
			crclSexForStaticEncode = null;
			crclWeightForStatic =null
			crclWeightForStaticEncode = null
			crclSerumForStatic = null
			crclSerumForStaticEncode = null;
			crclScoreForStatic = "Not Calcluated"

                            
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the crcl values on advice : " + ex.message);
            }
           
        }
        
        /**
         * selectRestartOnAdvice function
         * selectRestartOnAdvice is used fetch the value of advice from restart.
         */ 
        function selectRestartOnAdvice(){
             try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("RESTART_SESSION_STORAGE");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            $.each(localData, function(key, value){
                               try{
                                   
                                    if((self.postProceduralOnLoadRestartWarfarin() == "" || self.postProceduralOnLoadRestartWarfarin() == null) &&  (self.postProceduralOnLoadRestartDOAC() == "" || self.postProceduralOnLoadRestartDOAC() == null)){
                                        self.postProceduralRiskAdvice("Not Calculated");
                                    }else{
                                        if(self.postProceduralOnLoadRestartWarfarin() == "" || self.postProceduralOnLoadRestartWarfarin() == null){
                                            self.postProceduralRiskAdvice(self.postProceduralOnLoadRestartDOAC().capitalize());
                                        }else{
                                            self.postProceduralRiskAdvice(self.postProceduralOnLoadRestartWarfarin().capitalize())
                                        }
                                    }
                                   
                                   
                                   if(value.homeostasis_value === appConstantsModel.homostasis_no){
                                        self.showRestartAdvice(true);
                                        self.restartAdvice(appConstantsModel.wizard_no);
                                        hemostasisForStatic = self.restartAdvice();
                                       hemostasisForStaticEncode = Base64.encode(hemostasisForStatic);
                                   }
                                   else if(value.homeostasis_value === appConstantsModel.homostasis_yes){
                                        self.showRestartAdvice(true);
                                        self.restartAdvice(appConstantsModel.wizard_yes);
                                        hemostasisForStatic = self.restartAdvice();
                                       hemostasisForStaticEncode = Base64.encode(hemostasisForStatic);
                                   } else {
                                       hemostasisForStaticEncode   = null;
                                       self.showRestartAdvice(false);
                                   }
                               }catch(ex){
                                    console.log("Catch Entered" + ex.message);
                               }

                            });
                        }
                    } else { 
                        hemostasisForStaticEncode   = null;
                        self.showRestartAdvice(false);
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the restart advice values on advice : " + ex.message);
            }
           
        }
        
        /**
         * selectDataFromInterruptOnAdvice function
         * selectDataFromInterruptOnAdvice is used fetch the value of advice from interrupt.
         */ 
        function selectDataFromInterruptOnAdvice(){
             try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("INTERRUPT_DATA");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != "" && localData != "null"){
                            $.each(localData, function(key, value){
                               try{
                                   var result = sessionStorage.getItem("ADVICE_FROM_INTERRUPT");
                                   self.interruptNoAdvice(false);
                                   self.interruptHasAdvice(true);
                                   var status  = value.whenToAdviceStatus;
                                   statusInterrupt = value.whenToAdviceStatus;
                                   statusInterruptEncode = Base64.encode(statusInterrupt); 
                                   if(status == appConstantsModel.positive ){
                                       self.interruptAdviceStatus(true);
                                   }else {
                                       self.interruptAdviceStatus(false);
                                   }
                                   if(value.whetherToadvice == appConstantsModel.WhetherInterrupt_Warfrain_advice_No_Uncertain){
                                       self.weatherInterruptAdvice(appConstantsModel.WhetherInterrupt_Warfrain_advice_No_Uncertain1);
                                   }else if(value.whetherToadvice == appConstantsModel.whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant){
                                       self.weatherInterruptAdvice(appConstantsModel.whetherInterrupt_warfrain_advice_yes_Notclinicallyimportant1);
                                   }else{
                                       self.weatherInterruptAdvice(value.whetherToadvice);
                                   }
                                   
                                   self.whenInterruptAdvice(value.whenToadvie);
                                   if(value.whetherToadvice == appConstantsModel.restart_doac_default_advice && value.whenToadvie == appConstantsModel.restart_doac_default_advice){
                                        self.interruptNoAdvice(true);
                                        self.interruptHasAdvice(false);
                                   }

                               }catch(ex){
                                    console.log("Catch Entered" + ex.message);
                               }

                            });
                        }else{
                            self.interruptNoAdvice(true);
                            self.interruptHasAdvice(false);
                            self.weatherInterruptAdvice("");
                            self.whenInterruptAdvice("");
                            
                        }
                    }else{
                            self.interruptNoAdvice(true);
                            self.interruptHasAdvice(false);
                            self.weatherInterruptAdvice("");
                            self.whenInterruptAdvice("");
                    }
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in getting the interrupt advice values on advice : " + ex.message);
            }
           
        }
        
        /**
         * selectDataFromBridgeWarfarin function
         * selectDataFromBridgeWarfarin is used fetch the value of advice from bridge warfarin.
         */ 
        function selectDataFromBridgeWarfarin(){
             try {
                 console.log("selectDataFromBridgeWarfarin executed");
                setTimeout(function(){
                     self.showWarningTrueAdvice(false);
                     self.showWarningFalseAdvice(true);
                     var data = sessionStorage.getItem("BRIDGE_DATA");
                     if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            $.each(localData, function(key, value){
                               try{
                                    var result = sessionStorage.getItem("ADVICE_FROM_BRIDGE");
                                    if(result == "true") {
                                        self.bridgeNoAdvice(false);
                                        self.bridgeHasAdvice(true);
                                    }
                                    var status  = value.whenToAdviceStatusBridge;
                                    statusBridge = value.whenToAdviceStatusBridge;
                                    statusBridgeEncode = Base64.encode(statusBridge); 
                                    if(status === appConstantsModel.positive ) {
                                        self.bridgeAdviceStatus(true);
                                    } else if(status === appConstantsModel.nagative) {
                                        self.bridgeAdviceStatus(false);
                                    }
                                   if(value.whetherToadviceBridge == appConstantsModel.bridge_indication_for_bridging){

                                        self.weatherBridgeAdvice(appConstantsModel.bridge_indication_for_bridging1);
                                   }else if(value.whetherToadviceBridge == appConstantsModel.bridge_likely_do_not_bridge){
                                        self.weatherBridgeAdvice(appConstantsModel.bridge_likely_do_not_bridge1);
                                   }else if(value.whetherToadviceBridge == appConstantsModel.bridge_do_not_bridge){
                                       self.weatherBridgeAdvice(appConstantsModel.bridge_do_not_bridge1);
                                   }else if(value.whetherToadviceBridge == appConstantsModel.bridge_likely_bridge){
                                       self.weatherBridgeAdvice(appConstantsModel.bridge_likely_bridge1);
                                   }else if(value.whetherToadviceBridge == appConstantsModel.bridge_likely_bridge_address_other_factors){
                                       self.weatherBridgeAdvice(appConstantsModel.bridge_likely_bridge_address_other_factors1);
                                   }else{
                                       self.weatherBridgeAdvice(value.whetherToadviceBridge);
                                   }
                                
                                    if(value.whenToadvieBridge == appConstantsModel.UFH_advice){
                                        self.whenBridgeAdvice(appConstantsModel.UFH_advice_static);
                                    }else if(value.whenToadvieBridge == appConstantsModel.LMWH_advice){
                                         self.whenBridgeAdvice(appConstantsModel.LMWH_advice_static);
                                    }else{
                                        self.whenBridgeAdvice(value.whenToadvieBridge);
                                    }
                                    self.thromboticRisk(sessionStorage.getItem("thrombotic"));
                               }catch(ex){
                                    console.log("Catch Entered" + ex.message);
                               }

                            });
                        }else{
                            self.bridgeNoAdvice(true);
                            self.bridgeHasAdvice(false);
                            self.weatherBridgeAdvice("");
                            self.whenBridgeAdvice("");
                            self.thromboticRisk("Not Calculated");
                        }
                    }else{
                         self.bridgeNoAdvice(true);
                            self.bridgeHasAdvice(false);
                            self.weatherBridgeAdvice("");
                            self.whenBridgeAdvice("");
                            self.thromboticRisk("Not Calculated");
                        //self.thromboticRisk("Not Calculated");
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the bridge warfarin advice values on advice : " + ex.message);
            }
           
        }
        
        /** 
         * selectDataFromBridge function
         * selectDataFromBridge is used fetch the value of advice from bridge DOAC.
         */
        function selectDataFromBridge(){
             try {
                setTimeout(function(){
                    var data = sessionStorage.getItem("WARNING_FROM_BRIDGE_DOAC");
                    if(data) {
                        if(data != null && data != ""){
                           try {
                                var result = sessionStorage.getItem("ADVICE_FROM_BRIDGE");
                                if(result == "true") {
                                    self.bridgeNoAdvice(false);
                                    self.bridgeHasAdvice(true);
                                }
                                self.weatherBridgeAdviceWarning(data);
                                self.showWarningTrueAdvice(true);
                                self.showWarningFalseAdvice(false);
                                self.thromboticRisk("Not Calculated");
                           } catch(ex){
                                console.log("Catch Entered" + ex.message);
                           }
                        } else {
                            self.bridgeNoAdvice(true);
                            self.bridgeHasAdvice(false);
                            self.thromboticRisk("Not Calculated");
                        }
                    } else {
                        self.bridgeNoAdvice(true);
                        self.bridgeHasAdvice(false);
                        self.weatherBridgeAdviceWarning("");
                        self.thromboticRisk("Not Calculated");
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the bridge DOAC advice on advice : " + ex.message);
            } 
        }
        
        /**
         * selectDataFromRestartTableOnAdvice function
         * selectDataFromRestartTableOnAdvice is used fetch the value of advice from restart.
         */ 
        function selectDataFromRestartTableOnAdvice(){
            try {
                setTimeout(function(){
                    var data_new = sessionStorage.getItem("RESTART_DOAC_ADVICE_STORAGE");
                    if(data_new){
                        var localDataNew = JSON.parse(data_new);
                        if(localDataNew != null && localDataNew != ""){
                            $.each(localDataNew, function(key, value){
                               try{
                                   if((value.advice_value) != null && (value.advice_value) != "" && (value.advice_value) != undefined){
                                        self.restartNoAdvice(false);
                                        self.restartHasAdvice(true);
                                        selectAdviceFromRestartTable();
                                   } else {
                                        self.restartNoAdvice(true);
                                        self.restartHasAdvice(false);
                                   } 
                                    var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                                        if(localData != null && localData != ""){
                                            $.each(localData, function(key, value){
                                                if ((value.selected_DOACtype[0]) === appConstantsModel.doac_anti_xa || (value.selected_DOACtype[0]) ===     appConstantsModel.doac_dti ){
                                                self.setClassForRestart("icontext");
                                                }else if((value.selected_DOACtype[0]) === appConstantsModel.VKA){
                                                self.setClassForRestart(null);
                                                }
                                        });
                                    }

                               }catch(ex){
                                    console.log("Catch Entered" + ex.message);
                               }

                            });
                            
                            
                        }else{
                            self.restartNoAdvice(true);
                            self.restartHasAdvice(false);
                            self.showRestartAdviceText("");
                            self.showRestartAdviceHeader("");
                        }
                    }else{
                        self.restartNoAdvice(true);
                        self.restartHasAdvice(false);
                        self.showRestartAdviceText("");
                        self.showRestartAdviceHeader("");
                    }
                },100);
            } catch(ex){
               console.log("appViewModel() : Error in getting the restart advice values on advice : " + ex.message);
            }
        }
        
        /**
         * selectAdviceFromRestartTable function
         * selectAdviceFromRestartTable is used fetch the value of restrat DOAC advice.
         */ 
        function selectAdviceFromRestartTable(){
            try {
                var data = sessionStorage.getItem("RESTART_DOAC_ADVICE_STORAGE");
                    if(data){
                        var localData = JSON.parse(data);
                        if(localData != null && localData != ""){
                            $.each(localData, function(key, value){
                               try{
                                   if(value.advice_header == undefined || value.advice_header ==""){
                                        self.showRestartAdviceHeader("");
                                        self.hideAdviceHeader(false);
                                       
                                   }else{
                                        self.hideAdviceHeader(true);
                                        self.showRestartAdviceHeader(value.advice_header);
                                   }
                                   self.advice_show_info(value.advice_info_show);
                                   value_advice_show_info = value.advice_info_show;
                                   self.advice_info_title(value.info_advice_title);
                                   self.showRestartAdviceText(value.advice_value);
                                   if(value.advice_info_show == "false") {
                                        self.advice_show_info(false);
                                   } else {
                                        self.advice_show_info(true);
                                   }
                               }catch(ex){
                                   console.log("Catch Entered" + ex.message);
                               }
                            });
                        }
                    }
            } catch(ex){
               console.log("appViewModel() : Error in getting the restart doac advice values on advice : " + ex.message);
            }
        }
        
        /**
         * goToEvaluator function
         * goToEvaluator is used to navigate to evaluator.
         */ 
        this.goToEvaluator = function(){
           setWidthProfile();
            enableAdviceTab();
            var Evaluator = sessionStorage.getItem("DESTINATION");
            if(Evaluator == appConstantsModel.adviceINTERRUPT){
				pager.navigate("#!/interruptPage");
                pageArrays.push("interruptPage");
                setInterruptScreenLocked();
            } else if(Evaluator == appConstantsModel.adviceBRIDGE){
                pager.navigate("#!/bridgePage");  
                pageArrays.push("bridgePage");
                setBridgeScreenLocked();
            } else if(Evaluator == appConstantsModel.adviceRESTART_DOAC){
                pager.navigate("#!/restartPage");
                pageArrays.push("restartPage");
            } else if(Evaluator == appConstantsModel.adviceRESTART_WARFARIN){
				pager.navigate("#!/restartPageWarfarin");
                pageArrays.push("restartPageWarfarin");
            } else if (Evaluator == "PATIENT"){
				pager.navigate("#!/patientPage");
                pageArrays.push("patientPage");
                setPatientScreenLocked();
                getNotifications();
            } else{
            
                pager.navigate("#!/patientPage");
                pageArrays.push("patientPage");
            }
        }
        
        /**
         * goToInterruptFromAdvice function
         * goToInterruptFromAdvice is used to navigate to interrupt.
         */ 
        this.goToInterruptFromAdvice = function(){
            selectTherapyData();
            selectBleedRiskYesNo();
            sessionStorage.setItem("DESTINATION", "INTERRUPT");
            pager.navigate("#!/interruptPage");
            pageArrays.push("interruptPage");
            setInterruptScreenLocked();
            enableAdviceTab();
        }
        
        /**
         * goToBridgeFromAdvice function
         * goToBridgeFromAdvice is used to navigate to bridge.
         */ 
        this.goToBridgeFromAdvice = function(){
            sessionStorage.setItem("DESTINATION", "BRIDGE");
            pager.navigate("#!/bridgePage");
             pageArrays.push("bridgePage");
            fetchSavedChadVascData();
            selectTherapyDataOnBridge();
            getBleedRiskYesNoData();
            getCrclValueFromWizard();
            setBridgeScreenLocked();
            enableAdviceTab();
        }
        
        /**
         * goToAdviceFromProfile function
         * goToAdviceFromProfile is used to navigate to profile.
         */ 
        this.goToAdviceFromProfile = function(){
            self.showTabViewProfile(true);
            self.showTabViewSummary(false);
            self.adviceTabValueProfile("is-active");
            self.adviceTabValueSummary(null);
        }
        
        /**
         * goToSummary function
         * goToSummary is used to navigate to summary.
         */ 
        this.goToSummary = function(){
            self.showTabViewSummary(true);
            self.showTabViewProfile(false);
            self.adviceTabValueSummary("is-active");
            self.adviceTabValueProfile(null);
        }
        
        /**
         * goToRestartFromAdvice function
         * goToRestartFromAdvice is used to navigate to restart.
         */ 
        this.goToRestartFromAdvice = function(){
            fetchTherapyTypeFromTableAndGoToRestart();
        }
        
        /**
         * fetchTherapyTypeFromTableAndGoToRestart function
         * fetchTherapyTypeFromTableAndGoToRestart is used to select therapy from table.
         */
        function fetchTherapyTypeFromTableAndGoToRestart(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                if(localData != null && localData != ""){
                    $.each(localData, function(key, value){
                        if ((value.selected_DOACtype[0]) === appConstantsModel.doac_anti_xa || (value.selected_DOACtype[0]) === appConstantsModel.doac_dti ){
                            sessionStorage.setItem("DESTINATION", "RESTART_DOAC");
                            pager.navigate("#!/restartPage");
                             pageArrays.push("restartPage");
                            enableAdviceTab();
                        }else if((value.selected_DOACtype[0]) === appConstantsModel.VKA){
                            sessionStorage.setItem("DESTINATION", "RESTART_WARFARIN");
                            pager.navigate("#!/restartPageWarfarin");
                             pageArrays.push("restartPageWarfarin");
                            enableAdviceTab();
                        }
                    });
                }
            } catch(ex){
                console.log("appViewModel() : Error in selection of therapy : " + ex.message);
            }
        }
        
        /**
         * getTherapyTypeFromTableOnAdvice function
         * getTherapyTypeFromTableOnAdvice is used to select therapy type and select data for bridge accordingly.
         */
        function getTherapyTypeFromTableOnAdvice(){
            try {
                var localData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
                if(localData != null && localData != ""){
                    $.each(localData, function(key, value){
                        if ((value.selected_DOACtype[0]) === appConstantsModel.doac_anti_xa || (value.selected_DOACtype[0]) ===     appConstantsModel.doac_dti ){
                            selectDataFromBridge();
                        }else if((value.selected_DOACtype[0]) === appConstantsModel.VKA){
                            selectDataFromBridgeWarfarin();
                        }
                    });
                }
            } catch(ex){
                console.log("appViewModel() : Error in selection of therapy : " + ex.message);
            }
        }
        
        /**
         * emailData function
         * emailData is used to send an email.
         */
        this.emailData = function(){
           var intrAdvice, bridgeAdvice, restartAdvice, procedureNameData, bleedRiskData, procedureNameData,restartAdviceEmailBody;
           var email = "";

           var today = new Date();
           var now = new Date();
           var utc = new Date(now.getTime()+ now.getTimezoneOffset() * 60000);

           var dd = utc.getDate();
           var mm = utc.getMonth()+1; //January is 0!
           var yyyy = utc.getFullYear();
           if(dd<10){
                dd='0'+dd
           }
           if(mm<10){
                mm='0'+mm
           }
           var hh = utc.getHours();
           var min = utc.getMinutes();
           var sec = utc.getSeconds();
           if(hh<10){
               hh='0'+hh;
           }
           if(min < 10){
               min = '0' + min;
           }
           if(sec <10){
               sec = '0' + sec;
           }
           var formattedDate = mm+'/'+dd+'/'+yyyy;
           var time = hh +':'+min;//+':'+ //sec;
           var subject = "ManageAnticoag - Periprocedural Planning Advice (generated "+formattedDate+" "+ hh+":"+ min +")"; 
           var generated = appConstantsModel.generated_on +" "+ formattedDate + "  "+time+"";
           if(self.weatherInterruptAdvice()=="" &&  self.whenInterruptAdvice()==""){
                intrAdvice = appConstantsModel.not_calculated;
           } else {
                intrAdvice = self.weatherInterruptAdvice() + '\n' + self.whenInterruptAdvice();
           }
            
            var interruptAdviceEncode = Base64.encode(intrAdvice);
            
    
            
            var therapyData = JSON.parse(sessionStorage.getItem("THERAPY_SESSION_DATA"));
           if(self.weatherBridgeAdvice() == "" && self.whenBridgeAdvice() == "" && self.weatherBridgeAdviceWarning() == "" ){
                bridgeAdvice = appConstantsModel.not_calculated;
           }else if(self.weatherBridgeAdviceWarning()!="" ){
               if(therapyData[0].selected_therapy_type == appConstantsModel.warfarin && self.weatherBridgeAdviceWarning() == appConstantsModel.doac_warning && self.weatherBridgeAdvice() == ""){
                  bridgeAdvice = appConstantsModel.not_calculated;
               }else if(therapyData[0].selected_therapy_type != appConstantsModel.warfarin) {
                 bridgeAdvice = self.weatherBridgeAdviceWarning();
                 bridgeAdviceWarningForStatic = self.weatherBridgeAdviceWarning();
               }else{
                    bridgeAdviceWarningForStatic = undefined;
                    bridgeAdvice = self.weatherBridgeAdvice() + '\n' + self.whenBridgeAdvice() ;
               }
           }else{
               if(therapyData[0].selected_therapy_type == appConstantsModel.warfarin){
                    bridgeAdviceWarningForStatic = undefined;
                    bridgeAdvice = self.weatherBridgeAdvice() + '\n' + self.whenBridgeAdvice() ;
               }else{
                    bridgeAdvice = appConstantsModel.not_calculated;
               }
           }
            var bridgeAdviceEncode = Base64.encode(bridgeAdvice);
            if(bridgeAdviceWarningForStatic != null && bridgeAdviceWarningForStatic != undefined && bridgeAdviceWarningForStatic != ""){
            var bridgeAdviceWarningForStaticEncode = Base64.encode(bridgeAdviceWarningForStatic);
            }
            

           if(self.showRestartAdviceHeader() == "" && self.showRestartAdviceText() == ""){
                restartAdvice = appConstantsModel.not_calculated;
                restartAdviceEmailBody = appConstantsModel.not_calculated;
           }else if(self.showRestartAdviceHeader() == "") {
                restartAdvice = self.showRestartAdviceText();
                restartAdviceEmailBody = self.showRestartAdviceText();
           }else{
                restartAdvice = self.showRestartAdviceHeader() + '\n' + self.showRestartAdviceText();
                restartAdviceEmailBody = self.showRestartAdviceHeader() + " "+ self.showRestartAdviceText();
           }
            
            var restartAdviceEncode = Base64.encode(restartAdvice);

           if(self.procedureNameOnAdvice() == "" ){
                procedureNameData = appConstantsModel.not_calculated;
           }else{
                procedureNameData = self.procedureNameOnAdvice();
           }

           if(self.bleedRiskOnAdvice() == ""  ){
                bleedRiskData = appConstantsModel.not_calculated;
           }else{
                bleedRiskData = self.bleedRiskOnAdvice();
           }

           if(self.procedureNameOnAdvice() == ""  ){
                procedureNameData = appConstantsModel.not_calculated;
           }else{
                procedureNameData = self.procedureNameOnAdvice();
           }
            var postProceduralRisk = 'Not Calculated';
          if((self.postProceduralOnLoadRestartWarfarin() == "" || self.postProceduralOnLoadRestartWarfarin() == null) &&  (self.postProceduralOnLoadRestartDOAC() == "" || self.postProceduralOnLoadRestartDOAC() == null)){
          }else{
              if(self.postProceduralOnLoadRestartWarfarin() == "" || self.postProceduralOnLoadRestartWarfarin() == null){
                  postProceduralRisk = self.postProceduralOnLoadRestartDOAC();
              }else{
                  postProceduralRisk = self.postProceduralOnLoadRestartWarfarin();
              }
          }

           var patientProfile = appConstantsModel.patient_case + '\n' + appConstantsModel.drug + self.drugTypeOnAdvice() + '\n' +  appConstantsModel.procedure +procedureNameData + '\n' + appConstantsModel.increased_patient_risk +  bleedRiskData + '\n' + appConstantsModel.procedure_risk + self.riskTypeOnAdvice() + '\n' + appConstantsModel.thrombotic_risk + self.thromboticRisk() + '\n' + appConstantsModel.post_procedure_risk + postProceduralRisk.capitalize();
           var advice = appConstantsModel.ADVICE + '\n' +'\n' + appConstantsModel.INTERRUPTION + '\n' + intrAdvice + '\n' +'\n' +  appConstantsModel.BRIDGING + '\n' + bridgeAdvice  + '\n' +'\n' +  appConstantsModel.ANTICOAG_RESTART+ '\n' + restartAdviceEmailBody;
            
            var patientProfileEncode = Base64.encode(patientProfile);
        
            if(value_advice_show_info != null && value_advice_show_info != undefined){
            var value_advice_show_info_static = Base64.encode(value_advice_show_info);
            }
           
            var url ="" + server_url +"#!/staticAdviceViewPage?restartAdvice="+restartAdviceEncode +"&intrAdvice=" +interruptAdviceEncode +"&bridgeAdvice=" +bridgeAdviceEncode + "&patientProfile=" +patientProfileEncode + "&value_advice_show_info_static=" +value_advice_show_info_static + "&bridgeAdviceWarningForStaticEncode=" +bridgeAdviceWarningForStaticEncode + "&statusInterruptEncode=" +statusInterruptEncode + "&statusBridgeEncode=" +statusBridgeEncode +"&chadvascScoreForStaticEncode=" +chadvascScoreForStaticEncode + "&chadvascAgeForStaticEncode=" +chadvascAgeForStaticEncode + "&chadvascSexForStaticEncode=" +chadvascSexForStaticEncode + "&crclScoreForStaticEncode=" +crclScoreForStaticEncode + "&crclAgeForStaticEncode=" +crclAgeForStaticEncode + "&crclSexForStaticEncode=" +crclSexForStaticEncode + "&crclWeightForStaticEncode=" +crclWeightForStaticEncode + "&crclSerumForStaticEncode=" +crclSerumForStaticEncode + "&hemostasisForStaticEncode=" +hemostasisForStaticEncode;
            
            
            
            util.getShortUrl(url,function(result){
                 if(!result) return;
                   var generatedUrl = result;
                   var summary_link = appConstantsModel.advice_summary_link+ " " +generatedUrl;
                   var body = generated + '\n' + '\n' + summary_link + '\n' + '\n'  +patientProfile + '\n' + '\n' + advice + '\n' + '\n' + appConstantsModel.mail_footer;
                   body = encodeURIComponent(body);
                   var mailto_link = 'mailto:' +email + '?subject=' + subject + '&body=' + body;
                   win = window.open(mailto_link, '_self');

                   if(getBrowser()=='mozilla'){

                        window.open(mailto_link,'_self');
                   }
                   else if(getBrowser()=='ie'){

                        window.open(mailto_link,'_self');
                   }
                   else if(getBrowser()=='opera'){
                        return true;
                   }
                   else if (getBrowser()=='safari'){ // safari

                        window.location.href = mailto_link;
                   }
                   else if(getBrowser()=='chrome'){

                        window.location.href = mailto_link;
                   }
                   else if(getBrowser()=='iPhone'){

                        window.location.href=mailto_link;
                   }
                   else if(getBrowser()=='iPad'){
                        window.location.href=mailto_link;
                   }
                   if (win && win.open && !win.closed){
                        win.close();
                   }
            },function(err){
                console.log("Error in calling critical notifications API : " + err.message);
            });
            
       }
        
        /**
         * getBrowser function
         * getBrowser is used to select browser type
         */
        function getBrowser(){
           if(navigator.userAgent.indexOf("iPhone")!=-1){
                return "iPhone";
           }
           else if(navigator.userAgent.indexOf("iPad")!=-1){
                return "iPad";
           }
           else {
             
                var userAgent = navigator.userAgent.toLowerCase();
                $.browser.chrome = /chrome/.test(userAgent);
                $.browser.safari= /webkit/.test(userAgent);
                $.browser.opera=/opera/.test(userAgent);
                $.browser.msie=/msie/.test( userAgent ) && !/opera/.test( userAgent );
                $.browser.mozilla= /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) || /firefox/.test(userAgent);

                if($.browser.chrome) return "chrome";
                if($.browser.mozilla) return "mozilla";
                if($.browser.opera) return "opera";
                if($.browser.safari) return "safari";
                if($.browser.msie) return "ie";
           }
       }
       
       //For displaying tab view in mobile
        var screenWidth = screen.width;
        var innerWidth = window.innerWidth;
  
        if(innerWidth != undefined || innerWidth != null){
            if(innerWidth < 1024) {
            self.showTabViewSummary(true);
            self.showTabViewProfile(false);
            self.adviceTabValueSummary("is-active");
            self.adviceTabValueProfile(null);
            }else{
            self.showTabViewSummary(true);
            self.showTabViewProfile(true);
            self.adviceTabValueSummary(null);
            self.adviceTabValueProfile(null);
            }
        }else{
            if(screenWidth < 1024) {
            self.showTabViewSummary(true);
            self.showTabViewProfile(false);
            self.adviceTabValueSummary("is-active");
            self.adviceTabValueProfile(null);
            }else{
            self.showTabViewSummary(true);
            self.showTabViewProfile(true);
            self.adviceTabValueSummary(null);
            self.adviceTabValueProfile(null);
            }
        }



        window.addEventListener("orientationchange", function() {
            setTimeout(function(){
            var screenWidthNew = screen.width;
            var innerWidthNew = window.innerWidth;
          
                if(innerWidthNew != undefined || innerWidthNew != null){
                       if(innerWidthNew < 1024) {
                       self.showTabViewSummary(true);
                       self.showTabViewProfile(false);
                       self.adviceTabValueSummary("is-active");
                       self.adviceTabValueProfile(null);
                       }else{
                       self.showTabViewSummary(true);
                       self.showTabViewProfile(true);
                       self.adviceTabValueSummary(null);
                       self.adviceTabValueProfile(null);
                       }
                }else{
                    if(screenWidthNew < 1024 ) {
                    self.showTabViewSummary(true);
                    self.showTabViewProfile(false);
                    self.adviceTabValueSummary("is-active");
                    self.adviceTabValueProfile(null);
                    }else{
                    self.showTabViewSummary(true);
                    self.showTabViewProfile(true);
                    self.adviceTabValueSummary(null);
                    self.adviceTabValueProfile(null);
                    }
                }

            },200);


        }, false);
        
        function getAdvices() {
            getTherapyTypeFromTableOnAdvice();
            selectDataFromInterruptOnAdvice(); 
            selectDataFromRestartTableOnAdvice();
            selectTherapyFromTableOnAdvice();
            selectProcedureOnAdvice();
            selectCHADVASCOnAdvice();
            selectcrclOnAdvice();
            selectRestartOnAdvice();
            selectDrugTypeOnAdvice();
        }
        /**
         * goToPatientPageFromFooter function
         * goToPatientPageFromFooter is used to navigate to patient page from footer section evaluate tab
         */
        this.goToPatientPageFromFooter = function(){
            sessionStorage.setItem("DESTINATION", "PATIENT");
		    pager.navigate("#!/patientPage");
            pageArrays.push("patientPage");
            setPatientScreenLocked();
            enableAdviceTab();
            getNotifications();
        }
	
	  
         /* Static Advice Page */
        
        //static advice page
        
        this.staticAdviceTabValueSummary = ko.observable(null);
        this.staticAdviceTabValueProfile = ko.observable(null);
        this.staticShowTabViewSummary = ko.observable(true);
        this.staticInterruptNoAdvice = ko.observable(true);
        this.staticInterruptHasAdvice = ko.observable(false);
        this.staticInterruptAdviceStatus = ko.observable(true);
        this.staticWeatherInterruptAdvice = ko.observable("");
        this.staticWhenInterruptAdvice = ko.observable("");
        this.staticBridgeNoAdvice = ko.observable(true);
        this.staticBridgeHasAdvice = ko.observable(false);
        this.staticShowWarningTrueAdvice = ko.observable(true);
        this.staticShowWarningFalseAdvice = ko.observable(false);
        this.staticWeatherBridgeAdviceWarning = ko.observable("");
        this.staticBridgeAdviceStatus = ko.observable(true);
        this.staticWeatherBridgeAdvice = ko.observable("");
        this.staticWhenBridgeAdvice = ko.observable("");
        this.staticRestartNoAdvice = ko.observable(true);
        this.staticRestartHasAdvice = ko.observable(false);
        this.staticShowRestartAdvice = ko.observable(true);
        this.staticShowRestartAdviceHeader = ko.observable("");
        this.static_advice_show_info = ko.observable(false);
        this.static_advice_info_title = ko.observable("Vitamin K antagonist. VKA advice in this app refers specifically to warfarin, the most common VKA in the US.  If outside the US, check the pharmacokinetics of the VKA and adjust accordingly.");
        this.staticShowRestartAdviceText = ko.observable("");
        this.staticDrugTypeOnAdvice = ko.observable("");
        this.staticBleedRiskOnAdvice = ko.observable("");
       this.staticShowTabViewProfile = ko.observable(true);
       this.staticAdviceInputs = ko.observable(true);
       this.staticShowChadvascOnAdvice = ko.observable(true);
       this.staticShowCrclOnAdvice = ko.observable(true);
       this.staticShowRiskOnAdvice = ko.observable(false);
       this.staticRiskTypeOnAdvice = ko.observable("");
       this.staticProcedureNameOnAdvice = ko.observable("");
       this.staticChadVascScoreOnAdvice = ko.observable("");
       this.staticChadvascAgeOnAdvice = ko.observable("");
       this.staticChadvascSexOnAdvice = ko.observable("");
       this.staticShowAfterCompute = ko.observable(true);
        this.staticCrclScoreValueOnAdvice = ko.observable("");
        this.staticCrclAgeOnAdvice = ko.observable("");
        this.staticCrclSexOnAdvice = ko.observable("");
        this.staticCrclWeightOnAdvice = ko.observable("");
        this.staticCrclScoreOnAdvice = ko.observable("");
        this.staticRestartAdvice = ko.observable("");
        this.staticThromboticRisk = ko.observable("");
        this.staticHideAdviceHeader = ko.observable(true);
        this.staticSetClassForRestart = ko.observable(null);
        this.staticPostProceduralRisk = ko.observable("Not Calculated");
        this.staticShowChadvascOnAdviceInput = ko.observable(true);
        
        
        
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
        var restartAdviceForStaticPage = getUrlVars()["restartAdvice"];
        var bridgeAdviceForStaticPage = getUrlVars()["bridgeAdvice"];
        var intrAdviceForStaticPage = getUrlVars()["intrAdvice"];
        var patientProfileForStaticPage = getUrlVars()["patientProfile"];
        var value_advice_show_info_static_page = getUrlVars()["value_advice_show_info_static"];
        var bridgeAdviceWarningForStatic = getUrlVars()["bridgeAdviceWarningForStaticEncode"];
        var statusInterruptValue = getUrlVars()["statusInterruptEncode"];
        var statusBridgeValue = getUrlVars()["statusBridgeEncode"];
        var chadvascScoreForStaticValue = getUrlVars()["chadvascScoreForStaticEncode"];
        var chadvascAgeForStaticValue = getUrlVars()["chadvascAgeForStaticEncode"];
        var chadvascSexForStaticValue = getUrlVars()["chadvascSexForStaticEncode"];
        var crclScoreForStaticValue = getUrlVars()["crclScoreForStaticEncode"];
        var crclAgeForStaticValue = getUrlVars()["crclAgeForStaticEncode"];
        var crclSexForStaticValue = getUrlVars()["crclSexForStaticEncode"];
        var crclWeightForStaticValue = getUrlVars()["crclWeightForStaticEncode"];
        var crclSerumForStaticValue = getUrlVars()["crclSerumForStaticEncode"];
        var hemostasisForStaticValue = getUrlVars()["hemostasisForStaticEncode"];
        
       
        if(restartAdviceForStaticPage != null && restartAdviceForStaticPage != undefined){
                var restartAdviceForStaticPageDecoded = Base64.decode(restartAdviceForStaticPage)
                
                if(value_advice_show_info_static_page != null && value_advice_show_info_static_page != undefined && value_advice_show_info_static_page !="undefined" ){
                    var value_advice_show_info_static_page_decode = Base64.decode(value_advice_show_info_static_page)

                }
                
                var checkedValueforCalculationRestart = restartAdviceForStaticPageDecoded.localeCompare("Not Calculated");
                if(checkedValueforCalculationRestart == 0){
                    self.staticRestartNoAdvice(true);
                    self.staticRestartHasAdvice(false);
                    
                }else{
                    self.staticRestartHasAdvice(true);
                    self.staticRestartNoAdvice(false);
                    var restartAdviceOne = restartAdviceForStaticPageDecoded.split("\n")[0];
                    var restartAdviceTwo = restartAdviceForStaticPageDecoded.split("\n")[1];
                    self.staticHideAdviceHeader(false);
                   
                    if(restartAdviceOne != null && restartAdviceOne != undefined ){
                        self.staticShowRestartAdviceText(restartAdviceOne);
                       
                        var info_icon_status = value_advice_show_info_static_page_decode.localeCompare("true");
                        if(info_icon_status == 0){
                             self.staticShowRestartAdviceHeader(restartAdviceOne);
                            self.staticShowRestartAdviceText("");
                             self.staticHideAdviceHeader(true)
                            self.static_advice_show_info(true);
                        }else{
                             self.staticHideAdviceHeader(false)
                            self.static_advice_show_info(false);
                        }
                    }
                    if(restartAdviceTwo != null && restartAdviceTwo != undefined ){
                        self.staticShowRestartAdviceText(restartAdviceTwo);
                    }
                
                }
        }
        
        if(bridgeAdviceForStaticPage != null && bridgeAdviceForStaticPage != undefined){
        
            var bridgeAdviceForStaticPageDecoded = Base64.decode(bridgeAdviceForStaticPage);
           
            var checkedbridgeWarningValue = bridgeAdviceForStaticPageDecoded.localeCompare("Not Calculated");
            if(bridgeAdviceWarningForStatic != undefined && bridgeAdviceWarningForStatic != null && bridgeAdviceWarningForStatic != "undefined"){
              if(checkedbridgeWarningValue == 0 )  {
                  self.staticBridgeNoAdvice(true);
                    self.staticBridgeHasAdvice(false);
                  
              }else{
                
            var bridgeAdviceWarningForStaticDecoded = Base64.decode(bridgeAdviceWarningForStatic);
              }
            }
                
                if(bridgeAdviceWarningForStaticDecoded != "" && bridgeAdviceWarningForStaticDecoded != null && bridgeAdviceWarningForStaticDecoded != undefined && bridgeAdviceWarningForStaticDecoded != "undefined"){
                   
                self.staticBridgeNoAdvice(false);
                    self.staticBridgeHasAdvice(true);
                    self.staticShowWarningTrueAdvice(true);
                    self.staticShowWarningFalseAdvice(false);
                    self.staticWeatherBridgeAdviceWarning(bridgeAdviceWarningForStaticDecoded)
                }else{
                
                var checkBridgeValue = bridgeAdviceForStaticPageDecoded;
                var checkedValueforCalculationBridge = checkBridgeValue.localeCompare("Not Calculated");
                if(checkedValueforCalculationBridge == 0 ){
                   
                    self.staticBridgeNoAdvice(true);
                    self.staticBridgeHasAdvice(false);
                    self.staticShowWarningFalseAdvice(true);
                    self.staticShowWarningTrueAdvice(false);
                    
                }else{
                    
                     var statusBridgeDecode = Base64.decode(statusBridgeValue);
                    var checkedValueforPositiveBridge = statusBridgeDecode.localeCompare("positive");
                    if(checkedValueforPositiveBridge == 0){
                        
                        self.staticBridgeAdviceStatus(true);
                    }else{
                        self.staticBridgeAdviceStatus(false);
                    }
                    self.staticBridgeHasAdvice(true);
                    self.staticBridgeNoAdvice(false);
                    self.staticShowWarningFalseAdvice(true);
                    self.staticShowWarningTrueAdvice(false);
                    var bridgeAdviceOne = bridgeAdviceForStaticPageDecoded.split("\n")[0];
                    var bridgeAdviceTwo = bridgeAdviceForStaticPageDecoded.split("\n")[1];
                    self.staticWeatherBridgeAdvice(bridgeAdviceOne);
                    self.staticWhenBridgeAdvice(bridgeAdviceTwo);
                }
                }
        
        }
        
        if(intrAdviceForStaticPage != null && intrAdviceForStaticPage != undefined){
        
            var intrAdviceForStaticPageDecoded = Base64.decode(intrAdviceForStaticPage)
                
                var checkedValueforCalculationInter = intrAdviceForStaticPageDecoded.localeCompare("Not Calculated");
                 if(checkedValueforCalculationInter === 0){
                   
                    self.staticInterruptNoAdvice(true);
                    self.staticInterruptHasAdvice(false);
                    
                }else{
                    
                    var statusInterruptDecode = Base64.decode(statusInterruptValue);
                    var checkedValueforPositiveInter = statusInterruptDecode.localeCompare("positive");
                     
                     if(checkedValueforPositiveInter == 0){
                         
                         self.staticInterruptAdviceStatus(true);
                     }else{
                        self.staticInterruptAdviceStatus(false);
                     }
                    self.staticInterruptHasAdvice(true);
                    self.staticInterruptNoAdvice(false);
                    var interAdviceOne = intrAdviceForStaticPageDecoded.split("\n")[0];
                    var interAdviceTwo = intrAdviceForStaticPageDecoded.split("\n")[1];
                    self.staticWeatherInterruptAdvice(interAdviceOne);
                    self.staticWhenInterruptAdvice(interAdviceTwo);
                }
        }
        
        if(patientProfileForStaticPage != null && patientProfileForStaticPage != undefined){
        
            var patientProfileForStaticPageDecoded = Base64.decode(patientProfileForStaticPage)
                var drugNameStatic = patientProfileForStaticPageDecoded.split("\n")[1];
                var drugNameDisplay = drugNameStatic.split(":")[1];
                self.staticDrugTypeOnAdvice(drugNameDisplay);
                var checkDrugName = drugNameDisplay.localeCompare(" Warfarin")
                if(checkDrugName ==0){
                    self.staticSetClassForRestart(null);
          "icontext"      }else{
                    self.staticSetClassForRestart("icontext");
                }
                var increasedBleedStatic = patientProfileForStaticPageDecoded.split("\n")[3];
                var increasedBleedStaticDisplay = increasedBleedStatic.split(":")[1];
                self.staticBleedRiskOnAdvice(increasedBleedStaticDisplay);
                var procedureRiskStatic = patientProfileForStaticPageDecoded.split("\n")[4];

                var procedureRiskStaticDisplay = procedureRiskStatic.split(":")[1];
                var procedureNameStatic = patientProfileForStaticPageDecoded.split("\n")[2];
                var procedureNameStaticDisplay = procedureNameStatic.split(":")[1];
                var checkedProcedureValue =  procedureRiskStaticDisplay.localeCompare(" Not Calculated");
                var checkedProcedureName =  procedureNameStaticDisplay.localeCompare(" Not Calculated");

                    var postRisk = patientProfileForStaticPageDecoded.split("\n")[6].split(":")[1];
                    var postRiskValue =  postRisk.localeCompare(" Not Calculated");
                    if(postRiskValue== 0){
                        self.staticPostProceduralRisk("Not Calculated");
                    }else{
                        self.staticPostProceduralRisk(postRisk);
                    }
                    if(checkedProcedureValue == 0 ){
                        self.staticShowRiskOnAdvice(false);
                    }else{
                            self.staticShowRiskOnAdvice(true);
                        if(checkedProcedureName == 0){
                        self.staticProcedureNameOnAdvice("");
                        }else{
                        self.staticProcedureNameOnAdvice(procedureNameStaticDisplay);
                        }
                            self.staticRiskTypeOnAdvice(procedureRiskStaticDisplay);
                            
                        }
            if(chadvascScoreForStaticValue != "undefined"){
                var chadvascScoreForStaticDecode = Base64.decode(chadvascScoreForStaticValue);
                self.staticChadVascScoreOnAdvice(chadvascScoreForStaticDecode);
            
            var chadvascAgeForStaticDecode= Base64.decode(chadvascAgeForStaticValue);
                self.staticChadvascAgeOnAdvice(chadvascAgeForStaticDecode);
            
            var chadvascSexForStaticDecode = Base64.decode(chadvascSexForStaticValue);
                self.staticChadvascSexOnAdvice(chadvascSexForStaticDecode);
 
                if(chadvascSexForStaticDecode.length < 4){
                    self.staticShowChadvascOnAdviceInput(false);
                }else{
                    self.staticShowChadvascOnAdviceInput(true);
                }
            }else{
            
                self.staticShowChadvascOnAdvice(false)

            
            }
            
            if(crclScoreForStaticValue != "undefined" && crclScoreForStaticValue!= "null"){
             var crclScoreForStaticDecode = Base64.decode(crclScoreForStaticValue);
                self.staticCrclScoreValueOnAdvice(crclScoreForStaticDecode);
        }else{
        
            self.staticCrclScoreValueOnAdvice("Not Calculated");
        }
            
            if(crclAgeForStaticValue != "undefined" && crclAgeForStaticValue!= "null"){
                self.staticShowAfterCompute(true);
            var crclAgeForStaticDecode = Base64.decode(crclAgeForStaticValue);
                self.staticCrclAgeOnAdvice(crclAgeForStaticDecode);
            
            var crclSexForStaticDecode = Base64.decode(crclSexForStaticValue);
                self.staticCrclSexOnAdvice(crclSexForStaticDecode);
               if(crclWeightForStaticValue.length < 5){
                   self.staticShowAfterCompute(false);
               }
            var crclWeightForStaticDecode = Base64.decode(crclWeightForStaticValue);
                self.staticCrclWeightOnAdvice(crclWeightForStaticDecode);
            
            var crclSerumForStaticDecode = Base64.decode(crclSerumForStaticValue);
                self.staticCrclScoreOnAdvice(crclSerumForStaticDecode);
            }else{
                
                self.staticShowAfterCompute(false);
            
            }
            
            if(hemostasisForStaticValue!="undefined" && hemostasisForStaticValue!="null"){
                var hemostasisForStaticDecode = Base64.decode(hemostasisForStaticValue);
                self.staticRestartAdvice(hemostasisForStaticDecode);
            }else{
                self.staticShowRestartAdvice(false);
            }
            var thromboticRiskStatic = patientProfileForStaticPageDecoded.split("\n")[5];
                var thromboticRiskStaticDisplay = thromboticRiskStatic.split(":")[1];
            self.staticThromboticRisk(thromboticRiskStaticDisplay);
                
               // }  
        
        }
       
        function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++)
                {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
                }
                
                return vars;
        }
        String.prototype.capitalize = function() {
                 return this.charAt(0).toUpperCase() + this.slice(1);
            }
        /**
         * goToAdviceFromProfile function
         * goToAdviceFromProfile is used to navigate to profile.
         */ 
        this.staticGoToAdviceFromProfile = function(){
            self.staticShowTabViewProfile(true);
            self.staticShowTabViewSummary(false);
            self.staticAdviceTabValueProfile("is-active");
            self.staticAdviceTabValueSummary(null);
        }
        
        /**
         * goToSummary function
         * goToSummary is used to navigate to summary.
         */ 
        this.staticGoToSummary = function(){
            self.staticShowTabViewSummary(true);
            self.staticShowTabViewProfile(false);
            self.staticAdviceTabValueSummary("is-active");
            self.staticAdviceTabValueProfile(null);
        }
        function setWidthProfile(){
             //For displaying tab view in mobile
        var screenWidthStatic = screen.width;
        var innerWidthStatic = window.innerWidth;
        if(innerWidthStatic != undefined || innerWidthStatic != null){
             if(innerWidthStatic < 1024) {
                    self.showTabViewSummary(true);
                    self.showTabViewProfile(false);
                    self.adviceTabValueSummary("is-active");
                    self.adviceTabValueProfile(null);

                }else{
                    self.showTabViewProfile(true);
                }
            }
        else{
            if(screenWidthStatic < 1024) {
                    self.showTabViewSummary(true);
                    self.showTabViewProfile(false);
                    self.adviceTabValueSummary("is-active");
                    self.adviceTabValueProfile(null);
            }else{

            }
        }
        }
        
        //For displaying tab view in mobile
        var screenWidthStatic = screen.width;
        var innerWidthStatic = window.innerWidth;
        
        
        if(innerWidthStatic != undefined || innerWidthStatic != null){
             if(innerWidthStatic < 1024) {
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(false);
                    self.staticAdviceTabValueSummary("is-active");
                    self.staticAdviceTabValueProfile(null);
                    }else{
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(true);
                    self.staticAdviceTabValueSummary(null);
                    self.staticAdviceTabValueProfile(null);
                    }
            }
        else{
            
            if(screenWidthStatic < 1024) {
                self.staticShowTabViewSummary(true);
                self.staticShowTabViewProfile(false);
                self.staticAdviceTabValueSummary("is-active");
                self.staticAdviceTabValueProfile(null);
            }else{
                self.staticShowTabViewSummary(true);
                self.staticShowTabViewProfile(true);
                self.staticAdviceTabValueSummary(null);
                self.staticAdviceTabValueProfile(null);
            }
        }
                
        window.addEventListener("orientationchange", function() {
            setTimeout(function(){
                 var screenWidthNewStatic = screen.width;
                 var innerWidthNewStatic = window.innerWidth;
                
             if(innerWidthNewStatic != undefined || innerWidthNewStatic != null){
             if(innerWidthNewStatic < 1024) {
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(false);
                    self.staticAdviceTabValueSummary("is-active");
                    self.staticAdviceTabValueProfile(null);
                    }else{
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(true);
                    self.staticAdviceTabValueSummary(null);
                    self.staticAdviceTabValueProfile(null);
                    }
            }
        else{
                if(screenWidthNewStatic < 1024) {
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(false);
                    self.staticAdviceTabValueSummary("is-active");
                    self.staticAdviceTabValueProfile(null);
                }else{
                    self.staticShowTabViewSummary(true);
                    self.staticShowTabViewProfile(true);
                    self.staticAdviceTabValueSummary(null);
                    self.staticAdviceTabValueProfile(null);

                }
        }
             },200);
            
        }, false);
         
        /* Locking/unlocking on browser back button clicked */
        document.onmouseover = function() {
            window.innerDocClick = true;
        }

        document.onmouseout = function() {
            window.innerDocClick = false;
        }
        
        window.onhashchange = function() {

            if(window.location.hash.length <= 3 ||  self.receviedCriticalNotification() == true){
                getNotifications();
            }

            if (window.innerDocClick) {
            } else {
                if(self.receviedCriticalNotification()){
                     window.history.forward();
                }
                var pages = sessionStorage.getItem("arrayValue");
                var currentPage = pages[pages.length - 1];
                var prevPage = pages[pages.length - 3];
                
                if(currentPage == "2") {
                    if(prevPage == "1") {
                        sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                        setPatientScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                } else if(currentPage == "3") {
                    if(prevPage == "2") {
                        sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                        setInterruptScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    } else if(prevPage == "1"){
                        sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                        setPatientScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                    
                } else if(currentPage == "4") {
                    if(prevPage == "3") {
                        sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                        setBridgeScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    } else if(prevPage == "2") {
                        sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                        setInterruptScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    } else if(prevPage == "1"){
                        sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                        setPatientScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                    
                } else if(currentPage == "5" || currentPage == "6") {
                    if(prevPage == "2") {
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                    
                } else if(currentPage == "7" || currentPage == "8") {
                    if(prevPage == "3") {
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                } else if(currentPage == "9") {
                    if(prevPage == "3") {
                        sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                        setBridgeScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    } else if(prevPage == "2") {
                        sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                        setInterruptScreenLocked();
                        self.arrayOfPages.pop();
                        sessionStorage.setItem("arrayValue",self.arrayOfPages());
                    }
                }
                
            }
        }
		
		document.addEventListener("backbutton", onBackKeyDown, false);

        function onBackKeyDown(event) {
            // Handle the back button
			lockScreensOnDeviceBackClicked();
        }
        
		function lockScreensOnDeviceBackClicked() {
			var pages = sessionStorage.getItem("arrayValue");
			var currentPage = pages[pages.length - 1];
			var prevPage = pages[pages.length - 3];
            
            if(pageArrays[pageArrays.length-2]){
                var CPage = pageArrays[pageArrays.length-1];
                var PPage = pageArrays[pageArrays.length-2];
                pager.navigate("#!/"+pageArrays[pageArrays.length-2]);
                if(CPage == 'interruptPage' && PPage == 'patientPage'){
                    sessionStorage.setItem("LOCK_PATIENT_PAGE","YES");
                    sessionStorage.setItem("DESTINATION", "PATIENT");
					setPatientScreenLocked();
                }else if(CPage == 'bridgePage' && PPage == 'interruptPage'){
                   sessionStorage.setItem("LOCK_INTERRUPT_PAGE","YES");
                    sessionStorage.setItem("DESTINATION", "INTERRUPT");
					setInterruptScreenLocked();
                }else if((CPage == 'restartPageWarfarin' || CPage == 'restartPage')  && PPage == 'bridgePage'){
                    sessionStorage.setItem("LOCK_BRIDGE_PAGE","YES");
                    sessionStorage.setItem("DESTINATION", "BRIDGE");
					setBridgeScreenLocked();
                }
                pageArrays.pop();
            }else{
                if(pageArrays.length == 1){
                    pageArrays.pop();
                    pager.navigate("#!/patientPage");
                }else{
                    navigator.app.exitApp();
                }
            }
            
           
		}
        
        /* Enable advice tab on patient screen */
        function enableAdviceTab() {
            var has_bridge_advice1 = sessionStorage.getItem("ADVICE_FROM_BRIDGE");
            var has_interrupt_advice1 = sessionStorage.getItem("ADVICE_FROM_INTERRUPT");
            var has_restart_advice1 = sessionStorage.getItem("RESTART_DOAC_ADVICE_STORAGE");
            var has_restart_advice2 = sessionStorage.getItem("ADVICE_FROM_RESTART");
            
            if((has_bridge_advice1 != null && has_bridge_advice1 != 'null') || (has_interrupt_advice1 != null && has_interrupt_advice1 != 'null') || (has_restart_advice1 != null && has_restart_advice1 != 'null') || (has_restart_advice2 != null && has_restart_advice2 != 'null') ){
                self.patientMainAdviceActiveTab(true);
                self.interruptAdviceActiveTab(true);
                self.bridgeVMenableAdvice(true);
                self.enableAdviceRestartDOAC(true);
                self.enableRestartWarfarinAdvice(true);
                self.disableAdviceValueRestartWarfarin(null);
                self.disableAdviceValueRestartDOAC(null);
                self.aboutAdviceActiveTab(true);
                self.resourceAdviceActiveTab(true);
                self.disclaimerAdviceActiveTab(true);
                self.newsAdviceActiveTab(true);
                setTimeout(function(){
                    self.bridgeVMdisableAdviceValue(null);
                },500);
                setTimeout(function(){
                    self.interruptAdviceActiveTab(true);
                },500);
            } else {
                setTimeout(function(){
                    self.bridgeVMdisableAdviceValue("disabled");
                },500);
                self.aboutAdviceActiveTab(false);
                self.resourceAdviceActiveTab(false);
                self.disclaimerAdviceActiveTab(false);
                self.newsAdviceActiveTab(false);
                self.patientMainAdviceActiveTab(false);
                self.interruptAdviceActiveTab(false);
                self.bridgeVMenableAdvice(false);
                self.enableAdviceRestartDOAC(false);
                self.enableRestartWarfarinAdvice(false);
                self.disableAdviceValueRestartWarfarin("disabled");
                self.disableAdviceValueRestartDOAC("disabled");
            }
            
        }
        
        /**
         * this function is used to get advice from about screen 
         */
		this.getAdviceFromFooter = function(){
             var datas ={
                bridgeVMTEchecked : self.bridgeVMTEchecked(),
                bridgeVMsshowWasItAStrokeOrTIA : self.bridgeVMsshowWasItAStrokeOrTIA(),
                bridgeVMpriorTE3RdQeustion : self.bridgeVMpriorTE3RdQeustion(),
                bridgeVMwhetherYesNo3QuesChecked : self.bridgeVMwhetherYesNo3QuesChecked(),
                bridgeVMheparinBtnVal : self.bridgeVMheparinBtnVal(),
                bridgeVMcrclCheckVal : self.bridgeVMcrclCheckVal(),
                bridgeVMcheckedUFH : self.bridgeVMcheckedUFH(),
                bridgeVMshowCrclViewAndAdministerUFHOrLWMH : self.bridgeVMshowCrclViewAndAdministerUFHOrLWMH(),
                bridgeVMshouldShowWhetherMessage : self.bridgeVMshouldShowWhetherMessage(),
                bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues : self.bridgeVMshowCrclViewAndAdministerUFHOrLWMHQues(),
                bridgeVMenableChadVascInput : self.bridgeVMenableChadVascInput(),
                bridgeVMwhetherAdviceMsg : self.bridgeVMwhetherAdviceMsg(),
                bridgeVMwhenToAdviceMsg  : self.bridgeVMwhenToAdviceMsg(),
                bridgeVMadviceBoxColor : self.bridgeVMadviceBoxColor(),
                bridgeVMadviceBoxColorForWhenToBridge : self.bridgeVMadviceBoxColorForWhenToBridge(),
                bridgeVMhromboticRiskCalculationVal1 : bridgeVMhromboticRiskCalculationVal,
                bridgeVMchadVascInputValue : self.bridgeVMchadVascInputValue(),
                bridgeNayway : self.bridgeNayway(),
                bridgeVMwantBridgeAnywayBtn : self.bridgeVMwantBridgeAnywayBtn() 
            }
            sessionStorage.setItem("ALL_Bridge_DATA",JSON.stringify(datas));
            saveAdviceAndGo();
            
            pager.navigate("#!/adviceViewPage");
            getAdvices();
        }
        
        /**
         * this function is used to go to play store
         */
        this.goToStore = function() {
             if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.iosAppStoreLink, '_system');
               }else{
                   window.open(appConstantsModel.googleAppStoreLink);
               }
        }
        
        /*
        * getNotifications function
        * getNotifications is used to get critical/non-critical notifications from the API.
        */
        function getNotifications() {
            try {
                setTimeout(function(){
                    var notificationType = '1';
                    var appOsType = '4';
                    var osTypeAppBased = "";
                    var osType  = getMobileOperatingSystem();
                    if(osType == "Android" && typeof cordova != 'undefined'){
                        osTypeAppBased = "2";
                    }else if(osType == "iOS" && typeof cordova != 'undefined'){
                         osTypeAppBased = "1";
                    }else{
                        osTypeAppBased = "3";
                    }

                    util.getNotifications(appId, appVersionNumber, appOsType, notificationType, displayAllUsers, userGuid, function(result){
                        if(result != null || result != "" || result != undefined) {
                            if(result.length != 0) {
                                self.newsFeeds([]);
                                pager.navigate("#!/criticalNotificationViewPage");
                                        self.receviedCriticalNotification(true);
                                       
                                        self.critialNotifiationTitle(result[0].Title);
                                        self.critialNotifiationText(result[0].Text);
                                        if(result[0].DisplayAppStoreUrl ==  true && (osTypeAppBased == '1' || osTypeAppBased == '2')){
                                            self.showCritialNotifiationLink(true);
                                        }
                                self.receviedCriticalNotification(true);
                            } else {
                                  util.getNotifications(appId, appVersionNumber, osTypeAppBased, notificationType, displayAllUsers, userGuid, function(results){
                              if(results != null || results != "" || results != undefined) {
                                    if(results.length != 0) {
                                        self.newsFeeds([]);
                                        self.receviedCriticalNotification(true);
                                        pager.navigate("#!/criticalNotificationViewPage");
                                        self.critialNotifiationTitle(results[0].Title);
                                        self.critialNotifiationText(results[0].Text);
                                        if(results[0].DisplayAppStoreUrl ==  true && (osTypeAppBased == '1' || osTypeAppBased == '2')){
                                            self.showCritialNotifiationLink(true);
                                        }
                                        
                                    } else {
                                        self.receviedCriticalNotification(false);
                                        util.getNotifications(appId, appVersionNumber, osTypeAppBased, "2", displayAllUsers, userGuid, function(result){
                                    if(result.length != 0 || result != null || result != "" || result != undefined) {
                                        
                                        var len = result.length, i;
                                        self.newsFeeds([]);
     
                                        if(len>1){
                                            result.sort(function(a,b) { 
                                                return new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime();
                                            });
                                        }
                                        for (i = 0; i < len; i++){
                                            var notificationCreationDate = new Date(result[i].CreatedDate).getTime();
                                            var notificationExpirationDate = new Date(result[i].ExpirationDate).getTime();
                                            if(notificationExpirationDate > notificationCreationDate) {
                                                self.newsFeeds.push(new getValue([result[i].Title],                       [result[i].Text],[result[i].CreatedDate],[result[i].ExpirationDate],[result[i].CreatedBy],[result[i].EffectiveDate]));
                                            }else if(notificationExpirationDate == undefined || notificationExpirationDate == null || notificationExpirationDate == 'undefined' || notificationExpirationDate == 'null' || notificationExpirationDate == '' || isNaN('NaN') ){
                                                self.newsFeeds.push(new getValue([result[i].Title],                       [result[i].Text],[result[i].CreatedDate],[new Date()],[result[i].CreatedBy],[result[i].EffectiveDate]));
                                            }
                                        }
                                    }
                                },function(err){
                                    console.log("Error in calling non-critical notifications API : " + err.message);
                                });

                                    }
                            
                                }
                            })
                                
                            } 
                        }
                    },function(err){
                        console.log("Error in calling critical notifications API : " + err.message);
                    });
                    
                },100);
            } catch(ex){
                console.log("appViewModel() : Error in fetching notifications : " + ex.message);
            }
        }
        
        
        function nonCriticalNotification(appId, appVersionNumber, appOsType, type , displayAllUsers, userGuid){
             util.getNotifications(appId, appVersionNumber, appOsType, type , displayAllUsers, userGuid, function(result){
                                    if(result.length != 0 || result != null || result != "" || result != undefined) {
      
                                        var len = result.length, i;
                                        self.newsFeeds([]);
                                        
                                        result.sort(function(a,b) { 
                                            return new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime();
                                        });
                                        
                                        for (i = 0; i < len; i++){
                                            var notificationCreationDate = new Date(result[i].CreatedDate).getTime();
                                            var notificationExpirationDate = new Date(result[i].ExpirationDate).getTime();
                                            if(notificationExpirationDate > notificationCreationDate) {
                                                self.newsFeeds.push(new getValue([result[i].Title],                       [result[i].Text],[result[i].CreatedDate],[result[i].ExpirationDate],[result[i].CreatedBy],[result[i].EffectiveDate]));
                                            }else if(notificationExpirationDate == undefined || notificationExpirationDate == null || notificationExpirationDate == 'undefined' || notificationExpirationDate == 'null' || notificationExpirationDate == '' ){
                                                self.newsFeeds.push(new getValue([result[i].Title],                       [result[i].Text],[result[i].CreatedDate],[new date()],[result[i].CreatedBy],[result[i].EffectiveDate]));
                                            }
                                        }
                                    }
                                },function(err){
                                    console.log("Error in calling non-critical notifications API : " + err.message);
                                });
        }
        
        /** getValue()
         *  getValue():this function is used to get passed value from the newsFeeds array
         */
        function getValue(notifyTitle, notifyText, creationDate, expDate, createdBy, effectiveDate) {
            var self = this;
            self.notificationTitle = ko.observable(notifyTitle);
            self.notificationText = ko.observable(notifyText);
        }
        
        /**
         * this function is used to check topic collection
         */
        this.goToTopicCollection = function(){
          if (typeof cordova != 'undefined'){
               if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.goToTopicCollectionLink, '_system');
                }else{
                     window.open(appConstantsModel.goToTopicCollectionLink);
                }
            }else{
                window.open(appConstantsModel.goToTopicCollectionLink);
            }
        }
        
        /**
         * this function is used to check safe use facts
         */
        this.goToSafeUseFact = function(){
            if (typeof cordova != 'undefined'){
               if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.goToSafeUseFactLink, '_system');
               }else{
                    window.open(appConstantsModel.goToSafeUseFactLink);
                }
            }else{
                window.open(appConstantsModel.goToSafeUseFactLink);
            }
        }
        
        /**
         * this function is used to check blood fact sheet
         */
        this.goToBloodFactSheet = function(){
           if (typeof cordova != 'undefined'){
               if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.goToBloodFactSheetLink, '_system');
               }else{
                   window.open(appConstantsModel.goToBloodFactSheetLink);
               }
            }else{
                window.open(appConstantsModel.goToBloodFactSheetLink);
            }
        }
        
        /**
         * this function is used to check clinical app collection
         */
        this.goToClinicalAppCollection = function(){
              if (typeof cordova != 'undefined'){
               if( getMobileOperatingSystem() == "iOS"){
                var ref = cordova.InAppBrowser.open(appConstantsModel.goToClinicalAppCollectionLink, '_system');
               }else{
                   window.open(appConstantsModel.goToClinicalAppCollectionLink);
               }
            }else{
                window.open(appConstantsModel.goToClinicalAppCollectionLink);
            }
        }
        
        /**
         * this function is used to check fibrillation guideline
         */
        this.goToFibrillationGuideline = function(){
              if (typeof cordova != 'undefined'){
               if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.goToFibrillationGuidelineLink, '_system');
               }else{
                    window.open(appConstantsModel.goToFibrillationGuidelineLink);
               }
            }else{
                window.open(appConstantsModel.goToFibrillationGuidelineLink);
            }
        }
        
        /**
         * this function is used to go to fill feedback
         */
        this.goToFillFeedback = function(){
            if (typeof cordova != 'undefined'){
                if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.goToFillFeedbackLink, '_system');
                }else{
                    window.open(appConstantsModel.goToFillFeedbackLink);
                }
            }else{
                window.open(appConstantsModel.goToFillFeedbackLink);
            }
        }
        
         /**
         * this function is used to go to expertConsensus
         */
        this.expertConsensus = function(){
            if (typeof cordova != 'undefined'){
                if( getMobileOperatingSystem() == "iOS"){
                    var ref = cordova.InAppBrowser.open(appConstantsModel.expertConsensusLink, '_system');
                }else{
                    window.open(appConstantsModel.expertConsensusLink);
                }
            }else{
                window.open(appConstantsModel.expertConsensusLink);
            }
        }
 
    };
})