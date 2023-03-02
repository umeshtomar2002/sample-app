import React from 'react';
import ReactDOM from 'react-dom'; 
import BinahSdkImpl from './BinahSdkImpl';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import AddUser from './AddUser';
import SaveUser from './SaveUser';
import ViewReports from './ViewReports';
import PerformTest from './PerformTest';

export default function App() {

        return ( 
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />           
                <Route path="addUser" element={<AddUser />} />              
                <Route path="binah" element={<BinahSdkImpl />} />
                <Route path="saveUser" element={<SaveUser />} />
                <Route path="viewReport" element={<ViewReports/>} />
                <Route path="performTest" element={<PerformTest/>} />                                 
            </Routes>
          </BrowserRouter>
        )     
}