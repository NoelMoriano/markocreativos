    
    <?php

        $nameValue = "";
        $lastNameValue = "";
        $companyValue = "";
        $emailValue = "";
        $phoneValue = "";
        $servicesValue = "";
        $contactType =  "";
            
        if(isset($_POST['btn-send-message-fixed'])){
            
            $nameValue = $_POST['userName'];
            $lastNameValue = $_POST['userLastName'];
            $companyValue = $_POST['userCompany'];
            $emailValue = $_POST['userEmail'];
            $phoneValue = $_POST['userPhone'];
            $servicesValue = $_POST['select-service'];
            $contactType =  $_POST['contact-type-fixed'];
            
            if(empty($nameValue) || empty($lastNameValue) || empty($emailValue) || empty($phoneValue) || empty($servicesValue) || empty($contactType)){
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
            <p>Este <strong>mensaje de cotización</strong> fue enviado desde su pagina web https://www.markocreativo.com/</p>
            <table style='margin:0!important'>
                <tr>
                <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Nombres:</b></td>
                <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$nameValue."</td>
                </tr>
                <tr>
                <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Apellidos:</b></td>
                <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$lastNameValue."</td>
                </tr>
                <tr>
                <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Empresa:</b></td>
                <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$companyValue."</td>
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
                <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Servicio:</b></td>
                <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$servicesValue."</td>
                </tr>
                <tr>
                <td style='margin:0!important;border:1px solid #444;background:#F9FF00;color:#000;padding:8px;'><b>Tipo contacto:</b></td>
                <td style='margin:0!important;border:1px solid #444;padding:8px;'>".$contactType."</td>
                </tr>
            </table>
            </body>
            </html>
            ";
            // Always set content-type when sending HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
            mail($to,$subject,$message,$headers);  
                
            $nameValue = "";
            $lastNameValue = "";
            $companyValue = "";
            $emailValue = "";
            $phoneValue = "";
            $servicesValue = "";
            $contactType =  "";

            echo `<script>
                if ( window.history.replaceState ) {
                window.history.replaceState( null, null, window.location.href );
            }
            </script>`; 

            header("location:../index.html");

            }
        }
    ?>