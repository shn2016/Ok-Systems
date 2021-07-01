/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Nav3 from "./Nav3";
import Footer0 from "./Footer0";
import { Nav30DataSource, Footer00DataSource } from "./data.source";
import "./less/antMotionStyle.module.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


export default class Layout extends React.Component {
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
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <Nav3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        />
        {this.props.children}
        <Footer0
          id="Footer0_0"
          key="Footer0_0"
          dataSource={Footer00DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}
