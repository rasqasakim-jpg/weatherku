const API_KEY = "d9b83329896030f3f696298a93724e25"; // ganti dengan API key kamu

export async function getWeather(city) {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.info);
    }

    return data;
  } catch (err) {
    throw new Error("Gagal mengambil data cuaca: " + err.message);
  }
}
