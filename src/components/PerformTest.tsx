import { Button, Input } from "antd";
import { Field, Formik } from "formik";
import React from "react"; 
import { Link,useLocation,useNavigate } from "react-router-dom";
import  "../assets/css/main.css";
import Sidebar from "./SidebarOld";

export default function performTest(){

    let navigate = useNavigate();

    function backButton() {
        navigate(-1);
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
                                    <h2>A bit about your Family/Friend</h2>
                                    <p>Tell us few more details about yourself to generate reports?</p>
                                </header>
                                <Formik  initialValues={{ HeartRate:true,BreathingRate: true, PRQRate: true,OxygenRate:true,
                                                BloodRate:true,HemoglobinRate:true,HbA1cRate:true,StressRate:true,WellnessIndex:true,
                                                StreeRate:true,WellnessLevel:true}}
                                                    onSubmit={async (values,  {setSubmitting}) => {
                                                        await new Promise((r) => setTimeout(r, 500));
                                                         alert(JSON.stringify(values, null, 2));
                                                        navigate('/binah',{state:{id:1,name:'sabaoon'}});                                                        
                                                    }} >
                                                    {({
                                                        values,
                                                        errors,
                                                        touched,
                                                        handleChange,
                                                        handleBlur,
                                                        handleSubmit,
                                                        submitForm,
                                                        isSubmitting,                                                        
                                                      }) => (
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="row gtr-uniform">
                                                                <div className="col-12 col-12-xsmall">
                                                                    How are your feeling today?
                                                                    <p style={{fontSize:"2.5rem"}}><a href="#">&#128546;</a> <a href="#">&#128531; </a> <a href="#">&#128538; </a> <a href="#">&#128553; </a> <a href="#">&#128522;</a></p>
                                                                </div>
                                                                <div className="col-12 col-12-small">Test you want to perform!</div>
                                                                <div className="col-2 col-6-small">
                                                                    <Field type="checkbox" id="Heart-Rate" name="HeartRate" />
                                                                    <label htmlFor="Heart-Rate">Heart Rate</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Breathing-Rate" name="BreathingRate"/>
                                                                    <label htmlFor="Breathing-Rate">Breathing Rate</label></div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="PRQ-Rate" name="PRQRate"/>
                                                                    <label htmlFor="PRQ-Rate">PRQ</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Oxygen-Rate" name="OxygenRate"/>
                                                                    <label htmlFor="Oxygen-Rate">Oxygen Saturation</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Blood-Rate" name="BloodRate"/>
                                                                    <label htmlFor="Blood-Rate">Blood Pressure</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Stress-Rate" name="StressRate"/>
                                                                    <label htmlFor="Stress-Rate">Stress Level</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Recovery-Rate" name="RecoveryRate"/>
                                                                    <label htmlFor="Recovery-Rate">Wellness Index</label>
                                                                </div>
                                                                {/* <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Recovery-Rate" name="RecoveryRate"/>
                                                                    <label htmlFor="Recovery-Rate">Recovery Ability</label>
                                                                </div> */}
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Stree-Rate" name="StreeRate"/>
                                                                    <label htmlFor="Stree-Rate">Stress Response</label>
                                                                </div>
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="HRV-Rate" name="HRVRate" />
                                                                    <label htmlFor="HRV-Rate">Wellness Level</label>
                                                                </div>
                                                                {/* <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="HRV-Rate" name="HRVRate" />
                                                                    <label htmlFor="HRV-Rate">HRV-SDNN</label>
                                                                </div> */}
                                                                <div className="col-3 col-6-small">
                                                                    <Field type="checkbox" id="Hemoglobin-Rate" name="HemoglobinRate"/>
                                                                    <label htmlFor="Hemoglobin-Rate">Hemoglobin</label>
                                                                </div>
                                                                <div className="col-2 col-6-small">
                                                                    <Field type="checkbox" id="HbA1c-Rate" name="HbA1cRate"/>
                                                                    <label htmlFor="HbA1c-Rate">HbA1c</label>
                                                                </div>
                                                                
                                                                <div className="col-12">
                                                                    <ul className="actions">
                                                                        <li className="mt-20"><Button className="primary" onClick={()=> submitForm()}> Submit </Button></li>
                                                                        <li  className="mt-20"><Button> Reset </Button></li>
                                                                    </ul>
															    </div>
                                                            </div>    
                                                        </form>
                                                )
                                            }                              
                                 </Formik>
                            </div>
                        </section>                
                    </div>
                </div>
            </div>
                        
        </>
    )

}