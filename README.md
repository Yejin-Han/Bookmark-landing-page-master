# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/Yejin-Han/Bookmark-landing-page-master](https://github.com/Yejin-Han/Bookmark-landing-page-master)
- Live Site URL: [https://yejin-han.github.io/Bookmark-landing-page-master/](https://yejin-han.github.io/Bookmark-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- svg change color -> just open the svg in MS Edge(, etc...) and change the path fill property in CSS.

- tab with ARIA property
```html
<div class="tab-board">
  <ul class="tab-list" role="tablist">
    <li role="tab" id="tab1" aria-controls="tabpanel1" aria-selected="true" tabindex="0">탭 메뉴 1</li>
    <li role="tab" id="tab2" aria-controls="tabpanel2" aria-selected="false" tabindex="0">탭 메뉴 2</li>
  </ul>
  <div role="tabpanel" id="tabpanel1" class="section-act" aria-labelledby="tab1">
    <!--활성화 되었을 때 보여질 영역-->
  </div>
  <div role="tabpanel" id="tabpanel2" aria-labelledby="tab2">
    <!--활성화 되었을 때 보여질 영역-->
  </div>
</div>
```

- slidedown/up with GRID
```html
<div class="wrapper">
  <div class="inner">Expandable content</div>
</div>
```
```css
.wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
}
.wrapper.is-open {
  grid-template-rows: 1fr;
}
.inner {
  overflow: hidden;
}
```

- form checkValidity, setCustomValidity method
```html
<button onclick="myFunction()">Try it</button> 
  
<p>An message will display of ERROR, if the number 
    is lesser than 101 or greater than 999</p> 
<p id="geeks"></p> 
```
```js
function myFunction() { 
    var inpObj = document.getElementById("gfg"); 
    if (!inpObj.checkValidity()) { 
        document.getElementById("geeks") 
                  .innerHTML = inpObj.validationMessage; 
    } else { 
        document.getElementById("geeks") 
                  .innerHTML = "Input is ALL RIGHT"; 
    } 
} 
```

### Continued development

- I've got interested in various SVG animations.
- The background part of the illustration is constantly awkward. In my case, it's .shape class. After all I've finished this work, I thought that I don't need to put .shape in every tab items, it's better to put just one .shape in tab list and use it commonly.
- It took so much time. OMG..........


### Useful resources

- [Resource 1](https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0) - Reorganize CSS Reset. I have organized only what I felt necessary while studying and working so far.
- [Resource 2](https://nuucolog.tistory.com/27) - SVG viewbox, width, height
- [Resource 3](https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/) - SlideUp/Down with CSS grid, if we need some paddings inside of the content, instead of a div that takes transition, make an extra div in it and give some paddings.
- [Resource 4](https://www.geeksforgeeks.org/form-required-attribute-with-a-custom-validation-message-in-html5/) - form checkValidity, setCustomValidity method
- [Resource 5](https://velog.io/@yijaee/aria%EB%A1%9C-tab-%EB%A9%94%EB%89%B4-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0) - tab menu with ARIA


## Author

- Github - [Yejin Han(한예진)](https://github.com/Yejin-Han)
- Frontend Mentor - [@Yejin-Han](https://www.frontendmentor.io/profile/Yejin-Han)