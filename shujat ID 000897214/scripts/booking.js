/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let days = [0,0,0,0,0], rate = 35;


        var mon = document.getElementById("monday");
		var tue = document.getElementById("tuesday");
		var wed = document.getElementById("wednesday");
		var thu = document.getElementById("thursday");
		var fri = document.getElementById("friday");
		

		var full = document.getElementById("full");
		var half = document.getElementById("half");
		var calculatedCost = document.getElementById("calculated-cost");
		var clearBtn = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.addEventListener("click", () => {
    if(days[0] != 1) {
        days[0] = 1;
    }
    calculate(days);
    mon.classList.add("clicked");
})


tue.addEventListener("click", () => {
    if(days[1] != 1) {
        days[1] = 1;
    }
    calculate(days);
    tue.classList.add("clicked");
})


wed.addEventListener("click", () => {
    if(days[2] != 1) {
        days[2] = 1;
    }
    calculate(days);
    wed.classList.add("clicked");
})


thu.addEventListener("click", () => {
    if(days[3] != 1) {
        days[3] = 1;
    }
    calculate(days);
    thu.classList.add("clicked");
})


fri.addEventListener("click", () => {
    if(days[4] != 1) {
        days[4] = 1;
    }
    calculate(days);
    fri.classList.add("clicked");
})




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


clearBtn.addEventListener("click", () => {
			for(var i=0; i<days.length; i++) {
				days[i] = 0;
			}
			calculatedCost.innerHTML = 0;
			mon.classList.remove("clicked");
			tue.classList.remove("clicked");
			wed.classList.remove("clicked");
			thu.classList.remove("clicked");
			fri.classList.remove("clicked");
		})



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", () => {
    var daysSelected = 0, totalCost = 0;
    rate = 20;


    for(let i=0; i<days.length; i++) {
        if(days[i] != 0) {
            daysSelected += 1;
        }
    }
    totalCost = daysSelected * rate;
    calculatedCost.innerHTML = totalCost;
    half.classList.add("clicked");
    full.classList.remove("clicked");
})



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", () => {
    var daysSelected = 0, totalCost = 0;
    rate = 35;
    for(let i=0; i<days.length; i++) {
        if(days[i] != 0) {
            daysSelected += 1;
        }
    }
    totalCost = daysSelected * rate;
    calculatedCost.innerHTML = totalCost;
    full.classList.add("clicked");
    half.classList.remove("clicked");
})




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(days) {
    let daysSelected = 0;
    for(let i=0; i<days.length; i++) {
        if(days[i] != 0) {
            daysSelected += 1;
        }
    }
    let totalCost = daysSelected * rate;
    calculatedCost.innerHTML = totalCost;
}

