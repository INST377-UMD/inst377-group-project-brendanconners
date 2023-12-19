function getForecast() {
    var choice = "fnd"
    var idx = document.getElementById("dayChoice").value

    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log("INSIDE FETCH")
        console.log(res)
        //date is out of order (ooo) - returned as YYYYMMDD
        oooDate = res.weatherForecast[idx].forecastDate; //out of order date
        //fix date to MM/DD/YYYY
        date = "" + oooDate.charAt(4) + oooDate.charAt(5) + "/" + oooDate.charAt(6) + oooDate.charAt(7) + "/" + oooDate.substring(0,4)
        //fill in fields for "description" in dailyForecast HTML file
        //date and summary
        document.getElementById('forecast').innerHTML = "Forecast for " + res.weatherForecast[idx].week 
        + "(" + date+ "): "  + res.weatherForecast[idx].forecastWeather;
        //high temp converted to Fahrenheit
        var highInF = ((res.weatherForecast[idx].forecastMaxtemp.value * 9) / 5) + 32;
        document.getElementById('highTemp').innerHTML = res.weatherForecast[idx].week + "'s high: " + highInF + " ºF";
        //low temp converted to Fahrenheit
        var lowInF = ((res.weatherForecast[idx].forecastMintemp.value * 9) / 5) + 32;
        document.getElementById('lowTemp').innerHTML = res.weatherForecast[idx].week + "'s low: " + lowInF + " ºF";
        //probability of significant raingfall (PSR)
        document.getElementById('psr').innerHTML = res.weatherForecast[idx].week + "'s chance of rain: " + res.weatherForecast[idx].PSR;
        //make the forecast appear after the user submits the day they want to see
        document.getElementById('description').style.display = "block";
    });
}
function createForm() {
    var choice = "fnd"
    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log("INSIDE FETCH")
        console.log(res)
        console.log(res.weatherForecast.length)
        for(idx = 0; idx < res.weatherForecast.length; idx ++) {
            //date is out of order (ooo) - returned as YYYYMMDD
            var oooDate = res.weatherForecast[idx].forecastDate; //out of order date
            //fix date to MM/DD/YYYY
            var date = "" + oooDate.charAt(4) + oooDate.charAt(5) + "/" + oooDate.charAt(6) + oooDate.charAt(7)
            var option = document.createElement("option");
            option.text = res.weatherForecast[idx].week + " (" + date + ")";
            option.value = idx;
            document.getElementById("dayChoice").add(option);
        }
    });
}
function loadGeneralInfo() {
    var choice = "flw"

    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log("TEST")
        console.log(res)
        document.getElementById("forecastPeriod").innerHTML = res.forecastPeriod + ":";
        document.getElementById("generalSituation").innerHTML = res.generalSituation;
        document.getElementById("forecastDescription").innerHTML = res.forecastDesc;
        document.getElementById("outlookHeader").innerHTML = "Outlook for the remainder of the week:";
        document.getElementById("outlook").innerHTML = res.outlook;
        var oooDateTime = res.updateTime;
        //13 hours ahead
        // MAY NEED TO FIX INDEXES TO AVOID HARD CODE
        // use indexOf('T') ----> their date/time format has time following "T" everytime
        // with this index, create a substring relative to that position
        // (current implementation works for now)
        var time = oooDateTime.substring(11,19)
        date = "" + oooDateTime.substring(5,7) + "/" + oooDateTime.substring(8,10) + ", " + time + " (EST + 13)"
        document.getElementById("updateTime").innerHTML = "Last updated: " + date;
    });
}
function warningInfo() {
    var choice = "warningInfo"

    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log("TEST")
        console.log(res)
        
        toStr = JSON.stringify(res);
        console.log("leng:" + toStr.length)
        if("display" in res) { // if display exists in the response, emergency messages exist and must be shown
            for(dIdx = 0; dIdx < res.length; dIdx++) {
                var option = document.createElement("option");
                option.text = res.details[dIdx].contents[0];
                option.value = dIdx;
                document.getElementById("emergencyBox").appendChild(option);      
            }
            document.getElementById("emergencyBox").style.display = "block";
        } 
    });
}



