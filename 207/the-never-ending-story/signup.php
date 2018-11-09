<?php
// signup.php
//
require('header.php');
require('navbar.php');
 ?>

<h1 id="signupTitle">The Never Ending Story</h1>

<form id="signupForm" action="create-user.php" method="POST">
  <input type="file" name="img">

  <div>
    <input name="email" type="text" placeholder="Email">
    <input name="password" type="password" placeholder="Password">
    <input name="confirm_password" type="password" placeholder="Confirm Password">
  </div>

  <div>
    <input name="first_name" type="text" placeholder="First Name">
    <input name="last_name" type="text" placeholder="Last Name">
    <input name="alias" type="text" placeholder="Alias">
  </div>

  <button>Register</button>
</form>




 <?php require('footer.php'); ?>
