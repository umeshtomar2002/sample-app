import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import  "../assets/css/main.css";
import { useLocation } from "react-router-dom";

export default function currentReport() {

    let navigate = useNavigate();
    let location = useLocation()
    console.log(JSON.stringify(location.state));
    console.log(location.state.heartRate.value);
    
    function backButton() {
        navigate(-2);
    }

    return(
        <>
            <div id="wrapper">
                <div id="main"> 
                    <div className="inner">
                        <header id="header">
							<ul className="icons">
								<li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li>
                                <li><Button onClick={()=> backButton()}> Back </Button></li>

							</ul>
						</header>
                        <section id="inside">
                            <div className="content">
                            <header>
                                <h2>Current Report</h2>
                            </header>
                                <div> </div>    
                                <div className="row gtr-uniform">
                                    <div className="col-8 col-12-xsmall">
                                         Heart Rate :  {location.state.heartRate.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Breathing Rate :  {location.state.breathingRate.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Stress :  {location.state.stress.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                       HRV-SDNN :  {location.state.hrvSdnn.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Spo2 :  {location.state.spo2.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                         Blood Pressure :  {location.state.bloodPressure.value}
                                    </div>
                                </div>      
                            </div>							 
                        </section>        
                    </div>
                </div>
            </div>
        </>
    )

}
