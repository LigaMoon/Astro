// ------------------------ZODIAC PAGE AND HOROSCOPE API-----------------------

// Declaring variables
let buttons = $('.graphic-button');

// Adds text retrieved from API into selected elements
function getData( description, number, color, zodiacDate ) {
    $('#horoscope-text').text(description);
    $('#lucky-number').text(number);
    $('#lucky-color').text(color);
    $('.horoscope-date').text(zodiacDate);
}

// Http request function retrieving API data
function newRequest ( zodiac ) {
    let request = new XMLHttpRequest( );
    request.open("POST", `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${zodiac}&day=today`);
    request.setRequestHeader("x-rapidapi-host", "sameer-kumar-aztro-v1.p.rapidapi.com");
    request.setRequestHeader("x-rapidapi-key", "95ca44922bmshb87c3bdfad18970p138ae0jsn84bca49e4ea1");
    request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    request.onload = function( ) {
        var data = JSON.parse( this.response );
        if(request.readyState == 4 && request.status == 200 ) {
            let description = data.description;
            let number = data.lucky_number;
            let color = data.color;
            let zodiacDate = data.date_range;
            getData( description, number, color, zodiacDate);
        } else {
            console.log('error');
        }
    };
    request.send( );
}

// Add a click event to all buttons on the page and call the NewRequest function on id values of those buttons
buttons.on('click', function( ) {
   let zodiac = $(this).attr('id');
    newRequest(zodiac);
});




