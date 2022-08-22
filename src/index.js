import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Leonardo"
      amount={100}
      married={false}
      points={[22.22, 11.11]}
      addres={{ street: "Cll 9f#23c-92", city: "Cali" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Santiago"
      amount={2000}
      married={false}
      points={[10.0, 54.33, 33.22]}
      addres={{ street: "Cra 33#23-11", city: "Bogota" }}
    />
  </>
);
