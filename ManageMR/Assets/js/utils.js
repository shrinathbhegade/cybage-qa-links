/*Add all required functions in this file*/
var _utils = function () {
    var self = this;
    self.loadedOldSession = false;
    self.appendRecommendationCard = function (cardID) {
        self.clearAllRecommendationCard(cardID);
        //$('.group-section').addClass('no-box-shadow');
        $("#template #" + cardID).appendTo('#questionset');
    };
    /**
     * appendQuestionCard function used for append/add question card.
     *
     * @param {asset/question guid} cardID
     */
    self.appendQuestionCard = function (cardID) {
        self.clearAllQuestion(cardID);
        $('.group-section').addClass('no-box-shadow');
        $("#template #" + cardID).appendTo('#questionset');
        $('#questionset .question').removeClass('warning');
        $("#" + cardID + ' .group-section').removeClass('no-box-shadow');
        var questionCard = getCardByQuestionOrder(userActivity);
        //Commented by RAHUL RANJAN
        //if (userActivity.length > formQuestionCount) {
        //    $("#" + cardID + ' .order-marker').html('');
        //    //substracted 3(formQuestionCount) because form element contains 3 default questions.
        //    $("#" + cardID + ' .order-marker').html(questionCard.length - formQuestionCount);
        //    $("#" + cardID + ' .order-marker').removeClass('hide');
        //}
        //End of Comment by RAHUL RANJAN
        $('#' + cardID + ' .next-btn a').addClass('disabled');
        $('#' + cardID + ' .question').css('height', '');
        //self.equalizer(cardID);
        if (!isQueryStringOn) {
            if (($("#" + cardID).hasClass('page-wrapper')) && self.loadedOldSession == false) {
                //$(window).animate(scrollTop:$("#" + cardID + ' .group-section').offset().top);
                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            }
            else if (($("#" + cardID).hasClass('page-message')) && self.loadedOldSession == false) {
                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            }
        }
    };
    /**
     * appendFormCard function used for append/add Form card.
     *
     * @param {asset/form guid} cardID
     */
    self.appendFormCard = function (cardID) {
        $('.group-section').addClass('no-box-shadow');
        $("#" + cardID + ' .group-section').removeClass('no-box-shadow');
        $("#template #" + cardID).appendTo('#questionset');
        $("[data-continue-id='" + cardID + "']").css("display", "block");
        $("[data-continue-id='" + cardID + "']").addClass("disabled");

        if (!isQueryStringOn) {
            if (($("#" + cardID).hasClass('page-wrapper')) && self.loadedOldSession == false) {
                //$(window).animate(scrollTop:$("#" + cardID + ' .group-section').offset().top);
                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            }
            else if (($("#" + cardID).hasClass('page-message')) && self.loadedOldSession == false) {
                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            }
        }
    }
    /**
     * removeQuestionCard function used for removed question card
     *
     * @param {asset/question guid} cardID
     */
    self.removeQuestionCard = function (cardID) {
        $("#questionset #" + cardID + " input").prop('checked', false);
        $("#questionset #" + cardID).appendTo('#template');
        $('#template .next-btn').css('display', '');
        $('#template .question').removeClass('warning');
        resetTooltip();
    };
    /**
     * isPathChange function used for removed question card
     * whenever any previous/parent question answer changed.
     *
     * @param {asset/question guid} cardID
     * @param {current question index/position in userActivity array} index
     */
    self.clearAllQuestion = function (cardID, index) {
        var length = userActivity.length - 1;
        for (var i = length; i > index; i--) {
            self.removeQuestionCard(userActivity[i].questionguId);
            self.removeQuestionCard(userActivity[i].RecommendationCardID);
            userActivity.pop();
        }
        $("#" + cardID + ' .group-section').removeClass('no-box-shadow');
        resetTooltip();
        return true;
    }
    self.clearAllRecommendationCard = function (cardID, index) {
        var length = userActivity.length - 1;
        for (var i = length; i > index; i--) {
            self.removeQuestionCard(userActivity[i].RecommendationCardID);
            userActivity[i].RecommendationCardID = '';
        }
        return true;
    }
    /**
     * handleNextButton function used for removed question card
     *
     * @param {asset/question guid} cardID
     */
    self.handleNextButton = function (cardID) {
        $("div[data-next-btn='" + cardID + "']").hide();
    };
    /**
     * handleContinueButton function used for enable/disable continue button
     *
     */
    self.handleContinueButton = function () {
        if (userActivity.length < formQuestionCount) {
            userActivity.length = 0;
            $('#continue_btn').removeClass('disabled');
            return;
        }
        else {
            $('#continue_btn').addClass('disabled');
        }
    };
    self.handleFormElementClickEvent = function (element) {
        var disclaimer;
        var formQuestionCount = parseInt($('#' + element.data("form-parent")).data('form-children'));
        var id = element.data('form-parent');
        var formQuestionContinue = $("[data-continue-id='" + id + "'] a");
        $('#' + id + '.form-container input').parents('div.question').removeClass('active');
        $('#' + id + '.form-container input:checked').parents('div.question').addClass('active');
        $('#' + id + '.form-container .group-section').removeClass('no-box-shadow');
        $('#' + id + '.form-container div.question').removeClass('warning');


        //BELOW LINES COMMENTED BY RAHUL RANJAN
        //if (userActivity.length > formQuestionCount) {
        //    var questionGuid = element.attr("data-questionguid");
        //    self.clearAllQuestion(questionGuid, formQuestionCount - 1);
        //    appmodel.Form().hasContinue(false);
        //    appmodel.Form().hasAdvice(true);
        //}
        if ($('#' + id + '.form-container input:checked').length === formQuestionCount) {
            var foundIndex = -1;
            userActivity.forEach(function (activity, index) {
                foundIndex = (activity.questionguId == id) ? index : foundIndex;
            });
            if (foundIndex + formQuestionCount < userActivity.length - 1) {
                for (var i = userActivity.length - 1; i > foundIndex + formQuestionCount; i--) {
                    self.removeQuestionCard(userActivity[i].questionguId);
                    self.removeQuestionCard(userActivity[i].RecommendationCardID);
                    userActivity.pop();
                }
                $("#" + id + ' .group-section').removeClass('no-box-shadow');
            }
        }

        if ($('#' + id + '.form-container input:checked').length === formQuestionCount) {
            appmodel.Form().hasAdvice(true);
            appmodel.Form().hasContinue(false);
            //$('#continue_btn a').removeClass('disabled');
            formQuestionContinue.removeClass('disabled');
        }
        $.map($(".form-container input:checked"), function (elem) {
            disclaimer = $(elem).attr("data-disclaimer");
        });
        // Show/Hide Unknown
        showHideDisclaimer(disclaimer);
    }
    /**
     * callWebApi function send user activity details to web api
     *
     * @param {web api url} url
     * @param {type} type
     * @param {user activity details} data
     * @param {callback function} successFunction
     * @param {button to be disabled until web api call} button
     */
    self.callWebApi = function (url, type, data, successFunction, parameter) {
        try {
            $.ajax({
                cache: false
                , url: webApiUrl + url
                , type: type
                , contentType: "application/json; charset=utf-8"
                , data: data
                , success: function (data) {
                    debugLog(data);
                    if (parameter === undefined) successFunction(data);
                    else successFunction(data, parameter);
                }
                , error: function (type) {
                    isProcessOn = false;
                    debugLog("ERROR!!" + type.responseText)
                }
            });
        }
        catch (e) {
            isProcessOn = false;
            debugLog("ERROR!!" + e)
        }
    };
    /**
     * equalizer function used to set height of answer block
     *
     * @param {question/card guid} id
     */
    self.equalizer = function (id) {
        var currentTallest = 0
            , currentRowStart = 0
            , rowDivs = [];
        var setConformingHeight = function (el, newHeight) {
            // set the height to something new, but remember the original height in case things change
            if ($(window).width() < 731) {
                el.height('');
            }
            else if (newHeight !== 0) {
                el.data("originalHeight", (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight")));
                el.height(newHeight);
            }
        }
        var getOriginalHeight = function (el) {
            // if the height has changed, send the originalHeight
            return (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight"));
        }
        var columnConform = function (id) {
            var columnID;
            if (id !== undefined) {
                columnID = '#' + id;
            }
            else {
                columnID = '#' + firstAsset;
            }
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('#questionset ' + columnID + ' div.question').each(function () {
                // "caching"
                var $el = $(this);
                var topPosition = $el.position().top;
                $el.css('height', '');
                if (currentRowStart !== topPosition) {
                    // we just came to a new row.  Set all the heights on the completed row
                    for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        setConformingHeight(rowDivs[currentDiv], currentTallest);
                    }
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
                }
                else {
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);
                }
            });
            // do the last row
            for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                setConformingHeight(rowDivs[currentDiv], currentTallest);
            }
        }
        var windowResize = function () {
            if (userActivity !== undefined) {
                var length = userActivity.length;
                if (length > 0) {
                    for (var i = 0; i < length; i++) {
                        columnConform(userActivity[i].questionguId);
                    }
                }
                else {
                    columnConform(firstAsset);
                }
            }
        }
        $(window).on("resize",function () {
            resetTooltip();
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                windowResize();
            }, 2000);
        });
        // DOM Ready
        // You might also want to wait until window.onload if images are the things that are unequalized the blocks
        $(function () {
            columnConform(id);
        });
    }
    self.getCurrentDateTime = function () {
        var currentdate = new Date();
        var date = (currentdate.getMonth() + 1) + '/' + currentdate.getDate() + '/' + currentdate.getFullYear();
        var time = self.dateFormatter(currentdate.getHours()) + ':' + self.dateFormatter(currentdate.getMinutes()) + ":" + self.dateFormatter(currentdate.getSeconds());
        return date + ' ' + time;
    };
    self.getUserUniqueIdentifier = function () {
        //Implement condition for Mobile and Web
        if (isNativeApplication) //MObile UUID
            return UUID;
        else //Web cookie
            return self.getCookie("mmr-cookie");
    };
    self.getDeviceType = function () {
        //Implement condition for Mobile and Web
        if (isNativeApplication) return deviceTypes.Mobile;
        else return deviceTypes.Web;
    };
    self.dateFormatter = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
}
var utils = new _utils;
/* ------------------------------------- Email Functionality ------------------------------------- */

function getEmailSubject() {
    return appmodel.FormData.emailTemplate.subjectContent.replace('#ICD_DEVICE#', appmodel.Form().intendedUse())
        .replace('#TIME_STAMP#', utils.getCurrentDateTime());
}

function getEmailBody(id) {
    var body = appmodel.FormData.emailTemplate.mailBody.replace('#ICD_DEVICE#', appmodel.Form().intendedUse()).replace('#TIME_STAMP#', utils.getCurrentDateTime());
    var newline = "%0D%0A";
    body = body + newline + newline;

    //Link - Getting from Web API
    //body = body + appUrl + "emailresult.html?id=" + id;
    body = body + id;
    body = body + newline + newline;
    //Footer
    body = body + appmodel.FormData.emailTemplate.footerNode;

    return body;
}

function postEmailResult() {
    return;
    if (isProcessOn) {
        debugLog('Process on..');
        return;
    } else
        isProcessOn = true;
    var advice = {};
    var adviceTooltipID = $('#scoreTooltip i').attr('data-yeti-box');
    $("#divAdvice").append($('#' + adviceTooltipID));
    advice.EmailResultContent = $("#divAdvice").html();
    advice = JSON.stringify(advice);
    utils.callWebApi('EmailResult', ajaxTypes.Post, advice, postEmailResultCompleted);
}

function postEmailResultCompleted(id) {
    if (isNativeApplication) {
        debugLog("email mobile function is called");
        mobileApp.postEmailResultCompletedForMobile(getEmailSubject(), getEmailBody(id));

    } else {
        debugLog("email mailto is called");
        window.location.href = "mailto:?subject=" + getEmailSubject() + "&body=" + getEmailBody(id);

    }
    isProcessOn = false;

}
/* ------------------------------------- Email Functionality ------------------------------------- */

/* ------------------------------------- User Activity Post Functionality ------------------------------------- */
function getJsonforUserActiviy() {
    //Path activity
    var pathActivities = [];
    //push question and answer
    var pathActivity = {};
    pathActivity.IndicationGuId = appmodel.Form().aucIndicationId();
    pathActivity.CMSAdviceGuId = appmodel.Form().cmsIndicationId();
    pathActivity.Score = appmodel.Form().scoreIndicator();
    pathActivity.ActivityDate = Date.toString();
    pathActivity.Questions = [];
    $.each(userActivity, function (index, questionItem) {
        var question = {};
        question.QuestionGuId = questionItem.questionguId;
        question.QuestionOrder = questionItem.questionOrder;
        question.AnswerGuIdList = [];
        $.each(questionItem.answer, function (index, answerItem) {
            question.AnswerGuIdList.push(answerItem.answerGuid);
        });
        pathActivity.Questions.push(question);
    });
    pathActivities.push(pathActivity);
    return pathActivities;
}

function postUserActivity(pathActivities, isSyncActivity) {
    //if mobile and off-line then store to local database
    if (isNativeApplication && !isDeviceOnline) {
        if (isSyncActivity) return;
        else mobileApp.saveToLocalDatabase(JSON.stringify(pathActivities[0]));
    }
    else {
        //User detail new Object()
        var userDetail = {};
        userDetail.UserUniqueIdentifier = utils.getUserUniqueIdentifier();
        userDetail.DeviceType = utils.getDeviceType();
        //User activities with user details new Object()
        var userPathActivity = {};
        userPathActivity.UserDetail = userDetail;
        userPathActivity.Activities = pathActivities;
        userPathActivity = JSON.stringify(userPathActivity);
        debugLog(userPathActivity)
        //Call api
        utils.callWebApi('UserActivity', ajaxTypes.Post, userPathActivity, postUserActivityCompleted, isSyncActivity);
    }
}

function postUserActivityCompleted(data, isSyncActivity) {
    debugLog(data)
    //delete data from local database after successful sync
    if (isSyncActivity) {
        mobileApp.deleteFromLocalDatabase();
    }
}
/* ------------------------------------- User Activity Post Functionality ------------------------------------- */
function debugLog(data) {
    if (flag === true) {
        console.log(data);
    }
}

function openModal(title, imgSrc, gaKeyword) {
    if (gaKeyword && gaKeyword.indexOf('gaWrapper') > -1) {
        var evaluateGa = new Function('return ' + gaKeyword.trim());
        evaluateGa();
    }
    var $modal = $('#appModalWindow');
    $modal.find('h4').html(title);
    $modal.find('img').attr('src', imgSrc);
    $modal.foundation('open');
    var top = $(window).height() - $('#appModalWindow').height();
    top = top / 2;
    $modal.css('top', top);
}

function buildURL() {
    var path = ""
        , url;
    for (index in userActivity) {
        var answerOption = [];
        for (i in userActivity[index]["answer"]) {
            answerOption.push($("input[data-guid='" + userActivity[index]["answer"][i]['answerGuid'] + "']").attr('id'));
        }
        if (answerOption.length > 0) {
            if (path == "") path = answerOption.join(",");
            else path = path + "|" + answerOption.join(",");
        }
    }
    var encryp = window.btoa(path);
    url = baseUrl + '?path=' + encryp;
    return url;
}
function createShortURL() {
    var longUrl = buildURL();
    $.ajax({
        url: firebaseDynamicLinkConfig.url + firebaseDynamicLinkConfig.shortenKey,
        type: 'post',
        data: JSON.stringify({
            "dynamicLinkInfo": {
                "domainUriPrefix": firebaseDynamicLinkConfig.uriPrefix,
                "link": longUrl
            }
        }),
        headers: {
            "Content-Type": "application/json"
        },
        dataType: 'json',
        success: function(data) {
            var shortUrl = data.shortLink;
            draftEmail(shortUrl);
        },
        error: function(data) {
            draftEmail(longUrl);
        }
    });
}

var panzoom = function (currentPanzoomClass) {
    var $windowheight = $(window).height() - 50;
    var $scaleZoom = $('.parent.panzoom').width() / $('.panzoom-element img').width();
    var resultZoom = "'scale(" + $scaleZoom + ")'";
    var $panHolder = $(currentPanzoomClass + " .panzoom-element");
    var $panButtons = $(currentPanzoomClass + " .panzoom-buttons");
    $(currentPanzoomClass + ".parent.panzoom").height($windowheight);
    Panzoom($panHolder,{
        zoomIn: $panButtons.find(".zoom-in")
        , zoomOut: $panButtons.find(".zoom-out")
        , reset: $panButtons.find(".reset")
        , contain: 'invert'
    , });
};

function appLoad() {
    if (!isQueryStringOn) {
        $('.page-wrapper').removeClass('invisible');
        setHeight();
    }
    //Add all panzooms
    panzoom('.decision-tree-assessing-severity-panzoom');
    panzoom('.eligibility-transcatheter-panzoom');
}

function getQueryString(field, url) {
    var field = "path";
    var href = url ? url : window.location.href;
    var reg = new RegExp("[?]" + field + "=([^?&#]*)", "i");
    var string = reg.exec(href);
    string = string ? string[1] : null;
    if (string !== null) {
        string = window.atob(string);
    }
    return string;
};
function queryStringParser() {
    var query = getQueryString();
    var queryArray = query ? query.split('|') : 'No Query String Data Found';
    if (query !== null) {
        isQueryStringOn = true;
        $('.tabs-primary').remove();
        $('.page-wrapper').addClass('invisible');
        $('.tabs-primary').removeClass('selected');
        $('.tabs li').removeClass('selected');
        $('.tabs li').removeClass('selected');
        for (var prop in queryArray) {
            var multiSelectArray = queryArray[prop].split(',');
            for (var index in multiSelectArray) {
                document.getElementById(multiSelectArray[index]).click();
            }
            var parentID = $('#' + multiSelectArray[index]).attr('data-questionguid');
            if ($('#' + parentID).find('#next_btn').length > 0) {
                $('#' + parentID + ' #next_btn').click();
                //document.getElementById('next_btn').click();
                //console.log(multiSelectArray[index]);
            }
            //console.log(multiSelectArray[index]);
        }
        if (!appmodel.Form().hasAdvice()) {
            setTimeout(function () {
                triggerAdvice();
                $('.page-wrapper').removeClass('invisible');
            }, 800);

        }
    } else {
        $('.tabs-primary, .advice-action').removeClass('invisible');
    }
}

function triggerAdvice() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    isQueryStringOn = false;
    $('.tabs-primary').remove();
    $('.advice-page').children().clone(true).appendTo('.emailresult-page');
}
window.onpopstate = function () {
    var hash = location.pathname;
    if (hash.indexOf('emailresult') !== -1) {
        window.history.pushState(null, "", window.location.href);
    }
};
dateFormatter = function (i) {
    if (i < 10) {
        i = '0' + i;
    }
    else {
        i = i;
    }
    return i;
}

function draftEmail(url) {
    var appURL = url;
    var breakline = '%0D%0A';
    var linebreak = "%0D%0A";
    var doublelinebreak = linebreak + linebreak;
    var emailText, subject, message;
    var severity = '';
    var etiology = '';
    var referral = '';
    var repairFeasibility = '';
    var datetime = new Date();
    var timestamp = (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes()) + ':' + dateFormatter(datetime.getSeconds());
    emailText = appmodel.FormData.mr_emailTemplate;
    subject = emailText.subjectContent;
    subject = subject.replace('#TIME_STAMP#', timestamp);
    message = emailText.mailBody;
    message = message.replace('#TIME_STAMP#', timestamp);
    if (recommendationMessages['Severity'] != undefined) severity = 'MR SEVERITY: ' + recommendationMessages['Severity']['lowLiteracyRecommendation'] + doublelinebreak;
    if (recommendationMessages['Etiology'] != undefined) etiology = 'MR ETIOLOGY: ' + recommendationMessages['Etiology']['lowLiteracyRecommendation'] + doublelinebreak;
    if (recommendationMessages['Referral'] != undefined) referral = 'REFERRAL ADVICE: ' + recommendationMessages['Referral']['lowLiteracyRecommendation'] + doublelinebreak;
    if (recommendationMessages['Intervention Advice'] != undefined) repairFeasibility = 'INTERVENTION ADVICE: ' + recommendationMessages['Intervention Advice']['lowLiteracyRecommendation'] + doublelinebreak;
    message = message.replace('#severity#', severity);
    message = message.replace('#etiology#', etiology);
    message = message.replace('#referral#', referral);
    message = message.replace('#repairFeasibility#', repairFeasibility);
    message = message.replace('#link#', appURL);
    message = message + doublelinebreak + emailText.footerNode;
    if (isNativeApplication) {
        cordova.plugins.email.open({
            to: ''
            , cc: ''
            , bcc: ''
            , subject: subject
            , body: decodeURI(message.replace(new RegExp('%0D%0A', 'g'), '<br>'))
            , isHtml: true
        });
    }
    else {
        mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
        window.location.href = mymail;
    }
}
/*
 sendEmail function is used to draft email.
*/
function sendEmail() {
    createShortURL();
}