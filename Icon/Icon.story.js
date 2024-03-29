/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';
import Android from './svg/android.svg';
import { DESIGN_SYSTEM_TITLE } from '../constants';


storiesOf(`${DESIGN_SYSTEM_TITLE}|Icon`, module)
    .add('Initial', () => (
        <div>
            <Icon width="60px" height="60px" fill="red" icon={Android} />
        </div>
    ));
