// ==UserScript==
// @name         Epilogin
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Login won't die !
// @author       Dimitri Danilov
// @match        https://intra.epitech.eu/*
// @grant        none
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//code.jquery.com/jquery-3.1.1.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main(){
    $(function() {
        'use strict';
      $(window).load(function(e){
        function splitEmail(email) {
              var splited_element = email.split("@");
              var splited_name = splited_element[0].split(".");
              var login = "";
              if (splited_name[0] !== undefined && splited_name[1] !== undefined)
                  return splited_name[1].replace(/\s/g, '').substring(0, 6) + '_' + splited_name[0].replace(/\s/g, '').substring(0, 1);
        }
        $('[data-login]').each(function() {
            var element = $(this).attr('data-login');
            $(this).html(splitEmail(element));
        });
        var element = $(".item.login").children("span").html();
        $(".item.login").children("span").html(" " + splitEmail(element));
      });
    });
}

addJQuery(main);
