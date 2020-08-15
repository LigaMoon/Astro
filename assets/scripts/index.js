let astroHeading = $('.astro-about-heading');

astroHeading.click(function(){
    astroHeading.removeClass('heading-active');
    $(this).addClass('heading-active');


    let idString = $(this).attr('id');
    let idSplit = idString.split("-");
    let newId = `#${idSplit[0]}-description`;
    
    $('.astro-about-description').removeClass('description-active').hide();
    $(newId).hide().fadeIn(1500).addClass('description-active');
})
