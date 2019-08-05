import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';

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
          <div className="logo" />
          <div className="div-sidebar-menu-top">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              
                    <Menu.Item key="1">
                <Icon type="user" />
                <span>Administrador</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="team" />
                <span>Clientes</span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="file-protect" />
                <span>Licencias</span>
                </Menu.Item>
                <Menu.Item key="4">
                <Icon type="appstore" />
                <span>Productos</span>
                </Menu.Item>
                <Menu.Item key="5">
                <Icon type="desktop" />
                <span>Servicios</span>
                </Menu.Item>
                <Menu.Item key="6">
                <Icon type="fund" />
                <span>Ingresos</span>
                </Menu.Item>  
               <Menu.Item key="7" className="div-sidebar-menu-bottom">
                <Icon type="logout" />
                <span>Cerrar Sesión</span>
                </Menu.Item> 
          </Menu> 
          </div>
        </Sider>
        <Layout >
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
              height:'100%'

            }}
          >
          </Content>
        </Layout>
      </Layout>
    );
  }
}
