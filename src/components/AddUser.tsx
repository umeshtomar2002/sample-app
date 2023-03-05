import { Button } from "antd";
import React from "react";
import { Link,useLocation,useNavigate} from "react-router-dom";
import  "../assets/css/main.css";
import Sidebar from "./Sidebar";

export default function AddUser() { 
    let location = useLocation();
    let navigate = useNavigate();

    console.log(location);

    function saveUserPage(): void {
        navigate('/saveUser',{state:{id:1,name:'sabaoon'}});
    }
    
    function performanceTestPage(): void {
        navigate('/binah',{state:{id:1,name:'sabaoon'}}); 
    }
    
    function backButton() {
        navigate(-1);
    }

    return(
        <div>           
            <div id="wrapper">
                <div id="main">
                            <div className="inner">
                                    <header id="header">
                                        <ul className="icons">
                                            <li>
                                                <a href="#" className="icon">
                                                    <i className="fa fa-language" aria-hidden="true"></i>
                                                    <li><Button onClick={()=> backButton()}> Back </Button></li>	
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </header>

                                <section id="banner">
                                    <div className="content">
                                        <header>
                                            <h1>Hello</h1>
                                            <p>Whom do you want to test today ?</p>
                                        </header>                                                
                                        <ul className="actions">
                                            <li><a href="#" className=" button large icon solid fa-user" onClick={()=>performanceTestPage()}> Self</a></li>
                                            <li><a href="#" className="button large icon solid fa-female" onClick={()=>performanceTestPage()}>Khanak</a></li>
                                            <li><a href="#" className="button primary large icon solid fa-plus" onClick={()=>saveUserPage()}> Friend & Family</a></li>
                                        </ul>
                                    </div>
                                </section>
                                
                            </div>
                </div> 
            </div>
            
            {/* <div>
                <h1> Add User</h1>
                <Link to="/binah">Binah sdk</Link>
                <Link to="/saveUser">Save Users</Link>
                <Link to="/viewReport">Reports</Link>
            </div>  */}
        </div>
    )

}