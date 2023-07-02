import React, { useState } from "react";
import { supabase } from "../database/client";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.signInWithOtp({ email: email })
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="ejemplo@ejemplo.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
}

export default Login;
