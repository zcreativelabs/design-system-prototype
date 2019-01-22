import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Button from "../../../packages/Button";
import P from "../../../packages/Paragraph";

const SimpleCodePreview = styled.code`
  font-family: menlo, monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background: #f5f5f5;
`;

const Playground = ({ children, ...props }) => {
  const isJsx = props.className === "language-jsx";
  return isJsx ? (
    <LiveProvider
      code={children}
      scope={{ Button, P }}
      mountStylesheet={false}
      {...props}
    >
      <LivePreview
        style={{
          background: "#FFFFFF",
          padding: "1rem",
          overflow: "hidden",
          fontFamily: "Averta PE, sans-serif",
          border: "1px solid #DDD",
          borderBottom: 0
        }}
      />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  ) : (
    <SimpleCodePreview>{children}</SimpleCodePreview>
  );
};

export default Playground;
