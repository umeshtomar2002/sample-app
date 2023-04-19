import React, { useState, useEffect } from "react";
import "../assets/css/Sidenew.css"
import MenuBack from '../assets/images/menu_back.svg';
import LogoImage from '../assets/images/Logo.svg';
import Myprofile from '../assets/images/my_profile.svg';
import ScanSvg from '../assets/images/scan.svg';
import ReportSvg from '../assets/images/report.svg';
import LogoutSvg from '../assets/images/logout.svg';
import Menu from '../assets/images/menu1.svg';
import { useNavigate } from "react-router-dom";

export default function SidebarNew() {

    const [open, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    // const onClose = () => {
    //     setOpen(false);
    // };
    const handleWindowResize = () => {
        if(window.innerWidth > 1280){
            setShowMenu(false);
            setOpen(true)
        }else{
            setShowMenu(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    const onScroll = () => {
        if(showMenu && open){
            setOpen(false);
        } 
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });

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

    function loginPage() {
        // navigate('/',"replace");
    }


    return (
        <>
            <div className="small_logo headerOptions">
                    <img src={LogoImage} alt="Drivn Fintech" width="100%" />
            </div>
            {open &&
                   <div id="sidebar">
                   <div className="inner">
                       <section id="logo" className="alt align-center">
                           <img src={LogoImage} alt="Drivn Fintech" width="60px" />
                       </section>
                       <nav id="menu">
                           <ul>
                               {/* <li><a href="#" onClick={() => addUserPage()}><img src={Myprofile} alt="" /> My Profile</a></li> */}
                               <li><a href="#" onClick={() => addUserPage()}><img src={ScanSvg} alt="" />Measure Now</a></li>
                               <li><a href="#" onClick={() => viewReportPage()}><img src={ReportSvg} alt="" /> View Reports</a></li>
                               <li><a href="#"><img src={LogoutSvg} onClick={() => loginPage()} alt="" /> Logout</a></li>
                           </ul>
                       </nav>
                       {/* <div className="bottom_menu"><img src={MenuBack}/></div> */}
                   </div>
               </div>
            }
     
            { showMenu &&
                <div className="header_menu headerOptions">
                    <img src={Menu} alt="Drivn Fintech" width="35px" onClick={() => setOpen(!open)}/>
                </div>
            }

        </>
    )

}