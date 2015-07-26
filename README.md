README.md

#Issue with ignoreScrollBehavior={true} not working. 
See router in `app.jsx`.

##Steps
Scroll to bottom of page.
Click to second page.
Click back to 1st page.
Contents should not be scrolled to top of window. Should stay scrolled at the bottom of the window.

##Build with
browserify --debug -t reactify ./app.jsx -o ./build/app.js