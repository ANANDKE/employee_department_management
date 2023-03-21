
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmpList from './components/EmpList';
import DepList from './components/DepList';
import AddEmployee from './components/AddEmployee';
import AddDepartment from './components/AddDepartment';
import NavbarTop from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/emplist' element={<EmpList />} />
          <Route path='/deplist' element={<DepList />} />
          <Route path='/addemp' element={<AddEmployee />} />
          <Route path='/adddep' element={<AddDepartment />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
