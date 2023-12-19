const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://nssweipcvygjbeujzemi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zc3dlaXBjdnlnamJldWp6ZW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5Mzc2MzksImV4cCI6MjAxODUxMzYzOX0.R0PWCWFaCSqIWkD8WJF9sYIo60cRNSgQ3mOuJoUC638'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/tempForm.html', { root: __dirname })
})

app.get('/reporters', async (req, res) => {
    console.log(`Getting Earthquake Reports`)

    const {data, error} = await supabase
    .from('Reported Earthquakes')
    .select();

    if(error) {
        console.log(error)
    } else if(data) {
        res.send(data)
    }

    res.statusCode = 400;
    res.header('Content-type', 'application/json')

    var errorJson = {
        "message": `Bleh Bleh`
    }
    res.send(JSON.stringify({"message": "Bad API"}));
    return;

})

app.post('/reporters', async (req, res) => {
    console.log('Reporting Earthquake')

    var name = req.body.name;
    var timeStamp = req.body.timeStamp;
    var discrict = req.body.discrict;
    var description = req.body.description;
    var magNum = req.body.magNum;

    console.log("indexDescription: " + description);

    const {data, error} =  await supabase
        .from('Reported Earthquakes')
        .insert([
            {'report_LastName': name, 
            'report_District': timeStamp, 
            'report_TimeStamp': discrict,
            'report_Description': description,
            'magnitude': magNum}
        ])
        .select();

    console.log("NULL ADD: " + data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('Reported!')
})