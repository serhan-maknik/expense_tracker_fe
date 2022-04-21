import React from "react";
import { Form, Input, Button, Checkbox, Result } from "antd";

import showError from "../utils/showError";
import api from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomizedState } from "../types/users";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("LOCATİON:", location);

  const state = location.state as CustomizedState;

  const onFinish = (values: any) => {
    api
      .post("users/login", values)
      .then((response) => {
        console.log("Success:", values);
        navigate("/");
      })
      .catch((error) => {
        console.log("Failed:", error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    showError(errorInfo);
  };

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login Ol Adamı Hasta Etme</h2>
      {state?.newSignUp && (
        <Result
          status="success"
          title="Kaydoldun la"
          subTitle="Şimdi şifreni gir oraya paşa paşa bakim "
        />
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
