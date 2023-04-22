import { json } from 'react-router';
import fetch from 'unfetch';
import { Route, useNavigate } from "react-router-dom";


const url:string = "https://binah.onrender.com";

function authenticate(response:any) {   
    if (response.ok) {       
        return response;
    } else{
        console.log("response:::",response)
        let error = new Error(response.statusText);
        if(response.status == 401){
            console.log("Unauthorized");
            localStorage.clear();
            window.location.replace('/');
        }
        // // error.response = response;
        // // response.json().then(e => {            
        // //     error.error = e;
        // // });
        return Promise.reject(error);
    }
}

export interface ErrorLogin extends Error{
    response:String;
    
}

export interface User{
    email:String;
    fullname:String;
    mobileNo:String;
    gender:String;
    dob:String;
    height:String;
    weight:String;
};

export const checkLogin = (loginDetails) => 
        fetch(url+'/api/auth/signin',{
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST',
            body: JSON.stringify(loginDetails)
        }).then(async response => JSON.parse(await response.text())).then(loginStatus);
        
        function loginStatus(response:any) {    
            if (!response.error) {
             localStorage.setItem('x-access-token',response.data.token);
             localStorage.setItem('biUser',JSON.stringify(response.data));  
        return response;
    } else{
         let error = new Error(response.message);
         error.message = 'Invalid username or password';
        // response.json().then(e => {            
        //     error.error = e;
        // });
         return Promise.reject(error);
    }
}


export const getfamilyDetails = (values) =>fetch(url+'/api/getFamily',{
    headers:{
        'Content-Type':'application/json',
        'x-access-token': localStorage.getItem('x-access-token')
    },
    method:'GET',
    body: JSON.stringify(values)    
}).then(authenticate);


export const saveUserDetails= (userDetails) => fetch(url+'/api/addFamily',{
    headers:{
        'Content-Type':'application/json',
        'x-access-token': localStorage.getItem('x-access-token')
    },
    method:'POST',
    body: JSON.stringify(userDetails)
}).then(authenticate);
export const getloginUserDetails = () => {    
    return JSON.parse(localStorage.getItem('biUser')).userId;
}

export const saveHealthData= (userDetails) => fetch(url+'/api/saveReport',{
    headers:{
        'Content-Type':'application/json',
        'x-access-token': localStorage.getItem('x-access-token')
    },
    method:'POST',
    body: JSON.stringify(userDetails)
}).then(authenticate);

export const getHealthData = (health) =>fetch(url+'/api/getReports',{
    headers:{
        'Content-Type':'application/json',
        'x-access-token': localStorage.getItem('x-access-token')
    },
    method:'POST',
    body: JSON.stringify(health)
}).then(authenticate);