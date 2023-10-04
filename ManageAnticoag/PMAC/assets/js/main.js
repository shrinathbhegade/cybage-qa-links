/*!
* main JS
* main JS is used to define required paths, initialize view models etc.
*/
requirejs.config({
    shim: {
        foundation: ['jquery'],
        bootstrap: ['jquery'],
        hashchange: ['jquery']
    },
    
    /**
     * Defines path of require JS
     */
    paths: {
        jquery: '../js/lib/jquery-3.7.1.min',
        knockout: '../js/lib/knockout-3.5.1',
        pager: '../js/lib/pager.min',
        whatInput:'../js/lib/what-input',
        foundation:'../js/lib/foundation',
		databaseModel: '../js/models/databaseModel',
        databaseConstantsModel: '../js/models/databaseConstantsModel',
        appConstantsModel:'../js/models/appConstantsModel',
        util: '../js/models/util',
		appViewModel:'../js/viewmodels/appViewModel',
    }
});

require(['jquery', 'knockout', 'pager','whatInput','foundation','databaseModel','databaseConstantsModel','appConstantsModel','util','appViewModel'], function ($, ko, pager,whatInput,foundation,databaseModel,databaseConstantsModel,appConstantsModel,util,appViewModel) {

    window.requireVM = function (moduleName) {
        return function (callback) {
            require([moduleName], function (mod) {
                callback(mod);
            });
        };
    };
 
    /**
     * This function is used to intialize the data model(view model)
     */
    $(function () {
        databaseModel.initializeDB();
		pager.Href.hash = '#!/';
		var viewModel = {
			appViewModel: new appViewModel(),
		};
		pager.extendWithPage(viewModel);
		ko.applyBindings(viewModel);
        globalAppViewModel = viewModel;
        pager.start();
	});
	
	// for sticky footer
	var windowWidth, windowHeight, footerHeight, headerHeight, tabHeight, totHeight, contentBlock;
	windowWidth = window.innerWidth, windowHeight = window.innerHeight;
    var heightCalc = function(){
        setTimeout(heightOfPageContent, 1);
    }	
    
	function heightOfPageContent(){
		contentBlock = document.getElementsByClassName('main-content');
		for(var i=0; i<contentBlock.length; i++){
			var documentHeight = contentBlock[i].clientHeight;		
			if(windowHeight > documentHeight){
				contentBlock[i].style.height = '100%';
			}
		}
		footerHeight = document.getElementsByClassName('footer')[0].clientHeight;
		if(document.getElementsByClassName('wizard')[0]){
			console.log('wizard page');
			var pageSectionHeight = windowHeight - footerHeight;
			document.getElementsByClassName('with-group-sections')[0].style.height = pageSectionHeight+'px';
		} else {
			console.log('main page');
			headerHeight = document.getElementsByClassName('header')[0].clientHeight;
			tabHeight = document.getElementsByClassName('overlap')[0].clientHeight;
			totHeight = headerHeight + tabHeight + footerHeight;
			var pageSectionHeight = windowHeight - totHeight;		
			document.getElementsByClassName('with-group-sections')[0].style.height = pageSectionHeight+'px';
		}
	}
    return{
		heightCalc: heightCalc
    };
});