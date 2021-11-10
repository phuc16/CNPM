create database if not exists pos_db;
use pos_db;

CREATE TABLE if not exists RTable (
    TableNo 		int 			NOT NULL,
    TableStatus 	int, 
    PRIMARY KEY (TableNo)
);

CREATE TABLE if not exists ROrder (
    OrderID 		int 			auto_increment,
    TableNo 		int 			NOT NULL,
    OrderStatus 	int, 
    PRIMARY KEY (OrderID)
);

CREATE TABLE if not exists RProduct (
    id 				int 			auto_increment,
    name 			char(50) 		default '',
    pricePU 		float(10),
    category 		varchar(50),
    imgUrl 			varchar(128),
    PRIMARY KEY (id)
);

CREATE TABLE if not exists Cart (
    OrderID 		int 			NOT NULL,
    id 				int 			NOT NULL,
    quantity		int 			NOT NULL,
    pricePU			float(10)		NOT NULL,
    check (quantity > 0),
    constraint PPK PRIMARY KEY (OrderID, id)
);

CREATE TABLE if not exists RPayment (
    PaymentID 		int 			auto_increment,
    OrderID 		int 			NOT NULL,
    TotalCost 		float(10),
    PaymentStatus 	int,
    PaymentType 	int,
    PRIMARY KEY (PaymentID)
);

-- alter table ROrder
--     add FOREIGN KEY (TableNo) 
-- 				REFERENCES RTable(TableNo)
-- 			ON DELETE NO ACTION
--             ON UPDATE CASCADE
-- ;

-- alter table Cart
--     add FOREIGN KEY (ProductID) 
-- 				REFERENCES RProduct(ProductID)
-- 			ON DELETE NO ACTION
--             ON UPDATE CASCADE,
--     add FOREIGN KEY (OrderID) 
-- 				REFERENCES ROrder(OrderID)
-- 			ON DELETE NO ACTION
--             ON UPDATE CASCADE
-- ;

-- alter table RPayment
--     add FOREIGN KEY (OrderID) 
-- 				REFERENCES ROrder(OrderID)
-- 			ON DELETE NO ACTION
--             ON UPDATE CASCADE
-- ;


DELIMITER $$
create procedure countOrder()
begin
	select count(*) as count
    from rorder;
end$$
DELIMITER ;


insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');
insert into RProduct(name, pricePU, category, imgUrl) values('FARMER BREAKFAST WRAP', 4.8, 'Breakfast', 'https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg');


call countOrder();