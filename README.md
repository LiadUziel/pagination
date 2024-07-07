# Pagination Project

This project demonstrates end-to-end implementation of both offset and cursor pagination techniques. It includes a backend API built with Express and a frontend UI developed using React, TypeScript, and Vite.

## Project Structure

- **API**: Contains the Express server with endpoints for fetching posts using either offset or cursor pagination.
- **UI**: A React application that displays posts either in a paginated table (offset) or through infinite scrolling (cursor).

## API Endpoints

The API supports two primary pagination methods:

1. **Cursor Pagination**:

   - **Endpoint**: `GET /posts/cursor?limit=10&cursor=some_cursor`
   - Retrieves posts in a cursor-based manner, ideal for infinite scrolling implementations.

2. **Offset Pagination**:
   - **Endpoint**: `GET /posts/offset?limit=10&page=1`
   - Retrieves posts using traditional offset pagination, useful for paginated displays such as tables.

## Installation and Running the Project

### API Setup

To set up and run the backend server:

```bash
cd api
npm install
npm run dev
```

This starts the Express server on `http://localhost:3000`, listening for requests to the endpoints defined for pagination.

### UI Setup

To set up and run the React frontend:

```bash
cd ui
npm install
npm run dev
```

This commands will start the React development server using Vite, typically available at `http://localhost:5173`. If the API is running on the same port, adjust accordingly to avoid conflicts.

## Features

- **Offset Pagination Table**: A table display that uses offset pagination, allowing users to navigate through pages of posts.
- **Infinite Scrolling**: Utilizes cursor pagination for a smooth infinite scrolling experience, loading new posts automatically as the user scrolls down.

## Technologies Used

- **Backend**: Node.js, TypeScript, Express.js
- **Frontend**: React, TypeScript, Vite
- **Pagination**: Offset and Cursor techniques
