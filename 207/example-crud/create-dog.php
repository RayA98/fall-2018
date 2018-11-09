<?php
if (isset($_POST['name'])) {
  require('db.php');
  runSafeQuery(
    "INSERT INTO dogs (name) VALUES (?)",
    ['s', $_POST['name']]
  );
  header('Location: dogs.php');
}


 ?>


<form class="" action="create-dog.php" method="post">
  <input type="text" name="name" placeholder="Dog name">
  <button>Create</button>
</form>
