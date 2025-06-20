# Car Mechanic Shop Backend

This is the backend for the Car Mechanic Shop application, built using Node.js and TypeScript. The backend follows Clean Architecture principles to ensure a well-structured and maintainable codebase.

## Project Structure

- **src/**: Contains the source code for the application.
  - **application/**: Contains use cases and services that encapsulate business logic.
    - **use-cases/**: Use-case classes for specific operations.
    - **services/**: Service classes that interact with repositories.
  - **domain/**: Contains core entities and repository interfaces.
    - **entities/**: Entity classes defining core data structures.
    - **repositories/**: Repository interfaces for data access.
  - **infrastructure/**: Contains implementations for data access and external services.
    - **data/**: Data access implementations.
    - **services/**: Services for external integrations.
  - **interfaces/**: Contains controllers and route definitions.
    - **controllers/**: Controller classes for handling requests.
    - **routes/**: Route definitions mapping HTTP requests to controllers.
  - **index.ts**: Entry point of the application.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)
- TypeScript (version X.X.X)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd car-mechanic-shop-app/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` (or the specified port in your configuration).

### API Documentation

Refer to the API documentation for details on available endpoints and their usage.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.