import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import "./layout.css";

import Sidebar from "../Sidebar";
import Content from "../Content";
import Logo from "../Logo";
import PropsTable from "../PropsTable";

function PageTemplate({ data }) {
  const { mdx, componentMetadata } = data;
  return (
    <>
      <header className="site-header">
        <Logo />
      </header>
      <div className="wrapper">
        <Sidebar />
        <Content>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          {componentMetadata && (
            <PropsTable componentMetadata={componentMetadata} />
          )}
        </Content>
      </div>
      <footer className="site-footer">{"Footer"}</footer>
    </>
  );
}

export default PageTemplate;

export const pageQuery = graphql`
  query PackageQuery($id: String, $name: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
    componentMetadata(displayName: { eq: $name }) {
      displayName
      props {
        name
        required
        defaultValue {
          value
        }
        type {
          name
        }
      }
    }
  }
`;
