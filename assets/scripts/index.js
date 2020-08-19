// Declaring variables
let astroHeading = $( '.astro-about-heading' );

// Selects heading and fades in the paragraph attached to it + fades out the previous
astroHeading.click( function( ) {
    astroHeading.removeClass( 'heading-active' );
    $( this ).addClass( 'heading-active' );

    let idString = $( this ).attr( 'id' );
    let idSplit = idString.split( "-" );
    let newId = `#${ idSplit[0] }-description`;
    
    $( '.astro-about-description' ).removeClass( 'description-active' ).hide( );
    $( newId ).hide( ).fadeIn( 1500 ).addClass( 'description-active') ;
});

