3D PORTFOLIO JOURNAL

*******************************************************
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

***************************************************************
12/13/2023 Continuing Navbar component
- Updated favicon and tab name
- Debugging: In video, he shows how to debug issue where logo was not being sized properly via tailwind css. He ran the following commands:
  - npm install -D --legacy-peer-deps -D postcss autoprefixer
  - npx tailwindcss init -p
- Keyboard shortcut: to select multiple instances of a name/variable
  - CMD + D
- Issue: I notice that the navbar elements are not lined up horizontally like in the video (~32min). All elements are lined up vertically on the web page. Maybe this is something that I can fix later on?
  - I reverted back to the original logo and will continue working. Perhaps the issue is with my own logo and I will see if this issue persists as I code ons
  - SOLVED: I fixed this issue by realizing when mapping over navLinks, I used {} brackets instead of () parentheses after the => arrow. The links are now being displayed horizontally on top of the page now.
- I still have the issue of there being too much space on the left side of the logo -> I guess this is expected so no issue here
- Created menu icon for small devices (should appear and replace navbar elements when window width is decreased)
- Done with navbar for now, moving on to

/////////////////Hero Component/////////////////
- Added background, purple dot and purple line
- Added my name and a short description
- Keep in mind that with a lot of these elements I have been taking into account of small devices. A lot of the elements on the web page will adjust depending on the window size
- Mounted ComputersCanvas into navbar

/////////////////Computers/////////////////
-ISSUE: getting an error: could not resolve "three"
  - SOLVED: ran npm update and restarted server. Seems to have worked
  - ANOTHER SOLUTION: npm install --legacy-peer-deps three
- For mounting 3D objects, we use <mesh> instead of <div>
  - Adding lights: <hemisphereLight>
    - Attributes needed: intensity and groundColor
  - For glares: <pointLight>
- Created new component ComputerCanvas
- ISSUE: The 3D Computer is not rendering on the web page. I also see some unknown properties error messages for the attributes in <mesh>
- A VERY STRANGE OBSERVATION: So I tried copying the code from Adrian's github into my project. That didn't work, but when I undid it (CMD + z) and saved the file, the 3D model appeared on the screen. The only problem is that when I refresh the web page, the page goes back to black. In order to get the 3D model to render again, I have to do the following:
  - Copy and paste code from Adrian's github (Computers.jsx)
  - Undo (CMD + z) and save
  - DO NOT REFRESH WEB PAGE OTHERWISE IT WILL GO BACK TO BLACK
  - Now I'm scared to refresh the web page lol this is so weird...but at least I know the three library and whatever dependencies I needed to render this 3D object works...for now...
- Okay, to address the previous issue Adrian talks about it in the video
  - He says that it takes a while to load and sometimes it even breaks...so he goes into fixing the Loader component
  - Now when the web page first loads, there is a loading percentage animation

/////////////////Back to Hero Component/////////////////
- Using framer motion to create scroller animation on bottom of web page (<motion.div>) hmm pretty cool

/////////////////Back to Computer Canvas/////////////////
- 3D model doesn't look that great when the window width is decreased so we're going to go back to the computer canvas
- Added a state to keep track if user is on mobile or not
-useEffect to check what the current window width is
-Observation: In Computers.jsx, why didn't he just split up the 'Computers' and 'ComputersCanvas' into separate files?????
- Gonna call it here and start on the About section tomorrow, cheers!

***************************************************************
12/14/2023 About
- Some notes for future me:
  - Change background to something more retro
  - Change Hero description
    - "Welcome to my portfolio" / "FRANK MIRANDO {PORTFOLIO}" /
  - Change logo
  - Have an icon to download resume

- Don't forget to use react-parallax-tilt instead of react-tilt

- Wrote Overview description
  - Trying to figure out some inpsiring quotes lol
- Created service cards
  - What services do I want to display?
    - Full Stack Web Developer
    - React Native Developer
    - Backend Developer
    - Graphic Designer
    - Music Producer (Maybe not)
    - DJ (Maybe not)

- In order to create even spacing on web page on left and right sides
  - Created a new folder called 'hoc'
  - Created a new component called 'SectionWrapper.jsx'
  - Using SectionWrapper to wrap About component
  - Will wrap other components with this as well
  - The purpose of this is so that when I user is scrolling down the web page, the different sections will animate into view rather than just being static


*******************************************************
12/16/2023 Experience Component
  /////////////////Experience/////////////////
- Should I omit this part? or just put down the part time jobs I've had?
  - Screw it, just do it
- Created Experience and ExperienceCard components
  - used <VerticalTimeline> and <VerticalTimelineElement>
- When he created the ExperienceCard component, he accidently used {} instead of () when defining the component function.
- Formatted each work experience card

  /////////////////Tech Section/////////////////
  - I was able to render the tech balls on the web page but they're not rotating when I hover the cursor over them like how it does in the video...

*******************************************************
12/21/2023 3D Balls
- Took a break for a few days from this project since I started working. Hopping back on this. From the last time I rememeber, the ball animations weren't working properly as mentioned above
- Finished 3D balls, just need to find and import my own tech icon assets
  - JS, HTML, CSS
  - React.js, React Native
  - Tailwind
  - Bootstrap
  - MongoDB
  - Postgres
  - AWS
  - Node.js
  - Express
  - Three.js
  - Supabase

  /////////////////Work Section/////////////////
  - Again, don't forget to import tilt from 'react-parallax-tilt'
  - Was able to make project cards
    - github icon
    - tilt effect when hovering over each card
    - project images
  - If I've already deployed a project:
    - In Works.jsx I can add another div below the github icon to display another icon that will direct user to the live website
  - ALl done

  - Probably don't need Testimonials section so I'm going to skip over this part in the video (2:01:11)
    - eh maybe i'll do it for the practice

*******************************************************
12/22/2023 Testimonials
- Finished Feedback component. Pretty straightforward. Not sure if I will keep this in the final product

 /////////////////Contact/////////////////
 - Never used useRef before so this should be an interesting learning experience
 - Observation: when we export default SectionWrapper(Contact, "contact")
  - The second argument "contact' inside of the parenthesis is so that when the user clicks on it in the navbar on top of the page, the web page will automatically scroll down to that section
- useRef: So after some reading, I've deduced that useRef is like useState but the difference is that when the value of useRef changes, it does NOT trigger a re-render like how useState does. I can see how this could be a powerful tool to use when trying to maintain efficiency within a React app and trying to prevent unneccessary renders of the web page
- Completed contact form and input fields. Pretty straight forward. Still need to complete event handler functions
- Suspense: This is to have something displayed while an element is loading on the web page
- Creating canvas for Earth 3D model
- Earth model is now formatted correctly

/////////////////Stars/////////////////
- Initialized stars canvas, now to create stars from scratch
- ISSUE: Web page stops rendering when I mount <Points> inside of <group>
  - SOLUTION: I was exporting "Stars" when I'm supposed to be exporting "StarsCanvas"
- :D Cool new lil keyboard shortcut I discovered today:
  - If you're not at the end of a line and you want to move the cursor down into the next line
  - CMD + Enter to move cursor down to next line without have to click with mouse
- Made the stars rotate using useFrame and some maths

Going back to Contact component to implement contact form logic
- Go to emailjs.com
- Template ID: service_7gpdwan
- Completed emailjs implementation in Contact.jsx
  - First try, test email didn't go through...error state invalid template id. Got the correct one gonna try again
  - IT WORKS!!! 199 emails left on emailjs

- Now I can deploy, but before I do that I need to customize the portfolio

//////////////////////////// CUSTOMIZATION/CHANGES/IMPROVEMENTS ////////////////////////////
- Have icon for downloadable resume
- In constants.js
  - services
  - technology balls (refer to what's on resume)
  - work experiences
  - testimonials (remove maybe? or add Benji's)
  - Replace with projects from resume
    - NEED TO START A NEW PROJECT SOON (FULL STACK)
  - Replace 3D Computer with Justin's 3D model
    - If this works, commission Justin to create a  custom 3D model for you
  - Improve logo
  - Replace background
  - Update Hero text
  - Update About Me
  - Move emailjs creds to .env and create gitignore
