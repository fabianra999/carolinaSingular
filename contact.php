<?php
/**
 * Formulario
 *  $destino : correo destino;
 *  $name,$email,$email,$asunto,$mensage : campos formulario;
 *  $date : Fecha de envio;
 */
$destino = 'fabianra999@gmail.com';
$name = $_POST['fName'];
$email = $_POST['fEmail'];
$mensage = $_POST['fMensaje'];
$date = date('d/m/Y', time());
/**
 * Header Email
 */
$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
/**
 * Body Email
 */-
$mensaje = "Este mensaje fue enviado por " . $name . ".\r\n";
$mensaje .= "Su e-mail es: " . $email . ".\r\n";
$mensaje .= "Enviado el: " . $date . ".\r\n";
$mensaje .= "Correo " . $destino . ".\r\n";
$mensaje .= "Mensaje: " . $mensage . ".\r\n";
/**
 * Asunto Email
 */
$asuntoMail = 'Contacto sitio Web carolinald | ' . $name;
/**
 * Envio Email
 */

$result = mail($destino, $asuntoMail, utf8_decode($mensaje), $header);
if (!$result) {
    print "<p class='Error'>Problem in Sending Mail.</p>";
    echo "Error";
    //header("Location:index.html");
} else {
    print "<p class='success'>Contact Mail Sent.</p>";
    echo "Success";
    //header("Location:index.html");
}
?>