import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import  "../assets/css/main.css";
import { Field, Formik } from "formik";
import Sidebar from "./Sidebar";
import { Button, Input } from "antd";

export default function saveUser() { 

    let userDetails = useLocation();
    let navigate = useNavigate();

    console.log("user deatils ===>"+userDetails);

    return(
        
        <div id="wrapper">
					<div id="main">
						<section className="inner">							
								<header id="header">
									<ul className="icons">
										<li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li>
										
									</ul>
								</header>

							
								<div id="inside">
									<div className="content">
										<header>
											<h2>A bit about your Family/Friend</h2>
											<p>Share some personal information about you?</p>
										</header>
                                            <Formik  initialValues={{ name:'',email: '', mobile: '',dob:'',gender:'',weight:'',height:''}}
                                                    onSubmit={async (values,  {setSubmitting}) => {
                                                        //navigate('/addUser',{state:{id:1,name:'sabaoon'}});
                                                        await new Promise((r) => setTimeout(r, 500));
                                                        alert(JSON.stringify(values, null, 2));
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
                                                                <div className="col-6 col-12-xsmall">
                                                                    <Input
                                                                        type="text"
                                                                        name="name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.name}
                                                                        placeholder='Full Name'
                                                                    />                                                                
                                                                </div>
                                                                <div className="col-6 col-12-xsmall">
                                                                    <Input
                                                                        type="email"
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        placeholder='abc@gmail.com'
                                                                    />
                                                                </div>
                                                                <div className="col-6 col-12-xsmall">																    
                                                                    <Input
                                                                        type="text"
                                                                        name="mobile"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.mobile}
                                                                        placeholder='Enter Moible No'
                                                                    />
                                                                </div>
                                                                <div className="col-6 col-12-xsmall">
                                                                    <Input
                                                                        type="text"
                                                                        name="dob"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.dob}
                                                                        placeholder='Date of birth'
                                                                    />
                                                                </div>
                                                                    <div id="my-radio-group" className="col-1 col-12-small">Gender</div>
                                                                    <div className="col-11 col-12-small" area-aria-labelledby="my-radio-group">                                                                        
                                                                         
                                                                        <Field type="radio" name="gender" value="male" id="male" />
                                                                        <label htmlFor="male"> Male </label>                                                                         
                                                                        
                                                                        <Field type="radio" name="gender" value="female" id="female"/>
                                                                        <label htmlFor="female"> Female  </label>                                                                                                                                               
                                                                        
                                                                        <Field type="radio" name="gender" value="other" id="other"/>
                                                                        <label htmlFor="other"> Other </label>   
                                                                    </div>
                                                                    <div className="col-6 col-12-small">
                                                                        <select
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
                                                                        </select>                                                                        
                                                                    </div>
                                                                <div className="col-6 col-12-small">
                                                                    <select
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
                                                                    </select>
                                                                </div>
                                                                <div className="col-12 mt-20">
                                                                    <ul className="actions">
                                                                        <li><Button  className="primary" onClick={()=>submitForm()}> Submit </Button></li>
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
				<Sidebar/>

		</div>        
       
    )
}