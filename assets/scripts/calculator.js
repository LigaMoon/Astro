// Declaring and initializing variables

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
        endDate: 11231
    },
    {
        name: 'capricorn',
        startDate: 10101,
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

// function to refresh the fields when page is navigated to - provided by my mentor (line 90 - 101)
function refresh() {
    window.addEventListener( "pageshow", function ( event ) {
        var historyPage = event.persisted ||
        ( typeof window.performance != "undefined" &&
        window.performance.navigation.type === 2 );
        if ( historyPage ) {
            // Handle page restore.
            window.location.reload();
        }
    });
}

//  Creates month dropdowns
const createMonth = cal => {
    cal.forEach(  date => {
        $('#month').append(`<option>${date[0]}</option>`);
    });
};

// Creates Day dropdowns depending on what month was selected, if a valid month has not been selected it will display 'select valid month'
const createDay = cal => {
    $( '#month' ).change( function( ) {
        let returnedMonth =  $( this ).val( );
        $( '#day' ).html("");
       if( returnedMonth === "Month") {
            $( '#day' ).append(`<option>Select Valid Month</option`);
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
};

// Creates dropdowns by calling month and day functions
const makeDropdowns = ( ) => {
    createMonth( calendar );
    createDay( calendar );
};

// Creates dropdowns and when a value is changed, the date is retrieved in a MMMDD format which is compared to start and end dates of each zodiac to return the correct one
const calculator = ()=> {
    makeDropdowns();
    $( 'select' ).change( ( ) => {
        let dayValue = $( '#day' ).val( );
        let monthValue = $( '#month' ).val();
        function filteredByMonth( item ) {
            if( item[0] === monthValue ) {
                return true;
            }
        }
        var filteredMonth = calendar.filter(filteredByMonth)[0][2];   
        dateValue = Number(`${filteredMonth}${dayValue.length === 1 ? '0': ''}${dayValue}`);
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
};

// calling refresh and calculator functions
refresh( );
calculator( );











