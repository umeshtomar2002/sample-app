import { Button, Drawer, DrawerProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import { getfamilyDetails, getloginUserDetails } from "./Client";
import Sidebar from "./SidebarOld";
import MenuBack from '../assets/images/menu_back.svg';
import SidebarNew from "./SidebarNew";

export default function AddUser() {
    let location = useLocation();
    let navigate = useNavigate();

    // console.log(location);

    function saveUserPage(type: string, data: any): void {
        navigate('/saveUser', { state: { data } });
    }

    function performanceTestPage(): void {
        navigate('/binah');
    }

    function backButton() {
        navigate(-1);
    }


    const [family, setFamily] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [famlen, setFamlen] = useState(0);

    useEffect(() => {
        const userDetails = { userId: getloginUserDetails() }
        getfamilyDetails(userDetails).then(res => res.json().then(family1 => { setFamily(family1.data) }));
        setFetching(false);
    }, []);

    return (


        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header">
                        <ul className="icons">
                            <li>
                                <a href="#" className="icon">
                                    &nbsp;
                                </a>
                            </li>

                        </ul>
                    </header>

                    <section id="banner">
                        <div className="content">
                            <header>
                                <h1>Hi apa khabar! </h1>
                                <p>Whom do you want to test today ?</p>
                            </header>
                            <ul className="actions">
                                {family.map((data, id) => {
                                    return <li><a href="#" key={data.familyId} className=" button large icon solid fa-user" onClick={() => saveUserPage('update', data)}> {data.fullname}</a></li>
                                })}
                                <li><a href="#" key="vhdjs" className="button primary large icon solid fa-plus" onClick={() => saveUserPage('save', null)}> Add Members </a></li>
                            </ul>
                        </div>
                    </section>

                </div>

            </div>
            <SidebarNew />
        </div>


    )

}