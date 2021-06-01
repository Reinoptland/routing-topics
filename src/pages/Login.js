import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleSubmit() {
    // send to server here
    if (email === "rein@rein.it" && password === "abcd1234") {
      console.log("INGELOGD!");
      setAuthenticated(true);
    } else {
      console.log("Helaas");
    }
  }

  console.log("INGELOGD??", authenticated);

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Log in</button>
    </div>
  );
}
