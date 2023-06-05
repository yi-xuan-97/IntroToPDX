import "./App.css";
import {
  NavBar,
  Home,
  About,
  AboutPortland,
  Things,
  Footer,
  Todo,
} from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutPortland" element={<AboutPortland />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Things" element={<Things />} />
          <Route exact path="/Todo" element={<Todo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
