export function renderWeather(data, containerId = "weatherDetail") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <h2>Cuaca di ${data.location.name}, ${data.location.country}</h2>
    <p>Suhu: ${data.current.temperature}°C</p>
    <p>Kondisi: ${data.current.weather_descriptions[0]}</p>
    <p>Kecepatan Angin: ${data.current.wind_speed} km/h</p>
  `;
}

export function renderHistory(history) {
  const list = document.getElementById("historyList");
  if (!list) return;

  list.innerHTML = history.map(city => `<li>${city}</li>`).join("");
}
