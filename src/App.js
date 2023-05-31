import './App.css';
import { useState, useEffect } from "react";

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.github.com/users/Pur3-MAlice`
      )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) 
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
 
    return (
      <Lift 
        name={data.name} 
        elevationGain={data.elevationGain}
      />
    );
}

export default App;
