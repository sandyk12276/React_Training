import React, { Component } from 'react';

import '../src/Stylesheets/mystyle.css'

const imgsrc = "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMHdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
const element = "Office Space, At Affordable Range"
const image = <img src={imgsrc} width="400px" height="300px" alt="Office Image" />
const Office = { Name: "DBS", Rent: 90000, Address: "Delhi" }

function App() {
  let colors = [];
  if (Office.Rent < 60000) {
    colors.push("txtRed");
  }
  else {
    colors.push("txtGreen");
  }
  return (
    <div className="center">
      <h1>{element}</h1>
      {image}
      <h1>Name :{Office.Name}</h1>
      <h3 className={colors}>Rent: Rs. {Office.Rent}</h3>
      <h3>Address: {Office.Address}</h3>
    </div>
  );
}

export default App;
