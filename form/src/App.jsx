import React, { useState } from 'react';
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
     setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          value={formData.name}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={formData.email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;