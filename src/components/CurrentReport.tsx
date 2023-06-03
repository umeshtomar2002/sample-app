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
import { Collapse } from 'antd';

const { Panel } = Collapse;

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
        if (healthList.length > 0) {
            let message = ""
            for (let i = 0; i < healthList.length; i++) {
                message = message + getMessage(healthList[i]);
            }
            return `https://api.whatsapp.com/send?text=${message}`
        }
    }

    const getMessage = (data) => {
        let time = (location.state.page == 'binah') ? new Date().toLocaleString() : new Date(data.createdAt).toLocaleString()
        delete data.updatedAt;
        delete data.familyId;
        return `--- ${time} ---%0a` + JSON.stringify(data).replace(/,/g, '%0a').replace(/["'}{]/g, "") + "%0a%0a"
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


    const getCurrentDate = () => {
        var date = new Date();
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
            currentDate: fromDate == getCurrentDate() ? true : false
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

    const getMeterResult = (index) => {
        let meterResult = "N/A"

        if (healthList.length > 0 && healthList[index].wellnessIndex && healthList[index].wellnessIndex != "N/A") {
            meterResult = healthList[index]?.wellnessIndex + "/10"
            let degree = -110 + 22 * healthList[index].wellnessIndex;
            meterTransformStyle = { transform: `rotate(${degree}deg)` };
            // console.log("wellnessIndex:::", healthList[0].wellnessIndex)
        }
        return meterResult
    }

    const getIndicator = (index) => {
        let indicator = "low"
        if (healthList.length > 0 && healthList[index].wellnessLevel && healthList[index].wellnessLevel != "N/A") {
            let indicatorSign = ["low", "medium", "high"]
            // indicator = indicatorSign[(Math.round(healthList[index].wellnessIndex / 3.33))-1]     
            indicator = indicatorSign[(healthList[index].wellnessLevel) - 1]
            // console.log("wellnessLevel:::", healthList[index].wellnessLevel)

        }
        return indicator
    }

    const getBloodPressure = (d) => {
        if (d.systolicBp && d.diastolicBp && d.systolicB != "N/A" && d.diastolicBp != "N/A") {
            return (d.systolicBp + "/" + d.diastolicBp)
        }
        return "N/A"
    }

    // const getCurrentReport = () => {
    //     if(healthList.length>0){
    //         return(

    //         )
    //     }
    //     return (
    //         <div>No Records Found</div>
    //     )
    // }
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    const getReportText = (d) => {
        return (
            "Report On: " + ((d && d.createdAt) ? (new Date(d.createdAt)) : (new Date())).toLocaleString()
        )
        
        {/* <p className="reportBreak">Report On: <span key={id + "time"}>{((d && d.createdAt) ? (new Date(d.createdAt)) : (new Date())).toLocaleString()}</span></p> */ }

    }
    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">

                        <section id="banner">
                            <div className="content">
                                {/* <CurrentDatetime /> */}



                                {spinner && <Spinner />}

                                <Collapse defaultActiveKey={['0']}>
                                    {healthList.map((d, id) => {
                                        return (
                                            <>
                                                <Panel header={getReportText(d).toString()} key={id}>
                                                <div className="score">
                                                    <div className="meter">
                                                        <svg viewBox="10.803 2.322 487.13 351.337" id="meter" width="327" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="21.501" y="25.69" width="445.016" height="312.142" fill="#db0000"></rect>
                                                            <path d="M 52.278 119.742 C 59.165 109.772 214.444 1.72 223.392 9.703 C 240.319 24.805 399.305 78.651 411.307 98.142 C 417.769 108.637 413.448 122.336 402.782 127.945 L 296.138 206.107 C 276.059 216.667 158.938 218.777 172.095 199.73 L 52.278 119.742 Z" fill="#EE952C"></path>
                                                            <path d="M 140.524 36.175 C 129.44 31.964 117.072 37.868 114.022 49.775 C 103.269 91.741 103.85 136.105 115.916 177.986 C 130.035 226.997 128.822 283.968 164.617 261.382 C 174.853 254.924 298.921 165.302 298.921 165.302 C 291.81 155.51 256.692 80.297 245.482 76.039 L 140.524 36.175 Z" fill="url(#paint0_linear_498_1159)" transform="matrix(-1, 0, 0, -1, 571.195199, 382.217932)"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M 10.803 11.783 L 497.933 2.322 L 493.202 353.659 L 10.803 353.659 L 10.803 11.783 Z M 62.088 331.467 C 51.022 335.922 38.481 330.177 35.354 318.22 C 28.131 290.611 26.049 261.731 29.3 233.169 C 33.397 197.158 45.845 162.738 65.564 132.897 C 85.282 103.057 111.672 78.7 142.444 61.944 C 173.216 45.187 207.437 36.535 242.133 36.742 C 276.83 36.949 310.954 46.009 341.539 63.132 C 372.125 80.255 398.248 104.925 417.64 134.999 C 437.03 165.071 449.103 199.638 452.806 235.697 C 455.744 264.297 453.347 293.146 445.824 320.669 C 442.565 332.588 429.964 338.185 418.947 333.597 L 364.82 311.062 C 353.804 306.474 348.655 293.418 350.862 281.24 C 352.901 269.992 353.355 258.452 352.178 246.99 C 350.232 228.056 343.894 209.905 333.712 194.114 C 323.53 178.322 309.813 165.368 293.752 156.377 C 277.692 147.385 259.774 142.629 241.555 142.521 C 223.336 142.411 205.367 146.954 189.21 155.753 C 173.052 164.552 159.195 177.342 148.841 193.011 C 138.487 208.68 131.949 226.753 129.798 245.662 C 128.496 257.111 128.824 268.656 130.74 279.927 C 132.813 292.131 127.523 305.125 116.457 309.58 L 62.088 331.467 Z M 153.522 284.478 C 154.486 287.474 157.691 288.891 160.497 287.712 C 163.303 286.533 164.646 283.204 163.702 280.2 C 159.987 268.359 158.723 255.804 160.021 243.371 C 161.516 229.04 166.371 215.313 174.155 203.412 C 181.938 191.509 192.41 181.795 204.642 175.134 C 216.875 168.471 230.492 165.065 244.284 165.215 C 258.078 165.366 271.623 169.072 283.719 176.001 C 295.816 182.929 306.09 192.87 313.633 204.94 C 321.176 217.012 325.753 230.84 326.961 245.202 C 328.009 257.66 326.493 270.185 322.541 281.943 C 321.538 284.924 322.813 288.282 325.595 289.523 C 328.376 290.762 331.61 289.416 332.633 286.442 C 337.279 272.945 339.077 258.533 337.871 244.2 C 336.505 227.963 331.33 212.328 322.802 198.682 C 314.275 185.034 302.658 173.797 288.983 165.963 C 275.307 158.128 259.994 153.94 244.4 153.769 C 228.805 153.599 213.411 157.45 199.582 164.983 C 185.752 172.514 173.913 183.495 165.113 196.953 C 156.313 210.409 150.823 225.926 149.132 242.13 C 147.64 256.434 149.147 270.882 153.522 284.478 Z" fill="white"></path>
                                                            <defs>
                                                                <linearGradient id="paint0_linear_498_1159" x1="364.347" y1="300.909" x2="-48.8075" y2="255.096" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.47846, 0, 0, -1.545257, 102.263957, 361.762299)">
                                                                    <stop offset="0.0677" stopColor="#1663D6" />
                                                                    <stop offset="0.7865" stopColor="#01C738" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                        <svg width="30" height="144" id="needle" style={meterTransformStyle} viewBox="0 0 30 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15.2089" cy="128.608" r="10.9086" fill="white" stroke="#01C738" strokeWidth="7" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3486 0.920656L25.3277 127.679L25.3166 127.679C25.322 127.833 25.3239 127.988 25.322 128.144C25.2587 133.535 20.8377 137.853 15.4474 137.79C10.0571 137.726 5.73875 133.305 5.80203 127.915C5.80386 127.759 5.80934 127.604 5.81838 127.45L5.80766 127.45L17.3486 0.920656ZM19.2238 134.487C22.4036 132.316 23.2212 127.978 21.0498 124.798C18.8784 121.618 14.5404 120.801 11.3606 122.972C8.18076 125.144 7.36323 129.482 9.53459 132.661C11.706 135.841 16.044 136.659 19.2238 134.487Z" fill="url(#paint0_linear_498_1180)" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_498_1180" x1="8.57715" y1="129.079" x2="18.8019" y2="129.199" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.6874" stopColor="#3F4142" />
                                                                    <stop offset="0.6875" stopColor="#2C2C2C" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                        <h3 className="meterResult">{getMeterResult(id)}</h3>
                                                    </div>

                                                    <div className="result-score-text"><h3>Your Wellness Score is {getIndicator(id)}.</h3>
                                                        <p>The Wellness Score is based on the vital signs measured by Binah's technology, and is designed to serve as reference when measured at rest, under similar conditions during all of the measurements over time.</p>
                                                        <p><i>*The measured indicators are not intended for medical use</i></p></div>
                                                </div>
                                                <ul className="result">
                                                    
                                                
                                                <span key={id}>
                                                    <li key={id + d.familyId + "hr"} ><p className="r-icon"><img src={Heartrate} /> Heart Rate</p><p><strong>{d.heartRate ? d.heartRate : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "br"} ><p className="r-icon"><img src={Breathrate} /> Breathing Rate</p><p><strong>{d.breathingRate ? d.breathingRate : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "prq"} ><p className="r-icon"><img src={PQR} /> PRQ</p><p><strong>{d.prq ? d.prq : "N/A"}</strong></p></li>
                                                    {/* <li key={id + d.familyId + "bp-d"} ><p className="r-icon"><img src={SpO2} /> Blood Pressure(D)</p><p><strong>{d.diastolicBp ? d.diastolicBp : "N/A"}</strong></p></li> */}
                                                    {/* <li key={id + d.familyId + "bp-s"} ><p className="r-icon"><img src={StressResponse} /> Blood Pressure(S)</p><p><strong>{d.systolicBp ? d.systolicBp : "N/A"}</strong></p></li> */}
                                                    <li key={id + d.familyId + "bp-s"} ><p className="r-icon"><img src={HRVSDNN} /> Blood Pressure</p><p><strong>{getBloodPressure(d)}</strong></p></li>
                                                    <li key={id + d.familyId + "hga1"} ><p className="r-icon"><img src={HemoglobinA1c} /> Hemoglobin A1c**</p><p><strong>{d.hemoglobinA1C ? d.hemoglobinA1C : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "hg"} ><p className="r-icon"><img src={Hemoglobin} /> Hemoglobin**</p><p><strong>{d.hemoglobinSign ? d.hemoglobinSign : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sl"} ><p className="r-icon"><img src={StressLevel} /> Stress Level</p><p><strong>{d.stressLevel ? d.stressLevel : "N/A"}</strong></p></li>
                                                    {/* <li key={id + d.familyId + "wi"} ><p className="r-icon"><img src={RecoveryAblity} /> Wellness Index</p><p><strong>{d.wellnessIndex ? d.wellnessIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "wl"} ><p className="r-icon"><img src={HRVSDNN} /> Wellness Level</p><p><strong>{d.wellnessLevel ? d.wellnessLevel : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "hrvsdnn"} ><p className="r-icon"><img src={HRVSDNN} /> HRV-SDNN</p><p><strong>{d.hrvSdnn ? d.hrvSdnn : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "lfhd"} ><p className="r-icon"><img src={HRVSDNN} /> LF/HF </p><p><strong>{d.lfhf ? d.lfhf : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "meanRri"} ><p className="r-icon"><img src={HRVSDNN} /> Mean RRi</p><p><strong>{d.meanRri ? d.meanRri : "N/A"}</strong></p></li> */}
                                                    <li key={id + d.familyId + "os"} ><p className="r-icon"><img src={HRVSDNN} /> Oxygen Saturation</p><p><strong>{d.oxygenSaturation ? d.oxygenSaturation : "N/A"}</strong></p></li>
                                                    {/* <li key={id + d.familyId + "pnsIndex"} ><p className="r-icon"><img src={HRVSDNN} /> PNS Index</p><p><strong>{d.pnsIndex ? d.pnsIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "pnsZone"} ><p className="r-icon"><img src={HRVSDNN} /> PNS Zone</p><p><strong>{d.pnsZone ? d.pnsZone : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "rmssd"} ><p className="r-icon"><img src={HRVSDNN} /> RMSSD</p><p><strong>{d.rmssd ? d.rmssd : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sd1"} ><p className="r-icon"><img src={HRVSDNN} /> SD1</p><p><strong>{d.sd1 ? d.sd1 : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sd2"} ><p className="r-icon"><img src={HRVSDNN} /> SD2</p><p><strong>{d.sd2 ? d.sd2 : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "sdnn"} ><p className="r-icon"><img src={HRVSDNN} /> SDNN</p><p><strong>{d.sdnn ? d.sdnn : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "snsIndex"} ><p className="r-icon"><img src={HRVSDNN} /> SNS Index</p><p><strong>{d.snsIndex ? d.snsIndex : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "snsZone"} ><p className="r-icon"><img src={RecoveryAblity} /> SNS Zone</p><p><strong>{d.snsZone ? d.snsZone : "N/A"}</strong></p></li>
                                                    <li key={id + d.familyId + "stressIndex"} ><p className="r-icon"><img src={HRVSDNN} /> Stress Index</p><p><strong>{d.stressIndex ? d.stressIndex : "N/A"}</strong></p></li> */}
                                                    {/* <li><p className="r-icon"><img src={RecoveryAblity}/> Recovery Ability</p><p><strong>N/A</strong></p></li> */}
                                                    {/* <li><p className="r-icon"><img src={HRVSDNN}/> HRV-SDNN</p><p><strong>{d.hrvSdnn}</strong></p></li> */}
                                                </span>
                                                </ul>
                                                </Panel>
                                            </>
                                        )
                                    })}

                                </Collapse>
                                <ul className="result">

                                    <p id="parameter_disclaimer">** Marked parameters are presently under clinical research.</p>
                                </ul>
                                <p id="reportButtons" className="clear text-center">
                                    <a href={getWhatsappLink()} data-action="share/whatsapp/share" target="_blank"
                                        className="button icon solid fa-share"> Share</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

