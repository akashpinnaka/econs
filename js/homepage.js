$(document).ready(function() {
  $('a.file-upload-button').on('click', function(e) {
    e.preventDefault();
    $('input[type="file"].file-upload-button-hidden').click();
  });
});