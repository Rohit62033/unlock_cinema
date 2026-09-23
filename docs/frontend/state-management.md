# State Management

## Introduction

The frontend uses a **hybrid state management architecture** to manage different categories of application state.

Rather than storing all data in a single global store, state is divided according to its responsibility.

The application uses:

- React Local State
- Redux Toolkit
- TanStack Query

Each solution addresses a different type of state, reducing complexity while improving maintainability and performance.

---

# Objectives

The state management architecture is designed to:

- Separate client state from server state
- Reduce unnecessary global state
- Simplify data fetching
- Improve performance
- Enable predictable state updates
- Reduce duplicate API requests
- Improve scalability

---

# State Categories

Application state is divided into three categories.

```
Application State

│

├── Local State

├── Global Client State

└── Server State
```

Each category has a different lifecycle and management strategy.

---

# Local State

## Purpose

Local state is used for information that belongs to a single component.

Examples include:

- Modal visibility
- Form inputs
- Selected tabs
- Dropdown state
- Toggle switches
- Temporary UI values

Local state is managed using React hooks.

```
Component

↓

useState()

↓

Component Re-render
```

Local state should never be shared across unrelated components.

---

# Global Client State

## Purpose

Global client state stores information shared across multiple parts of the application.

Examples include:

- Authentication
- Current user
- Selected location
- UI preferences
- Search filters
- Theme

The project uses **Redux Toolkit** for global client state.

---

## Redux Architecture

```
Redux Store

│

├── Auth Slice

├── Movie Slice

├── Search Slice

├── Location Slice

└── UI Slice
```

Each slice owns a specific area of the application.

---

## Redux Responsibilities

Redux is responsible for:

- Global application state
- Authentication state
- UI state
- User preferences
- Cross-feature communication

Redux is **not** responsible for caching API responses.

---

# Server State

## Purpose

Server state represents data owned by the backend.

Examples include:

- Movies
- Showtimes
- Bookings
- Reviews
- User profile
- Dashboard statistics

Server state is managed using **TanStack Query**.

---

## Why TanStack Query?

Managing server state manually introduces several challenges:

- Duplicate API requests
- Loading state management
- Error handling
- Cache invalidation
- Background refetching

TanStack Query provides these capabilities automatically.

---

## Query Lifecycle

```
Component

↓

Custom Hook

↓

Query

↓

API

↓

Backend

↓

Response

↓

Cache

↓

Component
```

The component always reads from the cache instead of making direct API requests.

---

# Mutations

Updates to server data are performed using mutations.

Examples include:

- Create Movie
- Update Profile
- Book Ticket
- Submit Review

General lifecycle:

```
User Action

↓

Mutation

↓

API Request

↓

Backend

↓

Success

↓

Invalidate Cache

↓

Automatic Refetch

↓

Updated UI
```

---

# State Flow

A typical interaction follows this sequence.

```
User

↓

React Component

↓

Custom Hook

↓

Redux / Query

↓

API Service

↓

Backend

↓

Response

↓

State Update

↓

UI Re-render
```

Each layer has a single responsibility.

---

# State Ownership

The application follows a clear ownership model.

| State | Owner |
|--------|-------|
| Form Inputs | Component |
| Modal State | Component |
| Authentication | Redux |
| Selected Location | Redux |
| Search UI | Redux |
| Movie List | TanStack Query |
| Showtimes | TanStack Query |
| Bookings | TanStack Query |
| Reviews | TanStack Query |

The owner of the state is responsible for updating it.

---

# Custom Hooks

Business logic is encapsulated inside custom hooks.

Example:

```
Component

↓

useMovie()

↓

TanStack Query

↓

API
```

Instead of components calling APIs directly, components consume hooks that expose:

- Data
- Loading state
- Error state
- Mutation functions

This keeps presentation and data logic separate.

---

# Data Flow

The application follows a unidirectional data flow.

```
User Interaction

↓

Dispatch Action

↓

State Update

↓

Component Re-render
```

For server data:

```
User

↓

Query

↓

Backend

↓

Cache

↓

UI
```

---

# Cache Strategy

TanStack Query acts as the primary cache for server state.

Benefits include:

- Automatic caching
- Request deduplication
- Background updates
- Cache invalidation
- Optimistic updates (where appropriate)

Caching reduces unnecessary network requests and improves responsiveness.

---

# Choosing the Right State

The following guidelines determine where state should live.

### Use Local State when:

- The state belongs to one component.
- No other component needs access.
- The value is temporary.

Examples:

- Dialog open/close
- Form fields
- Accordion expansion

---

### Use Redux when:

- Multiple features need the state.
- The state represents client-side application data.
- The state should persist across navigation.

Examples:

- Authentication
- Selected location
- UI preferences

---

### Use TanStack Query when:

- Data comes from the backend.
- The data requires caching.
- The data can become stale.
- Background synchronization is beneficial.

Examples:

- Movies
- Bookings
- Reviews
- Dashboard statistics

---

# Best Practices

The project follows these guidelines.

- Keep local state local.
- Do not duplicate server state in Redux.
- Fetch backend data using TanStack Query.
- Store only global client state in Redux.
- Encapsulate data fetching inside custom hooks.
- Keep reducers pure.
- Avoid unnecessary global state.
- Invalidate queries after successful mutations.
- Keep components focused on rendering.

---

# Relationship with Other Documentation

This document explains how application state is managed.

Related documentation:

- **Application Architecture** describes where state management fits into the frontend architecture.
- **API Communication** explains how data is retrieved from the backend.
- **Authentication** explains how authentication state is managed.
- **Component Architecture** describes how components consume state.

---

# Summary

The frontend separates application state into three categories:

- Local State for component-specific UI.
- Redux Toolkit for shared client state.
- TanStack Query for server state.

This hybrid approach ensures that each type of state is managed using the most appropriate tool, resulting in a scalable, maintainable, and performant application.