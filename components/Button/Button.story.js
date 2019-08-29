/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';


storiesOf('Button', module)
    .add('Initial', () => (
        <div>
            <Button variant="default" size="medium">
        button
            </Button>
        </div>
    ));
