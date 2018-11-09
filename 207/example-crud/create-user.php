<?php
if (isset($_POST['name'])) {
  require('db.php');
  runSafeQuery(
    "INSERT INTO users (name, dog_id, cat_id) VALUES (?, ?, ?)",
    ['sii', $_POST['name'], $_POST['dog_id'],$_POST['cat_id']]
  );
  header('Location: users.php');
}


 ?>


<form class="" action="create-user.php" method="post">
  <input type="text" name="name" placeholder="User name">
  <input type="text" name="cat_id" placeholder="Cat id">
  <input type="text" name="dog_id" placeholder="Dog id">
  <button>Create</button>
</form>
