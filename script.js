const apiKey = "a291a50ad219c5e69f34c3054b7e04d1";



function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            // Check if API returned error
            if (data.cod !== 200) {
                alert(data.message);
                return;
            }

            document.getElementById("temperature").innerText =
                Math.round(data.main.temp) + "°C";

            document.getElementById("description").innerText =
                data.weather[0].description;

            document.getElementById("feelsLike").innerText =
                Math.round(data.main.feels_like) + "°C";

            document.getElementById("humidity").innerText =
                data.main.humidity + "%";

            document.getElementById("tempValue").innerText =
                Math.round(data.main.temp) + "°C";

        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        });
}
