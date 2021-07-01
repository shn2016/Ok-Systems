import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col, Form, Input, Button } from "antd";

export default function ContactForm(props) {
  const { ...tagProps } = props;
  const { isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? "bottom" : "left",
    one: isMobile
      ? {
          scaleY: "+=0.3",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        }
      : {
          x: "+=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        },
  };
  return (
    <div className="home-page-wrapper content6-wrapper">
      <OverPack className="home-page content6" component={Row}>
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={["easeOutCubic", "easeInCubic"]}
          className="content6-text"
          component={Col}
          componentProps={{
            md: 10,
            xs: 24,
          }}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
              label="email"
              name="email"
              type="email"
              key="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input name="email" type="email" />
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

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="contact-form" value="contact" />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
