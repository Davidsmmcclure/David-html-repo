<!DOCTYPE html>
<html>
<body>

<h1>Functions</h1>

<p>This function will perform a calculation and display the ans:</p>

<p id="multiply"></p>

<script>
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("multiply").innerHTML = myFunction(10, 20);
</script>

</body>
</html>