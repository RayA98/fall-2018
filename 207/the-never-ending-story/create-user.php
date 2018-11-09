<?php
//create-user.php

// 1. Check that the passwords are the xhprof_sample_disable
// 2. Create a user
// 3. Redirect to login


if ($_POST['password'] != $_POST['confirm_password']) {
  header('Location: signup.php');
}


require('db.php');

$hashedPassword = md5($_POST['password']);

runSafeQuery(
  "INSERT INTO users (first_name, last_name, email, password, alias, img)
    VALUES (?,?,?,?,?,?)
  ",
  [
    "ssssss",
    $_POST['first_name'],
    $_POST['last_name'],
    $_POST['email'],
    $hashedPassword,
    $_POST['alias'],
    'https://statics.sportskeeda.com/editor/2018/10/42081-15405387755616-800.jpg' // TODO FIX THIS
  ]
);

header('Location: login.php');
