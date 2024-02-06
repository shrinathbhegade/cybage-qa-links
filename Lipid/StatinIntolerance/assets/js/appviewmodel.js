function formObject(data){
	var self = this;
	self.Charactisitics = ko.observable();
	self.Gender = ko.observable();
	self.Race = ko.observable();
	self.Age = ko.observable();
	self.Frequency = ko.observable();
	self.Timeday = ko.observable();
	self.MonthofStatin = ko.observable();
	self.YearofStatin = ko.observable();
	self.MonthofSymptoms = ko.observable();
	self.YearofSymptoms = ko.observable();
	self.PainLevel =  ko.observableArray([]);
	self.PainFrequency = ko.observableArray([]);
	self.PainLimitation = ko.observable();
	self.SelectedDose = ko.observable();
	self.SelectedDoseAction = ko.observable();
	self.YearList = ko.observableArray([]);
	self.PainLevelAction =  ko.observable();
	self.PainFrequencyAction = ko.observable();
	self.PainLevelAction.subscribe(function(data){
		for(i in painLevelOptions)
		{
				if(painLevelOptions[i].Value == data.Value)
					self.PainLevel(painLevelOptions[i]);
		}
	});

	self.PainFrequencyAction.subscribe(function(data){
		for(i in PainFrequencyOptions)
		{
				if(PainFrequencyOptions[i].Value == data.Value)
					self.PainFrequency(PainFrequencyOptions[i]);
		}
	});

	self.SelectedDoseAction.subscribe(function(data){
			if(data!==undefined)
			{
				var StatinId = self.CurrentStatin();
				for(j in appmodel.Data.statins[StatinId].dose)
				{
					if(appmodel.Data.statins[StatinId].dose[j].value == data.value)
						self.SelectedDose(appmodel.Data.statins[StatinId].dose[j]);
				}
			}
	});


	self.DynamicYears = function(){

		var date = new Date,
		    years = [],
		    year = date.getFullYear();

		for (var i = 0; i < 100; i++) {
		   self.YearList.push(year-i);
		}
	}
	self.DynamicYears();



// "warning for asian race + statin"
	self.AsianRosuvastatinWarning = ko.pureComputed(
		function() {
			var R = (self.Race() == 1 && appmodel.CurrentStatin() == 7 )? true : false;
			return R;
		}, self);

// "warning for Sim @ 80"
	self.SimvastainDoseWarning = ko.pureComputed(
		function() {
			if( self.SelectedDose() == undefined){
				return false;
			}else{
			var R = (self.SelectedDose().type == 'dosehigh' && appmodel.CurrentStatin() == 8)? true : false;
			return R;}
		}, self);

// Other Dose Alert
	self.OtherDoseAlert= ko.pureComputed(
		function(){
			if( self.SelectedDose() == undefined){
				return false;
			}else{
			var R = (self.SelectedDose().type =="other")?true:false;
			return R;
			}

		},self);
// Show Dose Level
	self.DoseLevelPrint =  ko.pureComputed(
		function(){
			var R = false;
			if( self.SelectedDose() == undefined){
				return false;
			}else{
				R = (self.SelectedDose().type != "other" )?true:false;

			}
			if(self.SelectedDose().value == '--'){ R = false;}
			return R;
		},self);
	self.DoseLevelMessage =   ko.pureComputed(
		function(){
			var R = 'None Selected';
			if( self.SelectedDose() == undefined){
				return false;
			}else{
				R = 'The selected prescription is considered a "'+ self.SelectedDose().name+'"';
			}
			return R;
		},self);

// CK Level
	self.CKValue = ko.observable('');
	self.CKStatus = ko.observable('');
	self.CKUpdateAction = ko.observable('');
	self.CKUpdateAction.subscribe(function(data){
				self.CKUpdate(data);
	});
	self.CKUpdate = function($data){
		var S = $data;
		self.CKValue($data);
		switch( $data){
			case 'yes':
				self.CKStatus('warning question');
				break;
			case 'no':
				self.CKStatus('question');
				break;
			case 'unknown':
				self.CKStatus('info question');
				break;
			default:
				self.CKStatus('question');
				break;
		};
	};

	self.CKStatusClass =  ko.pureComputed(function(){
		var S = self.CKValue();
		switch(S){
			case 'yes':
				return 'selected-btn1';
				break;
			case 'no':
				return 'selected-btn2';
				break;
			case 'unknown':
				return 'selected-btn3';
				break;
			default:
				return '';
				break;
		};
	},self);
// Time Warning for Symptom time before Statin Origin time
	self.TimeWarning = ko.pureComputed(
	 	function() {
	  	var TimeofStatin  = new Date();
	  		TimeofStatin.setFullYear( self.YearofStatin(), self.MonthofStatin(), 1 );

	  	var TimeofSymptoms = new Date();
	  		TimeofSymptoms.setFullYear( self.YearofSymptoms(), self.MonthofSymptoms(), 1 );
	  	var R = ( TimeofSymptoms.getTime()<TimeofStatin.getTime() )?true:false;
	  	return R;}, self);

// radio button group in 'Symptoms'
	self.painSymptoms = ko.observable('');
	self.painSymptoms.ForEditing = ko.computed({
	  read: function() {
	      return self.painSymptoms().toString();
	  },
	  write: function(newValue) {
	  		if(newValue == ''){ self.painSymptoms(''); }
	       else{self.painSymptoms( newValue === "true" );}

	  },
	  owner: self
	});
// radio button group in 'Symptoms'
	self.painArea = ko.observable("");
	self.painArea.ForEditing = ko.computed({
	  read: function() {
	      return self.painArea().toString();
	  },
	  write: function(newValue) {
	       if( newValue == '' ){ self.painArea( '' );}
	       else{self.painArea( newValue === "true" );}
	  },
	  owner: self
	});
//Buttons in 'Symptoms'
	self.SymptomSeverityViewed = ko.observable(false);
	self.SymptomSeverity = ko.observable('unknown');
	self.SymptomSeverity.subscribe(function(){
			self.RecomendationDisabled();
		});
	self.SymptomSeverityAction=ko.observable('unknown');

	self.SymptomSeverityClass = ko.pureComputed(function() {
		var R ='';
		if(self.SymptomSeverity() != ''){
			R = (self.SymptomSeverity() == 'severe')?"selected-btn1" : "selected-btn2";
			}
		return R;}, self);

	self.SymptomSeverityUpdate = function($level,$type,$clear,$path){

			switch($level){
				case 'severe':
					self.SymptomSeverity('severe');
					self.viewSwitch($type,$clear,$path);
					break;
				case 'moderate':
					self.SymptomSeverity('moderate');
					self.viewSwitch($type,$clear,$path);
					break;
				case 'mild':
					self.PainLimitation(0);
					self.PainLevel();
					self.PainFrequency();
					self.SymptomSeverity('mild');
					self.viewSwitch($type,$clear,$path);

					break;
				case 'nochange':
					$clear = 'false';
					self.viewSwitch($type,$clear,$path);
					break;
				default:
					$clear = 'true';
					self.viewSwitch($type,$clear,$path);
					break;
			};
		};

		self.SymptomSeverityAction.subscribe(function(data){

				if(data=='severe')
				{
					self.SymptomSeverityUpdate('severe','SymptomSeverity','false','');

				}else{
					self.SymptomSeverityUpdate('mild','SymptomSeverity','false','');
				}

		});
	self.PainSeverityUpdate = function() {
			var $value = 'mild';
			var plvl_val = self.PainLevel() == undefined ? -1: parseInt(self.PainLevel().Value) ;
			var pf_val = self.PainFrequency() == undefined ? -1: parseInt(self.PainFrequency().Value) ;
			var pl_val = self.PainLimitation() == undefined ? -1: parseInt(self.PainLimitation());
			if(pl_val == -1){
				$value = 'unknown';
			}
			if( plvl_val == -1 && pf_val == -1 && pl_val == 0){
				$value = 'unknown';
			}
			if( plvl_val == 1 || pf_val == 1 || pl_val == 1){
				$value = 'moderate';
			}
			if( plvl_val == 2 || pf_val == 2 || pl_val == 2){
				$value = 'severe';
			}
			self.SymptomSeverity($value);
		};
	self.PainLevel.subscribe(function(){self.PainSeverityUpdate();});
	self.PainFrequency.subscribe(function(){self.PainSeverityUpdate();});
	self.PainLimitation.subscribe(function(){self.PainSeverityUpdate();});
	self.MildSymptomSeverity = ko.pureComputed(function() { return ( self.SymptomSeverity() == 'mild'||self.SymptomSeverity() == 'moderate' )?true:false; }, viewModel);
//Buttons is secondary causes
	self.RiskFactorsViewed = ko.observable(false);
	self.RiskFactors = ko.observableArray([]);
	self.RiskFactorsAction = ko.observable();
	self.RiskFactorsAction.subscribe(function(data){
		var RiskObj=[];
			for(var l in  data){
				if(data[l]!==undefined){
						//console.log(data[l]);
					for (var b in appmodel.FormData.patientRisk)
					{
						for(var q in appmodel.FormData.patientRisk[b].checks)
						{
							if(appmodel.FormData.patientRisk[b].checks[q].id == data[l].id)
									RiskObj.push(appmodel.FormData.patientRisk[b].checks[q]);
						}

					}
				}
			}
			if(RiskObj.length > 0){
				self.RiskFactors(RiskObj);
				self.viewSwitch('RiskFactors','false','');
			}
	});

	self.RiskFactorsClass = ko.pureComputed(function() {var R = self.RiskFactors().length > 0 ? "selected-btn1" : "selected-btn2"; return R;}, self);

	self.SecondaryMedicationsViewed = ko.observable(false);
	// This is in the root for other reasons.   self.SecondaryMedications = ko.observableArray([]);
	self.SecondaryMedicationsClass = ko.pureComputed(function() {var R = appmodel.SecondaryMedications().length > 0 ? "selected-btn1" : "selected-btn2"; return R;}, self);

	self.SecondaryCausesViewed = ko.observable(false);
	self.SecondaryCauses = ko.observableArray([]);
	self.SecondaryCausesAction=ko.observable();
	self.SecondaryCausesAction.subscribe(function(data){
		var SecCauses=[];
			for(var l in  data){
				if(data[l]!==undefined){
					for(var j in appmodel.FormData.nonStanin)
					{
						for(var k in appmodel.FormData.nonStanin[j].checks)
						if(appmodel.FormData.nonStanin[j].checks[k].id==data[l].id)
							SecCauses.push(appmodel.FormData.nonStanin[j].checks[k]);
					}
				}
			}
			if(SecCauses.length > 0){
				self.SecondaryCauses(SecCauses);
				self.viewSwitch('SecondaryCauses','false','');
			}

	});
	self.SecondaryCausesClass = ko.pureComputed(function() {var R = self.SecondaryCauses().length > 0 ? "selected-btn1" : "selected-btn2"; return R;}, self);

	self.PreviousStatinViewed = ko.observable(false);
	self.PreviousStatin = ko.observable('');
	self.PreviousStatinAction = ko.observable('')
	self.PreviousStatinAction.subscribe(function(data){

		data=='true' ? self.PreviousStatinValueChange(true,true,'PreviousStatin','false') :
		self.PreviousStatinValueChange(false,true,'PreviousStatin','false');
	});
	self.PreviousStatinClass = ko.pureComputed(function() {var R = self.PreviousStatin() ? "selected-btn1" : "selected-btn2"; return R;}, self);
		//data-bind="click:Form().PreviousStatinValueChange.bind($data,'PreviousStatin','false','')"
	self.PreviousStatinValueChange = function($bool,$type,$clear,$path){
		self.PreviousStatin($bool);
		self.viewSwitch('PreviousStatin','false',$path);

	};

// Button View Switcher Function for Eval Calc Page
	self.viewSwitch = function($type,$clear,$path){
		switch( $type ){
			case 'RiskFactors':
				self.RiskFactorsViewed(true);
				if($clear == 'true'){self.RiskFactors([]);}
				break;
			case 'SecondaryMedications':
				self.SecondaryMedicationsViewed(true);
				if($clear == 'true'){appmodel.SecondaryMedications([]);}
				break;
			case 'SecondaryCauses':
				self.SecondaryCausesViewed(true);
				if($clear == 'true'){self.SecondaryCauses([]);}
				break;
			case 'SymptomSeverity':
				self.SymptomSeverityViewed(true);
				if($clear == 'true'){
					self.SymptomSeverity('');
					self.PainLevel('');
					self.PainFrequency('');
					self.PainLimitation("2");
				}
				break;
			case 'PreviousStatin':
				self.PreviousStatinViewed(true);
				if($clear == 'true'){self.PreviousStatin('');}
				break;
			default:
				break;
		}
		if($path != ''){pager.navigate($path)};
	}

// Results Table Logic for Recomendation Page
	self.TimeGroup =  ko.pureComputed(
		function() {
			var TimeofStatin  = new Date();
	  			TimeofStatin.setFullYear( self.YearofStatin(), self.MonthofStatin(), 1 );
	  		var TimeofSymptoms = new Date();
	  			TimeofSymptoms.setFullYear( self.YearofSymptoms(), self.MonthofSymptoms(), 1 );
	  		var R = ( TimeofSymptoms.getTime()<TimeofStatin.getTime() )?true:false;
			var $index = ( R )? 0:1;
			var $value = appmodel.ResultData.TimeWarning[$index];
			return $value;
			}, self);
	self.GenderGroup =  ko.pureComputed(
		function() {
			var $index = self.Gender();
			var $value =appmodel.ResultData.Gender[$index];
			return $value;
			}, self);
	self.AgeGroup =  ko.pureComputed(
		function() {
			var $index = self.Age();
			var $value =appmodel.ResultData.Age[$index];
			return $value;
			}, self);
	self.RaceGroup =  ko.pureComputed(
		function() {
			var $index = self.Race();
			var $value =appmodel.ResultData.Race[$index];
			return $value;
			}, self);
	self.PainSymptomsGroup =  ko.pureComputed(
		function() {
			var $index = (self.painSymptoms())?1:0;
			var $value = appmodel.ResultData.PainSymptoms[$index];
			return $value;
			}, self);
	self.PainAreaGroup =  ko.pureComputed(
		function() {
			var $index = (self.painArea())?1:0;
			var $value = appmodel.ResultData.PainArea[$index];
			return $value;
			}, self);
	self.CKValueGroup =  ko.pureComputed(
		function() {
			var $index = '';
			switch(self.CKValue()){
				case "yes":
					$index = 0;break;
				case "no":
					$index = 1;break;
				case "unknown":
					$index = 2;break;
				default:
					$index = 2; break;
			}
			var $value =appmodel.ResultData.CKStatus[$index];
			return $value;
			}, self);
	self.RiskFactorsGroup =  ko.pureComputed(
		function() {
			var $index = (self.RiskFactors().length >0)?1:0;
			var $value =appmodel.ResultData.RiskFactor[$index];
			return $value;
			}, self);
	self.SecondaryCausesGroup =  ko.pureComputed(
		function() {
			var $index = (self.SecondaryCauses().length >0)?0:1;
			var $value =appmodel.ResultData.SecondaryCause[$index];
			return $value;
			}, self);
	self.NextStepsGroup = ko.pureComputed(
		function() {
		$value = [];
		if(self.SymptomSeverity() == 'severe'){
				$value.push(appmodel.Data.nextSteps[1]);
			}
		$value.push(appmodel.Data.nextSteps[0]);

		if(self.SymptomSeverity() == 'severe' || self.CKValue() == 'yes' || self.CKValue() == 'unknown' ){
				$value.push(appmodel.Data.nextSteps[2]);
			}
		// switch(self.CKValue()){
		// 	case 'yes':
		// 		$value.push(appmodel.Data.nextSteps[3]);
		// 		break;
		// 	case 'no':
		// 		break;
		// 	case 'unknown':
		// 		$value.push(appmodel.Data.nextSteps[4]);
		// 		break;
		// 	default: break;
		// 	};
			if(self.SecondaryCauses().length>0){$value.push(appmodel.Data.nextSteps[5])};
			if(self.SymptomSeverity() == 'mild'){
				$value.push(appmodel.Data.nextSteps[6]);
			}
			if(self.SymptomSeverity() == 'moderate'){
				$value.push(appmodel.Data.nextSteps[6]);
			}
			// $value.push(appmodel.Data.nextSteps[7]);
			return $value;
		}, self);

	self.RecomendationDisabled = function(){
				R = true;
				if(appmodel.CurrentStatin() != 0 && self.SymptomSeverity() != 'unknown')
				{
					R = false;
				}
				return R;
		};
}

function viewModel(){
	var self = this;
	var AppDataObj={};
	self.hideSplash = ko.observable(false);
	self.Data = data;
	self.FormData = formData;
	self.ResultData = resultTable;
	self.Groups = ["Hepatitis C Protease Inhibitors","HIV Protease Inhibitors","Strong CYP3A4 Inhibitors" ,"Other"];
	self.Grouping = ko.observable();
	self.StatinSelection = ko.observable(0);
	self.CharacteristicSelection = ko.observable(0);
	self.SecondaryReactions = ko.observableArray([]);
	self.SecondaryReactionsRefactor = ko.observableArray([]);
	self.SecondaryReactionsRefactorHighlighted = ko.observableArray([]);
	self.SecondaryReactionsCompare = ko.observableArray([]);
	self.SecondaryReactionsCompareRefactor= ko.observableArray([]);
	self.SecondaryReactionsCompareRefactorHighlighted= ko.observableArray([]);
	self.CurrentStatin = ko.observable(0);
	self.CurrentStatinAction = ko.observable(0);
	self.SecondaryReactionsRefactor = ko.observableArray([]);
	self.BackButtonPath = ko.observable("");
	self.DoneButtonPath  = ko.computed(function(){
		linkpath  =  "";
			if ( self.BackButtonPath() == '#!/content/drugComparison/home/' )
			{	linkpath = '#!/content/drugComparison/compare/singleStatin';
			}
			else
			{	linkpath = self.BackButtonPath();}
		 	return linkpath;
		 },self);
	//self.SecondaryDrugs = ko.observableArray([]);
	self.SecondaryMedications = ko.observableArray([]);
	self.SecondaryMedicationsAction = ko.observable();
	self.SecondaryMedicationsAction.subscribe(function(data){
	 var DrungObj=[];
			for(var l in  data){
				DrungObj.push(appmodel.Data.secondaryDrugs[data[l].id]);
			}
			if(DrungObj.length > 0){
				self.SecondaryMedications(DrungObj);
				self.Form().viewSwitch('SecondaryMedications','false','');
			}
	});
	self.SecondaryMedicationsIds = ko.observableArray([]);
	self.SecondaryMedications.subscribe(function(){
			self.SecondaryMedicationsIds([]);
	 		for(var r in  self.SecondaryMedications()){
	 			self.SecondaryMedicationsIds.push(self.SecondaryMedications()[r].id);
	 		}
	 		self.CollectInteractedSelectedDrugs(self.SecondaryReactionsRefactorHighlighted,self.SecondaryReactionsRefactor,self.SecondaryMedicationsIds);
			self.SecondaryMedicationAlertUpdate();
		});




	self.SelectedSecondaryDrugs = ko.observableArray([]);
	self.SelectedSecondaryDrugsAction = ko.observableArray();
	self.SelectedSecondaryDrugsAction.subscribe(function(data){
		var SecDrungObj=[];
			 for(var l in  data){
				 SecDrungObj.push(appmodel.Data.secondaryDrugs[data[l].id]);
			 }
			 if(SecDrungObj.length > 0){
				 self.SelectedSecondaryDrugs(SecDrungObj);
			 }
	});

	self.SecondaryMedicationsStatinCompare = ko.observableArray([]);
	self.SelectedSecondaryDrugsIds = ko.observableArray([]);
	self.SelectedSecondaryDrugs.subscribe(function(){
			self.SelectedSecondaryDrugsIds([]);
	 		for(var r in  self.SelectedSecondaryDrugs()){
	 			self.SelectedSecondaryDrugsIds.push(self.SelectedSecondaryDrugs()[r].id);
	 		}
	 		self.CollectInteractedSelectedDrugs(self.SecondaryReactionsCompareRefactorHighlighted,self.SecondaryReactionsCompareRefactor,self.SelectedSecondaryDrugsIds);
			self.SelectedSecondaryDrugsAlertUpdate();
		});

	self.FollowUp = ko.observable(new followUpObject());

	// Maping local data to Followup page
	// self.FollowUp().Page2Selection.subscribe(function(data){self.pageRedirect(data,'Page2Selection','2'); });
	// self.FollowUp().Page3Selection.subscribe(function(data){self.pageRedirect(data,'Page3Selection','3'); });
	// self.FollowUp().Page4Selection.subscribe(function(data){self.pageRedirect(data,'Page4Selection','4'); });
	// self.FollowUp().Page5Selection.subscribe(function(data){self.pageRedirect(data,'Page5Selection','5'); });
	// self.FollowUp().Page6Selection.subscribe(function(data){self.pageRedirect(data,'Page6Selection','6'); });
	//
	// self.pageRedirect = function(bool,type,path) {
	// 	var aLink;
	// 		 if(bool=='true')
	// 					aLink= $("a[data-appval='"+type+"1']").attr('href');
	// 		 else
	// 				 	aLink= $("a[data-appval='"+type+"2']").attr('href');
	// 					// window.onhashchange=function(){
	// 					// 	// console.log("#!/content/followUp/reason/page"+path);
	// 					// 	// if(location.hash=="#!/content/followUp/reason/page"+path)
	// 					// 	location.href=aLink;
	// 					// }
	// 					console.log(aLink);
	// 					// $("ul#FollowUpSidebar li[class='page"+path+"'] a").attr('href',aLink).addClass('seleceted');
	//
	// 	}

	self.Form = ko.observable(new formObject());
	self.BackHistory =ko.observable("");
	self.Doseage = ko.observableArray([])
	//Compare Version
	self.StatinSelection.subscribe(function(){
		self.SecondaryReactionsCompare([]);
		self.SecondaryReactionsCompare(self.Data.statins[self.StatinSelection()].reactions);
		self.SecondaryReactionsCompareRefactor(self.Data.statins[self.StatinSelection()].groupedReactions);
 		self.CollectInteractedSelectedDrugs(self.SecondaryReactionsCompareRefactorHighlighted,self.SecondaryReactionsCompareRefactor,self.SelectedSecondaryDrugsIds);
		self.SelectedSecondaryDrugsAlertUpdate();
			});
	//

	//Recomend Version
	self.CurrentStatin.subscribe(function(){
		self.dosageBind();
		self.SecondaryReactions([]);
		self.SecondaryReactions(self.Data.statins[self.CurrentStatin()].reactions);
		self.SecondaryReactionsRefactor([]);
		self.SecondaryReactionsRefactor(self.Data.statins[self.CurrentStatin()].groupedReactions);
		self.CollectInteractedSelectedDrugs(self.SecondaryReactionsRefactorHighlighted,self.SecondaryReactionsRefactor,self.SecondaryMedicationsIds);
		self.Form().RecomendationDisabled();
		self.SecondaryMedicationAlertUpdate();
		});

	//Recomend Version
	self.SecondaryMedicationWarning =ko.observable(false);
	self.SecondaryMedicationError =ko.observable(false);
	self.SecondaryMedicationAlertUpdate = function(){
		var reactions = self.SecondaryReactions();
		var $warning = false;
		var $error = false;
		for(var i in reactions){
			if( self.reactionMatchToDrug(reactions[i])  ){
				if(reactions[i].warningLevel =="alert"){$warning = true;}
				if(reactions[i].warningLevel =="error"){$error = true;}
			};
		};
		self.SecondaryMedicationWarning($warning);
		self.SecondaryMedicationError($error);
	};
	// Compare Version
	self.CollectInteractedSelectedDrugs = function($holder, $model, $interactions){
		$holder([]);
		var grouped = [];
		for(var i in  $model() ){
			var item = $model()[i];
			var group = [];
			for(var d in item){
				if(self.reactionMatchDrugRefactor(item[d], $interactions ) ){
					group.push(item[d]);
				}
			}
			grouped.push(group);
		}
		$holder(grouped);
	}
	self.SelectedSecondaryDrugsWarning =ko.observable(false);
	self.SelectedSecondaryDrugsError =ko.observable(false);
	self.SelectedSecondaryDrugsAlertUpdate = function(){
		var reactions = self.SecondaryReactionsCompare();
		var $warning = false;
		var $error = false;
		for(var i in reactions){
			if( self.reactionMatchToDrugCompare(reactions[i])  ){
				if(reactions[i].warningLevel =="warning"){$warning = true;}
				if(reactions[i].warningLevel =="error"){$error = true;}
			};
		};
		self.SelectedSecondaryDrugsWarning($warning);
		self.SelectedSecondaryDrugsError($error);
	};

	self.clearEvalData = function(){
		self.Form().Charactisitics();
		self.Form().Gender('');
		self.Form().Race('');
		self.Form().Age('');
		self.CurrentStatin(0);
		self.Form().Frequency('');
		self.Form().Timeday('');
		self.Form().MonthofStatin('');
		self.Form().YearofStatin('');
		self.Form().PreviousStatinViewed(false);
		self.Form().PreviousStatin('');
		self.Form().CKStatus(false);
		self.Form().CKUpdate('');
		self.Form().MonthofSymptoms('');
		self.Form().YearofSymptoms('');
		self.Form().SymptomSeverityViewed(false);
		self.Form().SymptomSeverity('unknown');
		self.Form().RiskFactorsViewed(false);
		self.Form().RiskFactors([]);
		self.Form().SecondaryMedicationsViewed(false);
		self.SecondaryMedications([]);
		self.CharacteristicSelection([]);
		self.Form().SecondaryCausesViewed(false);
		self.Form().SecondaryCauses([]);
		self.Form().PainLevel(null);
		self.Form().PainFrequency(null);
		self.Form().PainLimitation(null);
		self.StatinSelection(0);
		self.Form().painArea.ForEditing('');
		self.Form().painSymptoms.ForEditing('');
		self.Form().painArea('');
		self.Form().painSymptoms('');
		//clear session storage
		self.ClearLocalData('eval');
	};

	self.clearAllData = function(){
		//clear session storage
		self.ClearLocalData('evalndrug');
		self.clearEvalData();
		self.SelectedSecondaryDrugs([]);
	};

	self.SMDC_Clear = function(){
		self.SelectedSecondaryDrugs([]);
	};

	self.dosageBind = function(){
		// provide the list for the dosage for the statin that has been picked.
		self.Doseage([]);
		var id = self.CurrentStatin();
		var doseItems = self.Data.statins[id].dose;
		for(var d in doseItems){
			self.Doseage.push(doseItems[d]);
		}
	};

	self.recomendationForm = function(){
		// listener to the forms of the evaluate and to render changes in the recomendation
	};

	for(var s in self.Data.statins){
		var ritems = self.Data.statins[s].reactions;
		var groupedReactions =[];
		var groupedReactions =[];
		for(var m in ritems){
			ritems[m].info = self.Data.secondaryDrugs[ritems[m].id];
			ritems[m].info.categoryOrder = self.Groups.indexOf(ritems[m].info.category);
			if(groupedReactions[ritems[m].info.category] == undefined ){
				groupedReactions[ritems[m].info.category]=[];
			}
			groupedReactions[ritems[m].info.category].push(ritems[m]);

		};
		self.Data.statins[s]['groupedReactions']= [];
		for(var g in groupedReactions){
			groupedReactions[g].sort(
			function(a,b){
				var nameA=a.info.name, nameB=b.info.name;
				if (nameA < nameB) {return -1;}
				if (nameA > nameB){return 1;}
				return 0 ;
				}
			);
			self.Data.statins[s]['groupedReactions'].push(groupedReactions[g]);
		}
		self.Data.statins[s]['groupedReactions'].sort(
			function(a,b){
				var nameA=a[0].info.category, nameB=b[0].info.category;
				if (nameA < nameB) {return -1;}
				if (nameA > nameB){return 1;}
				return 0;
				}
			);
		ritems.sort(
			function(a,b){
				var nameA=a.info.name, nameB=b.info.name;
				if (nameA < nameB) {return -1;}
				if (nameA > nameB){return 1;}
				return 0;
				}
			);
		ritems.sort(
			function(a,b){
				var nameA=a.info.categoryOrder, nameB=b.info.categoryOrder;
				if (nameA < nameB) {return -1;}
				if (nameA > nameB){return 1;}
				return 0 ;
				}
			);

	}

	self.reactionMatchToDrug = function(obj){
		return self.SecondaryMedicationsIds.indexOf(obj.id) >= 0;
	};
	self.reactionMatchToDrugCompare = function(obj){
		return self.SelectedSecondaryDrugsIds.indexOf(obj.id) >= 0;
	};
	self.reactionMatchDrugRefactor = function(obj, $interactions){
		return $interactions().indexOf(obj.id) >= 0
	}

	self.active = ko.observable(0);
	self.selected = ko.computed({
	  read: function() { return self.active().toString(); },
	  write: function(newValue) { self.active(parseInt(newValue, 10)); },
	  owner: self
	});
	self.setStatinSelectionandNavigate = function($data){
		self.StatinSelection($data.id);
		pager.navigate('#!/content/drugComparison/compare/singleStatin');
	}
	self.slideInPage =function (page, callback) {
	    $(page.element).slideDown(1000, callback);
	};
	self.slideOutPage=function (page, callback) {
	    var $e = $(page.element);
	    if (!page.pageHiddenOnce) {
	        page.pageHiddenOnce = true;
	        $e.hide();
	    } else {
	        $e.slideUp(1000, function () {
	            $e.hide();
	        });
	        if (callback) {
	            callback();
	        }
	    }
	};

	//clearNodes
	self.RiskFactorsNone=ko.observable();
	self.SecondaryCausesNone=ko.observable();
	self.SecondaryMedicationsNone=ko.observable();
	self.SelectedSecondaryDrugsNone=ko.observable();
	self.RiskFactorsNone.subscribe(function(data) {
		if(data)
		{
			self.Form().viewSwitch('RiskFactors','true','');
			self.Form().RiskFactors([]);
		}
	});
	self.SecondaryCausesNone.subscribe(function(data) {
		if(data)
		{
			self.Form().viewSwitch('SecondaryCauses','true','');
			self.Form().SecondaryCauses([]);
		}
	});
	self.SecondaryMedicationsNone.subscribe(function(data) {
		if(data)
		{
			self.Form().viewSwitch('SecondaryMedications','true','');
			self.SecondaryMedications([]);
		}
	});
	self.SelectedSecondaryDrugsNone.subscribe(function(data) {
		if(data)
		{
			self.SMDC_Clear();
		}
	});


	//notification
	self.criticalNotification = ko.observableArray([]);
	self.appStoreURL = ko.observable(notification.appStoreURL);
	self.notificationData = ko.observableArray([]);

	//Store data in session storage
	self.StoreDataToLocal = function(DataProp,DataVal) {
			if(sessionStorage.getItem('AppData') && sessionStorage.getItem('AppData')!=='null'){
					AppDataObj=JSON.parse(sessionStorage.getItem('AppData'));
			}

			if(DataProp=='SecondaryMedications' || DataProp=='SelectedSecondaryDrugs')
			{
				AppDataObj[DataProp+'Action']=this[DataProp]();
				AppDataObj[DataProp+'None']=false;
			}else if(DataProp=='RiskFactorsNone' || DataProp=='SecondaryCausesNone' || DataProp=='SecondaryMedicationsNone' || DataProp=='SelectedSecondaryDrugsNone')
			{
				AppDataObj[DataProp]=true;
				if(DataProp=='RiskFactorsNone')
				{
					 if(AppDataObj.RiskFactorsAction!==undefined)
					 		delete AppDataObj.RiskFactorsAction
				}else if(DataProp=='SecondaryCausesNone')
				{
					if(AppDataObj.SecondaryCausesAction!==undefined)
					 	deleteAppDataObj.SecondaryCausesAction
				}else if(DataProp=='SecondaryMedicationsNone')
				{
					if(AppDataObj.SecondaryMedicationsAction!==undefined)
						delete AppDataObj.SecondaryMedicationsAction;
				}
				else if(DataProp=='SelectedSecondaryDrugsNone')
				{
					if(AppDataObj.SelectedSecondaryDrugsAction!==undefined)
						delete AppDataObj.SelectedSecondaryDrugsAction;
				}
			}else if(DataProp=='SelectedDose' || DataProp=='RiskFactors' || DataProp=='SecondaryCauses' || DataProp=='PainLevel' || DataProp=='PainFrequency')
			{
				AppDataObj[DataProp+'Action']=self.Form()[DataProp]();
				if(DataProp=='RiskFactors' || DataProp=='SecondaryCauses')
					AppDataObj[DataProp+'None']=false
			}else if( DataProp=='Charactisitics' || DataProp=='StatinSelection' || DataProp=='CharacteristicSelection' || DataProp=='CurrentStatin'){
				AppDataObj[DataProp]=this[DataProp]();
			}else if(DataProp=='CKUpdateAction'){
				 AppDataObj.CKUpdateAction=DataVal;
			}else if(DataVal!==''){
				AppDataObj[DataProp]=DataVal;
			}else {
				AppDataObj[DataProp]=self.Form()[DataProp]();
			}
				sessionStorage.setItem('AppData',JSON.stringify(AppDataObj));
		  	// console.log(AppDataObj);
	};

	//clear session data
	self.ClearLocalData=function(ClearType){
		var LCData=JSON.parse(sessionStorage.getItem('AppData'));
		switch (ClearType) {
			case "eval":
					 for (var key in LCData) {
							 if(key=='Page2Selection' || key=='Page3Selection' || key=='Page4Selection' || key=='Page5Selection' || key=='Page6Selection' || key=='StatinSelection' || key=='CharacteristicSelection' || key=='SelectedSecondaryDrugsAction' || key=='SelectedSecondaryDrugsNone'){
								 continue;
							}else{
								delete LCData[key];
							}
					 }
					 sessionStorage.setItem('AppData',JSON.stringify(LCData));
					 break;
			case "evalndrug":
					for (var key in LCData) {
							if(key=='Page2Selection' || key=='Page3Selection' || key=='Page4Selection' || key=='Page5Selection' || key=='Page6Selection'){
								continue;
						 }else{
							 delete LCData[key];
						 }
					}
					sessionStorage.setItem('AppData',JSON.stringify(LCData));
					break;
		}
	};

	//refersh clear storage
	if (performance.navigation !== undefined) {
		if(performance.navigation.type==1)
		{
			AppDataObj={};
			sessionStorage.setItem('AppData',JSON.stringify(AppDataObj));
			// console.log('refreshed');
		}
	}

	// Map local data to viewmodel

	self.LocalDataSet=function(PreDefinedData)
	{
		if(PreDefinedData!='')
		{
			var viewmodelMapping={
    'SecondaryMedicationsAction': {
        create: function (options) {
            if (options.data != null) return options.data;
        }
    	},
		'SelectedSecondaryDrugsAction': {
        create: function (options) {
            if (options.data != null) return options.data;
        }
    	}};
			var FormMapping={
    'RiskFactorsAction': {
         create: function (options) {
             if (options.data != null) return options.data;
        }
    },
		'SecondaryCausesAction':{
			 create: function (options) {
					 if (options.data != null) return options.data;
				 }
			},
		'SelectedDoseAction':{
			 create: function (options) {
					 if (options.data != null) return options.data;
				 }
			},
		'PainLevelAction':{
			 create: function (options) {
					 if (options.data != null) return options.data;
				 }
			},
		'PainFrequencyAction':{
		 			 create: function (options) {
		 					 if (options.data != null) return options.data;
				 }
			}};

			ko.mapping.fromJS(PreDefinedData,viewmodelMapping, self);
			ko.mapping.fromJS(PreDefinedData,FormMapping, self.Form);
			ko.mapping.fromJS(PreDefinedData,{}, self.FollowUp);
			// self.SecondaryMedications([self.Data.secondaryDrugs[2]]);
		}
	}
}

	var appmodel = new viewModel();

// ko.applyBindings(appmodel);
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// var viewModel = {
// };
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

ko.bindingHandlers.grouping = {
	init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var values = ko.unwrap( valueAccessor() );
		var parameter = eval("bindingContext.$parent.Grouping");
		var groupValue = parameter();
		//
			if (groupValue != values.data.info.category) {
				parameter(values.data.info.category);
				$(element).before("<tr class='seperator'><td colspan='" + values.columns + "' class='seperator'>" + values.data.info.category + "</td></tr>")
			}
		}
	};

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange

//mapping data
if(sessionStorage.getItem('AppData') && sessionStorage.getItem('AppData')!=='null'){
	var LocalData = JSON.parse(sessionStorage.getItem('AppData'));
	appmodel.LocalDataSet(LocalData);
}else {
	appmodel.LocalDataSet('');
}

//
pager.start();
var path = "#!/";
pager.navigate(path);

//call notification
notification.callWebApi('get',notification.criticalNotificationInputURL(),null, notification.notificationType.critical);


//pagr functions  Tab Selelction Engine.
// attach this call back to afterShow to pages that have correlation to the tab you want to select.

var tabchange = function(data,event){
	$('.header .tabs li').removeClass('selected');
	$('.footer .tabs li').removeClass('selected');
	var string = '#'+data.page.currentId+'-Tab';
	$(string).addClass('selected');

	//call notification
		notification.callWebApi('get',notification.criticalNotificationInputURL(),null, notification.notificationType.critical);
}
var loadTopofPage = function(data,event){
	 $("html, body").animate({ scrollTop: 0 });
}
function goBack() {
    window.history.back()
}

var panelScrollTop = function(data, event){
	var offset = $(event.currentTarget).parent().parent().offset().top -50;
	var winOffset = $(window).scrollTop();
	var newScroll = ( offset <= winOffset)? offset : 0;
	$(window).scrollTop(newScroll);
	};
var pageScrollTop = function(data, event){
	$(window).scrollTop(0);
	}
var panelVisibleToggle = function(data,event){
	var target = data + ' .collapsable-panel'
	$(target).toggle();
};
var panelHide = function(data, event){
	$(event.currentTarget).parents('.collapsable-panel').hide();
	$(event.currentTarget).parents('.selected').removeClass('selected');
};
var panelShow = function(data,event){
	var target = data + ' .collapsable-panel'
	$(target).show();
};

var listchange = function(data, event){
	var hash = location.hash;
	$('#followUpList li,#guidelineList li, #compareTabs li,#evalutorTabs li').removeClass('selected');
	$('#followUpList li,#guidelineList li, #compareTabs li,#evalutorTabs li').each(function(){
		var that = $(this);
		that[ $('a', this).attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'selected' );
		}
	);
}
var  BackButtonSet = function(url){
	// appmodel.BackButtonPath(url);
}

function followUpObject(data){
	var self= this;
	self.Page1Selection = ko.observable('');
	self.Page1SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page1Selection() != ''){
				R = self.Page1Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page2Selection = ko.observable('');
	self.Page2SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page2Selection() != ''){
				R = self.Page2Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page2selectionLink=ko.pureComputed(
	function() {
		var L='#!/content/followUp/reason/page2';
		if(self.Page2Selection() != ''){
			L = self.Page2Selection() == 'true'? "#!/content/followUp/reason/page2/option1" : "#!/content/followUp/reason/page2/option2";
		}
	return L;}, self);
	self.Page3Selection = ko.observable('');
	self.Page3SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page3Selection() != ''){
				R = self.Page3Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page3selectionLink=ko.pureComputed(
	function() {
		var L='#!/content/followUp/reason/page3';
		if(self.Page3Selection() != ''){
			L = self.Page3Selection() == 'true'? "#!/content/followUp/reason/page3/option1" : "#!/content/followUp/reason/page3/option2";
		}
	return L;}, self);
	self.Page4Selection = ko.observable('');
	self.Page4SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page4Selection() != ''){
				R = self.Page4Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page4selectionLink=ko.pureComputed(
	function() {
		var L='#!/content/followUp/reason/page4';
		if(self.Page4Selection() != ''){
			L = self.Page4Selection() == 'true'? "#!/content/followUp/reason/page4/option1" : "#!/content/followUp/reason/page4/option2";
		}
	return L;}, self);
	self.Page5Selection = ko.observable('');
	self.Page5SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page5Selection() != ''){
				R = self.Page5Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page5selectionLink=ko.pureComputed(
	function() {
		var L='#!/content/followUp/reason/page5';
		if(self.Page5Selection() != ''){
			L = self.Page5Selection() == 'true'? "#!/content/followUp/reason/page5/option1" : "#!/content/followUp/reason/page5/option2";
		}
	return L;}, self);
	self.Page6Selection = ko.observable('');
	self.Page6SelectionClass = ko.pureComputed(
		function() {
			var R = '';
			if(self.Page6Selection() != ''){
				R = self.Page6Selection() == 'true'? "selected-btn1" : "selected-btn2";
			}
			return R;}, self);
	self.Page6selectionLink=ko.pureComputed(
	function() {
		var L='#!/content/followUp/reason/page6';
		if(self.Page6Selection() != ''){
			L = self.Page6Selection() == 'true'? "#!/content/followUp/reason/page6/option1" : "#!/content/followUp/reason/page6/option2";
		}
	return L;}, self);
	self.SetValue = function($type,$bool,$path){
		switch($type){
			case 'Page1Selection':
				self.Page1Selection($bool);
				break;
			case 'Page2Selection':
				self.Page2Selection($bool);
				break;
			case 'Page3Selection':
				self.Page3Selection($bool);
				break;
			case 'Page4Selection':
				self.Page4Selection($bool);
				break;
			case 'Page5Selection':
				self.Page5Selection($bool);
				break;
			case 'Page6Selection':
				self.Page6Selection($bool);
				break;
			default :break;
		}
		// if($path != ''){pager.navigate($path)};
	}

$("#email").click(
	function() {
		this.href = "mailto:you@yourdomain.com?subject=Statin Intolerance Evaluation&body=";
	    this.href += getBody();
	}
);

function getBody() {
	var linebreak = '%0D%0A'
	var doublelinebreak = linebreak+linebreak;

	var body = 'DEMOGRAPHICS'+linebreak;
	if(appmodel.Form().Gender() != undefined)
	body += 'Sex - '+ genderOption[appmodel.Form().Gender()].Text + linebreak;
	// if(appmodel.Form().Age() != undefined)
	// body += 'Age - '+ ageOption[appmodel.Form().Age()].Text + linebreak;
	if(appmodel.Form().Race() != undefined)
	body += 'Race - '+ raceOption[appmodel.Form().Race()].Text + linebreak;

	body +=''+linebreak;

	body += 'CURRENT STATIN PRESCRIPTION '+linebreak;
	if(appmodel.CurrentStatin())
	body +=  appmodel.Data.statins[appmodel.CurrentStatin()].name + linebreak;
	if(appmodel.Form().SelectedDose()){
	var dose = appmodel.Form().SelectedDose();
	body +=  "Dosage - " + dose.value +" ("+dose.name+")" + linebreak;
	}
	if(appmodel.Form().Frequency() != undefined)
	body += 'Frequency - '+ frequencyOption[appmodel.Form().Frequency()].Text;
	if(appmodel.Form().Timeday() != undefined)
	body += ' ('+timedayOption[appmodel.Form().Timeday()].Text+')'+ doublelinebreak;

	if(appmodel.Form().YearofStatin()){
		var month = appmodel.Form().MonthofStatin()
		if( ! month ){
			month = 0;
		}
	body += 'Started Current Statin'+" - ";
	var timeofstatin  = new Date();
		options = {
	        year: "numeric",
	        month: "long",
   		};
	timeofstatin.setFullYear( appmodel.Form().YearofStatin(), month, 1 );
	body += timeofstatin.toLocaleDateString("en", options)+linebreak;
	}

	if (appmodel.Form().PreviousStatin() != undefined) {
		var $PreviousStatinMessage = "";
		if (appmodel.Form().PreviousStatin() == true){
				$PreviousStatinMessage = "Yes"
			}else{
				$PreviousStatinMessage = "No"
			}
		body += "Muscle pain on previous statin? -"+ $PreviousStatinMessage + doublelinebreak;
	};


	body += 'RHABDOMYOLYSIS ASSESSMENT '+linebreak;
	if(appmodel.Form().CKValue() != undefined){
		var $CKValueMessage = "";
		switch (appmodel.Form().CKValue()){
			case "yes":
				$CKValueMessage = "Yes";break;
			case "no":
				$CKValueMessage = "No";break;
			case "unknown":
				$CKValueMessage = "Don't Know";break;
			default:
				$CKValueMessage = "Don't Know";break;
		}
		body += "Patient's CK above 5x the ULN - "+ $CKValueMessage + doublelinebreak;
	}

	if(appmodel.Form().RiskFactors().length>0){
		body += 'STATIN INTOLERANCE RISK FACTOR(S) - ';
		body += appmodel.Form().RiskFactors().length +" Selected"+linebreak;

		// var $RiskFactors = ''
		// 	for(i=0; i<appmodel.Form().RiskFactors().length; i++){}

		}

	if(appmodel.Form().SecondaryCauses().length>0){
		body += 'POSSIBLE NON-STATIN CAUSE(S) FOR MUSCLE SYMPTOM(S) - ';
		body += appmodel.Form().SecondaryCauses().length +" Selected"+linebreak;
		//var $SecondaryCauses = ''
		// for(i=0; i<appmodel.Form().SecondaryCauses().length; i++){}

		}

	if(appmodel.SecondaryMedications().length>0){
		body += 'PATIENT’S SECONDARY MEDICATION(S) '+linebreak;
			var secondaryDrugs = ''
			if(appmodel.SecondaryMedications().length < 4){
				for(i=0; i<appmodel.SecondaryMedications().length; i++)
					{ secondaryDrugs += "- %20"+appmodel.SecondaryMedications()[i].name+linebreak;}
					body += secondaryDrugs+linebreak;
				}else{
					body += appmodel.SecondaryMedications().length+" Selected"+linebreak;
				};



		}
	body +=''+linebreak;

    return body;

}
}

function countCSSRules() {
    var results = '',
        log = '';
    if (!document.styleSheets) {
        return;
    }
    for (var i = 1; i < document.styleSheets.length; i++) {
        countSheet(document.styleSheets[i]);
    }
    function countSheet(sheet) {
        var count = 0;
        if (sheet && sheet.cssRules) {
            for (var j = 0, l = sheet.cssRules.length; j < l; j++) {
                if( !sheet.cssRules[j].selectorText ) {
                    continue;
                }
                count += sheet.cssRules[j].selectorText.split(',').length;
            }

            log += '\nFile: ' + (sheet.href ? sheet.href : 'inline <style> tag');
            log += '\nRules: ' + sheet.cssRules.length;
            log += '\nSelectors: ' + count;
            log += '\n--------------------------';
            if (count >= 4096) {
                results += '\n********************************\nWARNING:\n There are ' + count + ' CSS rules in the stylesheet ' + sheet.href + ' - IE will ignore the last ' + (count - 4096) + ' rules!\n';
            }
        }
    }
    // console.log(log);
    // console.log(results);
};
countCSSRules();
$(document).ready(function () {
				var view = viewHeight();
				function viewHeight() {
					var viewportwidth;
					var viewportheight;

					// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
					if (typeof window.innerWidth != 'undefined') {
						viewportwidth = window.innerWidth,
						viewportheight = window.innerHeight;
					}

					//	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
					else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
						viewportwidth = document.documentElement.clientWidth,
						viewportheight = document.documentElement.clientHeight;
					}

					//	 older versions of IE
					else {
						viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
						viewportheight = document.getElementsByTagName('body')[0].clientHeight;
					}
					return viewportheight;

				};
				mh = (view - 169);
				$(".fullscreen-spacer").css("min-height", mh);
				$(window).resize(function () {
				   mh = (view - 169);
					$(".fullscreen-spacer").css("min-height", mh);
				});
			});

			//detect input change
			$(function(){
				$('select').bind('change',function(){
					var PropertyName=$(this).attr('data-appval');
					appmodel.StoreDataToLocal(PropertyName,'');
				});
				$('input').bind('click',function(){
					var PropertyName=$(this).attr('data-appval');
					appmodel.StoreDataToLocal(PropertyName,'');
				});
			});
