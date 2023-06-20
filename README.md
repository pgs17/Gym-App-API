# Gym-App-API

This repository contains a RESTful API built with MongoDB, Express, and Node.js. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a Workout model and displays the workout data if the user is authorized and has an access token.

Prerequisites
Make sure you have the following installed before running the API:

Node.js (v12 or higher)
MongoDB

**Installation
Clone the repository:
bash
 
Navigate to the project directory:
# Install the dependencies:
 1.npm install
2.Create a .env file in the root directory and provide the following environment variables:
**PORT=3000
DB_CONNECTION_STRING=<your-mongodb-connection-string>
SECRET=<your-jwt-secret>**
 
Start the server:
The API will be accessible at http://localhost:3000.
Endpoints
  

 

## Authentication
This API uses JSON Web Tokens (JWT) for authentication. When a user logs in or registers, a JWT access token is generated and sent back in the response. To access protected endpoints, clients need to include the access token in the Authorization header of their requests, using the Bearer scheme.


# Contributing
Contributions to this project are welcome. Feel free to open issues and submit pull requests to improve the API.
