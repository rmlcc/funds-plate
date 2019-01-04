<?php
  $servername = "localhost";
  $username = "root";
  $passwd = "123456";
  $dbname = "yingmai";

  $conn = new mysqli($servername, $username, $passwd, $dbname);
  if ($conn->connect_error) {
    die("Α¬½ΣΚ§°ά: " . $conn->connect_error);
  }

  $sql = "select * from user_table;";
  $result = mysqli_query($conn, $sql);

  function check_user(){
    $sql = "select * from user_table;";
    $result = mysqli_query($conn, $sql);
    echo mysqli_num_rows($result);
  }

  check_user();
?>