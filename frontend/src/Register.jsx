import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });
      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div className="auth-container">
      <h1>Lleva Cuentas</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register-btn">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
