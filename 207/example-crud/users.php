<?php
require('db.php');

$users = runSafeQuery(
  "SELECT * FROM users",
  []
);

 ?>

<a href="create-user.php">Create Dog</a>

 <?php foreach ($users as $user) { ?>

   <pre><?php echo var_dump($user) ?></pre>
   <a href="delete-user.php?id=<?php echo $user['users'] ?>">Delete</a>
   <a href="update-user.php?id=<?php echo $user['users'] ?>">Update</a>

 <?php } ?>
