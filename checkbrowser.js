if (navigator.userAgent.search(/Safari/) > 0) { a = 'Safari' };
if (navigator.userAgent.search(/Firefox/) > 0) { a = 'MozillaFirefox' };
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) { a = 'Internet Explorer' };
if (navigator.userAgent.search(/Chrome/) > 0) { a = 'Google Chrome' };
if (navigator.userAgent.search(/YaBrowser/) > 0) { a = 'Яндекс браузер' };
if (navigator.userAgent.search(/OPR/) > 0) { a = 'Opera' };
if (navigator.userAgent.search(/Edge/) > 0) { a = 'Microsoft Edge' };
if (a == 'Internet Explorer')
    document.location.href = "invalidbrowser.html";