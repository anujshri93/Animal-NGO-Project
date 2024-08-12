Hope for Strays (Animal NGO Webpage) - MERN stack Project
Feel free to suggest any updates and submit a pull request

Purpose
The project is centered on an animal NGO.
Aims to make a ta[Readme.md](https://github.com/user-attachments/files/16577686/Readme.md)
ngible impact on society by supporting animal welfare.
Showcases a comprehensive skill set in both front-end and back-end development.
Merges technical challenges with a socially relevant cause.
Enhances both professional portfolios and societal contributions.
Key Functionalities
Empowers users to donate money.
Allows users to monitor how their donations are utilized.
Provides opportunities for users to volunteer their time.
Includes an "ask for help" form for users seeking assistance.
Ensures comprehensive support within the platform.
Admin Interface
Secured with JSON Web Tokens (JWT) for authentication.
Grants administrators access to crucial functionalities.
Allows checking of donation and volunteer lists.
Enables management of volunteer information by allowing deletion and updates.
Technology Stack
Backend
Utilizes Express.js for the backend framework.
MySQL serves as the database management system for robust data storage and retrieval.
JSON Web Tokens (JWT) are employed for authentication to safeguard against unauthorized access.
CORS (Cross-Origin Resource Sharing) is used for handling cross-origin requests to enable seamless communication between web resources.
bcrypt is implemented for password hashing and authentication security to protect user credentials and sensitive information.
Implements the Model-View-Controller (MVC) design pattern to structure the backend efficiently.
Frontend
React.js is used to provide a dynamic and responsive user interface.
React Bootstrap for stylish and responsive UI components.
React Router Dom for seamless navigation between different views.
React Router Bootstrap for integrating React Router with Bootstrap.
Axios for making HTTP requests to interact with the backend.
AG-Grid for advanced data grid functionality, enhancing data display and interaction.
Impact
The project aims to demonstrate technical proficiency.
Seeks to make a meaningful contribution to animal welfare and societal well-being.
Empowers users to donate, volunteer, and seek assistance within the platform.
Endeavors to create a positive impact on the lives of animals and those dedicated to their care.
Getting Started
Update Database Configuration
Modify the MySQL information and input your database user and password information in:

DbConstants.js file:

export const DB_HOST = 'localhost';
export const DB_USER = '';
export const DB_PASS = '';
export const DB_NAME = 'hopeforstrays';
export const VOLUNTEER_TABLE = 'volunteers';
export const DONATIONS_TABLE = 'donations';
export const ADMIN_TABLE = 'admins';
Database Setup
Create the database and tables mentioned in the constants. Use the commands below:

CREATE DATABASE HOPEFORSTRAYS;
USE HOPEFORSTRAYS;

CREATE TABLE volunteers (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(30),
    EMAIL VARCHAR(100),
    PHONE VARCHAR(15) UNIQUE,
    EXP VARCHAR(5)
);

CREATE TABLE Donations (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Phone VARCHAR(15),
    Email VARCHAR(100),
    PAN VARCHAR(20),
    DonationAmount DECIMAL(10, 2)
);

CREATE TABLE Admins (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(15),
    Password VARCHAR(2000) NOT NULL
);
Backend Setup
Open the backend in VS Code and run the following commands:

npm install
nodemon index.js
Frontend Setup
Open the frontend:

cd Frontend
npm install
cd ngo/project
npm install
npm start
