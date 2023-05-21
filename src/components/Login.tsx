import { Input, Button, Tag, Col, Row } from "antd";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { checkLogin } from "./Client";
import { useNavigate } from "react-router-dom";
import LoginSvg from '../assets/images/Logo.svg';
// import LoginBanner from '../assets/images/loginBanner.jpeg';
import LoginBanner from '../assets/images/loginFinalBanner.svg';
// const LoginBanner =  require("../assets/images/loginBanner.jpeg") as string;



const inputBottomMargin = { marginBottom: '5px' };
const tagStyle = { color: "red" };
const usrAgfosize = { fontSize: "10px" };
const usrAgfosizeColor = { color: "#ee7a22" };
const errorMessageStyle = { color: "red", minHeight: "25px", fontWeight: "500", margin: "2px" };
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function Login() {
    const navigate = useNavigate();
    const [clearError, setClearError] = useState({ state: false, msg: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [loginMobileSvg, setLoginMobileSvg] = useState(false)

    const mystyle = {
        // maxWidth: '200px',
        // maxHeight: 'calc(100%-20px)',
        overflow: 'hidden',
        // height: 'calc(0.38461 * 100vw - 184px)',
        // width: 'calc(0.38461 * 100vw - 184px)',
    };

    const handleWindowResize = () => {
        if(window.innerWidth > 768){
            setLoginMobileSvg(false)
        }else{
            setLoginMobileSvg(true);
        }
        
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    const getLoginSVG = () => {
        if(loginMobileSvg){
            return (
                <Col xs={24} sm={24} id="loginBanner" className="loginBanner">
                    <img src={LoginSvg} style={mystyle} width="40%"/>
                </Col>
            )
        }else{
            return (
                <Col md={12} lg={12} xl={12} className="loginBanner">
                    <img src={LoginBanner} style={mystyle}/>
                </Col>
            )
        }
    }
    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <section className="inner">

                        <Row className="loginContainer">
                            
                            { getLoginSVG() }
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="loginPage">

                                <div id="inside">
                                    <div className="content">
                                        <header className="mbLoginFields">
                                            <h2>Welcome</h2>
                                            <span>Enter sign in details</span>
                                        </header>
                                        <Formik
                                            initialValues={{ email: 'rio2@gmail.com', password: 'qwerty' }}
                                            validate={values => {
                                                type ErrorT = {
                                                    email?: string;
                                                    password?: string;
                                                }
                                                const errors: ErrorT = {};
                                                if (!values.email) {
                                                    errors.email = 'Please enter your email address.';
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                ) {
                                                    errors.email = 'Invalid email address';
                                                }
                                                if (!values.password) {
                                                    errors.password = 'Please enter your password';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                //alert(JSON.stringify(values));
                                                checkLogin(values).then((res) => {
                                                    // console.log(res);
                                                    navigate('/addUser');
                                                    //setSubmitting(true);                                                   
                                                }).catch(error => {
                                                    console.log("error =========> " + error.message);
                                                    setErrorMessage(error.message)
                                                    // <Notification
                                                    // key='login' 
                                                    // type="error" 
                                                    // msg="some msg" 
                                                    // clearMsg={() => setClearError({state: false, msg: ""})}/>
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
                                                    <div className="">
                                                        <div className="col-2 col-12">
                                                            <div className="mbLoginFields">
                                                                <div className="col col-12-xsmall">
                                                                    <label htmlFor="userid">Email</label>
                                                                    <Input
                                                                        id="userId"
                                                                        style={inputBottomMargin}
                                                                        type="email"
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onInput={() => setErrorMessage("")}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        placeholder='abc@gmail.com'
                                                                    />
                                                                    {errors.email && touched.email && errors.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                                                                </div>
                                                            </div>
                                                            <div className="mbLoginFields">
                                                                <div className="col-3 col-12-xsmall">
                                                                    <label htmlFor="password"> Password</label>
                                                                    <Input
                                                                        id="Password"
                                                                        style={inputBottomMargin}
                                                                        type="password"
                                                                        name="password"
                                                                        onInput={() => setErrorMessage("")}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.password}
                                                                    />
                                                                    {errors.password && touched.password && errors.password && <Tag style={tagStyle}>{errors.password}</Tag>}
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div className="col-3 col-12-xsmall">
                                                                    <span style={usrAgfosize}> By pressing "Login" you will accept Drivn Fintech's <a target="_blank" href="https://www.binah.ai/terms-of-use/"><span style={usrAgfosizeColor}> terms & conditions</span></a>.</span>
                                                                </div>
                                                            </div>
                                                            <div style={errorMessageStyle}>{errorMessage && <div> {errorMessage} </div>}</div>
                                                            <div className="col-12 mt-13">
                                                                <Button className="primary loginButton" onClick={() => submitForm()}>
                                                                    Login
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </div>
            </div>

            {/* <div>                
                <h1> Login</h1>
                <Link to="/addUser">Add  User </Link>
                <Link to="/saveuser">Save  User </Link>
                <Link to="/viewReport">Reports</Link>
                <Link to="/performTest">performTest</Link>
                <Link to="/binah">performTest</Link>                              
            </div>  */}

        </>
    )
}



