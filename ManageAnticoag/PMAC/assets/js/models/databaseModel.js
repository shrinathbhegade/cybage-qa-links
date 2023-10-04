/*!
* databaseModel JS
* databaseModel is used to define database operations.
*/
define(['knockout',"jquery","pager","databaseConstantsModel"], function(ko,$,pager,databaseConstantsModel) {
    
    /*
	* initializeDB function
	* initializeDB is used to open the database for PMAC application.
	*/
    function initializeDB (){
        createTherapyTable();
        createBleedRiskTable();
        createProceduralBleedRiskTable();
        createCHADsVAScTable();
        createCHADsVAScGenderTable();
        createCHADsVAScAgeTable();
        createRestartTable();
	    createProceduralBleedDropdownTable();
    }

    function createStorage(tableName, tableData){
        var dataToStore = JSON.stringify(tableData);
        sessionStorage.setItem(tableName, dataToStore);
    }
    
    /*
	* createProceduralBleedDropdownTable function
	* createProceduralBleedDropdownTable is used to create Procedural Bleed Dropdown table.
	*/
	function createProceduralBleedDropdownTable(){
		try{
	        const tableData = databaseConstantsModel.proceduralBleedRiskDropDown;
            createStorage("BLEEDRISK_DROPDOWN", tableData);
    	}catch(ex){
    		console.log("createProceduralBleedDropdownTable(): error: " + ex);	
    	}
	}
	
    /*
	* createTherapyTable function
	* createTherapyTable is used to create therapy table.
	*/
	function createTherapyTable(){
		try{
	        const tableData = databaseConstantsModel.therapyType;
            createStorage('THERAPY_DATA', tableData);
    	}catch(ex){
    		console.log("createTherapyTable(): error: " + ex);	
    	}
	}
    
    /*
	* createBleedRiskTable function
	* createBleedRiskTable is used to create bleed risk table.
	*/
	function createBleedRiskTable(){
        const tableData = databaseConstantsModel.patientBleedRiskQuestions;
        createStorage("PATIENT_BLEED_RISK", tableData);
	}
    
    /*
	* createProceduralBleedRiskTable function
	* createProceduralBleedRiskTable is used to create procedures table.
	*/
	function createProceduralBleedRiskTable(){
        const tableData = databaseConstantsModel.proceduralBleedRisks;
        createStorage("PROCEDURAL_BLEED_RISK", tableData);
	}
    
    /*
	* createCHADsVAScTable function
	* createCHADsVAScTable is used to create chads vasc questions table.
	*/
	function createCHADsVAScTable(){
        const tableData = databaseConstantsModel.chadsVascQuestions;
        createStorage("CHADS_VASC_TABLE",tableData);
	}
    
    /*
	* createCHADsVAScGenderTable function
	* createCHADsVAScGenderTable is used to create chads vasc gender table.
	*/
	function createCHADsVAScGenderTable(){
        const tableData = databaseConstantsModel.chadsVascGender;
        createStorage("CHADS_VASC_GENDER_TABLE", tableData);
	}
    
    /*
	* createCHADsVAScAgeTable function
	* createCHADsVAScAgeTable is used to create chads vasc age table.
	*/
	function createCHADsVAScAgeTable(){
        const tableData = databaseConstantsModel.chadsVascAge;
        createStorage("CHADS_VASC_AGE_TABLE", tableData);
	} 
    
    /*
	* createRestartTable function
	* createRestartTable is used to create restart questions table.
	*/
	function createRestartTable(){
        const tableData = databaseConstantsModel.restartQuestions;
        createStorage("RESTART_QUESTIONS", tableData);
	}

    return{
		initializeDB:initializeDB
    };
})