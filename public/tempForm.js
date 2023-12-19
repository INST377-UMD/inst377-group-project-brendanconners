async function getEarthquakereport() {
    console.log('Creating Earthquake Report')
    var host = window.location.origin;
    var test = await fetch(`${host}/reporters`, 
    {
        method: 'GET',
        headers:
        {
            "Content-type": "application/json"
        }
    })
    .then((res) => res)
    .then(async (res) => 
    {
        // console.log(res)

        console.log('Response Status:', res.status)
        if (res.status == 200 || res.status == 304) {
            return res.json()
        }
        throw Error(JSON.stringify(await res.json()));
    })
    .then((res) => {
        // console.log(res)
        const element = document.getElementById("reporterInfo");
        if (element) {
            element.remove();
        }
        var table = document.createElement('table');
            table.setAttribute('id', 'customerInfo')

            var tableRow = document.createElement('tr');

            var tableHeading1 = document.createElement('th');
            tableHeading1.innerHTML = "Person Name or Company Name"
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th');
            tableHeading2.innerHTML = "Destricte"
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th');
            tableHeading3.innerHTML = "Time Stamp"
            tableRow.appendChild(tableHeading3)

            var tableHeading4 = document.createElement('th');
            tableHeading3.innerHTML = "Description"
            tableRow.appendChild(tableHeading4)

            var tableHeading5 = document.createElement('th');
            tableHeading3.innerHTML = "Mangnitude"
            tableRow.appendChild(tableHeading5)

            table.appendChild(tableRow)
            // var cutoff = document.getElementById('cutoff');
            // cutoff.insertAdjacentElement("beforebegin", table)
            document.body.appendChild(table)
            for (i = 0; i < res.length; i++) {
                var repRow = document.createElement('tr');
                var repName = document.createElement('td');
                var repDistrict = document.createElement('td');
                var repDescription = document.createElement('td');
                var repMagnitude = document.createElement('td');

                // repNumber.innerHTML = res[i].rep_Num;
                repName.innerHTML = res[i].rep_Name;
                repDistrict.innerHTML = res[i].rep_Dis;
                repDescription.innerHTML = res[i].rep_Des;
                repMagnitude.innerHTML = res[i].rep_Mag;

                repRow.appendChild(repName);
                repRow.appendChild(repDistrict);
                repRow.appendChild(repDescription);
                repRow.appendChild(repMagnitude);

                table.appendChild(repRow);
            }
    })
    .catch((error) => 
    {
        console.log('Error:', JSON.parse(error.message))
        var errorMessage = error.createElement('div')
        div.setAttribute('class', 'errorBox');
        div.setAttribute('report_id', 'errorBox');

        var h1 = document.createElement('h1')
        h1.innerHTML = `Error Occured:`

        var p = document.createElement('p');
        p.innerHTML = `${JSON.parse(error.message).message}`
 
        errorDiv.appendChild(h1);
        errorDiv.appendChild(p);
        document.body.appendChild(errorDiv)
    })
}
async function addReporter() {
    console.log('Creating Report')
    var host = window.location.origin;

    var test = await fetch(`${host}/reporters`, {
        method: 'POST',
        body: JSON.stringify({
            "name": `${document.getElementById('name').value}`,
            "district": `${document.getElementById('district').value}`,
            "description": `${document.getElementById('description').value}`,
            "magnitude": `${document.getElementById('magnitude').value}`,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    await getEarthquakereport();
}

window.onload = getEarthquakereport;