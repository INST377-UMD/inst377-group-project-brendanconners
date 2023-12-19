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
 In this Project we used two main API's we used: 
[Chart.Js API](https://www.chartjs.org/docs/latest/)
This API enabled us to be able to chart the weather information from the Hong Kong API.
[Hong Kong Severe Weather API](https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf)
This API is where we got all of our information from, since the API itself is in Mandarin, I linked the documentation page where you can see how to call it and use it in english, with examples of it

1.) var choice = "fnd"
    fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${choice}&lang=en`) 
res = {
  "generalSituation": string,
  "seaTemp": [
      {"place": string},
      {"recordTime": date},
      {"unit": string, value: int}
  ],
  "soilTemp": [
      {"0": []}.
      
  ]  
    
};
----------------------------
JSON object returned, what fields, what type is everything (int, string, array, etc.)
 TESTING- we testing on a trial by error basis using console.log(). Key console.log() instances were kept for developers to understand the code at first glance.
ROAD MAP- 

USER MANUAL
Should just be about using our site
All pages of the site can be navigated using our universal navigation bar located at the top of each page.
Essentially everything is automated to load for the user upon navigating to the specific page.
For the nine day forecast chart, simply select the data you want to see on the chart and click plot!
For more specific details regarding the Hong Kong Observatory’s API documentation, please refer to our site’s help page










