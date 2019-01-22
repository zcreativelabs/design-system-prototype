import React from "react";
import styled from "styled-components";

const sizes = {
  mobile: 375,
  desktop: 1440
};

const ratios = {
  mobile: "177%",
  desktop: "56%"
};

const DeviceWrapper = styled.div`
  width: 100%;
`;

const StyledDevice = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 150%;
  border-radius: 0.5rem;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  iframe {
    display: block;
    border: 0;
    max-width: 100%;
  }
`;

const Device = ({ variant = "mobile", src }) => (
  <DeviceWrapper style={{ maxWidth: sizes[variant] }}>
    <StyledDevice style={{ paddingBottom: ratios[variant] }}>
      <div>
        <iframe
          title="sample frame"
          id="sample-frame"
          height="100%"
          width="100%"
          src={src}
        />
      </div>
    </StyledDevice>
  </DeviceWrapper>
);

export default Device;
