<?php
require('db.php');

if (isset($_POST['name'])) {
  runSafeQuery(
    "UPDATE dogs SET name = ? WHERE id = ?",
    ['si', $_POST['name'], $_POST['id']]
  );
}

$dogs = runSafeQuery(
  "SELECT * FROM dogs WHERE id = ?",
  ['i', $_GET['id']]
);

if (count($dogs) == 0) {
  header('Location: dogs.php');
}

$dog = reset($dogs);
 ?>

 <form class="" action="update-dog.php" method="post">
   <input type="text" name="name" value="<?php echo $dog['name'] ?>">
   <input type="hidden" name="id" value="<?php echo $dog['id'] ?>">
   <button>Update</button>
 </form>
