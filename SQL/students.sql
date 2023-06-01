CREATE TABLE cia_students(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Student_id VARCHAR(100) NOT NULL UNIQUE,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Mobilenumber VARCHAR(20),
    Password VARCHAR(100),
    Message LONGTEXT,
    Role VARCHAR(50) DEFAULT 'Student',
    Status VARCHAR(50) DEFAULT 'Inactive',
    Enrolled_Courses VARCHAR(500),
    created_date timestamp default now(), 
    updated_date timestamp default now() on update now() 
);
###auto studentid###
-- Create the trigger
DELIMITER //

CREATE TRIGGER generate_student_id
BEFORE INSERT ON cia_students
FOR EACH ROW
BEGIN
    DECLARE new_id INT;

    -- Get the next auto-incremented value for the ID column
    SET new_id = (SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'cia_students' AND TABLE_SCHEMA = DATABASE());

    -- Set the student_id based on your desired format
    SET NEW.Student_id = CONCAT('CIA-STU', LPAD(new_id, 6, '0'));
END //

DELIMITER ;