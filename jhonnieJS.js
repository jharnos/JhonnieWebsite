$(document).ready(function () { // Once the document has loaded
    $('#contact').show(); // Show contact as our default screen
    
    $('#work').hide(); // Hide everything else
    $('#statement').hide(); // Hide everything else
    
    $('#workButton').click(function () {
        $('#contact').hide();
        $('#statement').hide();
        $('#work').show();
    });
    
    $('#contactButton').click(function () {
        $('#work').hide();
        $('#statement').hide();
        $('#contact').show();
    });
    
    $('#statementButton').click(function () {
        $('#work').hide();
        $('#contact').hide();
        $('#statement').show();
    });
});
