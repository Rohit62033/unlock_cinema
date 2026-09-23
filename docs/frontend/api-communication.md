# API Communication

## Introduction

The frontend communicates with the backend exclusively through REST APIs.

To maintain a clean separation of concerns, React components never communicate directly with the backend. Instead, API communication is abstracted through dedicated service and API layers.

This architecture improves maintainability, testability, and consistency while keeping UI components focused on rendering.

---

# Objectives

The API communication layer is designed to:

- Centralize HTTP communication
- Separate UI from networking
- Standardize request handling
- Provide consistent error handling
- Support authentication
- Simplify data fetching
- Improve maintainability
- Enable request caching

---

# Communication Architecture

The frontend follows a layered communication architecture.

```
React Component

        │

        ▼

Custom Hook

        │

        ▼

Feature API / Service

        │

        ▼

Axios Client

        │

        ▼

Express REST API

        │

        ▼

MongoDB / Redis
```

Each layer has a single responsibility.

---

# Communication Flow

A typical API request follows this lifecycle.

```
User Action

↓

React Component

↓

Feature Hook

↓

API Function

↓

Axios Client

↓

Express Backend

↓

Controller

↓

Service

↓

Database

↓

Response

↓

TanStack Query Cache

↓

Component Re-render
```

---

# API Layer

Each feature owns its own API functions.

Examples include:

```
Movie API

Booking API

Showtime API

Authentication API

Upload API
```

Responsibilities include:

- Building requests
- Calling backend endpoints
- Returning response data

API functions should contain no UI logic.

---

# Service Layer

The service layer provides higher-level abstractions over API functions when additional processing is required.

Responsibilities include:

- Request orchestration
- Data transformation
- Response normalization
- Shared business utilities

Components should consume hooks or services instead of interacting with Axios directly.

---

# Axios Client

All HTTP communication is performed through a centralized Axios instance.

The Axios client is responsible for:

- Base URL configuration
- Default headers
- Credential handling
- Authentication headers
- Request interception
- Response interception
- Global error handling

Centralizing Axios configuration ensures consistent behavior across the application.

---

# Authentication

Authenticated requests automatically include the required credentials.

Typical authentication flow:

```
Login

↓

Receive Authentication

↓

Store Session

↓

Subsequent Requests

↓

Authenticated API Access
```

Authentication details remain encapsulated within the communication layer.

Components should not manually attach authentication headers.

---

# Request Lifecycle

The lifecycle of an API request is:

```
Component

↓

Custom Hook

↓

API Function

↓

Axios Request

↓

Backend

↓

Response

↓

Cache Update

↓

UI Update
```

The communication layer handles networking while the component focuses on rendering.

---

# Error Handling

Errors are handled consistently across the application.

Possible error categories include:

- Network errors
- Validation errors
- Authentication failures
- Authorization failures
- Server errors
- Unexpected failures

The communication layer converts backend responses into predictable errors for the UI.

Components should display user-friendly messages rather than handling raw HTTP responses.

---

# Request Types

The frontend communicates with the backend using standard HTTP methods.

| Method | Purpose |
|---------|----------|
| GET | Retrieve data |
| POST | Create resources |
| PUT | Replace resources |
| PATCH | Partially update resources |
| DELETE | Remove resources |

The choice of method reflects the intended operation on the backend.

---

# Server State Integration

TanStack Query manages API communication for server data.

Typical query lifecycle:

```
Component

↓

Query Hook

↓

API Function

↓

Axios

↓

Backend

↓

Cache

↓

Component
```

The component consumes cached data rather than issuing requests directly.

---

# Mutations

Data modifications are performed using mutations.

Examples include:

- Create Movie
- Update Movie
- Book Tickets
- Submit Review
- Update Profile

Mutation lifecycle:

```
User Action

↓

Mutation

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

This ensures the UI always reflects the latest server state.

---

# Loading States

The communication layer exposes loading status to the UI.

Typical states include:

- Initial loading
- Background refetching
- Mutation pending

Components should render appropriate loading indicators while requests are in progress.

---

# Caching Strategy

Server responses are cached using TanStack Query.

Benefits include:

- Reduced network requests
- Automatic cache reuse
- Background synchronization
- Request deduplication
- Improved responsiveness

Caching behavior is configured through query options.

---

# File Upload Communication

File uploads follow a dedicated communication flow.

```
User Selects File

↓

Generate Upload Authorization

↓

Upload File

↓

Receive File URL

↓

Save Metadata

↓

Update UI
```

Large uploads are handled independently from standard API requests.

---

# Best Practices

The project follows these communication guidelines:

- Never call Axios directly from components.
- Keep API functions focused on HTTP communication.
- Encapsulate business logic inside services or hooks.
- Use TanStack Query for all server state.
- Handle errors consistently.
- Reuse the centralized Axios client.
- Avoid duplicate requests.
- Invalidate cached data after successful mutations.
- Keep API functions small and predictable.

---

# Relationship with Other Documentation

This document explains how the frontend communicates with backend services.

Related documentation:

- **State Management** explains how server responses are stored and cached.
- **Authentication** describes authenticated communication.
- **Routing** explains navigation before communication occurs.
- **API Documentation** describes the REST endpoints exposed by the backend.

---

# Summary

The frontend communicates with the backend through a layered API communication architecture consisting of feature-specific API functions, optional service abstractions, a centralized Axios client, and TanStack Query for server-state management.

This separation allows UI components to remain focused on presentation while networking, authentication, caching, and error handling are managed by dedicated infrastructure layers.