import * as React from 'react';

export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
    // ['aria-hidden']?: React.AriaAttributes['aria-hidden'];
}

export interface IconProps {
    tabIndex?: number;
    name?: string;
    className?: string;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    icon?: React.ComponentType<CustomIconComponentProps>;
    height: string | number;
    width: string | number;
    viewBox?: string;
    style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = (props) => {
    const {
        // affect outter <i>...</i>
        className,

        // affect inner <svg>...</svg>
        name,
        icon: CustomIcon,
        viewBox,

        tabIndex,
        onClick,
        onKeyUp,

        // children
        children,

        width,
        height,


        ...restProps
    } = props;

    let innerNode: React.ReactNode;
    const svgBaseProps = {
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
        focusable: 'false',
    };

    const innerSvgProps: CustomIconComponentProps = {
        ...svgBaseProps,
        width,
        height,
        viewBox,
    };

    if (!viewBox) {
        delete innerSvgProps.viewBox;
    }

    if (children) {
        console.warn(
            Boolean(viewBox)
              || (React.Children.count(children) === 1
                && React.isValidElement(children)
                && React.Children.only(children).type === 'use'),
            'Make sure that you provide correct `viewBox`'
            + 'to the icon.',
        );

        innerNode = (
            <svg {...innerSvgProps} viewBox={viewBox}>
                {children}
            </svg>
        );
    }

    // component > children > type
    if (CustomIcon) {
        console.log('Custom', CustomIcon);
        // innerNode = <CustomIcon {...innerSvgProps}>{children}</CustomIcon>;
        innerNode = <CustomIcon {...innerSvgProps} />;
    }


    if (typeof name === 'string') {
        innerNode = (
            <svg>
                {/* Icon path here */}
            </svg>
        );
    }

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }

    return (
        <i
            aria-label={name && `${name}`}
            role="presentation"
            {...restProps}
            tabIndex={iconTabIndex}
            onClick={onClick}
            onKeyUp={onKeyUp}
            className={className}
        >
            {innerNode}
        </i>
    );
};

export default Icon;
