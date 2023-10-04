/*Add all required functions in this file*/
var _utils = function () {
    var self = this;
    self.loadedOldSession = false;
    self.appendRecommendationCard = function (cardID) {
        self.clearAllRecommendationCard(cardID);

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

        $('#' + cardID + ' .next-btn a').addClass('disabled');
        $('#' + cardID + ' .question').css('height', '');

        if (!isQueryStringOn) {
            if (($("#" + cardID).hasClass('page-wrapper')) && self.loadedOldSession == false) {

                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            } else if (($("#" + cardID).hasClass('page-message')) && self.loadedOldSession == false) {
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

                $('html, body').animate({
                    scrollTop: $("#" + cardID + ' .group-section').offset().top
                }, 2000);
            } else if (($("#" + cardID).hasClass('page-message')) && self.loadedOldSession == false) {
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
        } else {
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
                cache: false,
                url: webApiUrl + url,
                type: type,
                contentType: "application/json; charset=utf-8",
                data: data,
                success: function (data) {
                    debugLog(data);
                    if (parameter === undefined) successFunction(data);
                    else successFunction(data, parameter);
                },
                error: function (type) {
                    isProcessOn = false;
                    debugLog("ERROR!!" + type.responseText)
                }
            });
        } catch (e) {
            isProcessOn = false;
            debugLog("ERROR!!" + e)
        }
    };
    /**
     * createGuid function used for create unique guid which saved in cookie.
     *
     * @return unique id
     */
    self.createGuid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    /**
     * setCookie function used to save cookies on users machine
     *
     * @param {cookie name} cname
     * @param {cookie value} cvalue
     * @param {cookie expiry days} exdays
     */
    self.setCookie = function (cname, cvalue, exdays) {
        var cookiedate = new Date();
        cookiedate.setTime(cookiedate.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + cookiedate.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    /**
     * setCookie function used to get cookies detail from users machine
     *
     * @param {cookie name} cname
     * @return blank value if cookie is not exists
     */
    self.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    /**
     * set/get cookies details from users machine
     */
    self.createCookie = function () {
        var appCookieData = self.getCookie("icdSessionID");
        if (appCookieData !== "") {
            debugLog('Cookie already set');
        } else {
            appCookieData = self.createGuid();
            if (appCookieData !== "" && appCookieData !== null) {
                self.setCookie("icdSessionID", appCookieData, 365);
            }
        }
    }
    /**
     * equalizer function used to set height of answer block
     *
     * @param {question/card guid} id
     */
    self.equalizer = function (id) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = [];
        var setConformingHeight = function (el, newHeight) {
            // set the height to something new, but remember the original height in case things change
            if ($(window).width() < 731) {
                el.height('');
            } else if (newHeight !== 0) {
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
            } else {
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
                } else {
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
                } else {
                    columnConform(firstAsset);
                }
            }
        }
        $(window).resize(function () {
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
            return self.getCookie("icdSessionID");
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
utils.createCookie();
/* ------------------------------------- Email Functionality ------------------------------------- */
function getEmailSubject() {
    return appmodel.FormData.emailTemplate.subjectContent.replace('#ICD_DEVICE#', appmodel.Form().intendedUse()).replace('#TIME_STAMP#', utils.getCurrentDateTime());
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
    } else isProcessOn = true;
    
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
    } else {
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
    $("body").css("overflow", "");
    //$modal.find(".image-html").html(htmlTemplatesAP[imgSrc.split('\\')[imgSrc.split('\\').length - 1].split(".jpg")[0]]);
    $modal.find(".image-html").html(htmlTemplatesAP['30e058bd-6254-4785-ae05-efe717d53dff_1119547387_62642']);
    var top = 0;

    $modal.find('h4').html(title);
    setTimeout(function () {
        var viewportHeight = viewHeight();
        top = viewportHeight - $modal.height();
        top = top / 2;
        if (viewWidth() <= 480) {
            top = 0;
        }
        $modal.css('top', top);
    }, 100);

    $modal.foundation('open');
}

function buildURL() {
    var path = "",
        url;
    for (var index = 0; index < userActivity.length; index++) {
        var answerOption = [];
        for (var i = 0; i < userActivity[index]["answer"].length; i++) {
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

function googleLoad() {
    if (!isQueryStringOn) {
        $('.page-wrapper').removeClass('invisible');
        setHeight();
    }
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
        $('.page-wrapper').addClass('invisible');
        $('.tabs-primary').removeClass('selected');
        $('.tabs li').removeClass('selected');
        $('.tabs li').removeClass('selected');
        for (var prop = 0; prop < queryArray.length; prop++) {
            var multiSelectArray = queryArray[prop].split(',');
            for (var index = 0; index < multiSelectArray.length; index++) {
                document.getElementById(multiSelectArray[index]).click();
            }
            var parentID = $('#' + multiSelectArray[index]).attr('data-questionguid');
            var formParentId = $('#' + multiSelectArray[index]).attr('data-form-parent');
            if ($('#' + parentID).find('#next_btn').length > 0) {
                $('#' + parentID + ' #next_btn').click();
            }
            if (formParentId) {
                if ($('#' + formParentId + ' #continuebtn').not(".disabled").length > 0) {
                    $('#' + formParentId + ' #continuebtn').not(".disabled").click();
                }
            }
        }
        if (!appmodel.Form().hasAdvice()) {
            setHeight();
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
    //$('.tabs-primary').remove();
    $('.hamburger-opener').remove();
    $('.advice-page').children().clone(true).appendTo('.emailresult-page');

}
window.onpopstate = function () {
    var hash = location.pathname;
    if (hash.indexOf('emailResult') !== -1) {
        window.history.pushState(null, "", window.location.href);
    }
};
dateFormatter = function (i) {
    if (i < 10) {
        i = '0' + i;
    } else {
        i = i;
    }
    return i;
}

function getShortUrl(longUrl) {
    var shortUrl = undefined;
    var requestUrl = firebaseDynamicLinkConfig.url + firebaseDynamicLinkConfig.shortenKey;
    var data = {
        "dynamicLinkInfo": {
            "domainUriPrefix": firebaseDynamicLinkConfig.uriPrefix,
            "link": longUrl
        }
    };
    
    $.ajax({
        url: requestUrl,
        type: 'post',
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        dataType: 'json',
        success: function(data) {
            var shortUrl = data.shortLink;
            var email = draftEmail(shortUrl, longUrl);
            launchEmailApp(email);
        },
        error: function(data) {
            var email = draftEmail(undefined, longUrl);
            launchEmailApp(email);
        }
    });
}

/*
 sendEmail function is used to draft email.
*/
function sendEmail() {
    getShortUrl(buildURL());
}

/**
 * Divides a string in arrays of string of specified length
 * @param {number} position where to insert
 * @returns {array}
 */
String.prototype.splitByLength = function (length, keepword) {
    var arr = [];
    var str = this;
    var temp = "";
    var lastIndex;
    keepword = typeof keepword !== 'undefined' ? keepword : true;
    if (str.length < length) {
        arr.push(str.slice(0).trim());
    } else {
        while (str.length > length) {
            if (keepword) {
                if (str.charAt(length) != ' ') {
                    lastIndex = str.slice(length).indexOf(' ');
                    if (lastIndex < 0)
                        lastIndex = -length + str.length;
                    arr.push(str.slice(0, length + lastIndex).trim());
                    str = str.slice(length + lastIndex);
                } else {
                    arr.push(str.slice(0, length).trim());
                    str = str.slice(length);
                }
            } else {
                arr.push(str.slice(0, length).trim());
                str = str.slice(length);
            }
        }
        if (str != '')
            arr.push(str.slice(0).trim());
    }
    return arr;
}

function draftEmail(sUrl, lUrl) {
    var appURL = (sUrl != undefined) ? sUrl : lUrl;
    if (!isNativeApplication) {
        appURL = appURL.replace('#', '%23');
    }
    var linebreak = "%0D%0A";
    var doublelinebreak = linebreak + linebreak;
    var datetime = new Date();
    var timestamp = (dateFormatter(datetime.getMonth() + 1)) + '/' + dateFormatter(datetime.getDate()) + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes()); // + ':' + dateFormatter(datetime.getSeconds());
    var emailText = appmodel.FormData.addressAcuteBleed_emailTemplate;
    var subject = emailText.subjectContent.replace("#TIME_STAMP#", timestamp);
    var body = emailText.mailBody.replace("#TIME_STAMP#", timestamp).replace("#APPURL#", appURL);
    var questions = "";
    for (var i = 0; i < userActivity.length; i++) {
        if (userActivity[i].inputText != "" && userActivity[i].answer[0].expertAnswer.toLowerCase() != "no")
            questions += userActivity[i].inputText + " " + userActivity[i].answer[0].expertAnswer + linebreak;
    }

    body = body.replace('#QUESTIONS_ANSWERS#', questions);
    var advices = "",
        individualAdvice;
    for (var prop in recommendationMessages) {
        if (recommendationMessages.hasOwnProperty(prop)) {
            individualAdvice = recommendationMessages[prop]["lowLiteracyRecommendation"];

            advices += individualAdvice + linebreak;
        }
    }
    body = body.replace("#ADVICE#", advices);
    body = body + emailText.footerNode;

    body = body.replace(/<\/?p>/g, "").replace(/<\/?P>/g, "");
    if (!isNativeApplication) {
        body = body.replace(/&bull;/g, linebreak + "•").replace(/&rsquo;/g, "'").replace(/&lt;/g, "<").replace(/SUP>/g, "sup>").replace(/SUB>/g, "sub>").replace("<U><</U>", "≤");
        body = $.convertHTML2UTF(body);
    }

    return {
        "subject": subject,
        "body": body
    }
}

function launchEmailApp(email) {
    if (isNativeApplication) {
        cordova.plugins.email.open({
            to: '',
            cc: '',
            bcc: '',
            subject: email.subject,
            body: decodeURI(email.body.replace(new RegExp('%0D%0A', 'g'), '<br>')),
            isHtml: true
        });
    } else {
        mymail = 'mailto:?subject=' + email.subject + '&body=' + email.body + '';
        window.location.href = mymail;
    }
}
