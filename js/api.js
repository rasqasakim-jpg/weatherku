export async function getWeather(city) {
  const url = `/api/weather?city=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.info || "API Error");
    }

    return data;
  } catch (err) {
    throw new Error("Gagal mengambil data cuaca: " + err.message);
  }
}
