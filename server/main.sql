create database db;
use db;

CREATE TABLE RTable (
    TableNo 			int 			NOT NULL,
    TableStatus 		int, 
    PRIMARY KEY (TableNo)
);

CREATE TABLE ROrder (
    OrderID 		int 				auto_increment,
    TableNo 		int 				NOT NULL,
    OrderStatus 	int,  
    TotalCost 		float(10),
    PRIMARY KEY (OrderID)
);
-- {Status: 0 là Confirm, 1 là Pending}
CREATE TABLE RProduct (
    ProductID 		int 				auto_increment,
    Name 			varchar(50) 		default '',
    Price 			float(10),
    Category 		varchar(50),
    ImgLink 		varchar(256),
    PRIMARY KEY (ProductID)
);

CREATE TABLE Cart (
    ProductID 		int 				NOT NULL,
    OrderID 		int 				NOT NULL,
    Price			float(10)			NOT NULL,
    Quantity		int 				NOT NULL,
    check (Quantity > 0),
    constraint PPK PRIMARY KEY (ProductID, OrderID)
);

-- {PaymentType: 0 physical, 1 online}
-- {Status: 0 là Confirm, 1 là Pending}
CREATE TABLE RPayment (
    PaymentID 		int 				auto_increment,
    OrderID 		int 				NOT NULL,
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

INSERT INTO rproduct VALUES (1, 'BAGEL B.E.L.T.', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
INSERT INTO rproduct VALUES (2, 'FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/uq7HpA0wwr8Krxgba6Haj0NFhR8aVkW384LgTVAHiqum7xD9lA.png');
INSERT INTO rproduct VALUES (3, 'HAM AND CHEESE CROSSIANT', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/DrZwQsSdWQeuqwFSb393Oezkm5qg20R8UoNuaBYUzzc69FnZWv.jpg');
INSERT INTO rproduct VALUES (4, 'SAUSAGE EGG & CHEESE MUFFIN', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/oDJSHJgjY5wJ98Y39NOWoUCfvjtFE6Y2tLjG6N8OqTGzlgmF0k.jpg');
INSERT INTO rproduct VALUES (5, 'BACON EGG & CHEESE MUFFIN', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/CtiaJbs6dSya7xVehaavX8iuYpoh9PZGQDF5Mpr2WUVmskFM8m.jpg');
INSERT INTO rproduct VALUES (6, 'SAUSAGE & CHEESE MUFFIN', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/LiP4I7rrZKD7hzf9JJa60DSMsbLKdAlxWM7QPIlxn72mIHRr4y.jpg');
INSERT INTO rproduct VALUES (7, 'HASH BROWN', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/YkIkPNbguPzNEYPrUfTPFvz0MI2HnemuRWz7dWYMlnutfy5JKk.jpg');
INSERT INTO rproduct VALUES (8, 'ITALIANO GRILLED BAGEL', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/sYEacQcraFMEynXsykmPrGphjFApY7czbas3XiEAO1TIeeUQAY.jpg');
INSERT INTO rproduct VALUES (9, 'TUSCAN CHICKEN PANINI', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/aX3HKWg9lUWbR53eQDTolEPy2IBTY4bcbpJNGDfdRbZaqJHycq.jpg');
INSERT INTO rproduct VALUES (10, 'CHIPOTLE CHICKEN WRAP', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/cZx4pfT1T16SSOBZHdjyUz1xtQ47GU9AbNfzidXReTc2MA5DWv.jpg');
INSERT INTO rproduct VALUES (11, 'STEAK & CHEESE PANINI', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/Qj0joZa35pR4ZisAakrq0AH67XaMdcMd7LYEA4SGUX0PTdewQA.jpg');
INSERT INTO rproduct VALUES (12, 'TUNA MELT', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/Pl6sQxm9zQpR9iA2bBKRQXgxZy2czKS6aeYNu19g6DJzWScSlc.jpg');
INSERT INTO rproduct VALUES (13, 'ARTISAN GRILLED CHEESE', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/VbbAbNb8Fjb8ZuyzcG693OSY2WseGQdYwGoBfYl91deeut2HPR.jpg');
INSERT INTO rproduct VALUES (14, 'CHICKEN BACON RANCH WRAP', 4.8, 'Lunch', 'https://www.timhortons.ph/upload/assets/0gZ69YA6OSGU2u8jwm2OqufWQjQw5NjdkABdimRFv6I0JUnuhw.jpg');
INSERT INTO rproduct VALUES (15, 'CHOCOLATE DIP', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/8i4G0WlZshMNYHrGeuzPdaE1L6qnOtuDS9xV0sA2f5E00aOWhQ.jpg');
INSERT INTO rproduct VALUES (16, 'BOSTON CREAM', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/XuJutewnGfL5nJ47fqBZlNKw2vILb74GOtxJL58ht7zCnIy3di.jpg');
INSERT INTO rproduct VALUES (17, 'CHOCOLATE GLAZED', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/eAxrmYSLFqxiPtqufq7jNmG4pOHB3MiBlXrCqbMEaLCqhgUaEf.jpg');
INSERT INTO rproduct VALUES (18, 'DOUBLE CHOCOLATE FUDGE', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/r898kCI5JVtYwPaMHzmGVNI8DBAVlRTuQ4QU6vupe4krOx4B8U.jpg');
INSERT INTO rproduct VALUES (19, 'CHOCOLATE ECLAIR', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/GCmcrVJwZAtVBbU2ujt75qhxDRtL6drEHYRqSMuQxBTrxNrQY0.jpg');
INSERT INTO rproduct VALUES (20, 'HONEY CRULLER', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/YG9n7xIN5u0TROAgk3oFtN83UrEpsie3lnuPqR9MQGof2vLBqu.jpg');
INSERT INTO rproduct VALUES (21, 'BDAY CAKE TIMBIT', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/GVnpESyvl9VWs3ZS7kZgWyfq9jE8AuYPSeUNkl7gy6DK1Tl8k7.jpg');
INSERT INTO rproduct VALUES (22, 'CHOCOLATE GLAZED TIMBIT', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/MBBDviVe8zP76EvMaLHl9YcxkaoPT7cxUTKisQqp5TER5DOuTv.jpg');
INSERT INTO rproduct VALUES (23, 'CHOCOLATE FILLED TIMBIT', 4.8, 'Sweet', 'https://www.timhortons.ph/upload/assets/SiHBbWkZRzroBte8ZufuPbnmmqo6sZ3cwedweP9dM3RdhI3wiS.png');
INSERT INTO rproduct VALUES (24, 'DOUBLE DOUBLE', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/2yQdfgNRyMxNMwDleZ3aDaHnWi3aWxDbcdojUiWqwWHsfLvFQg.jpg');
INSERT INTO rproduct VALUES (25, 'CAPPUCINO', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/2WiUpAIDBBB28QaCPY3vs7bcQAPGTiv0alREjkxoBh7gclBjrl.jpg');
INSERT INTO rproduct VALUES (26, 'FRENCH VANILA CAPPUCINO', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/ed9T95qJ9ieWEheeKMCnKtzgreVtf6AySM4KgGZWm2YXtuLBtw.jpg');
INSERT INTO rproduct VALUES (27, 'LATTE', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/XR1g0PBfrBkDpky0fmoLgaEzaWz2t3JFSOvLrgWtFgTtvdJsLp.jpg');
INSERT INTO rproduct VALUES (28, 'HOT CHOCOLATE', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/MwrVM4uMgq8OJaZ1hvN58wzElaYm7kBbUwdOQxZaqH9HlZOWa1.jpg');
INSERT INTO rproduct VALUES (29, 'CAFE MOCHA', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/02yN12IfyTI6Ol7PdSkdN0TJvfuYXopRWis5GtqQcwx25EaohP.jpg');
INSERT INTO rproduct VALUES (30, 'SPECIALITY TEA', 4.8, 'Drink', 'https://www.timhortons.ph/upload/assets/V5NSSRhu9bM4YqwV9boqNhrUTgny8DLVaNSw2JYqEk1ovvHuzF.jpg');
-- SELECT * FROM db.rproduct;

-- sample data for cart

-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 1),
-- 		OrderStatus = 1,
--         TotalCost = 33.6;
-- SELECT LAST_INSERT_ID() as OrderID;

-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 1),
-- 		OrderID = LAST_INSERT_ID(),
--         Quantity = 1;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 3),
-- 		OrderID = LAST_INSERT_ID(),
--         Quantity = 2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 2),
-- 		OrderID = LAST_INSERT_ID(),
--         Quantity = 2;
--         
-- INSERT INTO cart  
-- 	SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = 4),
-- 		OrderID = LAST_INSERT_ID(),
--         Quantity = 2;
        
-- SELECT * FROM db.cart;

-- sample data for order

-- SELECT * FROM db.rorder;
-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 6),
-- 		OrderStatus = 1,
--         TotalCost = 4.8;
-- select LAST_INSERT_ID();
-- INSERT INTO rorder 
-- 	SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = 10),
-- 		OrderStatus = 1,
--         TotalCost = 43.2;
-- select LAST_INSERT_ID();
-- select LAST_INSERT_ID();select LAST_INSERT_ID();
-- -- sample data for payment

-- -- SELECT * FROM db.rpayment;
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 1),
-- 		TotalCost = 33.6,
--         PaymentStatus = 1,
--         PaymentType = 1,
--         PaymentDate = '2021-10-25';
--         
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 2),
-- 		TotalCost = 4.8,
--         PaymentStatus = 1,
--         PaymentType = 1,
--         PaymentDate = '2021-10-26';
--         
-- INSERT INTO rpayment 
-- 	SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = 3),
-- 		TotalCost = 43.2,
--         PaymentStatus = 1,
--         PaymentType = 1,
--         PaymentDate = '2021-10-26';