# Module 3 - CSS Media Queries, Qwirty Module 03

# YouTube upload:
[📺 Link](https://www.youtube.com/watch?v=mREkEssXWJc&list=PLPLveFltzJ38Asv6HPY9Xx_rmRUbtTffV&index=6)

## Links We Used Today:
- CSS Selector Reference: https://www.w3schools.com/cssref/css_selectors.asp
- CSS Diner: https://flukeout.github.io/


## Today we learned about:


## First, some selector review
|Selector    |Example      |Description   |
|---         |---          |---           |
|element     |`h1`         |Select all elements that are an `h1 ` tag.   |
|class       |`.foo`       |Select elements that have `class="foo"`   |
|id          |`#bar`       |Select elements that have `id="bar"`   |
|both        |`.foo#bar`   |Both the `foo` class and `bar` id   |
|descendents |`.foo #bar`  |Space between: All descendents (not necessarily direct)   |
|direct child|`.foo > #bar`|carat sybol: Only direct child (not all descendents)   |
|pseudo      |`.foo:hover` |only if the cursor is hovering over the element   |


A great reference for selectors: https://www.w3schools.com/cssref/css_selectors.asp


# Pseudo Classes

## What are they?
- A way to style a specific subset of a certain selector/element

## Why would we use them?
- Examples: To style...
  - an element if we hover over it
  - the border on the top of an entire table
  - the right side of a list of elements
  - the three in the middle of a list

## First or Last of Type

- Grab the first or last of a specific type (in our case the "type" was a p tag) and style it. Does not matter if different types show up in the list before them.

## First Child or Last Child
- Grab the first or last child. This does look at what is actually first, so if another type shows up first/last, it will not work.

## Nth-Child

- Step: n starts at 0, increases by 1. Keep going until we are out of children. In our case...

3n... 3(0) = 0, 3(1) = 3, 3(2) = 6, 3(3) = 9, out of children.

- Formula (A(n) + B): A as skipping/striding and B is our offset. In our case...

3n+1... 3(0) + 1 = 1, 3(1) + 1 = 4, 3(2) + 1 = 7, 3(3) + 1 = 10

- Odd/Even: grab all odds or all evens

- Ranges: In our case we want 3 - 6. Let's start with 3+. (0 + 3) = 3, (1 + 3) = 4, ... ,(6 + 3) = 9. Let's continue with 6-. (0 + 6) = 6, (-1 + 6) = 5, (-2 + 6) = 4, ... , (-5 + 6) = 1. We want to style only the elements that match BOTH so we use the selectors together: 
```
#range > p:nth-child(n + 3):nth-child(-n + 6) 
```