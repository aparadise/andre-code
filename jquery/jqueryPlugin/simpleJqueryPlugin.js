//jquery plugin

$.fn.greenify = function() {
    this.css( "color", "green" );
};
 
$( "a" ).greenify(); // Makes all the links green.