<?php
require "dbconnection.php";
function getcategory()
{
    global $conn;
    $getCatsQuery="select *from category";
    $getCatsResult=mysqli_query($conn,$getCatsQuery);
    while($row=mysqli_fetch_assoc($getCatsResult))
    {
        $id=$row["cat_id"];
        $title=$row["cat_name"];
        echo"<li><a class='nav-link=' href='#'>$title</a></li>";
    }

}
function getbrand()
{
    global $conn;
    $getbrandsQuery="select *from brands";
    $getbrandsResult=mysqli_query($conn,$getbrandsQuery);
    while($row=mysqli_fetch_assoc($getbrandsResult))
    {
        $id=$row["brand_id"];
        $title=$row["brand_name"];
        echo"<li><a class='nav-link=' href='#'>$title</a></li>";
    }

}
