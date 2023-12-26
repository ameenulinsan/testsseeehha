document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    const apiUrl = 'https://sheetdb.io/api/v1/ojjaed87bno22';
    const username = 'jni0acwi';
    const password = '7du27d6b66zzfu6v7mup';

    fetch(apiUrl, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(username + ":" + password)
        })
    })
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const display = document.getElementById('dataDisplay');
    display.innerHTML = JSON.stringify(data, null, 2);
}
