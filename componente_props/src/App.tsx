import React from "react";
import "./App.css";
// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  address: string;
  city: string;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, address, city}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Your address is {address}</p>
      <p>You live in {city}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome name="Alice" age={25} address="Centro" city="Franca" />
      <Welcome name="Bob" age={30} address="Morumbi" city="São Paulo"/>
      <Welcome name="Charlie" age={35} address="Eliseos" city="Ribeirao"/>
    </div>
  );
}
export default App;
