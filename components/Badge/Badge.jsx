import React from 'react';
import PropTypes from 'prop-types';

/**
 * Badge component
 */
export default function Badge(props) {
    return (
        <div />
    );
}

Badge.propTypes = {
    /** Variant of the badge, each variant has a unique style */
    variant: PropTypes.string.isRequired,
    /** Size of the badge, each size has a pre-defined number of font-size and padding and margin */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
