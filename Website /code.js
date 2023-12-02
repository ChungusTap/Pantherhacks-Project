function editFunction() {
    // Get all list items
    var listItems = document.getElementById("textList").getElementsByTagName("li");

    // Iterate through each list item
    for (var i = 0; i < listItems.length; i++) {
        // Prompt the user to edit the item
        var newText = prompt("Edit item:", listItems[i].textContent);

        // If the user entered a new text and it's not empty, update the list item
        if (newText !== null && newText.trim() !== "") {
            listItems[i].textContent = newText;
        }
    }
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

