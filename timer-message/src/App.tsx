import "./App.css";
import Timer from "./components/Timer";
import Message from "./components/Message";
import Message2 from "./components/Message2";
function App() {
  return (
    <div className="App">
      <h1>Exemplo de React com TypeScript</h1>
      <Timer />
      <Message />
      <Message2 />
    </div>
  );
}
export default App;
