# Frontend Application Architecture

## Introduction

The frontend is built as a **Single Page Application (SPA)** using React. It follows a **hybrid architectural approach** that combines Feature-Based Organization, Component-Based Development, and Layered UI Architecture.

This architecture is designed to support a growing application by separating business features from reusable infrastructure, promoting maintainability, scalability, and code reuse.

Rather than organizing the application solely by technical concerns or business domains, the architecture combines both approaches:

- Business functionality is grouped into feature modules.
- Shared infrastructure is centralized for reuse.
- UI is composed from reusable components.
- Navigation is managed through a centralized routing system.
- Client and server state are managed independently.

---

# Architectural Goals

The frontend architecture is designed around the following goals:

- Separation of concerns
- Feature isolation
- Reusable user interface components
- Predictable state management
- Maintainable codebase
- Scalable application growth
- Consistent user experience
- Easy onboarding for new developers

---

# Architectural Style

The application combines multiple architectural patterns.

## Feature-Based Organization

Business functionality is organized into independent feature modules.

Examples include:

- Authentication
- Home
- Movies
- Showtimes
- Booking
- Payment
- Administration

Each feature owns its pages, components, hooks, services, and utilities whenever possible.

This minimizes coupling between unrelated features and allows teams to work independently.

---

## Component-Based Architecture

The user interface is built from reusable React components.

Components are composed into larger interfaces instead of duplicating UI.

Example hierarchy:

```
Page

↓

Feature Component

↓

Reusable Component

↓

Primitive UI Component
```

Example:

```
MovieDetailsPage

↓

HeroSection

↓

RatingCard

↓

Button
```

This promotes consistency and reduces duplicated code.

---

## Layered UI Architecture

Although React applications do not have traditional backend layers, responsibilities are still separated.

```
Presentation Layer
        │
Feature Layer
        │
State Layer
        │
Service Layer
        │
Backend API
```

### Presentation Layer

Responsible for rendering the user interface.

Includes:

- Pages
- Layouts
- Components
- Forms
- Dialogs

No business logic should exist here.

---

### Feature Layer

Contains business-specific functionality.

Each feature manages:

- Feature pages
- Feature components
- Hooks
- Local utilities
- Feature-specific services

Example:

```
Movie Module

Movie Pages

Movie Components

Movie Hooks

Movie API
```

---

### State Layer

Responsible for managing application state.

The application separates state into different categories.

#### Local State

Managed with React hooks.

Used for:

- Form values
- Dialog visibility
- UI interactions

---

#### Global Client State

Managed using Redux Toolkit.

Examples:

- Authentication
- User preferences
- UI state
- Selected location

---

#### Server State

Managed using TanStack Query.

Responsible for:

- Fetching data
- Caching
- Background refetching
- Mutations
- Cache invalidation

Separating server state from client state reduces unnecessary Redux complexity.

---

### Service Layer

Responsible for all communication with the backend.

Responsibilities include:

- API requests
- Request configuration
- Authentication headers
- Error handling
- Response transformation

UI components never communicate directly with Axios.

Instead:

```
Component

↓

Hook

↓

Service

↓

Axios

↓

Backend
```

---

# High-Level Architecture

```
                     Browser
                         │
                         ▼
                React Application
                         │
 ┌──────────────┬──────────────┬──────────────┐
 │              │              │              │
 ▼              ▼              ▼              ▼
Layouts      Routes       Shared UI      Feature Modules
 │              │              │              │
 └──────────────┴──────────────┴──────────────┘
                         │
                         ▼
                  State Management
                         │
      ┌──────────────────┴──────────────────┐
      ▼                                     ▼
Redux Toolkit                     TanStack Query
(Client State)                    (Server State)
      └──────────────────┬──────────────────┘
                         ▼
                    API Services
                         ▼
                       Axios
                         ▼
                   Express Backend
```

---

# Application Layers

## Routing Layer

Responsible for:

- URL management
- Route protection
- Lazy loading
- Navigation

Routes determine which pages are displayed based on the current URL.

---

## Layout Layer

Layouts provide the common application structure.

Examples:

- Public Layout
- Admin Layout

Each layout manages shared interface elements such as navigation bars, sidebars, and footers while rendering feature-specific content.

---

## Feature Layer

Features encapsulate business functionality.

A feature may include:

- Pages
- Components
- Hooks
- Services
- Utilities
- Validation
- Constants

Features communicate through shared services instead of directly depending on one another.

---

## Shared Layer

Shared code is application-independent.

Examples include:

- Buttons
- Inputs
- Dialogs
- Icons
- Utility functions
- Layout components

Business logic should never be placed inside the shared layer.

---

## Configuration Layer

Contains application-wide configuration.

Examples:

- Axios configuration
- Query Client
- Environment configuration

---

# Request Flow

A typical user interaction follows this lifecycle.

```
User Action

↓

React Component

↓

Feature Hook

↓

Service

↓

Axios

↓

Express API

↓

Response

↓

TanStack Query / Redux

↓

Component Re-render

↓

Updated UI
```

---

# Dependency Direction

Dependencies should always flow downward.

```
Pages

↓

Feature Components

↓

Shared Components

↓

Hooks

↓

Services

↓

Axios

↓

Backend
```

Lower layers must never depend on higher layers.

For example:

- Shared components should not import feature modules.
- Services should not import UI components.
- Hooks should not render UI.

---

# Design Principles

The frontend architecture follows these principles:

## Separation of Concerns

Each layer has a single responsibility.

---

## Reusability

Reusable UI belongs in shared components.

Business-specific UI remains inside feature modules.

---

## Feature Isolation

Each feature owns its implementation and minimizes dependencies on other features.

---

## Composition Over Inheritance

Complex interfaces are built by composing smaller components.

---

## Predictable Data Flow

State updates always follow a consistent flow from user interaction to state change to UI update.

---

## Scalability

The architecture supports adding new features without requiring significant changes to existing modules.

---

# Summary

The frontend architecture combines Feature-Based Organization, Component-Based Development, and Layered UI Architecture to create a scalable, maintainable, and modular React application.

By separating presentation, features, state management, and API communication, the application remains easy to extend as new functionality is introduced.