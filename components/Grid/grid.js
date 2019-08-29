import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.templateColumns};
  grid-gap: ${props => props.gap};
  grid-row-gap: ${props => props.rowGap};
  grid-auto-rows: ${props => props.autoRows};
  width: ${props => props.width};
  height: ${props => props.height};
`;
