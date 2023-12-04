/*!
App JS
Copyright © 2015-2016 Cybage Software Pvt. Ltd
This file contains the functional code for web and mobile application.
Licensed under the Cybage license.

*/

//Declare Common code (I)
var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
var focusMode = false;
var orientationMode = '';
var isCommonCode = !(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i));
var linkClicked = {};

//Tooltip intialistion
var resetTooltip = function(){
    if($('.tip-top').hasClass('open') || $('.tip-left').hasClass('open')){
        $('.tip-top, .tip-left').removeClass('open');
        $('.tooltip').css('display', 'none');
    }
};
//End Common code (I)
/*This function is for toggling selected active css class on header tab navigation.
* @param data: contains the current element selector value.
* It also calculates the height of scorebar and remove certain css class of some elements for not overlaping with previously applied class.
*/
var tabchange = function (data) {
    $('.data-display').removeClass('shrink');
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    var string = '#' + data.page.currentId + '-Tab';
    $(string).addClass('selected active');
    if (string.indexOf('recommendation-Tab') > -1) {
        $('#scorebar').addClass('therapyreview');
        $('#creatinineClearance').hide();
        $('#creatinineClearance .collapsable-panel').hide();
    }else{
	if (string.indexOf('calculator-Tab') > -1) {
		$('#scorebar').removeClass('therapyreview');
		$('#creatinineClearance').hide();
		$('#crclWeight').removeClass('error warning info');
		$('#crclSerum').removeClass('error warning info');
		$('#crclAge').removeClass('error warning info custom_info');
		$('#patientAge').removeClass('error warning info custom_info');
		appmodel.Form().CalCrCl(false);}
    }
    $('.data').show();
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight + 25);
    $('.tip-top').removeClass('open');
    $('span.tip-top').css('display', 'none');
    resetTooltip();
    resizeView();
};
/*This function is for toggling selected css class on list tab change.
*/
var listchange = function () {
    var hash = location.hash;
    $('#recomendTabs li').removeClass('selected');
    $('#recomendTabs li').each(function () {
        var that = $(this);
	if($('a', this).attr('href') === hash){
		that.addClass('selected');
	}
	else{
		that.removeClass('selected');
	}
    }
    );
    $('.tip-top').removeClass('open');
    $('span.tip-top').css('display', 'none');
};
/*This function is for toggling selected css class on footer tab navigation.
* It also calculates the height of scorebar and remove "open" css class of tooltip for not overlaping with other UI sections.
*/
var footerChange = function () {
    var hash = location.hash;
    $('.data').hide();
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    $('#footerLinks li').each(function () {
			var that = $(this);
			if($('a', this).attr('href') === hash){
				that.addClass('selected');
			}
			else{
				that.removeClass('selected');
			}
		}
	);
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
    $('.tip-top').removeClass('open');
    $('span.tip-top').css('display', 'none');
    resetTooltip();
};
/*This function is for setting the page scroll to top on any tab navigation.
*/
var pageScrollTop = function () {
    $(window).scrollTop(0);
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
};
/*This function is used to expand or collapse the advice cards
*/
var advicePanelHide = function () {
    var siblingParent = $(this).parents('.panelAdviceContainer').find('.panelAdvice');
    var el = this;
    if (siblingParent.css('display') === 'none') {
        siblingParent.slideDown(100, function () {
            $(el).parent().hide();
            $(el).parent().prev().show();
        });
    } else {
        siblingParent.slideUp(100, function () {
            $(el).parent().hide();
            $(el).parent().next().show();
        });
    }
};
/*This function is for setting the focus to Age field on page load.
*/
$(function () {
    $('[autofocus]:not(:focus)').eq(0).focus();
});
/*This function is for dismissing the Therapy tab disabled warning message modal popup.
*/
var closeModal = function () {
    $('.reveal-modal-bg').hide();
    $('#reviewTherapyError').hide();
};
/*This function is for showing the Therapy tab disabled warning message modal popup.
*/
var showReviewTherapyPopup = function () {
	if (appmodel.Form().ReviewTherapyDisabled()) {
		$('#reviewTherapyError').show();
		$('.reveal-modal-bg').show();
	}else{
		window.location.href = '#!/content/recommendation/strokeriskbenefit/';
	}

};
/*This function is used for capturing which page is opened (google analytics).
*It also calculates the height of scorebar.
*/
var tabButton = function (e) {
    $('.data-display').removeClass('shrink');
    if (e[0].id === 'btnCalRiskNav') {
        $('.data-display').removeClass('therapyreview');
    }
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
};
/*This function is used to calculate viewport height in all browsers
*/
function viewHeight() {
    var viewportheight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerHeight !== 'undefined') {
        viewportheight = window.innerHeight;
    }
    //	 IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientHeight !== 'undefined' && document.documentElement.clientHeight !== 0) {
        viewportheight = document.documentElement.clientHeight;
    }
    //	 older versions of IE
    else {
        viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewportheight;
}
/*This function is used to clear the whitespace in lesser content pages
*/
function resizeView() {
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
    setTimeout(function() {
        var view = viewHeight();
        var mh;
        mh = (view - ($('header').outerHeight() + $('.sticky-wrapper').outerHeight()) + 35);
        $(".fullscreen-spacer").css("min-height", mh);
    }, 100);
}
/*This function is used for creating sticky wrapper on Score bar UI
*/
function createSticky() {
    var sticky = new Waypoint.Sticky({
        element: $('.data-display')[0]
    });

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-1-shrink'),
        handler: function (direction) {
            if (direction === 'down') {
                $('.data-display').addClass('shrink');
            } else {
                $('.data-display').removeClass('shrink');
            }
        }
    });
    var waypoint2 = new Waypoint({
        element: document.getElementById('waypoint-2-shrink'),
        handler: function (direction) {
            if (direction === 'down') {
                $('.data-display').addClass('shrink');
            } else {
                $('.data-display').removeClass('shrink');
            }
        }
    });
}
/*This function is used for declaring the platform based functionality. I.e For Web and Mobile.
 *It initializes the google analytics code snippet depending upon platform.
*/
function loadCommonCode() {
    if (!isNativeApplication) {
	/*This code is for opening the resource tab's outbound link in different tab.
	*/
        $('a.link').on('click', function (e) {
            /*if ($(this)[0].id !== 'crclPopup' && $(this)[0].id !== 'resMailto' && $(this)[0].hasClass('viewless') === false && $(this)[0].hasClass('viewopen') === false) {
                e.preventDefault();
                window.open($(this)[0].href, '_blank');
            }*/
        });
    }
    else {
        if (!isCommonCode) {
            $('head').append('<script type=\'text/javascript\' src=\'cordova.js\'></script>');
            document.addEventListener('deviceready', function () {
                
                $('#spinnerAge').blur();
		setTimeout(function() {
                navigator.splashscreen.hide();
		}, 2000);
            }, false);
	    /*This code is for handling behaviour of the resource tab's outbound link on Mobile device.
	    */
            $('a.link').on('click', function (e) {
                if ($(this)[0].id !== 'crclPopup' && $(this)[0].id !== 'resMailto') {
                    e.preventDefault();
                    var ref = window.open($(this)[0].href, '_system', 'location=yes');
                    ref.addEventListener('loadstart', function (event) {
				//console.log('start: ' + event.url);
			});
                    ref.addEventListener('loadstop', function (event) {
				//console.log('stop: ' + event.url);
			});
                    ref.addEventListener('loaderror', function (event) {
				//console.log('error: ' + event.message);
			});
                    ref.addEventListener('exit', function (event) {
				//console.log(event.type);
			});
                }
                if ($(this)[0].id === 'resMailto') {
                    cordova.plugins.email.open({
                        to: $(this)[0].href.split('mailto:')[1],
                        cc: [],
                        bcc: [],
                        subject: '',
                        body: ''
                    });
                }
            });
	    /*This code is for handling behaviour of the score bar on Mobile device.
	    */
            $('input[type=\'text\']').focus(function () {
                if (!isCommonCode) {
                    focusMode = true;
                    $('#scorebar').removeClass('stuck');
                } else { return; }
            });

            $('input[type=\'text\']').blur(function () {
                if (!isCommonCode) {
                    focusMode = false;
		    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
                    $('#scorebar').addClass('stuck');
                } else { return; }
            });
	    /*This code is for handling behaviour of keyboard on Mobile device.
	    */
            $('input[type=\'text\']').keypress(function (e) {
                if (!isCommonCode) {
                    var code;
		    if (e.keyCode) {
			code = e.keyCode;
		    }
		    else{
			code = e.which;
		    }
                    if ((code === 13) || (code === 10)) {
                        $(this).blur();
                        return false;
                    }
                    return true;
                } else { return true; }
            });
        }
    }
}

/*This function is used to load common functions, to initialize/declare events on certain UI elements.
*/
$(function () {
    loadCommonCode();
    createSticky();
    appmodel.Reset();
    /*This code is for handling behaviour of tooltip on Mobile device.
    */
    $('.tip-top').on('touchend', function (event) {
	event.preventDefault();
        var dataAttr = $(this).attr('data-selector');
        if (dataAttr === undefined) {
            dataAttr = $(this).attr('id');
        }
        if ($(this).hasClass('open') && dataAttr !== undefined) {
            $('.tip-top').removeClass('open');
            $('span.tip-top').css('display', 'none');
            $(this).addClass('open');
            $('span[data-selector=' + dataAttr + ']').css('display', 'block');
            if ($('span[data-selector=' + dataAttr + ']').find('span.tap-to-close').length === 0) {
                var ele = $('span[data-selector=' + dataAttr + ']').find('span.nub');
                if (ele.length === 1) {
                    ele.after('<span class=\'tap-to-close\'>Tap To Close</span>');
                }
            }
        }
    });
    /*This code is for handling application notification on close behaviour on Mobile device.
    */
    $('#appNotificationClose').on('touchend', function () {
		$('.tip-top').removeClass('open');
		$('span.tip-top').css('display', 'none');
	});
    $('.data-display').removeClass('shrink');
    $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
    /*This function is for handling score bar UI on window resize.
    */
    $(window).resize(function () {
        $('.sticky-wrapper').css('height', $('.data-display')[0].clientHeight);
        resetTooltip();
        resizeView();
    });
    /*This function is for hiding the dropdowns of select menus when orientation changes
    */
    window.addEventListener('orientationchange', function() {
        $('select').blur();
    })
    /*This function is used to hide score bar on scrolling
    */
    $(window).scroll(function() {
        resetTooltip();
    })
    /*This function is to open default email client along with prepopulated email content.
    */
    $('#Email, #Email1').click(function () {
        var e = '';
        if (!isNativeApplication) {
            e = '%0A';
        } else {
            e = '<br>';
        }
        var currentdate = new Date();
        var listItems = '';
        var renalDose = '';
        var datetime = (currentdate.getMonth() + 1) + '/' + currentdate.getDate() + '/' + currentdate.getFullYear() + ' ' + currentdate.getHours() + ':' + currentdate.getMinutes();
        var subjectLine = appmodel.FormData.emailTemplate.subjectLine.replace('#genratedon#', datetime);
        var bodyArr = [];
        var a = 'mailto:?subject=' + appmodel.FormData.emailTemplate.subjectLine.replace('#genratedon#', datetime) + '&body=';
        listItems = appmodel.FormData.emailTemplate.patientInfo;
        if (appmodel.Form().Age() !== '' && appmodel.Form().Age() !== undefined) {
            if (parseFloat(appmodel.Form().Age()) >= 89) {
                listItems = listItems.replace('#age#', 'Age: ≥ 89y');
            }
            else {
                listItems = listItems.replace('#age#', 'Age: ' + appmodel.Form().Age() + 'y');
            }
        }
        if (appmodel.Form().Gender() !== undefined) {
            listItems = listItems.replace('#gender#', 'Sex: ' + appmodel.Form().Gender().text);
        }
        if ((appmodel.Form().Age() === '' || appmodel.Form().Age() === undefined) && appmodel.Form().Gender() === undefined) {
            listItems = '';
        }
        a = a + listItems.replace('#gender#', '').replace('#age#', '') + e;
        if (appmodel.Form().Cha2ds2_selected().length > 0) {
            listItems = '';
            ko.utils.arrayForEach(appmodel.Form().Cha2ds2_selected(), function (item) {
                listItems += item.emailText + e;
            });
            a = a + appmodel.FormData.emailTemplate.cha2ds2.replace('#cha2ds2score#', appmodel.Form().Cha2ds2_Score()).replace('#riskstatus#', appmodel.Form().Cha2ds2_ScoreMessage()).replace('#cha2ds2selected#', listItems) + e;
        }
        listItems = appmodel.FormData.emailTemplate.renalFunction;
        if (appmodel.Form().CrCL() !== '' && appmodel.Form().CrCL() !== undefined) {
            listItems = listItems.replace('#crclscore#', 'CrCl: ' + appmodel.Form().CrCL() + ' mL/min');
        }
        if (appmodel.Form().SerumCreatinine() !== '' && appmodel.Form().SerumCreatinine() !== undefined) {
            listItems = listItems.replace('#serum#', 'SCr: ' + parseFloat(appmodel.Form().SerumCreatinine()) + ' ' + appmodel.Form().SrCrUnit());
        }
        if ((appmodel.Form().SerumCreatinine() === '' || appmodel.Form().SerumCreatinine() === undefined) && (appmodel.Form().CrCL() === '' || appmodel.Form().CrCL() === undefined)) {
            listItems = '';
        }
        a = a + listItems.replace('#crclscore#', '').replace('#serum#', '') + e;
        a = a + 'BLEED RISK' + e;
        if (appmodel.Form().Hasbled_selected().length > 0) {
            listItems = '';
            ko.utils.arrayForEach(appmodel.Form().Hasbled_selected(), function (item) {
                listItems += item.emailText + e;
            });
            a = a + appmodel.FormData.emailTemplate.hasbled.replace('#hasbledscore#', appmodel.Form().Hasbled_Score()).replace('#hasbledselected#', listItems) + e;
        }
        if (appmodel.Form().OtherFactors().length > 0) {
            listItems = '';
            ko.utils.arrayForEach(appmodel.Form().OtherFactors(), function (item) {
                listItems += item.displayText + e;
            });
            a = a + appmodel.FormData.emailTemplate.concomitant.replace('#concomitantselected#', listItems) + e;
        }
        listItems = appmodel.FormData.emailTemplate.therapyGuidance;
        if (appmodel.Form().Cha2ds2_Score() !== undefined) {
            listItems = listItems.replace('#riskinfo#', appmodel.Form().TherapyGuidanceAdvice().emailText);
            /*if (appmodel.Form().Cha2ds2_Score() === 0) {
                listItems = listItems.replace('#riskinfo#', 'Oral anticoagulation may be omitted due to low stroke risk');
            }
            if (appmodel.Form().Cha2ds2_Score() === 1) {
                listItems = listItems.replace('#riskinfo#', 'Due to intermediate risk, consider no antithrombotic therapy or aspirin or oral anticoagulant');
            }
            if (appmodel.Form().Cha2ds2_Score() >= 2) {
                listItems = listItems.replace('#riskinfo#', 'Oral anticoagulation therapy recommended due to high stroke risk');
            }*/
        }
        a = a + listItems.replace('#riskinfo#', '') + e;
        listItems = 'THERAPY DOSING';
        ko.utils.arrayForEach(appmodel.FormData.allTherapyOptions, function (item) {
            if (item.text === appmodel.FormData.therapyOptions.NoTherapy) {
                return;
            }
            listItems += e;
            renalDose = '';
            if (item.text === appmodel.FormData.therapyOptions.Aspirin || item.text === appmodel.FormData.therapyOptions.AspirinClopidogrel) {
                listItems += '-' + item.text + e;
                listItems += 'StdDose:' + item.emailTemplate + e;
            }
            else if (item.text === appmodel.FormData.therapyOptions.Apixaban) {
                listItems += '-' + item.text + e;

                if (appmodel.Form().IsRenalCharacteristics()) {
                    renalDose = '2.5 mg BID';
                }
                else {
                    if (appmodel.Form().CrCL() !== undefined && appmodel.Form().CrCL() !== '') {
                        if (parseFloat(appmodel.Form().CrCL()) < 15) {
                            renalDose = 'Contraindicated';
                        }
                        else {
                            renalDose = '5 mg BID';
                        }
                    }
                }
                if ((renalDose !== item.emailTemplate) && renalDose !== '') {
                    listItems += 'Renal/Adj Dose (may also be based on age+weight only):' + renalDose + e;
                }
                listItems += 'StdDose:' + item.emailTemplate + e;
                listItems += 'Full Prescribing Info ' + item.drugInfoLink + e;
            }
            else if (item.text === appmodel.FormData.therapyOptions.Dabigatran) {
                listItems += '-' + item.text + e;
                if (appmodel.Form().CrCL() !== undefined && appmodel.Form().CrCL() !== '') {
                    if (parseFloat(appmodel.Form().CrCL()) >= 15 && parseFloat(appmodel.Form().CrCL()) <= 30) {
                        renalDose = '75 mg BID';
                    }
                    else if (parseFloat(appmodel.Form().CrCL()) < 15) {
                        renalDose = 'Contraindicated';
                    }
                    else {
                        renalDose = '150 mg BID';
                    }
                }
                if ((renalDose !== item.emailTemplate) && renalDose !== '') {
                    listItems += 'Renal/Adj Dose:' + renalDose + e;
                }
                listItems += 'StdDose:' + item.emailTemplate + e;
                listItems += 'Full Prescribing Info ' + item.drugInfoLink + e;
            }
            else if (item.text === appmodel.FormData.therapyOptions.Edoxaban) {
                listItems += '-' + item.text + e;
                if (appmodel.Form().CrCL() !== undefined && appmodel.Form().CrCL() !== '') {
                    if (parseFloat(appmodel.Form().CrCL()) > 95) {
                        renalDose = 'Contraindicated';
                    }
                    else if (parseFloat(appmodel.Form().CrCL()) > 50 && parseFloat(appmodel.Form().CrCL()) <= 95) {
                        item.emailTemplate = '60 mg QD';
                        renalDose = '60 mg QD';
                    }
                    else if (parseFloat(appmodel.Form().CrCL()) >= 15 && parseFloat(appmodel.Form().CrCL()) <= 50) {
                        renalDose = '30 mg QD';
                    }
                    else {
			if (parseFloat(appmodel.Form().CrCL()) < 15) {
				renalDose = 'Not recommended';
			}
                    }
                }
                if ((renalDose !== item.emailTemplate) && renalDose !== '') {
                    listItems += 'Renal/Adj Dose:' + renalDose + e;
                }
                listItems += 'StdDose:' + item.emailTemplate + e;
                listItems += 'Full Prescribing Info ' + item.drugInfoLink + e;
            }
            else if (item.text === appmodel.FormData.therapyOptions.Rivaroxaban) {
                listItems += '-' + item.text + e;
                if (appmodel.Form().CrCL() !== undefined && appmodel.Form().CrCL() !== '') {
                    if (parseFloat(appmodel.Form().CrCL()) > 50) {
                        item.emailTemplate = '20 mg QD w/evening meal';
                        renalDose = '20 mg QD w/evening meal';
                    }
                    else if (parseFloat(appmodel.Form().CrCL()) >= 15 && parseFloat(appmodel.Form().CrCL()) <= 50) {
                        renalDose = '15 mg QD w/evening meal';
                    }
                    else {
			if (parseFloat(appmodel.Form().CrCL()) < 15) {
				renalDose = 'Contraindicated';
			}
                    }
                }
                if ((renalDose !== item.emailTemplate) && renalDose !== '') {
                    listItems += 'Renal/Adj Dose:' + renalDose + e;
                }
                listItems += 'StdDose:' + item.emailTemplate + e;
                listItems += 'Full Prescribing Info ' + item.drugInfoLink + e;
            }
            else {
		if (item.text === appmodel.FormData.therapyOptions.Warfarin) {
			listItems += '-' + item.text + e;
			listItems += item.emailTemplate + e;
			listItems += 'Full Prescribing Info ' + item.drugInfoLink + e;
		}
            }
        });
        a = a + listItems + e;
        a = a + 'Therapy risk/benefit data: http://www.sparctool.com';
        if (!isNativeApplication) {
            this.href = a;
        } else {
            bodyArr = a.split('&body=');
            cordova.plugins.email.open({
                to: [],
                cc: [],
                bcc: [],
                subject: subjectLine,
                body: decodeURI(bodyArr[1].replace(new RegExp('%0A', 'g'), '<br>')),
                isHtml: true
            });
        }
	//This code is for google analytics to capture that Email button on Review Therapy page is clicked
    });
});
/**document.ready ends here */

function getCookieBanner() {
    var cookieValue = getCookie("anticoag-eval-cookie");
    if (cookieValue) {
      $.ajax({
        method: "GET",
        url: arguments[0] + "/wapi/CookieBannerHelper/GetGDPRPolicyUpdatedDate",
      }).done(function (data) {
        var publishDate = data ? new Date(data) : "";
        if (publishDate && new Date(cookieValue) > publishDate) removeBanner();
        else loadBanner(arguments[0]);
      });
    } else {
      loadBanner(arguments[0]);
    }
}
  
function makeAck() {
    //set cookie
    var cname = "anticoag-eval-cookie";
    var cvalue = new Date();
    var d = new Date();
    //expires in 10 days
    d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    let CookieString = cname + "=" + cvalue.toUTCString() + ";" + expires + "; path=/" + "; secure";
    document.cookie = CookieString;
    //remove banner
    removeBanner();
}
  
function removeBanner() {
    var elem = document.getElementById("cookie-banner");
    if (elem) elem.parentNode.removeChild(elem);
}
  
function loadBanner() {
    var template = document.createElement("div");
    template.id = "cookie-banner";
    $.ajax({
      method: "GET",
      url: arguments[0] + "/external/vexternalcookiebanner",
    }).done(function (data) {
      template.innerHTML = data;
      document.body.appendChild(template);
    });
}
  
//name of the cookie (cname)
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
