$(document).ready(function() {
    //Sidebar menu toggle
    $('.sidebar-btn').click(function(e) { // opens sidebar when hamburger menu is clicked
        e.stopPropagation();
        $('.sidebar').toggleClass('visible');
    });

    $('.sidebar').click(function(e) { // prevents closing sidebar when sidebar body is clicked
        e.stopPropagation();
    })

    $('body').click(function() { // close sidebar when body is clicked or page is changed
        $('.sidebar').removeClass('visible');
    });
    
    //Profile form submit
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
        $('#welcome-text').text("Welcome, " + entered_name);
      
        $('#detail-name').text(entered_name);
        $('#detail-height').text(height);
        $('#detail-weight').text(weight);
        $('#detail-allergy').text(allergy);
        $('#detail-health-concern').text(concern);
    });

    // Filter recipe cards
    $('#health-concern-textField').keyup(function() {
        var filter = $(this).val();

        $('.showrecipe-container').each(function() {
            if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });

    // Make whole recipe card (div) clickable
    $('.showrecipe-container').click(function() {
        window.location = $(this).find('.view-recipe').attr('href');
        return false;
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
