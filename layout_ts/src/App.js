import React from 'react';
import testimg from './testimg.PNG';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle= {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'pink',
};

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

const App = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>CMH</Header>
      <Layout>
        <Content style={contentStyle}>Ant/layout
        <div>
        <img src={testimg} alt="anttest"></img>
        </div>
        </Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);

export default App;