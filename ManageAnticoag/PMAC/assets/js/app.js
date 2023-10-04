            var globalAppViewModel = {};
            var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
            var appmodel = {criticalNotification: function(){}, notificationData: function(){}}
            //Show sessionStorage popup
            var lastPageVisited = sessionStorage.getItem("LAST_PAGE_VISITED");
            if(lastPageVisited != 'AX' /*&& lastPageVisited != 'LP'*/ && lastPageVisited != 'T1' && (sessionStorage.getItem('THERAPY_SESSION_DATA') || sessionStorage.getItem("YES_NO_STORAGE"))) {
                if((sessionStorage.getItem('THERAPY_SESSION_DATA')!=null && JSON.parse(sessionStorage.getItem('THERAPY_SESSION_DATA'))[0]['selected_therapy_type']==undefined) && sessionStorage.getItem("YES_NO_STORAGE")==undefined) {
                   
                }
                else {
                     $('.session-overlay').css('display','block');
                     $('body').css('overflow','hidden');
                }
            }
           
            var continueWithSamePatient = function() {
                $('.session-overlay').css('display','none');
                $('body').css('overflow','visible');
            }
            var startWithNewPatient = function() {
                resetAll();
                $('.session-overlay').css('display','none');
                $('body').css('overflow','visible');
            }
            
            var resetAll = function() {
                globalAppViewModel.appViewModel.ToStartNewPatient();
            }
            window.addEventListener("load", function() {
                if(window.location.href.indexOf('staticAdviceViewPage') >= 0) {
                    $('.header .icon').hide();
                }
            })
            window.addEventListener("beforeunload", function() {
               sessionStorage.setItem("LAST_PAGE_VISITED", "T1");
            });
            window.addEventListener("unload", function() {      //iOS does not support beforeunload
                sessionStorage.setItem("LAST_PAGE_VISITED", "T1");
            });
            
            var equalizeHamburgerBar = function() {
                 setTimeout(function(){
                   var maxHeight = 0, barsHeight = 0, borderHeight = 0, selector = "";
                    $('.header .icon').each(function() {
                        var val = parseFloat($(this).css('border-bottom-width'));
                        borderHeight = (val !=0) ? val : borderHeight;
                    });
                     
                         $('.icon a.home').each(function() {
                            barsHeight = ($(this).height()!=0) ? $(this).height() : barsHeight;
                        });
                    
                    if($('.header .mobile-acc-logo').css("display") !== "none") {
                        selector = '.header .mobile-acc-logo a';
                    }
                    else {
                        selector = '.header a.logo';
                    }
                    $(selector).each(function() {
                        maxHeight = ($(this).innerHeight() != 0) ? $(this).innerHeight() : maxHeight;
                    }); 
                    maxHeight = maxHeight - barsHeight  - borderHeight;
                     $('.icon a.home').css({
                            'padding': (maxHeight) / 2 + 'px 1em'
                        });
                }, 100);
            }
            equalizeHamburgerBar();
            window.addEventListener("load", equalizeHamburgerBar);
            window.addEventListener('hashchange', equalizeHamburgerBar);
            window.addEventListener('resize', equalizeHamburgerBar);

            function checkCriticalNotification() {
                notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
                window.scrollTo(0,0);
            }
            //checkNotification function is used in notification.js
            function checkNotification() {
                if (notification.criticalNotif) {
                    window.location.href = "../critical_notification.html";
                }
            }


            