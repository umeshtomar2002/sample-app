import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import { Field, Formik } from "formik";
import { Button, Input, Switch, Tag } from "antd";
import { getloginUserDetails, saveUserDetails } from "./Client";
import SidebarNew from "./SidebarNew";
import { CalendarOutlined } from "@ant-design/icons";

const tagStyle = { color: 'red' };

export default function saveUser() {

    let userDetails = useLocation();
    let navigate = useNavigate();
    console.log("userDetails =====> " + JSON.stringify(userDetails));

    const [currentDetails, setCurrentDetails] = useState(userDetails.state != null && userDetails.state != '' ? userDetails.state.data : null)

    console.log("currentDetails =====> " + JSON.stringify(currentDetails));

    const checkData = (feild: string) => {
        switch (feild) {
            case 'fullname':
                return !(currentDetails.fullName != null && currentDetails.fullName != '')

            case 'email':
                return !(currentDetails.email != null && currentDetails.email != '')

            case 'mobileNo':
                return !(currentDetails.mobileNo != null && currentDetails.mobileNo != '')

            case 'dob':
                return !(currentDetails.dob != null && currentDetails.dob != '')

            case 'gender':
                return !(currentDetails.gender != null && currentDetails.gender != '')

            case 'height':
                return !(currentDetails.height != null && currentDetails.height != '')

            case 'weight':
                return !(currentDetails.weight != null && currentDetails.weight != '')

            default:
                return false;
        }
    }

    const getData = (field: string) => {
        switch (field) {
            case 'fullname':
                return currentDetails?.fullname ? currentDetails?.fullname : ""
            case 'email':
                return currentDetails?.email ? currentDetails?.email : ""
            case 'mobileNo':
                return currentDetails?.mobileNo ? currentDetails?.mobileNo : ""
            case 'dob':
                return currentDetails?.dob ? new Date(currentDetails?.dob).toISOString().split('T')[0] : ""
            case 'gender':
                return currentDetails?.gender ? currentDetails?.gender : ""
            case 'height':
                return currentDetails?.height ? currentDetails?.height : ""
            case 'weight':
                return currentDetails?.weight ? currentDetails?.weight : ""
            case 'userId':
                return currentDetails?.userId ? currentDetails?.userId : ""
            case 'familyId':
                return currentDetails?.familyId ? currentDetails?.familyId : ""
            default:
                return false;
        }
    }

    const getAge = (dateString: string) => {
        var reFormat = dateString.split('-')[1] + "/" + dateString.split('-')[2] + "/" + dateString.split('-')[0];
        var today = new Date();
        var birthDate = new Date(reFormat);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const getInitialValues = () => {
        let intialValues = {
            fullname: getData("fullname"),
            email: getData("email"),
            mobileNo: getData("mobileNo"),
            dob: getData("dob"),
            gender: getData("gender"),
            weight: getData("weight"),
            height: getData("height"),
            userId: getData("userId"),
            familyId: getData("familyId"),
        };
        console.log("initial data===>" + JSON.stringify(intialValues));
        return intialValues;
    };

    const onSubmitForm = (values) => {
        //await new Promise((r) => setTimeout(r, 500));                                                        
        //alert(JSON.stringify(values, null, 2));
        values.userId = getloginUserDetails();
        values.familyId = currentDetails ? currentDetails.familyId : ""
        let response = saveUserDetails(values)
        response.then((res) => {
            res.json().then(respData => {
                localStorage.setItem('familyId', respData.data.familyId);
                navigate('/binah', { state: { familyId: respData.data.familyId } });
            });
        }).catch(error => {
            console.log("error =========> " + error.status);
        })
    }
    const validateForm = (values) => {
        type ErrorT = {
            fullname?: string;
            email?: string;
            mobileNo?: string;
            dob?: string;
            gender?: String;
            weight?: String;
            height?: string;
            userId?: String;
        }
        const errors: ErrorT = {};
        if (!values.email) {
            errors.email = 'Please enter your email address.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.fullname) {
            errors.fullname = 'Please enter your full name.';
        }
        if (!values.mobileNo) {
            errors.mobileNo = 'Please enter your contact number.';
        } else if (values.mobileNo.length != 10) {
            errors.mobileNo = 'mobile number must be 10 digits';
        }
        if (!values.dob) {
            errors.dob = 'Please enter your date of birth.';
        } else if (getAge(values.dob) < 18) {
            errors.dob = 'Date of birth should be greater than 18 years';
        } else if (getAge(values.dob) > 110) {
            errors.dob = 'Date of birth should be less than 110 years';
        }
        if (!values.height) {
            errors.height = 'Please enter your height.';
        } else if (values.height.includes(".")) {
            errors.height = "Non decimal number is required";
        } else if (!Number.isInteger(parseInt(values.height))) {
            errors.height = "Enter a number";
        } else if (parseInt(values.height) < 59) {
            errors.height = "Height should be greater than 60 cms";
        } else if (parseInt(values.height) > 231) {
            errors.height = "Height should be less than 230 cms";
        }

        if (!values.weight) {
            errors.weight = 'Please enter your weight.';
        } else if (values.weight.includes(".")) {
            errors.weight = "Non decimal number is required";
        } else if (!Number.isInteger(parseInt(values.weight))) {
            errors.weight = "Enter a number";
        } else if (parseInt(values.weight) < 39) {
            errors.weight = "Weight should be greater than 40 kgs";
        } else if (parseInt(values.weight) > 200) {
            errors.weight = "Weight should be less than 200 kgs";
        }

        return errors;
    }

    return (
        <div id="wrapper">
            <div id="main">
                <section className="inner">
                    <header id="header">
                        {/* <ul className="icons">
                            <li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li>
                        </ul> */}
                    </header>


                    <div id="inside">
                        <div className="content">
                            <header>
                                <h2>A bit about your Family/Friend</h2>
                                <span>Share some personal information about you</span>
                            </header>
                            <Formik initialValues={getInitialValues()}
                                validate={values => validateForm(values)}
                                onSubmit={async (values, { setSubmitting }) => {
                                    onSubmitForm(values);
                                }} >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    submitForm,
                                    setFieldValue,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <Input
                                                    type="text"
                                                    name="fullname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fullname}
                                                    placeholder='Full Name'
                                                />
                                                {errors.fullname && touched.fullname && errors.fullname && <Tag style={tagStyle}>{errors.fullname}</Tag>}
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder='Enter Email'
                                                />
                                                {errors.email && touched.email && errors.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <Input
                                                    type="text"
                                                    name="mobileNo"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.mobileNo}
                                                    placeholder='Enter Mobile No.'
                                                />
                                                {errors.mobileNo && touched.mobileNo && errors.mobileNo && <Tag style={tagStyle}>{errors.mobileNo}</Tag>}
                                            </div>
                                            <div id="my-radio-group" className="col-2 col-12-small">Date of birth</div>
                                            <div className="col-4 col-12-xsmall">
                                                <Input
                                                    type="date"
                                                    name="dob"
                                                    // addonBefore="Date of birth"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.dob}
                                                />
                                                {/* <DatePicker
                                                    name="dob"
                                                    placeholder="Date of birth"
                                                    onChange={(date, dateString) => { values.dob = dateString }}
                                                    onBlur={handleBlur}
                                                    format="DD-MM-YYYY"
                                                /> */}
                                                {errors.dob && touched.dob && errors.dob && <Tag style={tagStyle}>{errors.dob}</Tag>}
                                            </div>
                                            <div id="my-radio-group" className="col-1 col-12-small">Gender</div>
                                            <div className="col-11 col-12-small" area-aria-labelledby="my-radio-group">

                                                <Field type="radio" name="gender" value="male" id="male" />
                                                <label htmlFor="male"> Male </label>

                                                <Field type="radio" name="gender" value="female" id="female" />
                                                <label htmlFor="female"> Female  </label>

                                                <Field type="radio" name="gender" value="other" id="other" />
                                                <label htmlFor="other"> Other </label>
                                            </div>
                                            <div className="col-6 col-12-small">

                                                <Input
                                                    type="text"
                                                    name="weight"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.weight}
                                                    placeholder='Enter weight in KGs.'
                                                    suffix="KG"
                                                />
                                                {errors.weight && touched.weight && errors.weight && <Tag style={tagStyle}>{errors.weight}</Tag>}

                                                {/* <select
                                                                            name="weight"
                                                                            value={values.weight}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            style={{ display: "block" }}
                                                                        >
                                                                                <option value="" label="Select weight">
                                                                                    Select weight{" "}
                                                                                </option>
                                                                                <option value="50" label="50 kgs">
                                                                                    {" "}
                                                                                    50 kgs
                                                                                </option>
                                                                                <option value="60" label="60 kgs">
                                                                                    60 kgs
                                                                                </option>                                                                    
                                                                                <option value="70" label="70 kgs">
                                                                                    70 kgs
                                                                                </option>
                                                                        </select>                                                                         */}
                                            </div>
                                            <div className="col-6 col-12-small">

                                                <Input
                                                    type="text"
                                                    name="height"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.height}
                                                    placeholder='Enter height in CMs.'
                                                    suffix="CM"
                                                />
                                                {errors.height && touched.height && errors.height && <Tag style={tagStyle}>{errors.height}</Tag>}

                                                {/* <select
                                                                        name="height"
                                                                        value={values.height}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        style={{ display: "block" }}
                                                                    >
                                                                            <option value="" label="Select height">
                                                                                Select height{" "}
                                                                            </option>
                                                                            <option value="50" label="50 kgs">
                                                                                {" "}
                                                                                50 kgs
                                                                            </option>
                                                                            <option value="60" label="60 kgs">
                                                                                60 kgs
                                                                            </option>                                                                    
                                                                            <option value="70" label="70 kgs">
                                                                                70 kgs
                                                                            </option>
                                                                    </select> */}
                                            </div>
                                            <div className="col-12 mt-20">
                                                <ul className="actions">
                                                    <li><Button className="primary" onClick={() => submitForm()}> Submit </Button></li>
                                                    <li><Button> Reset </Button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                )
                                }
                            </Formik>
                        </div>
                    </div>

                </section>
            </div>
            <SidebarNew />
        </div>

    )
}