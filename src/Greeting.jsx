export function Greeting({title, name="user"}) {
  console.log(title);
  function Add(x, y) {
    return x + y;
  }

  //const name = "Leonardo";
  const married = false;
  const user = {
    firstName: "Steven",
    lastName: "Garzon",
    age: "26",
  };

  return (
    <div>
      <h1>Welcome : {user.firstName + " " + user.lastName}</h1>
      <h1>UserCard</h1>
      <h1> {title}</h1>
      <hr></hr>
      <p>Age: {user.age}</p>
      <p>State: {married ? "Married 😀" : "Not married 😇"}</p>
      <hr></hr>
      <a>
        El valor del boleano <b>state:</b> {married.toString()}
      </a>
      <p>
        La funcion <b>Add</b> devuelve: {(10, 30)}
      </p>
    </div>
  );
}

export function UserCard({name, amount, married, addres, points, greet}) {

  
  return (
    <div>
      <hr />
      <h1>UserCard</h1>
      <hr />
      <p>Name: {name}</p>
      <p>State: {married ? "Married" : "Not married"}</p>
      <p>Points: {[points[1]]}</p>
      <p>🤑	 Amount: {amount}</p>
      <ul>
        <li>City: {addres.city}</li>
        <li>Street: {addres.street}</li>
      </ul>
      
    </div>
  );
}
