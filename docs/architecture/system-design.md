# System Design

## Overview

The project follows a **Hybrid Architecture**, combining both **Feature-Based** and **Layered** architectural patterns.

This approach provides clear separation of business domains while maintaining a consistent flow of responsilities inside each feature.

- **Feature-Based Architecture** groups related functionality into independent modules such as Authentiction, Movies, Theatres, Booking and Payments.

- **Layered Architecture** seperates responsiblities within each module into Routes, Controllers, Services, Resposities, and Models.

This hybrid design improves maintainability, scalability, readability, and allow different developers to work on seperate features with minimal conflicts.

---

# Architecture Principles

The system is designed around the following principles:

- Separation of Concerns
- single Responsibility Principle
- Modular Development
- Code Reusability
- Loose Coupling
- Scalability
- Maintainability
- Testability

---

# Hybrid Architecture

```
                   Application

                        │

        ┌───────────────┴───────────────┐

        │                               │

 Feature-Based Organization      Layered Architecture

        │                               │

 Authentication              Routes

 Movies                      Controllers

 Theatres                    Services

 Bookings                    Repositories

 Payments                    Models

 Reviews                     Middlewares

 Admin                        Utilities
```

The application is first divided into business features.

Each feature internally follows the same layered architecture.

---

# Feature-Based Organisation

The appilication is organised into independent business domains.

Example:

```
backend/

features/

    auth/

    movies/

    theatres/

    shows/

    bookings/

    payments/

    reviews/

shared/

config/

utils/
```

Each feature owns its own business logic.

For example:

```
bookings/

    booking.routes.js

    booking.controller.js

    booking.service.js

    booking.repository.js

    booking.model.js

    booking.validation.js
```

This allows developers to locate all booking-related code in one place.

---

# Layered Architecture

Within every feature, requests pass through several layers.

```
Client Request

      │

Routes

      │

Middlewares

      │

Controllers

      │

Services

      │

Repositories

      │

MongoDB / Redis

      │

Response
```

Each layer has a single responsibility.

---

# Layer Responsibilities

## Routes

Responsibilities

- Define API endpoints
- Attach middleware
- Forward requests to controllers

Routes should not contain business logic.

---

## Middlewares

Responsibilities

- Authentication
- Authorization
- Request Validation
- Rate Limiting
- File Upload
- Logging
- Error Handling

Middlewares execute before reaching controllers.

---

## Controllers

Responsibilities

- Receive HTTP requests
- Extract request data
- Call the appropriate service
- Format API responses

Controllers should remain thin and avoid business logic.

---

## Services

Responsibilities

- Implement business rules
- Coordinate multiple repositories
- Interact with Redis
- Communicate with external services
- Execute transactions

The service layer contains the majority of the application's business logic.

---

## Repositories

Responsibilities

- Query MongoDB
- Query Redis
- Perform CRUD operations
- Abstract database implementation

Repositories do not contain business rules.

---

## Models

Responsibilities

- Define database schemas
- Configure validation
- Define indexes
- Register middleware
- Define relationships

## DTO Layer

- Format API Payload
- Isolate Database Schemas
- Enforce Structural Validation
- Optimize Data Transfer

Models represent the application's persistent data.

---

# Request Lifecycle

A typical request follows this sequence:

```
Browser

↓

React

↓

Axios

↓

Express Route

↓

Authentication Middleware

↓

Validation Middleware

↓

Controller

↓

Service

↓

Repository

↓

MongoDB / Redis

↓

Service

↓

Controller

↓

JSON Response

↓

React UI
```

---

# Why Use Hybrid Architecture?

Using only a layered architecture causes features to become scattered across many folders.

Example:

```
controllers/

services/

models/

routes/
```

Finding all booking-related files requires navigating multiple directories.

Using only feature-based architecture may lead to inconsistent internal structures if each feature is organized differently.

The hybrid approach solves both problems:

- Related files remain together.
- Every feature follows the same internal structure.
- Business logic is isolated.
- Responsibilities remain clearly separated.
- New features can be added without affecting existing modules.

---

# Benefits

- Modular code organization
- Easier maintenance
- Better scalability
- Clear responsibility boundaries
- Improved developer productivity
- Consistent project structure
- Simplified testing
- Reduced code duplication

---

# Future Evolution

As the project grows, individual features can be extracted into independent services without significant restructuring.

Possible future evolution:

```
Current

Frontend

↓

Express Application

↓

Feature Modules

↓

MongoDB + Redis


Future

Frontend

↓

API Gateway

↓

Authentication Service

Movie Service

Booking Service

Payment Service

Notification Service

↓

MongoDB

Redis

Message Queue
```

The current hybrid architecture lays the foundation for future scaling while remaining simple enough for a monolithic application.

### Goal of system-design.md

By the of this document, a new developer should understand:

- How requests travel through the application
- What responsibility each layer has
- Why the project endis divided into layers
- Where new features should be implemented
- How layers communicate
- Which layer should never directly access another layer

This document is about architecture, not implementation.

The project is organized primarily by business features (feature-based architecture). Each feature internally follows a layered architecture consisting of Routes, Middlewares, Controllers, Services, Repositories, and Models. This hybrid approach keeps related code together while maintaining a consistent separation of responsibilities across the application.
