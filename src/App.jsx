import "./App.css";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Chat />
      </div>
    </>
  );
}

export default App;
