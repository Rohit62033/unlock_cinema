# Component Architecture

## Introduction

The frontend follows a **component-based architecture**, where the user interface is built by composing small, reusable, and focused components.

Each component has a single responsibility and can be combined with other components to create complex screens.

The architecture emphasizes:

- Reusability
- Composition
- Separation of concerns
- Maintainability
- Scalability
- Consistency

---

# Objectives

The component architecture is designed to:

- Build reusable UI
- Reduce duplication
- Separate business logic from presentation
- Improve maintainability
- Simplify testing
- Encourage feature isolation

---

# Component Hierarchy

The application follows a layered component hierarchy.

```
Application

│

├── Layouts

│

├── Pages

│

├── Feature Components

│

├── Shared Components

│

└── UI Components
```

Each layer has a different responsibility.

---

# Architecture Overview

```
Application

↓

Router

↓

Layout

↓

Page

↓

Feature Components

↓

Shared Components

↓

UI Components
```

Higher-level components compose lower-level components.

Lower-level components should remain independent of higher-level components.

---

# Component Categories

The application organizes components into five categories.

- Layout Components
- Page Components
- Feature Components
- Shared Components
- UI Components

---

# Layout Components

## Purpose

Layout components provide the application's structural framework.

Examples include:

- Main Layout
- Admin Layout
- Navbar
- Sidebar
- Footer
- Header

Responsibilities:

- Application shell
- Navigation
- Responsive structure
- Shared interface elements

Layouts should not contain feature-specific business logic.

---

# Page Components

## Purpose

Pages represent route-level components.

Examples include:

- Home Page
- Movie Details Page
- Booking Page
- Dashboard Page

Responsibilities:

- Compose feature components
- Connect routing
- Coordinate page-level state

Pages should remain thin.

Business logic should be delegated to hooks or services.

---

# Feature Components

## Purpose

Feature components implement business functionality for a specific feature.

Examples:

Movie Module

```
MovieCard

MovieGrid

HeroSection

MovieFilters

ReviewList
```

Booking Module

```
SeatMap

SeatLegend

SeatRow

BookingSummary
```

Feature components should remain inside their feature module.

---

# Shared Components

## Purpose

Shared components are reused across multiple features.

Examples include:

- Modal
- Pagination
- Search Input
- Empty State
- Loader
- Confirmation Dialog

Shared components must remain independent of business domains.

---

# UI Components

## Purpose

UI components are the smallest reusable building blocks.

Examples include:

- Button
- Input
- Card
- Badge
- Avatar
- Checkbox
- Tooltip
- Spinner

UI components should:

- Be reusable
- Be configurable
- Avoid business logic

---

# Component Composition

Rather than creating large components, the application builds interfaces through composition.

Example hierarchy:

```
MovieDetailsPage

↓

MovieHero

↓

RatingCard

↓

Badge

↓

Icon
```

Each component focuses on a single responsibility.

---

# Component Responsibilities

The responsibility of each layer is clearly defined.

| Component | Responsibility |
|-----------|----------------|
| Layout | Application structure |
| Page | Route composition |
| Feature | Business UI |
| Shared | Cross-feature UI |
| UI | Primitive interface elements |

---

# Component Communication

Components communicate through unidirectional data flow.

```
Parent

↓

Props

↓

Child
```

Children notify parents through callback functions.

```
Child

↓

Event

↓

Parent
```

This keeps the data flow predictable.

---

# State Ownership

State should be owned by the highest component that requires it.

Guidelines:

- Local UI state belongs to the nearest component.
- Shared feature state belongs to feature hooks.
- Global client state belongs to Redux.
- Server state belongs to TanStack Query.

Avoid unnecessary prop drilling by lifting state only when required.

---

# Business Logic

Business logic should not be placed inside presentation components.

Instead:

```
Component

↓

Custom Hook

↓

Service

↓

API
```

Components should focus on:

- Rendering
- User interaction
- Delegating actions

---

# Reusability

Before creating a new component, consider whether the functionality already exists.

A component should be moved to the shared layer only when it is reused by multiple features.

Feature-specific components should remain inside their feature module.

---

# Component Lifecycle

A typical rendering lifecycle is:

```
User Action

↓

Component Render

↓

Hook Execution

↓

Data Retrieval

↓

State Update

↓

Re-render
```

Components should remain declarative and react to state changes.

---

# Design Principles

## Single Responsibility

Each component should have one clear purpose.

---

## Composition Over Inheritance

Complex interfaces are built by combining simple components rather than extending existing ones.

---

## Feature Isolation

Feature components should not depend on unrelated features.

---

## Reusability

Shared and UI components should be generic enough to support multiple use cases.

---

## Predictability

Data should flow in one direction, making component behavior easier to understand.

---

# Best Practices

The project follows these guidelines.

- Keep components small and focused.
- Prefer composition over large monolithic components.
- Separate presentation from business logic.
- Use custom hooks for reusable behavior.
- Keep shared components framework-agnostic where possible.
- Avoid duplicating UI across features.
- Lift state only when necessary.
- Keep feature components inside their respective modules.
- Promote components to the shared layer only after they are reused.

---

# Relationship with Other Documentation

This document explains how components are organized and interact.

Related documentation:

- **Application Architecture** explains the overall frontend architecture.
- **Folder Structure** describes where components are located.
- **Layouts** explains the application's layout components.
- **State Management** describes how components consume and update state.
- **API Communication** explains how components retrieve and modify server data.

---

# Summary

The frontend uses a layered component architecture that separates layouts, pages, feature components, shared components, and UI primitives.

By emphasizing composition, feature isolation, and clear ownership of responsibilities, the application remains scalable, maintainable, and easy to extend. Components focus on presentation while business logic, state management, and API communication are delegated to dedicated hooks and services.