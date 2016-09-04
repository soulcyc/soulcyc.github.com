/* ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾ */
/*                          Disconnected | index.js                           */
/*                     Web Browser Game by ??????? ?????                      */
/* -------------------------------------------------------------------------- */

var D;
(function () {
    "use strict";
    
    var text = {
            "0" : "Hello?",
            "1" : "Is someone there?",
            "2" : "I can't hear anything."
        },
        
        tag = function (t) {
            return document.getElementsByTagName(t)[0];
        },
        
        id = function (i) {
            return document.getElementById(i);
        },
        
        clas = function (c) {
            return document.getElementByClassName(c)[0];
        };
        
    D = {
        click : function (target) { // On player click
            var prevAttr = id(target).getAttribute('data-on'),
                newAttr = prevAttr === "1" ? "0" : "1";

            id(target).setAttribute('data-on', newAttr);
        }
    };
}());
