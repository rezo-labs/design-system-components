import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex, { FlexItem } from './index';
import Box from '../Box';
import Icon from '../Icon';

const boxStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '18px',
    border: 'solid 1px white',
};

storiesOf('Flex', module)
    .add('Basic usage', () => (
        <Flex width="100%" justifyBetween>
            {[1, 2, 3, 4, 5].map(e => (
                <FlexItem flex="1" padding="100px">
                    <Box {...boxStyles}>{`Item box ${e}`}</Box>
                </FlexItem>
            ))}
        </Flex>
    ))
    .add('Flex Icon', () => (
        <Flex width="100%" justifyStart>
            {[1, 2, 3, 4, 5].map(e => (
                <FlexItem>
                    <Icon width="24px" height="24px" viewBox="-3.5 -2 24 24">
                        <path d="M13.623,10.627c-0.025,-2.533 2.066,-3.748 2.159,-3.808c-1.175,-1.72 -3.005,-1.955 -3.657,-1.982c-1.557,-0.158 -3.039,0.917 -3.83,0.917c-0.788,0 -2.008,-0.894 -3.3,-0.87c-1.696,0.025 -3.261,0.986 -4.135,2.506c-1.764,3.06 -0.452,7.595 1.267,10.077c0.84,1.215 1.842,2.58 3.157,2.53c1.266,-0.05 1.745,-0.819 3.276,-0.819c1.531,0 1.962,0.82 3.302,0.795c1.363,-0.026 2.226,-1.239 3.06,-2.457c0.965,-1.41 1.362,-2.775 1.386,-2.845c-0.03,-0.013 -2.658,-1.02 -2.684,-4.045Zm-2.518,-7.433c0.698,-0.847 1.169,-2.022 1.04,-3.194c-1.005,0.04 -2.224,0.67 -2.945,1.515c-0.647,0.75 -1.214,1.945 -1.062,3.094c1.122,0.088 2.268,-0.57 2.967,-1.415Z" fill="#000" />
                    </Icon>
                </FlexItem>
            ))}
        </Flex>
    ));
