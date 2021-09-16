var currentDaily = document.getElementsByClassName("current-daily"),
    lastDaily = document.getElementsByClassName("last-daily"),
    currentWeekly = document.getElementsByClassName("current-weekly"),
    lastWeekly = document.getElementsByClassName("last-weekly"),
    currentMonthly = document.getElementsByClassName("current-monthly"),
    lastMonthly = document.getElementsByClassName("last-monthly");


function dailyDisplay() {
    
    for(let i = 0; i < currentDaily.length; i++) {
    currentDaily[i].style.display = "block";
    lastDaily[i].style.display = "block";


    currentWeekly[i].style.display = "none";
    lastWeekly[i].style.display = "none";
    currentMonthly[i].style.display = "none";
    lastMonthly[i].style.display = "none";
    }
}

function weeklyDisplay() {

    for(let i = 0; i < currentDaily.length; i++) {
    currentWeekly[i].style.display = "block";
    lastWeekly[i].style.display = "block";

    currentDaily[i].style.display = "none";
    lastDaily[i].style.display = "none";
    currentMonthly[i].style.display = "none";
    lastMonthly[i].style.display = "none";
    }
}

function monthlyDisplay() {
    for(let i = 0; i < currentDaily.length; i++) {
    currentMonthly[i].style.display = "block";
    lastMonthly[i].style.display = "block";

    currentDaily[i].style.display = "none";
    lastDaily[i].style.display = "none";
    currentWeekly[i].style.display = "none";
    lastWeekly[i].style.display = "none";
    }
}


    
    




