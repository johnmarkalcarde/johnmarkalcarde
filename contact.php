<?php


if(isset($_POST['submit'])){

$name = $_POST['name'];
$mailrFrom = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$mailTo = "alcardejohn3@gmail.com"
$headers =  "From: ". $mailrFrom;

$txt = "You have recieved an email from ".$name. ".\n\n". $message;

mail($mailTo, $subject, $txt, $headers);

header("Location: index.php?mailsent");
}
?>