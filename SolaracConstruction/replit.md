# Overview

SOLARAC Construction LTD is a professional construction and engineering company website built as a static HTML site. The project serves as a corporate portfolio showcasing the company's services in civil engineering, structural design, and transportation engineering. The website presents company information, services, project portfolio, team profiles, certifications, and contact details through a multi-page structure with responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a traditional static website architecture with separate HTML pages for each section. The structure uses semantic HTML5 markup with a consistent header navigation system across all pages. CSS styling implements a professional color scheme (white, deep blue #003366, light gray #f5f5f5) with responsive design patterns. JavaScript provides interactive functionality including mobile menu toggle, hero image slider, and navigation enhancements.

## Page Structure
The website consists of seven main pages: home (index.html), about, services, projects, certificates, team, and contact. Each page follows the same structural pattern with a fixed header containing logo and navigation, main content sections, and consistent styling. The navigation system uses active state indicators and mobile-responsive hamburger menu functionality.

## Responsive Design
The CSS architecture implements mobile-first responsive design principles with flexible layouts and mobile menu toggling. The JavaScript handles mobile navigation states and provides smooth transitions for menu interactions. Image sliders and interactive elements are optimized for both desktop and mobile viewing experiences.

## Static Asset Management
The project uses a organized file-based structure for static assets:
- **CSS**: Stored in /css/styles.css with organized class naming conventions and consistent spacing/typography systems
- **JavaScript**: Located in /js/script.js with interactive functionality and mobile menu handling
- **Images**: Organized in /images/ directory with subdirectories for projects, certificates, logo, and slider images

## Development Server
A basic Node.js HTTP server (server.js) serves static files during development with appropriate MIME type handling and cache control headers. The server includes 404 error handling and supports common web file types including HTML, CSS, JavaScript, and various image formats.

# External Dependencies

## Core Technologies
- **HTML5**: Semantic markup structure for all pages
- **CSS3**: Responsive styling with flexbox and grid layouts
- **Vanilla JavaScript**: Interactive functionality without external frameworks
- **Node.js HTTP Module**: Development server for local file serving

## Static Assets
- **Images**: Logo, project photos, team photos, and slider images stored in images directory
- **Fonts**: Arial font family as primary typography choice
- **Icons**: Hamburger menu icons created with CSS transforms

## Development Tools
- **HTTP Server**: Custom Node.js server for development environment with MIME type support and cache control
- **File System**: Simple directory-based organization for HTML, CSS, JavaScript, and image assets

The architecture prioritizes simplicity and maintainability with no complex build processes or external frameworks, making it suitable for traditional web hosting environments and easy content updates.