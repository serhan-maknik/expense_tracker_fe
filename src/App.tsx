import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

import { Layout, Menu } from "antd";
import Login from "./components/Login";

const { Header, Content, Footer } = Layout;

{
  /* <Routes>
<Route path="/register" element={<SignUp />} />
</Routes> */
}

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3 </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 50,
          padding: "50px",
          marginTop: 64,
        }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Serhan MAKNİK Design ©2022 Created by Maknik Art
      </Footer>
    </Layout>
  );
}

export default App;
