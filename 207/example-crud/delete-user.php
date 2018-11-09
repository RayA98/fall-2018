<?php

require('db.php');

runSafeQuery(
  "DELETE FROM users WHERE users = ?",
  ['i', $_GET['id']]
);

header('Location: users.php');
