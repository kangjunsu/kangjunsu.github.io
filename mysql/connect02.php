<?php

$user = "root";
$pass = "";
$host = "9000";
$db = "yournamebank";

//create connection
$con = @mysqli_connect($host, $user, $pass);
if(!$con) {
    echo "NOT CONNECTED";
    die(); //

}

//select the database;

$dbc = @mysqli_select_db($con,$db);
if(!$dbc) {
    echo "Connected but Database NOT seleceted";
    die();
} else

// connected with database;

echo "CONNECTED.....";