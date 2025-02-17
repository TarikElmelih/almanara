# Almanara Project

This is a NestJS application for managing shipments. It uses TypeORM for database interactions and is configured to work with a MySQL database.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MySQL (v5.7 or later)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd almanara
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Database Setup

1. **Create a MySQL database:**

   Open your MySQL client and run the following command to create a new database:

   ```sql
   CREATE DATABASE almanara;
   ```

2. **Configure database connection:**

   Update the database connection settings in `src/app.module.ts` if necessary. The default settings are:

   ```typescript:src/app.module.ts
   startLine: 9
   endLine: 18
   ```

   Ensure that the `username`, `password`, and `database` fields match your MySQL setup.

3. **Run database migrations:**

   If you have any migrations, run them using TypeORM CLI or a similar tool to set up the database schema.

## Running the Application

1. **Start the application:**

   For development:

   ```bash
   npm run start:dev
   ```

   For production:

   ```bash
   npm run start:prod
   ```

2. **Access the application:**

   The application will be running at `http://localhost:3000`.


## API Endpoints

The following endpoints are available in the Almanara Project for managing shipments:

### Shipments

- **Get all shipments**

  - **Endpoint**: `GET /shipments`
  - **Description**: Retrieves a list of all shipments.
  - **Response**: Returns an array of shipment objects.

- **Get a shipment by ID**

  - **Endpoint**: `GET /shipments/:id`
  - **Description**: Retrieves a shipment by its ID.
  - **Parameters**: 
    - `id` (integer, required): The ID of the shipment.
  - **Response**: Returns the shipment object with the specified ID.

- **Create a new shipment**

  - **Endpoint**: `POST /shipments`
  - **Description**: Creates a new shipment.
  - **Request Body**: 
    - `orderId` (string, required): The order ID associated with the shipment.
    - `weight` (float, optional): The weight of the shipment.
    - `isAvailable` (boolean, optional): Availability status of the shipment.
  - **Response**: Returns the created shipment object.

- **Update a shipment**

  - **Endpoint**: `PUT /shipments/:id`
  - **Description**: Updates an existing shipment.
  - **Parameters**: 
    - `id` (integer, required): The ID of the shipment to update.
  - **Request Body**: 
    - `orderId` (string, optional): The order ID associated with the shipment.
    - `weight` (float, optional): The weight of the shipment.
    - `isAvailable` (boolean, optional): Availability status of the shipment.
  - **Response**: Returns the updated shipment object.

- **Delete a shipment**

  - **Endpoint**: `DELETE /shipments/:id`
  - **Description**: Deletes a shipment by its ID.
  - **Parameters**: 
    - `id` (integer, required): The ID of the shipment to delete.
  - **Response**: Returns a success message upon successful deletion.



Ensure that your application is running locally on port 3000 before making these requests.


## Project Structure

- **src/**: Contains the source code of the application.
- **test/**: Contains the end-to-end tests.

## Key Features

- **Shipments Management**: Create, read, update, and delete shipments.
- **Validation**: Uses NestJS validation pipes to ensure data integrity.
- **Interceptors**: Custom response interceptor for consistent API responses.

## License

This project is licensed under the UNLICENSED license.

## Author

Tarik Elmelih
