import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function Add(x, y) {
    return x + y;
  }

  //const name = "Leonardo";
  const married = false;
  const user = {
    firstName: "Steven",
    lastName: "Garzon",
  };

  return (
    <div>
      <h1>Welcome : {user.firstName + " " + user.lastName}</h1>
      <hr></hr>
      <p>State: {married ? "Married 😀" : "Not married 😇"}</p>
      <a>
        El valor del boleano <b>state:</b> {married.toString()}
      </a>
      <p>
        La funcion <b>Add</b> devuelve: {(10, 30)}
      </p>
    </div>
  );
}

root.render(<Greeting />);
