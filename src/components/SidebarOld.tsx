import React,{useEffect} from "react";
import Helmet from "react-helmet";
import MenuBack from '../assets/images/menu_back.svg';
import LogoImage from  '../assets/images/Logo.svg';
import Myprofile from'../assets/images/my_profile.svg';
import ScanSvg from'../assets/images/scan.svg';
import ReportSvg from'../assets/images/report.svg';
import LogoutSvg from'../assets/images/logout.svg';
import { useNavigate } from "react-router-dom";
import jQuery from 'jquery';


export default function SidebarOld(){
    let navigate = useNavigate();
    
    function performanceTestPage() {
        navigate('/performTest'); 
    }

    function viewReportPage() {
        navigate('/viewReport'); 
    }

    function addUserPage() {
        navigate('/addUser');
    }

    useEffect(() => {
            <Helmet>            
                <script type = "text/javascript" src="../src/assets/js/jquery.min.js"/>
                <script type = "text/javascript" src="../src/assets/js/browser.min.js"/>
                <script type = "text/javascript" src="../src/assets/js/breakpoints.min.js"/>
                <script type = "text/javascript" src="../src/assets/js/util.js"/>
                <script type = "text/javascript" src="../src/assets/js/main.js"/>
           </Helmet>
      });

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
                            <li><a href="#" onClick={()=>performanceTestPage()}><img src={ScanSvg} alt=""/>Measure Now</a></li>
                            <li><a href="#" onClick={()=>viewReportPage()}><img src={ReportSvg} alt=""/> View Reports</a></li>
                            <li><a href="#"><img src={LogoutSvg} alt=""/> Logout</a></li>	
                        </ul>
                    </nav>

                    <div className="bottom_menu"><img src={MenuBack}/></div>
                </div>
            </div>
        </>
    )
}