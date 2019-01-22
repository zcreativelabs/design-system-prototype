import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";

const Navigation = styled.nav`
  > a {
    display: block;
  }
`;

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query allPackagesQuery {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="sidebar">
        <div>
          <h2>{"Design System"}</h2>
          <Navigation>
            <Link to="/">{"Home"}</Link>
            <Link to="/playground-demo">{"Playground Demo"}</Link>
            <h3>{"Patterns"}</h3>
            <Link to="/pattern">{"Sample Pattern Showcase"}</Link>
            <Link to="/patterns/sample-pattern">{"Sample Pattern"}</Link>
            <h3>{"Components"}</h3>
            {data.allMdx.edges.map(
              ({ node }) =>
                node.frontmatter.slug !== "/packages" && (
                  <Link key={node.id} to={node.frontmatter.slug}>
                    {node.frontmatter.title}
                  </Link>
                )
            )}
          </Navigation>
        </div>
      </div>
    )}
  />
);

export default Sidebar;
