function getWeather() {
  const divA = document.getElementById("before");
  const divB = document.getElementById("after");
  divA.style.display = "none";
  divB.style.display = "block";

    const locationInput = document.getElementById("location");
    const location = locationInput.value;
    const apiKey = "b415db3e92c1437198014856230310";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const city = data.location.name;
        const weather = data.current.condition.text;
        const temperature = data.current.temp_c;
        const time = data.current.time_epoch;
        const wind = data.current.wind_kph;
        const humidity = data.current.humidity;
        const uv = data.current.uv;


        document.getElementById("city").textContent = city;
        document.getElementById("weather").textContent = weather;
        document.getElementById("temp").textContent = `${temperature}°C`;
        document.getElementById("time").textContent = time;
        document.getElementById("wind").textContent = wind;
        document.getElementById("humidity").textContent = humidity;
        document.getElementById("uv").textContent = uv;

        const code = data.current.condition.code;
        const weatherIcon = document.getElementById('icons');
        weatherIcon.src = `assets/${code}.png`;


      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
      
}
