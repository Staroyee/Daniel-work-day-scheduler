// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//This function contains the required JQuery to make the page operational.
$(function () {

// A listener for click events on the Clear Calendar button.
// This function clears the local storage and reloads the page.  
  $('#clear').on('click', function() {
    console.log('localStorage Cleared');
    localStorage.clear();
    window.location.reload();
  });

// A listener for click events on the save button.
// This function saves the user input on click and sets the item into local storage.
  $('.saveBtn').on('click', function() {
    console.log('buttonClicked');
    let textArea = $(this).siblings(".desc").val();
    let hours = $(this).parent().attr("id");
    localStorage.setItem(hours, textArea);
    console.log(hours);
  });

  // Function to apply the past, present, or future class to each time block
function pastPresentFuture() {
var currentTime = dayjs().format('H');
console.log(currentTime)

if (currentTime == 9) {
  $("#hour-9").removeClass("past");
  $("#hour-9").removeClass("future");
  $("#hour-9").addClass("present");
} else if (currentTime < 9) {
  $("#hour-9").removeClass("present");
  $("#hour-9").removeClass("past");
  $("#hour-9").addClass("future");
} else if (currentTime > 9) {
  $("#hour-9").removeClass("present");
  $("#hour-9").removeClass("future");
  $("#hour-9").addClass("past");
}

if (currentTime == 10) {
  $("#hour-10").removeClass("past");
  $("#hour-10").removeClass("future");
  $("#hour-10").addClass("present");
} else if (currentTime < 10) {
  $("#hour-10").removeClass("present");
  $("#hour-10").removeClass("past");
  $("#hour-10").addClass("future");
} else if (currentTime > 10) {
  $("#hour-10").removeClass("present");
  $("#hour-10").removeClass("future");
  $("#hour-10").addClass("past");
}

if (currentTime == 11) {
  $("#hour-11").removeClass("past");
  $("#hour-11").removeClass("future");
  $("#hour-11").addClass("present");
} else if (currentTime < 11) {
  $("#hour-11").removeClass("present");
  $("#hour-11").removeClass("past");
  $("#hour-11").addClass("future");
} else if (currentTime > 11) {
  $("#hour-11").removeClass("present");
  $("#hour-11").removeClass("future");
  $("#hour-11").addClass("past");
}

if (currentTime == 12) {
  $("#hour-12").removeClass("past");
  $("#hour-12").removeClass("future");
  $("#hour-12").addClass("present");
} else if (currentTime < 12) {
  $("#hour-12").removeClass("present");
  $("#hour-12").removeClass("past");
  $("#hour-12").addClass("future");
} else if (currentTime > 12) {
  $("#hour-12").removeClass("present");
  $("#hour-12").removeClass("future");
  $("#hour-12").addClass("past");
}

if (currentTime == 13) {
  $("#hour-1").removeClass("past");
  $("#hour-1").removeClass("future");
  $("#hour-1").addClass("present");
} else if (currentTime < 13) {
  $("#hour-1").removeClass("present");
  $("#hour-1").removeClass("past");
  $("#hour-1").addClass("future");
} else if (currentTime > 13) {
  $("#hour-1").removeClass("present");
  $("#hour-1").removeClass("future");
  $("#hour-1").addClass("past");
}

if (currentTime == 14) {
  $("#hour-2").removeClass("past");
  $("#hour-2").removeClass("future");
  $("#hour-2").addClass("present");
} else if (currentTime < 14) {
  $("#hour-2").removeClass("present");
  $("#hour-2").removeClass("past");
  $("#hour-2").addClass("future");
} else if (currentTime > 14) {
  $("#hour-2").removeClass("present");
  $("#hour-2").removeClass("future");
  $("#hour-2").addClass("past");
}

if (currentTime == 15) {
  $("#hour-3").removeClass("past");
  $("#hour-3").removeClass("future");
  $("#hour-3").addClass("present");
} else if (currentTime < 15) {
  $("#hour-3").removeClass("present");
  $("#hour-3").removeClass("past");
  $("#hour-3").addClass("future");
} else if (currentTime > 15) {
  $("#hour-3").removeClass("present");
  $("#hour-3").removeClass("future");
  $("#hour-3").addClass("past");
}

if (currentTime == 16) {
  $("#hour-4").removeClass("past");
  $("#hour-4").removeClass("future");
  $("#hour-4").addClass("present");
} else if (currentTime < 16) {
  $("#hour-4").removeClass("present");
  $("#hour-4").removeClass("past");
  $("#hour-4").addClass("future");
} else if (currentTime > 16) {
  $("#hour-4").removeClass("present");
  $("#hour-4").removeClass("future");
  $("#hour-4").addClass("past");
}

if (currentTime == 17) {
  $("#hour-5").removeClass("past");
  $("#hour-5").removeClass("future");
  $("#hour-5").addClass("present");
} else if (currentTime < 17) {
  $("#hour-5").removeClass("present");
  $("#hour-5").removeClass("past");
  $("#hour-5").addClass("future");
} else if (currentTime > 17) {
  $("#hour-5").removeClass("present");
  $("#hour-5").removeClass("future");
  $("#hour-5").addClass("past");
}
}
// Calls the pastPresentFuture function.
pastPresentFuture()

// Function to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
function loadStorage() {
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  }
//Calls the loadStorage function.
loadStorage();

// Code to display the current date in the header of the page.
const today = dayjs().format('dddd, MMMM, D');
$('#currentDay').text(today);
  
});
