
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

         <img src="./assets/images/readme/wireframes-mobile.png" height="400px" />

    - [Tablet Wireframes](https://xd.adobe.com/view/ba88fbbf-32f5-4e31-a0ba-96a6c10e95c6-efdb/) :point_left:

         <img src="./assets/images/readme/wireframes-tablet.png" />

    - [Desktop Wireframes](https://xd.adobe.com/view/671f703f-ebfc-4020-ba17-d3a65926fb3b-324c/) :point_left:

         <img src="./assets/images/readme/wireframes-desktop.png" />

- #### Mockups
    - Mockups were created using Adobe Xd
    - [Mobile Wireframes](https://xd.adobe.com/view/3259bb2c-4e92-4f22-b7d1-f9e940c483b3-670a/) :point_left:

         <img src="./assets/images/readme/mockups-mobile.png" height="400px"/>

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
 
- [ ] Light website theme to cater to users who prefer viewing dark text on light backgrounds.
        <img src="./assets/images/readme/mockups-ligh.png" />
- [ ] Have a split home page view that would let the user move the page splitter to reveal either the Astronomy or Astrology sections.
        <img src="./assets/images/readme/mockups-split.png" height="300px" />
    - I have created initial mockups for both features named above ([Mobile](https://xd.adobe.com/view/414ea735-999e-4489-86fa-48abc1b58a15-141d/), [Tablet](https://xd.adobe.com/view/d2cb1b98-c3d2-4c08-862b-4897b602164b-8798/), [Desktop](https://xd.adobe.com/view/d1f04f67-190e-4729-b08d-b5b16bfdca62-84a3/))
- [ ] On the 'Constellations' page, implement additional information (when best visible from a certain location with a map, star's distance from the Earth, brightness) of each star with the option to select 'Basic' or 'Advanced' data. This would allow users to toggle how much information they wish to see.
- [ ] On the 'Zodiac' page, add further data about each zodiac sign, such as zodiac sign matches, mood, and user's lucky time.
- [ ] Add a log-in option that allows the user to have an account and remember their specific details such as certain starts they are interested in, their location, and their zodiac sign.
- [ ] Have the daily horoscope being sent to the user's e-mail if they wish so.

<a name="technologies"></a>
## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://www.javascript.com/)

### Frameworks, Libraries and Programs Used
- [Three.js](https://threejs.org/) - Three.js docs and examples were used to create the constellation models and implement the interactiveness of them. Even though the functionality of most pages was written using jQuery, the models were coded using plain JavaScript. This is due to all docs and examples being in plain JavaScript.
- [RapidAPI](https://rapidapi.com/) - Used to find Astrology API that was used for daily horoscope and other zodiac data.
- [jQuery](https://jquery.com/) - Used in writing most of the functionality in 'Home', 'Zodiac' and 'Calculator' pages. Additionally, some of the clickable elements in Bootstrap, such as collapsable 'hamburger' navbar and collapse element, uses jQuery as well.
- [popper.js](https://popper.js.org/) - Used in some of the clickable elements such as collapsable 'hamburger' navbar and collapse element.
- [Bootstrap v4.5.0](https://getbootstrap.com/) - Used for the responsive layout as well as the navigation bar, hamburger menu and the footer.
- [Font Awesome](https://fontawesome.com/) - Font Awesome was used to add social media icons at the bottom of the page.
- [Google Fonts](https://fonts.google.com/) - Google Fonts was used to import 'Lora' font in the main.css file.
- [Adobe Fonts](https://fonts.adobe.com/) - Adobe Fonts was used to import 'Elina' font which was the accent font in this project and cannot be found on Google Fonts website.
- [Git](https://git-scm.com/) - Git was used to allowing for tracking of any changes in the code and version control.
- [GitPod](https://www.gitpod.io/) - GitPod, connected to GitHub, hosted the coding space and allowed the projected to be committed to the Github repository.
- [Github](https://github.com/) - GitHub is used to host the project files and publish the live website by using Git Pages.
- [Lightroom](https://www.adobe.com/ie/products/photoshop-lightroom.html?gclid=CjwKCAjwwYP2BRBGEiwAkoBpAqomS77OrQwQggC9QPnPACrkLBs-2AcrW9ZUvxbUJnFOgbRGKNeNEhoC95IQAvD_BwE&sdid=88X75SKS&mv=search&ef_id=CjwKCAjwwYP2BRBGEiwAkoBpAqomS77OrQwQggC9QPnPACrkLBs-2AcrW9ZUvxbUJnFOgbRGKNeNEhoC95IQAvD_BwE:G:s&s_kwcid=AL!3085!3!394412108599!e!!g!!lightroom) - Lightroom was used to edit and resize all images.
- [Photoshop](https://www.adobe.com/ie/products/photoshop.html?gclid=CjwKCAjwwYP2BRBGEiwAkoBpAuYIg7JHUAFtnRQB28LDaU5gvFxhLX_56PYV2xbl6bTKvYSjK5yoLhoCkjQQAvD_BwE&sdid=88X75SKS&mv=search&ef_id=CjwKCAjwwYP2BRBGEiwAkoBpAuYIg7JHUAFtnRQB28LDaU5gvFxhLX_56PYV2xbl6bTKvYSjK5yoLhoCkjQQAvD_BwE:G:s&s_kwcid=AL!3085!3!340674288378!e!!g!!photoshop) - Photoshop was used to create the background graphic for the Landing page as well as the favicon.
- [Adobe Xd](https://www.adobe.com/ie/products/xd.html) - Adobe Xd was used to create wireframes and mockups.
<a name="#testing"></a>
## Testing

 ### Functionality Testing
- #### Navigation bar
    - When the brand name 'ASTRO' is clicked, it brings the user to the Home Page. This has been tested on desktop, tablet, and mobile views and from all pages.
    - When the brand star is clicked, it brings the user to the Home Page. Tested as mentioned in the previous point.
    - All links are working and have been tested.
    - The hamburger menu appears on screen sizes smaller than 768px. When clicked/tapped, it expands to reveal page links. These have been tested and are working as expected.
    - The navigation bar stays at the top of the page on all screen sizes.
- #### Footer
    - Footer is always located at the bottom of the page regardless of the content amount. This was tested by removing all content from any given page.
    - When the social links are clicked, they open the relevant social media page in a new tab.
    - When the 'About' link is clicked, it brings the user to the 'About' section on the Home page. This has been tested on all pages.
- #### The dynamic text change on the Home Page
    - When the user clicks on any of the headings (Astronomy, Astrology, or Connection), the selected heading smoothly increases in size, the previous description fades out, the relevant new description fades in.
- #### The Graphic Buttons
    - All graphic buttons display the relevant constellation/zodiac name when clicked on.
    - When clicked on, all graphic buttons on the 'Zodiac Sign' page display the relevant zodiac sign in the zodiac container.
    - On the 'Constellations' page when a graphic button is clicked on, it displays the chosen 3D model and information about the constellation in the data container (name of the constellation and the distance from Earth).
    - On the 'Zodiac Signs' page, when clicked on, it displays chosen daily horoscope, Lucky Number and Lucky Color.
- #### 3D Constellation models
    - Each model can be rotated, resized, and dragged. This has been tested on mobile devices, tablets, and desktops.
    - In desktop view, When the user hovers over any given star, it's brightness increases. On mobile, a star will increase in brightness when tapped on.
    - When a star is tapped/clicked on, its name and type are displayed in the data container.
    - The instructions button displays the instructions when clicked/tapped.
    - Reset button resets the view of the constellation the user was looking at, if the instructions button has been selected following a reset button, the previous constellation will be displayed.
- #### Data container for constellation models
    - Initially, no star specific data is being displayed until the user chooses a star by clicking/tapping after choosing a constellation.
    - Initially, no constellation specific data is being displayed until the user chooses a constellation by clicking/tapping one of the graphic buttons.
    - Once the user selects a constellation, it's name and distance from the earth will be displayed.
    - Once the user selects a star, its name and type will be displayed.
    - Reset button under the 3D models will reset the star specific data, however, not the constellation specific data as the constellation remains selected.
- #### Data container for zodiac signs connected to the API
    - When the user chooses a zodiac sign by clicking a graphic button, Daily Horoscope, Lucky Number and Lucky Color will be populated.
    - The name of the zodiac as well as its image are updated as well.
- #### Zodiac Sign calculator
    - When the user selects a month, the day selector is updated with the precise number of days in the chosen month.
    - If no month has been selected, the day selector will not be populated.
    - When the user clicks on the 'Find Out' button, it populates the bottom container with relevant zodiac/constellation names and icons.
    - Both graphic icons take the user to either the 'Constellations' page or the 'Zodiac Signs' page.
    - Additionally, the page buttons underneath each graphic icon bring the user to the relevant pages.
    - If the user tries to navigate back to the calculator using the 'back' button, the page refreshes to clear the previous selection.
-  #### All external links were tested to make sure they open up the correct pages in new tabs
    - All social links in the footer bring the user to the relevant social pages that open in a new tab.
- #### All internal links were tested to make sure that all pages are correctly connected 
    - Navigation links bring the user to the relevant pages.
    - Brand word and icon located in the navigation bar always brings the user to the home page.
    - Links connecting the 'Constellations' page to the 'Zodiac Signs' page and vice versa work and have been tested.
    - All page links on the 'Home' page and the 'Calculator' page are working as expected and redirect the user to the relevant pages.

### HTML5 validator
- Home Page - Pass - [Results](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fliigalized.github.io%2Fastro%2Findex.html)
- Constellations Page - Pass - [Results](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fliigalized.github.io%2Fastro%2Fconstellations.html)
- Zodiac Signs Page - Pass - [Results](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fliigalized.github.io%2Fastro%2Fzodiac.html)
- Calculator Page - Pass - [Results](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fliigalized.github.io%2Fastro%2Fcalculator.html)



### CSS3 validator - Pass

<a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fliigalized.github.io%2Fastro%2Fassets%2Fstyles%2Fmain.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss"
        alt="Valid CSS!">
</a> :point_left: Results


### JSHint validator - no major issues
- index.js
    - xxx
- main.js
    - xxx
- models.js
    - xxx
- zodiac.js
    - xxx
- calculator.js
    - xxx

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




