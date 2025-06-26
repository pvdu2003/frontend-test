import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout children={<Home />} />} />
          <Route
            path="/profile"
            element={<MainLayout children={<Profile />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
