
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  background: #511EE9;
  color: #FFFFFF;
  border: 0;
  border-radius: 10rem;
  height: 3rem;
  padding: 0 1.5rem;
  font-family: inherit;
  font-size: inherit;
  &:hover,
  &:focus {
    background: #4114c8;
  }
  &:active {
    background: #3410a0;
  }
`

const Button = props => <StyledButton {...props} />

Button.defaultProps = {
  width: "auto",
}

Button.propTypes = {
  width: PropTypes.string,
}

export default Button
