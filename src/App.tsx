import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp";

import { Layout, Menu } from "antd";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import Category from "./components/Categories";
import Categories from "./components/Categories";
import Records from "./components/Records";
import AppHeader from "./components/AppHeader";
import Logout from "./components/Logout";

const { Content, Footer } = Layout;

{
  /* <Routes>
<Route path="/register" element={<SignUp />} />
</Routes> */
}
const Landing = () => {
  return (
    <div>
      <h2>Landing (Public: anyone can access this page)</h2>
    </div>
  );
};
function App() {
  const navigate = useNavigate();

  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          marginTop: 64,
        }}
      >
        <Routes>
          <Route index element={<Landing />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route element={<PrivateRouter />}>
            <Route path="/categories" element={<Categories />} />
            <Route path="/records" element={<Records />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Serhan MAKNİK Design ©2022 Created by Maknik Art
      </Footer>
    </Layout>
  );
}

export default App;
