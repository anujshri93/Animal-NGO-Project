Hope_For_Strays_Animal_NGO_Website
Purpose
The project centers on an animal NGO, aiming to support animal welfare. It showcases a comprehensive skill set in both front-end and back-end development, merging technical challenges with a socially relevant cause.

Key Functionalities
Donate Money: Users can contribute financially to support the NGO.
Monitor Donations: Users can track how their donations are utilized.
Volunteer Opportunities: Users can sign up to volunteer their time.
Assistance Requests: Users can submit requests for help for animals in need.
Admin Interface
Secured with JSON Web Tokens (JWT) for authentication.
Admins can view donation and volunteer lists.
Allows management of volunteer information, including updates and deletions.
Technology Stack
Backend
Express.js: Backend framework.
MySQL: Database management system.
JSON Web Tokens (JWT): For authentication.
CORS: Handling cross-origin requests.
bcrypt: For password hashing and authentication security.
MVC Design Pattern: To structure the backend efficiently.
Frontend
React.js: Dynamic and responsive user interface.
React Bootstrap: Stylish and responsive UI components.
React Router Dom: Navigation between views.
React Router Bootstrap: Integration with Bootstrap.
Axios: Making HTTP requests.
AG-Grid: Advanced data grid functionality.
Impact
The project aims to demonstrate technical proficiency while contributing to animal welfare. It empowers users to donate, volunteer, and seek assistance, creating a positive impact on animals and their care.

Getting Started
Update Database Configuration
Modify MySQL settings in DbConstants.js:

javascript
Copy code
export const DB_HOST = 'localhost';
export const DB_USER = '';
export const DB_PASS = '';
export const DB_NAME = 'hopeforstrays';
export const VOLUNTEER_TABLE = 'volunteers';
export const DONATIONS_TABLE = 'donations';
export const ADMIN_TABLE = 'admins';
Database Setup
Run the following commands to set up the database and tables:

sql
Copy code
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
Open the backend directory and run:

bash
Copy code
npm install
nodemon index.js
Frontend Setup
Navigate to the frontend directory and run:

bash
Copy code
cd Frontend
npm install
cd ngo/project
npm install
npm start
Screenshots
Home Page
Volunteer Section
Ask for Help
Donate Section & Lookup Donations
Admin Login & Dashboard
Donation List & Volunteer List
About
This is a WPT project based on the MERN stack.
