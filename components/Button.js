import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  color: red;
  backgrounColor: red;
  font-size: 16px;
`
export default ({title}) => (
  <Button>{title}</Button>
)

