import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  background: #511ee9;
  color: #ffffff;
  padding: 1rem;
`;

const AppContent = styled.div`
  padding: 1rem;
`;

const SamplePattern = () => (
  <div>
    <Menu>{"Logo"}</Menu>
    <AppContent>
      <svg
        viewBox="0 0 200 100"
        style={{ display: "block", background: "#EEE" }}
      />
      <h2>{"Heading"}</h2>
      <p>
        {
          "This is some sample content for this app. It should show that the content of the iFrame wraps correctly."
        }
      </p>
    </AppContent>
  </div>
);

export default SamplePattern;
