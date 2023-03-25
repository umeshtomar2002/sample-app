import React, { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import  "../assets/css/main.css";
import { Field, Formik } from "formik";
import { Button, DatePicker, Input, Switch, Tag } from "antd";
import { getloginUserDetails, saveUserDetails } from "./Client";
import SidebarNew from "./SidebarNew";


const tagStyle = {backgroundColor:'#f50'};

export default function saveUser() { 

    let userDetails = useLocation();
    let navigate = useNavigate();

    console.log("user deatils ===>"+JSON.stringify(userDetails.state != null && userDetails.state != ''?userDetails.state.data:''));

    const[details,setDetails] = useState(userDetails.state != null && userDetails.state != ''? userDetails.state.data : '')

    console.log("details =====> " +details);

    const checkData = (feild:string) => {
        switch(feild) {
            case 'fullname':
              return !(details.fullName != null && details.fullName !='')
              
            case 'email':
                return !(details.email != null && details.email !='')
              
              case 'mobileNo':
                return !(details.mobileNo != null && details.mobileNo !='')
              
              case 'dob':
                return !(details.dob != null && details.dob !='')
              
              case 'gender':
                return !(details.gender != null && details.gender !='')
              
              case 'height':
                return !(details.height != null && details.height !='')
              
              case 'weight':
                return !(details.weight != null && details.weight !='')
              
            default:
              return false;
          }
    } 

    const getData = (feild:string) => {
        switch(feild) {
            case 'fullname':
               if(details.fullName != null && details.fullName !=''){return details.fullName;}else{return '';}              
            case 'email':
                if(details.email != null && details.email !=''){return details.email;}else{return '';}
              case 'mobileNo':
                if(details.mobileNo != null && details.mobileNo !=''){return details.mobileNo;}else{return '';}
              case 'dob':
                if(details.dob != null && details.dob !=''){return details.dob;}else{return '';}              
              case 'gender':
                if(details.gender != null && details.gender !=''){return details.gender}else{return '';}              
              case 'height':
                if(details.height != null && details.height !=''){return details.height;}else{return '';}              
              case 'weight':
                if(details.weight != null && details.weight !=''){return details.weight;}else{return '';}              
            default:
              return false;
          }
    } 

    
    

    const getAge = (dateString:string) => {
        var reFormat = dateString.split('-')[2]+"/"+dateString.split('-')[1]+"/"+dateString.split('-')[0];
        var today = new Date();
        var birthDate = new Date(reFormat);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    return age;
    }

   
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
											<span>Share some personal information about you</span>
										</header>
                                            <Formik  initialValues={{ fullname:'Umesh Singh',email: '', mobile: '',dob:'14-01-1987',gender:'',weight:'',height:'',userId:''}}
                                                    validate={values => {
                                                        type ErrorT = {
                                                            fullname?:string;
                                                            email?:string;
                                                            mobile?:string;
                                                            dob?:string;
                                                            gender?:String;
                                                            weight?:String;
                                                            height?:string;
                                                            userId?:String;                        
                                                        }
                                                        const errors:ErrorT = {};
                                                        if (!values.email) {
                                                            errors.email = 'Required';
                                                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                            errors.email = 'Invalid email address';
                                                        }
                                                        if (!values.fullname) {
                                                            errors.fullname = 'Required';
                                                        }
                                                        if (!values.mobile) {
                                                            errors.mobile = 'Required';
                                                        }else if(values.mobile.length != 10){
                                                            errors.mobile = 'mobile number must be 10 digits';
                                                        }
                                                        if (!values.dob) {
                                                            errors.dob = 'Required';
                                                        }else if(getAge(values.dob) < 18){
                                                            errors.dob = 'Date of birth should be greater than 18 years';
                                                        }else if(getAge(values.dob) > 110){
                                                            errors.dob = 'Date of birth should be less than 110 years';
                                                        } 
                                                        if (!values.height) {
                                                            errors.height = 'Required';
                                                        }else if(values.height.includes(".")){
                                                            errors.height = "Non decimal number is required";
                                                        }else if(!Number.isInteger(parseInt(values.height))){
                                                            errors.height = "Enter a number";
                                                        }else if(parseInt(values.height) < 59){
                                                            errors.height = "Height should be greater than 60 cms";
                                                        }else if(parseInt(values.height) > 231){
                                                            errors.height = "Height should be less than 230 cms";
                                                        }

                                                        if (!values.weight) {
                                                            errors.weight = 'Required';
                                                        }else if(values.weight.includes(".")){
                                                            errors.weight = "Non decimal number is required";
                                                        }else if(!Number.isInteger(parseInt(values.weight))){
                                                            errors.weight = "Enter a number";
                                                        }else if(parseInt(values.weight) < 39){
                                                            errors.weight = "Weight should be greater than 40 kgs";
                                                        }else if(parseInt(values.weight) > 200){
                                                            errors.weight = "Weight should be less than 200 kgs";
                                                        }

                                                        return errors;
                                                    }}
                                                    onSubmit={async (values,  {setSubmitting}) => {                                                        
                                                        //await new Promise((r) => setTimeout(r, 500));                                                        
                                                        //alert(JSON.stringify(values, null, 2));
                                                        values.userId = getloginUserDetails();
                                                        //console.log(JSON.stringify(values));
                                                        saveUserDetails(values).then((res) => {
                                                            res.json().then(data => console.log(data));
                                                            navigate('/binah');                                                            
                                                        }).catch(error => {
                                                            console.log("error =========> " + error.status);
                                                        })
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
                                                                        name="mobile"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.mobile}
                                                                        placeholder='Enter Mobile No.'
                                                                    />
                                                                    {errors.mobile && touched.mobile && errors.mobile && <Tag style={tagStyle}>{errors.mobile}</Tag>} 
                                                                </div>
                                                                <div className="col-6 col-12-xsmall">
                                                                    <DatePicker
                                                                        name="dob"
                                                                        placeholder="Date of birth"
                                                                        onChange={(date,dateString) => {values.dob=dateString}}
                                                                        onBlur={handleBlur}                                                                        
                                                                        format="DD-MM-YYYY" 
                                                                                                                                                                                                                                                                   
                                                                    />
                                                                    {errors.dob && touched.dob && errors.dob && <Tag style={tagStyle}>{errors.dob}</Tag>} 
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

                                                                    <Input
                                                                        type="text"
                                                                        name="weight"                                                                        
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.weight}
                                                                        placeholder='Enter weight in KGs.'
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
				<SidebarNew />
		</div>        
       
    )
}