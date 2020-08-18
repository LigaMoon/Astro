
<h1 align="center">ASTRO</h1>
<h1 align="center"><img src="" /></h1>

 <a href=""><img src="" width="25px" /></a> :point_left: Live website

  <a href=""><img src="./assets/images/readme-images/githublogo.png" width="25px" /></a> :point_left: GitHub Repository
 
 ## About

This website connects Astronomy and Astrology while highlighting unique aspects of both. It provides an entertaining way to get familiar with either through exploring 12 zodiacs and how they're represented in each field. 

## Table of Contents

[User Experience (UX)](#UX)

[Features](#features)

[Technologies Used](#technologies)

[Testing](#testing)

[Deployment](#deployment)

[Known Bugs](#bugs)

[Credits](#credits)



<a name="UX"></a>
## User Experience (UX)

### User Stories
- #### As a visitor looking for entertainment.
    1. I want to easily understand the purpose and the layout of the site without additional instructions needed.
    1. I want to intuitively navigate through the site to browse the content.
    1. I want to be able to interact with the site engagingly.
- #### As a visitor interested in Astronomy and constellations.
    1. I want to easily find the relevant page.
    1. I want to be able to navigate through different constellations easily.
    1. I want to be able to view each constellation in 3D and interact with it.
    1. I want to see details about starts that make up each constellation.
    1. I want to see details about each constellation.
- #### As a visitor interested in Astrology and zodiacs.
    1. I want to easily find the relevant page.
    1. I want to see more facts about each zodiac.
    1. I want to find out what dates each zodiac corresponds to.
    1. I want to read my horoscope.
- #### As a returning visitor looking for the daily horoscope.
    1. I want the site to be responsive on all devices and across all browsers.
    1. I want to access my daily horoscope.
    1. I want to be able to quickly access the needed information.
- #### As a visitor looking to learn more about Astronomy, Astrology, or both.
    1. I want the text to be easily readable.
    1. I want concise information that's easily understandable.
    1. I want to be able to find out what is my zodiac.
    1. I want to understand what is the difference and the connection between Astrology and Astronomy.


### Design


- #### Color scheme
    - Since the content of this website is space-related (astronomy and astrology), 
    I aimed to create a 'night-sky' color theme. To achieve this I opted to use a dark background with light text/graphics 
    and even darker accent color while maintaining high enough contrast for readability. 
    I chose to keep the color scheme minimal to create a classy, timeless, and almost mysterious look and create a sense of wonder in the user. 
    The main colors used are Prussian Blue (#1F293B), Light Goldenrod Yellow (#FFFFD6) and as an accent color, 
    I used Rich Black FOGRA 29 (#131A27). To pick the exact shades of the colors I used  [coolors](https://coolors.co/) 
    color palette generator.

        <img src="./assets/images/readme/colorscheme.png" height="40px" />

- #### Typography
    - The main font used across all pages is a serif type of font 'Lora' with serif as a fallback font. 
    This font is meant to increase the quality and speed of readability to counteract possible difficulties of reading 
    light text on a dark background.

        <img src="./assets/images/readme/lora.png" height="20px" />

    - The secondary font used is a decorative font 'Elina'. This font is used as a style choice in headings as 
    well as an accent throughout pages. This font is cursive and very elegant and is meant to add to the classy look of the page.

        <img src="./assets/images/readme/elina.png" height="20px" />

- #### Imagery
    - The main purpose of the graphics used is to be informative as they accurately illustrate the zodiac sign or the constellation in 2D.
    The secondary purpose of the minority of graphics used is decorative, such as the star on the home page. However, 
    all the graphics were custom designed and drawn either by me or by a graphic designer 
    Claire Schorman and were meant to elevate the design of the page.
    - No pictures were used in making of this website.

- #### Wireframes
    - Wireframes were created using Adobe Xd
    - [Mobile Wireframes](https://xd.adobe.com/view/2a79d65c-c500-4c4f-9b90-1c46911d4481-7f2a/) :point_left:

         <img src="./assets/images/readme/wireframes-mobile.png" />

    - [Tablet Wireframes](https://xd.adobe.com/view/ba88fbbf-32f5-4e31-a0ba-96a6c10e95c6-efdb/) :point_left:

         <img src="./assets/images/readme/wireframes-tablet.png" />

    - [Desktop Wireframes](https://xd.adobe.com/view/671f703f-ebfc-4020-ba17-d3a65926fb3b-324c/) :point_left:

         <img src="./assets/images/readme/wireframes-desktop.png" />

- #### Mockups
    - Mockups were created using Adobe Xd
    - [Mobile Wireframes](https://xd.adobe.com/view/3259bb2c-4e92-4f22-b7d1-f9e940c483b3-670a/) :point_left:

         <img src="./assets/images/readme/mockups-mobile.png" />

    - [Tablet Wireframes](https://xd.adobe.com/view/6acb81ec-f1bd-4a86-a230-8b36916d4c4d-3f98/) :point_left:

         <img src="./assets/images/readme/mockups-tablet.png" />

    - [Desktop Wireframes](https://xd.adobe.com/view/be323bd5-5574-4702-9f7b-52ae8c3de42e-eb61/) :point_left:

         <img src="./assets/images/readme/mockups-desktop.png" />



 <a name="features"></a>
## Features

### Existing Features

#### Common Features Across All Pages
- [x] **Header** - allows user to easily navigate across all pages
    - The header itself is positioned to always be visible (positioned absolutely using Bootstrap 'sticky-top' class) at the top of the screen (mobile, tablet, and desktop) which allows visitors to find it quickly.
    - The brand logo as well as brand word is positioned on the left and is visible on all pages, it serves as a home page link so the user can find her/his way back if needed.
    - Navigation is included in the header to let the user intuitively locate it.
    - Navigation links become lighter and have a star icon become visible (only in desktop) when hovered over. This lets the visitor know that it is clickable.
    - The navigation link, matching the page that the user is visiting, stays 'active'(which matches the hover effect from the previous point) to let the user quickly establish which page she/he is visiting.
    - Navigation links collapse in a personalized hamburger menu when viewed in mobile sizes.
    - Colors have been chosen with optimum contrast in mind to be pleasant to the eye.
- [x] **Headings**
    - All main heading styles have been applied using JavaScript ([main.js](https://github.com/liigalized/astro/blob/master/assets/scripts/main.js)) to avoid cluttering HTML and provide consistency throughout all pages.
- [x] **Links/buttons**
    - All links and buttons have been styled uniformly to let the user know without hovering over that those are clickable.
    - When the user hovers over, the link/button text increase in brightness.
    - Most of the links/buttons (with two purposeful exceptions), have the page brand star icon become visible on the left side when hovered over.
    - The star graphic on all links is generated in JavaScript ([main.js](https://github.com/liigalized/astro/blob/master/assets/scripts/main.js)) to avoid cluttering HTML file and provide consistency throughout all pages.
- [x] **Responsiveness**
    - All Pages are responsive and provide the same functionality regardless of the viewport size.
- [x] **Accessibility**
    - There are no flashing images or sounds to hinder the user experience.
    - All button graphics used, have been added as a background to prevent screen readers from having to read out each image description.
- [x] **Graphic Buttons**
    - When a button, displaying a constellation or zodiac sign, is clicked, it changes the heading in the main container and the icon related to the main container (if any).
    - This functionality is done by using JavaScript ([main.js](https://github.com/liigalized/astro/blob/master/assets/scripts/main.js))
    - Graphic buttons are generated using JavaScript ([main.js](https://github.com/liigalized/astro/blob/master/assets/scripts/main.js))
- [x] **Footer**
    - Footer has been designed, using Bootstrap, to always be at the bottom of the page, regardless of the amount of content. This aids the overall user experience.
    - Content has been broken down into two lines to avoid overcrowding.
    - Social links have been grouped to signify their connection and, once clicked, redirect the user to a new page.
    - All links when hovered over an increase in brightness (opacity) to intuitively signal that they are clickable.
    - 'About' button linked to the 'About' section on the 'Home' page.


### Specific to Pages
- [x] **Home**
    - The main background star graphic helps to set the mood of the website and acts as a separator for the astrology and astronomy sections. It changes size as the background is resized.
    - Short descriptions of what the 'Constellations' and the 'Codiac signs' pages feature, as well as the call-to-action button attached for the user to be able to easily navigate if they are interested.
    - 'About' section providing more information about what Astrology and Astronomy are and the connection between both.
    - Clickable headings of each 'About' topic, when clicked, the relevant paragraph is displayed while others are hidden. This is achieved using JavaScript ([index.js](https://github.com/liigalized/astro/blob/master/assets/scripts/index.js))
- [x] **Constellations**
    - Short page describer that provides the user some information about the page and what the models are.
    - Graphic buttons displaying a 2D view of each constellation, that let the user select which constellation model they wish to view.
    - Instructions for the user on how to use the 3D models.
    - 3D models of each constellation that are interactive (clickable, zoomable, draggable).
    - Each star allows the user to click on it to display more information in the data container next to it.
    - When hovered over, each star increases in brightness to indicate which star is hovered over.
    - Instructions button at the bottom fo the 3D model container to allow the user to easily find the instructions in case they are unsure how to operate the model.
    - A Reset button allows the user to easily reset the original view of the constellation in case it has been distorted too much.
    - Data container dynamically changes information regarding what constellation and what star has been, the reset button resets the star data as well.
    - A short paragraph at the bottom of the page containing a link so that the user can easily navigate to the zodiac page.
    - All functionality (apart from the links) has been done in JavaScript ([models.js](https://github.com/liigalized/astro/blob/master/assets/scripts/models.js)) and the models have been created using the [Three.js](https://threejs.org/).
- [x] **Zodiac Signs**
    - Short page describer that provides the user information about the zodiac signs.
    - Graphic buttons displaying each zodiac sign, that lets the user select which zodiac sign they would like to learn more about.
    - A dynamic heading and icon that is populated once the user selects the zodiac sign. This lets the user immediately get a validation that the correct zodiac sign has been selected.
    - Daily Horoscope, Lucky Number, and Lucky Color fields that are populated using (aztro API)[https://rapidapi.com/sameer.kumar/api/aztro].
    - Daily Horoscope is updated daily which provides the user with a reason to return to the website daily.
    - A short paragraph at the bottom of the page containing a link so that the user can easily navigate to the zodiac page.
    - All functionality is achieved by using JavaScript([zodiac.js](https://github.com/liigalized/astro/blob/master/assets/scripts/zodiac.js)).
- [x] **Calculator**
    - This page allows the user to find out what zodiac sign they are, in case they are not familiar with it.
    - Month selector and Day selector that is populated with a precise number of days depending on what month the user selected. This helps the user to chose an accurate date.
    - A call-to-action button that displays the relevant zodiac/constellation name, zodiac sign and constellation sign at the bottom.
    - Zodiac sign and Constellation sign graphics are buttons that bring the user to the relevant page, moreover, there are page buttons underneath the graphics for added clarity.
    - The functionality was achieved by using JavaScript ([calculator.js](https://github.com/liigalized/astro/blob/master/assets/scripts/calculator.js))

### Future Features
 
- [ ] 

<a name="technologies"></a>
## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://www.javascript.com/)

### Frameworks, Libraries and Programs Used

- 

<a name="#testing"></a>
## Testing

 ### Functionality Testing
- #### 
    - 



### CSS3 validator - Pass

<a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fliigalized.github.io%2FMS1_boredom_guide%2Fassets%2Fstyles%2Fmain.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss"
        alt="Valid CSS!">
</a> :point_left: Results


### HTML5 validator
- 

### Usability Testing
- To test the ease of navigation, this website was shared with few friends of different ages and different levels of computer/smart device knowledge. There were no issues identified regarding the simplicity of navigating the website.
- The testers also verified that all buttons, links, hamburger menu and photo carousel work correctly, intuitively and as expected

### Compatibility Testing
- Browser Compatibility

    | Screen size\Browser | Safari           | Opera            | Microsoft Edge   | Chrome           | Firefox          | Internet Explorer |
    | --------------------|:----------------:|:----------------:|:----------------:|:----------------:|:----------------:|:-----------------:|
    | Mobile              |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| Not Tested        |
    | Desktop             |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| Not Tested        |
    | Tablet              |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| Not Tested        |

- OS Compatibility was tested on iOS 13.4.1, Android 10.0, MacOS Catalina, iPadOS 13.4.1 and Windows 10. It is yet to be tested on Unix, Linux or Solaris Operating Systems.
- The devices used in this testing include Macbook Pro, Toshiba laptop, iPad Pro, iPhone Xr, Xiaomi 3, HTC 11, iPhone 8 and other android mobile phones.
- The website was exhaustively tested for responsiveness on [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools). Different viewport sizes were simulated ranging from as small as iPhone 5 (320px) to large desktop sizes (1200px and above).

### Performance Testing
- 




### Testing User Stories 
- #### 
    1.
- #### 
    1. 
- #### 
    1.
- #### 
    1.



<a name="deployment"></a>
## Deployment

### Publishing
This website was published using [GitHub Pages](https://pages.github.com/). The procedure is outlined below.
1. Go to the GitHub website and log in.
2. On the left-hand side, you'll see all your repositories, select the appropriate one. ([Repository](https://github.com/liigalized/MS1_boredom_guide) used for this project).
3. Under the name of your chosen Repository you will see a ribbon of selections, click on 'Settings' located on the right hand side.
<img src="./assets/images/readme-images/pages.png" height="35px" />
4. Scroll down till you see 'GitHub Pages' heading.
5. Under the 'Source' click on the dropdown and select 'master branch'
6. The page will reload and you'll see the link of your published page displayed under 'GitHub' pages.
7. It takes a few minutes for the site to be published, wait until the background of your link changes to a green color before trying to open it.

### Forking
If you wish to contribute to this website you can Fork it without affecting the main branch by following the procedure outlined below.
1. Go to the GitHub website and log in.
2. Locate the [Repository](https://github.com/liigalized/MS1_boredom_guide) used for this project.
3. On the right-hand side of the Repository name, you'll see the 'Fork' button. It's located next to the 'Star' and 'Watch' buttons.
<img src="./assets/images/readme-images/fork.png" height="35px" />
4. This will create a copy in your personal repository.
5. Once you're finished making changes you can locate the 'New Pull Request' button just above the file listing in the original repository.

### Cloning 
If you wish to clone or download this repository to your local device you can follow the procedure outlined below.
1. Go to the GitHub website and log in.
2. Locate the [Repository](https://github.com/liigalized/...) used for this project.
3. Under the Repository name locate 'Clone or Download' button in green.
<img src="./assets/images/readme-images/clone.png" height="35px" />
4. To clone the repository using HTTPS click the link under "Clone with HTTPS".
5. Open your Terminal and go to a directory where you want the cloned directory to be copied in.
6. Type `Git Clone` and paste the URL you copied from the GitHub.
7. To create your local clone press `Enter`

<a name="bugs"></a>
## Known Bugs



<a name="credits"></a>
## Credits

### Code :floppy_disk:

- 

### Content :book:

- 


### Media :clapper:
- 


### Acknowledgements

- 




