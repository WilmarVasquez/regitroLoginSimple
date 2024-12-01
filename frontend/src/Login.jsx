import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error en la autenticación");
    }
  };

  return (
    <div className="auth-container">
      <h1>Lleva Cuentas</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="login-btn">
          Ingresar
        </button>
      </form>
      <div className="forgot-password">¿Olvidó la contraseña?</div>
      <footer>
        @Albervoz <br /> 3043727634
      </footer>
    </div>
  );
};

export default Login;
