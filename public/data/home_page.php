<?php
  header("Content-Type: application/json;charset=utf-8");
  require('init.php');

//获取c_news中的全部信息
  $sql = "SELECT * FROM c_news";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);

//声明空的二维数组
  $output = [];
//数组的第一个位置保存c_news的全部信息
  $output[0] = $row;

  $sql = "SELECT * FROM c_news_detail WHERE id = (SELECT contentId FROM c_news)";

  $result = mysqli_query($conn, $sql);

//循环获取c_news_detail中的所有信息，并保存在$output的第一个数组中
  while(true){
    $rows = mysqli_fetch_assoc($result);
    if(!$rows){
      break;
    }
    $output[1][] = $rows;
  }

//输出二维数组
  echo json_encode($output);
