import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Hero";
import { AllExPlace } from "./Pages/AllExPlace";
import { ExPlace } from "./Pages/ExPlace";
import { Place } from "./Pages/Place";
import About from "./Pages/About";
import Update from "./Pages/Update";
import UpdateView from "./Components/UpdateView";
import AdminOut from "./Pages/AdminOut";
import AdminIn from "./Pages/AdminIn";
import AdminUpIn from "./Pages/AdminUpIn";

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
            <Route path="/update" element={<Update />} />
            <Route path="/update-view" element={<UpdateView />} />
            <Route path="/admin/package" element={<AdminOut/>}/>
            <Route path="/admin/package-add" element={<AdminIn/>}/>
            <Route path="/admin/update" element={<AdminUpIn/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
