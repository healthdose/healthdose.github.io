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
        var concern = $('#health-concern-dropdown').val();
        var landing_create_btn = $('#original-create-btn').val();
        var profile_create_btn = $('#profile-edit-btn').val();
          
        $('#profile-name').text(entered_name);
        $('.profile-gender-age').text(gender + " | " + age);
        // $('#welcome-text').text("Welcome, " + entered_name);
        $('#landing-user-name').text(entered_name);
      
        $('#detail-name').text(entered_name);
        $('#detail-height').text(height);
        $('#detail-weight').text(weight);
        $('#detail-allergy').text(allergy);
        $('#detail-health-concern').text(concern);

        // Change Create Profile to Edit Profile once their profile has been set
        $('#original-create-btn').text('Edit Profile');
        $('#profile-edit-btn').text('Edit Profile');

        $('.edit-profile-container').fadeOut();
    });

    $('#profile-edit-btn').click(function() {
        $('.edit-profile-container').fadeIn();
    });

    /*// Filter recipe cards for inputs; health concerns
    $('#health-concern-textField').keyup(function() {
        var filter = $(this).val();

        $('.showrecipe-container').each(function() {
            if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });*/

    // Filter recipe cards with drop down; health concerns
    $('#health-concern-dropdown').change(function() {
        $('.showrecipe-container').hide();
        $('.' + $(this).val()).show();
    });

    // Make whole recipe card (div) clickable
    $('.showrecipe-container').click(function() {
        window.location = $(this).find('.view-recipe').attr('href');
        return false;
    });


    /*// Click Handler; Registers to google analytics once the button is clicked
    $("#original-create-btn").click(function() { // click handler for original design; create button
        console.log("Create Profile button clicked original"); // fix smart quote from slide!
        // tracker code here, refer to slide #26 and #27
        tracker = ga.getAll()[0];
        tracker.send('event', 'Create Profile', 'click');
    });

    $(".view-recipes-og").click(function() { // click handler for original design; Go to recipes button
        console.log("Go to Recipes button clicked original");
        // tracker code here, refer to slide #26 and #27
        tracker = ga.getAll()[0];
        tracker.send('event', 'Go to Recipes', 'click');
    });

    $(".create-profile-btn").click(function() { // click handler for redesign; create button
        console.log("Create Profile button clicked redesign");
        // tracker code here, refer to slide #26 and #27
        tracker = ga.getAll()[0];
        tracker.send('event', 'Create Profile', 'click');
    });

    $(".view-recipes-redesign").click(function() { // click handler for redesign; Go to recipes button
        console.log("Go to Recipes button clicked redesign");
        // tracker code here, refer to slide #26 and #27
        tracker = ga.getAll()[0];
        tracker.send('event', 'Go to Recipes', 'click');
    });*/
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
