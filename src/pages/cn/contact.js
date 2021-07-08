import * as React from "react";
import Layout from "../../components/Layout";
import Contact from "../../components/Contact";

const IndexPage = () => {
  return (
    <Layout pageTitle="联系我们" isChinese>
      <Contact isChinese/>
    </Layout>
  );
};
export default IndexPage;
