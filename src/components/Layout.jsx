/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useEffect, useState } from "react";
import { enquireScreen } from "enquire-js";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Nav3 from "./Nav3";
import Footer0 from "./Footer0";
import DataSource from "./data.source";
import DataSourceCN from "./data.source.cn";

import "./less/antMotionStyle.module.less";

React.useLayoutEffect = React.useEffect;
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default function Layout(props) {
  const [isMobile, setIsMobile] = useState(false);

  const source = props.isChinese ? DataSourceCN : DataSource;
  const { Nav30DataSource, Footer00DataSource, SEODataSource } = source;
  const { title, lang, description, keywords, twitter, robots } = SEODataSource;
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
    <div className="templates-wrapper">
      <Helmet
        htmlAttributes={{
          lang,
        }}
      >
        <title>
          {title} | {props.pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta name="robots" content={robots} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta
          property="og:title"
          content={`${title} | ${props.pageTitle} | ${data.site.siteMetadata.title}`}
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="article" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter.label1" content={twitter.label1} />
        <meta name="twitter:data1" content={twitter.data1} />
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
