import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, GridItem} from './index';
import styled from 'styled-components';
import { DESIGN_SYSTEM_TITLE } from '../constants';

const Div = styled.div`
  background-color: ${props => props.bg};
  color: white;
  font-family: sans-serif;
`;

storiesOf(`${DESIGN_SYSTEM_TITLE}|Grid`, module)
    .add('Initial', () => (
      <Grid
        width="100%"
        height="100vh"
        templateColumns="repeat(3, 1fr)"
        gap="10px"
        autoRows="minmax(100px, auto)"
      >
        <GridItem column="1 / 3" row="1">
          <Div bg="#cf455c">
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </Div>
        </GridItem>
        <GridItem column="2 / 4" row="1 / 3">
          <Div bg="#204969">
            <h1>World!</h1>
          </Div>
        </GridItem>
      </Grid>
    ));
