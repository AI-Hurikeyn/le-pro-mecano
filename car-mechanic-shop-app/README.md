# Car Mechanic Shop Application

## Overview
This project is a full-stack web application for a car mechanic shop that offers various services including diagnostics & repair, oil changes, car washes, and an e-commerce catalog for mechanical products. The application is built using React and TypeScript for the frontend, and Node.js and TypeScript for the backend, following Clean Architecture principles.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **Framework**: React
- **Language**: TypeScript
- **Directory Structure**:
  - `src/components`: Reusable UI components.
  - `src/features`: Feature-specific components and logic.
  - `src/pages`: Page components for different views.
  - `src/services`: Data fetching and API interaction services.
  - `src/hooks`: Custom hooks for state management.
  - `src/types`: Type definitions and interfaces.
  - `src/App.tsx`: Main application component.

### Backend
- **Framework**: Node.js
- **Language**: TypeScript
- **Directory Structure**:
  - `src/application/use-cases`: Business logic for operations.
  - `src/application/services`: Service classes for business logic.
  - `src/domain/entities`: Core data structures.
  - `src/domain/repositories`: Repository interfaces for data access.
  - `src/infrastructure/data`: Data access implementations.
  - `src/infrastructure/services`: External integration services.
  - `src/interfaces/controllers`: Controllers for handling requests.
  - `src/interfaces/routes`: Route definitions for the application.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd car-mechanic-shop-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Project Goals
- Provide a user-friendly interface for customers to book services and purchase products.
- Implement a robust backend to handle business logic and data management.
- Ensure code quality and maintainability by adhering to Clean Architecture principles.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.