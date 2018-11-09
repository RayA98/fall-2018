<?php
// index.php

require('header.php');

require('navbar.php');
require('db.php');

$excerpts = getEditorPicks();
 ?>

<section id="feature">
  <button>WRITE YOUR STORY</button>
</section>

<section id="featured-stories">

  <?php foreach($excerpts as $excerpt) { ?>
    <article>
      <h3><?php echo $excerpt['title'] ?></h3>
      <p><?php echo $excerpt['excerpt'] ?></p>
      <a href="remove-excerpt.php?id=<?php echo $excerpt['id'] ?>">Remove</a>
    </article>
  <?php } ?>

</section>

 <?php require('footer.php') ?>
