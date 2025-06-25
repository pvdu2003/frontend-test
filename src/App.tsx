import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import AuthLayout from "./shared/layouts/AuthLayout/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout children={<Home />} />} />
          <Route path="/login" element={<AuthLayout children={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
