import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryProduct from "./admin/components/CategoryProduct/CategoryProduct";
import Dashboard from "./admin/components/Dashboard/Dashboard";
import ManagerProduct from "./admin/components/ManagerProduct/ManagerProduct";
import "./admin/AdminCSS.css";
import ManagerUser from "./admin/components/ManagerUser/ManagerUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/manager-product' element={<ManagerProduct />}></Route>
        <Route path='/manager-user' element={<ManagerUser />}></Route>
        <Route path='/manager-category' element={<CategoryProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
