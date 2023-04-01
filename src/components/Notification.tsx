import { notification } from "antd";
import React from "react";

const Notification = ({ key,msg, type, clearMsg }) => {
  return (
    <div>
      {notification[type]({
        key,
        description: msg,
      })}
      {clearMsg()}
    </div>
  );
};

export default Notification;