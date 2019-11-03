<?php
$q=$_GET["q"];
$conn=mysqli_connect("localhost:3306","root","");
if(!$conn)
{
echo "connection failed";
}

$rr=mysqli_select_db($conn,"employee");

$query="select * from emptab where ID='".$q."'";

$result=mysqli_query($conn,$query);

echo"<table><th>Name</th><th>Company</th>";

while($row=mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>".$row['name']."</td>";
echo "<td>".$row['company']."</td>";
echo "</tr>";
}

echo "</table>";
mysqli_close($conn);

?>