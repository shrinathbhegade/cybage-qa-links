(function(appkey) {
    var getQueryString = function(field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
    var buildUrl = function() {
        var path = "";
        $("#questionset .page-wrapper").each(function() {
            $(this).find("input:checked").each(function() {
                path += $(this).attr("id")+"|";
            });
        });
        return path.substr(0, path.length - 1);
    }
    var load = function() {
        var lastPageVisited = sessionStorage.getItem("LAST_PAGE_VISITED");
        var oacShortcut = sessionStorage.getItem('INTENTIONAL_OAC_FROM_BAv1');
        
        if(getQueryString("reset")==null) {
            var path = sessionStorage.getItem(appkey+"path");
            var hasAdvice = sessionStorage.getItem(appkey+"onSubPage");
            if(path) {
                utils.loadedOldSession = true;
                //var query = getQueryString("path", path);
                var queryArray = path ? path.split('|') : 'No Query String Data Found';
                for (var prop=0; prop < queryArray.length; prop++) {
                    var multiSelectArray = queryArray[prop].split(',');
                    for (var index=0; index < multiSelectArray.length; index++) {
                        document.getElementById(multiSelectArray[index]).click();
                    }
                    
                }
                window.scrollTo(0,$("footer").offset().top);
                if(isQueryStringOn==false && getQueryString("noredirect")==null && lastPageVisited != 'LP' && oacShortcut == null) {
                    window.location=hasAdvice;
                }
                utils.loadedOldSession = false;
            }
        }
        //Show sessionStorage popup
        if(lastPageVisited != 'AX' /*&& lastPageVisited != 'LP'*/ && lastPageVisited != 'T3' && oacShortcut == null) {
                if(path && hasAdvice) {
                $('.session-overlay').css('display','block');
                $('body').css('overflow','hidden');
            }
        }
        else if(oacShortcut != null) {
            sessionStorage.removeItem('INTENTIONAL_OAC_FROM_BAv1');
            resetAll();
        }
    }
    var unload = function() {
        sessionStorage.setItem(appkey+"path", buildUrl());
        sessionStorage.setItem(appkey+"onSubPage", window.location.href);
        sessionStorage.setItem("LAST_PAGE_VISITED", "T3");
         sessionStorage.removeItem("OPENED_BEFORE_MB");
    }
    window.setTimeout(load, 500);
    window.addEventListener("unload", unload);
    window.addEventListener("beforeunload", unload);
})("oacrestart0410");