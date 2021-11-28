# POS SYSTEM
Software Engineering (CO3001)-DH_HK211 assignment project


Author: Nguyễn Diệu Ái, Nguyễn Kế Đạt, Trương Hoàng Phúc, Đặng Quốc Thanh, Huỳnh Đức Thịnh, Nguyễn Phúc Thịnh, Nguyễn Ngô Thanh Trúc.

## Project target
We build this system to make it easier for customers to use the restaurant's services and also help the restaurant manage data. This system includes managing tables, ordering food, alerts, billing, credit card processing and viewing order records.

This app can be use by 4 users:
* Customer
* Receptionist
* Clerk
* Manager

Each actor has a corresponding interface that performs different functions.

## Instruction

### Import database from `./Database/DB.sql`

### Change database connection's informations
Update informations (host, user, password, database, port) of your connection in `./server/dbConn.js`

```javascript
var dbConn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "26122001",
    database: "db",
    port: "3306",
    dateStrings: true
});
```
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