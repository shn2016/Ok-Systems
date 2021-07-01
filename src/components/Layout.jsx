/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useEffect, useState } from "react";
import { enquireScreen } from "enquire-js";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Nav3 from "./Nav3";
import Footer0 from "./Footer0";
import { Nav30DataSource, Footer00DataSource } from "./data.source";
import "./less/antMotionStyle.module.less";

React.useLayoutEffect = React.useEffect 
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default function Layout(props) {
  const [isMobile, setIsMobile] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
  }, []);

  return (
    <div
      className="templates-wrapper"
    >
      <Helmet>
        <title>
          {props.pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={isMobile}
      />
      {props.children}
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={isMobile}
      />
    </div>
  );
}
