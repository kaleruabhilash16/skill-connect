import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoggedNavbar from "./components/LoggedNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./pages/FAQ";
import AuthPage from "./pages/AuthPage"; // ✅ Single Login/Signup Page
import LoggedHomePage from "./pages/LoggedHomePage";
import ProfilePage from "./pages/ProfilePage";
import PostDetails from "./pages/PostDetails";
import RequestsInbox from "./pages/RequestsInbox";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";
import AuthProvider, { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AuthLayout />
      </Router>
    </AuthProvider>
  );
};

// ✅ Conditionally Hide Navbar on Auth Page
const AuthLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation(); // Get current route

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  // ✅ If on "/auth", do NOT show Navbar
  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {!isAuthPage && (user ? <LoggedNavbar /> : <Navbar />)}
      <Routes>
        {/* 🟢 Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <>
              <HowItWorks />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<AuthPage />} />

        {/* 🔄 Redirects from old paths */}
        <Route path="/login" element={<Navigate replace to="/auth" />} />
        <Route path="/signup" element={<Navigate replace to="/auth" />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/logged-homepage"
          element={
            <ProtectedRoute>
              <LoggedHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:id"
          element={
            <ProtectedRoute>
              <PostDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-post"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requests-inbox"
          element={
            <ProtectedRoute>
              <RequestsInbox />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        {/* 🌍 Catch All Route (404) */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
