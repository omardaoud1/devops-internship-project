import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/navBar/Navbar";
import Navbar1 from "@/components/navBar/Navbar1";
import Login from "@/components/Login/Login";
import Signup from "@/components/SignUp/SignUp";
import Home from "@/components/Home/Home";
import Services from "@/components/services/services";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar1 />
                <Login />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar1 />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar1 />
                <Signup />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
