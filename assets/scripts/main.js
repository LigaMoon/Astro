
let buttons = $('.graphic-button');
//add a click event to all buttons
buttons.on('click', function( ) {
   let zodiac = $(this).attr('id');
    newRequest(zodiac);
    changeZodiac ( zodiac );
})

// http request function
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
    }
    request.send( );
}

function getData( description, number, color, zodiacDate ) {
    $('#horoscope-text').text(description);
    $('#lucky-number').text(number);
    $('#lucky-color').text(color);
    $('.horoscope-date').text(zodiacDate);
}


function changeZodiac ( zodiac ) {
    $('.zodiac-sign').html(`<img src="./assets/images/zodiac/${zodiac}_yellowzodiac.PNG" alt="A graphic of the Capricornus zodiac sign">`);
    
    let halfIndex = Math.round(zodiac.length / 2);
    let leftText = zodiac.slice(0, halfIndex);
    let rightText = zodiac.slice(halfIndex, zodiac.length);

$('#model-name').html(`${leftText}<span class="sub-cursive-size lowercase heading-cursive">${rightText}</span>`);

}