<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];


// Формирование самого письма
if(isset($name, $phone, $message)) {
$title = "New message Best Tour Plan";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br><br>
<b>Message:</b><br>$message
" 
;

header('Location: thankyou.html');

};

$news = $_POST['email'];

// Формирование самого письма

if(isset($news)) {
$title = "New message Best Tour Plan";
$body = "
<h2>New message</h2>
<b>New email for newletter:</b> $news
" 
;

header('Location: thanknews.html');

};

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$news = $_POST['email'];


if(isset($name, $phone, $news, $message)) {
$title = "New message Best Tour Plan";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br>
<b>New email for newletter:</b> $news
<br>
<b>Message:</b><br>$message
" 
;


header('Location: thankyou.html');

};



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'koshelevI.web@gmail.com'; // Логин на почте
    $mail->Password   = "clearasil"; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('koshelevI.web@gmail.com', 'Илья Кошелев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('kosh-ilya@mail.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
};









