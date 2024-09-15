# MANOJ VEKARIA (NOJ VEK)

Email: hello@nojvek.com  
Github: https://github.com/nojvek  
LinkedIn: https://linkedin.com/in/nojvek  
Blog: https://nojvek.substack.com/  
Cell: +1 425 999 6216

## PERSONAL STATEMENT

I believe any great product aims to maximize the economy of the user's time, cognition and effort to get their job done. 
Getting it right requires multiple iterations, therefore the speed of iteration is a competive edge.

## PROFESSIONAL EXPERIENCE

### Founding Lead Engineer + Staff Software Engineer at Recurrency - Remote (Seattle, Washington & Tampa, Florida)
*Apr 2021 – Present*

Recurrency (https://recurrency.com) is building ERP automation platform for distributors using machine learning and workflow automation.

- First product engineer. Collaborated closely with the Founder and Product Manager to strategically scope projects and optimize timelines.
- Architected and developed the frontend from the ground up, leveraging Webpack, TypeScript, and Esbuild, with seamless Netlify deployments.
- Designed and implemented comprehensive E2E and Unit test frameworks, enabling scalable frontend and API services.
- Spearheaded the establishment of a full-stack product team, successfully scaling to 20+ engineers proficient in both frontend and api services.
- Instituted a robust technical documentation process, ensuring smooth and predictable planning and execution cycles.
- Engineered end-to-end modules in app.recurrency.com namely: purchasing, planning, sales, admin and reporting.
- Led a complex database migration from MongoDB to PostgreSQL, enhancing data management and performance.
- Integrated Snowflake for advanced reporting capabilities and implemented Typesense for typo-tolerant search functionality.
- Developed and executed an Extract, Load, Transform (ELT) strategy utilizing DBT and Airflow for efficient data transformations.
- Optimized performance metrics, achieving p90 recurrency page navigation under 1 second and API calls under 500ms.
- Instrumental in scaling the business from 0 to 150+ enterprise customers, driving significant annual recurring revenue growth.
  
### Senior Software Engineer at Stripe - Remote (Seattle, Washington)
*Nov 2020 – Mar 2021*

Stripe (https://stripe.com) is building the payment infrastructure for the internet. I was on the Frontend Infrastructure team.

- Flow -> Typescript migration across Stripe Dashboard, Stripe Platform & Sail Design system.
- Frontend devloop instrumentation to measure iteration from code change to code applied in the browser. 
- Added backend caching middleware to Ruby server based on Rack. Stripe saves 1d of productivity every week due to perf improvements.
- Strategy for devbox per code branch for faster iteration.

### Senior Software Engineer at Mixpanel - Hybrid (Seattle, Washington)
*Mar 2016 – Nov 2020*

Mixpanel (https://mixpanel.com) is a petabyte-scale product analytics tool.

- UI Perf: Make navigation faster - 10X improvements in page load, this led to increase in customer retention.
- Design System: Built Mixpanel's Design System https://design.mixpanel.com. We can build consistent user experiences and also decrease time to build new feature UIs. With fewer core UI components, #little-big-things that delight users can be implemented.
- Settings: Worked on enterprise features such as admin settings, lexicon (data annotation) and query builder.
- HMR: Improved front-end devloop under 5 seconds with custom webpack hot module reloading (HMR) plugins. HMR lets us apply code changes without page reload.
- Refactor: Javascript to Typescript, Jade -> TSX, error tracking and general QOL (quality of life) improvements.
- CI: Worked on continuous integration pipeline for frontend assets and webapp server. A staging environment is built per PR (pull request).
- CD: Performance improvements via parallelisation and end-to-end smoke tests using puppeteer to ensure reliable deploys. Median deploy times are about ~30 minutes.

### Software Engineer at Microsoft (Redmond, Washington)
*Aug 2015 – Feb 2016*

Microsoft Edge is the new lightweight browser by Microsoft. Worked on Edge Developer Tools.

- Startup performance improvements.
- Fixed various bugs and misc improvements in Dom Explorer, Console, Memory Profiler, CPU Profiler and Network tab.
- Faster and more reliable CI pipeline with end to end tests.
- Worked with Visual Studio Code team for Chrome Debugger plugin.

### Software Engineer at Microsoft (Vancouver, Canada & Redmond, Washington)
*Jun 2013 – Aug 2015*

Power BI (https://powerbi.microsoft.com) is Microsoft's Business Intelligence offering.

- AngularJS frontend. Worked on the dashboard. Smooth 60FPS drag and drop, even with multiple fingers on a touch screen.
- Report visualization code with a mix of canvas and d3.
- Admin Settings UI.

### Software Engineer at RocketBoots Pty Ltd (Sydney, Australia)
*Mar 2009 – Dec 2013*

RocketBoots (https://rocketboots.com.au) is a software consultancy. Joined as employee #1 and helped grow to 11 engineers by the time I left.

- Worked on "Beehive" project. Implemented computer vision using OpenCV on embedded SOC (System on a Chip) on cameras.
- Built a machine learning system (genetic algorithm) to implement batched learning on an on-demand ~500 VM cluster on AWS. We could go from 70% accuracy to 95% accuracy in a couple of hours. This was before Convolutional Nets and GPUs were prominent for computer vision.
- Lead developer for the software of a military grade, surveillance robot "HERMES Light". https://www.youtube.com/watch?v=BEba5iVmlEQ

### Academic Tutor (University of New South Wales - UNSW, Australia)
*Mar 2007 - Jan 2009*

- Awarded highest achieving student in "Computing for Engineers" course.
- Tutored first year students while I was in my 3rd year. Introduced Engineering students to programming, logic and problem solving skills.
- Built html/css/js/Flash sites as side gigs

## OPEN SOURCE

- Nodejs PRs
  - [Documentation for --inspect, --debug-brk, --debug](https://github.com/nodejs/node/pull/6792)
  - [Fix bug where --inspect doesn't notify profilers to disconnect](https://github.com/nodejs/node/pull/7351)
- VSCode PRs
  - [Inline values when debugging via decorators](https://github.com/microsoft/vscode/pull/23820)
  - [Terminal links based on CWD](https://github.com/microsoft/vscode/pull/71630)
  - [Type to focus](https://github.com/microsoft/vscode/pull/71495)
- Typescript PRs
  - [jsxFragmentFactory compiler option](https://github.com/microsoft/TypeScript/pull/38720)
  - [allowJS + declarations compiler configuration](https://github.com/microsoft/TypeScript/pull/7546)
  - [Pretty jsx emit](https://github.com/microsoft/TypeScript/pull/35282)
  - [Fix .d.ts declarations](https://github.com/microsoft/TypeScript/pull/36346)
- Chrome DevTools
  - [Tooltips for Request Timing Metrics](https://chromium-review.googlesource.com/c/chromium/src/+/1991207)
  - [Mouse handling to change units with keyboard modifiers](https://chromium-review.googlesource.com/c/chromium/src/+/2110085)
- [Chrome DevTools protocol](https://github.com/ChromeDevTools/devtools-protocol)
  - Auto generated type definitions from protocol.json. Consumed by VSCode, puppeteer, lighthouse and other tools.
- [fuzzbunny](https://github.com/nojvek/fuzzbunny) - Fast fuzzy matching library written in Typescript.
- [panel](https://github.com/mixpanel/panel) - Web components with virtual dom
- [boomadmin](https://github.com/nojvek/boomadmin) - MySQL db explorer with SQL builder
- [RasberryPISelfDrivingCar](https://github.com/nojvek/RasberryPISelfDrivingCar) - fun experiment with openCV on a raspberry pi powered car.
- Misc other contributions to webpack, webpack-dev-server, simd_nodejs, puppeteer, preact, ChakraCore.

## EDUCATION

### University of New South Wales, Australia
*July 2006 - Aug 2009, (Bsc Computer Science) Grade: Distinction*

Notable Courses:
- Discrete Mathematics & Statistics
- Data Structures & Algorithms
- Ethics & Law for Computer Science
- Microprocessors & Embedded Systems
- Database Systems & Implementation
- Artificial Intelligence & Search
- Advanced Computer Graphics
- Programming Languages & Compilers
- Computer Vision
- Web Applications
