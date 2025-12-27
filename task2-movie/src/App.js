import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Movie Search App</h2>
      <input
        placeholder="Enter movie name"
        onChange={(e) => setMovie(e.target.value)}
      />
      <p>Movie: {movie}</p>
    </div>
  );
}

export default App;
