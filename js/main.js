//Sidebar menu toggle
$(document).ready(function() {
    $('.sidebar-btn').click(function() {
        $('.sidebar').toggleClass('visible');
    });
});

//page change
$(function(){
    // bind change event to select
    $('#select-custom-1').bind('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            $.mobile.changePage( url, { transition: "slide", changeHash: false });
        }
        return false;
    });
});