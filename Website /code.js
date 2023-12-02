function my_function(){
    print ('Hello')
}
function clearTextList() {
    // Clear all the list items
    var textList = document.getElementById("textList");
    textList.innerHTML = "";
}

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
function toggleItem(index) {
    var listVar = document.getElementById("textList").children[index];
    listVar.classList.toggle("completed");

    console.log("jay is gay");
  }

function addTextToList() {
    // Get the input value
    var inputValue = document.getElementById("textInput").value;

    // If the input is not empty, add it to the list
    if (inputValue.trim() !== "") {
        // Create a new list item
        var checklist = document.getElementById("textList");
        var listItem = document.createElement("li");

        // Set the text content of the list item
        listItem.textContent = inputValue;

        // Add click event listener to toggle completion
        listItem.addEventListener("click", function() {
            toggleItem(Array.from(checklist.children).indexOf(listItem));
        });

        // Append the list item to the ul element
        checklist.appendChild(listItem);

        // Clear the input field
        document.getElementById("textInput").value = "";
    }
    
}
