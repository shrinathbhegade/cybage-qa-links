/*!
 App JS
 Copyright © 2015-2016 Cybage Software Pvt. Ltd
 This file contains the functional code for web and mobile application.
 Licensed under the Cybage license.
 
 */
//Declare Common code (I)
var isNativeApplication = 1 === 2; //defaulting to false as the app is web only platform. `(document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);`
var focusMode = false;
//End Common code (I)
var newWindowOpen = function(url){
    if(isNativeApplication){
        var ref = window.open(url, '_system', 'location=yes');
        var myCallback = function(event) {}
        ref.addEventListener('loadstart', myCallback);
        ref.addEventListener('loadstop', myCallback);
        ref.addEventListener('loaderror', myCallback);
        ref.addEventListener('exit', myCallback);
    }
    else{
        window.open(url, '_blank');
    }
};
dateFormatter = function(i){
    if (i < 10) {
        i = '0' + i;
    }else{
        i = i;
    }
    return i;
};


$(function () {
  $('[autofocus]:not(:focus)').eq(0).trigger("focus");
  });

var scorebarValign = function () {
    $(document).foundation('equalizer','reflow');
    var containerHeight = $('.patient-risk').height();
    var childHeight = $('.scorebar-panel-left').height();
    var margin = (containerHeight-childHeight)/2;
    $('.scorebar-panel').css('padding-top', margin);
};

var tabchange = function (data) {
    $('.header .tabs li').removeClass('selected');
    $('.footer .tabs li').removeClass('selected');
    var string = '#' + data.page.currentId + 'Tab';
    $(string).addClass('selected active');
    if(data.page.currentId === 'recommendation'){
        scorebarValign();
    }
    resetTooltip();    
};

var resetTooltip = function(){
    if($('.tip-top').hasClass('open') || $('.tip-left').hasClass('open')){
        $('.tip-top, .tip-left').removeClass('open');
        $('.tooltip').css('display', 'none');
    }
};

var pageScrollTop = function () {
    $(window).scrollTop(0);
    if(!isNativeApplication) {
        pageAlign();
    }
};
var pageAlign = function(){
    if(!isNativeApplication) {
        var bodyHeight = $('body').height();
        var containerHeight = $('.resources-page').height();
        if(bodyHeight > containerHeight){
            var pageHeight = (bodyHeight - $('.app-nav').height() + $('.footer').height());
            $('.resources-page').height(pageHeight);
        }
    }
}
/*This function is used to load common functions, to initialize/declare events on certain UI elements.
 */
$(function () {
    $('.tip-top, .tip-left').on('touchend', function () {
        var dataAttr = $(this).attr('data-selector');
        if (dataAttr === undefined) {
            dataAttr = $(this).attr('id');
        }
        if ($(this).hasClass('open') && dataAttr !== undefined) {
            $('.tip-top, .tip-left').removeClass('open');
            $('span.tip-top, span.tip-left').css('display', 'none');
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
  /*This function is for handling score bar UI on window resize.
   */
  $(window).on("resize",(function () {
    scorebarValign();
    resetTooltip();
  }));
  $(window).on("orientationchange",function(){
    scorebarValign();
    resetTooltip();      
  });
  
  $('input').on("keypress",(function(e) {
      if ((e.key == "Enter") || (e.key == undefined)){
      $(this).trigger("blur");
      return false;
      }
  }));
  
});