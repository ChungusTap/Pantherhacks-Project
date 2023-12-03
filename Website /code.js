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

      }

function addTextToList() {
    // Get the input value
    var dateInput = prompt("Enter the date (e.g., MM/DD/YYYY):");
    
    
    // Validate the date format (you may want to implement more robust validation)
    if (!isValidDateFormat(dateInput)) {
        alert("Invalid date format. Please enter a date in the format MM/DD/YYYY.");
        return;
    }
    var inputValue = document.getElementById("textInput").value;
    
    // If the input is not empty, add it to the list
    if (inputValue.trim() !== "") {
        // Create a new list item
        var checklist = document.getElementById("textList");
        var listItem = document.createElement("li");
        
        // Set the text content of the list item
        listItem.textContent = inputValue + ":" + dateInput;
        
        // Add click event listener to toggle completion
        listItem.addEventListener("click", function() {
            toggleItem(Array.from(checklist.children).indexOf(listItem));
        });

        // Append the list item to the ul element
        checklist.appendChild(listItem);
        
        // Clear the input field
        document.getElementById("textInput").value = "";
    }

    function isValidDateFormat(dateString) {
        var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        return regex.test(dateString);
    }

    }
    
    function sortList() {
        var checklist = document.getElementById("textList");
        var listItems = Array.from(checklist.children);
    
        // Sort the list items based on date (MM/DD/YYYY format)
        listItems.sort(function (a, b) {
            var dateA = new Date(a.textContent.split(":")[1].trim());
            var dateB = new Date(b.textContent.split(":")[1].trim());
            return dateA - dateB;
        });
    
        // Clear the current list
        checklist.innerHTML = "";
    
        // Append the sorted list items back to the checklist
        listItems.forEach(function (item) {
            checklist.appendChild(item);
        });
    }
    
    function reverseList() {
        var checklist = document.getElementById("textList");
        var listItems = Array.from(checklist.children);
    
        // Sort the list items in descending order based on date (MM/DD/YYYY format)
        listItems.sort(function (a, b) {
            var dateA = new Date(a.textContent.split(":")[1].trim());
            var dateB = new Date(b.textContent.split(":")[1].trim());
            return dateB - dateA;
        });
    
        // Clear the current list
        checklist.innerHTML = "";
    
        // Append the sorted list items back to the checklist
        listItems.forEach(function (item) {
            checklist.appendChild(item);
        });
    }
    function setReminder() {
        const reminderDateTime = document.getElementById('reminder').value;
        const reminderDate = new Date(reminderDateTime);
        const currentDate = new Date();
        const timeDifference = reminderDate - currentDate;
  
        if (timeDifference > 0) {
          // Set a timeout to trigger the reminder
          setTimeout(() => {
            showNotification('Reminder', 'Time to do something!');
          }, timeDifference);
          
          alert('Reminder set successfully!');
        } else {
          alert('Please select a future date and time for the reminder.');
        }
      }
  
      function showNotification(title, body) {
        // Check if the Notification API is supported
        if ('Notification' in window) {
          // Request permission to show notifications
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              // Create a notification
              new Notification(title, { body });
            }
          });
        }
      }
