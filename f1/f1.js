async function f1 (latitude, longitude, date) {
    let temperature = await fetchWeather(latitude, longitude, date);
    let sum = 0;
    temperature.hourly.temperature_2m.forEach((t) => {
      sum += t;
    });
    return Math.floor(sum / temperature.hourly.temperature_2m.length);
}
async function fetchWeather(latitude, longitude, date) {
    let url = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${date}&end_date=${date}&hourly=temperature_2m`;
    try {
      let data = await fetch(url);
      if (!data.ok) {
          alert("Valami nem sikerült")
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      let output = await data.json().then((output) => output);
      return output;
    } catch (error) {
      throw new Error(error);
    }
  }
module.exports = f1;
