var AssetType = {
    Form: 'Form',
    StandardQuestion: 'StandardQuestion',
    Expression: 'Expression',
    ValueCheckQuestion: 'ValueCheckQuestion',
    Algorithm: 'Algorithm',
    Recommendation: 'Recommendation'
}

var SubAssetType = {
    Default: 'Default',
    MultipleChoiceSingleAnswer: 'MultipleChoiceSingleAnswer',
    MultipleChoiceMultipleAnswers: 'MultipleChoiceMultipleAnswers'
}

var userActivity = [];
var path = {};
var targetRule;
var flag = false;
/*This function takes StandardQuestion/Form guid and its sub asset type to get selected answers for respective question
and then evaluates next question*/
function evaluateNextQuestion(guid, subAssetType, assetType, element) {
    // Depending on type of asset, Evaluate the expression or value check question or algorithm nodes until you get next standard question or recommendation(advice/no advice) to display on UI.
    /*This function gets the answers selected for a respective question and then finds its target in rules*/
    if (assetType === AssetType.Form) { //Call form element click event method
        utils.handleFormElementClickEvent($(element));
    } else {
        appmodel.Form().hasAdvice(true);
        /*hide disclaimer after continue button click*/
        showHideDisclaimer('');
        if (subAssetType === SubAssetType.Default || subAssetType === SubAssetType.MultipleChoiceSingleAnswer) {
            handleMultipleChoiceSingleAnswer(guid);
        }
        else if (subAssetType === SubAssetType.MultipleChoiceMultipleAnswers) {
            handleMultipleChoiceMultipleAnswers(guid);
        }
    }
}
/*This function takes assets guid and its asset type and further evaluates the asset depending upon its type*/
function evaluateAssetNode(guid, assetType) {
    switch (assetType) {
        case AssetType.Expression: evaluateExpression(guid);
            break;
        case AssetType.StandardQuestion: evaluateStandardQuestion(guid);
            break;
        case AssetType.ValueCheckQuestion: evaluateValueCheckQuestion(guid);
            break;
        case AssetType.Algorithm: evaluateAlgorithm(guid);
            break;
        case AssetType.Recommendation: evaluateRecommendation(guid);
            break;
        default:
            debugLog('This Asset Type is not covered');
            break;
    }
}
/*This function takes rule's asset as a object and evaluates the target guid to further traverse the path/algorithm*/
function evaluateTargetAsset(targetAsset, sourceGuid) {
    if (targetAsset.length > 0) {
        targetRule = targetAsset[0].targetRule;
        var asset = getAssetByGuid(assetNode, targetAsset[0].target)
        if (asset.length > 0) {
            evaluateAssetNode(asset[0].guId, asset[0].assetType);
        } else {
            evaluateTransferRule(targetAsset[0].target);
            /*Find in Rules (Transfer Rule)*/
        }
    } else {
        /*Added the following code if target asset doesn't found for given label then re-filter rule with blank label*/
        evaluateTargetRule(sourceGuid, '');
    }
}
/*This function takes assets guid and assets label(if any, For e.g In case of StandardQuestion the label is its
StandardAnswer). It traverse through the Rules and returns a target guid, and this target guid is further used to evaluate
next asset*/
function evaluateTargetRule(sourceGuid, label) {
    var targetAsset = getTargetByGuidandLabel(sourceGuid, label);
    evaluateTargetAsset(targetAsset, sourceGuid);
}
/*This function takes expression guid as a parameter and evaluates the expression associated to it. It returns true or false*/
function evaluateExpression(guid) {
    var asset = getAssetByGuid(assetNode, guid);
    var exprssionAnswer = new Function('return ' + replaceAll(asset[0].expression.trim()));
    if (exprssionAnswer()) {
        evaluateTargetRule(asset[0].guId, 'True');
    }
    else {
        evaluateTargetRule(asset[0].guId, 'False');
    }
}
/*This function display a question card to UI and creates a blank object with Question Guid in User path activity array*/
function evaluateStandardQuestion(guId) {
    var questionCard = getCardByQuestion(userActivity, guId);
    var index = userActivity.length + 1;
    if (questionCard.length === 0) {
        setPath(guId, '', '', index, '');
    }
    appmodel.Form().hasContinue(true);
    utils.appendQuestionCard(guId);
}
/**
* evaluateValueCheckQuestion function evaluates Value Check Question node.
*
* @param {asset/question guid} guid.
*/
function evaluateValueCheckQuestion(guid) {
    var asset = getAssetByGuid(assetNode, guid);
    var QAlink = asset[0]['QALink'];
    var valueCheckAnswer;
    for (var i = 0; i < QAlink.length; i++) {
        valueCheckAnswer = getValueCheckAnswer(QAlink[i])
        var expressionAnswer = getValueCheckExpressionAnswer(valueCheckAnswer[0]['expression']);
        if (expressionAnswer) {
            evaluateTargetRule(guid, valueCheckAnswer[0]['label']);
            break;
        }
    }
}
/*This function evaluates Algorithm node. If it finds the target asset then it evaluates that asset depending on asset type.
If it doesn't get the target asset it evaluate the input guid as transfer rule*/
function evaluateAlgorithm(guid) {
    var targetAsset = $.grep(rulesJson, function (item) {
        return (item.source === guid && replaceAll(item.label.trim()) === '')
    });
    evaluateTargetAsset(targetAsset, guid);
}
/*This function evaluates Recommendation node and also traversed through the CMS advice (another recommendation node) if present.*/
function evaluateRecommendation(guId) {
    appmodel.Form().cmsIndicationId('');
    $('.group-section').not('.no-box-shadow').find('input').parents('.question').removeClass('warning');
    var asset = getAssetByGuid(assetNode, guId);
    if (asset.length > 0) {
        if (asset[0].keywords.trim() === "CMS") {
            /*This code is for displaying CMS advice contents*/
            evaluateCMSAdvice(asset);
        } else {
            $('#recommendationText').html('');
            appmodel.Form().scoreIndicator('');
            appmodel.Form().hasAdvice(false);
            $('#advice_btn').css('display', 'block');
            appmodel.Form().aucIndicationId(asset[0].guId);
            if (asset[0].label.trim() === appmodel.FormData.scoreIndicator.Indeterminante || asset[0].Items === null) {
                evaluateNoAUCAdvice(asset);
            } else {
                evaluateAucAdvice(asset, guId);
            }
        }
    } else {
        /*If there is no asset/no recommendation linked to a particular clinical scenario.*/
        $('#noAdviceText').html('No Advice');
        appmodel.Form().hasCMSAdvice(false);
        appmodel.Form().cmsIndicationId('');
        appmodel.Form().aucIndicationId('');
        postUserActivity(getJsonforUserActiviy());
    }
    appmodel.Form().hasContinue(true);
    $('#continue_btn').hide();
    $('.group-section').addClass('no-box-shadow');
}
/*This function evaluates AUC advice*/
function evaluateAucAdvice(asset, guId) {
    var tempI = $.grep(asset[0].Items, function (item) {
        return item.subPointGuId;
    });
    if (tempI.length > 0) {
        appmodel.Form().hasNoAdvice(true);
        var subPoint = getAssetByGuid(assetNode, tempI[0].subPointGuId);
        if (subPoint.length > 0) {
            appmodel.Form().scoreIndicatorTooltip(replaceAll(subPoint[0].lowLiteracySubPoint.trim()));
            appmodel.Form().scoreIndicator(subPoint[0].label.trim());
            var regExp = /\(([^)]+)\)/;
            var matches = regExp.exec(asset[0].averageLiteracyRecommendation);
            appmodel.Form().indicationDetails(matches[0]);
            $('#recommendationText').html(asset[0].averageLiteracyRecommendation);
            appmodel.Form().adviceDisclaimerText(appmodel.FormData.adviceDisclaimer.aucAdvice);
            /*Added for evaluating CMS advice*/
            evaluateTargetRule(guId, '');
        } else {
            evaluateNoAUCAdvice(asset);
        }
    } else {
        evaluateNoAUCAdvice(asset);
    }
}
/*This function evaluates the rules where source guid is same as that of rule's guid, the target is always an algorithm node, In future AUC application if transfer rule takes to another node then call evaluateAssetNode function*/
function evaluateTransferRule(sourceGuid) {
    var targetRules = $.grep(rulesJson, function (item) {
        return (item.source === sourceGuid && item.source === item.guId)
    });
    evaluateAlgorithm(targetRules[0].target);
}
/*This function evaluates No Auc advice end state and displays the list of question answer to UI*/
function evaluateNoAUCAdvice(asset) {
    appmodel.Form().scoreIndicatorTooltip('');
    appmodel.Form().hasContinue(true);
    appmodel.Form().hasNoAdvice(false);
    if (asset[0].Items) {
        if (asset[0].Items[0].categorylist === appmodel.FormData.scoreIndicator.NotApplicable) {
            appmodel.Form().scoreIndicator(appmodel.FormData.scoreIndicator.NotApplicable);
            appmodel.Form().adviceDisclaimerText(replaceAll(asset[0].averageLiteracyRecommendation));
        } else {
            appmodel.Form().scoreIndicator(appmodel.FormData.scoreIndicator.Indeterminante);
            appmodel.Form().adviceDisclaimerText(appmodel.FormData.adviceDisclaimer.noAUCAdvice);
        }
    } else {
        appmodel.Form().scoreIndicator(appmodel.FormData.scoreIndicator.Indeterminante);
        appmodel.Form().adviceDisclaimerText(appmodel.FormData.adviceDisclaimer.noAUCAdvice);
    }
    $('#noAdviceText').html(getQuestionAnswerHTML());
    appmodel.Form().hasCMSAdvice(false);
    $('#noAucAlert').html(replaceAll(asset[0].averageLiteracyRecommendation));
    highlightAnswer();
    postUserActivity(getJsonforUserActiviy());
}
/*This function takes asset as a parameter and extracts the CMS HTML contents and display on UI*/
function evaluateCMSAdvice(asset) {
    /*This code is for displaying CMS advice contents*/
    appmodel.Form().hasCMSAdvice(true);
    $("#cms_icd").html('');
    var $e = $("#cms_icd").html($('<div/>').html(asset[0].averageLiteracyRecommendation).text());
    appmodel.Form().cmsIndicationId(asset[0].guId);
    /*Added for automation scrip test to verify CMS indication id*/
    $('#cmsIndicationID').html(asset[0].label.split('.')[0].trim());
    postUserActivity(getJsonforUserActiviy());
    /*Added for reapplying binding events*/
    ko.cleanNode($e.get(0));
    ko.applyBindings(appmodel, $e.get(0));
}
/*This function takes question guid as a parameter and fetches the user's answer selection of a Radio button question (Multiple Choice Single Answer and push the
Question Answer key value in to userActivity array*/
function handleMultipleChoiceSingleAnswer(guid) {
    var questionGuid, answerLabel, answerGuid, question, answerText, gaKeyword;
    $.map($("#" + guid + " input:radio:checked"), function (elem) {
        questionGuid = $(elem).attr("data-questionguid");
        answerGuid = $(elem).attr("data-guid");
        answerLabel = $(elem).attr("data-label");
        /*Added this code to capture answer base text*/
        var id = $(elem).attr("id");
        answerText = $("label.switch-value[for='" + id + "']").text().trim();

        $('#' + questionGuid).find('div.question').removeClass('active');
        $(elem).closest('div.question').addClass('active');
        question = $.grep(assetNode, function (item) {
            return item.guId === questionGuid;
        });
        /*This code is for recalculating the algorithm traversal on change of answer selection of MultipleChoiceSingleAnswer type question*/
        var questionCards = getCardByQuestion(userActivity, questionGuid);
        if (questionCards.length !== 0 && questionCards[0].questionLabel !== '') {
            targetRule = questionCards[0].targetRule;
            utils.clearAllQuestion(questionCards[0].questionguId, questionCards[0].index);
        } else {
            var cardLength = questionCards.length;
            for (var i = 0; i < cardLength; i++) {
                if (cardLength !== 0 && questionCards[i].questionLabel !== '') {
                    utils.clearAllQuestion(questionCards[i].questionguId, questionCards[0].index);
                }
            }
        }
        var index = userActivity.length + 1;
        var answer = [];
        answer.push({ 'answerGuid': answerGuid, 'answerLabel': answerLabel, 'answerText': answerText });
        setPath(questionGuid, question[0].label, answer, index, question[0].baseQuestion);
    });
    evaluateTargetRule(guid, answerLabel);
}
/*This function takes question guid as a parameter and fetches the user's answer selection of a Checkbox question (Multiple Choice Multiple Answer  and push the
Question Answer key value in to userActivity array*/
function handleMultipleChoiceMultipleAnswers(guid) {
    var questionGuid, answerLabel, answerGuid, question, answerText;
    var answer = [];
    $.map($("#" + guid + " input:checkbox:checked"), function (elem) {
        questionGuid = $(elem).attr("data-questionguid");
        answerGuid = $(elem).attr("data-guid");
        answerLabel = $(elem).attr("data-label");
        /*Added this code to capture answer base text*/
        var id = $(elem).attr("id");
        answerText = $("label.switch-value[for='" + id + "']").text().trim();
        question = $.grep(assetNode, function (item) {
            return item.guId === questionGuid;
        });
        /*This code is for recalculating the algorithm traversal on change of answer selection of MultipleChoiceMultipleAnswers type question*/
        var questionCards = getCardByQuestion(userActivity, questionGuid);
        if (questionCards.length !== 0 && questionCards[0].questionLabel !== '') {
            targetRule = questionCards[0].targetRule;
            var answerSet = $.grep(questionCards[0].answer, function (item, index) {
                item.index = index;
                return item.answerGuid === answerGuid;
            });
            if (answerSet.length !== 0 && answerSet[0].answerGuid !== '') {
                utils.clearAllQuestion(questionCards[0].questionguId, questionCards[0].index);
            }
        }
        answer.push({ 'answerGuid': answerGuid, 'answerLabel': answerLabel, 'answerText': answerText });
    });
    if (answer.length > 0) {
        var index = userActivity.length + 1;
        setPath(questionGuid, question[0].label, answer, index, question[0].baseQuestion);
        utils.handleNextButton(guid);
    } else {
        debugLog("Please answer the question.");
        return;
    }
    evaluateTargetRule(guid, '');
}
/**
* setPath function used for record user activity details in userActivity array.
*
* @param {asset/question guid} questionGuid.
* @param {asset/question label} questionLabel.
* @param {asset/answer guid} answer.
* @param {question number} questionOrder.
* @param {asset/question text} questionText.
*/
function setPath(questionGuid, questionLabel, answer, questionOrder, questionText) {
    path = {};
    path.questionguId = questionGuid;
    path.questionLabel = questionLabel;
    path.answer = answer;
    path.questionText = questionText;

    var question = getCardByQuestion(userActivity, questionGuid);
    if (question.length !== 0 && (question[0].questionLabel === '' || question[0].questionLabel === questionLabel)) {
        path.questionOrder = question[0].questionOrder;
        path.index = question[0].index;
        path.targetRule = targetRule;
        if (question[0].questionLabel === '') {
            userActivity.pop();
            path.index = questionOrder - 1;
            userActivity.push(path);
        } else {
            userActivity[question[0].index] = path;
        }

    } else {
        path.targetRule = targetRule;
        path.questionOrder = questionOrder;
        path.index = questionOrder - 1;
        userActivity.push(path);
    }
}
/*This function traverse through the Rules and returns a target guid, and this target guid is further used to evaluate next asset*/
function getTargetByGuidandLabel(sourceGuid, label) {
    return $.grep(rulesJson, function (item) {
        return (item.guId === targetRule && item.source === sourceGuid && replaceAll(item.label.trim()) === label)
    });
}
/*This function is used to get the question card from User path activity array*/
function getCardByQuestion(userPathActivity, questionID) {
    var questionCard = $.grep(userPathActivity, function (item, index) {
        item.index = index;
        return item.questionguId === questionID;
    });
    return questionCard;
}
/*This function takes array of a object and guid as a parameter and filters the record on guid*/
function getAssetByGuid(assetObject, guid) {
    return $.grep(assetObject, function (item) {
        return item.guId === guid;
    });
}
/*This function returns the value check answer node for a given value check question*/
function getValueCheckAnswer(QAlink) {
    return $.grep(assetNode, function (item, index) {
        item.index = index;
        return item.guId === QAlink['answerGuId'];
    });
}
/**
* getValueCheckExpressionAnswer function evaluates Value Check Answer node.
* this function handled isSelected, isEqualTo conditional expressions.
* @param {asset/answer guid} answer.
* @return true/false
*/
function getValueCheckExpressionAnswer(answer) {
    var expression, expressionORValue, param;
    if (answer.indexOf('isSelected') > -1) {
        param = answer.replace(/([*+?^$\[\]])/mg, '"').replace(/([*+?^$|{}])/mg, '');
        expression = new Function('return ' + param);
    } else if (answer.indexOf('isSelected') === -1 && answer.indexOf('=') > -1) {
        param = replaceAll(answer.replace(/([*+?^$\[\]])/mg, '"'));
        if (answer.indexOf('||') > -1) {
            expressionORValue = param.split('||');
            if (expressionORValue.length) {
                for (var i = 0; i < expressionORValue.length; i++) {
                    expression = new Function('return isSelected' + expressionORValue[i])
                    if (expression()) {
                        return true;
                    }
                }
            }
        } else {
            expression = new Function('return isSelected' + param);
        }
    } else {
        expression = function () { return false };
    }
    return expression();
}
/*This function takes function's arguments as a parameter and returns object with two property in it(i.e Question and 
AnswerLabel*/
function getExpressionArguments(params) {
    var question;
    var answerLabel = [];
    var i;
    for (i = 0 ; i < params.length ; i++) {
        if (i === 0) {
            question = params[i];
        }
        else {
            answerLabel.push(params[i]);
        }
    }
    return { 'question': question, 'answerLabel': answerLabel };
}
/*This function create the HTML structure of question answer list*/
function getQuestionAnswerHTML() {
    var rawHtml = '';
    $.map(userActivity, function (element) {
        rawHtml += '<p class="bold">Q ' + replaceAll(element.questionText) + '</p>';
        $.map(element.answer, function (item) {
            rawHtml += '<p class="ans"><i class="fa fa-check"></i>' + item.answerText + '</p>';
        });
    });
    return rawHtml;
}
/*This function returns true if given answer array contains the desired answer else returns false*/
function isQuestionAnswerSelected(answerArray, answerLabel) {
    var result = $.grep(answerArray, function (items) {
        return items.answerLabel.indexOf(answerLabel) > -1;
    });
    return result.length > 0;
}
/*This function checks whether the given question has the only desired answer, If yes then It returns true else returns false*/
function isOnlySelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var expressionResult = false;
    var question = $.grep(userActivity, function (items) {
        return items.questionLabel === expressionArguments.question;
    });
    if (question.length > 0) {
        for (var i = 0 ; i < expressionArguments.answerLabel.length; i++) {
            if (isQuestionAnswerSelected(question[0].answer, expressionArguments.answerLabel[i]) &&
                    expressionArguments.answerLabel.length === question[0].answer.length) {
                expressionResult = true;
            } else {
                expressionResult = false;
                break;
            }
        }
    }
    return expressionResult;
}
/*This function checks whether the given question has any of the answer as provided in an arguments.(Here question may have multiple answers selected),If yes then It returns true else returns false */
function isAnySelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var expressionResult = false;
    var question = $.grep(userActivity, function (items) {
        return items.questionLabel === expressionArguments.question;
    });
    if (question.length > 0) {
        for (var i = 0 ; i < expressionArguments.answerLabel.length; i++) {
            if (isQuestionAnswerSelected(question[0].answer, expressionArguments.answerLabel[i])) {
                expressionResult = true;
                break;
            }
        }
    }
    return expressionResult;
}
/*This function checks whether the given question has the answer as provided in an arguments, If yes then It returns true else returns false */
function isSelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var evalut = $.grep(userActivity, function (items) {
        return items.questionLabel === expressionArguments.question && $.grep(items.answer, function (args) {
            return args.answerLabel.indexOf(expressionArguments.answerLabel) > -1;
        }).length > 0;
    });
    return evalut.length > 0;
}
/*This function checks whether the given question does not have any of the answer as provided in an arguments, 
If this condition is passed then function returns true else false */
function isNotAnySelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var expressionResult = false;
    var question = $.grep(userActivity, function (items) {
        return items.questionLabel === expressionArguments.question;
    });
    if (question.length > 0) {
        for (var i = 0 ; i < expressionArguments.answerLabel.length; i++) {
            if (isQuestionAnswerSelected(question[0].answer, expressionArguments.answerLabel[i])) {
                expressionResult = true;
                break;
            }
        }
    }
    return !expressionResult
}
/*This function checks whether the given question does not have the answer as provided in an arguments, If yes then It returns true else returns false */
function isNotSelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var evalut = $.grep(userActivity, function (items) {
        return items.questionLabel === expressionArguments.question && $.grep(items.answer, function (args) {
            return args.answerLabel.indexOf(expressionArguments.answerLabel) > -1;
        }).length > 0;
    });
    return !(evalut.length > 0);
}
/* This function matches the @search string pattern and replace it with the string provided in @replacement parameter*/
function replaceAll(str) {
    var target = str;
    var replaceStrings = [
                            { search: '&lt;P&gt;', replaceWith: '' },
                            { search: '&lt;/P&gt;', replaceWith: '' },
                            { search: '&minus;', replaceWith: '-' },
                            { search: '&lt;', replaceWith: '<' },
                            { search: '&gt;', replaceWith: '>' },
                            { search: '\\[{', replaceWith: '"' },
                            { search: '\\}]', replaceWith: '"' },
                            { search: '= "', replaceWith: ', "' },
                            { search: '<P>', replaceWith: '' },
                            { search: '</P>', replaceWith: '' },
                            { search: '&amp;', replaceWith: '&' },
                            { search: '&quot;', replaceWith: '"' },
                            { search: '&nbsp;', replaceWith: '' }
    ];
    $.map(replaceStrings, function (item) {
        target = target.replace(new RegExp(item.search, 'g'), item.replaceWith);
    });
    return target;
};
/*This function removes the question from question set div container and append it to template div container*/
function removeQuestion(q) {
    $("#questionset #" + q).appendTo('#template');
}
/*This function is used to reset the app to its default state*/
function resetAll() {
    userActivity = [];
    $("#questionset div.page-wrapper").appendTo('#template');
    $("input:radio, input:checkbox").attr('checked', false);
    $('#template .next-btn').css('display', '');
    $('#template .question').removeClass('warning');
    $('#template .question').css('height', '');
    appmodel.Form().hasContinue(false);
    appmodel.Form().hasAdvice(true);
    appmodel.Form().hasCMSAdvice(true);
    $('#continue_btn a').addClass('disabled');
    $('.next-btn a').addClass('disabled');
    /*hide disclaimer when reset all*/
    showHideDisclaimer('');
    utils.appendQuestionCard(firstAsset);
    targetRule = rulesJson[0].targetRule;
    pageScrollTop();
}
function newEvaluation() {
    resetAll();
}
/*This function is used to do HTML encoding/decoding*/
function htmlEntities(str) {
    return replaceAll(String(str));
}
/*This function used to perform exclusive scenario.
* Handled conditional visibility if data-exclusive is true.
* @param {asset/question guid} guid.\
* @param {asset/answer guid} id.
*/
function performExclusive(guid, id) {
    var exclusive = $("#" + id).attr("data-exclusive");
    var status = $("#" + id).prop('checked');
    $("#" + guid + ' .group-section').find('.question').removeClass('warning');
    $("#" + guid + " input:checkbox").blur();
    if (exclusive === 'True') {
        /*Make all options unchecked*/
        $("#" + guid + " input:checkbox").attr('checked', false);
        /*Make selected option checked*/
        if (status) {
            $("#" + id).prop('checked', true);
        } else {
            $("#" + id).prop('checked', false);
        }
    } else {
        /*Make all options unchecked*/
        $("#" + guid + " input:checkbox[data-exclusive='True']").attr('checked', false);
    }

    if ($("#" + guid + " input:checked").length > 0) {
        $('#' + guid + ' input').parents('div.question').removeClass('active');
        $('#' + guid + ' input:checked').parents('div.question').addClass('active');
        $("#" + guid + " a").removeClass('disabled');
    } else {
        $('#' + guid + ' input').parents('div.question').removeClass('active');
        $("#" + guid + " a").addClass('disabled');
    }

    appmodel.Form().hasAdvice(true);
    $("div[data-next-btn='" + guid + "']").show();
    $("#" + guid + ' .group-section').removeClass('no-box-shadow');
}
/*This function show or hide disclaimer alert box */
function showHideDisclaimer(text) {
    if (text !== undefined) {
        text = replaceAll(text);
        appmodel.Form().isUnknown(text !== '');
        $('#disclaimerAlert').text(text);
    }
}
/*This function highlight answer whenever advice Indeterminate  */
function highlightAnswer() {
    $('.group-section').not('.no-box-shadow').find('input').parents('.question').removeClass('warning');
    $('.group-section').not('.no-box-shadow').find('input:checked').parents('.question').addClass('warning');
}