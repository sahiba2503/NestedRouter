import React, { useState } from "react";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [user, setUser] = useState({
    name: "Sahiba",
    age: 22,
  });

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
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h4>{fruits[0]}</h4>
      <h4>{fruits[1]}</h4>
      <h4>{fruits[2]}</h4>

      <button
        onClick={() => setUser({...user, age: 23, })
        }
      >
        Update Age
      </button>

<button onClick={() =>   setFruits([...fruits, "Mango"])      } >
        Add Mango
      </button>
    </div>
  );
}

export default About;



