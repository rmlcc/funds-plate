<?php
  $servername = "localhost";
  $username = "root";
  $passwd = "123456";
  $dbname = "yingmai";

  $conn = new mysqli($servername, $username, $passwd, $dbname);
  if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
  }

  function goto_url($url){
    echo "<html><head></head><body>";
    echo "<script>window.location.href = \"" . $url . "\";</script>";
    echo "</body></html>";
  }

  switch($_POST["type"]){
    //获取验证码
    case 0:
      //echo $_POST["mobile"];
      break;
    //注册
    case 1:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["code"] . ";";
      //echo $_POST["passwd"] . ";";
      setcookie("mobile", "13862383373", time()+7200,"/funds-plate/home1.html");
      setcookie("passwd", "13862383373", time()+7200,"/funds-plate/home1.html");
      goto_url("/funds-plate/home1.html");
      break;
    //登陆
    case 2:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      break;
    //修改密码
    case 3:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["code"] . ";";
      break;
    //邀请
    case 4:
      echo $_POST["mobile"] . ";";
      break;
    //购买
    case 5:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["amount"] . ";";
      break;
    //获取收益
    case 6:
      echo $_POST["mobile"] . ";";
      break;
    //获取总额
    case 7:
      echo $_POST["mobile"] . ";";
      break;
    //获取无冻结金额
    case 8:
      echo $_POST["mobile"] . ";";
      break;
    //获取冻结金额
    case 9:
      echo $_POST["mobile"] . ";";
      break;
    //提现
    case 10:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["address"] . ";";
      echo $_POST["amount"] . ";";
      break;
  }
?>