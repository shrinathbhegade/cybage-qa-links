Array.prototype.find = (Array.prototype.find) ? Array.prototype.find : function(callback) {
            var found = null;
            this.forEach(function(element) {
                if(callback(element)){
                    found = element;
                }
            });
            return found;
        }

var AssetType = {
    Form: 'Form',
    StandardQuestion: 'StandardQuestion',
    Expression: 'Expression',
    ValueCheckQuestion: 'ValueCheckQuestion',
    Algorithm: 'Algorithm',
    Recommendation: 'Recommendation',
    ValueSet: 'ValueSet',
    Report: 'Report',
    ValueQuestion: 'ValueQuestion'
}

var SubAssetType = {
    Default: 'Default',
    MultipleChoiceSingleAnswer: 'MultipleChoiceSingleAnswer',
    MultipleChoiceMultipleAnswers: 'MultipleChoiceMultipleAnswers',
    Instruction: 'Instruction',
    Information: 'Information',
    Intervention: 'Intervention',
}

var userActivity = [];
var recommendationMessages = [];
var latestRKey;
var valueSetQuestionAnswers = [];
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
        case AssetType.ValueSet: evaluateValueSet(guid);
            break;
        case AssetType.Report: evaluateReport(guid);
            break;
        case AssetType.Form: evaluateForm(guid);
            break;
        default:
            debugLog(assetType + ' Asset Type is not covered');
            break;
    }
}
/*This function replaces all the inline <img> with correct url*/
function replaceInlineImagesInRecommendation(recommendationMessage) {
    if(recommendationMessage.inlineImagePresent==undefined) {
        var averageLiteracyRecommendation = recommendationMessage.averageLiteracyRecommendation;
        
        var media = assetNode.find(function(node) {
            return node.guId === recommendationMessage.RecommendationMedia.mediaGuId;
        });
        averageLiteracyRecommendation = averageLiteracyRecommendation.replace("src=","srcs=").replace("height=","heights=").replace("width=","widths=");
        averageLiteracyRecommendation = averageLiteracyRecommendation.replace("<IMG","<img class='advice-inline-image' src='assets/img/"+media.fileName+"'");
        recommendationMessage.averageLiteracyRecommendation = averageLiteracyRecommendation;
        recommendationMessage.inlineImagePresent = true;
    }
}
/*This function replaces HTML markers with their templates*/
function replaceHTMLTemplate(recommendationMessage) {
    var averageLiteracyRecommendation = recommendationMessage.averageLiteracyRecommendation;
    for(var template in htmlTemplatesAP) {
        if(averageLiteracyRecommendation.indexOf(template) > -1) {
            averageLiteracyRecommendation = averageLiteracyRecommendation.replace(template, htmlTemplatesAP[template]);
        }
    }
    recommendationMessage.averageLiteracyRecommendation = averageLiteracyRecommendation;
    recommendationMessage.inlineImagePresent = true;
}
function evaluateReport(guid) {
    appmodel.Form().recommendationMessage([]);
    var finalRecommendations = {};
    for (var i = 0; i < userActivity.length; i++) {
        if (userActivity[i].latestRKey != undefined) {
            userActivity[i].latestRKey.forEach(function (rKey) {
                finalRecommendations[rKey] = recommendationMessages[rKey];
            });
        }
    }
    recommendationMessages = finalRecommendations;

    for (var key in recommendationMessages) {
        recommendationMessages[key].averageLiteracyRecommendation = recommendationMessages[key].averageLiteracyRecommendation.replace(new RegExp('&nbsp;', 'g'), ' ');
        recommendationMessages[key].highLiteracyRecommendation = replaceAll(recommendationMessages[key].highLiteracyRecommendation.replace(new RegExp('&nbsp;', 'g'), ' '));
        recommendationMessages[key].lowLiteracyRecommendation = replaceAll(recommendationMessages[key].lowLiteracyRecommendation.replace(new RegExp('&nbsp;', 'g'), ' '));
        replaceHTMLTemplate(recommendationMessages[key]);
        appmodel.Form().recommendationMessage.push(recommendationMessages[key]);
        var gaKeyword = recommendationMessages[key].keywords;
        if (gaKeyword && gaKeyword.indexOf('gaWrapper') > -1) {
            var evaluateGa = new Function('return ' + gaKeyword.trim());
            evaluateGa();
        }
    }
    appmodel.Form().hasAdvice(false);
    $('#inputsection').html(getInputs());
    //for keeping the advice close by default in mobile
    if(viewWidth() <= 480)
        $('.viewLess a').click();
    //appmodel.Form().hasContinue(true);
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
/**/
function evaluateValueSet(guid) {
    //alert(guid);
    // Get Question guId from value set link
    var asset = getAssetByGuid(assetNode, guid);
    if (asset.length > 0) {
        if (asset[0].APValueSetLink.length > 0) {
            var questionGuid = asset[0].APValueSetLink[0].questionGuId;
            var valueGuid = asset[0].APValueSetLink[0].valueGuId;

            var question = $.grep(assetNode, function (item) {
                return item.guId === questionGuid;
            });

            var answer = $.grep(assetNode, function (item) {
                return item.guId === valueGuid;
            });
            path = {};
            path.questionguId = questionGuid;
            path.questionLabel = question[0].label;
            var answerArray = [];
            answerArray.push({ 'answerGuid': answer[0].guId, 'answerLabel': answer[0].label, 'answerText': answer[0].baseAnswer });
            path.answer = answerArray;
            path.questionText = question[0].baseQuestion;
            var vquestion = $.grep(valueSetQuestionAnswers, function (item) {
                return (item.questionguId === questionGuid)
            });
            if (vquestion.length > 0) {
                $.map(valueSetQuestionAnswers, function (item) {
                    if (item.questionguId == questionGuid) {
                        item.answer = answerArray;
                    }
                });
            } else {
                valueSetQuestionAnswers.push(path);
            }
            evaluateTargetRule(guid, '');
        }
    }
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
        setPath(guId, '', '', index, '', '', 'question');
    }
    appmodel.Form().hasContinue(true);
    utils.appendQuestionCard(guId);
    evaluateConditionalVisibiltiy(guId);
}

/*This function display a form card to UI*/
function evaluateForm(guId) {
    utils.appendFormCard(guId);
    var index = userActivity.length + 1;
    setPath(guId, '', '', index, '', '', 'question');
}

function evaluateConditionalVisibiltiy(guId) {
    $("#" + guId + " div[data-guid]").show();
    var asset = getAssetByGuid(assetNode, guId);
    var QAlink = asset[0]['QALink'];
    var expression = asset[0]['Expression'];
    if (expression) {
        $.map(expression, function (item) {
            var exprssionAnswer = new Function('return ' + replaceAll(item.expression.trim()));
            if (!exprssionAnswer()) {
                $.map(QAlink, function (record) {
                    if (record.expressionGuId === item.guId) {
                        $("div[data-guid='" + record.answerGuId + "']").hide();
                    }
                });
            }
        });
    }
};
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
                if (asset[0].nonVisual) {
                    appmodel.Form().hasAdvice(true);
                    //Added this code to overwrite the advice text in case of algorithm recalculation
                    //var rkey = asset[0].highLiteracyRecommendation.split(' ');
                    //rkey[0] = rkey[0].replace(':', '');
                    var rKey = asset[0].setName.trim();
                    recommendationMessages[replaceAll(rKey)] = asset[0];
                    var keys = Object.keys(recommendationMessages);
                    var length = keys.length - 1;
                    if (length > 0) {
                        var keys = Object.keys(recommendationMessages);
                        var index = keys.indexOf(replaceAll(rKey));
                        for (var i = length; i > index; i--) {
                            delete recommendationMessages[keys[i]];
                        }
                    }
                    if (userActivity[userActivity.length - 1].latestRKey == undefined) {
                        userActivity[userActivity.length - 1].latestRKey = [];
                    }
                    userActivity[userActivity.length - 1].latestRKey.push(rKey); //Keeps track of latest Recommendation   

                    evaluateTargetRule(guId, '');
                } else if (asset[0].assetSubType != 'Default') {
                    appmodel.Form().hasAdvice(true);
                    if (userActivity.length !== 0) {
                        setPath(guId, '', '', '', '', '', 'recommendation');
                    }
                    utils.appendRecommendationCard(guId);
                    evaluateTargetRule(guId, '');
                } else {
                    evaluateNoAUCAdvice(asset);
                }
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
    if(!appmodel.Form().hasAdvice()){
        $('.group-section').addClass('no-box-shadow');
		customPanelToggle();
    }
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
    var questionGuid, answerLabel, inputLabel, answerGuid, question, answerText, gaKeyword;
    $.map($("#" + guid + " input:radio:checked"), function (elem) {
        questionGuid = $(elem).attr("data-questionguid");
        answerGuid = $(elem).attr("data-guid");
        answerLabel = $(elem).attr("data-label");
        inputLabel = $('#' + questionGuid).attr("data-label");
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
        var answerNode = assetNode.find(function(element) {
            return element.guId === answerGuid;
        });
        answer.push({ 'answerGuid': answerGuid, 'answerLabel': answerLabel, 'answerText': answerText, 'expertAnswer': answerNode.expertAnswer });

        setPath(questionGuid, question[0].label, answer, index, question[0].baseQuestion, inputLabel, 'question');
        gaKeyword = $(elem).attr("data-ga");
        if (gaKeyword && gaKeyword.indexOf("gaWrapper") > -1) {
            var evaluateGA;
            evaluateGA = new Function('return ' + gaKeyword);
            evaluateGA();
        }
    });
    evaluateTargetRule(guid, answerLabel);
}
/*This function takes question guid as a parameter and fetches the user's answer selection of a Checkbox question (Multiple Choice Multiple Answer  and push the
Question Answer key value in to userActivity array*/
function handleMultipleChoiceMultipleAnswers(guid) {
    var questionGuid, answerLabel, inputLabel, answerGuid, question, answerText;
    var answer = [];
    $.map($("#" + guid + " input:checkbox:checked"), function (elem) {
        questionGuid = $(elem).attr("data-questionguid");
        answerGuid = $(elem).attr("data-guid");
        answerLabel = $(elem).attr("data-label");
        inputLabel = $('#' + questionGuid).attr("data-label");
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
        var answerNode = assetNode.find(function(element) {
            return element.guId === answerGuid;
        })
        answer.push({ 'answerGuid': answerGuid, 'answerLabel': answerLabel, 'answerText': answerText, 'expertAnswer': answerNode.expertAnswer });
    });
    if (answer.length > 0) {
        var index = userActivity.length + 1;
        setPath(questionGuid, question[0].label, answer, index, question[0].baseQuestion, inputLabel, 'question');
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
function setPath(questionGuid, questionLabel, answer, questionOrder, questionText, inputLabel, type) {
    var path = {};
    path.questionguId = questionGuid;
    path.questionLabel = questionLabel;
    path.answer = answer;
    path.questionText = questionText;
    path.type = type;
    path.inputText = inputLabel;
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
        return (item.questionguId === questionID && item.type == 'question');
    });
    return questionCard;
}

function getCardByQuestionOrder(userPathActivity) {
    var questionCard = $.grep(userPathActivity, function (item, index) {
        item.index = index;
        return item.type == 'question';
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
    if (answer.indexOf('isSelected') > -1 || answer.indexOf('isAnySelected') > -1) {
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
            answerLabel.push(params[i].trim());
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
        return items.answerLabel == answerLabel
    });
    return result.length > 0;
}
/*This function checks whether the given question has the only desired answer, If yes then It returns true else returns false*/
function isOnlySelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var expressionResult = false;
    //Added this code to get hidden question answers of value set and then evaluate expression
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);

    var question = $.grep(questionAnswerArray, function (items) {
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
    //Added this code to get hidden question answers of value set and then evaluate expression
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);

    var question = $.grep(questionAnswerArray, function (items) {
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
    //Added this code to get hidden question answers of value set and then evaluate expression
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);
    var evalut = $.grep(questionAnswerArray, function (items) {
        return items.questionLabel === expressionArguments.question && $.grep(items.answer, function (args) {
            return args.answerLabel == expressionArguments.answerLabel;
        }).length > 0;
    });
    return evalut.length > 0;
}
/*This function checks whether the given question does not have any of the answer as provided in an arguments, 
If this condition is passed then function returns true else false */
function isNotAnySelected() {
    var expressionArguments = getExpressionArguments(arguments);
    var expressionResult = false;
    //Added this code to get hidden question answers of value set and then evaluate expression
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);

    var question = $.grep(questionAnswerArray, function (items) {
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
    //Added this code to get hidden question answers of value set and then evaluate expression
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);

    var evalut = $.grep(questionAnswerArray, function (items) {
        return items.questionLabel === expressionArguments.question && $.grep(items.answer, function (args) {
            return args.answerLabel == expressionArguments.answerLabel;
        }).length > 0;
    });
    return !(evalut.length > 0);
}
function countSelected() {
    var count = 0;
    var expressionArguments = getExpressionArguments(arguments);
    var questionAnswerArray = userActivity.concat(valueSetQuestionAnswers);
    var question = $.grep(questionAnswerArray, function (items) {
        return items.questionLabel === expressionArguments.question;
    });
    if (question.length > 0) {
        return question[0].answer.length;
    } else {
        return count;
    }
}
/* This function matches the @search string pattern and replace it with the string provided in @replacement parameter*/
function replaceAll(str) {
    var target = str;
    var replaceStrings = [
                            { search: '&lt;P&gt;', replaceWith: '' },
                            { search: '&lt;/P&gt;', replaceWith: '' },
                            { search: '&minus;', replaceWith: '-' },
                            { search: '&lt;', replaceWith: '<' },
                            { search: '&le;', replaceWith: '≤' },
                            { search: '&gt;', replaceWith: '>' },
                            { search: '&gt;=', replaceWith: '>=' },
                            { search: '&lt;=', replaceWith: '>=' },
                            { search: '\\[{', replaceWith: '"' },
                            { search: '\\}]', replaceWith: '"' },
                            { search: '= "', replaceWith: ', "' },
                            { search: '<P>', replaceWith: '' },
                            { search: '</P>', replaceWith: '' },
                            { search: '<B>', replaceWith: '' },
                            { search: '</B>', replaceWith: '' },
                            { search: '&amp;', replaceWith: '&' },
                            { search: '&quot;', replaceWith: '"' },
                            { search: '&nbsp;', replaceWith: '' }
    ];
    $.map(replaceStrings, function (item) {
        target = target.replace(new RegExp(item.search, 'g'), item.replaceWith);
    });
    return target;
};
/* This function matches the @search string pattern and replace it with the string provided in @replacement parameter*/
function replaceLowLiteracyRecommendation(str) {
    var target = str;
    var replaceStrings = [
                            { search: '&lt;P&gt;', replaceWith: '' },
                            { search: '&lt;/P&gt;', replaceWith: '' },
                            { search: '&minus;', replaceWith: '-' },
                            { search: '&lt;', replaceWith: '<' },
                            { search: '&le;', replaceWith: '≤' },
                            { search: '&gt;', replaceWith: '>' },
                            { search: '&gt;=', replaceWith: '>=' },
                            { search: '&lt;=', replaceWith: '>=' },
                            { search: '\\[{', replaceWith: '"' },
                            { search: '\\}]', replaceWith: '"' },
                            { search: '= "', replaceWith: ', "' },
                            { search: '&amp;', replaceWith: '&' },
                            { search: '&quot;', replaceWith: '"' },
                            { search: '&nbsp;', replaceWith: '' },
                            { search: '&rsquo;', replaceWith: "'"},
                            { search: '<P>', replaceWith: ""},
                            { search: '<B>', replaceWith: ""},
                            { search: '</B>', replaceWith: ""},
                            { search: '</P>', replaceWith: ""}
    ];
    $.map(replaceStrings, function (item) {
        if(target.indexOf(item.search) > -1)
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
    isQueryStringOn = true;
    valueSetQuestionAnswers = [];
    $('.next-btn').removeClass('hide');
    $("#questionset div.page-wrapper").appendTo('#template');
    $("#questionset div.page-message").appendTo('#template');
    $("input:radio, input:checkbox").attr('checked', true);
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
    //utils.appendQuestionCard(firstAsset);
    targetRule = rulesJson[0].targetRule;
    if (isRecommendation) {
        utils.appendRecommendationCard(firstAsset);
        evaluateTargetRule(firstAsset, '');
    }else{
        utils.appendQuestionCard(firstAsset);
    }
    resetAnswers();
    isQueryStringOn = false;
    pageScrollTop();
    setHeight();
    resetTooltip();
   /* if (isNativeApplication) {
        for (var i = history.length - 1; i > 1; i--) {
            history.go(-(i));
        }
    }*/
}
function resetAnswers(){
    $("input:radio, input:checkbox").attr('checked', false);
    $("input:radio, input:checkbox").prop('checked', false);; // For IE
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
    var questionCard = getCardByQuestion(userActivity, guid);
    utils.clearAllQuestion(guid, questionCard[0].index);
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
        $("#" + guid + " a#next_btn").removeClass('disabled');
    } else {
        $('#' + guid + ' input').parents('div.question').removeClass('active');
        $("#" + guid + " a#next_btn").addClass('disabled');
    }

    appmodel.Form().hasAdvice(true);
    $("div[data-next-btn='" + guid + "']").show();
    $("#" + guid + ' .group-section').removeClass('no-box-shadow');
    var gaKeyword = $("#" + id).attr("data-ga");
    if (gaKeyword && gaKeyword.indexOf('gaWrapper') > -1) {
        var evaluateGa = new Function('return ' + gaKeyword);
        evaluateGa();
    }
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
function getInputs() {
    var rawHtml = '';
    var template = '<div class="row"><div class="text-left large-6 column small-6 float-left"><h4>@questionLabel</h4></div><div class="text-right large-6 column small-6 float-right"><h4 class="highlighted">@answerLabel</h4></div></div><hr>';
    $.map(userActivity, function (element) {
        if (element.type == 'question') {
            rawHtml += template.replace('@questionLabel', element.inputText);
            var answers = '';
            $.map(element.answer, function (item) {
                //answers += item.answerLabel + ', ';
                answers += getExpertFieldText(item.answerGuid) + ', ';
            });
            answers = answers.trim().slice(0, -1);
            rawHtml = rawHtml.replace('@answerLabel', answers);
        }
    });
    return rawHtml;
}
function getExpertFieldText(id) {
    var answer = $.grep(assetNode, function (item) {
        return item.guId === id;
    });
    if (answer.length > 0) return replaceAll(answer[0].expertAnswer.trim()); else return '';
}