import * as React from 'react';
import * as CSS from 'csstype';
import StyledHeading from './HeadingStyled';

export interface HeadingStyled {
    color?: CSS.Color;
    // padding value of UIText
    padding?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingBottom?: string;
    paddingRight?: string;
    // Margin value of UIText
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    marginRight?: string;
    // position value
    position?: CSS.PositionProperty;
}

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args;

/* Button Types */
const tags = tuple("div", "h1", "h2", "span", "a");
export type htmlTag = (typeof tags)[number];


// Heading Pr
export interface HeadingProps extends HeadingStyled {
    // Size of text: value can be [100, 200 , 300, ... 800, 900]
    size?: any;
    // Problems? : Chưa biết loại nào cho HTML Tag
    is?: htmlTag;
    // Only except string
    children: string;
}

const Heading: React.FC<HeadingProps> = props => {
    const {
        size,
        is: htmlTag,
        children: text,
    } = props;

    return (
        <StyledHeading size={size} as={htmlTag}>
            {text}
        </StyledHeading>
    );
};

// Default props
Heading.defaultProps = {
    size: '500',
    is: 'div',
};

export default Heading;
