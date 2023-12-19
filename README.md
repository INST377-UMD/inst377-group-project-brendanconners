# inst377-group-project-brendanconners
# Group 26: Brendan Conners, Daniel Adams, Joan Ojukwu

## Hong Kong Weather Webpage
 
For this project, we decided to create a weather wguide for travelers who want to visit Hong Kong! We also wanted to make people aware of significant weather in the area including earthquakes, tsunami's, severe hurricane's and more.

We have a daily forecast section that gives you a selection of days, gives a brief forecast summary of it, as well as the high and low temperature's, and even the probability of significant rainfall.

We also give general weather information for the day, for something quick and easy, it gives you all of the current events for the day, as well as broad regional weather and a timeline of the weather for the day.

Finally we have a nine day forecast chart, that plots temperature or humidity, so if you want to see the maximum temperature over the nine day period to find some patterns then you are completly capable of doing that.

We created this project to make looking at weather in a very densely populated region easy and fun to use, it is an alterate approach to the traditional weather app, that can be very complciated  and difficult to use.
 
### Target Audience

For this Project, our target audience could be anyone who visits Hong Kong. This could be people who live in Hong Kong who dont like the weather app, or for tourists who dont want to use traditional weather apps, and want a more in depth easy to use system. There is no preference for IOS or android, as they can both use this webpage, it is designed for anyone who wants to not only know the weather, but have an interest with severe weather and are curious about it.
 
# Developer Manual

## Installations and Configurations

### Nvm, npm, nodemon, express, supabase-js

#### Libraries used 
- Chart.JS

#### Nvm commands
1. Open terminal
2. `nvm install node`
3. Check installation with `nvm -v`
   - Note: `nvm install node` should automatically install npm
4. Check installation with `npm -v`

#### Workspace Setup
1. Now that nvm and npm are installed/configured, open the workspace’s `index.js` file.
2. Run `npm init`
   - Package name (curr directory): *hit enter*
   - Version (1.0.0): *hit enter*
   - Description: *dev’s choice*
   - Entry point (index.js): *hit enter*
   - Test command: *hit enter*
   - Git repository: *hit enter*
   - Author: *dev’s name, hit enter*
   - License: ISC *hit enter*
   - Is this OK? (yes) *hit enter*

#### Npm Commands
- `npm install express`
  - This will add a `package-lock.json` and `package.json` files to your current directory. These contain the necessary dependencies to run Express.
- `npm install nodemon`
- `npm install @supabase/supabase-js`
  - Supabase client required field is included in line 3 of `index.js`

#### Final Configuration
1. Once the above installations finish, access the `package.json` file.
2. In this file, add (all excluding brackets) `<"start": "nodemon -e '*'",>` in the scripts section of the file (right below line 6).

## API Docs

In this project, we used two main APIs:

1. **[Chart.Js API](https://www.chartjs.org/docs/latest/)**

   This API enabled us to chart the weather information from the Hong Kong API.

2. **[Hong Kong Severe Weather API](https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf)**

   This API is the source of all the information. Since the API itself is in Mandarin, the linked documentation page provides information on how to call it and use it in English, with examples.

### Hong Kong Severe Weather API Usage Example:

```javascript
var choice = "fnd";
fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    });
// Returns a JSON object with a general outlook of the next few days' forecast. Includes an array of 9 JSON
// objects, with each object containing the date, min temp, max temp, min relative humidity, max relative humidity,
// chance of significant parcipitation, and day of the week.
// used in the createChart() and getForecast() function calls
```
```javascript
var choice = "flw"

    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    });
  // returns a JSON object containing general infomration about fire danger warnings, a forecast description, 
  // the forecast's period, an outlook for the next two days, and a date
  // used in the loadGeneralInfo() function call
```
```javascript
    var choice = "warningInfo"

    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    });
  // Populates the Emergency Box on homepage IF emergency warnings exist inside the returned JSON object
```

### ROAD MAP
When working with all of the API's we knew it was going to get complicated, and so the goal was to create all of the CSS / styling first so then we can all focus on the API. Next the Hong Kong API was different than the ones we have used before. It is unique in the sense that you dont have to add a '/' at the end with the specific data you are trying to get, rather type in a specific code in the 'dataType' part of the URL and they are linked. Next we knew that we were going to have issues all working on the same repository, with all remote local computers, and so it took some trial and error in order to fix that and create seperate branches. When Using this API there are things like the forecast weather Icon, that is supposed to return a icon, but in reality it is only a number that coorespondes to an icon, so we have to get rid of that when trying to use the information itself. You can use this API for future development with other areas surrounding Hong Kong. With more time and more data, future development could add other areas to do the same thing, all thats needed is the data itself.

### USER MANUAL
All pages of the site can be navigated using our universal navigation bar located at the top of each page.
The generalInfo.html, INST377-Week10-PPT.html (aka, homePage), and dailyForecast.html connect to a backend endpoint upon loading, with data fetched from these endpoints automatically. The user does not need to submit data or perform any actions to run these endpoints.
For the nine day forecast chart, simply select the data you want to see on the chart and click plot! This offers a nine day forecast of the max/min temperatures in ºF and max/min relative humidity percentage.
For more specific details regarding the Hong Kong Observatory’s API documentation, please refer to our site’s help page.