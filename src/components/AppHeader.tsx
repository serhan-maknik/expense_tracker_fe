import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../store/actions/userActions";
import { AppState } from "../store";
import { useLocation, useNavigate } from "react-router-dom";

const AppHeader = () => {
  const { data, loading, error } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(isLoggedIn() as any);
  }, []);
  const navClick = (pathName: string) => {
    navigate(pathName);
  };

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        {data.username ? (
          <React.Fragment>
            <Menu.Item key="/categories" onClick={() => navClick("categories")}>
              Kategoriler{" "}
            </Menu.Item>
            <Menu.Item key="/records" onClick={() => navClick("records")}>
              Harcama Kayıtları{" "}
            </Menu.Item>
            <Menu.Item key="/logout" onClick={() => navClick("logout")}>
              Çıkış
            </Menu.Item>
          </React.Fragment>
        ) : loading ? null : (
          <Menu.Item key="/login" onClick={() => navClick("login")}>
            Giriş
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default AppHeader;

{
  /* <Menu.Item key="/categories" onClick={() => navClick("categories")}>
Kategoriler{" "}
</Menu.Item>
<Menu.Item key="/records" onClick={() => navClick("records")}>
Harcama Kayıtları{" "}
</Menu.Item>
<Menu.Item key="/logout" onClick={() => navClick("logout")}>
Çıkış
</Menu.Item> */
}
