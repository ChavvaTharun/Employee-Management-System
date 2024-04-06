import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./pages/footerComponent";
import UseEmployeeList from './pages/useEmployeeList';
import HeaderComponent from './pages/headerComponent';
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<UseEmployeeList/>}/>
          <Route path='/add-employee' element={<AddEmployee/>}/>
          <Route path="/edit-employee/:id" element={<AddEmployee/>}/>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
