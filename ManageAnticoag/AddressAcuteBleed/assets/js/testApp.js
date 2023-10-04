var testAPIURL = 'http://172.27.216.86:8082';
function testWrapper(path) {
    resetAll();
    var lockbtn1 = false;
    var lockbtn2 = false;
    var lockbtn3 = false;

    var nextBtn1 = document.querySelector("[data-next-btn='045d6cf1-aed0-439b-9789-46e126e4c1ef'] > div > a");
    var nextBtn2 = document.querySelector("[data-next-btn='5bf36303-6556-4db8-bef0-ea647d5079b1'] > div > a");
    var nextBtn3 = document.querySelector("[data-next-btn='6801c72d-8718-4b93-a782-34b8f8194a85'] > div > a");

    return test(path);

    function aliterAdviceTest(i,array,pathVerified) {
        var arrayOfAdvices = [];
       
        while (i < array.length) {
            if (array[i] != undefined && array[i].trim() != '') {
                arrayOfAdvices.push(array[i].trim().substring(0, array[i].trim().length - 1));
            }
            i++;
        }
        if (arrayOfAdvices.length == 0) {
            pathVerified = false;
        }
        else {
            var tempDictionary = {};
            appmodel.Form().recommendationMessage().forEach(function (element) {
                tempDictionary[element.externalIdentifier] = true;
            });

            arrayOfAdvices.forEach(function (elementId) {
                if (tempDictionary[elementId] == undefined) {
                    pathVerified = false;
                }
            });
        }
        if (arrayOfAdvices.length != appmodel.Form().recommendationMessage().length) {
            pathVerified = false;
        }
        return pathVerified;
    }

    function test(path) {
        var pathVerified = true;
        var array = path.split('+');
        for (var i = 0; i < array.length; i++) {

            if (array[i] == 'Advice') {
                document.getElementById('advice_btn').click();
                i++;
                //return aliterAdviceTest(i, array, pathVerified);
                //TODO: code for advice
                var arrayOfAdvices = [];
                while (i < array.length) {
                    if (array[i] != undefined && array[i].trim() != '') {
                        arrayOfAdvices.push(array[i].trim().substring(0, array[i].trim().length - 1));
                    }
                    i++;
                }
                if (arrayOfAdvices.length == 0) {
                    pathVerified = false;
                }
                else {
                    arrayOfAdvices.forEach(function (elementId) {
                        if (document.querySelector("[data-advice-id='" + elementId + "']") == null) {
                            pathVerified = false;
                        }
                    });
                }
                if (arrayOfAdvices.length != $('[data-advice-id]').length) {
                    pathVerified = false;
                }
                return pathVerified;
            }

            var domElementsIds = array[i].split(',');
            domElementsIds.forEach(function (elementId) {
                elementId = elementId.trim();
                var domElement = document.querySelector("[id='questionset'] [id='" + elementId + "']");

                if (domElement == null) {
                    //Message Box
                    domElement = document.querySelector("[id='questionset'] [data-id='" + elementId + "']");
                    if (domElement == null)
                        pathVerified = false;
                }
                else {
                    //Case for 26
                    if (elementId.indexOf("26") == 0) {
                        if (domElement.parentElement.parentElement.parentElement.style.display == "none")
                            pathVerified = false;
                    }
                    domElement.click();
                }

            });
            if (pathVerified === false)
                break;

            if (lockbtn1 == false && nextBtn1.getAttribute('class').indexOf('disabled') == -1) {
                nextBtn1.click();
                lockbtn1 = true;
            }
            if (lockbtn2 == false && nextBtn2.getAttribute('class').indexOf('disabled') == -1) {
                nextBtn2.click();
                lockbtn2 = true;
            }
            if (lockbtn3 == false && nextBtn3.getAttribute('class').indexOf('disabled') == -1) {
                nextBtn3.click();

                lockbtn3 = true;
            }
        }
        return pathVerified;

    }
}

function testAPI(url) {
    var data = null;
    try {
        $.ajax({
            cache: false
            , url: url[0]
            , type: 'GET'
            , data: data
            , success: function (data) {
                //console.log(data);
                window.location.href = "#!/content/test";
                appmodel.Form().ProcessLog.push("Set " + url[0].split('file=')[1] + " fetched");
                parseAPIValues(data, url[0].split('file=')[1]);
                url.shift();
                if (url.length > 0) {
                    testAPI(url);
                } else {
					//$(".loader").hide();
                    resetAll();
                    console.log('Set Execution done');
                    $('#btnRunTest').attr('disabled', false);
                    getAllSet();
                }
            }
            , error: function (type) {
                console.log("ERROR!!" + type.responseText)
                appmodel.Form().ProcessLog.push("Set " + url[0].split('file=')[1] + " did not fetch");
            }
        });
    } catch (e) {
        console.log("ERROR!!" + e);
        appmodel.Form().ProcessLog.push("Unexpected error in test API");
    }
}

function parseAPIValues(data,fileName) {
    var testResult = [];
    data = JSON.parse(data);
    var startTime = new Date();
    $.grep(data, function (item, index) {
        if (index != 0) {
            if (index % 100 == 0) {
                window.location.href = "#!/content/test";
                appmodel.Form().ProcessLog.push('Records Processed in Set ' + fileName + ': ' + (index / 100) * 100 + ' | Time : ' + calculateElapsedTime(startTime, new Date()));
            }
            testResult.push(item.join('+') + "+" + testWrapper(item.slice(1).join('+')));
        }
    });
    window.location.href = "#!/content/test";
    appmodel.Form().ProcessLog.push('All Records Processed in Set ' + fileName);
    var apidata = { file: fileName, paths: testResult }

    try {
        $.ajax({
            cache: false
            , url: testAPIURL + '/write'
            , type: 'POST'
            , dataType: 'json'
            , data: JSON.stringify(apidata)
            , success: function (data) {
                window.location.href = "#!/content/test";
                console.log("Path verified");
                console.log(data);
                $('#successResults').show();
                $('#waitingResults').hide();
                appmodel.Form().ResultData.push(data);
            }
            , error: function (type) {
                console.log("ERROR!!" + type.responseText)
            }
        });
    } catch (e) {
        console.log("ERROR!!" + e)
    }
}

function calculateElapsedTime(startTime, endTime) {
    var timeDiff = endTime - startTime;
    // strip the ms
    timeDiff /= 1000;

    // get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    if (hours > 0) {
        return "Hours:" + hours + " Min:" + minutes + " Seconds:" + seconds;
    }
    else if (minutes > 0) {
        return "Min:" + minutes + " Seconds:" + seconds;
    } else {
        return "Seconds:" + seconds;
    }
}

function Run() {
	//$(".loader").show();
    appmodel.Form().ResultData([]);
    appmodel.Form().ProcessLog([]);
    var url = testAPIURL +'/read?file=';
    var urls = [];
    appmodel.Form().SelectedSet().forEach(function (element) {
        urls.push(url + element);
    })
    $('#btnRunTest').attr('disabled',true);
    console.log(urls);
    testAPI(urls);
    window.location.href = "#!/content/test";
}

function getAllSet() {
        try {
            $.ajax({
                cache: false
                , url: testAPIURL + '/getAllFiles'
                , type: 'get'
                , data: null
                , success: function (data) {
                    appmodel.Form().AvailableSets(JSON.parse(data).sort(function(e1,e2) {
                        if(parseFloat(e1.id) > parseFloat(e2.id)){return 1;}else{return -1}
                    }));
                }
                , error: function (type) {
                    console.log("ERROR!!" + type.responseText);
                }
            });
        } catch (e) {
            console.log("ERROR!!" + e);
        }
}

$(document).ready(function () {
    getAllSet();
});