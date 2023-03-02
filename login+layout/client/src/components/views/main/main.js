import React from "react";
import { Layout, Space } from 'antd';



const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'yellowgreen',
};

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'pink',
};

const { Footer, Sider, Content} = Layout;

function Main() {  
    return (
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
  <Layout>
    
        <Layout>
          <Content style={contentStyle}>Ant/layout
          <div>
          </div>
          </Content>
          <Sider style={siderStyle}>Sider</Sider>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Space>
  );
  }
  
  export default Main;