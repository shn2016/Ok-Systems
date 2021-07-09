/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import ContactInfo from "./ContactInfo";
import ContactForm from "./Form";
import Book from "./Book";

import DataSource from "./data.source";
import DataSourceCN from "./data.source.cn";

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
    const source = this.props.isChinese ? DataSourceCN : DataSource;
    const { BookDataSource } = source;

    const children = [
      <ContactInfo
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
