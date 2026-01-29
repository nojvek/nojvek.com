# MANOJ VEKARIA (NOJ VEK)

Email: hello@nojvek.com

Github: [github.com/nojvek](https://github.com/nojvek)

LinkedIn: [linkedin.com/in/nojvek](https://linkedin.com/in/nojvek)

Blog: [nojvek.substack.com](https://nojvek.substack.com)

## ABOUT ME

I'm a full-stack product engineer with deep expertise in Frontend (TypeScript) and Backend/ML (Python).

A reverent disciple of machine learning, quantitative finance, and supply-chain optimization.

## PROFESSIONAL EXPERIENCE

### Founding Lead Engineer + Staff Software Engineer at Recurrency - Remote (Seattle, Washington & Tampa, Florida)
*Apr 2021 – Present*

Recurrency (https://recurrency.com) is building ERP automation platform for distributors using machine learning and workflow automation.

**Business Growth:** 2nd product engineer. Scaled from 0 → 250+ enterprise customers, driving multi-million dollar ARR.

**Team & Process:** Grew team from 1 → 20+ engineers. Established tech-docs process for async alignment and focused execution.

**Full-Stack Tech Lead:** Led team to deliver end-to-end modules (purchasing, planning, sales, reporting) + ML-based demand forecasting and recommendation engines.

**Frontend (TypeScript/React):** User engagement correlates with speed and reliability. <1s p95 initial load, <100ms navigation and interaction. Active error/perf monitoring.

**API (Node.js/AWS ECS):** Customer workflows need high-throughput REST-api. <50ms median latency, 1000+ concurrent requests, >99.99% uptime SLA, >99.99% non-50X response success rate.

**Backend (Python/Postgres/MotherDuck):** Customer ERP data is huge and messy. 20TB+, 10B+ rows, tenant-sharded elastic columnstore database architecture using Motherduck. User/Tenant/Metadata transactional operations in Postgres. SOC II compliant. Co-led MongoDB/Snowflake → PostgreSQL/Motherduck migration with infrastructure lead.

**Data/Observability:** Reliable ETL across 250+ customer datasets, 5+ ERP schemas. Airflow + DBT pipelines. DataDog, Sentry, Mixpanel, FullStory, AWS Logs, Slack Alerts.

**CI/CD:** Developer velocity = faster customer iteration. 90%+ coverage, 2000+ E2E tests in <5m. PR → deploy in <10m. 2-10 deploys per day.



### Senior Software Engineer at Stripe - Hybrid (Seattle, Washington)
*Nov 2020 – Mar 2021*

Stripe (https://stripe.com) builds payment infrastructure for the internet. Frontend Infrastructure team.

**TypeScript Migration:** Developer productivity improves with type safety and a larger ecosystem. Led Flow → TypeScript migration across Stripe Dashboard, Platform & Sail Design system.

**Dev Loop Iteration:** Faster iteration = happier engineers. Designed and implemented devbox-per-branch strategy for higher throughput iteration. Improved developer loop via caching middleware (Ruby/RoR). Instrumented devloop metrics in product-health dashboard.

### Senior Software Engineer at Mixpanel - Hybrid (Seattle, Washington)
*Mar 2016 – Nov 2020*

Mixpanel (https://mixpanel.com) is a petabyte-scale product analytics platform.

**UI Performance:** Customer retention correlates with speed. Achieved 10X improvement in page load times, directly increasing retention metrics. <1s P90, <100ms navigation and interaction speed.

**Design System:** Consistent UX builds user trust. Built Mixpanel's Design System (https://design.mixpanel.com). Fewer core components, faster feature delivery, delightful micro-interactions.

**Enterprise Features:** Large customers need control. Delivered admin settings, lexicon (data annotation), and query builder.

**Dev Loop (HMR):** Developer iteration speed matters. Custom webpack HMR plugins reduced devloop to <5 seconds. Code changes apply without page reload.

**Codebase Health:** Maintainability enables velocity. Led JavaScript → TypeScript, Jade → TSX migrations. Error/Perf tracking and alerting.

**CI/CD:** Reliable deploys build confidence. Per-PR staging environments, parallelized pipelines, Puppeteer smoke tests. ~30 min median deploy time.

### Software Engineer at Microsoft - Edge DevTools (Seattle, Washington)
*Aug 2015 – Feb 2016*

Microsoft Edge DevTools: browser developer tools for web developers.

**Startup Perf:** Developers open DevTools constantly. Improved startup performance for faster debugging workflows.

**DevTools Features:** Quality tools = productive developers. Bug fixes and improvements across DOM Explorer, Console, Memory Profiler, CPU Profiler, Network tab.

**CI/CD:** Reliable releases build trust. Faster, more reliable pipeline with E2E tests.

**VSCode Integration:** Cross-tool debugging improves DX. Collaborated with VSCode team on Chrome Debugger plugin.

### Software Engineer at Microsoft - PowerBI (Vancouver, Canada & Redmond, Washington)
*Jun 2013 – Aug 2015*

Power BI (https://powerbi.microsoft.com) is Microsoft's enterprise business analytics platform.

**Dashboard UX:** Business users expect fluid interactions. Built AngularJS dashboard with smooth 60FPS drag-and-drop, multi-touch support.

**Visualizations:** Data insight requires clear presentation. Report rendering with Canvas and D3.js.

**Enterprise Features:** Large orgs need governance. Built Admin Settings UI.

### Software Engineer at RocketBoots Pty Ltd (Sydney, Australia)
*Mar 2009 – Dec 2013*

RocketBoots (https://rocketboots.com.au) is a foot traffic video analytics consultancy. Employee #1, helped grow to 11 engineers.

**Computer Vision (Beehive):** Retailers need foot traffic insights. Implemented OpenCV-based vision on embedded SOC cameras for real-time people analytics.

**ML Training Pipeline:** Accuracy drives customer value. Built genetic algorithm ML system on ~500 VM AWS cluster. Improved accuracy from 70% → 95% in hours. (Pre-CNN/GPU era)

**Robotics (HERMES Light):** Defense clients need autonomous surveillance. Lead developer for military-grade surveillance robot software. https://www.youtube.com/watch?v=BEba5iVmlEQ

### Academic Tutor (University of New South Wales - UNSW, Australia)
*Mar 2007 - Jan 2009*

**Teaching:** Students learn best from peers. Tutored 1st-year engineering students (while in 3rd year) on programming, logic, and problem-solving.

**Recognition:** Awarded highest achieving student in "Computing for Engineers" course.

**Freelance:** Built HTML/CSS/JS/Flash sites as side projects.

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
- Misc other contributions to [webpack](https://github.com/webpack/webpack), [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [simd_nodejs](https://github.com/tc39/ecmascript_simd), [puppeteer](https://github.com/puppeteer/puppeteer), [preact](https://github.com/preactjs/preact), [ChakraCore](https://github.com/microsoft/ChakraCore).

## EDUCATION

### University of New South Wales (UNSW), Australia
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
