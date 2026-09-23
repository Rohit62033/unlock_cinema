# Layouts

## Introduction

Layouts define the overall structure of the application's user interface.

Rather than allowing every page to create its own navigation, headers, sidebars, and footers, layouts provide a consistent application shell while individual pages focus only on feature-specific content.

A layout is responsible for arranging common interface elements around the page content.

---

# Objectives

The layout system is designed to provide:

- Consistent user experience
- Reusable application structure
- Separation between page content and navigation
- Shared interface components
- Responsive design
- Simplified page implementation

---

# Layout Architecture

The application uses multiple layouts based on the area being accessed.

```
Application

        │

        ▼

Route Selection

        │

 ┌──────┴───────────┐

 ▼                  ▼

Main Layout     Admin Layout

 │                  │

 ▼                  ▼

Public Pages    Admin Pages
```

Each layout acts as a container that wraps the page rendered by the router.

---

# Layout Responsibilities

Layouts are responsible for:

- Navigation
- Header
- Footer
- Sidebar
- Page container
- Responsive behavior
- Common UI elements

Layouts are **not** responsible for:

- Business logic
- API requests
- Form validation
- State management
- Feature-specific rendering

---

# Main Layout

## Purpose

The Main Layout provides the shared structure for the public-facing application.

It is used for pages accessible to general users.

Examples include:

- Home
- Movie Listing
- Movie Details
- Showtimes
- User Profile

---

## Responsibilities

The Main Layout typically manages:

- Navigation Bar
- Search
- Location Selection
- Footer
- Global dialogs
- Content container

General structure:

```
Main Layout

├── Navbar
├── Top Bar
├── Page Content
└── Footer
```

Pages are rendered inside the content area.

---

# Admin Layout

## Purpose

The Admin Layout provides a dedicated workspace for administrative features.

It presents management tools while maintaining a consistent dashboard experience.

Examples include:

- Dashboard
- Movie Management
- Theatre Management
- Analytics
- User Management

---

## Responsibilities

The Admin Layout manages:

- Sidebar
- Top Navigation
- Header
- Context Header
- Content Area
- Mobile Navigation

General structure:

```
Admin Layout

├── Sidebar
├── Top Navbar
├── Header
└── Page Content
```

All administration pages share the same application shell.

---

# Shared Layout Components

Layouts are composed from reusable components.

Examples include:

```
Navbar

Footer

Sidebar

Top Navbar

Header

Mobile Sidebar
```

These components provide consistent navigation and branding across multiple pages.

---

# Layout Selection

Layouts are selected automatically through the routing system.

```
Browser URL

↓

Router

↓

Determine Route

↓

Select Layout

↓

Render Page
```

Pages never select layouts manually.

The routing configuration determines which layout should wrap the page.

---

# Content Rendering

Layouts render page-specific content inside a dedicated content area.

```
Layout

↓

Shared UI

↓

Outlet / Children

↓

Page
```

The page becomes the dynamic portion of the layout while shared interface elements remain unchanged.

---

# Responsive Design

Layouts adapt to different screen sizes.

Typical responsive behavior includes:

Desktop

- Persistent navigation
- Sidebar
- Full header

Tablet

- Collapsible sidebar
- Responsive spacing

Mobile

- Mobile navigation
- Drawer menu
- Optimized header
- Simplified navigation

The responsive behavior is handled by layout components rather than individual pages.

---

# Layout Lifecycle

A page request follows this sequence:

```
Navigate

↓

Router

↓

Select Layout

↓

Render Shared Components

↓

Render Page

↓

Display UI
```

Only the page content changes during navigation when the layout remains the same.

---

# Design Principles

The layout system follows these principles.

## Consistency

Pages within the same application area share the same interface.

---

## Reusability

Navigation, headers, and footers are implemented once and reused throughout the application.

---

## Separation of Concerns

Layouts manage structure.

Pages manage content.

Components manage presentation.

Services manage communication.

---

## Composition

Layouts are built by composing reusable components instead of duplicating interface code.

---

# Best Practices

- Keep layouts focused on structure.
- Avoid business logic inside layouts.
- Place feature-specific UI inside pages or feature components.
- Reuse layout components across related pages.
- Keep responsive behavior centralized.
- Minimize state inside layouts.
- Use layouts only for shared application structure.

---

# Relationship with Other Documentation

This document explains the application's layout system.

Related documentation:

- **Application Architecture** explains where layouts fit into the frontend architecture.
- **Routing** explains how layouts are selected.
- **Component Architecture** explains how layout components are composed.
- **Folder Structure** explains where layout files are located.

---

# Summary

Layouts provide the shared structure of the application by organizing common interface elements such as navigation bars, sidebars, headers, and footers around page-specific content.

Separating layouts from pages promotes consistency, improves maintainability, and allows the application to scale while preserving a unified user experience across both the public website and the administration panel.