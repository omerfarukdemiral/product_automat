<?php
        $LOG = $_GET['LOG'];
        $filepath = "";
        if($LOG ==1)
        {
            $filepath = "../../../logs/USCLOGGER.txt";            
        }
        else if($LOG ==2)
        {
            $filepath = "../../../logs/TCPLOGGER.txt";
        }
        else if($LOG ==3)
        {
            $dosya="../../logs/METERLOGGER.txt";
        }
        else if($LOG ==4)
        {
            $dosya="../../logs/DATABASELOGGER.txt";
        }
    
    // Process download
    if(file_exists($filepath)) {
        echo "1";
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($filepath).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filepath));
        flush(); // Flush system output buffer
        readfile($filepath);
        exit;
    }
    else
    {
        echo "0";
    }

?>