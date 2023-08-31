import React from "react";
import HeaderAdmin from "../../Layout/HeaderAdmin";
import Sidebar from "../../Layout/Sildebar";

function ManagerUser() {
  return (
    <div className='grid-container'>
      <HeaderAdmin />
      <Sidebar />
      <main className='main-container'>
        <div className='main-title'>
          <h3>ManagerUser</h3>
        </div>
      </main>
    </div>
  );
}

export default ManagerUser;
