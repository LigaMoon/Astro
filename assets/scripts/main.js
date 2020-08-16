var constellationList = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpius",
    "Sagittarius"
];  

let heading;

function twoFontHeading( ) {
    $( '.two-font-heading' ).each( function( ) {
        let headingText = $(this).text();
        heading = $(this);
        changeTitle( headingText );
    })
}

function makeGraphicButtons( ) {
    let container = $( '.constellation-button-container' );
    constellationList.forEach( function( buttonName ) {
        let buttonNameLowercase = buttonName.toLowerCase();
        container.append( `
                    <div class="col-4 col-sm-2 mb-3 text-center">
                        <p class="mb-1 cursive">${ buttonName }</p>
                        <button class="graphic-button  ${buttonNameLowercase}">
                            <a href="./constellations.html#constellation-container"></a>
                        </button>
                    </div>` );

        $( `.${buttonNameLowercase}`).css('background-image',`url('assets/images/constellations/${ buttonNameLowercase }_yellow.PNG')`);
    });
}

function buttonFunction( ) {
    $( '.graphic-button').click( function() {
        let name = $( this ).prev().text();
        heading = $( '.model-name' );
        changeTitle( name );
        changeGraphic ( name );
    });
}

function changeGraphic ( name ) {
    zodiac = name.toLowerCase();
    $('.zodiac-sign').html(`<img src="./assets/images/zodiac/${zodiac}_yellowzodiac.PNG" alt="A graphic of the ${zodiac} zodiac sign">`);
    $('.constellation-sign').html(`<img src="./assets/images/constellations/${zodiac}_yellow.PNG" alt="A graphic of the ${zodiac} constellation">`);
}

function changeTitle( name ) {
    let halfIndex, leftText, rightText;
    if ( name.indexOf(" ") === -1) {
        halfIndex = Math.round(name.length / 2);
        leftText = name.slice(0, halfIndex);
        rightText = name.slice(halfIndex, name.length);
    } else {
        let words = name.split(" ");
        leftText = `${words[0]} `;
        rightText = words[1];
    }

    heading.html(`${leftText}<span class="cursive lowercase">${rightText}</span>`);
}

// Append star icons to all star buttons on all pages
function starIcon( ) {
    let starButton = $( '.star-button' );
    starButton.each(function() {
        let buttonValue = $(this).text();
        $(this).html(`<div class="nav-icon"></div>${buttonValue}`);
    });
}

starIcon( );
twoFontHeading( );
makeGraphicButtons( );
buttonFunction( );