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

  switch($_POST["type"]){
    //��ȡ��֤��
    case 0:
      //echo $_POST["mobile"];
      break;
    //ע��
    case 1:
      //echo $_POST["mobile"] . ";";
      //echo $_POST["code"] . ";";
      //echo $_POST["passwd"] . ";";
      setcookie("mobile", "13862383373", time()+7200,"/funds-plate/home1.html");
      setcookie("passwd", "13862383373", time()+7200,"/funds-plate/home1.html");
      goto_url("/funds-plate/home1.html");
      break;
    //��½
    case 2:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      break;
    //�޸�����
    case 3:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["code"] . ";";
      break;
    //����
    case 4:
      echo $_POST["mobile"] . ";";
      break;
    //����
    case 5:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["amount"] . ";";
      break;
    //��ȡ����
    case 6:
      echo $_POST["mobile"] . ";";
      break;
    //��ȡ�ܶ�
    case 7:
      echo $_POST["mobile"] . ";";
      break;
    //��ȡ�޶�����
    case 8:
      echo $_POST["mobile"] . ";";
      break;
    //��ȡ������
    case 9:
      echo $_POST["mobile"] . ";";
      break;
    //����
    case 10:
      echo $_POST["mobile"] . ";";
      echo $_POST["passwd"] . ";";
      echo $_POST["address"] . ";";
      echo $_POST["amount"] . ";";
      break;
  }
?>