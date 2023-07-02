
import React, { useState } from "react"
// import sqlite3 from "sqlite3"

// const db = new sqlite3.Database("popelis\\src\\database\\data.sqlite")

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Save the form data to the database.
        const sql = `INSERT INTO users (email, username, password, name) VALUES (?, ?, ?, ?)`;
        const params = [email, username, password, name];
        db.run(sql, params);

        // Redirect the user to the home page.
        window.location.href = "/";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register