# Routing

## Introduction

The application uses **React Router** to implement client-side routing within a Single Page Application (SPA).

Routing is responsible for:

- URL management
- Navigation
- Route protection
- Layout selection
- Access control
- Lazy loading (where applicable)

The routing architecture separates public and protected areas of the application while maintaining a consistent navigation experience.

---

# Routing Goals

The routing system is designed to achieve the following objectives:

- Clear route organization
- Secure access control
- Separation between public and administrative areas
- Nested layouts
- Predictable navigation
- Easy scalability

---

# Routing Architecture

The application organizes routes into multiple groups.

```
Browser URL
        │
        ▼
AppRoutes
        │
 ┌──────┴──────────┐
 │                 │
 ▼                 ▼
Public Routes   Protected Routes
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
     User Routes          Admin Routes
```

The router determines which layout and page should be rendered based on the requested URL.

---

# Route Hierarchy

The application is divided into two major route groups.

```
Application

├── Public
│
└── Protected
     │
     ├── User
     │
     └── Admin
```

Each group has different accessibility rules.

---

# Public Routes

Public routes are accessible without authentication.

Examples include:

- Home
- Movie Listing
- Movie Details
- Search
- Authentication
- About

Users may browse available content without signing in.

Authentication is required only when performing protected actions such as booking tickets.

---

# Protected Routes

Protected routes require an authenticated user.

These routes verify the user's session before rendering the requested page.

Examples include:

- Booking
- User Profile
- Booking History
- Payment
- Account Settings

Unauthenticated users are redirected to the authentication flow.

---

# Administrative Routes

Administrative routes are accessible only to authorized administrators.

Examples include:

- Dashboard
- Movie Management
- Theatre Management
- Show Management
- Analytics
- User Management

Administrative pages are protected by both authentication and authorization.

---

# Route Protection

Protected routes use authentication guards to verify access.

The navigation flow is:

```
User

↓

Protected Route

↓

Authenticated?

↓

Yes

↓

Render Page

↓

No

↓

Redirect to Login
```

Administrative routes include an additional authorization check.

```
Authenticated

↓

Role Check

↓

Admin

↓

Render Dashboard

↓

Non-Admin

↓

Access Denied
```

---

# Layout Routing

Layouts provide shared interface elements for groups of pages.

The application currently uses separate layouts for different application areas.

```
Main Layout

↓

Public Pages
```

```
Admin Layout

↓

Administrative Pages
```

Layouts typically provide:

- Navigation Bar
- Sidebar
- Header
- Footer
- Shared Context

Individual pages render inside the layout's content area.

---

# Navigation Flow

A typical navigation flow:

```
Home

↓

Movie Details

↓

Showtimes

↓

Seat Selection

↓

Payment

↓

Booking Confirmation
```

Administrative flow:

```
Dashboard

↓

Movie Management

↓

Create Movie

↓

Publish

↓

Back to Dashboard
```

---

# Dynamic Routes

Dynamic routes allow pages to display resource-specific information.

Examples:

```
/movies/:city

/movies/:city/:slug/:movieId

/showtimes/:movieId

/profile/:userId
```

Dynamic parameters are extracted using React Router and used to fetch the appropriate resource.

---

# Nested Routing

Nested routing is used where multiple pages share the same layout.

Example:

```
Admin

├── Dashboard
├── Movies
├── Theatres
├── Shows
└── Users
```

All child pages inherit the administrative layout.

---

# Route Configuration

Routes are defined centrally and organized by application area.

Responsibilities include:

- Route paths
- Layout assignment
- Route guards
- Lazy loading
- Error handling

Centralizing route configuration improves maintainability and makes navigation easier to understand.

---

# Authentication Flow

Protected navigation follows this lifecycle.

```
User

↓

Navigate

↓

Protected Route

↓

Authentication Check

↓

Authorized?

↓

Render Component

↓

Otherwise

↓

Redirect
```

---

# Error Handling

The routing system handles invalid navigation gracefully.

Examples include:

- Unknown routes
- Unauthorized access
- Forbidden pages

Typical responses:

- 404 Page
- Access Denied
- Redirect to Home
- Redirect to Login

---

# Route Organization

The application groups related pages together.

Example:

```
Public

Home

Movies

Showtimes

Authentication
```

```
Admin

Dashboard

Movies

Theatres

Shows

Analytics
```

This organization keeps routing predictable as new features are introduced.

---

# Routing Best Practices

The project follows these routing guidelines:

- Keep route definitions centralized.
- Protect sensitive routes.
- Use nested layouts where appropriate.
- Prefer descriptive URL paths.
- Keep route components lightweight.
- Group related routes together.
- Avoid duplicate route definitions.
- Use dynamic routes only when resource identifiers are required.

---

# Relationship with Other Documentation

This document describes **how navigation is organized**.

Related documentation:

- **Application Architecture** – explains where routing fits within the frontend architecture.
- **Layouts** – describes the layout system used by route groups.
- **Authentication** – explains how route protection works.
- **Folder Structure** – describes where routing files are located.

---

# Summary

The routing architecture provides a clear separation between public and protected application areas while ensuring secure access control and consistent navigation.

By centralizing route definitions, using route guards, and organizing pages into logical groups, the application remains scalable and easy to extend as new features are added.