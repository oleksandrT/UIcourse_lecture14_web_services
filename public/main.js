var myForm = $('.form form');

myForm.on('submit', function(e) {
    e.preventDefault();
    submitForm(event)
});

function submitForm() {
    var data = { name: "John", location: "Boston" };
    var theMessage = $.trim($("#theMessage").val());
    console.log('theMessage: ', theMessage);

    if(theMessage.length > 0)
    {
        $.ajax({
            method: "POST",
            url: "/",
            //data: data
            data: JSON.stringify({
                message: theMessage
            }),
            contentType: "application/json",
            dataType: 'json'
        })
            .done(function( data ) {
                console.log( "data: " + data.echoMessage );
                
            })
            .fail(function( jqXHR, textStatus ) {
                console.log( "Request failed: " + textStatus );
            });
    }
}
