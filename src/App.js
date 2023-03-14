import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Hero";
import { AllExPlace } from "./Pages/AllExPlace";
import { ExPlace } from "./Pages/ExPlace";
import { Place } from "./Pages/Place";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/explore" element={<AllExPlace />} />
            <Route path="/explore/:disslug" element={<ExPlace />} />
            <Route path=":disslug" element={<ExPlace />} />
            <Route path="/explore/:disslug/:slug" element={<Place />} />
            <Route path="/:disslug/:slug" element={<Place />} />
            <Route path=":slug" element={<Place />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
