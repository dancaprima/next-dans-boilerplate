import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  font-size: '16px'
`

export default ({text}) => (
  <Text>{text}</Text>
)