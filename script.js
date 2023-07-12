// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  $('.saveBtn').on('click', function() {
    console.log('buttonClicked');
    let textArea = $(this).siblings(".desc").val();
    let hours = $(this).parent().attr("id");
    localStorage.setItem(hours, textArea);
    console.log(hours);
  });

  function loadStorage() {
    const desc9 = localStorage.getItem('hour-9');
    document.querySelector('.description9').value = desc9;
    const desc10 = localStorage.getItem('hour-10');
    document.querySelector('.description10').value = desc10;
    const desc11 = localStorage.getItem('hour-11');
    document.querySelector('.description11').value = desc11;
    const desc12 = localStorage.getItem('hour-12');
    document.querySelector('.description12').value = desc12;
    const desc1 = localStorage.getItem('hour-1');
    document.querySelector('.description1').value = desc1;
    const desc2 = localStorage.getItem('hour-2');
    document.querySelector('.description2').value = desc2;
    const desc3 = localStorage.getItem('hour-3');
    document.querySelector('.description3').value = desc3;
    const desc4 = localStorage.getItem('hour-4');
    document.querySelector('.description4').value = desc4;
    const desc5 = localStorage.getItem('hour-5');
    document.querySelector('.description5').value = desc5;
  }

  loadStorage();

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// hour9.setAttribute("class", "row time-block past");
// hour9.setAttribute("class", "row time-block present");
// hour9.setAttribute("class", "row time-block future");

var currentTime = dayjs().format('H');
console.log(currentTime);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.

const today = dayjs().format('dddd, MMMM, D');
$('#currentDay').text(today);
  

});
