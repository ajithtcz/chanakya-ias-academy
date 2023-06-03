<?php
//login or authentication
$router->post('/may2023/chanakyasiasacademy-backend/api/login', 'login@UserLogin');
//register or enroll
$router->post('/may2023/chanakyasiasacademy-backend/api/enquiry', 'register@Enroll');
//stream controller
$router->get('/may2023/chanakyasiasacademy-backend/api/playvideo', 'stream@playvideo');
$router->get('/may2023/chanakyasiasacademy-backend/api/getpdf', 'stream@getpdf');
$router->get('/may2023/chanakyasiasacademy-backend/api/playvideoaccess', 'stream@playvideoaccess');
$router->get('/may2023/chanakyasiasacademy-backend/api/getpdfaccess', 'stream@getpdfaccess');
//student profile
$router->get('/may2023/chanakyasiasacademy-backend/api/getstudentprofile', 'studentprofile@getstudentprofile');
//course
$router->get('/may2023/chanakyasiasacademy-backend/api/admingetallcourse', 'course@admingetallcourse');
$router->get('/may2023/chanakyasiasacademy-backend/api/getcoursedetails', 'course@getcoursedetails');
$router->post('/may2023/chanakyasiasacademy-backend/api/savecoursedetails', 'course@savecoursedetails');
$router->put('/may2023/chanakyasiasacademy-backend/api/adminupdatecoursewithoutfile', 'course@adminupdatecoursewithoutfile');
$router->post('/may2023/chanakyasiasacademy-backend/api/adminupdatecoursewithfile', 'course@adminupdatecoursewithfile');
$router->delete('/may2023/chanakyasiasacademy-backend/api/admindeletecourse', 'course@admindeletecourse');
//Student
$router->get('/may2023/chanakyasiasacademy-backend/api/admingetallstudent', 'students@admingetallstudent');
$router->post('/may2023/chanakyasiasacademy-backend/api/adminsavestudent', 'students@adminsavestudent');
$router->put('/may2023/chanakyasiasacademy-backend/api/adminupdatestudent', 'students@adminupdatestudent');
$router->delete('/may2023/chanakyasiasacademy-backend/api/admindeletestudent', 'students@admindeletestudent');
?>
