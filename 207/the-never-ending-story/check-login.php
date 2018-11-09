<?php
session_start();
// check-login.php


// 1. Get the user from the DB
// 2. Check their password
// 3. redirect to profile

require('db.php');

$users = runSafeQuery(
  "SELECT * FROM users WHERE email = ?",
  ['s', $_POST['email']]
);

$user = reset($users);

if ($user['password'] == md5($_POST['password'])) {
  $_SESSION['loggedInUser'] = $user;
  header('Location: profile.php');
} else {
  echo "Login failed";
}
