import React, { useState } from "react";
import { supabase } from "../../database/client";
import LoginOptions from "./LoginOptions";

function Login() {
  const [email, setEmail] = useState("");

  async function prueba() {
    console.log(await supabase.auth.getUser());
  }

  prueba();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.signInWithOtp({ email: email });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LoginOptions />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
