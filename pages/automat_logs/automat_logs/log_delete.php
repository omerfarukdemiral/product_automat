<?php
        
        $LOG = $_GET['LOG'];

        function delete_log($FilePath)
        {
            
            if(file_exists($FilePath))
            {
                unlink($FilePath);
                echo  "1";
            }
            else{
                echo "0";
            } 
        }


        if($LOG ==1)
        {
            delete_log("../../../logger_port1.txt"); 
        }
        else if($LOG ==2)
        {
            delete_log("../../../logger_port2.txt");

        }
        else if($LOG ==3)
        {
            delete_log("../../../logger_port3.txt");

        }
        else if($LOG ==4)
        {
            delete_log("../../../logger_port4.txt");
        }
        else if($LOG ==5)
        {
            delete_log("../../../logger.txt");
        }
        else if($LOG ==6)
        {
            delete_log("../../../logger_nfc.txt");
        }
        else if($LOG ==7)
        {
            delete_log("../../../logger_tcp.txt");
        }
    
?>