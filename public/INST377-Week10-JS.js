async function getUsers() {
    console.log('Creating User')
    var host = window.location.origin;

    var test = await fetch(`${host}/users`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((res) => res)
        .then(async res => {
            //console.log("NULL TEST 1: " + res)
            /*
            const element = document.getElementById('errorBox')
            if(element) {
                element.remove();
            }
            */
            console.log('Status:', res.status)
            if (res.status == 200 || res.status == 304) {
                return res.json()
            }
            throw Error(JSON.stringify(await res.json()));
        })
        .then((res) => {
            //console.log("TYPE TEST: " + typeof(res))
            const element = document.getElementById("userInfo");
            if (element) {
                element.remove();
            }

            var table = document.createElement('table');
            table.setAttribute('id', 'userInfo')

            var tableRow = document.createElement('tr');

            var tableHeading1 = document.createElement('th');
            tableHeading1.innerHTML = "First Name"
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th');
            tableHeading2.innerHTML = "Last Name"
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th');
            tableHeading3.innerHTML = "Description"
            tableRow.appendChild(tableHeading3)

            table.appendChild(tableRow)
            // var cutoff = document.getElementById('cutoff');
            // cutoff.insertAdjacentElement("beforebegin", table)
            document.body.appendChild(table)
            //console.log("RES LENGTH: " + res.length)
            for (i = 0; i < res.length; i++) {
                var userRow = document.createElement('tr');
                var userFirstName = document.createElement('td');
                var userLastName = document.createElement('td');
                var userDescription = document.createElement('td');

                //console.log("FIRST NAME: " + res[i].user_first_name);
                userFirstName.innerHTML = res[i].user_first_name;
                //console.log("LAST NAME: " + res[i].user_last_name);
                userLastName.innerHTML = res[i].user_last_name;
                //console.log("DESC: " + res[i].user_description);
                userDescription.innerHTML = res[i].user_description;

                userRow.appendChild(userFirstName);
                userRow.appendChild(userLastName);
                userRow.appendChild(userDescription);

                table.appendChild(userRow);
            }

        })
        .catch((error) => {
            console.log('Error:', JSON.parse(error.message))
            var errorDiv = document.createElement('div')
            errorDiv.setAttribute('class', 'errorBox');
            errorDiv.setAttribute('id', 'errorBox')

            var h1 = document.createElement('h1');
            h1.innerHTML = `Error Ocurred:`

            var p = document.createElement('p');
            p.innerHTML = `${JSON.parse(error.message).message}`

            errorDiv.appendChild(h1);
            errorDiv.appendChild(p);
            document.body.appendChild(errorDiv)
        })
}


async function addUser() {
    console.log('Creating User')
    var host = window.location.origin;

    var test = await fetch(`${host}/users`, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": `${document.getElementById('firstName').value}`,
            "lastName": `${document.getElementById('lastName').value}`,
            "description": `${document.getElementById('description').value}`,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    await getUsers();
}

window.onload = getUsers;