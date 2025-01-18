import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VoucherForm from "./Components/VoucherForm.js";
import Dashboard from "./Components/Dashboard.js"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/voucher-form" element={<VoucherForm />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
