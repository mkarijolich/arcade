# Module 2 - CSS Media Queries, Qwirty Module 02

# YouTube upload:
[📺 Link](https://www.youtube.com/watch?v=snbMeFqK6dQ&list=PLPLveFltzJ38Asv6HPY9Xx_rmRUbtTffV&index=5)

# Zoom recording upload, with searchable transcript and chat history:




## Today we learned about:
# Media Queries

## Mobile First Design
- Starting the design process from the smallest of screens: mobile. 
- This is great, but what if we want it to look good on a huge screen?
- What looks good on a tiny screen does not necessarily look good on a huge screen.
- What if we wanted it to look amazing on both?

## Responsive Design
- Rendering your page well on a variety of devices and window or screen sizes.  
- We'll mostly focus on screen size in this cohort.

## The Magic Word
@media - says we are "querying" the media.  We are asking "what device type/shape/size are you?" 

## Media Queries: Why do we need them?

Not everyone uses the same computer screen / size or media in general. We want to make our sites look nice regardless of how they're being consumed.

## Can we use Flex Box instead?

MAYBE if your app is simple enough.  However, there is a good chance some styling will still need to be fixed for a mobile view. 

## Min and Max Width

Most common media query. We are conditionally applying CSS based upon the width of the screen.

## Some extra tools in your browser

Look for the little phone button (upper left of Chrome dev tools). Toggle different device types.

## Print Media

Example of a media type that might come up. This helps us customize our "print screen" view. 
- to test this out (get a preview) in Chrome:
  - Open the dev tools Option+Command+J
  - Press Command+Shift+P (Mac) or Control+Shift+P
  - Type "Emulate CSS print media type" and select it
  - To turn it off: Type "Do not emulate CSS media type" and select it.

## If you want to view on your phone (instead of using the emulator)
1. First: make sure Live Server is running.

2. On your machine

- [On a Mac:](https://blog.pcrisk.com/mac/12377-how-to-find-out-your-ip-address-on-mac)
  - Open terminal
  - type `ipconfig getifaddr en0`


- [On Windows 10:](https://idoc.vsb.cz/xwiki/bin/view/tuonet/sit-nastaveni/ip-adresa/ip-win10-cmd/?xpage=print&language=en)
  - Open command prompt
  - Type `ipconfig /all` and press Enter.
  - Find your Ethernet adapter Ethernet, locate row `IPv6 Address`

3. Type the ip address into your mobile device url bar, followed by the port Live Server is running


