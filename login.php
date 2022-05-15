<?php
ob_start();
$user='b201210051@sakarya.edu.tr';
$pass='b201210051';

if(isset($_POST['username'])){

    $username=$_POST['username'];
    $password=$_POST['password'];

    if($username==$user && $password==$pass){

        header('location:index.html');

    }
    else{
        echo 'Hata, Kullanıcı Adı veya Şifre Hatalı';
    }



}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GİRİŞ SAYFASI</title>
</head>
<body>
    <form method="POST">
    <input type="text" name="username" placeholder="Kullanıcı Adı"><br>
    <input type="password" name="password" placeholder="Şifre" ><br>
    <button type="submit">Giriş Yap</button>
 </form>
</body>
</html>