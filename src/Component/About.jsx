import React, { useState } from "react";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    setName("");
    setEmail("");
  };

  return (
    <div>
      hellow About
      <form onSubmit={handleSubmit}>
        <h2>React Form Example</h2>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br><br></br>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type='Sumbit'>Submit</button>
      </form>
    </div>
  );
}

export default About;
