import React from 'react';
import PropTypes from 'prop-types';
import {
    Div, Section, Span, Link,
} from './Styled';


export default function Box(props) {
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
            BoxWrapper = Section;
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
              <BoxWrapper boxLevel={boxLevel} shadowDirection={shadowDirection} {...restProps}>
                  {children}
              </BoxWrapper>
          )}
        </React.Fragment>
    );
}

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
