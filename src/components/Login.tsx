import { Input,Button,Tag } from "antd";
import { Formik } from "formik";
import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import  "../assets/css/main.css";


const inputBottomMargin =  {marginBottom:'5px'};
const tagStyle = {backgroundColor:'#f50'};

export default function Login(){
    const navigate = useNavigate();
        return(
            <>
            <div id="wrapper">
				<div id="main">
					<section className="inner">
                        <div id="inside">
                            <div className="content">
                                <header>
                                    <h2>Login</h2>											
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
                                                        <div className="col-6 col-12-xsmall"></div>
                                                            <Input
                                                                style={inputBottomMargin}
                                                                type="email"
                                                                name="email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                placeholder='abc@gmail.com'
                                                            />                                                           
                                                        </div>
                                                        {errors.email && touched.email && errors.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                                                {/* <Input
                                                    style={inputBottomMargin}
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                {errors.password && touched.password && errors.password  && <Tag style={tagStyle}>{errors.password}</Tag>} */}
                                                    <Button type="primary" onClick={()=> submitForm()} disabled={isSubmitting}>
                                                        Next
                                                    </Button>
                                                </form>
                                            )}
                                        </Formik>                               
                            </div>
                        </div>      
                    </section>
                </div>
            </div>

            <div>
                
                <h1> Login</h1>
                <Link to="/addUser">Add  User </Link>
                <Link to="/saveuser">Save  User </Link>
                <Link to="/viewReport">Reports</Link>
                <Link to="/performTest">performTest</Link>
                                
            </div>

            </>
        )
}



