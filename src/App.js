import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VoucherForm from "./Components/VoucherForm.js"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/voucher-form" element={<VoucherForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
