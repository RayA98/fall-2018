<?php
function getConnection() {
  $connection = new mysqli('localhost:8889', 'root', 'root', 'example');

  if ($connection->error) {
    die("Creating connection failed:" . $connection->error);
  }

  return $connection;
}

function runSafeQuery($query, $params) {
  $connection = getConnection();
  // PREPARE
  $statement = $connection->prepare($query);
  // check if prepare failed
  if ($statement == false) {
    die('Prepare failed: ' . $connection->error);
  }
  // BIND PARAMETERS
  // ex SELECT * FROM dogs WHERE id = ? AND name = ?
  // $statement->bind_param('is', 1, 'spot');
  // s = string, i = int, b = blob/binary
  if (count($params) > 0) {
    $statement->bind_param(...$params);
  }
  if ($statement->error) {
    die('Bind failed: ' . $statement->error);
  }
  $success = $statement->execute();
  if ($success == false) {
    die('Execute failed: ' . $statement->error);
  }
  $result = $statement->get_result();
  $connection->close();

  $results = [];

  // var_dump($result);
  // die("RESULT IS" . $result);

  while ($result && $row = $result->fetch_array()) {
    $results[] = $row;
  }

  return $results;
}

function removeExcerptById($id) {
  runSafeQuery(
    "DELETE FROM editor_picks WHERE id = ?",
    ["i", $id]
  );
}
