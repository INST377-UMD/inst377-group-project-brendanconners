async function getEarthquakereport()
{
    console.log('Creating Earthquake Report')
    var test = await fetch(`http://localhost:3000/earthquakes`, 
    {
        method: 'GET',
        headers:
        {
            "Content-type": "application/json"
        }
    })
    .then(async (res) => 
    {
        console.log(res)

        console.log('Response Status:', res.status)
        if (res.status != 200 || res.status != 304) 
        {
            throw new Error(JSON.stringify(await res.json()));
            // return;
        }
        else {
            res.json()
        }
    })
    .then((res) => {
        console.log(res)
        const element = document.getElementById("customerInfo");
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
        div.setAttribute('id', 'errorBox');

        var h1 = document.createElement('h1')
        h1.innerHTML = `Error Occured:`

        var p = document.createElement('p');
        p.innerHTML = `${JSON.parse(error.message).message}`
 
        errorDiv.appendChild(h1);
        errorDiv.appendChild(p);
        document.body.appendChild(errorDiv)
    })
}


// window.onload = getEarthquakereport;