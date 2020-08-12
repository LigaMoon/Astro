
$( '.graphic-button').click( function() {
    let name = $( this ).prev().text();
    changeTitle( name );
    changeGraphic ( name );
});



function changeGraphic ( name ) {
    zodiac = name.toLowerCase();
    $('.zodiac-sign').html(`<img src="./assets/images/zodiac/${zodiac}_yellowzodiac.PNG" alt="A graphic of the ${zodiac} zodiac sign">`);
    $('.constellation-sign').html(`<img src="./assets/images/constellations/${zodiac}_yellow.PNG" alt="A graphic of the ${zodiac} constellation">`);

}

function changeTitle( name ) {
    let halfIndex = Math.round(name.length / 2);
    let leftText = name.slice(0, halfIndex);
    let rightText = name.slice(halfIndex, name.length);
    $('.model-name').html(`${leftText}<span class="sub-cursive-size lowercase heading-cursive">${rightText}</span>`);
}