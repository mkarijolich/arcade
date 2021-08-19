# Module 1 - CSS Flexbox, Qwirty Module 01

# YouTube upload:
[📺 Link](https://youtu.be/d36C6pFjFbU?list=PLPLveFltzJ38Asv6HPY9Xx_rmRUbtTffV)

# Zoom recording upload, with searchable transcript and chat history:
[📺 Link](https://fullstackacademy.zoom.us/rec/share/wwpK2alp5WPpXmgScleTI11tc05-vCxOqgHcwgiuv4FOdRn2xi445fk3nI94RIfP.Ht4m4ZNpKTI-Rcdl?startTime=1629243067000)

## Links We Used Today:
- Flexbox Tricks: https://css-tricks.com/snippets/css/a-guide-to-flexbox/


## Today we learned about:


## Using a container
Magic "word" is `diplay: flex;` and this goes on the container. Mandatory if you want to use flexbox.

## Setting direction
Row or Column. Reverse of either. Magic "word" is `flex-direction: XXX`. Row is set by default.

## Justify Content
Magic word is `justify-content` it is going to look for the flex direction and align the content either horizontally (row) or vertically (column)

## Main vs Cross Axis
Main access if your flex-direction is row is going to be horizontal whereas your cross axis will be vertical.

Opposite for flex-direction: column.

To align content in cross access use `align-items`.

## Flex grow / flex shrink (Flex shorthand)
It's all about the proportions, 
- `flex-grow` takes a unitless value (eg not as 2px or 2em just "2"). Will tell the browser how to grow the element if there is extra space. 
  - default: 0
- `flex-shrink` is the reverse. 
  - default: 1

We use `flex-basis` to set the width of our elements in the "default" case.

You might see the `flex` shorthand. This is expecting flex grow, flex shrink, and flex basis.

## Wrap

Allows content to wrap to new line if it's full. We can use a shortcut called `flex-flow` that combines flex-direction with flex-wrap.
