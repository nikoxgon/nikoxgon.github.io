<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$subject = $_REQUEST['subject'];
$from = "From: $name<$email>\r\nReturn-path: $email";
mail("contacto@ocaconsultores.cl", $subject, $message, $from);
echo "Muchas gracias por contactarse con nosotros. <br> Pronto nos comunicaremos con usted."
?>
