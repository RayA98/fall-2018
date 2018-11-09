<?php
// remove-excerpt.php

require('db.php');
removeExcerptById($_GET['id']);

// $connection = new mysqli('localhost:8889', 'root', 'root', 'tnes');
//
// // $connection->query("DELETE FROM editor_picks WHERE id = " . $_GET['id']);
// // Prepare
// $statement = $connection->prepare("DELETE FROM editor_picks WHERE id = ?");
// // Bind
// $statement->bind_param("i", $_GET['id']);
// // Execute
// $statement->execute();


// Redirects to the home page
header('Location: index.php');
