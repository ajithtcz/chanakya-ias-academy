<?php

namespace Email;
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
class Mail
{
    public static function sendmail($data,$course)
    {
      //Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'stechcode@gmail.com';                     //SMTP username
    $mail->Password   = 'bcjpsrgjaprciwth';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($data['Email'], "Chanakya's IAS Academy");
    $mail->addAddress('stechcode@gmail.com', "Chanakya's IAS Academy");     //Add a recipient
    $mail->addReplyTo($data['Email'], 'Your registration has been successfully received. Please wait for our confirmation, as we will be calling you soon.');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Chanakya's IAS Academy";
    $mail->Body    = "<b>Name:</b>".$data['Name']."<br><b>Email:</b>".$data['Email']."<br><b>Mobilenumber:</b>".$data['Mobilenumber']."<br><b>Enroll Course:</b>".$course."<br><b>Message:</b>".$data['Message'];
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    return 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
} 
    }
}
