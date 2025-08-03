# Niroggyan Healthcare Appointment Booking

## Tools/Libraries Used
- **React**: Frontend UI library for building interactive user interfaces.
- **Node.js**: JavaScript runtime for backend development.
- **Express**: Web framework for Node.js to build RESTful APIs.
- **MongoDB**: NoSQL database for storing doctors and appointments.
- **Mongoose**: ODM for MongoDB, used for schema and data modeling.
- **External CSS**: All styling is handled via dedicated CSS files for each component/page.

## Improvements with More Time
- **Authentication**: Add user login/signup and secure appointment management.
- **Doctor Availability Management**: Allow doctors to update their availability and schedules.
- **Calendar Integration**: Visual calendar for booking and viewing appointments.
- **Notifications**: Email/SMS reminders for upcoming appointments.
- **Admin Dashboard**: Manage doctors, appointments, and users from a central dashboard.
- **Responsive Design**: Further optimize for mobile and tablet devices.
- **Unit & Integration Tests**: Add automated tests for backend and frontend components.
- **Deployment**: Set up CI/CD pipelines and deploy to cloud platforms.

## Challenges Faced and Solutions
- **API Connectivity Issues**: Faced problems with frontend-backend communication due to incorrect proxy settings and fetch URLs. Solved by updating the proxy in `package.json` and using relative API paths.
- **UI Consistency**: Ensured all pages use external CSS and removed inline styles for maintainability. Refactored components to use class-based styling.
- **State Management**: Managed navigation and state transitions between doctor listing, profile, booking, and appointments using React hooks and conditional rendering.
- **Database Seeding**: Needed demo data for doctors; implemented a seed endpoint and script for quick setup.
- **Component Layout**: Adjusted grid and card sizes to ensure proper fit and alignment, especially when displaying multiple doctors per row.

---

This project demonstrates a full-stack healthcare appointment booking system with a clean, modular codebase and a focus on maintainable styling. For questions or suggestions, feel free to reach out!
