<?php
  $servername = "localhost";
  $username = "root";
  $password = "123456";

  $conn = new mysqli($servername, $username, $password);
  if ($conn->connect_error) {
    die("����ʧ��: " . $conn->connect_error);
  }

  switch($_POST["type"]){
    //��ȡ��֤��
    case 0:
      echo $_POST["mobile"];
      break;
    //ע��
    case 1:
      echo $_POST["mobile"] . ";";
      echo $_POST["password"] . ";";
      break;
    //��½
    case 2:
      echo $_POST["mobile"] . ";";
      echo $_POST["password"] . ";";
      break;
    //�޸�����
    case 3:
      echo $_POST["mobile"] . ";";
      echo $_POST["password"] . ";";
      break;
    //����
    case 4:
      echo $_POST["mobile"] . ";";
      break;
    //����
    case 5:
      echo $_POST["mobile"] . ";";
      echo $_POST["password"] . ";";
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
      echo $_POST["password"] . ";";
      echo $_POST["address"] . ";";
      echo $_POST["amount"] . ";";
      break;
  }
?>