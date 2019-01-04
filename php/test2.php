<?php
  $servername = "localhost";
  $username = "root";
  $passwd = "123456";
  $dbname = "yingmai";

  $conn = new mysqli($servername, $username, $passwd, $dbname);
  if ($conn->connect_error) {
    die("Α¬½ΣΚ§°ά: " . $conn->connect_error);
  }

  function check_user($username){
    $sql = "select * from user_table;";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        if ($row["user_name"] == $username) {
	  return true;
	}
      }
    }
    return false;
  }

  echo check_user("13812341234");
?>