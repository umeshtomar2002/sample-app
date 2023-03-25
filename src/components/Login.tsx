import { Input,Button,Tag, notification } from "antd";
import { Formik } from "formik";
import React, { useState } from "react";
import {checkLogin} from "./Client";
import { Link,  useNavigate } from "react-router-dom";
import LoginSvg from'../assets/images/Logo.svg';
import Notification from "./Notification";


const inputBottomMargin =  {marginBottom:'5px'};
const tagStyle = {backgroundColor:'#f50'};
const usrAgfosize = {fontSize:"10px"};
const usrAgfosizeColor = {color:"#ee7a22"};
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function Login(){
    const navigate = useNavigate();
    const[clearError,setClearError] = useState({state: false, msg: ""});
    const mystyle = {
        maxWidth: '200px',
        maxHeight: '200px',        
        overflow: 'hidden',
        height: 'calc(0.38461 * 100vw - 184px)',
        width: 'calc(0.38461 * 100vw - 184px)',
       };

      

        return(
            <>
            <div id="wrapper">
				<div id="main">
					<section className="inner">
                    <header id="header">
                    <div className="col-2 col-12">
                        <img src={LoginSvg} style={mystyle}/>
                     </div>
					</header>
                        <div id="inside">
                            <div className="content">
                                <header>
                                    <h2>Welcome</h2>
                                    <span>Enter sign in details</span>											
                                </header>
                                        <Formik
                                            initialValues={{ email: 'rio@gmail.com', password: 'qwerty' }}
                                            validate={values => {
                                                type ErrorT = {
                                                    email?:string;
                                                    password?:string;                        
                                                }
                                                const errors:ErrorT = {};
                                                if (!values.email) {
                                                    errors.email = 'Required';
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                  ) {
                                                    errors.email = 'Invalid email address';
                                                  }
                                                if (!values.password) {
                                                        errors.password = 'Required';
                                                    }
                                                return errors;
                                            }}
                                            onSubmit={(values,  {setSubmitting}) => {
                                                //alert(JSON.stringify(values));
                                                checkLogin(values).then((res) => {
                                                    console.log(res);                                                                                                      
                                                    navigate('/addUser');
                                                    //setSubmitting(true);                                                   
                                                }).catch(error => {
                                                    console.log("error =========> " + error.message);
                                                    
                                                    <Notification
                                                    key='login' 
                                                    type="error" 
                                                    msg="some msg" 
                                                    clearMsg={() => setClearError({state: false, msg: ""})}/>
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
                                                        <div className="col-2 col-12">
                                                        <div className="row gtr-uniform">
                                                        <div className="col-3 col-12-xsmall">
                                                            <label htmlFor="userid">Email</label>
                                                            <Input
                                                                id="userId"
                                                                style={inputBottomMargin}
                                                                type="email"
                                                                name="email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                placeholder='abc@gmail.com'
                                                              />
                                                              {errors.email && touched.email && errors.email && <Tag style={tagStyle}>{errors.email}</Tag>}                                                           
                                                        </div>
                                                    </div>
                                                        <div className="row gtr-uniform">
                                                            <div className="col-3 col-12-xsmall">
                                                                <label htmlFor="password"> Password</label>
                                                                <Input
                                                                    id="Password"
                                                                    style={inputBottomMargin}
                                                                    type="password"
                                                                    name="password"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.password}
                                                                />
                                                                {errors.password && touched.password && errors.password  && <Tag style={tagStyle}>{errors.password}</Tag>}
                                                            </div>
                                                </div> 
                                                        <div className="row gtr-uniform">
                                                            <div className="col-3 col-12-xsmall">
                                                               <span style={usrAgfosize}> By pressing "Login" you will accept Drivn Fintech's <span style={usrAgfosizeColor}> User Agreement</span> Conditions.</span>
                                                            </div>
                                                        </div> 
                                                        <div className="col-12 mt-20">
                                                            <Button className="primary" onClick={()=> submitForm()}>
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



