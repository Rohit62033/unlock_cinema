# Frontend Request Lifecycle

## Introduction

The frontend request lifecycle describes how a user interaction is transformed into an HTTP request, how the response is processed, and how the user interface is updated.

Unlike the backend request lifecycle, this document focuses only on the behavior inside the React application.

---

# Overview

Every request follows the same high-level lifecycle.

```
User Interaction

↓

React Event

↓

Component State

↓

Feature Hook

↓

API Service

↓

Axios

↓

Backend API

↓

Response

↓

React Query / Redux

↓

Component Re-render

↓

Updated UI
```

---

# Lifecycle Stages

## 1. User Interaction

A lifecycle begins when the user performs an action.

Examples

- Click button
- Submit form
- Navigate to page
- Change filter
- Search movie
- Book ticket

Example

```
User clicks

"Book Tickets"
```

↓

```
React Event Handler
```

---

## 2. Event Handling

React captures the interaction.

Example

```jsx
<Button onClick={handleBooking} />
```

The handler is responsible for initiating application logic.

Responsibilities

- Validate input
- Update local state
- Trigger API request

---

## 3. Component State

Before communicating with the backend, the component may update local state.

Examples

```
Loading

Selected Movie

Search Value

Current Page

Dialog State
```

Local state is managed using React Hooks.

```
useState()

useReducer()
```

---

## 4. Feature Hook

Business logic should not live inside components.

Instead, components delegate behavior to feature hooks.

Example

```
MovieListingPage

↓

useMovies()

↓

Movie Service
```

Feature hooks are responsible for

- Coordinating requests
- Preparing parameters
- Managing loading state
- Handling success
- Handling errors

---

## 5. API Service

Hooks call service functions.

Example

```
useMovie()

↓

movieService.getMovie()

↓

Axios
```

Services isolate HTTP communication from UI.

Responsibilities

- Build request
- Send request
- Parse response
- Throw errors

UI components never communicate directly with Axios.

---

## 6. Axios Request

Axios sends the HTTP request.

Responsibilities

- Base URL
- Authentication
- Cookies
- Headers
- Interceptors

Example

```
GET

/api/movies
```

---

## 7. Backend Processing

The backend performs

- Authentication
- Validation
- Business Logic
- Database Operations

The frontend treats the backend as a black box.

---

## 8. Response Processing

The backend returns data.

Axios resolves the promise.

```
Promise

↓

Response

↓

Service

↓

Hook

↓

Component
```

---

## 9. State Update

Depending on the request, state is updated.

### Server State

Managed by

- TanStack Query

Responsibilities

- Cache
- Refetch
- Synchronization

---

### Client State

Managed by

- Redux Toolkit

Examples

- Authentication
- User Preferences
- Selected Location
- UI State

---

### Local State

Managed by

```
useState()

useReducer()
```

Examples

- Modal
- Loading
- Form Values

---

## 10. Component Re-render

React automatically updates the UI after state changes.

```
State Changed

↓

Virtual DOM

↓

Diff

↓

DOM Update

↓

User Sees Changes
```

---

# Error Lifecycle

If an error occurs

```
Request

↓

Axios Error

↓

Service

↓

Hook

↓

Component

↓

Error UI
```

Examples

- Toast
- Alert
- Error Boundary
- Retry Button

---

# Loading Lifecycle

Every request follows a loading lifecycle.

```
Idle

↓

Loading

↓

Success

↓

Display Data
```

or

```
Idle

↓

Loading

↓

Error

↓

Retry
```

Loading indicators should be displayed during every asynchronous operation.

---

# Complete Lifecycle

```
User

↓

React Event

↓

Component

↓

Feature Hook

↓

API Service

↓

Axios

↓

Backend

↓

Axios Response

↓

TanStack Query / Redux

↓

React Re-render

↓

Updated UI
```

---

# Design Principles

The frontend request lifecycle follows these principles.

## Separation of Concerns

Each layer has a single responsibility.

---

## Single Direction Data Flow

Data always flows downward.

```
User

↓

Component

↓

Hook

↓

Service

↓

Axios

↓

Backend

↓

State

↓

UI
```

---

## UI Independence

Components should never know

- HTTP details
- Endpoints
- Headers
- Authentication logic

Those responsibilities belong to services.

---

## Predictable Updates

Every state change follows the same lifecycle.

This consistency makes the application easier to debug, test, and maintain.

---

# Summary

The frontend request lifecycle transforms user interactions into backend requests through a layered process involving components, hooks, services, Axios, and state management.

By separating UI, business logic, networking, and state updates, the application remains predictable, scalable, and maintainable.