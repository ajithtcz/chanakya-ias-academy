CREATE TABLE cia_staffs(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Staff_id VARCHAR(100) NOT NULL UNIQUE,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100),
    Mobilenumber VARCHAR(20),
    Designation VARCHAR(200),
    Role VARCHAR(50) DEFAULT 'Staff',
    Status VARCHAR(50) DEFAULT 'Inactive',
    created_date timestamp default now(), 
    updated_date timestamp default now() on update now() 
);
DELIMITER //

CREATE TRIGGER generate_staffs_id
BEFORE INSERT ON cia_staffs
FOR EACH ROW
BEGIN
    DECLARE new_id INT;

    -- Get the next auto-incremented value for the ID column
    SET new_id = (SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'cia_staffs' AND TABLE_SCHEMA = DATABASE());

    -- Set the student_id based on your desired format
    SET NEW.Staff_id = CONCAT('CIA-STA', LPAD(new_id, 6, '0'));
END //

DELIMITER ;
