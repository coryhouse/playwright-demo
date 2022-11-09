import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">
      {token ? (
        <p>{token}</p>
      ) : (
        <button
          onClick={() => {
            const token = "fake token";
            localStorage.setItem("token", token);
            setToken(token);
          }}
        >
          Log in
        </button>
      )}
    </div>
  );
}

export default App;
