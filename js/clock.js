var userName = prompt("İsminiz:")
var nameInfo = document.querySelector("#myName")
var c = document.getElementById("myClock")
var y = document.getElementById("myDate")
nameInfo.innerHTML = userName

function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    c.innerText = currentTimeString;
    var x = setTimeout(function(){ updateClock() }, 1000); 
}
function updateDay(){
    var currentDate = new Date()
    var currentDay = currentDate.getDate()
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear()
    switch(currentMonth){
        case 0:
            currentMonth= "Ocak"
        break;
        case 1:
            currentMonth= "Şubat"
        break;
        case 2:
            currentMonth= "Mart"
        break;
        case 3:
            currentMonth= "Nisan"
        break;
        case 4:
            currentMonth= "Mayıs"
        break;
        case 5:
            currentMonth= "Haziran"
        break;
        case 6:
            currentMonth= "Temmuz"
        break;
        case 7:
            currentMonth= "Ağustos"
        break;
        case 8:
            currentMonth= "Eylül"
        break;
        case 9:
            currentMonth= "Ekim"
        break;
        case 10:
            currentMonth= "Kasım"
        break;
        case 11:
            currentMonth= "Aralık"
        break;
        }
        currentDateString = currentDay + " " + currentMonth + " " + currentYear
        y.innerText = currentDateString
        var z = setTimeout(function(){ updateDay() }, 1000); 
}
updateClock();
updateDay();