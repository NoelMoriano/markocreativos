<?php

$nameAndLasNameValue = "";
$phoneValue = "";
$emailValue = "";
$messageValue =  "";
    
if(isset($_POST['btn-send-message-fo'])){
    
    $nameAndLasNameValue = $_POST['input-name-and-lastname-fo'];
    $phoneValue = $_POST['input-phone-fo'];
    $emailValue = $_POST['input-email-fo'];
    $messageValue =  $_POST['input-message-fo'];

    
    if(empty($nameAndLasNameValue) || empty($phoneValue) || empty($emailValue)){
        echo "<script>alert('Ingrese todos sus datos');</script>";
    }else{
        
    $subject = "Consulta de usuario desde pagina web";
    $to = "markocreativo@gmail.com,mariano260996@gmail.com";
    
    $message = "
    <html>
    <head>
        <title>Email-MarkoCreativo</title>
    </head>
    <body>
    <p>Este <strong>mensaje de consulta</strong> fue enviado desde su pagina web https://www.markocreativo.com/</p>
    <table style='margin:0!important'>
        <tr>
        <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Nombres y Apellidos:</b></td>
        <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$nameAndLasNameValue."</td>
        </tr>
        <tr>
        <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Email:</b></td>
        <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$emailValue."</td>
        </tr>
        <tr>
        <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Cell:</b></td>
        <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$phoneValue."</td>
        </tr>
        <tr>
        <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Mensaje:</b></td>
        <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$messageValue."</td>
        </tr>
    </table>
    </body>
    </html>
    ";
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    mail($to,$subject,$message,$headers);  
        
    $nameAndLasNameValue = "";
    $phoneValue = "";
    $emailValue = "";
    $messageValue =  "";

    echo `<script>
                if ( window.history.replaceState ) {
                window.history.replaceState( null, null, window.location.href );
            }
            </script>`; 

    header("location:../index.html");

    }
}
?>