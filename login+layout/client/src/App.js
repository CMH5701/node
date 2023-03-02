import React from 'react';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Layout, Space } from 'antd';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Main from './components/views/main/main';
import Auth from './hoc/auth'

const { Header} = Layout;

const headerStyle= {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'pink',
};


const AuthLandingPage = Auth(LandingPage, null);
const AuthLoginPage = Auth(LoginPage, false);
const AuthRegisterPage = Auth(RegisterPage, false);

function App() {  
  return (
  <div className="App">
  <div className = "layout">
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
  <Layout>
    <Header style={headerStyle}>
    <a href = "/Main">메인</a>/
    <a href = "/logout">로그아웃</a>/
    <a href = "/login">로그인</a>/
    <a href = "/register">회원가입</a>/
    </Header>
  </Layout>
</Space>

</div>

      <Router>
        <div>
         <Routes>
          <Route path = "/Main" element = {<Main/>}/>
          <Route path="/logout" element={<AuthLandingPage/>}/>
          <Route path="/login" element={< AuthLoginPage/>}/>
          <Route path="/register" element={<AuthRegisterPage/>}/>
        </Routes>
        </div>
        </Router>
   </div>

  );
}

export default App;

