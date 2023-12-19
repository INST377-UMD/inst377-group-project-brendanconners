const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://uercxfgebnzgqdgkcsgo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlcmN4ZmdlYm56Z3FkZ2tjc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4ODExMjEsImV4cCI6MjAxODQ1NzEyMX0.c8Ew1nE1wgeHsm3At4SnccvpwtZpjPUTmzlsOQV7a7E'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/INST377-Week10-PPT.html', { root: __dirname })
})
app.get('/aboutpage', (req, res) => {
    res.sendFile('public/aboutpage.html', { root: __dirname })
})
app.get('/nineday', (req, res) => {
    res.sendFile('public/nineDayChart.html', { root: __dirname })
})
app.get('/genInfo', (req, res) => {
    res.sendFile('public/generalInfo.html', { root: __dirname })
})
app.get('/dailyFor', (req, res) => {
    res.sendFile('public/dailyForecast.html', { root: __dirname })
})
app.get('/help', (req, res) => {
    res.sendFile('public/helppage.html', { root: __dirname })
})
app.get('/users', async (req, res) => {
    console.log(`Getting Users`)

    const {data, error} = await supabase
        .from('Users')
        .select();

    if(error) {
        console.log(error)
    } else if(data) {
        res.send(data)
    }
})

app.post('/users', async (req, res) => {
    console.log('Adding User')

    var firstName = req.body.firstName;
    console.log("indexFirstName: " + firstName);
    var lastName = req.body.lastName;
    console.log("indexLastName: " + lastName);
    var description = req.body.description;
    console.log("indexDescription: " + description);

    const {data, error} = await supabase
        .from('Users')
        .insert([
            {'user_first_name': firstName, 'user_last_name': lastName, 'user_description': description}
        ])
        .select();

    console.log("NULL ADD: " + data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})