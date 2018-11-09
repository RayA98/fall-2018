<?php

require('db.php');

runSafeQuery(
  "DELETE FROM cats WHERE id = ?",
  ['i', $_GET['id']]
);

header('Location: cats.php');
