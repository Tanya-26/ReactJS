import Contact from "./components/Contact";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";
import Product from "./components/Product";
import Courses from "./components/Courses";
import Home from "./components/Home"; 

const App = () => {
  return (
    // 1. Added Flexbox styles to make the layout span the full viewport height
    <div className="container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      
      {/* 2. 'flex: 1' allows this area to grow, naturally pushing the Footer to the bottom */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* 3. Mapped the root path "/" to Home so the Header link works */}
          <Route path="/" element={<Home />} />
          
          {/* Moved Registration to its own route so it is still accessible */}
          <Route path="/register" element={<Registration />} />
          
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/courses" element={<Courses />}>
            <Route path="youtube" element={<div>YouTube Course Page</div>} />
            <Route path="certificates" element={<div>Certificates Page</div>} />
          </Route>
          
          <Route path="/product/:pid" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;