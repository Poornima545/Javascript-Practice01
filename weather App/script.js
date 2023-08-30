document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
  const searchButton = document.getElementById("searchButton");
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weatherInfo");

  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") return;

    // Fetch weather data
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const cityName = data.name;

        // Update UI
        weatherInfo.innerHTML = `
                    <h2>Weather in ${cityName}</h2>
                    <p>Description: ${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                `;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        weatherInfo.innerHTML =
          "<p>Error fetching weather data. Please try again later.</p>";
      });
  });
});
