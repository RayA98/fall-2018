<?php
require('db.php');

$cats = runSafeQuery(
  "SELECT * FROM cats",
  []
);

 ?>

<a href="create-cat.php">Create Cat</a>

 <?php foreach ($cats as $cat) { ?>

   <pre><?php echo var_dump($cat) ?></pre>
   <a href="delete-cat.php?id=<?php echo $cat['id'] ?>">Delete</a>
   <a href="update-cat.php?id=<?php echo $cat['id'] ?>">Update</a>

 <?php } ?>
