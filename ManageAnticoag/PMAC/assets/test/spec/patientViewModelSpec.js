define(['knockout','viewmodels/patientViewModel'], function(ko,patientViewModel) {
   describe('patientViewModel', function(){
	  // 'beforeEach' performs setup before each 'it' test
	  beforeEach(function(){
	  });
	  
	  it('resetAll method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.resetAll();
		  expect(patientVM.buttonActive()).toBe(null);
		  expect(patientVM.inactiveNaviagtion()).toBe(true);
		  expect(patientVM.selectedDrug()).toBe(null);
	  });
	  
	  it('activeYesBtn method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.activeYesBtn();
		  expect(patientVM.buttonActive()).toBe(false);
		  expect(patientVM.inactiveNaviagtion()).toBe(false);
	  });
	  
	  it('activeNoBtn method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.activeNoBtn();
		  expect(patientVM.buttonActive()).toBe(true);
		  expect(patientVM.inactiveNaviagtion()).toBe(false);
	  });
      it('patientComputePage method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.patientComputePage();
		  expect(patientVM.inactiveNaviagtion()).toBe(true);
	  });
	  it('interruptPage method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.interruptPage();
		  expect(patientVM.inactiveNaviagtion()).toBe(true);
	  });
	  it('bridgePage method test', function(){       
		  var patientVM = new patientViewModel();
		  patientVM.bridgePage();
		  expect(patientVM.inactiveNaviagtion()).toBe(true);
		  
	  });

   });
});
