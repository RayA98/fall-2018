<?php
// login.php
//
require('header.php');
require('navbar.php');
 ?>

<h1 id="loginTitle">The Never Ending Story</h1>

<form id="loginForm" method="POST" action="check-login.php">
  <input type="text" name="email" placeholder="Email">
  <input type="password" name="password" placeholder="Password">
  <button>Login</button>
</form>


 <?php require('footer.php'); ?>
