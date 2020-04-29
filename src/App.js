import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  //Obtener los datos por medio de una API
  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    //console.log(users);
    setEquipo(users);
  };

  return (
    <div>
      <h1>Tabla de datos</h1>
      <tr>
        {equipo.map((equipos) => (
          <td key={equipos.id}>
            {" "}
            {equipos.name}- {equipos.email}{" "}
          </td>
        ))}
      </tr>
    </div>
  );
}
