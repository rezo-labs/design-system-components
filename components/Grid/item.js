import styled from 'styled-components';

export const GridItem = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
`;
