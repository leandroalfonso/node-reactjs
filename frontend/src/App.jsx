import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import api from "./Api";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState([]);
  const [entrada, setEntrada] = useState("");

function add(){
    api.post("dados", {nome: entrada}).then((res) => {
      setCount([...count, res.data]);
    });
}

  useEffect(() => {
    api.get("dados").then((res) => {
      setCount(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={(e) => {
            setEntrada(e.target.value);
          }}
        />
<button onClick={add}>enviar</button>
        {entrada}
      </div>

      {count.map((item) => (
        <div>
          <p>{item.nome}-</p>
        </div>
      ))}
    </div>
  );
}

export default App;
