import React from "react";

const App = () => {
  const name = "Vishal";
  const x = 20;
  const y = 30;
  const names = ["Vishal", "mary", "joe", "sara"];
  const loggedIn = true;
  return (
    <>
      <div className="text-5xl">App</div>
      <p>hello {name}</p>
      <p> sum of x and y is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {if(loggedIn) {<h1></h1>}}
      </ul>
    </>
  );
};

export default App;
