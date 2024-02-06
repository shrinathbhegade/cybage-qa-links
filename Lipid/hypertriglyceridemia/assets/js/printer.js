function Printer() {
    var self = this;
    
    self.printType = {
        paper: 1,
        pdf: 2
    }
    
    //private method to print to PDF
    var printPDF = function(printerStage,fileName) {
        var clone = null;
        
        var a4 = [595.28, 841.89];  //width, height 
        document.body.append(printerStage);
        $(printerStage).width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        html2canvas(printerStage).then(function(canvas) {
           var img = canvas.toDataURL("image/png"),
               doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
               });
            doc.addPage();
            doc.setPage(1);
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save(fileName+".pdf");
            document.body.removeChild(printerStage);
        });
    }
    
    //private method to print to Paper
    var printPaper = function(printerStage) {
        var isNativeApplication = (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
        
        var children = document.head.children;
        var clone = null;
        var newWindow, newBody, newHead, newHTMl;

        if(!isNativeApplication) {
            newWindow = document.createElement("iframe");
            document.body.appendChild(newWindow);  
            setTimeout(function() {
                newWindow.contentWindow.document.head.appendChild(document.head.cloneNode(true));
                newWindow.contentWindow.document.body.appendChild(printerStage);
                newWindow.contentWindow.setTimeout(function() { 
                    if(!newWindow.contentWindow.document.execCommand("print", false, null)) {
                        newWindow.contentWindow.print();
                    }
                    document.body.removeChild(newWindow);
                }, 500);
            },500);
            
        }
        else {
            newHead = document.head.cloneNode(true);
            newHTML = document.createElement("html");
            newHTML.appendChild(newHead);
            newBody = document.createElement("body");
            newBody.appendChild(printerStage);
            newHTML.appendChild(newBody);
            // cordova.plugins.printer.print(newHTML, '', function() {
            // });
            cordova.plugins.printer.print();
        }
    }
    
    
    self.print = function(content, mode, fileName) {
        if(typeof mode != "number")
            mode = 1;
        if(mode==self.printType.pdf) {
            fileName = (fileName==undefined) ? "default" : fileName;
            printPDF(content,fileName);
        }
        else {
            printPaper(content);
        }
    }
    
}
