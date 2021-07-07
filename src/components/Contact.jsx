/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Feature2 from "./Feature2";
import ContactForm from "./Form";
import Book from "./Book";

import { Feature20DataSource, BookDataSource } from "./data.source";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Feature2
        id="Feature2"
        key="Feature2"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <ContactForm key="contactForm" isMobile={this.state.isMobile} />,
      <Book
        id="Content11_0"
        key="Content11_0"
        dataSource={BookDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
