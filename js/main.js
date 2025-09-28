import { getWeather } from "./api.js";
import { saveHistory, getHistory } from "./storage.js";
import { renderWeather, renderHistory } from "./ui.js";

const form = document.getElementById("searchForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("cityInput").value.trim();
    if (city) {
      saveHistory(city);
      renderHistory(getHistory());
      window.location.href = `detail.html?city=${encodeURIComponent(city)}`;
    }
  });

  renderHistory(getHistory());
}

const params = new URLSearchParams(window.location.search);
const city = params.get("city");

if (city) {
  getWeather(city)
    .then(data => renderWeather(data, "weatherDetail"))
    .catch(err => {
      document.getElementById("weatherDetail").innerHTML = `<p>${err.message}</p>`;
    });
}

const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const historyList = document.getElementById("historyList");

clearHistoryBtn.addEventListener("click", () => {
  localStorage.removeItem("searchHistory"); 
  historyList.innerHTML = ""; 
});

