import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import AddUser from './AddUser';
import SaveUser from './SaveUser';
import ViewReports from './ViewReports';
import PerformTest from './PerformTest';
import CurrentReport from './CurrentReport';
import BinahSdkImpl from "./BinahSdkImpl";
import Login from "./Login";

const { Header, Content, Footer, Sider } = Layout;

class LayoutPage extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Add User</span>
                <Link to="/addUser" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Measure Now</span>
                <Link to="/binah" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer" }}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
           
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
    );
  }
}
export default LayoutPage;