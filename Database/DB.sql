create database db;
use db;

CREATE TABLE RTable (
    TableNo 			int 			NOT NULL,
    TableStatus 		int, 
    PRIMARY KEY (TableNo)
);

CREATE TABLE ROrder (
    OrderID 		int 			auto_increment,
    TableNo 		int 			NOT NULL,
    OrderStatus 		int,  
    TotalCost 		float(10),
    PRIMARY KEY (OrderID)
);
-- {Status: 0 là Confirm, 1 là Pending}
CREATE TABLE RProduct (
    ProductID 		int 			auto_increment,
    Name 			varchar(50) 		default '',
    Price 			float(10),
    Category 		varchar(50),
    ImgLink 		varchar(256),
    PRIMARY KEY (ProductID)
);


CREATE TABLE Cart (
    ProductID 		int 			NOT NULL,
    OrderID 		int 			NOT NULL,
    Price			float(10)		NOT NULL,
    Quantity		int 			NOT NULL,
    check (Quantity > 0),
    constraint PPK PRIMARY KEY (ProductID, OrderID)
);

-- {PaymentType: 0 physical, 1 online}
-- {Status: 0 là Confirm, 1 là Pending}

CREATE TABLE RPayment (
    PaymentID 		int 			auto_increment,
    OrderID 		int 			NOT NULL,
    TotalCost 		float(10),
    PaymentStatus 	int,
    PaymentType 	int,
    PaymentDate		date,
    PRIMARY KEY (PaymentID)
);

alter table ROrder
    add FOREIGN KEY (TableNo) 
				REFERENCES RTable(TableNo)
			ON DELETE NO ACTION
            ON UPDATE CASCADE
;

alter table Cart
    add FOREIGN KEY (ProductID) 
				REFERENCES RProduct(ProductID)
			ON DELETE NO ACTION
            ON UPDATE CASCADE,
    add FOREIGN KEY (OrderID) 
				REFERENCES ROrder(OrderID)
			ON DELETE NO ACTION
            ON UPDATE CASCADE
;

alter table RPayment
    add FOREIGN KEY (OrderID) 
				REFERENCES ROrder(OrderID)
			ON DELETE NO ACTION
            ON UPDATE CASCADE
;


-- sample data for table

INSERT INTO rtable VALUES (1, 0);
INSERT INTO rtable VALUES (2, 0);
INSERT INTO rtable VALUES (3, 0);
INSERT INTO rtable VALUES (4, 0);
INSERT INTO rtable VALUES (5, 0);
INSERT INTO rtable VALUES (6, 0);
INSERT INTO rtable VALUES (7, 0);
INSERT INTO rtable VALUES (8, 0);
INSERT INTO rtable VALUES (9, 0);
INSERT INTO rtable VALUES (10, 0);
INSERT INTO rtable VALUES (11, 0);
INSERT INTO rtable VALUES (12, 0);
INSERT INTO rtable VALUES (13, 0);
INSERT INTO rtable VALUES (14, 0);
INSERT INTO rtable VALUES (15, 0);
INSERT INTO rtable VALUES (16, 0);
INSERT INTO rtable VALUES (17, 0);
INSERT INTO rtable VALUES (18, 0);
INSERT INTO rtable VALUES (19, 0);
INSERT INTO rtable VALUES (20, 0);
INSERT INTO rtable VALUES (21, 0);
INSERT INTO rtable VALUES (22, 0);
INSERT INTO rtable VALUES (23, 0);
INSERT INTO rtable VALUES (24, 0);
INSERT INTO rtable VALUES (25, 0);
-- SELECT * FROM db.rtable;
-- UPDATE db.rtable SET TableStatus = 1 WHERE TableNo = 1;


-- sample data for product

INSERT INTO rproduct VALUES (1, 'BAGEL B.E.L.T.', 5.19, 'Breakfast', 'Bagel-BELT.jpg');
INSERT INTO rproduct VALUES (2, 'FARMERS BREAKFAST WRAP', 5.49, 'Breakfast', 'Farmers-Breakfast-Wrap.jpg');
INSERT INTO rproduct VALUES (3, 'HAM AND CHEESE CROSSIANT', 4.79, 'Breakfast', 'Ham-and-Cheese-Croissant.jpg');
INSERT INTO rproduct VALUES (4, 'SAUSAGE EGG & CHEESE MUFFIN', 5.99, 'Breakfast', 'Sausage-Egg-and-Cheese-Muffin.jpg');
INSERT INTO rproduct VALUES (5, 'BACON EGG & CHEESE MUFFIN', 5.79, 'Breakfast', 'Bacon-Egg-and-Cheese-Muffin.jpg');
INSERT INTO rproduct VALUES (6, 'BACON & CHEESE MUFFIN', 5.59, 'Breakfast', 'Bacon-and-Cheese-Muffin.jpg');
INSERT INTO rproduct VALUES (7, 'HASH BROWN', 6.99, 'Breakfast', 'Hashbrown.jpg');

INSERT INTO rproduct VALUES (8, 'ITALIANO GRILLED BAGEL', 7.19, 'Lunch', 'Italiano-Grilled-Bagel.jpg');
INSERT INTO rproduct VALUES (9, 'TUSCAN CHICKEN PANINI', 7.79, 'Lunch', 'Tuscan-Chicken-Panini.jpg');
INSERT INTO rproduct VALUES (10, 'CHIPOTLE CHICKEN WRAP', 3.59, 'Lunch', 'Chipotle-Chicken-Wrap.jpg');
INSERT INTO rproduct VALUES (11, 'GRILLED CHEESE PANINI', 3.99, 'Lunch', 'Grilled-Cheese-Panini.jpg');
INSERT INTO rproduct VALUES (12, 'TUNA & CHEESE MELT', 4.49, 'Lunch', 'Tuna-and-Cheese-Melt.jpg');
INSERT INTO rproduct VALUES (13, 'CHICKEN CORDON BLEU', 4.99, 'Lunch', 'Chicken-Cordon-Bleu.jpg');
INSERT INTO rproduct VALUES (14, 'TURKEY BACON CLUB WRAP', 5.59, 'Lunch', 'Turkey-Bacon-Club-Wrap.jpg');

INSERT INTO rproduct VALUES (15, 'CHOCOLATE DIP DONUT', 5.99, 'Sweet', 'Chocolate Dip Donut.jpg');
INSERT INTO rproduct VALUES (16, 'BOSTON CREAM', 5.49, 'Sweet', 'Boston-Cream.jpg');
INSERT INTO rproduct VALUES (17, 'CHOCOLATE GLAZED DONUT', 5.49, 'Sweet', 'Chocolate-Glazed-Donut.jpg');
INSERT INTO rproduct VALUES (18, 'COOKIE DOUGH DONUT', 6.79, 'Sweet', 'Cookie-Dough-Donut.jpg');
INSERT INTO rproduct VALUES (19, 'CHOCOLATE ECLAIR', 7.99, 'Sweet', 'Chocolate-Eclair.jpg');
INSERT INTO rproduct VALUES (20, 'HONEY CRULLER', 7.49, 'Sweet', 'Honey-Cruller.jpg');
INSERT INTO rproduct VALUES (21, 'BDAY CAKE TIMBIT', 4.39, 'Sweet', 'BDay-Cake-Timbit.jpg');
INSERT INTO rproduct VALUES (22, 'STRAWBERRY FILLED TIMBIT', 4.39, 'Sweet', 'Strawberry-Filled-Timbit.jpg');
INSERT INTO rproduct VALUES (23, 'CHOCOLATE GLAZED TIMBIT', 4.39, 'Sweet', 'Chocolate-Glazed-Timbit.jpg');
INSERT INTO rproduct VALUES (24, 'SNOWBALL SURPRISE', 7.99, 'Sweet', 'Snowball-Surprise.jpg');

INSERT INTO rproduct VALUES (25, 'DOUBLE DOUBLE', 4.99, 'Drink', 'Double-Double.jpg');
INSERT INTO rproduct VALUES (26, 'CAPPUCINO', 5.49, 'Drink', 'Cappuccino.jpg');
INSERT INTO rproduct VALUES (27, 'FRENCH VANILA LATTE', 6.19, 'Drink', 'French-Vanilla-Latte.jpg');
INSERT INTO rproduct VALUES (28, 'LATTE', 4.79, 'Drink', 'Latte.jpg');
INSERT INTO rproduct VALUES (29, 'HOT CHOCOLATE', 4.39, 'Drink', 'Hot-Chocolate.jpg');
INSERT INTO rproduct VALUES (30, 'CAFE MOCHA', 3.49, 'Drink', 'Cafe-Mocha.jpg');
INSERT INTO rproduct VALUES (31, 'SPECIALITY TEA', 4.79, 'Drink', 'Specialty-Tea.jpg');
-- SELECT * FROM db.rproduct;

-- sample data for cart and order

-- order 1
-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 1),
-- 		OrderStatus = 1,
--         TotalCost = 33.6;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 1),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 4.8,
--         Quantity = 1;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 3),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 9.6,
--         Quantity = 2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 2),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 9.6,
--         Quantity = 2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 4),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 9.6,
--         Quantity = 2;
--         
-- -- order 2
-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 6),
-- 		OrderStatus = 1,
--         TotalCost = 4.8;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 7),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 4.8,
--         Quantity = 1;
--         
-- -- order 3
-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 10),
-- 		OrderStatus = 1,
--         TotalCost = 43.2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 3),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 9.6,
--         Quantity = 2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 12),
-- 		OrderID = LAST_INSERT_ID(),
--         Price = 33.6,
--         Quantity = 7;
        
-- SELECT * FROM db.cart;

-- sample data for payment

-- SELECT * FROM db.rpayment;
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 1),
-- 		TotalCost = 33.6,
--         PaymentStatus = 1,
--         PaymentType = 0,
--         PaymentDate = '2021-10-25';
        
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 2),
-- 		TotalCost = 4.8,
--         PaymentStatus = 1,
--         PaymentType = 0,
--         PaymentDate = '2021-10-26';
--         
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 3),
-- 		TotalCost = 43.2,
--         PaymentStatus = 1,
--         PaymentType = 0,
--         PaymentDate = '2021-10-26';

	


