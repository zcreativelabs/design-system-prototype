import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./layout.css";

import Sidebar from "../Sidebar";
import Content from "../Content";
import Logo from "../Logo";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <header className="site-header">
          <Logo />
        </header>
        <div className="wrapper">
          <Sidebar />
          <Content>{children}</Content>
        </div>
        <footer className="site-footer">{"Footer"}</footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
