import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './index';
import { DESIGN_SYSTEM_TITLE } from '../constants';


storiesOf(`${DESIGN_SYSTEM_TITLE}|Box`, module)
    .add('Basic', () => (
        <Box backgroundColor="black" color="white" padding="18px" width="30%">This is basic box</Box>
    ));
