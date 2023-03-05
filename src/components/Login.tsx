import { Input,Button,Tag } from "antd";
import { Formik } from "formik";
import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import LoginSvg from'../assets/images/Logo.svg';


const inputBottomMargin =  {marginBottom:'5px'};
const tagStyle = {backgroundColor:'#f50'};
const usrAgfosize = {fontSize:"10px"};
const usrAgfosizeColor = {color:"#ee7a22"};

export default function Login(){
    const navigate = useNavigate();
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
                                            initialValues={{ email: '', password: '' }}
                                            validate={values => {
                                                type ErrorT = {
                                                    email?:String;                        
                                                }
                                                const errors:ErrorT = {};
                                                if (!values.email) {
                                                errors.email = 'Required';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values,  {setSubmitting}) => {
                                                navigate('/addUser');
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
                                                            <Button className="primary" onClick={()=> submitForm()} disabled={isSubmitting}>
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



