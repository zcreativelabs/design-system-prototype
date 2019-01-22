import React from "react";
import { MDXProvider } from "@mdx-js/tag";

import Playground from "../Playground";

const Content = ({ children }) => (
  <div className="docs-content">
    <MDXProvider components={{ code: Playground }}>{children}</MDXProvider>
  </div>
);

export default Content;
