/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// initialize the variables when the page is loaded

/*jshint esversion: 6 */

var costPerDay = 50;
var selectedDays = ["monday","tuesday","wednesday","thursday","friday"];
var updateTotalCost = 0;

function updateSelection(day) {
  if (selectedDays.includes(day)) {
    
    var index = selectedDays.indexOf(day);
    selectedDays.splice(index, 1);
  } else {

    selectedDays.push(day);
  }

  var totalCost = costPerDay * selectedDays.length;

  document.getElementById("total-cost").innerHTML = totalCost;
}




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButton = document.querySelectorAll("monday","tuesday","wednesday","thursday","friday");

let dayCounter = 0;

dayButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      dayCounter++;
    } else {
      button.classList.remove("clicked");
            dayCounter--;
    }
    updateTotalCost(dayCounter);
  });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById('clear-button').addEventListener('click', function() {
    var days = document.getElementsByClassName('day');
  for (var i = 0; i < days.length; i++) {
    days[i].classList.remove('clicked');
  }
  document.getElementById('calculated-cost').innerHTML = '0';
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let dailyRate = 35;

const halfDayElement = document.getElementById('half');
const fullDayElement = document.getElementById('full');
const calculatedCost = document.getElementById('calculated-Cost');

halfDayElement.addEventListener('click', () => {
  dailyRate = 20;
  document.getElementById('half').classList.add(clicked);
  document.getElementByyId('full').classList.remove(clicked);
  calculateTotalCostCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayElement.addEventListener('click', () => {
  dailyRate = 35;
  document.getElementById('full').classList.add(clicked);
  document.getElementById('half').classList.remove(clicked);
  calculateTotalCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  var totalCost = costPerDay * selectedDays.length;
  document.getElementById('total-cost').innerHTML = totalCost;
}
let totalCost = calculateTotalCost(dailyRate);
calculatedCostEl.innerHTML =totalCost;