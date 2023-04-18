DROP SCHEMA IF EXISTS brickbindb;
CREATE SCHEMA IF NOT EXISTS brickbindb; 

CREATE TABLE IF NOT EXISTS brickbindb.theme (
    theme_id INT(19) NOT NULL AUTO_INCREMENT,
    theme_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (theme_id)
);
CREATE TABLE IF NOT EXISTS brickbindb.login (
    username VARCHAR(45) NOT NULL ,
    admin_password VARCHAR(45) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS brickbindb.event (
    event_id INT(19) NOT NULL AUTO_INCREMENT,
    event_user_name VARCHAR(45) NOT NULL,
    event_email VARCHAR(45) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    event_number_guest INT(45) NOT NULL,
    event_description VARCHAR(45) NOT NULL,
    PRIMARY KEY (event_id)
);

CREATE TABLE IF NOT EXISTS brickbindb.ticket (
    ticket_id INT(19) NOT NULL AUTO_INCREMENT,
    ticket_email VARCHAR(45) NOT NULL,
    ticket_username VARCHAR(45) NOT NULL,
    ticket_message VARCHAR(200) NOT NULL,
    PRIMARY KEY (ticket_id)
);

CREATE TABLE IF NOT EXISTS brickbindb.product (
    product_set_numb VARCHAR(40) NOT NULL,
    product_set_name VARCHAR(40) NOT NULL,
    product_price DOUBLE NOT NULL,
    product_location VARCHAR(50) NOT NULL,
    product_quantity INT NOT NULL,
    product_img VARCHAR(50) NOT NULL,
    theme INT(19) NOT NULL,
    PRIMARY KEY (product_set_numb),
    CONSTRAINT fk_products_themes
        FOREIGN KEY (theme)
        REFERENCES brickbindb.theme (theme_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS brickbindb.cart (
    -- cart_id INT(20) NOT NULL AUTO_INCREMENT,
    cart_set_numb VARCHAR(40) NOT NULL,
    cart_set_name VARCHAR(40) NOT NULL,
    cart_set_price DOUBLE NOT NULL,
    cart_set_location VARCHAR(50) NOT NULL,
    cart_set_quantity INT NOT NULL,
    cart_set_img VARCHAR(50) NOT NULL,
    cart_theme INT(19) NOT NULL,
    PRIMARY KEY (cart_set_numb)
    -- CONSTRAINT fk_carts_products
    --     FOREIGN KEY (product_set_numb)
    --     REFERENCES brickbindb.product (product_set_numb)
);

CREATE TABLE IF NOT EXISTS brickbindb.admin (
    admin_name VARCHAR(40) NOT NULL,
    admin_password VARCHAR(40) NOT NULL,
    PRIMARY KEY (admin_name)
);

CREATE TABLE IF NOT EXISTS brickbindb.orders (
    order_id INT(19) NOT NULL AUTO_INCREMENT,
    order_user_name VARCHAR(40) NOT NULL,
    order_total DOUBLE NOT NULL,
    PRIMARY KEY (order_id)
);

INSERT INTO brickbindb.theme VALUES (1, 'LEGO Architecture');
INSERT INTO brickbindb.theme VALUES (2, 'LEGO BrickHeadz');
INSERT INTO brickbindb.theme VALUES (3, 'LEGO City');
INSERT INTO brickbindb.theme VALUES (4, 'LEGO Classic');
INSERT INTO brickbindb.theme VALUES (5, 'LEGO Creator-3-in-1');
INSERT INTO brickbindb.theme VALUES (6, 'LEGO DC');
INSERT INTO brickbindb.theme VALUES (7, 'LEGO Disney');
INSERT INTO brickbindb.theme VALUES (8, 'LEGO Friends');
INSERT INTO brickbindb.theme VALUES (9, 'LEGO Harry Potter');
INSERT INTO brickbindb.theme VALUES (10, 'LEGO Ideas');
INSERT INTO brickbindb.theme VALUES (11, 'LEGO Jurassic World');
INSERT INTO brickbindb.theme VALUES (12, 'LEGO Avatar');
INSERT INTO brickbindb.theme VALUES (13, 'LEGO Super Mario');
INSERT INTO brickbindb.theme VALUES (14, 'LEGO Lord of the Rings');
INSERT INTO brickbindb.theme VALUES (15, 'LEGO Marvel');
INSERT INTO brickbindb.theme VALUES (16, 'LEGO CMF Series');
INSERT INTO brickbindb.theme VALUES (17, 'LEGO Speed Champions');
INSERT INTO brickbindb.theme VALUES (18, 'LEGO Star Wars');
INSERT INTO brickbindb.theme VALUES (19, 'LEGO Techinic');
INSERT INTO brickbindb.theme VALUES (20, 'LEGO Creator Expert/Icons');
INSERT INTO brickbindb.theme VALUES (21, 'LEGO Retired');


INSERT INTO brickbindb.login (username, admin_password)
    VALUES ('testusername', 'testpassword');
INSERT INTO brickbindb.login (username, admin_password)
    VALUES ('admin', 'password');



INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location,product_quantity, product_img, theme)
    VALUES ('10212', 'UCS Imperial Shuttle', 2400.00, 'Macleod Trail', 1, 'UCS_Imp_Shutt.png', 18);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('75059', 'UCS Sandcrawler', 650.00, 'Macleod Trail', 1, 'UCS_Sand.png', 18);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('10188', 'UCS Death Star', 800.00, 'Macleod Trail', 1, 'UCS_DS.png', 18);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('10232', 'Palace Cinema', 400.00, 'Macleod Trail', 1, 'Palace_Cinema.png', 20);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('10311', 'Orchid', 400.00, 'Macleod Trail', 1, 'Orchid.png', 20);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('21338', 'A-Frame Cabin', 270.00, 'Macleod Trail', 1, 'A_Frame_Cabin.png', 10);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('76956', 'T. rex Breakout', 160.00, 'Macleod Trail', 1, 'T_rex_Breakout.png', 11);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('21058', 'Great Pyramid of Giza', 200.00, 'Macleod Trail', 1, 'Great_Pyramid_of_Giza.png', 1);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('10302', 'Optimus Prime', 270.00, 'Macleod Trail', 1, 'Optimus_Prime.png', 20);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('21332', 'The Globe', 320.00, 'Macleod Trail', 1, 'The_Globe.png', 10);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('10237', 'Tower of Orthanc', 750.00, 'Macleod Trail', 1, 'Tower_of_Orthanc.png', 14);

INSERT INTO brickbindb.product (product_set_numb, product_set_name, product_price, product_location, product_quantity, product_img, theme)
    VALUES ('7016', 'Viking Boat against the Wyvern Dragon', 170.00, 'Macleod Trail', 1, 'Viking_Boat_Wyvern.png', 21); 
