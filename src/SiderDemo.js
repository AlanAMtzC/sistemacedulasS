import './App.scss';
import logo from './logo.svg';
import logoo from './images/easewhite2.png';
import logo2 from './images/easewhite.png';
import './App.scss';
import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SiderDemo (){
  const [collapsed, setCollapsed]= useState(false);
  
  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div  style={{
                        height: 64,
                        backgroundImage: `url(${collapsed ? logoo : logo2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "dark" && "invert(1) brightness(200%)"
                    }}  />
          
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="./App.scss/site-layout">
          <Header className="./App.scss/site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Sistema Cedulas ©2020 Creado por la <a href='http://auditoriadurango.gob.mx/'>EASE </a> </Footer>
        </Layout>
      </Layout>
    );
    
  }


export default SiderDemo;
