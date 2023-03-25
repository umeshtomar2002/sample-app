import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import  "../assets/css/main.css";
import "../assets/css/current-report.css";
import { useLocation } from "react-router-dom";
import Heartrate  from "../assets/images/Heart-Rate.svg";
import Breathrate  from "../assets/images/Breathing-Rate.svg";
import PQR  from "../assets/images/PRQ.svg";
import SpO2  from "../assets/images/Oxygen-Saturation.svg";

import Hemoglobin from "../assets/images/Hemoglobin.svg";
import HemoglobinA1c  from "../assets/images/Hemoglobin-A1c.svg";
import StressLevel  from "../assets/images/Stress-Level.svg";
import RecoveryAblity  from "../assets/images/Recovery-Ability.svg";
import StressResponse  from "../assets/images/Stress-Response.svg";
import HRVSDNN  from "../assets/images/HRV-SDNN.svg";
import SidebarNew from "./SidebarNew";


export default function currentReport() {

    let navigate = useNavigate();
    let location = useLocation()
    console.log(JSON.stringify(location.state));
    //console.log(location.state.heartRate.value);
    
    function backButton() {
        navigate(-2);
    }
 
    const checkUndefined = (test) => test !== undefined && test != ''&& test.length > 0 ? test.value : 'N/A';

    return(
        <>
            <div id="wrapper">
                <div id="main"> 
                    <div className="inner">
                        
                        <section id="banner">
                            <div className="content">
                            <p><strong>Report on :</strong> 21/03/2023  | 00:24</p>

                            <div className="score"> 
                                <div className="meter"> 
                                        <svg width="327" height="250" id="meter" viewBox="0 0 327 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="14" y="9" width="301" height="202" fill="#db0000" />
                                            <path d="M239.772 49.4556C244.43 43.0045 253.464 41.4512 259.516 46.6171C270.965 56.3903 280.907 67.765 289.025 80.3783C293.396 87.1699 290.473 96.0346 283.259 99.665L211.127 135.96C197.546 142.794 183.924 126.811 192.823 114.485L239.772 49.4556Z" fill="#EE952C" />
                                            <path d="M25.8782 210.701C18.3813 213.426 10.0168 209.605 7.95331 201.9C0.679942 174.742 1.07306 146.032 9.23397 118.929C18.7845 87.2122 38.461 59.3983 65.3263 39.6394C92.1916 19.8805 124.805 9.23643 158.297 9.29607C186.857 9.34693 214.75 17.1783 238.961 31.7942C245.884 35.9735 247.169 45.232 242.28 51.6735L197.01 111.32C192.2 117.657 183.205 118.709 175.744 115.947C170.142 113.874 164.176 112.787 158.117 112.776C147.22 112.757 136.61 116.219 127.869 122.648C119.129 129.076 112.727 138.125 109.62 148.444C107.932 154.051 107.265 159.869 107.612 165.634C108.096 173.685 104.452 182.148 96.8709 184.903L25.8782 210.701Z" fill="url(#paint0_linear_498_1159)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H326.285V221.242H0V0ZM34.6883 206.881C27.2032 209.764 18.7216 206.046 16.606 198.308C11.7205 180.441 10.3127 161.752 12.5111 143.268C15.2828 119.964 23.7028 97.6888 37.0397 78.3781C50.3766 59.0674 68.2269 43.3052 89.0398 32.461C109.853 21.6167 132.999 16.0184 156.467 16.1524C179.935 16.2863 203.016 22.1486 223.703 33.2297C244.391 44.3109 262.06 60.2759 275.176 79.7376C288.291 99.1993 296.457 121.569 298.962 144.904C300.949 163.412 299.328 182.082 294.239 199.893C292.035 207.606 283.512 211.228 276.06 208.259L239.45 193.676C231.999 190.707 228.516 182.258 230.009 174.377C231.388 167.098 231.695 159.63 230.899 152.212C229.583 139.959 225.296 128.213 218.409 117.994C211.522 107.774 202.244 99.3914 191.381 93.5728C180.518 87.7542 168.399 84.676 156.076 84.6057C143.753 84.5353 131.599 87.475 120.671 93.1692C109.742 98.8634 100.369 107.14 93.3662 117.28C86.3631 127.42 81.9419 139.116 80.4865 151.353C79.6053 158.762 79.8275 166.233 81.123 173.527C82.5256 181.425 78.9471 189.834 71.462 192.717L34.6883 206.881ZM96.5323 176.472C97.1844 178.411 99.3523 179.328 101.25 178.565C103.148 177.802 104.056 175.648 103.418 173.704C100.905 166.041 100.05 157.916 100.928 149.87C101.939 140.596 105.223 131.713 110.488 124.011C115.752 116.308 122.835 110.022 131.109 105.711C139.383 101.399 148.593 99.1946 157.922 99.2925C167.252 99.3904 176.413 101.788 184.595 106.272C192.777 110.756 199.726 117.189 204.828 125C209.93 132.812 213.026 141.761 213.843 151.055C214.552 159.117 213.526 167.223 210.853 174.832C210.175 176.761 211.037 178.934 212.919 179.737C214.8 180.539 216.987 179.668 217.679 177.743C220.822 169.009 222.038 159.682 221.222 150.407C220.298 139.899 216.798 129.781 211.03 120.95C205.262 112.118 197.405 104.846 188.155 99.7761C178.905 94.7064 168.548 91.9962 158 91.8855C147.452 91.7748 137.04 94.2671 127.686 99.1416C118.332 104.016 110.324 111.122 104.372 119.831C98.4202 128.539 94.7078 138.581 93.5639 149.067C92.554 158.324 93.5731 167.674 96.5323 176.472Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_498_1159" x1="364.347" y1="300.909" x2="-48.8075" y2="255.096" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0677083" stop-color="#1663D6" />
                                                <stop offset="0.786458" stop-color="#01C738" />
                                                </linearGradient>
                                            </defs>
                                            </svg><svg width="30" height="144" id="needle" viewBox="0 0 30 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.2089" cy="128.608" r="10.9086" fill="white" stroke="#01C738" stroke-width="7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3486 0.920656L25.3277 127.679L25.3166 127.679C25.322 127.833 25.3239 127.988 25.322 128.144C25.2587 133.535 20.8377 137.853 15.4474 137.79C10.0571 137.726 5.73875 133.305 5.80203 127.915C5.80386 127.759 5.80934 127.604 5.81838 127.45L5.80766 127.45L17.3486 0.920656ZM19.2238 134.487C22.4036 132.316 23.2212 127.978 21.0498 124.798C18.8784 121.618 14.5404 120.801 11.3606 122.972C8.18076 125.144 7.36323 129.482 9.53459 132.661C11.706 135.841 16.044 136.659 19.2238 134.487Z" fill="url(#paint0_linear_498_1180)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_498_1180" x1="8.57715" y1="129.079" x2="18.8019" y2="129.199" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.6874" stop-color="#3F4142" />
                                                <stop offset="0.6875" stop-color="#2C2C2C" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    <h3>N/A</h3>
                                </div>
                            
                            <div className="result-score-text"><h3>Your Welness Score is low.</h3>
				                <p>The Wellness Score is based on the vital signs measured by Binah's technology, and is designed to serve as reference when measured at rest, under similar conditions during all of the measurements over time.</p>
	                            <p><i>*The measured indicators are not intended for medical use</i></p></div>
                            </div>
                            
                            <ul className="result">
                                <li><p className="r-icon"><img src={Heartrate}/> Heart Rate</p><p><strong>{checkUndefined(location.state.heartRate)}</strong></p></li>
                                <li><p className="r-icon"><img src={Breathrate}/> Breathing Rate</p><p><strong>{checkUndefined(location.state.breathingRate)}</strong></p></li>
                                <li><p className="r-icon"><img src={PQR}/> PRQ</p><p><strong>{checkUndefined(location.state.prq)}</strong></p></li>
                                <li><p className="r-icon"><img src={SpO2}/> Oxygen Saturation</p><p><strong>{checkUndefined(location.state.spo2)}</strong></p></li>
                                <li><p className="r-icon"> Blood Pressure</p><p><strong>{checkUndefined(location.state.bloodPressure)}</strong></p></li>
                                <li><p className="r-icon"><img src={Hemoglobin}/> Hemoglobin</p><p><strong>{checkUndefined(location.state.hemoglobinSign)}</strong></p></li>
                                <li><p className="r-icon"><img src={HemoglobinA1c}/> Hemoglobin A1c</p><p><strong>{checkUndefined(location.state.hemoglobinSign)}</strong></p></li>
                                <li><p className="r-icon"><img src={StressLevel}/> Stress Level</p><p><strong>{checkUndefined(location.state.stressLevel)}</strong></p></li>
                                <li><p className="r-icon"><img src={RecoveryAblity}/> Recovery Ability</p><p><strong>N/A</strong></p></li>
                                {/* <li><p class="r-icon"><img src="images/Stress-Response.svg"> Stress Response</p><p><strong>N/A</strong></p></li> */}
                                <li><p className="r-icon"><img src={HRVSDNN}/> HRV-SDNN</p><p><strong>{checkUndefined(location.state.hrvSdnn)}</strong></p></li>											
							</ul>
                            <p className="clear text-center"><a href="#" className="button   icon solid fa-share"> Share</a> &nbsp; <a href="#" className="button primary "> Test Again</a></p>
                            {/* <header>
                                <h2>Current Report</h2>
                            </header>
                                <div> </div>    
                                <div className="row gtr-uniform">
                                    <div className="col-8 col-12-xsmall">
                                         Heart Rate :  {checkUndefined(location.state.heartRate)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Breathing Rate :  {checkUndefined(location.state.breathingRate)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Stress :  {checkUndefined(location.state.stress)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                       HRV-SDNN :  {checkUndefined(location.state.hrvSdnn)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Spo2 :  {checkUndefined(location.state.spo2)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                         Blood Pressure :  {checkUndefined(location.state.bloodPressure)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        sdnn :  {checkUndefined(location.state.sdnn)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        stressLevel :  {checkUndefined(location.state.stressLevel)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        stressIndex :  {checkUndefined(location.state.stressIndex)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        meanRri :  {checkUndefined(location.state.meanRri)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        rmssd :  {checkUndefined(location.state.rmssd)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        sd1 :  {checkUndefined(location.state.sd1)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        sd2 :  {checkUndefined(location.state.sd2)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        prq :  {checkUndefined(location.state.prq)}
                                    </div><div className="col-8 col-12-xsmall">
                                        pnsIndex :  {checkUndefined(location.state.pnsIndex)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        pnsZone :  {checkUndefined(location.state.pnsZone)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        snsIndex :  {checkUndefined(location.state.snsIndex)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        snsZone :  {checkUndefined(location.state.snsZone)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        wellnessLevel :  {checkUndefined(location.state.wellnessLevel)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        wellnessIndex :  {checkUndefined(location.state.wellnessIndex)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        lfhf :  {checkUndefined(location.state.lfhf)}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        hemoglobinSign :  {checkUndefined(location.state.hemoglobinSign)}
                                    </div>
                                </div>      
                            							  */}</div>
                        </section>        
                    </div></div> 
                <SidebarNew /> 
            </div>
        </>
    )

}
