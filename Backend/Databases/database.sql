DROP SCHEMA IF EXISTS 'inventory';
CREATE SCHEMA IF NOT EXISTS 'inventory'; 

CREATE TABLE IF NOT EXISTS 'inventory'.'theme' (
    'theme_id' INT(11) NOT NULL AUTO_INCREMENT,
    'theme_name' VARCHAR(45) NOT NULL,
    PRIMARY KEY ('theme_id')
);

CREATE TABLE IF NOT EXISTS 'inventory'.'product' (
    'product_set_numb' VARCHAR(40) NOT NULL,
    'product_set_name' VARCHAR(40) NOT NULL,
    'product_price' DOUBLE NOT NULL,
    'product_location' VARCHAR(50) NOT NULL,
    'product_quantity' INT NOT NULL,
    'theme' INT(11) NOT NULL,
    PRIMARY KEY ('product_set_numb'),
    CONSTRAINT 'fk_products_themes'
        FOREIGN KEY ('theme')
        REFERENCES 'inventory'.'theme' ('theme_id')
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

INSERT INTO 'theme' VALUES (1, 'LEGO Architecture');
INSERT INTO 'theme' VALUES (2, 'LEGO BrickHeadz');
INSERT INTO 'theme' VALUES (3, 'LEGO City');
INSERT INTO 'theme' VALUES (4, 'LEGO Classic');
INSERT INTO 'theme' VALUES (5, 'LEGO Creator-3-in-1');
INSERT INTO 'theme' VALUES (6, 'LEGO DC');
INSERT INTO 'theme' VALUES (7, 'LEGO Disney');
INSERT INTO 'theme' VALUES (8, 'LEGO Friends');
INSERT INTO 'theme' VALUES (9, 'LEGO Harry Potter');
INSERT INTO 'theme' VALUES (10, 'LEGO Ideas');
INSERT INTO 'theme' VALUES (11, 'LEGO Jurassic World');
INSERT INTO 'theme' VALUES (12, 'LEGO Avatar');
INSERT INTO 'theme' VALUES (13, 'LEGO Super Mario');
INSERT INTO 'theme' VALUES (14, 'LEGO Lord of the Rings');
INSERT INTO 'theme' VALUES (15, 'LEGO Marvel');
INSERT INTO 'theme' VALUES (16, 'LEGO CMF Series');
INSERT INTO 'theme' VALUES (17, 'LEGO Speed Champions');
INSERT INTO 'theme' VALUES (18, 'LEGO Star Wars');
INSERT INTO 'theme' VALUES (19, 'LEGO Techinic');

INSERT INTO 'product' ('product_set_numb', 'product_set_name', 'product_price', 'product_location','product_quantity', 'theme')
    VALUES ('10212', 'UCS Imperial Shuttle', 2400.00, 'Macleod Trail', 1, 18);
INSERT INTO 'product' ('product_set_numb', 'product_set_name', 'product_price', 'product_location', 'product_quantity', 'theme')
    VALUES ('10212', 'UCS Sandcrawler', 2400.00, 'Macleod Trail', 1, 18);