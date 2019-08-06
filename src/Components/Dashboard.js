import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link, Route } from "react-router-dom";
import "../Components/Dashboard.css";
import "antd/dist/antd.css";
import Clientes from "./Clientes";
import Licencias from "./Licencias";
import Productos from "./Productos";
import Ingresos from "./Ingresos";
import Servicios from "./Servicios";
import login from "./Login";

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div />
          <img
            src="https://4040apps.com/wp-content/uploads/2016/12/logoamarillo.png"
            className="logo"
          />
          <div className="div-sidebar-menu-top">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item>
                <Icon type="team" />
                <span>Clientes</span>
                <Link to="/clientes" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="file-protect" />
                <span>Licencias</span>
                <Link to="/licencias" />
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="appstore" />
                <span>Productos</span>
                <Link to="/productos" />
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="desktop" />
                <span>Servicios</span>
                <Link to="/servicios" />
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="fund" />
                <span>Ingresos</span>
                <Link to="/ingresos" />
              </Menu.Item>
              {/* <Menu.Item key="6">
                <Icon type="login" />
                <span>Iniciar Sesión</span>
                <Link to="/login" />
              </Menu.Item> */}
              <Menu.Item key="7" className="div-sidebar-menu-bottom">
                <Icon type="logout" />
                <span>Cerrar Sesión</span>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              display: "flex",
              alignItems: "center"
            }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
              height: "100%"
            }}
          >
            <Route path="/clientes" component={Clientes} />
            <Route path="/licencias" component={Licencias} />
            <Route path="/productos" component={Productos} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/ingresos" component={Ingresos} />
            <Route path="/login" component={login} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
