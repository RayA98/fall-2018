<?php

require('db.php');

runSafeQuery(
  "DELETE FROM dogs WHERE id = ?",
  ['i', $_GET['id']]
);

header('Location: dogs.php');
