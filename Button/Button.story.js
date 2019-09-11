/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import { DESIGN_SYSTEM_TITLE } from '../constants';


storiesOf(`${DESIGN_SYSTEM_TITLE}|Button`, module)
    .add('Initial', () => (
        <div>
            <Button variant="default" size="medium">
        button
            </Button>
        </div>
    ));
