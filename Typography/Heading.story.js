/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';
import { DESIGN_SYSTEM_TITLE } from '../constants';


storiesOf(`${DESIGN_SYSTEM_TITLE}|Heading`, module)
    .add('Initial', () => (
        <div>
            <Heading is="h1" >Heading is here</Heading>
        </div>
    ));
