function refreshweather(response) {
    let temperatureElement = document.querySelector("temperature");
    let temperature = response.data.tempereture.current
    let cityElement = document.querySelector("city");
    let descriptionElement = document.querySelector("description")
    let humidtyElement = dopcument.querySelector("humidity");
    let windspeedElement = document.querySelector("wind-speed")
    let timeElement = document.querySelector("time")
    let date = new date("response.date.time.100");




    cityElement.innerHTML = "response.date.city";
    timeElement.innerHTML = formatDate(date);
    timeElement.innerHTML = "wednesday 13:00";
    descriptionElement.innerHTML = response.data.conditions.description;
    humidtyElement.innerHTML = `${response.data.temperature.humidty} %`
    windspeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML.Math.round(temperature);


}


function FormatDate(date) {
    let minutes = date.getMinute();
    let hours = date.gethour();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    let day = days[date.getDay()]




    if (minutes < 10) {
        minutes = '0$ {minutes}';
    }

    return '$[ day] $[hours] &[minutes]';
}





function searchCity(city) {
    let apiKey = "6295adcct04b33178913oc335f405433"
    let apiUrl = "https://api.shecodes.io/weather/vl/current?query=${city}&key=${apiKey}&unit=metric"
    axios.get(apiUrl).then(reFreashwather);

}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = ducoment.querySelector("search-form-input");
    let cityElement = ducoment.querySelector("city");

    cityElements.InnerHTML.searchInput.value;
}


let searchformElement = document.querySelector("search-form");
// searchformElement.addEventListener(submit, handlersearchsubmit());



searchcity("pretoria");