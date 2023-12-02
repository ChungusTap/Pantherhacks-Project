function myfunction(){
    document.getElementById("button").innerHTML = "Welcome";
    alert('Button Clicked')
}
function showListValue() {
    var listVal = document.getElementById("listValue").value;
    alert("Entered item: " + listVal);
    document.getElementById("output").innerHTML = listVal;
  }