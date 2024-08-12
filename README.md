# Hope for Strays (Animal NGO Webpage) - MERN stack Project
Feel free to suggest any updates and submit a pull request

## Purpose
- The project is centered on an animal NGO.
- Aims to make a tangible impact on society by supporting animal welfare.
- Showcases a comprehensive skill set in both front-end and back-end development.
- Merges technical challenges with a socially relevant cause.
- Enhances both professional portfolios and societal contributions.

## Key Functionalities
- Empowers users to donate money.
- Allows users to monitor how their donations are utilized.
- Provides opportunities for users to volunteer their time.
- Includes an "ask for help" form for users seeking assistance.
- Ensures comprehensive support within the platform.

## Admin Interface
- Secured with JSON Web Tokens (JWT) for authentication.
- Grants administrators access to crucial functionalities.
- Allows checking of donation and volunteer lists.
- Enables management of volunteer information by allowing deletion and updates.

## Technology Stack

### Backend
- Utilizes Express.js for the backend framework.
- MySQL serves as the database management system for robust data storage and retrieval.
- JSON Web Tokens (JWT) are employed for authentication to safeguard against unauthorized access.
- CORS (Cross-Origin Resource Sharing) is used for handling cross-origin requests to enable seamless communication between web resources.
- bcrypt is implemented for password hashing and authentication security to protect user credentials and sensitive information.
- Implements the Model-View-Controller (MVC) design pattern to structure the backend efficiently.

### Frontend
- React.js is used to provide a dynamic and responsive user interface.
- React Bootstrap for stylish and responsive UI components.
- React Router Dom for seamless navigation between different views.
- React Router Bootstrap for integrating React Router with Bootstrap.
- Axios for making HTTP requests to interact with the backend.
- AG-Grid for advanced data grid functionality, enhancing data display and interaction.

## Impact
- The project aims to demonstrate technical proficiency.
- Seeks to make a meaningful contribution to animal welfare and societal well-being.
- Empowers users to donate, volunteer, and seek assistance within the platform.
- Endeavors to create a positive impact on the lives of animals and those dedicated to their care.

## Getting Started

### Update Database Configuration
Modify the MySQL information and input your database user and password information in:

`DbConstants.js` file:
```javascript
export const DB_HOST = 'localhost';
export const DB_USER = '';
export const DB_PASS = '';
export const DB_NAME = 'hopeforstrays';
export const VOLUNTEER_TABLE = 'volunteers';
export const DONATIONS_TABLE = 'donations';
export const ADMIN_TABLE = 'admins';
```

# Database Setup
 Create the database and tables mentioned in the constants. Use the commands below:

```sql
CREATE DATABASE HOPEFORSTRAYS;
```

```sql
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
```

# Backend Setup
Open the backend in VS Code and run the following commands:

```bash
npm install
```
```bash
nodemon index.js
```

# Frontend Setup
Open the frontend:

```bash
cd Frontend
```

```bash
npm install
```

```bash
cd ngo/project
```

```bash
npm install
```

```bash
npm start
```

#Screenshots of the webpage


#Home Page
![Screenshot (142)](https://github.com/amols01/AnimalNgo/assets/118264444/68cc87b0-0e7c-4b3f-a72e-04a2fdbf7b8c)
![Screenshot (143)](https://github.com/amols01/AnimalNgo/assets/118264444/9a5bf400-b81a-406e-97e3-c7c15b0de5d0)

#Volunteer section
![Screenshot (144)](https://github.com/amols01/AnimalNgo/assets/118264444/cfcf3995-e6ef-4829-9578-ff94039e8961)
![Screenshot (160)](https://github.com/amols01/AnimalNgo/assets/118264444/2890d1d0-72d3-40fc-9107-f17a8989f677)

#Ask for help
![Screenshot (147)](https://github.com/amols01/AnimalNgo/assets/118264444/4371d77d-d649-40fe-bfd2-67222cd88bc4)

#Donate section & Look up your donation.
![Screenshot (162)](https://github.com/amols01/AnimalNgo/assets/118264444/7e0f6556-e1b3-47b4-aa4c-c24ad483502b)
![Screenshot (149)](https://github.com/amols01/AnimalNgo/assets/118264444/9a8f86b6-121a-4a80-9c1d-5a3508af6fbb)
![Screenshot (150)](https://github.com/amols01/AnimalNgo/assets/118264444/12244ddc-a87e-475f-adf7-7b8de5cce527)

#Admin Login
![Screenshot (151)](https://github.com/amols01/AnimalNgo/assets/118264444/73c4020b-26cc-4ba6-907f-c5aab550e560)

#Admin Dashboard
![Screenshot (152)](https://github.com/amols01/AnimalNgo/assets/118264444/bdcb6229-dd5a-4543-aabb-518c00ce4234)

#Donation list
![Screenshot (153)](https://github.com/amols01/AnimalNgo/assets/118264444/552ad4e7-0ce7-4393-b3e8-984b9e348934)
![Screenshot (154)](https://github.com/amols01/AnimalNgo/assets/118264444/09f34214-2169-44ee-abe3-3a3bb0566275)

#Volunteer list with delete and update function.
![Screenshot (155)](https://github.com/amols01/AnimalNgo/assets/118264444/7f5fd0da-71dd-40df-8d8e-d240e5313a5a)
![Screenshot (156)](https://github.com/amols01/AnimalNgo/assets/118264444/9e54b5d1-a2bd-4dda-a44e-94e5121f2ec3)
![Screenshot (157)](https://github.com/amols01/AnimalNgo/assets/118264444/937c165c-09d8-4575-bf57-43a4160666e7)

#JWT token verified, need to login to view data.
![Screenshot (159)](https://github.com/amols01/AnimalNgo/assets/118264444/dd6d128f-f88e-46a8-8a7c-054a027d2080)
![Screenshot (158)](https://github.com/amols01/AnimalNgo/assets/118264444/b07bf714-982e-4856-b4b8-031bf66367cc)
