# System Overview

## Introduction

UnlockCinemais a full-stack movie ticket booking platform built using the MERN stack.
It allows users to browse movies, select theatres and showtimes, reserve seats,
complete online payments, and manage bookings.

The application follows layered and featured architecture that separates presentation,
business logic, data access, and infrastructure responsibilities, making the
system easier to maintain, extend, and scale.

The system is divided into several independent layers:

- Frontend
- Backend
- Database
- Cache
- Storage
- External Services

Each layer has a single responsibility and communicates
through clearly defined interfaces.

---

## Project Goals

- Build a scalable movie ticket booking platform.
- Maintain a clear separation of concerns.
- Improve performance through caching.
- Provide a responsive user experience.
- Support future horizontal scaling.

---

## Technology Stack

The following technologies are used throughout the project. Each technology has
been selected to solve a specific problem within the application architecture.

| Layer | Technology | Purpose |

|-------|------------|---------|

| Frontend | React | Builds the Single Page Application (SPA) and provides a component-based user interface. |

| Build Tool | Vite | Provides fast development startup, Hot Module Replacement (HMR), and optimized production builds. |

| Styling | Tailwind CSS | Enables utility-first styling for rapid and consistent UI development. |

| Routing | React Router | Handles client-side routing without full page reloads. |

| State Management | React Query + Redux API | React Query manages server state and caching, while Redux API stores global application state such as authentication. |

| HTTP Client | Axios | Sends HTTP requests from the frontend to the backend API. |

| Backend | Node.js + Express | Provides RESTful APIs, authentication, business logic, and communication with external services. |

| Database | MongoDB | Stores persistent application data such as users, movies, bookings, theatres, and reviews. |

| ODM | Mongoose | Simplifies MongoDB operations using schemas, validation, middleware, and model relationships. |

| Cache | Redis | Improves performance by caching frequently accessed data and temporarily storing seat locks. |

| Authentication | JWT + HTTP-only Cookies | Authenticates users securely using access and refresh tokens. |

| Media Storage | Cloudinary | Stores and serves movie posters, banners, and profile images. |

| Validation | Zod | Performs frontend form validation and ensures consistent input validation. |

| Backend Validation | zod | Validates incoming API requests before executing business logic. |

| Payment Gateway | Razorpay / PayPal | Processes secure online payments for ticket bookings. |

---


## High-Level Architecture

```
+----------------------+
|     Web Browser      |
+----------+-----------+
           |
           v
+----------------------+
|   React Application  |
+----------+-----------+
           |
       Axios (REST API)
           |
           v
+----------------------+
| Express API Server   |
+----+-----------+-----+
     |           |
     |           |
     v           v
+---------+   +---------+
| Redis   |   | MongoDB |
+---------+   +---------+
     |
     v
+----------------------+
|     Cloudinary       |
+----------------------+
```

---

## Core Components

The system is divided into the following major components:

### Fronted 

Responsible for:

- User Interface
- Routing 
- Form Handling
- API Communication
-Authentication State

### Backend

Responsible for:

- Authentication
- Business Logic 
- Validation 
- API Endpoints 
- Caching 
- Payment Integration 

### Cache 

Redis stores:

- Homepage Cache 
- Movie Cache 
- Search Cache
- Seat Lock Cache

---

## Current Features

- User Authentication 
- Movie Management
- Theate Management
- Show Scheduling 
- Seat Selection
- Ticket Booking
- Payment Integration 
- Review System 
- Admin Dashboard

---

## Planned Features 

- Coupons 
- Loyalty Program 
- Push Notification 
- Recommended Engine
- Analytics Dashboard
- AI-based Movie Suggestions
- Review Moderation
- Microservices (Future)


