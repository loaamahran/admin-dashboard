!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var s,i,c;function n(e,n){(s(e,n)?c:i)(e,n)}"classList"in document.documentElement?(s=function(e,n){return e.classList.contains(n)},i=function(e,n){e.classList.add(n)},c=function(e,n){e.classList.remove(n)}):(s=function(e,n){return t(n).test(e.className)},i=function(e,n){s(e,n)||(e.className=e.className+" "+n)},c=function(e,n){e.className=e.className.replace(t(n)," ")});var o={hasClass:s,addClass:i,removeClass:c,toggleClass:n,has:s,add:i,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):e.classie=o}(window),$(function(){$(".control").click(function(){$("body").addClass("mode-search"),$(".input-search").focus()}),$(".icon-close").click(function(){$("body").removeClass("mode-search")});var n=document.getElementById("morphsearch"),t=n.querySelector("input.morphsearch-input"),e=n.querySelector("span.morphsearch-close"),s=isAnimating=!1,i=function(e){if("focus"===e.type.toLowerCase()&&s)return!1;morphsearch.getBoundingClientRect();s?(classie.remove(n,"open"),""!==t.value&&setTimeout(function(){classie.add(n,"hideInput"),setTimeout(function(){classie.remove(n,"hideInput"),t.value=""},300)},500),t.blur()):classie.add(n,"open"),s=!s};t.addEventListener("focus",i),e.addEventListener("click",i),document.addEventListener("keydown",function(e){27===(e.keyCode||e.which)&&s&&i(e)}),n.querySelector('button[type="submit"]').addEventListener("click",function(e){e.preventDefault()}),skinChanger(),activateNotificationAndTasksScroll(),setSkinListHeightAndScroll(),setSettingListHeightAndScroll(),$(window).resize(function(){setSkinListHeightAndScroll(),setSettingListHeightAndScroll()})});