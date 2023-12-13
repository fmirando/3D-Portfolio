3D PORTFOLIO JOURNAL
********************************************

12/12/2023 3D Portfolio Project Start

/////////////////PROJECT SETUP/////////////////
- Set up project directory
- Downloaded assets
- Initialized react app with vite (first time using vite)
- Downloaded and initialized tailwind
- Use `react-parallax-tilt` instead of `react-tilt` and remove --legacy-peer-deps from the command
- Complete command to install dependencies vvv
  - `npm install @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`
- Transferred public, assets and components folders into project directory
- Attempting to upload project directory to a brand new github repo
  - ISSUE: When running command `git add .`, I get the following error: fatal: CRLF would be replaced by LF in public/desktop_pc/license.txt
  - Fixed the issue above with the following command: `git config --global core.autocrlf false`
- Copied code from index.css into local index.css
- Copied code from styles.js. ***Note that here I have it as 'style.js' when in the gist online it is 'styles.js'
- Copied code from tailwind.config.cjs
  - ***Note that this file had a .js extension initially. I changed it to tailwind.config.cjs to match what was in the tutorial.
  - There was also an issue with module.exports so I changed it to export default {} instead
- Created folder called 'utils' and copied code for motion.js
- Created folder 'constants' and copied code for index.js
  - NOTE this file will contain all the static data that will be displayed on the web page. The data in here can be changed at any time
- Ran `npm run dev` and web page sucessfully runs at localhost:5173

/////////////////COMPONENTS/////////////////
- In App.jsx, set up BrowserRouter and mounted all components
-Able to display temp logo on web page
  - go to logo.com and create own logo
  - "FM" logo probably
- ISSUE (SOLVED): I created my own logo but when it rendered on the web page it was way to big. I fized this issue and was able to downsize my logo by altering the width and height properties in the actual logo.svg file

- I think I will call it a night here. Left off on Youtube tutorial at 27:15. Signing off - FM 1:43AM

12/13/2023 Continuing Navbar component
- Updated favicon and tab name