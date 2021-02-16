import React from "react";
import { Layout } from "antd";
import Page from "../Props/Pops";
// import { Link } from "react-router-dom";

const { Header } = Layout;

const Demo = (props) => {
  console.log("SIdebar menu are", props);

  return (
    <Layout>
      {!props.Header ? (
        ""
      ) : (
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          {props.Header.props.children}
        </Header>
      )}
      <br />
      {!props.Headers ? (
        ""
      ) : (
        <Header
          theme="light"
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          <Page print={props.Headers} />
        </Header>
      )}

      {/* <Content style={{ margin: "0 16px" }}>
          {!props.Message ? "" : props.Message.props.children}
          {props.Content}
        </Content> */}
    </Layout>
  );
};

export default Demo;
