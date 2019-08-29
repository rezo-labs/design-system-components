/* eslint-disable import/no-unresolved */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';
import Android from './svg/android.svg';


storiesOf('Icon', module)
    .add('Initial', () => (
        <div>
            <Icon width="60px" height="60px" icon={Android} />
        </div>
    ));
