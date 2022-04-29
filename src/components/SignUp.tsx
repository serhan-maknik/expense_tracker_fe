import React from "react";

import { Form, Input, InputNumber, Button, message, Space } from "antd";

import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import showError from "../utils/showError";

const SignUp = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("SERHAN: ", values);
    try {
      await api().post("users/register", values);
      navigate("/login", { state: { newSignUp: true } });
    } catch (error: any) {
      console.log("hata aldik");
      showError(error.response.data.errorMessage);
    }
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{ textAlign: "center" }}>Kayıt Ol Adamı Hasta Etme</h2>
      <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 6 },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="full_name" label="Full Name">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
