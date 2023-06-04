import { Button, Tag } from "antd";
import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import { useLocation } from "react-router-dom";
import SidebarNew from "./SidebarNew";
import { getHealthData, getfamilyDetails, getloginUserDetails } from "./Client";
import Select from 'react-select';

export default function viewReport() {

    let navigate = useNavigate();
    let location = useLocation()
    const [error,setError]= useState("")

    const tagStyle = { backgroundColor: '#f50' };

    const padingStyle = {
        paddingBottem: '10px',
    }

    const [family, setFamily] = useState([]);
    useEffect(() => {
        const userDetails = { userId: getloginUserDetails() }
        getfamilyDetails(userDetails).then(res => res.json().then(family1 => { setFamily(family1.data) }));
    }, []);

    // const calcDate = (days: number) => {
    //     var date = new Date();
    //     date.setDate(date.getDate() - days);
    //     return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    // }

    const calcDate = (days: number) => {
        var date = new Date();
        date.setDate(date.getDate() - days);
        return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, "0") + '-' + date.getDate().toString().padStart(2, "0");
    }

    const getCurrentDate = () => {
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, "0") + '-' + date.getDate().toString().padStart(2, "0");
    }

    const getOptions = () => {
        let options = []
        {family.map((data, id) => {
            options.push({"value":data.familyId, "label":data.fullname})
        })} 

        return options;
    }

    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <SidebarNew />
                    <div className="inner">
                        <header id="header">
                            {/* <ul className="icons">
								<li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li>
							</ul> */}
                        </header>
                        <section id="inside">
                            <div className="content">
                                <header>
                                    <h2>View Reports</h2>
                                    <p>Enter your details to view reports</p>
                                </header>
                            </div>
                            <Formik initialValues={{ member: '', report: '' }}
                                validate={values => {
                                    type ErrorT = {
                                        member?: string;
                                        report?: string;
                                    }
                                    const errors: ErrorT = {};
                                    if (values.member == '-1') {
                                        errors.member = 'Select member';
                                    }
                                    if (values.report == '') {
                                        errors.report = 'Select period';
                                    }
                                    setError("")                          
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    console.log("report::::", values.report);
                                    let state = { page: 'viewReport', data: values }
                                    localStorage.setItem('familyId', values.member);
                                    let fromDate = calcDate(parseInt(values.report))
                                    let currentDateFlag = fromDate == getCurrentDate() ? true : false
                                    const data = {
                                        familyId: localStorage.getItem("familyId"),
                                        fromDate: currentDateFlag ? "" : fromDate,
                                        toDate: currentDateFlag ? "" : calcDate(0),
                                        // currentDate: false,
                                        limit: currentDateFlag ? 1 : ""
                                    }
                                    console.log("header::::", data);

                                    let response = getHealthData(data)
                                    response.then((res) => {
                                        res.json().then(respData => {
                                            if(respData.data.length > 0){
                                                // let state = { page: 'viewReport', data: values }
                                                // localStorage.setItem('familyId', values.member);
                                                navigate('/currentReport', { state });
                                            }else{
                                                setError("No Data Found")
                                            }
                                        });
                                    }).catch(error => {
                                        console.log("error =========> " + error.status);
                                    })


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

                                            <Select
                                                // value={values.member}
                                                // style={{ display: "block" }}
                                                onChange={(e) => {values.member=e.value}}
                                                placeholder="Select Member"
                                                // onChange={(e) => {saveUserPage('update', e.target.value)}}
                                                options={getOptions()}
                                            />
                                                {/* <select
                                                    name="member"
                                                    value={values.member}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ display: "block" }}
                                                >
                                                    <option key="temp" value="-1" label=" --Select-- ">
                                                        --Select--
                                                    </option>
                                                    {family.map((data, id) => {
                                                        return <option key={data.familyId} value={data.familyId} label={data.fullname}>                                                                                           {" "}
                                                            {data.fullname}
                                                        </option>
                                                    })}
                                                </select> */}
                                                
                                                {errors.member && touched.member && errors.member && <Tag style={tagStyle}>{errors.member}</Tag>}
                                            </div>
                                            <div className="col-4 col-12-xsmall">

                                            </div>
                                            <div className="col-12 col-12-small">
                                                <div>
                                                    <strong>Select Period</strong></div>

                                                <Field type="radio" name="report" value="0" id="currentReport" />
                                                <label htmlFor="currentReport"> Current Report </label>

                                                <Field type="radio" name="report" value="7" id="7days" />
                                                <label htmlFor="7days"> Last 7 days </label>

                                                <Field type="radio" name="report" value="30" id="30days" />
                                                <label htmlFor="30days"> Last 30 days  </label>

                                                <Field type="radio" name="report" value="100" id="all" />
                                                <label htmlFor="all">  All Report </label>

                                                {errors.report && touched.report && errors.report && <Tag style={tagStyle}>{errors.report}</Tag>}
                                            </div>
                                                { error && <div>{error}</div>}
                                            <div className="col-12 mt-20">
                                                <ul className="actions">
                                                    <li><Button className="primary" onClick={() => submitForm()}> Submit </Button></li>
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