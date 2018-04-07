<?php

##########################################################################
$password = "admin";  // Modify Password to suit for access, Max 10 Char.
##########################################################################
?>
<!doctype html>
<html lang="en">
<head>
  <title>Simple Password Protect - PHP PasswordProtect</title>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <style type="text/css">

  P { FONT-SIZE: 8pt; COLOR: #000000; FONT-FAMILY: Verdana, Tahoma, Arial}
  TD { FONT-SIZE: 8pt; COLOR: #000000; FONT-FAMILY: Verdana, Tahoma, Arial}

  </style>
</head>
<body>

<?php 
  print "<h2 align=\"center\">PHP Simple Password Protect</h2>";
// If password is valid let the user get access
if (isset($_POST["password"]) && ($_POST["password"]=="$password")) {
?>
<!-- START OF HIDDEN HTML - PLACE YOUR CONTENT HERE -->

  <p align="center"><br><br><br>
  <b>Congratulations - Andre</b><br>you have gained access to the Protected and Secret Area!</p>

<!-- END OF HIDDEN HTML -->
<?php 
}
else
{
// Wrong password or no password entered display this message
if (isset($_POST['password']) || $password == "") {
  print "<p align=\"center\"><font color=\"red\"><b>Incorrect Password</b><br>Please enter the correct password</font></p>";}
  print "<form method=\"post\"><p align=\"center\">Please enter your password for access<br>";
  print "<input name=\"password\" type=\"password\" size=\"25\" maxlength=\"10\"><input value=\"Login\" type=\"submit\"></p></form>";
}
  print "<br><br><p align=\"center\">Written by <a href=\"http://www.theperfectafro.com\webportfolio\">Andre Paradise J.</a></p>";
?>
<BR>
</body>
</html>
