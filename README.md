# POS SYSTEM
Software Engineering (CO3001)-DH_HK211 assignment project


Author: Nguyễn Diệu Ái, Nguyễn Kế Đạt, Trương Hoàng Phúc, Đặng Quốc Thanh, Huỳnh Đức Thịnh, Nguyễn Phúc Thịnh, Nguyễn Ngô Thanh Trúc.

## Project target
We build this system to make it easier for customers to use the restaurant's services and also help the restaurant manage data. This system includes managing tables, ordering food, alerts, billing, credit card processing and customer management.

This app can be use by 4 user:
* Customer
* Receptionist
* Clerk
* Manager

Each actor has a corresponding interface that performs different functions.

## Instruction

### Import database from ./Database/DB.sql

### Run server

    cd server
    npm install (to install all dependencies required if necessary)
    node server

Server will run at [http://localhost:3001](http://localhost:3001).

### Run app
App has 4 views: Customer-view, Clerk-view, Receptionist-view and Manager-view.

In the project directory, you can:

#### Run Customer-view mode:

    cd cusview
    npm install (to install all dependencies required if necessary)
    npm start

#### Run Clerk-view mode:

    cd clerkview
    npm install (to install all dependencies required if necessary)
    npm start

#### Run Receptionist-view mode:

    cd receptionistView
    npm install (to install all dependencies required if necessary)
    npm start

#### Run Manager-view mode:

    cd managerview
    npm install (to install all dependencies required if necessary)
    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More
You can learn more in our [Github Repository](https://github.com/remsokawaii1/CNPM).