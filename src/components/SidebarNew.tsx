import { Button, Drawer } from "antd";
import React, { useState } from "react";
import "../assets/css/Sidenew.css"
import MenuBack from '../assets/images/menu_back.svg';
import LogoImage from  '../assets/images/Logo.svg';
import Myprofile from'../assets/images/my_profile.svg';
import ScanSvg from'../assets/images/scan.svg';
import ReportSvg from'../assets/images/report.svg';
import LogoutSvg from'../assets/images/logout.svg';
import { useNavigate } from "react-router-dom";

export default function SidebarNew(){

    const [open, setOpen] = useState(false);
  

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    let navigate = useNavigate();
    
    function binahPage() {
        navigate('/binah'); 
    }

    function viewReportPage() {
        navigate('/viewReport'); 
    }

    function addUserPage() {
        navigate('/addUser');
    }
  

    return(
        <>
       <div id="sidebar">
						<div className="inner">
            
               <section id="logo" className="alt align-center">
                        <img src={LogoImage} alt="Drivn Fintech" width="40%" />
                    </section>
                    
                    
                    <nav id="menu">
                        <ul>
                            <li><a href="#" onClick={()=>addUserPage()}><img src={Myprofile} alt=""/> My Profile</a></li>
                            <li><a href="#" onClick={()=>binahPage()}><img src={ScanSvg} alt=""/>Measure Now</a></li>
                            <li><a href="#" onClick={()=>viewReportPage()}><img src={ReportSvg} alt=""/> View Reports</a></li>
                            <li><a href="#"><img src={LogoutSvg} alt=""/> Logout</a></li>	
                        </ul>
                    </nav>

                    {/* <div className="bottom_menu"><img src={MenuBack}/></div> */}
                
            
            </div>
        </div>
            
        </>
    )

 }