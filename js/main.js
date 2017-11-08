//Sidebar menu toggle
$(document).ready(function() {
    $('.sidebar-btn').click(function() {
        $('.sidebar').toggleClass('visible');
    });
    
    // New
    //Profile form subit
    $('#form-submit-button').click(function(e) {
        e.preventDefault();
        var entered_name = $('#name-textField').val();
        var age = $('#age-textField').val();
        var gender = $('#gender-dropdown').val();
        var height = $('#height-textField').val();
        var weight = $('#weight-textField').val();
        var allergy = $('#allergy-textField').val();
        var concern = $('#health-concern-textField').val();
          
        $('#profile-name').text(entered_name);
        $('#profile-gender-age').text(gender + " | " + age);
        $('#welcome-text').text("Weclome, " + entered_name);
      
        $('#detail-name').text(entered_name);
        $('#detail-height').text(height);
        $('#detail-weight').text(weight);
        $('#detail-allergy').text(allergy);
        $('#detail-health-concern').text(concern);
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
