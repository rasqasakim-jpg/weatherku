const HISTORY_KEY = "weather_history";

export function saveHistory(city) {
  let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    if (history.length > 5) history.pop();
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }
}

export function getHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
}
