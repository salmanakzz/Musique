import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-phone-input-2/lib/style.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, OTPVerifyPage } from "./pages";
import { PrivateRoute } from "./route/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute login={true} />}>
          <Route path="/" exact element={<LoginPage />} />
        </Route>
          <Route path="/otp" exact element={<OTPVerifyPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" exact element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
