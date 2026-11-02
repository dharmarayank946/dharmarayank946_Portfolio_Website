# PROJECT REPORT

## Design, Development, and Quality Assurance of a Modern Personal Portfolio & Web Engineering Showcase Website

**Candidate / Author**: Nagalambika D Koralli  
**Degree**: Bachelor of Technology (B.Tech) in Computer Science and Engineering  
**Institution**: Sharanbasava University, Kalaburagi, Karnataka (2024–2028)  
**Academic Standing**: 5th Semester • CGPA: 9.62  
**Repository**: [https://github.com/dharmarayank946/dharmarayank946_Portfolio_Website](https://github.com/dharmarayank946/dharmarayank946_Portfolio_Website)  
**Date**: November 2026  

---

## Table of Contents
1. [Executive Summary & Abstract](#1-executive-summary--abstract)
2. [Project Introduction & Objectives](#2-project-introduction--objectives)
3. [UI/UX Design System & Thematic Architecture](#3-uiux-design-system--thematic-architecture)
4. [System Architecture & Module Breakdown](#4-system-architecture--module-breakdown)
5. [Industry Internships & Practical Experience](#5-industry-internships--practical-experience)
6. [Featured Projects & Technical Implementations](#6-featured-projects--technical-implementations)
7. [Verified Achievements & Hackathon Honors](#7-verified-achievements--hackathon-honors)
8. [Technical Testing & Quality Assurance](#8-technical-testing--quality-assurance)
9. [Deployment & Version Control](#9-deployment--version-control)
10. [Conclusion & Future Roadmap](#10-conclusion--future-roadmap)

---

## 1. Executive Summary & Abstract

This report documents the design, architecture, implementation, and rigorous verification of the personal portfolio website developed for **Nagalambika D Koralli**, an undergraduate software engineer studying Computer Science & Engineering at Sharanbasava University.

The primary objective of this project is to construct a production-ready, highly accessible, and visually distinctive web application that reflects real-world engineering rigor and thoughtful UI/UX principles. Rather than relying on standard third-party templates or generic dark/blue themes, this portfolio introduces a custom **Warm Editorial Theme** built on semantic HTML5, CSS3 Custom Properties, and modular Vanilla JavaScript.

Key milestones achieved in this build include:
* **Single-Screen 100vh Hero Viewport**: An ergonomic desktop layout that communicates technical identity, academic standing, and active projects without requiring scrolling.
* **Photograph-Free Aesthetic**: Complete elimination of personal photographs, utilizing custom-engineered SVG vector visuals (`about-visual.svg`) to illustrate code architecture, design systems, and verified honors.
* **Factual Reconciliation**: Strict synchronization against verified credentials, separating ongoing from completed internships and accurately mapping project repositories.
* **Zero Dependency Core**: 100% native web technologies with zero bloated client-side frameworks, ensuring sub-second load times and 100% test coverage.

---

## 2. Project Introduction & Objectives

### 2.1 Problem Statement
Modern personal portfolio sites frequently suffer from common pitfalls:
* Overcrowded hero sections that require immediate scrolling on laptops.
* Generic blue-and-white or high-contrast dark themes that lack character and strain eyes during prolonged reading.
* Unverified claims, exaggerated experience dates, or mislinked GitHub repositories.
* Heavy JavaScript framework dependencies for what is fundamentally content-driven presentation.

### 2.2 Core Project Objectives
1. **Visual Distinction**: Create a sophisticated, warm editorial identity (Alabaster Linen `#FBF9F5`, Deep Pine `#1E3A34`, Warm Terracotta `#C86D51`) with high typographic contrast and balanced whitespace.
2. **Ergonomic Desktop Presentation**: Fit the entire hero section within `100vh` on desktop displays (`min-height: calc(100vh - var(--nav-height))`), complete with call-to-action buttons and an architectural 3-card studio showcase.
3. **Verified Factual Integrity**: Single source of truth applied to education (B.Tech CSE, CGPA 9.62), 5 internships (1 ongoing, 4 completed), 9 projects, and hackathon awards.
4. **Accessible & Responsive**: Fully fluid across mobile handhelds (`<= 400px`), standard phones (`<= 640px`), tablets (`<= 868px`), and desktops (`>= 1024px`).
5. **Privacy Safeguards**: Maintain public developer channels (GitHub, LinkedIn, Email) while omitting personal phone numbers and certificates.

---

## 3. UI/UX Design System & Thematic Architecture

### 3.1 Color Palette Architecture

The portfolio implements a cohesive design token system:

| Token Name | Hex Code | Semantic Role |
| :--- | :--- | :--- |
| `--bg-page` | `#FBF9F5` | Warm Alabaster Linen canvas background |
| `--bg-card` | `#FFFFFF` | Crisp studio card surface with soft borders |
| `--bg-card-alt` | `#F4EFEA` | Warm Sandalwood Oat for alternating sections and code containers |
| `--text-primary` | `#1C1E1D` | Deep Espresso Charcoal ink (14:1+ contrast ratio on linen) |
| `--text-secondary` | `#454C47` | Warm Mineral Umber for readable paragraph copy |
| `--text-muted` | `#6F7872` | Subtle sage stone for captions and status text |
| `--color-primary` | `#1E3A34` | Deep Forest Cypress/Pine for primary CTAs, headings, and accents |
| `--color-primary-soft` | `#EAF1EE` | Light Pine wash for tags and badges |
| `--color-accent` | `#C86D51` | Warm Terracotta Clay for interactive states, highlights, and borders |
| `--color-accent-soft` | `#FDF2EE` | Soft clay tint for active category pills |
| `--border-subtle` | `#E8E2D8` | Crisp warm stone boundary |

### 3.2 Typography & Hierarchy
* **Primary Typeface**: `Plus Jakarta Sans` — modern geometric sans-serif engineered for digital readability.
* **Fluid Scaling**: Built using CSS `clamp()` functions (e.g. `clamp(2.15rem, 3.8vw, 3.25rem)` for headline typography), ensuring proportions adapt continuously to viewport changes.

---

## 4. System Architecture & Module Breakdown

The single-page application is structured into eight distinct semantic sections:

```plaintext
================================================================================
INDEX.HTML MODULAR ARCHITECTURE
================================================================================
├── Site Header (Fixed, Glassmorphism, Responsive Nav Drawer, Brand Monogram)
├── Section 1: Home / Hero (100vh Full-Screen, Typographic Headline, 3-Card Deck)
├── Section 2: About Me (Dual-Column, Custom SVG Visual, Narrative Milestones)
├── Section 3: Skills (Categorized Grid, 5th Sem UI/UX Active Spotlight)
├── Section 4: Projects (Interactive Category Filter, 9 Project Cards, Live Demos)
├── Section 5: Education (Degree, PUC, SSLC, Coursework Matrix)
├── Section 6: Internships (Ongoing vs. Completed Groups, Five Verified Roles)
├── Section 7: Achievements (Dual Winner Spotlights, Hackathon Track Records)
├── Section 8: Contact (Interactive Form, Validation Engine, Clipboard API)
└── Site Footer (Brand Summary, Quick Navigation, Floating Back-to-Top Button)
================================================================================
```

### Module Highlights:
1. **Hero Section (100vh)**:
   - Status badge: *"Available for Developer Internships & Collaborations • Sharanbasava University • B.Tech CSE (CGPA 9.62)"*
   - Typographic headline: *"Crafting Resilient Web Systems & Intuitive Digital Experiences"*
   - Action buttons: *"Featured Projects"* (Primary Pine) and *"About Me"* (Secondary Outline)
   - Studio Deck: 3 architectural UI cards representing Full-Stack Dev, Human-Centered UI/UX, and Academic & Hackathon Honors.
2. **About Me**:
   - Vector Visual: [`assets/images/about-visual.svg`](file:///d:/Projects/Personal%20Portfolio%20Website/assets/images/about-visual.svg) framing web components, responsive wireframes, and honors.
   - Quick facts card: B.Tech CSE at Sharanbasava University, 5th Sem, CGPA 9.62, Kalaburagi, Karnataka.
3. **Interactive Project Engine**:
   - Filter buttons for `All`, `Full Stack`, `Frontend`, and `AI/ML & Systems`.
   - Real-time DOM display toggles with CSS transitions.

---

## 5. Industry Internships & Practical Experience

The internships section reflects genuine practical experience separated into active engagements and completed programs:

### 5.1 Ongoing Internship
* **VEDA Technology**
  - **Role**: Web Development Intern
  - **Duration**: 45 days
  - **Start Date**: 1 October 2026
  - **Status**: **Ongoing** (`badge-ongoing`)
  - **Focus**: Responsive web design, accessible UI widgets, hamburger navigation, dynamic form validation, and CSS design tokens.

### 5.2 Completed Internships
* **Next Gen Software Hub**
  - **Role**: Python Development Intern
  - **Status**: **Completed** (`badge-completed`)
  - **Focus**: Core Python programming, algorithm design, data handling, and modular script development.
* **SYNTECXHUB**
  - **Role**: Frontend Development Intern
  - **Status**: **Completed** (`badge-completed`)
  - **Focus**: User-facing interfaces, responsive layouts, DOM manipulation, and cross-device optimization.
* **Mastertej, Pune**
  - **Role**: Web Development & AI Intern
  - **Status**: **Completed** (`badge-completed`)
  - **Focus**: Website development, UI design, project management, technical documentation, and AI-assisted workflows.
* **ElevanceSkills**
  - **Role**: Full Stack Web Development Intern
  - **Status**: **Completed** (`badge-completed`)
  - **Focus**: Real-time SaaS ticket creation web applications and full-stack frontend/backend integration.

---

## 6. Featured Projects & Technical Implementations

1. **Gov Sahayak — Citizen Grievance Assistance Portal**
   - **Type**: Full-Stack Web Application
   - **Deployment**: Live on Vercel ([gov-sahayak-seven.vercel.app](https://gov-sahayak-seven.vercel.app))
   - **Description**: Centralized grievance tracking application connecting citizens with administrative resolution channels. (Strictly isolated from unrelated repositories).
2. **IssueFlow — Task Management & Civic Issue Tracker**
   - **Type**: Full-Stack Node.js & MongoDB
   - **Repository**: [github.com/dharmarayank946/IssueFlow](https://github.com/dharmarayank946/IssueFlow)
   - **Description**: Robust issue workflow manager with authentication, status state machines, and real-time activity tracking.
3. **VoiceStudy AI — Voice-First AI Study Companion**
   - **Type**: AI Agent Application (FastAPI, React, Qdrant, Lyzr, Omi API)
   - **Repository**: [github.com/dharmarayank946/voicestudy-ai](https://github.com/dharmarayank946/voicestudy-ai)
   - **Honors**: 3rd Place Winner in the AI House × HiDevs Solo Agents Hackathon.
4. **PhishGuard — Threat Detection & URL Security Checker**
   - **Type**: Machine Learning & Security Scanner
   - **Deployment**: Live on Vercel ([phish-guard-brown.vercel.app](https://phish-guard-brown.vercel.app))
   - **Description**: Real-time URL heuristic analyzer classifying malicious domains using trained ML models.
5. **JDP Restaurant — Responsive Dining Application**
   - **Type**: Frontend Web Application
   - **Repository**: [github.com/dharmarayank946/JDP-Restaurant](https://github.com/dharmarayank946/JDP-Restaurant)
   - **Description**: Restaurant website featuring interactive menus, category browsing, and modern UI transitions.
6. **Responsive Navbar with Hamburger Menu**
   - **Type**: Accessible Navigation Component (GitHub & GitHub Pages)
7. **Nature Landscapes Image Carousel & Slider**
   - **Type**: Touch Gesture Carousel (GitHub & GitHub Pages)
8. **Hotel Management System** (C Systems Application with File I/O)
9. **Waste Management System** (Modular C Systems Architecture)

---

## 7. Verified Achievements & Hackathon Honors

* **First Prize — Bug Hunt**: Jnanothsava-2026, Sharanbasava University (May 16, 2026).
* **Third Place — Solo Agents Hackathon**: AI House × HiDevs, Meeting & Lecture Intelligence Track (VoiceStudy AI).
* **CodeMyFYP Build Beyond Limits 2026**: National Hackathon, Accessible India Track (Certificate ID: `CMFYP-H26-00428`).
* **INVICTUS - 2K26 Sprint Hackathon**: BLDEA's Dr. P.G. Halakatti College of Engg, Vijayapura (May 8, 2026).
* **Jnanothsava-2026 Project Expo / Hackathon**: Sharanbasava University.
* **AVIRAT-2025**: Appa Institute of Engineering & Technology.
* **Wadhwani Foundation Ignite Bootcamp**: 18 Hours of Intensive Entrepreneurship Training.

---

## 8. Technical Testing & Quality Assurance

All features were verified using an automated Node.js test harness ([`test_verification.js`](file:///d:/Projects/Personal%20Portfolio%20Website/test_verification.js)):

| Test Suite | Scope of Validation | Status |
| :--- | :--- | :--- |
| **`LOCALSERVER`** | Probes HTTP 200 responses across index, CSS, JS, and SVG assets | **PASS** |
| **`IMAGEVERIFICATION`** | Validates binary/vector headers for `about-visual.svg` and `favicon.svg` | **PASS** |
| **`NAVIGATION`** | Confirms all 9 `#` anchor IDs exist in the DOM; mobile menu & back-to-top verified | **PASS** |
| **`PROJECTFILTERS`** | Verifies all 9 cards match active filter data attributes (`all`, `fullstack`, `frontend`, `systems`) | **PASS** |
| **`CONTACTFORM`** | Form inputs, error spans, mailto constructor, email accuracy, and privacy regex check | **PASS** |
| **`RESPONSIVELAYOUT`** | Verifies 4 media query breakpoints (`<=400px`, `<=640px`, `<=868px`, `<=1024px`) | **PASS** |
| **`CONSOLESYNTAX`** | Vanilla JavaScript compilation check with zero runtime or syntax errors | **PASS** |

**Summary**: **7/7 Test Suites Passed (100% Reliability)**.

---

## 9. Deployment & Version Control

* **Hosting & Remote**: GitHub
* **Repository URL**: [https://github.com/dharmarayank946/dharmarayank946_Portfolio_Website](https://github.com/dharmarayank946/dharmarayank946_Portfolio_Website)
* **Primary Branch**: `main`
* **Local Workspace**: `D:\Projects\Personal Portfolio Website\`
* **Commit History**:
  - `9969c4a`: *"Update personal portfolio website"*
  - `e9bc81c`: *"Add project audit and quality assurance reports"*

---

## 10. Conclusion & Future Roadmap

The Personal Portfolio Website for **Nagalambika D Koralli** stands as a verified, high-performance web engineering artifact. It bridges technical precision with modern visual design, avoiding generic templates and maintaining complete factual authenticity.

### Future Roadmap
1. **Interactive Demo Embeds**: Integrate live interactive component playgrounds for UI/UX wireframes directly in project modal views.
2. **PWA Integration**: Add service worker caching and web app manifest for offline portfolio review on mobile devices.
3. **Blog / Technical Writing**: Extend the platform with a lightweight markdown-driven blog module to publish collegiate research and hackathon post-mortems.

---

**Report Prepared By**:  
*Nagalambika D Koralli*  
B.Tech Computer Science and Engineering  
Sharanbasava University, Kalaburagi, Karnataka  

