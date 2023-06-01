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

