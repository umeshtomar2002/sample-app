import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import BinahSdkImpl from './BinahSdkImpl';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import AddUser from './AddUser';
import SaveUser from './SaveUser';
import ViewReports from './ViewReports';
import PerformTest from './PerformTest';
import CurrentReport from './CurrentReport';
import LayoutPage from './LayoutPage';

export default function App() {

        return (
            <>
              <Routes>
                <Route path="/" element={<Login/>} />           
                <Route path="addUser" element={<AddUser />} />              
                <Route path="binah" element={<BinahSdkImpl />} />
                <Route path="saveUser" element={<SaveUser />} />
                <Route path="viewReport" element={<ViewReports/>} />
                <Route path="performTest" element={<PerformTest/>} />
                <Route path="currentReport" element={<CurrentReport/>} />
                <Route path="layout" element={<LayoutPage/>} />                                
            </Routes>
            </>

              
        )     
}