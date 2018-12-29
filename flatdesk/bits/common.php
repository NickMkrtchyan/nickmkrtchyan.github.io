<?php

function sanitize_output($buffer){
  $search = array(
      '/\>[^\S ]+/s', //strip whitespaces after tags, except space
      '/[^\S ]+\</s', //strip whitespaces before tags, except space
      '/(\s)+/s',  // shorten multiple whitespace sequences
      '/\>(\s)+\</s'  // strip whitespaces between tags
      );
  $replace = array('>','<','\\1','><');
  $buffer = str_replace(array("\n", "\r", "  "), "", $buffer);
  return $buffer;
}

function commonHeaders(){
  header("Cache-Control: no-cache, must-revalidate");
  header("Pragma: no-cache");
  header("Expires: ".gmdate("D, d M Y H:i:s", (time() - 172800)) . " GMT");
  header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
  header('Content-Type: text/html; charset=utf-8');
  ob_start("sanitize_output");
}

?>