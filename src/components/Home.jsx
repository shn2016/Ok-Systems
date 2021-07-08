/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Banner5 from "./Banner5";
import Service from "./Service";
import Stat from "./Stat";
import Product from "./Product";
import Testimonials from "./Testimonials";
import Book from "./Book";
import Portfolio from "./Portfolio";

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
    const {
      Banner50DataSource,
      ServiceDataSource,
      StatDataSource,
      ProductDataSource,
      TestimonialsDataSource,
      BookDataSource,
      PortfolioDataSource,
    } = source;

    const children = [
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Service
        id="Services"
        key="Content0_0"
        dataSource={ServiceDataSource}
        isMobile={this.state.isMobile}
      />,
      <Product
        id="Products"
        key="Content3_0"
        dataSource={ProductDataSource}
        isMobile={this.state.isMobile}
      />,
      <Stat
        id="Feature6_0"
        key="Feature6_0"
        dataSource={StatDataSource}
        isMobile={this.state.isMobile}
      />,
      <Portfolio
        id="Portfolios"
        key="Portfolios"
        dataSource={PortfolioDataSource}
        isMobile={this.state.isMobile}
      />,
      <Testimonials
        id="Teams0_0"
        key="Teams0_0"
        dataSource={TestimonialsDataSource}
        isMobile={this.state.isMobile}
      />,
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
