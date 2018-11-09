<?php
require('db.php');

if (isset($_POST['name'])) {
  runSafeQuery(
    "UPDATE users SET name = ?, cat_id=?, dog_id=? WHERE users = ?",
    ['siii', $_POST['name'], $_POST['cat_id'],$_POST['dog_id'],$_POST['id']]
  );
}

$users = runSafeQuery(
  "SELECT * FROM users WHERE users = ?",
  ['i', $_GET['id']]
);

if (count($users) == 0) {
  header('Location: users.php');
}

$user = reset($users);
 ?>

 <form class="" action="update-user.php" method="post">
   <input type="text" name="name" value="<?php echo $user['name'] ?>">
   Dog: <input type="number" name="dog_id" value="<?php echo $user['dog_id'] ?>">
   Cat: <input type="number" name="cat_id" value="<?php echo $user['cat_id'] ?>">
   <input type="hidden" name="id" value="<?php echo $user['users'] ?>">
   <button>Update</button>
 </form>
