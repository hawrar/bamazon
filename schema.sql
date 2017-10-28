DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "Mens", 100.50, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("belt", "Mens", 30.51, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirt", "Mens", 80.52, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("perfume", "Mens", 150.53, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("underwear", "Mens", 20.54, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("socks", "Mens", 30.55, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hat", "Mens", 45.56, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scarf", "Mens", 40.57, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shaver", "Mens", 200.58, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jacket", "Mens", 180.59, 1);

