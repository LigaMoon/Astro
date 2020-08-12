// Date formats used are 1MMDD

let calendar = [
    ["Month", "Day"],
    ["January", 31, 101],
    ["February", 28, 102],
    ["March", 31, 103],
    ["April", 30, 104],
    ["May", 31, 105],
    ["June", 30, 106],
    ["July", 31, 107],
    ["August", 31, 108],
    ["September", 30, 109],
    ["October", 31, 110],
    ["November", 30, 111],
    ["December", 31, 112]
];

let zodiacSigns = [
    {
        name: 'capricorn',
        startDate: 11222,
        endDate: 10119
    },
    {
        name: 'aquarius',
        startDate: 10120,
        endDate: 10218
    },
    {
        name: 'pisces',
        startDate: 10219,
        endDate: 10320
    },
    {
        name: 'aries',
        startDate: 10321,
        endDate: 10420
    },
    {
        name: 'taurus',
        startDate: 10421,
        endDate: 10520
    },
    {
        name: 'gemini',
        startDate: 10521,
        endDate: 10621
    },
    {
        name: 'cancer',
        startDate: 10622,
        endDate: 10722
    },
    {
        name: 'leo',
        startDate: 10723,
        endDate: 10822
    },
    {
        name: 'virgo',
        startDate: 10823,
        endDate: 10922
    },
    {
        name: 'libra',
        startDate: 10923,
        endDate: 11022
    },
    {
        name: 'scorpio',
        startDate: 11023,
        endDate: 11122
    },
    {
        name: 'sagittarius',
        startDate: 11123,
        endDate: 11221
    },
];

let dateValue;



const calculator = ()=> {
    makeDropdowns();

    $( 'select' ).change( function( ) {
        let dayValue = $( '#day' ).val( );
        let monthValue = $( '#month' ).val();
        function filteredByMonth( item ) {
            if( item[0] === monthValue ) {
                return true;
            }
        }
        var filteredMonth = calendar.filter(filteredByMonth)[0][2];
        // let dateValue;
        // if ( dayValue.length === 1) {
            
        dateValue = Number(`${filteredMonth}${dayValue.length === 1 ? '0': ''}${dayValue}`);
        // } else {
            // dateValue = `${filteredMonth}${dayValue}`;
            // dateValue = Number(filteredMonth + dayValue);
        // }
        // console.log(dateValue);
    });
    $( '#find-sign' ).click(() => {
        zodiacSigns.forEach( sign => {
            if( dateValue >= sign.startDate && dateValue <= sign.endDate) {
                let signName = sign.name;
                changeTitle( signName );
                changeGraphic( signName );
            }
        });
    });
}


calculator ();


// function changeZodiac ( zodiac ) {
//     $('.zodiac-sign').html(`<img src="./assets/images/zodiac/${zodiac}_yellowzodiac.PNG" alt="A graphic of the ${zodiac} zodiac sign">`);
//     $('.constellation-sign').html(`<img src="./assets/images/constellations/${zodiac}_yellow.PNG" alt="A graphic of the ${zodiac} constellation sign">`);
    
//     let halfIndex = Math.round(zodiac.length / 2);
//     let leftText = zodiac.slice(0, halfIndex);
//     let rightText = zodiac.slice(halfIndex, zodiac.length);

// $('.model-name').html(`${leftText}<span class="sub-cursive-size lowercase heading-cursive">${rightText}</span>`);
// }



function makeDropdowns ( ) {
    createMonth( calendar );
    createDay( calendar );
}

function createMonth ( cal ) {
    cal.forEach( function( date ) {
        $('#month').append(`<option>${date[0]}</option`);
    })
}

function createDay ( cal ) {
    $( '#month' ).change( function( ) {
       let returnedMonth =  $( this ).val( );
       $( '#day' ).html("");
       if( returnedMonth === "Month") {
            $( '#day' ).append(`<option>Please Select Valid Month</option`);
       } else {
           cal.forEach( function( date ) {
               if ( returnedMonth === date[0]){
                   let numberOfDays = date[1];
                   for ( let i = 1; i <= numberOfDays; i ++ ) {
                       $( '#day' ).append(`<option>${i}</option`);
                   }
               } 
           });
       }
    });  
}

