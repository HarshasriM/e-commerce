// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Admin.css";
import Sidebar from '../../Components/sidebar/Sidebar';
import {Routes,Route} from "react-router-dom";
import Addproduct from '../../Components/addProduct/Addproduct';
import Listproduct from '../../Components/listproduct/Listproduct';
function Admin() {
    return (
        <div className='admin'>
            <Sidebar/>
            <Routes>
                <Route path="/addproduct" element={<Addproduct/>}></Route>
                <Route path="/listproduct" element={<Listproduct/>}></Route>
            </Routes>
        </div>
    );
}

export default Admin;