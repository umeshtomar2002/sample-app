import { Button, Drawer } from "antd";
import React, { useState } from "react";

export default function Sidebar(){

    const [open, setOpen] = useState(false);
  

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  

    return(
        <>
             <Button className="primary" onClick={showDrawer}>
                    Open
                </Button>
            <Drawer                
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                key="left"         
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                
            </Drawer>
        </>
    )

 }