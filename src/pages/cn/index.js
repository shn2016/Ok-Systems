import * as React from "react";
import Layout from "../../components/Layout";
import Oks from "../../components/Home";

const IndexPage = () => {
  return (
    <Layout pageTitle="中文" isChinese>
      <Oks isChinese/>
    </Layout>
  );
};
export default IndexPage;
