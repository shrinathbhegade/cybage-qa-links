var isDeviceOnline = false;
var isProcessOn = false;
var flag = false;


var deviceTypes = {
    Web: "Web"
    , Mobile: "Mobile"
};

var ajaxTypes = {
    Get: "GET"
    , Post: "POST"
};

/*Add all required functions in this file*/
var _utils = function () {
    var self = this;
    /**
     * appendQuestion function used for append/add question card.
     *
     * @param {asset/question guid} cardID
     */
    self.appendQuestionCard = function (cardID) {
        self.clearAllQuestion(cardID)
        $('.group-section').addClass('no-box-shadow');
        $("#template #" + cardID).appendTo('#questionset');
        $('#questionset .question').removeClass('warning');
        $("#" + cardID + ' .group-section').removeClass('no-box-shadow');
        if (userActivity.length > formQuestionCount) {
            $("#" + cardID + ' .order-marker').html('');
            //substracted 3(formQuestionCount) because form element contains 3 default questions.
            $("#" + cardID + ' .order-marker').html(userActivity.length - formQuestionCount);
            $("#" + cardID + ' .order-marker').removeClass('hide');
        }
        $('#' + cardID + ' .next-btn a').addClass('disabled');
        $('#' + cardID + ' .question').css('height', '');
        self.equalizer(cardID);
        $(window).scrollTop($("#" + cardID + ' .group-section').offset().top);

    };
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
            userActivity.pop();
        }
        $("#" + cardID + ' .group-section').removeClass('no-box-shadow');
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
        $('.form-container input').parents('div.question').removeClass('active');
        $('.form-container input:checked').parents('div.question').addClass('active');
        $('.form-container .group-section').removeClass('no-box-shadow');
        $('.form-container div.question').removeClass('warning');
        if (userActivity.length > formQuestionCount) {
            var questionGuid = element.attr("data-questionguid");
            self.clearAllQuestion(questionGuid, formQuestionCount - 1);
            appmodel.Form().hasContinue(false);
            appmodel.Form().hasAdvice(true);
        }
        if ($('.form-container input:checked').length === formQuestionCount) {
            appmodel.Form().hasAdvice(true);
            appmodel.Form().hasContinue(false);
            $('#continue_btn a').removeClass('disabled');
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
        console.log("Calling API....")
        try {
            $.ajax({
                cache: false
                , url: webApiUrl + url
                , type: type
                , contentType: "application/json; charset=utf-8"
                , data: data
                , success: function (data) {
                    debugLog(data);
                    if (parameter === undefined)
                        successFunction(data);
                    else
                        successFunction(data, parameter);
                }
                , error: function (type) {
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
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
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
        document.cookie = cname + "=" + cvalue + "; " + expires + "; secure";
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
            while (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(name) === 0)
                return c.substring(name.length, c.length);
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
            if (this.resizeTO)
                clearTimeout(this.resizeTO);
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
        if (isNativeApplication)
            return deviceTypes.Mobile;
        else
            return deviceTypes.Web;
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
        if (isSyncActivity)
            return;
        else
            mobileApp.saveToLocalDatabase(JSON.stringify(pathActivities[0]));
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
