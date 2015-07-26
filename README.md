###Issue with ignoreScrollBehavior={true} not working. 
See router in `app.jsx`.

###Steps
1. Scroll to bottom of page.
2. Click to second page.
3. Click back to 1st page.
4. Contents should not be scrolled to top of window. Should stay scrolled at the bottom of the window.

###Build with
browserify --debug -t reactify ./app.jsx -o ./build/app.js