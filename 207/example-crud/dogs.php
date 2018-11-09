<?php
require('db.php');

$dogs = runSafeQuery(
  "SELECT * FROM dogs",
  []
);

 ?>

<a href="create-dog.php">Create Dog</a>

 <?php foreach ($dogs as $dog) { ?>

   <pre><?php echo var_dump($dog) ?></pre>
   <a href="delete-dog.php?id=<?php echo $dog['id'] ?>">Delete</a>
   <a href="update-dog.php?id=<?php echo $dog['id'] ?>">Update</a>

 <?php } ?>
