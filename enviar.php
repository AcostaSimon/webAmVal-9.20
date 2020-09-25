<?php
//================================================================
// Variables:                                           [Globales]
//================================================================
$name    = $_POST['nombre'];         // Extraer dato del nombre.
$mail    = $_POST['email'];          // Extraer dato del mail.
$phone   = $_POST['celular'];        // Extraer dato del celular.
$affair  = $_POST['asunto'];         // Extraer dato del asunto.
$message = $_POST['mensaje'];        // Extraer dato del mensaje.
$to = "sacosta@ampm.com.ar, sma2347@gmail.com";// Correo destino.
//================================================================
// Datos de remitente:                    [identificar el mensaje]
//================================================================
$header = 'Enviado desde web: America Valores [S.A.]';
$messageComplete = $message."\t\n\t\nMis datos son:\n\tMi Mail:  - ".$mail."\n\tCelular:  - ".$phone. "\n\tAtentamente:  - ".$name."\t\n";
//================================================================
// Configuracion del mensaje:                       [Envio de mail]
//================================================================
mail($to, $affair, $messageComplete, $header);
echo '<meta http-equiv=refresh content="1; https://americavalores-grupoamerica.000webhostapp.com/>';
//================================================================
?>