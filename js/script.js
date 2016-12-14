$(document).ready(function() {
  $('#header-login-button').on('click', function(e) {
    e.preventDefault();
    $('#login-form-dropdown').fadeToggle();
    $('.main-content .mask').fadeToggle();
  });
});