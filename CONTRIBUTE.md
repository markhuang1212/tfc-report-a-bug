# tfc-report-a-bug

> This document is for modifying the source code of this project. Read `README.md` first to know how to build and deploy the project

## Overview

This project is written in typescript, using ReactJS as a front-end framework. The production build of this project is put in the `report-system-backend`. All source codes are in the `src` folder. All `.tsx` files are UI related. `src/Feedback.ts` and `src/FeedbackHandler.ts` communicates with the backend. `src/lang.json` and `src/i18n.ts` handles different languages. Internationalization is handled by `i18-next` framework. Routing is handled by `react-router` framework.

To read the project, start with `index.tsx`, `App.tsx`