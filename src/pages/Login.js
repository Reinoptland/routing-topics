import React, { useState } from "react";

export default function Login(props) {
  console.log("WHAT IS IN PROPS:", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // send to server here
    if (email === "rein@rein.it" && password === "abcd1234") {
      console.log("INGELOGD!");
      props.setAuthenticated(true);
    } else {
      console.log("Helaas");
    }
  }

  console.log("INGELOGD??", props.authenticated);

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
