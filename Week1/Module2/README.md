# Module 2 - Welcome, Intro to HTML, CSS, and Personal Site Module 01

# YouTube link: 
https://youtu.be/OncsQeEIMic

## Links We Used Today:
- Box Model: https://www.w3schools.com/css/css_boxmodel.asp
- CSS Units: https://www.w3schools.com/cssref/css_units.asp

## Today we learned about:

### CSS
- CSS can be written in its own stylesheet (commonly `style.css`)
- Box Model - Picture frame drawing `https://app.ziteboard.com/`

### Demo Code should cover
(example demo code linked below)

- Write CSS in stylesheet `style.css`
- CSS
  - 3 ways of defining css (we'll get to more in JavaScript, but these are a few basics)
    - Inline - `<h1 style="background-color: red"></h1>`
    - Style tag - `<style></style>`
    - Stylesheet - `<link rel="stylesheet" href="index.css" />`
  - Specificity - example
    - Tagname least specific
    - Class next
    - ID most specific
    - Inline style most specific (in this examples)
  - Selectors
    - Parent-child relationship
    - Class vs id
    - combining class & id
    - `selector > selector` vs `selector selector` vs `selector.selector`
  - Box Model
    - Everything is a box.  Relationships to each other is defined as such.
    - Many different `display` options. (block, inline, none, flex, grid)
  - Rules of `display: block` and `display: inline`
    - Block
      - new line
      - width generally spans 100% of container
      - `width` and `height` can be defined.
      - Examples `h1`, `p`, `header`, `main`, `footer`
    - Inline
      - No new line.
      - `width` and `height` don't apply
      - Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
      Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.
      - Examples `span`, `a`, `em`, `strong`
    - Demo span changing to block
  - Background Color
  - layout - Change image to display block and center it via this method
    -  margin of 0 auto 0 auto (or just 0 auto)
  - Values/units
    - px, em, rem, in, and vh units.
  - Images, media, form elements - Specifically, sizing images
    - float: right;