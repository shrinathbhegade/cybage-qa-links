define(['knockout','viewmodels/patientBleedRiskWizardModel'], function(ko,patientBleedRiskWizardModel) {
   describe('patientBleedRiskWizardModel', function(){
	  // 'beforeEach' performs setup before each 'it' test
	  beforeEach(function(){
	  });
	  
	  it('resetAll method test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
		  patientBleedVM.resetBtn();
		  expect(patientBleedVM.priorBleedEvent()).toBe(false);
          expect(patientBleedVM.plateletAbnormality()).toBe(false);
          expect(patientBleedVM.therapeuticRanges()).toBe(false);
          expect(patientBleedVM.therapeuticRanges1()).toBe(false);
          expect(patientBleedVM.bridging()).toBe(false);
          expect(patientBleedVM.shouldShowNoneApply()).toBe(true);
          expect(patientBleedVM.shouldShowDone()).toBe(false);
          expect(patientBleedVM.header()).toBe(true);
          expect(patientBleedVM.header1()).toBe(false);
          expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
       
     it('priorBleedEventToggleAssociation test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
           expect(patientBleedVM.priorBleedEvent()).toBe(false);
           patientBleedVM.priorBleedEvent(true);
		    patientBleedVM.priorBleedEventToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(1);
            patientBleedVM.priorBleedEvent(false);
            patientBleedVM.priorBleedEventToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
	  
       it('plateletAbnormalityToggleAssociation test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
           expect(patientBleedVM.plateletAbnormality()).toBe(false);
           patientBleedVM.plateletAbnormality(true);
		    patientBleedVM.plateletAbnormalityToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(1);
            patientBleedVM.plateletAbnormality(false);
            patientBleedVM.plateletAbnormalityToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
       
       it('therapeuticRangesToggleAssociation test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
           expect(patientBleedVM.therapeuticRanges()).toBe(false);
           patientBleedVM.therapeuticRanges(true);
		    patientBleedVM.therapeuticRangesToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(1);
            patientBleedVM.therapeuticRanges(false);
            patientBleedVM.therapeuticRangesToggleAssociation();
            expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
       
       it('therapeuticRanges1toggleAssociation test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
           expect(patientBleedVM.therapeuticRanges1()).toBe(false);
           patientBleedVM.therapeuticRanges1(true);
		    patientBleedVM.therapeuticRanges1toggleAssociation ();
            expect(patientBleedVM.itemArr.length).toBe(1);
            patientBleedVM.therapeuticRanges1(false);
            patientBleedVM.therapeuticRanges1toggleAssociation ();
            expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
       
       
        it('bridgingToggleAssociation test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
           expect(patientBleedVM.bridging()).toBe(false);
           patientBleedVM.bridging(true);
		    patientBleedVM.bridgingToggleAssociation  ();
            expect(patientBleedVM.itemArr.length).toBe(1);
            patientBleedVM.bridging(false);
            patientBleedVM.bridgingToggleAssociation  ();
            expect(patientBleedVM.itemArr.length).toBe(0);
		  
	  });
       
       it('showPatient test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
            patientBleedVM.showPatient   ();
		  
	  });
       
       it('saveWizad test', function(){       
		  var patientBleedVM = new patientBleedRiskWizardModel();
            patientBleedVM.saveWizad   ();
		  
	  });
	  

   });
});



