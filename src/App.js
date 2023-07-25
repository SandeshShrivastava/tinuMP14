import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
function App() {
  const [mode, setmode] = useState("Dark");
  const toggleMode = () => {
    if (mode === "light") setmode("Dark");
    else setmode("light");
  };
  return (
    <>
      <Navbar
        title="FeasionWords"
        Bestdeal="OsamDeals"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textarea heading="Type your thought..." />
      </div>
    </>
  );
}

export default App;
