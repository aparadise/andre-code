
<!doctype html>
<html lang="en">
	<title>Untitled</title>
</head>

<body>

<?php
    mysql_connect('localhost','root','') or die(mysql_error());
    mysql_select_db('dre') or die(mysql_error());
    echo 'success yes<br/><br/>'
 ?>


<?php
    $query=mysql_query("select * FROM contacts");
    
    //$rows=mysql_fetch_array($query);
    
    while($rows=mysql_fetch_array($query)){
        echo  $rows['id']." ".$rows['fname']." ".$rows['lname']." ".$rows['phone'];
        echo '<br/>';
    }
 ?>
 
 <hr/>
shows me all the matching last names that are "kim"
<br>
 <?php
    $query=mysql_query("select lname FROM contacts WHERE lname='kim' ");
    
    while($rows=mysql_fetch_array($query)){
        echo $rows['lname'];
        echo '<br/>';
    }
 ?>
 <hr/>
 
 <?php

$query = "SELECT lname, COUNT(phone) FROM contacts GROUP BY lname"; 
	 
$result = mysql_query($query) or die(mysql_error());

// Print out result
while($row = mysql_fetch_array($result)){
	echo "There are <b>". $row['COUNT(phone)'] ."</b>&nbsp; person named: <b>". $row['lname'] ."</b> in the lname column.";
	echo "<br />";
}
?>
 
 
 <hr/>
 this tells me the total amount of rows in the table
 <br>
 <?php
    //this tells me the total amount of rows in the table
    $query = "SELECT COUNT(*) AS total FROM contacts"; 
    $result = mysql_query($query); 
    $values = mysql_fetch_assoc($result); 
    $num_rows = $values['total']; 
    echo $num_rows;
?>

 <hr/>
Counting number of "first names" students in the "contact" table
<br>
<?php
	// Counting number of "first names" students in the "contact" table
    $query = "SELECT COUNT(fname) FROM contacts ";
    $result = @mysql_query($query);
        while($row = @mysql_fetch_array($result)){
            echo "There are <b>". $row['COUNT(fname)']. " </b>Students in the Database";
        }
?>
 
 <hr/>
Counting the total number of matching names. In this example I wanted to know how many last name "kim" are in the "contact" table
<br>
<?php
	/// Counting number of "first names" students in the "contact" table
	$query = "SELECT COUNT(*) FROM contacts WHERE lname='kim' ";
	$result = @mysql_query($query);
	while($row = @mysql_fetch_array($result)){
	    echo "There are <b>". $row['COUNT(*)']. " </b> Students with this same last name in the Database";
    }
?>

</body>
</html>
