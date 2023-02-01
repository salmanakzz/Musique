import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-phone-input-2/lib/style.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OTPVerifyPage from "./pages/OTPVerifyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/otp" exact element={<OTPVerifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
