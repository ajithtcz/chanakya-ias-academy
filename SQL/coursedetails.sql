CREATE TABLE cia_coursedetails(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Course_Short_Name VARCHAR(200),
    Course_Title VARCHAR(500),
    Course_Pdf VARCHAR(500),
    Course_Video VARCHAR(500),
    Course_Status VARCHAR(50) DEFAULT 'Inactive',
    created_date timestamp default now(), 
    updated_date timestamp default now() on update now() 
);