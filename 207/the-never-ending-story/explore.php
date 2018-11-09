<?php
require('header.php');
require('db.php');
require('navbar.php');

$stories = getCompletedStories();
 ?>

<?php foreach ($stories as $story) { ?>
  <article>
    <h3>
      <a href="story.php?action=read&id=<?php echo $story['id'] ?>">
        <?php echo $story['title'] ?>
      </a>
    </h3>
    <p><?php echo substr($story['chapters'][0]['text'], 0, 300) ?>...</p>
  </article>
<?php } ?>

<?php require('footer.php') ?>
