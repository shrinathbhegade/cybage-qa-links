define(['knockout','viewmodels/proceduralBleedRiskViewModel'], function(ko,proceduralBleedRiskViewModel) {
   describe('proceduralBleedRiskViewModel', function(){
	  // 'beforeEach' performs setup before each 'it' test
	  beforeEach(function(){
	  });
	  
	  it('resetAll method test', function(){       
		  var proceduralBleedRiskVM = new proceduralBleedRiskViewModel();
          
		  proceduralBleedRiskVM.searchProcedure();
		  proceduralBleedRiskVM.selectedValue = "";
         expect(proceduralBleedRiskVM.procedureList.length).toBe(proceduralBleedRiskVM.arrayToShow.length);
		  
	  });
       
       
       
   

   });
});



