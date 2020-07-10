<?php
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('/root/Database/CigaretteController_DB');
    }
}
error_reporting(E_ALL);

/* Allow the script to hang around waiting for connections. */
set_time_limit(0);

/* Turn on implicit output flushing so we see what we're getting
 * as it comes in. */
ob_implicit_flush();


$db = new MyDB();
$db->busyTimeout(5000);
$db-> exec('PRAGMA journal_mode=wal;');



function getStatusTCP()
  {
   $Status = "1";
    /*$fp = fsockopen("127.0.0.1", 1234, $errno, $errstr, 30);
    if (!$fp) {
      $Status ="0";
    } else {
      $Status ="1";
        fclose($fp);
    }*/
    return $Status;
  }
//Global functions to be used in php files will be listed here
?>