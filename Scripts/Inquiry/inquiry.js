let BASE_URL = window.location.protocol + "//" + window.location.host;
console.log('System Wide Application URL is:', BASE_URL);
var allCountryList = [];

function setupCountryList(incomingCountryArray) {
    let optionList = document.getElementById('country').options;
    incomingCountryArray.forEach(option =>
        optionList.add(
            new Option(option.CommonName, option.OfficialName)
        )
    );

}

document.addEventListener("DOMContentLoaded", function (event) {
    const url = `${BASE_URL}/Home/GetAllCountry`;
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setupCountryList(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});


function setupCityDropdown(data) {
    let optionList = document.getElementById('city').options;
    data.forEach(option =>
        optionList.add(
            new Option(option.Capital, option.Capital)
        )
    );
}

function countryChange() {
    let selectedValue = document.getElementById("country").value;
    console.log('Printed Country Value:', selectedValue);
    const url = `${BASE_URL}/Home/FindCity?countryName=${selectedValue}`;
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setupCityDropdown(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function setupLocationDropdown(selectedValue) {
    let options =
        [
            {
                "text": "Location 1",
                "value": "1"
            },
            {
                "text": "Location 2",
                "value": "2",
                "selected": true
            },
            {
                "text": "Location 3",
                "value": "3"
            }
        ];

    let optionList = document.getElementById('locations').options;

    options.forEach(option =>
        optionList.add(
            new Option(option.text, option.value, option.selected)
        )
    );

}

function cityChange() {
    let selectedValue = document.getElementById("city").value;
    console.log('Printed City Value:', selectedValue);
    setupLocationDropdown(selectedValue);
}


function triggerStep2() {

    jQuery("#step-1").fadeOut('fast');
    jQuery("#step-2").fadeIn('slow');


}

function submitInquiry() {

}
