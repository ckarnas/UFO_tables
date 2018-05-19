// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#Date");
var $shapeInput = document.querySelector("#Shape");
var $searchDBtn = document.querySelector("#searchD");
var $searchSBtn = document.querySelector("#searchS");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchDBtn.addEventListener("click", handleSearchDButtonClick);
$searchSBtn.addEventListener("click", handleSearchSButtonClick);

// Set filteredEvents to data initially
var filteredEvents = dataSet;

// renderTable renders the filteredEvents to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredEvents.length; i++) {
    // Get get the current address object and its fields
    var ufo_event = filteredEvents[i];
    var fields = Object.keys(ufo_event);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufo_event object, create a new cell at set its inner text to be the current value at the current ufo_event's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo_event[field];
    }
  }
}
var filterShape = "Shape";
var filterDate="Date";

function handleSearchDButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  //var filterShape = $shapeInput.value.trim().toLowerCase();
  filterDate = $dateInput.value.trim().toLowerCase();
  if (filterShape==="Shape"){
  // Set filteredEvents to an array of all Events whose "state" matches the filter
  filteredEvents = dataSet.filter(function(ufo_event) {
    var user_date = ufo_event.datetime.toLowerCase();

    // If true, add the address to the filteredEvents, otherwise don't add it to filteredEvents
    return user_date === filterDate;
  });
  }
  else {
    filteredEvents = dataSet.filter(function(ufo_event) {
      var user_date = ufo_event.datetime.toLowerCase();
      var user_shape = ufo_event.shape.toLowerCase();
  
      // If true, add the address to the filteredEvents, otherwise don't add it to filteredEvents
      return ((user_shape === filterShape) & (user_date === filterDate)) ;
  
    });   
  }
  renderTable();
  
}

function handleSearchSButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  filterShape = $shapeInput.value.trim().toLowerCase();
  //var filterDate = $dateInput.value.trim().toLowerCase();
  if (filterDate==="Date"){
  // Set filteredEvents to an array of all Events whose "state" matches the filter
  filteredEvents = dataSet.filter(function(ufo_event) {
    var user_shape = ufo_event.shape.toLowerCase();

    // If true, add the address to the filteredEvents, otherwise don't add it to filteredEvents
    return user_shape === filterShape;
  });
  }
  else {
    filteredEvents = dataSet.filter(function(ufo_event) {
      var user_date = ufo_event.datetime.toLowerCase();
      var user_shape = ufo_event.shape.toLowerCase();
  
      // If true, add the address to the filteredEvents, otherwise don't add it to filteredEvents
      return ((user_shape === filterShape) & (user_date === filterDate)) ;
  
    });   
  }
  renderTable();
  

}

// Render the table for the first time on page load
renderTable();
