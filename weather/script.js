async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const resultDiv = document.getElementById("weatherResult");
    
    if (city === "") {
        resultDiv.innerHTML = `<span style="color:orange;">Please enter a city name.</span>`;
        return;
    }

    resultDiv.classList.remove('show');  
    resultDiv.innerHTML = "⏳ Fetching weather...";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        const weatherHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡️ Temperature: <strong>${data.main.temp}°C</strong></p>
            <p>⛅ Condition: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;

        resultDiv.innerHTML = weatherHTML;

        setTimeout(() => {
            resultDiv.classList.add('show');
        }, 100);

    } catch (error) {
        resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
    }
}
