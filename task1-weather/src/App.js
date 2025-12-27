import { useState } from "react";

function App() {
  const [weather, setWeather] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Weather App</h2>
      <button onClick={() => setWeather("Sunny 30°C")}>
        Get Weather
      </button>
      <p>{weather}</p>
    </div>
  );
}

export default App;
