<?php
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
if(isset($_GET['del_customer'])){
    $cust_id = $_GET['del_customer'];
    $del_customer = "delete from customers where cust_id='$cust_id'";
    $run_del = mysqli_query($con,$del_customer);
    if($run_del){
        header('location: index.php?view_customers');
    }
}