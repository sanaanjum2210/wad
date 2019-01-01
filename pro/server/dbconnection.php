<?php
$conn=mysqli_connect("localhost","root","","product_database");
if(!$conn){
    die("connection failed:".mysqli_connect_error());
}
echo "connected successfully";