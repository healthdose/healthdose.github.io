//side menu toggle
$(document).ready(function() {
    $('.sidebar-btn').click(function() {
        $('.sidebar').toggleClass('visible');
    });
});


//filter dropdown
//toggles button on user click
function myFunction() {
    document.getElementById("show-filter").classList.toggle("show");
}

//close filter when user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.filterbtn')) {

    var dropdowns = document.getElementsByClassName("filter-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}