# Eatery Server-Side Application

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Endpoints](#endpoints)
6. [Testing](#testing)
7. [Version Control](#version-control)


## Project Overview

This project is a server-side application designed for an eatery, focusing on robust user authentication and providing two additional endpoints. The application utilizes MongoDB for database management, Postman for API testing and documentation, and GitHub for version control.

## Features

- **User Authentication**: Secure authentication system for users to register and login.
- **Menu Management Endpoint**: Allows CRUD operations on the eatery's menu.
- **Order Management Endpoint**: Enables customers to place, view, and manage their orders.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **Postman**: Tool for API testing and documentation.
- **GitHub**: Version control and project repository.

## Setup Instructions

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/PtechNig/Eatery.git
   cd Eatery
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the Server**:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000`.

## Endpoints

### Authentication

- **Register**: `POST /api/v1/eatery/register`
  - Request Body: `{ "name": "string", "password": "string" }`
  - Response: `{ "message": "User registered successfully" }`

- **Login**: `POST /api/v1/eatery/login`
  - Request Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "message": "login successfully" }`

### Menu Management

- **Get Menu Items**: `GET /api/v1/eatery/menu`
  - Response: `{ "items": [array of menu items] }`

- **Add Menu Item**: `POST /api/v1/eatery/menu`
  - Request Body: `{ "name": "string", "description": "string", "price" : "number" }`
  - Response: `{ "message": "Menu item added successfully" }`


### Order Management

- **Place Order**: `POST /api/v1/eatery/order`
  - Request Body: `{ "id": "string", "quantity": "number" }`
  - Response: `{ "message": "Order placed successfully" }`


## Testing

Use Postman to test the API endpoints. Import the Postman collection `https://documenter.getpostman.com/view/32868844/2sA3XTdKS6` included in the repository to get started quickly.

## Version Control

This project uses Git for version control. The repository is hosted on GitHub at:
(https://github.com/PtechNig/Eatery)

To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.


## Demo

https://documenter.getpostman.com/view/32868844/2sA3XTdKS6
