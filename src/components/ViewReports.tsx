import { Button } from "antd";
import { Field, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import  "../assets/css/main.css";
import { useLocation } from "react-router-dom";

export default function viewReport() { 

    let navigate = useNavigate();
    let location = useLocation()
    console.log(JSON.stringify(location.state));
    console.log(location.state.heartRate.value);
    const padingStyle = {        
        paddingBottem: '10px',
     }
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
                                <h2>Curret Report</h2>
                                <div className="row gtr-uniform">
                                    <div className="col-8 col-12-xsmall">
                                         Heart rate :  {location.state.heartRate.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        Breathing Rate :  {location.state.breathingRate.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        stress :  {location.state.stress.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        hrvSdnn :  {location.state.hrvSdnn.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                        spo2 :  {location.state.spo2.value}
                                    </div>
                                    <div className="col-8 col-12-xsmall">
                                         bloodPressure :  {location.state.bloodPressure.value}
                                    </div>
                                </div>      
                            </div>
							<div className="content">
								<header>
									<h2>View Reports</h2>
									<p>Enter your details to view reports</p>
								</header>
                            </div>                            
                            <Formik  initialValues={{ member:'',report:''}}
                                     onSubmit={(values,  {setSubmitting}) => {
                                            navigate('/addUser',{state:{id:1,name:'sabaoon'}});
                                        }}>
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
                                                            <div className="col-8 col-12-xsmall">
                                                                <select
                                                                        name="weight"
                                                                        value={values.member}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        style={{ display: "block" }}
                                                                        >
                                                                        <option value="" label=" --Select-- ">
                                                                            --Select--{" "}
                                                                        </option>
                                                                        <option value="Self" label="Self">
                                                                            {" "}
                                                                            Self
                                                                        </option>
                                                                        <option value="60" label="Khanak Jha">
                                                                            Khanak Jha
                                                                        </option>
                                                                </select>
                                                            </div>
                                                            <div className="col-4 col-12-xsmall">
																
															</div> 
                                                            <div className="col-12 col-12-small">
                                                                <div>
                                                                <strong>Select Period</strong></div>

                                                                <Field type="radio" name="report" value="currentReport" id="currentReport"/>																
																<label htmlFor="currentReport"> Current Report </label>

                                                                <Field type="radio" name="report" value="7days" id="7days"/>
                                                                <label htmlFor="7days"> Last 7 days </label>

                                                                <Field type="radio" name="report" value="30days" id="30days"/>
                                                                <label htmlFor="30days"> Last 30 days  </label>

                                                                <Field type="radio" name="report" value="all" id="all"/>
                                                                <label htmlFor="all">  All Report </label>																
															</div>
																														
															<div className="col-12 mt-20">
																<ul className="actions">
																	<li><Button className="primary"> Submit </Button></li>
																	<li><Button> Reset </Button></li>
																</ul>
															</div>   
                                                        </div>
                                                    </form>
                                            )}
                            
                            </Formik> 
                        </section>        
                    </div>
                </div>
            </div>
        </>
    )

}