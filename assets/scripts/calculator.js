function calendar ( ) {
    let calendar = [
        ["Month", "Day"],
        ["January", 31],
        ["February", 28],
        ["March", 31],
        ["April", 30],
        ["May", 31],
        ["June", 30],
        ["July", 31],
        ["August", 31],
        ["September", 30],
        ["October", 31],
        ["November", 30],
        ["December", 31]
    ];
   
    createMonth( calendar );
    createDay( calendar );
}


function createMonth ( calendar ) {
    calendar.forEach( function( date ) {
        $( '#month' ).append(`<option>${date[0]}</option`);
    })
}

function createDay ( calendar ) {
    $( '#month' ).change( function( ) {
       let returnedValue =  $(this).val();
       $( '#day' ).html("");
       if( returnedValue === "Month") {
            $( '#day' ).append(`<option>Please Select Valid Month</option`);
       } else {
           calendar.forEach( function( date ) {
               if ( returnedValue === date[0]){
                   let numberOfDays = date[1];
                   for ( let i = 1; i <= numberOfDays; i ++ ) {
                        $( '#day' ).append(`<option>${i}</option`);
                   }
               } 
           });
       }
    });  
}

calendar();
