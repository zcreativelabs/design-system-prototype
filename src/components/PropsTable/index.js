import React from "react";
import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  padding: 0.5rem 0;
  border-bottom: 0.0625rem solid #ebebeb;
  code {
    font-family: menlo, monospace;
    background: #ebebeb;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`;

const PropsTable = ({ componentMetadata }) => {
  const { props } = componentMetadata;
  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2>{"Props"}</h2>

      <TableRow style={{ fontWeight: 700 }}>
        <div>{"Name"}</div>
        <div>{"Type"}</div>
        <div>{"Default"}</div>
      </TableRow>

      {props &&
        props.map((prop, i) => (
          <TableRow key={`prop-${i}`}>
            <div>
              <code>
                {prop.name}
                {prop.required ? "*" : ""}
              </code>
            </div>
            <div>
              <code>{prop.type.name}</code>
            </div>
            <div>
              <code>{prop.defaultValue && prop.defaultValue.value}</code>
            </div>
          </TableRow>
        ))}
    </div>
  );
};

export default PropsTable;
