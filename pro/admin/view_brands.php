<?php
if(!isset($_SESSION['user_email'])) {
    header('Location: login.php');
}
?>
<div class="row">
    <div class="col-sm-12">
        <h1>Brands</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Brand Title</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $get_pro = "select * from customers";
            $run_pro = mysqli_query($con,$get_pro);
            $count_pro = mysqli_num_rows($run_pro);
            if($count_pro==0){
                echo "<h2> No customers found in selected criteria </h2>";
            }
            else {
                $i = 0;
                while ($row_pro = mysqli_fetch_array($run_pro)) {
                    $pro_id = $row_pro['cust_id'];
                    $brand_title = $row_pro['cust_name'];
                    ?>
                    <tr>
                        <th scope="row"><?php echo ++$i; ?></th>
                        <td><?php echo $brand_title; ?></td>
                        <td><a href="index.php?edit_brand=<?php echo $pro_id?>" class="btn btn-primary">
                                <i class="fa fa-edit"></i> Edit
                            </a>
                            <a href="index.php?del_brand=<?php echo $pro_id?>" class="btn btn-danger">
                                <i class="fa fa-trash-alt"></i> Delete
                            </a>
                        </td>
                    </tr>
                    <?php
                }
            }
            ?>
            </tbody>
        </table>
    </div>
</div>