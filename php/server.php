<?php
  $servername = "localhost";
  $username = "root";
  $passwd = "123456";
  $dbname = "yingmai";

  $conn = new mysqli($servername, $username, $passwd, $dbname);
  if ($conn->connect_error) {
    die("����ʧ��: " . $conn->connect_error);
  }

  function goto_url($url){
    echo "<html><head></head><body>";
    echo "<script>window.location.href = \"" . $url . "\";</script>";
    echo "</body></html>";
  }

  $status = false;

  switch($_POST["type"]){
    //��ȡ��֤��
    case 0:
      echo $_POST["mobile"];
      break;
    //ע��
    case 1:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["code"] . ";";
      //echo $_POST["passwd"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"]) {
	    setcookie("message", "user_exists", time()+7200,"/funds-plate/home1.html");
            goto_url("/funds-plate/home1.html#page2");
	    $status = true;
	    break;
	  }
        }
      }

      if($status)
        break;
      
      $sql = "insert into user_table (user_name,passwd,address,registerd_address,share_address) values (";
      $sql = $sql . "\"" . $_POST["mobile"] . "\",";
      $sql = $sql . "\"" . md5($_POST["passwd"]) . "\",";
      $sql = $sql . "\"" . "xxxx" . "\",";
      $sql = $sql . "\"" . "xxxx" . "\",";
      $sql = $sql . "\"" . "xxxx" . "\");";
      if (mysqli_query($conn, $sql)) {
        setcookie("mobile", $_POST["mobile"], time()+7200,"/funds-plate/home1.html");
      	setcookie("passwd", $_POST["passwd"], time()+7200,"/funds-plate/home1.html");
      	goto_url("/funds-plate/home1.html");
      }
      else {
        echo $sql;
        die("���ݿ����ʧ��: " . $conn->connect_error);
      }
      break;
    //��½
    case 2:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["passwd"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    setcookie("mobile", $_POST["mobile"], time()+7200,"/funds-plate/home1.html");
      	    setcookie("passwd", $_POST["passwd"], time()+7200,"/funds-plate/home1.html");
      	    goto_url("/funds-plate/home1.html");
	    break;
	  }
        }
      }
      
      break;
    //�޸�����
    case 3:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["passwd"] . ";";
      //echo $_POST["code"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"]) {
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;


      $sql = "update user_table set passwd=\"";
      $sql = $sql . md5($_POST["passwd"]) . "\" ";
      $sql = $sql . "where user_name=\"" . $_POST["mobile"] . "\";";
      $result = mysqli_query($conn, $sql);
      setcookie("mobile", $_POST["mobile"], time()+7200,"/funds-plate/home1.html");
      setcookie("passwd", $_POST["passwd"], time()+7200,"/funds-plate/home1.html");
      goto_url("/funds-plate/home1.html");
      break;
    //����
    case 4:
      echo $_POST["mobile"] . ";";
      break;
    //����
    case 5:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["passwd"] . ";";
      //echo $_POST["amount"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }

      if(a0 - a1 - a2 + a3 + a4 < (int)_POST["amount"])
        break;

      $sql = "insert into pay_table (pay_type,pay_amout,pay_date,user_id) values(";
      $sql = $sql . 2 . "," . $_POST["amount"] . "," . "now()," . $user_id . ");";
      if (mysqli_query($conn, $sql)) {
        
      }
      else {
      }

      break;
    //��ȡ����
    case 6:
      //echo $_POST["mobile"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }
      
      break;
    //��ȡ�ܶ�
    case 7:
      //echo $_POST["mobile"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }

      a0 - a1;
      
      break;
    //��ȡ�޶�����
    case 8:
      //echo $_POST["mobile"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }

      a0 - a1 - a2 + a3 + a4;
      
      break;
    //��ȡ������
    case 9:
      //echo $_POST["mobile"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }

      a2 - a3;
      
      break;
    //����
    case 10:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["passwd"] . ";";
      //echo $_POST["address"] . ";";
      //echo $_POST["amount"] . ";";
      $sql = "select * from user_table;";
      $result = mysqli_query($conn, $sql);
      $a0 = 0, $a1 = 0, $a2 = 0, $a3 = 0, $a4 = 0;
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
          if ($row["user_name"] == $_POST["mobile"] && $row["passwd"] == $_POST["passwd"]) {
	    $user_id = $row["user_id"];
	    $status = true;
	    break;
	  }
        }
      }

      if(!$status)
        break;

      $sql = "select * from pay_table;";
      $result = mysqli_query($conn, $sql);
      if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
	  if($row["user_id"] == $user_id && row["pay_type"] == 0){
	    a0 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 1){
	    a1 -= (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 2){
	    a2 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 3){
	    a3 += (int)$row["pay_amount"];
	  }
	  elseif($row["user_id"] == $a0 && row["pay_type"] == 4){
	    a4 += (int)$row["pay_amount"];
	  }
        }
      }
      
      break;
  }

  mysqli_close($conn);
?>