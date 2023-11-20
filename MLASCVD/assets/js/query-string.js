/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value toLowerCase()
 */


var getQueryString = function(field, url) {
    var href = url ? url : params;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};
var path = "#!/calculate/estimate/";
var params = window.location.search;
    if (!params) {
        params = '';
    }else {
       appmodel.Form().VisitTypeUI(false);
        //Edge case for _ga
        if(params.indexOf("_ga") == -1 || (params.indexOf("_ga") > -1 && params.split("&").length > 1)) {
            if (getQueryString('compare') != null) {
                if(getQueryString('compare').toLowerCase() == "t") {
                    appmodel.Form().VisitType(true);
                    appmodel.Form().VisitTypeUI(true);
                }
                else if(getQueryString('compare').toLowerCase() == "f") {
                    appmodel.Form().VisitTypeUI(false);
                }
            }    
            if (getQueryString('unitofmeasurement') != null) {
                if(getQueryString('unitofmeasurement').toLowerCase() == "si")
                    appmodel.Form().UnitOfMeasure(true);
            }
            if (getQueryString('age') != null) {
                appmodel.Form().Age(getQueryString('age'));
            }
            if (getQueryString('gender') != null) {
                var queryGender = getQueryString('gender').toLowerCase();
                if (queryGender == "m" || queryGender == "male") {
                    appmodel.Form().Sex("Male");
                } else if (queryGender == "f" || queryGender == "female") {
                    appmodel.Form().Sex("Female");
                }
            }
            if (getQueryString('race') != null) {
                var queryRace = getQueryString('race').toLowerCase();;
                if(queryRace =="wh"){appmodel.Form().Race("White");}
                else if(queryRace =="aa"){appmodel.Form().Race("African American");}
                else if(queryRace =="ot"){appmodel.Form().Race("Other");}
            }
            if (getQueryString('hdl') != null) {
                appmodel.Form().HDLCholesterolValue(getQueryString('hdl'));
            }
            if (getQueryString('ldl') != null) {
                appmodel.Form().LDLCholesterolValue(getQueryString('ldl'));
            }
            if (getQueryString('chol') != null) {
                appmodel.Form().TotalCholesterolValue(getQueryString('chol'));
            }
            if (getQueryString('bp') != null) {
                appmodel.Form().BloodPressure(getQueryString('bp'));
            }
            if (getQueryString('dbp') != null) {
                appmodel.Form().DBloodPressure(getQueryString('dbp'));
            }
            if (getQueryString('diab')!= null  ) {
                var queryDiabetic = getQueryString('diab').toLowerCase();
                if(queryDiabetic == "t" || queryDiabetic == "true") {
                    appmodel.Form().Diabetic('Yes');
                }
                else if(queryDiabetic == "f" || queryDiabetic == "false") {
                    appmodel.Form().Diabetic('No');
                }
                else {
                    appmodel.Form().Diabetic(undefined);
                }
            }
            if (getQueryString('smoker') != null ) {
                var smokeQuery = getQueryString('smoker').toLowerCase();
                if(smokeQuery == "t" || smokeQuery == "true") {
                    appmodel.Form().Smoker('Yes');
                }
                else if(smokeQuery == "f" || smokeQuery == "false") {
                    appmodel.Form().Smoker('No');
                }
                else if(smokeQuery == "q") {
                    appmodel.Form().Smoker('Former');
                }
                else {
                    appmodel.Form().Smoker(undefined);
                }
            }
            if (getQueryString('hyp') != null) {
                var query = getQueryString('hyp').toLowerCase();
                if(query == "t" || query == "true") {
                    appmodel.Form().Hypertension('Yes');
                }
                else if(query == "f" || query == "false") {
                    appmodel.Form().Hypertension('No');
                }
                else {
                    appmodel.Form().Hypertension(undefined);
                }
            }
            if (getQueryString('statin')!= null  ) {
                var query = getQueryString('statin').toLowerCase();
                if(query == "t" || query == "true") {
                    appmodel.Form().OnStatin('Yes');
                }
                else if(query == "f" || query == "false") {
                    appmodel.Form().OnStatin('No');
                }
                else {
                    appmodel.Form().OnStatin(undefined);
                }
            }
            if (getQueryString('aspirin')!= null  ) {
                var query = getQueryString('aspirin').toLowerCase();
                if(query == "t" || query == "true") {
                    appmodel.Form().OnAspirin('Yes');
                }
                else if(query == "f" || query == "false") {
                    appmodel.Form().OnAspirin('No');
                }
                else {
                    appmodel.Form().OnAspirin(undefined);
                }
            }
             if (getQueryString('former') != null) {
                var quitYears = getQueryString('former').toLowerCase();
                switch(quitYears) {
                    case "unknown": {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[0]);}break;    
                    case "less6": {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[1]);}break;
                    case "less1.5":
                    {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[2]);}break;
                    case "less2.5":
                    {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[3]);}break;
                    case "less3.5": 
                    {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[4]);}break;
                    case "less5":
                    {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[5]);}break;
                    case "more5":
                    {appmodel.Form().QuiteSmokingMonths(appmodel.FormData.quiteSmoking[6]);}break;
                    default: 
                    {appmodel.Form().QuiteSmokingMonths(undefined);}
                }
            }
            
            if(appmodel.Form().VisitType()){
                //Baseline values
                if (getQueryString('baseage') != null) {
                    appmodel.Form().BaselineAge(getQueryString('baseage'));
                }
                if (getQueryString('basehdl') != null) {
                    appmodel.Form().BaselineHDLCholesterolValue(getQueryString('basehdl'));
                }
                if (getQueryString('baseldl') != null) {
                    appmodel.Form().BaselineLDLCholesterolValue(getQueryString('baseldl'));
                }
                if (getQueryString('basechol') != null) {
                    appmodel.Form().BaselineTotalCholesterolValue(getQueryString('basechol'));
                }
                if (getQueryString('basebp') != null) {
                    appmodel.Form().BaselineBloodPressure(getQueryString('basebp'));
                }
                if (getQueryString('basediab')!= null && appmodel.Form().Diabetic()!='No') {
                    var queryDiabetic = getQueryString('basediab').toLowerCase();
                    if(queryDiabetic == "t" || queryDiabetic == "true") {
                        appmodel.Form().BaselineDiabetic('Yes');
                    }
                    else if(queryDiabetic == "f" || queryDiabetic == "false") {
                        appmodel.Form().BaselineDiabetic('No');
                    }
                    else {
                        appmodel.Form().BaselineDiabetic(undefined);
                    }
                }
                if (getQueryString('basesmoker') != null && appmodel.Form().Smoker()!="No") {
                    var smokeQuery = getQueryString('basesmoker').toLowerCase();
                    if(smokeQuery == "t" || smokeQuery == "true") {
                        appmodel.Form().BaselineSmoker('Yes');
                    }
                    else if(smokeQuery == "f" || smokeQuery == "false") {
                        appmodel.Form().BaselineSmoker('No');
                    }
                    else {
                        appmodel.Form().BaselineSmoker(undefined);
                    }
                }
                if (getQueryString('basehyp') != null) {
                    var query = getQueryString('basehyp').toLowerCase();
                    if(query == "t" || query == "true") {
                        appmodel.Form().BaselineHypertension('Yes');
                    }
                    else if(query == "f" || query == "false") {
                        appmodel.Form().BaselineHypertension('No');
                    }
                    else {
                        appmodel.Form().BaselineHypertension(undefined);
                    }
                }
            }
            if((appmodel.Form().Age() >= 40 && appmodel.Form().Age() <= 79)) {
                //Only check the redirect if age is in range 40-79
                if(getQueryString('redirect') != null) {
                    var isRedirect = getQueryString('redirect');
                    if(isRedirect == 't'|| isRedirect == 'true') {
                        appmodel.validate(true);
                        appmodel.baselineValidate(true);
                        path = "#!/calculate/advice/riskgraph/";

                    } else if(isRedirect == 'f' || isRedirect == 'false') {
                            //redirect=false; perform no validation
                            path = "#!/calculate/estimate";
                    }

                }
                else {
                    //Goto riskgraph after validating values
                    appmodel.validate(true);
                    appmodel.baselineValidate(true);
                    if(appmodel.recommendationUnlock()) {
                        path = "#!/calculate/advice/riskgraph/";
                    }
                    else {
                        path = "#!/calculate/estimate";
                    }
                }
            }
        }
    }
pager.navigate(path);
pageScrollTop();
errorTextBoxScroll();