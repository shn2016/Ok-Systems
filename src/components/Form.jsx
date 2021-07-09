import React from "react";
import { Form, Input, Button } from "antd";
import emailService from "../service";

export default function ContactForm(props) {
  const { ...tagProps } = props;
  delete tagProps.dataSource;
  delete tagProps.isMobile;

  const onFinish = (values) => {
    emailService(values)
      .then(() => alert("Form Successfully Sent"))
      .catch((error) => alert(error));
  };

  return (
    <div className="contact-page page2">
      <div className="contact-page-wrapper">
        <h2>
          Contact Form<span> 联系我们</span>
        </h2>
        <div className="home-code" style={{ padding: "35px 50px 2px 0px" }}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            name="contact"
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              key="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input name="name" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              key="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input name="phone" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              type="email"
              key="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input name="Email" type="email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              key="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea row={4} name="message" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
              <Button type="primary" htmlType="submit">
                <span style={{ color: "#fff" }}>Submit</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
