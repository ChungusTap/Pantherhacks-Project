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
    // Get the input and reminder date values
    var inputValue = document.getElementById("textInput").value;
    var dateInput = document.getElementById('reminder').value;

    // Validate the date format (you may want to implement more robust validation)
    if (!isValidDateFormat(dateInput)) {
        alert("Invalid date format. Please enter a date in the format MM/DD/YYYY.");
        return;
    }

    // If the input is not empty, add it to the sorted list
    if (inputValue.trim() !== "") {
        // Create a new list item
        var checklist = document.getElementById("textList");
        var listItem = document.createElement("li");

        // Set the text content of the list item
        listItem.textContent = inputValue + ": " + dateInput;

        // Add click event listener to toggle completion
        listItem.addEventListener("click", function () {
            toggleItem(Array.from(checklist.children).indexOf(listItem));
        });

        // Append the list item to the ul element
        checklist.appendChild(listItem);

        // Display the reminder date in the displayer
        displayReminderDate(dateInput);

        // Set the reminder for the new item
        setReminder(dateInput);

        // Clear the input field
        document.getElementById("textInput").value = "";
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
<<<<<<< Updated upstream
    
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
    function setReminder(reminderDate) {
        const reminderDateTime = reminderDate + " 00:00:00"; // Assuming reminder time is midnight
        const reminderDateObject = new Date(reminderDateTime);
        const currentDate = new Date();
        const timeDifference = reminderDateObject - currentDate;

        if (timeDifference > 0) {
            // Format the reminder date as MM/DD/YYYY
            const formattedReminderDate = reminderDateObject.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });

            // Set a timeout to trigger the reminder
            setTimeout(() => {
                showNotification('Reminder', `Time to do something on ${formattedReminderDate}!`);
            }, timeDifference);
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
=======
    function setReminder() {
        // Get the values from the input boxes
        var reminderText = document.getElementById('reminderInput').value;
        var reminderDate = document.getElementById('reminderDate').value;

        // Check if the input is not empty
        if (reminderText.trim() !== '' && reminderDate.trim() !== '') {
            // Set a timeout to display an alert with the reminder and date after a certain time (in milliseconds)
            var timeoutDuration = 5000; // 5000 milliseconds = 5 seconds
            setTimeout(function() {
                alert('Reminder: ' + reminderText + '\nDate: ' + reminderDate);
            }, timeoutDuration);
        } else {
            alert('Please enter both reminder and date.');
        }
    }

    function editReminder() {
       
    }
>>>>>>> Stashed changes
