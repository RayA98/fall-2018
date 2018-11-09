<?php
require('db.php');

if (isset($_POST['name'])) {
  runSafeQuery(
    "UPDATE cats SET name = ? WHERE id = ?",
    ['si', $_POST['name'], $_POST['id']]
  );
}

$cats = runSafeQuery(
  "SELECT * FROM cats WHERE id = ?",
  ['i', $_GET['id']]
);

if (count($cats) == 0) {
  header('Location: cats.php');
}

$cat = reset($cats);
 ?>

 <form class="" action="update-cat.php" method="post">
   <input type="text" name="name" value="<?php echo $cat['name'] ?>">
   <input type="hidden" name="id" value="<?php echo $cat['id'] ?>">
   <button>Update</button>
 </form>
