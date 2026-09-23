# Frontend Folder Structure

## Introduction

The frontend follows a **hybrid folder organization** that combines **feature-based modules** with **shared infrastructure**.

Business functionality is grouped into feature modules, while reusable components, layouts, configuration, routing, and state management are centralized.

This approach improves:

- Scalability
- Maintainability
- Code reuse
- Separation of concerns
- Team collaboration

---

# Folder Organization

```
src/
│
├── assets/
├── components/
├── config/
├── constants/
├── hooks/
├── lib/
├── modules/
├── routes/
├── shared/
├── store/
├── styles/
├── util/
│
├── App.jsx
├── main.jsx
└── index.css
```

The project is divided into infrastructure folders and business feature modules.

---

# Root Level Structure

## assets/

Contains static application assets.

Examples

- Images
- Icons
- Logos
- SVG files
- Fonts

Assets are imported directly into components.

Example

```
assets/

hero.png

react.svg

vite.svg
```

---

## components/

Contains reusable application components that are **not tied to a specific business feature**.

Responsibilities include:

- Layouts
- Navigation
- Shared UI primitives

Example

```
components/

layout/

ui/
```

Business-specific components should remain inside their respective feature module.

---

## config/

Contains application-wide configuration.

Responsibilities include:

- Axios configuration
- Query Client configuration
- Global providers

Example

```
config/

axios.js

QueryProvider.jsx
```

No business logic should exist here.

---

## constants/

Stores application constants.

Examples

- Route definitions
- Navigation configuration
- Permission constants
- Enum-like values

These values should never contain business logic.

---

## hooks/

Contains reusable custom hooks shared across the application.

Examples

```
useDebounce()

useWindowSize()

useLocalStorage()
```

Feature-specific hooks belong inside their feature module.

---

## lib/

Contains framework-independent helper utilities.

Examples

```
utils.js

cn()

formatClassNames()
```

This folder should contain generic helper functions.

---

## modules/

The core of the application.

Every business feature lives inside the modules directory.

Examples

```
modules/

admin/

public/
```

Each module owns its pages, components, hooks, services, and utilities.

This minimizes coupling between unrelated features.

---

## routes/

Contains application routing.

Responsibilities

- Route definitions
- Protected routes
- Route guards
- Route groups

Example

```
AppRoutes.jsx

PublicRoutes.jsx

ProtectedRoutes.jsx

AdminRoutes.jsx
```

Only routing logic belongs here.

---

## shared/

Contains reusable code shared across multiple features.

Examples

- Shared components
- Shared hooks
- Shared utilities
- Shared helpers

The shared folder must remain independent of any business feature.

---

## store/

Contains global state management.

Responsibilities include

- Redux store
- Feature slices
- Async thunks
- Global reducers

Example

```
store/

auth/

movie/

search/

location/

store.js
```

Only global application state should exist here.

Server state belongs to TanStack Query.

---

## styles/

Contains global styling resources.

Examples

```
Global CSS

Variables

Animations

Skeleton styles
```

Component-specific styling should remain alongside the component whenever practical.

---

## util/

Contains reusable helper functions.

Examples

```
formatDate()

maskEmail()

getCookie()
```

Utility functions should remain pure and independent.

---

# Feature Modules

The application is organized around business capabilities.

```
modules/

admin/

public/
```

Each module encapsulates a complete business domain.

---

## Public Module

Contains functionality available to end users.

Examples

```
Authentication

Home

Movies

Showtimes

Booking

Payment

User Profile
```

Each feature manages its own implementation.

Example

```
movie/

components/

pages/

hooks/

api/

utils/
```

Everything required by the Movie feature remains inside the Movie module whenever possible.

---

## Admin Module

Contains functionality available only to administrators.

Examples

```
Dashboard

Movie Management

Theatre Management

Upload

Global Search
```

Like the public module, each administrative feature owns its internal implementation.

---

# Feature Structure

Each feature follows a consistent internal organization.

```
Feature

│

├── api/

├── components/

├── hooks/

├── pages/

├── services/

├── constants/

├── validations/

└── utils/
```

Not every feature requires every directory.

Only create folders that are needed.

---

## api/

Contains HTTP request functions.

Responsibilities

- Fetch data
- Update data
- Delete data

No UI logic belongs here.

---

## components/

Contains UI components used only within the feature.

Example

```
MovieCard

MovieGrid

HeroSection

RatingCard
```

Feature components should not be imported outside their feature unless intentionally shared.

---

## hooks/

Contains feature-specific custom hooks.

Examples

```
useMovie()

useMovies()

useMovieSearch()
```

These hooks encapsulate feature-specific state and behavior.

---

## pages/

Contains route-level components.

Examples

```
MovieListingPage

MovieDetailsPage

MovieShowPage
```

Pages compose feature components into complete screens.

---

## services/

Contains feature business services.

Examples

```
movieAPI.js

uploadService.js
```

Services provide an abstraction over API requests.

---

## validations/

Contains validation schemas.

Examples

```
movieSchema.js
```

Validation logic remains independent from UI components.

---

## constants/

Stores feature-specific constants.

Examples

```
Movie Status

Filter Values

Default Options
```

---

## utils/

Contains helper functions used only within the feature.

Example

```
slugifyMovie()
```

If utilities become shared across multiple features, they should be moved into `shared/` or `util/`.

---

# Dependency Rules

Dependencies should always move downward.

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

Avoid:

- Importing feature components into unrelated features.
- Importing UI components inside services.
- Importing pages into components.

---

# Folder Responsibilities

| Folder | Responsibility |
|----------|----------------|
| assets | Static assets |
| components | Shared application components |
| config | Global configuration |
| constants | Application constants |
| hooks | Shared custom hooks |
| lib | Generic helper library |
| modules | Business features |
| routes | Application routing |
| shared | Cross-feature reusable code |
| store | Global state management |
| styles | Global styles |
| util | General utility functions |

---

# Best Practices

- Organize code by business feature rather than file type.
- Keep related files together.
- Prefer local feature ownership over global folders.
- Move code to `shared/` only when it is reused by multiple features.
- Keep pages thin by delegating UI to components and logic to hooks/services.
- Avoid circular dependencies between features.
- Place feature-specific hooks, utilities, and services within the feature.
- Reserve the `store` directory for truly global client state.

---

# Summary

The frontend structure balances **feature isolation** with **shared infrastructure**.

Business features are organized within the `modules` directory, while reusable components, global configuration, routing, state management, and utilities remain centralized. This organization supports scalability, improves maintainability, and enables the application to grow without introducing unnecessary coupling between features.