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
    res.sendFile('tempForm.html', { root: __dirname })
})

app.get('/reporters', (req, res) => {
    console.log(`Getting Earthquake Reports`)

    const {data, error} = supabase
    .from('Customer')
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

app.post('/',  (req, res) => {
    console.log('Reporting Earthquake')

    // var firstName = req.body.firstName;
    // var lastName = req.body.lastName;
    // var province = req.body.state;
    // var report = req.body.report;

    // const {data, error} =  supabase
    //     .from('Customer')
    //     .insert([
    //         {'cust_first_name': firstName, 
    //         'cust_last_name': lastName, 
    //         'cust_province': province,
    //         'cust_report': report}
    //     ])
    //     .select();

    // console.log(data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('Reported!')
})