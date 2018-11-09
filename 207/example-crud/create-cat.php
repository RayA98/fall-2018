<?php
if (isset($_POST['name'])) {
  require('db.php');
  runSafeQuery(
    "INSERT INTO cats (name) VALUES (?)",
    ['s', $_POST['name']]
  );
  header('Location: cats.php');
}


 ?>


<form class="" action="create-cat.php" method="post">
  <input type="text" name="name" placeholder="Cat name">
  <button>Create</button>
</form>
