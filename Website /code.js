function myfunction(){
    var change = document.getElementById("textList")
    
}
function showListValue() {
    var listVal = document.getElementById("listValue").value;
    alert("Entered item: " + listVal);
    document.getElementById("output").innerHTML = listVal;
  }
  function addTextToList() {
    // Get the input value
    var inputValue = document.getElementById("textInput").value;

    // If the input is not empty, add it to the list
    if (inputValue.trim() !== "") {
        // Create a new list item
        var listItem = document.createElement("li");

        // Set the text content of the list item
        listItem.textContent = inputValue;

        // Append the list item to the ul element
        document.getElementById("textList").appendChild(listItem);
        // Clear the input field
        document.getElementById("textInput").value = "";

    }
    
}