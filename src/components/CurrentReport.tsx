import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import "../assets/css/current-report.css";
import { useLocation } from "react-router-dom";
import Heartrate from "../assets/images/Heart-Rate.svg";
import Breathrate from "../assets/images/Breathing-Rate.svg";
import PQR from "../assets/images/PRQ.svg";
import SpO2 from "../assets/images/Oxygen-Saturation.svg";

import Hemoglobin from "../assets/images/Hemoglobin.svg";
import HemoglobinA1c from "../assets/images/Hemoglobin-A1c.svg";
import StressLevel from "../assets/images/Stress-Level.svg";
import RecoveryAblity from "../assets/images/Recovery-Ability.svg";
// import BloodPressure  from "../assets/images/BloodPressure.svg";
import StressResponse from "../assets/images/Stress-Response.svg";
import HRVSDNN from "../assets/images/HRV-SDNN.svg";
import SidebarNew from "./SidebarNew";
import { getHealthData, saveHealthData } from "./Client";
import Spinner from "./shared/Spinner";

export default function currentReport() {

    let navigate = useNavigate();
    let location = useLocation()
    const [healthList, setHealthList] = useState([])
    const [spinner, setSpinner] = useState(false)
    let meterTransformStyle = { transform: "rotate(-110deg)" };
 
    function binahPage() {
        navigate('/binah');
    }

    const getWhatsappLink = () => {       
        if(healthList.length>0){
            let message=""
            for (let i=0;i<healthList.length;i++) {
                message = message+getMessage(healthList[i]);
            }
            return `https://api.whatsapp.com/send?text=${message}`
        }
    }

    const getMessage = (data) => {
        let time = (location.state.page == 'binah') ? new Date().toLocaleString() : new Date(data.createdAt).toLocaleString()
        delete data.updatedAt;
        delete data.familyId;
        return `--- ${time} ---%0a`+JSON.stringify(data).replace(/,/g, '%0a').replace(/["'}{]/g,"")+"%0a%0a"
    }

    function CurrentDatetime() {
        const date = new Date();
        const datela = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        const showTime = date.getHours()
            + ':' + date.getMinutes();

        return (
            <p><strong>Report on :</strong> {datela} | {showTime}</p>
        );
    }

    const calcDate = (days: number) => {
        var date = new Date();
        date.setDate(date.getDate() - days);
        return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, "0") + '-' + date.getDate().toString().padStart(2, "0");
    }

    type genericObj = {
        familyId?: string,
        // bloodPressure?:string,   					
        systolicBp?: string,
        diastolicBp?: string,
        breathingRate?: string,
        heartRate?: string,
        hemoglobinSign?: string,
        hemoglobinA1C: string
        hrvSdnn?: string,
        lfhf?: string,
        meanRri?: string,
        oxygenSaturation?: string,
        pnsIndex?: string,
        pnsZone?: string,
        prq?: string,
        rmssd?: string,
        sd1?: string,
        sd2?: string,
        sdnn?: string,
        snsIndex?: string,
        snsZone?: string,
        spo2?: string,
        stress?: string,
        stressIndex?: string,
        stressLevel?: string,
        wellnessIndex?: string,
        wellnessLevel?: string
    };
    // console.log("location.state:::::", JSON.stringify(location.state));
    let binahData = location.state.data;
    if (location.state.page == 'binah') {
        const value: genericObj = {
            familyId: localStorage.getItem("familyId"),
            systolicBp: binahData.bloodPressure.value?.systolic != null && binahData.bloodPressure.value?.systolic != undefined && binahData.bloodPressure.value?.systolic != null ? binahData.bloodPressure.value?.systolic : 'N/A',
            diastolicBp: binahData.bloodPressure.value?.diastolic != null && binahData.bloodPressure.value?.diastolic != undefined && binahData.bloodPressure.value?.diastolic != null ? binahData.bloodPressure.value?.diastolic : 'N/A',
            breathingRate: binahData.breathingRate != null && binahData.breathingRate != undefined && binahData.breathingRate.value != null ? binahData.breathingRate.value : 'N/A',
            heartRate: binahData.heartRate != null && binahData.heartRate != undefined && binahData.heartRate.value != null ? binahData.heartRate.value : 'N/A',
            hemoglobinSign: binahData.hemoglobinSign != null && binahData.hemoglobinSign != undefined && binahData.hemoglobinSign.value != null ? binahData.hemoglobinSign.value : 'N/A',
            hemoglobinA1C: binahData.hemoglobinA1C != null && binahData.hemoglobinA1C != undefined && binahData.hemoglobinA1C.value != null ? binahData.hemoglobinA1C.value : 'N/A',
            hrvSdnn: binahData.hrvSdnn != null && binahData.hrvSdnn != undefined && binahData.hrvSdnn.value != null ? binahData.hrvSdnn.value : 'N/A',
            lfhf: binahData.lfhf != null && binahData.lfhf != undefined && binahData.lfhf.value != null ? binahData.lfhf.value : 'N/A',
            meanRri: binahData.meanRri != null && binahData.meanRri != undefined && binahData.meanRri.value != null ? binahData.meanRri.value : 'N/A',
            oxygenSaturation: binahData.oxygenSaturation != null && binahData.oxygenSaturation != undefined && binahData.oxygenSaturation.value != null ? binahData.oxygenSaturation.value : 'N/A',
            pnsIndex: binahData.pnsIndex != null && binahData.pnsIndex != undefined && binahData.pnsIndex.value != null ? binahData.pnsIndex.value : 'N/A',
            pnsZone: binahData.pnsZone != null && binahData.pnsZone != undefined && binahData.pnsZone.value != null ? binahData.pnsZone.value : 'N/A',
            prq: binahData.prq != null && binahData.prq != undefined && binahData.prq.value != null ? binahData.prq.value : 'N/A',
            rmssd: binahData.rmssd != null && binahData.rmssd != undefined && binahData.rmssd.value != null ? binahData.rmssd.value : 'N/A',
            sd1: binahData.sd1 != null && binahData.sd1 != undefined && binahData.sd1.value != null ? binahData.sd1.value : 'N/A',
            sd2: binahData.sd2 != null && binahData.sd2 != undefined && binahData.sd2.value != null ? binahData.sd2.value : 'N/A',
            sdnn: binahData.sdnn != null && binahData.sdnn != undefined && binahData.sdnn.value != null ? binahData.sdnn.value : 'N/A',
            snsIndex: binahData.snsIndex != null && binahData.snsIndex != undefined && binahData.snsIndex.value != null ? binahData.snsIndex.value : 'N/A',
            snsZone: binahData.snsZone != null && binahData.snsZone != undefined && binahData.snsZone.value != null ? binahData.snsZone.value : 'N/A',
            stress: binahData.stress != null && binahData.stress != undefined && binahData.stress.value != null ? binahData.stress.value : 'N/A',
            stressIndex: binahData.stressIndex != null && binahData.stressIndex != undefined && binahData.stressIndex.value != null ? binahData.stressIndex.value : 'N/A',
            stressLevel: binahData.stressLevel != null && binahData.stressLevel != undefined && binahData.stressLevel.value != null ? binahData.stressLevel.value : 'N/A',
            wellnessIndex: binahData.wellnessIndex != null && binahData.wellnessIndex != undefined && binahData.wellnessIndex.value != null ? binahData.wellnessIndex.value : 'N/A',
            wellnessLevel: binahData.wellnessLevel != null && binahData.wellnessLevel != undefined && binahData.wellnessLevel.value != null ? binahData.wellnessLevel.value : 'N/A',
        }
        useEffect(() => {
          setSpinner(true);
          setHealthList([value]);
          saveHealthData(value)
            .then((res) => {
              setSpinner(false);
            })
            .catch((err) => {
              setSpinner(false);
              console.log("error => " + err);
            });
        }, []);
    }

    if (location.state.page == 'viewReport') {
        let fromDate = calcDate(location.state.data.report)
        const data = {
            familyId: localStorage.getItem("familyId"),
            fromDate: fromDate,
            toDate: calcDate(0),
            currentDate: fromDate == new Date().toISOString().substring(0, 10) ? true : false
        }
        useEffect(() => {
            setSpinner(true);
            getHealthData(data).then((res) =>
                res.json().then((response) => {
                    setHealthList(response.data);
                    setSpinner(false);

                })
                    .catch((err) => {
                        setSpinner(false);
                        console.log("error => " + err);
                    })
            );
        }, []);
    }
    let meterResult = "N/A"
    let indicator = "low"
    
    if (healthList.length > 0 && healthList[0].wellnessLevel && healthList[0].wellnessLevel != "N/A") {
        let indicatorSign = ["low","medium","high"]
        // indicator = indicatorSign[(Math.round(healthList[0].wellnessIndex / 3.33))-1]     
        indicator = indicatorSign[(healthList[0].wellnessLevel)-1] 
        // console.log("wellnessLevel:::", healthList[0].wellnessLevel)
    
    }
    if (healthList.length > 0 && healthList[0].wellnessIndex && healthList[0].wellnessIndex != "N/A") {
        meterResult = healthList[0]?.wellnessIndex + "/10"
        let degree = -110 + 22 * healthList[0].wellnessIndex;
        meterTransformStyle = { transform: `rotate(${degree}deg)` };
        // console.log("wellnessIndex:::", healthList[0].wellnessIndex)
    }



    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">

                        <section id="banner">
                            <div className="content">
                                <CurrentDatetime />

                                <div className="score">
                                    <div className="meter">
                                        <svg width="327" height="250" id="meter" viewBox="0 0 327 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="14" y="9" width="301" height="202" fill="#db0000" />
                                            <path d="M239.772 49.4556C244.43 43.0045 253.464 41.4512 259.516 46.6171C270.965 56.3903 280.907 67.765 289.025 80.3783C293.396 87.1699 290.473 96.0346 283.259 99.665L211.127 135.96C197.546 142.794 183.924 126.811 192.823 114.485L239.772 49.4556Z" fill="#EE952C" />
                                            <path d="M25.8782 210.701C18.3813 213.426 10.0168 209.605 7.95331 201.9C0.679942 174.742 1.07306 146.032 9.23397 118.929C18.7845 87.2122 38.461 59.3983 65.3263 39.6394C92.1916 19.8805 124.805 9.23643 158.297 9.29607C186.857 9.34693 214.75 17.1783 238.961 31.7942C245.884 35.9735 247.169 45.232 242.28 51.6735L197.01 111.32C192.2 117.657 183.205 118.709 175.744 115.947C170.142 113.874 164.176 112.787 158.117 112.776C147.22 112.757 136.61 116.219 127.869 122.648C119.129 129.076 112.727 138.125 109.62 148.444C107.932 154.051 107.265 159.869 107.612 165.634C108.096 173.685 104.452 182.148 96.8709 184.903L25.8782 210.701Z" fill="url(#paint0_linear_498_1159)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H326.285V221.242H0V0ZM34.6883 206.881C27.2032 209.764 18.7216 206.046 16.606 198.308C11.7205 180.441 10.3127 161.752 12.5111 143.268C15.2828 119.964 23.7028 97.6888 37.0397 78.3781C50.3766 59.0674 68.2269 43.3052 89.0398 32.461C109.853 21.6167 132.999 16.0184 156.467 16.1524C179.935 16.2863 203.016 22.1486 223.703 33.2297C244.391 44.3109 262.06 60.2759 275.176 79.7376C288.291 99.1993 296.457 121.569 298.962 144.904C300.949 163.412 299.328 182.082 294.239 199.893C292.035 207.606 283.512 211.228 276.06 208.259L239.45 193.676C231.999 190.707 228.516 182.258 230.009 174.377C231.388 167.098 231.695 159.63 230.899 152.212C229.583 139.959 225.296 128.213 218.409 117.994C211.522 107.774 202.244 99.3914 191.381 93.5728C180.518 87.7542 168.399 84.676 156.076 84.6057C143.753 84.5353 131.599 87.475 120.671 93.1692C109.742 98.8634 100.369 107.14 93.3662 117.28C86.3631 127.42 81.9419 139.116 80.4865 151.353C79.6053 158.762 79.8275 166.233 81.123 173.527C82.5256 181.425 78.9471 189.834 71.462 192.717L34.6883 206.881ZM96.5323 176.472C97.1844 178.411 99.3523 179.328 101.25 178.565C103.148 177.802 104.056 175.648 103.418 173.704C100.905 166.041 100.05 157.916 100.928 149.87C101.939 140.596 105.223 131.713 110.488 124.011C115.752 116.308 122.835 110.022 131.109 105.711C139.383 101.399 148.593 99.1946 157.922 99.2925C167.252 99.3904 176.413 101.788 184.595 106.272C192.777 110.756 199.726 117.189 204.828 125C209.93 132.812 213.026 141.761 213.843 151.055C214.552 159.117 213.526 167.223 210.853 174.832C210.175 176.761 211.037 178.934 212.919 179.737C214.8 180.539 216.987 179.668 217.679 177.743C220.822 169.009 222.038 159.682 221.222 150.407C220.298 139.899 216.798 129.781 211.03 120.95C205.262 112.118 197.405 104.846 188.155 99.7761C178.905 94.7064 168.548 91.9962 158 91.8855C147.452 91.7748 137.04 94.2671 127.686 99.1416C118.332 104.016 110.324 111.122 104.372 119.831C98.4202 128.539 94.7078 138.581 93.5639 149.067C92.554 158.324 93.5731 167.674 96.5323 176.472Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_498_1159" x1="364.347" y1="300.909" x2="-48.8075" y2="255.096" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0677083" stopColor="#1663D6" />
                                                    <stop offset="0.786458" stopColor="#01C738" />
                                                </linearGradient>
                                            </defs>
                                        </svg><svg width="30" height="144" id="needle" style={meterTransformStyle} viewBox="0 0 30 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15.2089" cy="128.608" r="10.9086" fill="white" stroke="#01C738" strokeWidth="7" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3486 0.920656L25.3277 127.679L25.3166 127.679C25.322 127.833 25.3239 127.988 25.322 128.144C25.2587 133.535 20.8377 137.853 15.4474 137.79C10.0571 137.726 5.73875 133.305 5.80203 127.915C5.80386 127.759 5.80934 127.604 5.81838 127.45L5.80766 127.45L17.3486 0.920656ZM19.2238 134.487C22.4036 132.316 23.2212 127.978 21.0498 124.798C18.8784 121.618 14.5404 120.801 11.3606 122.972C8.18076 125.144 7.36323 129.482 9.53459 132.661C11.706 135.841 16.044 136.659 19.2238 134.487Z" fill="url(#paint0_linear_498_1180)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_498_1180" x1="8.57715" y1="129.079" x2="18.8019" y2="129.199" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.6874" stopColor="#3F4142" />
                                                    <stop offset="0.6875" stopColor="#2C2C2C" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h3>{meterResult}</h3>
                                    </div>

                                    <div className="result-score-text"><h3>Your Welness Score is {indicator}.</h3>
                                        <p>The Wellness Score is based on the vital signs measured by Binah's technology, and is designed to serve as reference when measured at rest, under similar conditions during all of the measurements over time.</p>
                                        <p><i>*The measured indicators are not intended for medical use</i></p></div>
                                </div>

                                {spinner && <Spinner />}
                                <p id="parameter_disclaimer">** Marked parameters are presently under clinical research.</p>

                                <ul className="result">


                                    {healthList.map((d, id) => {
                                        return (
                                            <>
                                                <span className="reportBreak" key={id + "time"}>{((d && d.createdAt) ? (new Date(d.createdAt)) : (new Date())).toLocaleString()}</span>
                                                <span key={id}>
                                                    <li key={id + d.familyId + "hr"} ><p className="r-icon"><img src={Heartrate} /> Heart Rate</p><p><strong>{d.heartRate ? d.heartRate : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "br"} ><p className="r-icon"><img src={Breathrate} /> Breathing Rate</p><p><strong>{d.breathingRate ? d.breathingRate : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "prq"} ><p className="r-icon"><img src={PQR} /> PRQ</p><p><strong>{d.prq ? d.prq : "N/A"}</strong></p></li>
                                                    {/* <li key={id + d.familyId + "bp-d"} ><p className="r-icon"><img src={SpO2} /> Blood Pressure(D)</p><p><strong>{d.diastolicBp ? d.diastolicBp : "N/A"}</strong></p></li> */}
                                                    {/* <li key={id + d.familyId + "bp-s"} ><p className="r-icon"><img src={StressResponse} /> Blood Pressure(S)</p><p><strong>{d.systolicBp ? d.systolicBp : "N/A"}</strong></p></li> */}
                                                    <li key={id + d.familyId + "bp-s"} ><p className="r-icon"><img src={HRVSDNN} /> Blood Pressure</p><p><strong>{(d.systolicBp && d.diastolicBp) ? (d.systolicBp+"/"+d.diastolicBp) : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "hga1"} ><p className="r-icon"><img src={HemoglobinA1c} /> Hemoglobin A1c**</p><p><strong>{d.hemoglobinA1C ? d.hemoglobinA1C : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "hg"} ><p className="r-icon"><img src={Hemoglobin} /> Hemoglobin</p><p><strong>{d.hemoglobinSign ? d.hemoglobinSign : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sl"} ><p className="r-icon"><img src={StressLevel} /> Stress Level</p><p><strong>{d.stressLevel ? d.stressLevel : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "wi"} ><p className="r-icon"><img src={RecoveryAblity} /> Wellness Index</p><p><strong>{d.wellnessIndex ? d.wellnessIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "wl"} ><p className="r-icon"><img src={HRVSDNN} /> Wellness Level</p><p><strong>{d.wellnessLevel ? d.wellnessLevel : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "hrvsdnn"} ><p className="r-icon"><img src={HRVSDNN} /> HRV-SDNN</p><p><strong>{d.hrvSdnn ? d.hrvSdnn : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "lfhd"} ><p className="r-icon"><img src={HRVSDNN} /> LF/HF </p><p><strong>{d.lfhf ? d.lfhf : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "meanRri"} ><p className="r-icon"><img src={HRVSDNN} /> Mean RRi</p><p><strong>{d.meanRri ? d.meanRri : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "os"} ><p className="r-icon"><img src={HRVSDNN} /> Oxygen Saturation</p><p><strong>{d.oxygenSaturation ? d.oxygenSaturation : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "pnsIndex"} ><p className="r-icon"><img src={HRVSDNN} /> PNS Index</p><p><strong>{d.pnsIndex ? d.pnsIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "pnsZone"} ><p className="r-icon"><img src={HRVSDNN} /> PNS Zone</p><p><strong>{d.pnsZone ? d.pnsZone : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "rmssd"} ><p className="r-icon"><img src={HRVSDNN} /> RMSSD</p><p><strong>{d.rmssd ? d.rmssd : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sd1"} ><p className="r-icon"><img src={HRVSDNN} /> SD1</p><p><strong>{d.sd1 ? d.sd1 : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sd2"} ><p className="r-icon"><img src={HRVSDNN} /> SD2</p><p><strong>{d.sd2 ? d.sd2 : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sdnn"} ><p className="r-icon"><img src={HRVSDNN} /> SDNN</p><p><strong>{d.sdnn ? d.sdnn : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "snsIndex"} ><p className="r-icon"><img src={HRVSDNN} /> SNS Index</p><p><strong>{d.snsIndex ? d.snsIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "snsZone"} ><p className="r-icon"><img src={RecoveryAblity} /> SNS Zone</p><p><strong>{d.snsZone ? d.snsZone : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "stressIndex"} ><p className="r-icon"><img src={HRVSDNN} /> Stress Index</p><p><strong>{d.stressIndex ? d.stressIndex : "N/A"}</strong></p></li>
                                                    {/* <li><p className="r-icon"><img src={RecoveryAblity}/> Recovery Ability</p><p><strong>N/A</strong></p></li> */}
                                                    {/* <li><p className="r-icon"><img src={HRVSDNN}/> HRV-SDNN</p><p><strong>{d.hrvSdnn}</strong></p></li> */}
                                                </span>
                                            </>
                                        )
                                    })}


                                </ul>
                                <p id="reportButtons" className="clear text-center">
                                    <a href={getWhatsappLink()} data-action="share/whatsapp/share" target="_blank"
                                        className="button icon solid fa-share"> Share</a>
                                    &nbsp;
                                    <a href="#" className="button primary" onClick={() => binahPage()}> Test Again</a>
                                </p>
                            </div>
                        </section>
                    </div></div>
                <SidebarNew />
            </div>
        </>
    )

}

