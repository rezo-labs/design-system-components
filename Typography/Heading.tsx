import * as React from 'react';
import { StandardProperties } from "csstype";
import StyledHeading from './HeadingStyled';
import { tuple } from "../Utils/tuple";


/* Button Types */
const tags = tuple("div", "h1", "h2", "span", "a");
export type htmlTag = (typeof tags)[number];


// Heading Pr
export interface HeadingProps extends StandardProperties {
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
        ...restProps
    } = props;

    return (
        <StyledHeading size={size} as={htmlTag} {...restProps}>
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
