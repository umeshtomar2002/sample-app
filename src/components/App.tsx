import React from 'react';
import BinahSdkImpl from './BinahSdkImpl';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import AddUser from './AddUser';
import SaveUser from './SaveUser';
import ViewReports from './ViewReports';
import PerformTest from './PerformTest';
import CurrentReport from './CurrentReport';
import ProtectedRoute from './utils/ProtectedRoute';
import TermsCondition from './TermsCondition';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="addUser" element={<ProtectedRoute Component={AddUser} />} />
        <Route path="binah" element={<ProtectedRoute Component={BinahSdkImpl} />} />
        <Route path="saveUser" element={<ProtectedRoute Component={SaveUser} />} />
        <Route path="viewReport" element={<ProtectedRoute Component={ViewReports} />} />
        <Route path="performTest" element={<ProtectedRoute Component={PerformTest} />} />
        <Route path="currentReport" element={<ProtectedRoute Component={CurrentReport} />} />
        <Route path="TermsAndCondition" element={<TermsCondition />} />
      </Routes>
    </>


  )
}