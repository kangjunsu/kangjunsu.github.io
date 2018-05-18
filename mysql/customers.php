<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width", initial-scale=1.0">
    <meta http-equiv="X-UA-compatible" content="ie=edge">
    <title>Customers</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>

<div id="main">
    <?php
    
    if($_POST) {
        //WE WILL WRITE OUR cod here
        //To process the POST data....
    var_dump($_POST);
    }
    ?>


    <h1>Customers</h1>
    <form method="POST"/>
    Last name: <br/>
    <input type="text" name=""/><br/>
    First Name: <br/>
    <input type="text" name=""/><br/>
    Birthdate: <br/>
    <input type="date" name="bdat"/><br/>
    <button type="submit">Save</button>
</form>
</div>

</body>
</html>