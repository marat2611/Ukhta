import "./styles/index.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/header/navbar';
import Fooeter from "./components/footer/footer";
import Home from "./pages/home";
import About_city from "./pages/about-city";
import Attractions from "./pages/attractions";
import Blogs from "./pages/blogs";




function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          
          <div className="wrapper">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-city" element={<About_city />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/attractions" element={<Attractions />} />
            </Routes>

            <Fooeter />

          </div>
      </Router>
      
    </div>
  );
}

export default App;
