# inst377-group-project-brendanconners
# Group 26: Brendan Conners, Daniel Adams, Joan Ojukwu

--------------PROJECT TITLE--------------
 
--------------PROJECT DESCRIPTION--------------
 
--------------TARGET BROWSERS--------------
 
--------------DEV MANUAL--------------
INSTALLATIONS AND CONFIGURATIONS (nvm, npm, nodemon, express, supabase-js)
Libraries used 
Chart.JS
--------------NEED TO ADD CHART.JS LINK TO LINKS PAGE AND MARKDOWN--------------
Nvm commands
  Open terminal
  Nvm install node
  Check installation with nvm -v
  NOTE: nvm install node should automatically install npm
  Check installation with npm -v
Now that nvm and npm are installed/configured the workspace’s index.js file.
  npm init
  Package name (curr directory): *hit enter*
  Version: (1.0.0): *hit enter*
  Description: *dev’s choice*
  Entry point: (index.js) *hit enter*  
  Test command: *hit enter*
  Git repository: *hit enter*
  Author: *dev’s name, hit enter*
  License: ISC *hit enter*
  Is this OK? (yes) *hit enter* 	
Npm install express
  This will add a package-lock.json and package.json files to your current directory. These contain the necessary dependencies to run Express.
Npm install nodemon
Npm install @supabase/supabase-js
  Supabase client required field is included in line 3 of index.js
Once above installation finishes, access the package.json file
  In this file, add (all excluding brackets) <”start”: “nodemon -e ‘*’”,> In the scripts section of the file (right below line 6).
--------------API DOCS--------------
(FOR EACH API ENDPOINT WE USED) Just discuss the API urls we used
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
Add some BS
USER MANUAL
Should just be about using our site
All pages of the site can be navigated using our universal navigation bar located at the top of each page.
Essentially everything is automated to load for the user upon navigating to the specific page.
For the nine day forecast chart, simply select the data you want to see on the chart and click plot!
For more specific details regarding the Hong Kong Observatory’s API documentation, please refer to our site’s help page










