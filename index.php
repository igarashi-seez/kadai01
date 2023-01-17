<?php 
$post = $_POST;
$key = $post['key'];
$value = $post['value'];

$json = file_get_contents("hiroshi.json");
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$json_arr = json_decode($json,true);

$json_arr += array (
  $key => $value
);

$json_arr = json_encode($json_arr, JSON_UNESCAPED_UNICODE);
file_put_contents("hiroshi.json", $json_arr);
