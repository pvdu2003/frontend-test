import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import Profile from "./pages/Profile/Profile";
import AuthenticatedLayout from "./shared/layouts/AuthenticatedLayout/AuthenticatedLayout";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout children={<Home />} />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <AuthenticatedLayout children={<Profile />} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
