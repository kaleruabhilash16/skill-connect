import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoggedHomePage from "./pages/LoggedHomePage";
import ProfilePage from "./pages/ProfilePage";
import PostDetails from "./pages/PostDetails";
import RequestsInbox from "./pages/RequestsInbox"; // ✅ Import Requests Inbox Page
import LoggedNavbar from "./components/LoggedNavbar"; // ✅ Import Logged Navbar
import { AuthProvider } from "./context/AuthContext";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <>
                <Navbar />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route
            path="/notifications"
            element={
              <>
                <LoggedNavbar />
                <Notifications />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Navbar />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔒 Protected Routes (Only Accessible After Login) */}
          <Route
            path="/logged-homepage"
            element={
              <>
                <LoggedNavbar />
                <LoggedHomePage />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <LoggedNavbar />
                <ProfilePage />
              </>
            }
          />
          <Route
            path="/post/:id"
            element={
              <>
                <LoggedNavbar />
                <PostDetails />
              </>
            }
          />
          <Route
            path="/create-post"
            element={
              <>
                <CreatePost />
              </>
            }
          />
          <Route
            path="/requests-inbox"
            element={
              <>
                <LoggedNavbar />
                <RequestsInbox />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
