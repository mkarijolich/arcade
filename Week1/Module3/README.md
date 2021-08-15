# Module 2 - Welcome, Intro to HTML, CSS, and Personal Site Module 01

# YouTube link: 
https://youtu.be/-70i_g4p6w4

## Links We Used Today:
- CSS Float: https://www.w3schools.com/cssref/pr_class_float.asp
- CSS Clear: https://www.w3schools.com/cssref/pr_class_clear.asp
- CSS Selectors: https://www.w3schools.com/cssref/css_selectors.asp
- CSS Position: https://www.w3schools.com/css/css_positioning.asp
- Google Material Icons: https://fonts.google.com/icons?icon.query=upload
- Material Icons Guide: https://developers.google.com/fonts/docs/material_icons

## Today we learned about:

### What is Normal Flow?
- It is the DEFAULT, can be overridden with CSS
- Top down, left to right
### Floats
- It takes element out of normal flow
- In our case, we are pinning the image to the left side of the screen
- Do not use to style entire web page (we have other tools for that)
- Our ticket out of this flow is "clear" property. In our case, "clear: left;" on the list.
### Position
#### static
- default
- not affected by the top, bottom, left, and right properties.
#### fixed
- Removes element from document flow in the same way as absolute positioning. 
- However, offsets applied from the viewport. (not containing block, like absolute)
#### absolute
- Completely removes element from normal flow
- Offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.)
- Most useful in this case to use properties like "top" "bottom" "left" and "right" to position however you want
#### sticky
- Makes an element act like 
  - position: static 

- Until it hits a defined OFFSET from the viewport, 
- At which point it acts like 
  - position: fixed. 