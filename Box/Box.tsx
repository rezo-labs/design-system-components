import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
    Div, SectionStyled, Span, Link,
} from './Styled';
import { tuple } from '../Utils/tuple';



/* Button Types */
const BoxTypes = tuple('a', 'div', 'span', 'section');
export type BoxType = (typeof BoxTypes)[number];

/* Button Types */
const BoxLevels = tuple('level0', 'level1', 'level2', 'level3');
export type BoxLevel = (typeof BoxLevels)[number];

/* Button Types */
const BoxShadowDirections = tuple('none', 'top', 'bottom', 'left', 'right');
export type ShadowDirection = (typeof BoxShadowDirections)[number];


export interface BoxProps {
    is: BoxType;
    boxLevel: BoxLevel;
    shadowDirection: ShadowDirection;
}

const Box: React.FC<BoxProps> = props => {
    const {
        is, boxLevel, shadowDirection, children, ...restProps
    } = props;

    let BoxWrapper = null;
    switch (is) {
        case 'div':
            BoxWrapper = Div;
            break;

        case 'span':
            BoxWrapper = Span;
            break;

        case 'section':
            BoxWrapper = SectionStyled;
            break;

        case 'a':
            BoxWrapper = Link;
            break;
        default:
            break;
    }

    return (
        <React.Fragment>
            {BoxWrapper
          && (
              <BoxWrapper {...restProps}>
                  {children}
              </BoxWrapper>
          )}
        </React.Fragment>
    );
};

Box.propTypes = {
    is: PropTypes.oneOf(['a', 'div', 'span', 'section']),
    boxLevel: PropTypes.oneOf(['level0', 'level1', 'level2', 'level3']),
    shadowDirection: PropTypes.oneOf(['none', 'top', 'bottom', 'left', 'right']),
};

Box.defaultProps = {
    is: 'div',
    boxLevel: 'level0',
    shadowDirection: 'none',
};

export default Box;
