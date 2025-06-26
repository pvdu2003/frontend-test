import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import Profile from "./pages/Profile/Profile";
import AuthenticatedLayout from "./shared/layouts/AuthenticatedLayout/AuthenticatedLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout children={<Home />} />} />
          <Route
            path="/profile"
            element={<AuthenticatedLayout children={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
