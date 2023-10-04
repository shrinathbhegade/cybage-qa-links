define(['knockout','viewmodels/CRCLViewModel'], function(ko,CRCLViewModel) {
   describe('CRCLViewModel', function(){
	  // 'beforeEach' performs setup before each 'it' test
	  beforeEach(function(){
	  });
	  
	  it('resetAll method test', function(){       
		  var CRCLVM = new CRCLViewModel();
		  CRCLVM.resetBtn();
		  expect(CRCLVM.ageTxt()).toBe("");
           expect(CRCLVM.serumTxt()).toBe("");
           expect(CRCLVM.checkYesNo()).toBe(false);
          expect(CRCLVM.checkMaleFemale()).toBe(false);
         
		  
	  });
       
       
        it('bridgingToggleAssociation test', function(){       
		  var CRCLVM = new CRCLViewModel();
           expect(CRCLVM.checkYesNo()).toBe(false);
            
           CRCLVM.checkYesNo(true);
            CRCLVM.toggleYesNo  ();
		   expect(CRCLVM.hasDone()).toBe(true);
            CRCLVM.checkYesNo(false);
            CRCLVM.toggleYesNo  ();
            expect(CRCLVM.hasDone()).toBe(false);
           
		  
	  });
       
        it('showPatient test', function(){       
		  var CRCLVM = new CRCLViewModel();
            CRCLVM.done   ();
		  
	  });
       
       it('saveWizad test', function(){       
		  var CRCLVM = new CRCLViewModel();
            CRCLVM.cancel ();
		  
	  });
       
   

   });
});



