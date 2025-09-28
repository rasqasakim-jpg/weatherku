export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = "d9b83329896030f3f696298a93724e25"; 
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
