/*jslint browser: true*/
/*global $, jQuery, alert*/

//$('.closeall').on('click', function () {
//  //$('.test').collapse('hide');
//    "use strict";
//    alert("ALERT");
//});

$('.closeall').click(function () {
    'use strict';
    //$('.collapse').collapse('hide');
    alert("alert");
});

function collapse_all(term) {
    'use strict';
    $('.collapse').collapse("hide");
    $("#" + term).collapse('show');
}