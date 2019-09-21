import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon';
import StyledButton from './Styled';
import { tuple } from "../Utils/tuple";

/* Button Types */
const ButtonTypes = tuple("submit", "button", "reset");
export type ButtonType = (typeof ButtonTypes)[number];

/* Change the style of the button (maybe change in the future) */
const ButtonVariants = tuple("default", "minimal", "ghost", "primary");
export type ButtonVariant  = (typeof ButtonVariants)[number];

/* Change the size of the button */
const ButtonSizes = tuple("small", "default", "large");
export type size = (typeof ButtonSizes)[number];


export interface ButtonStyled {
    children?: React.ReactChild;
    size?: size;
    variant?: ButtonVariant;
    radius?: string | number;
}

export interface BaseButtonProps {
    type?: ButtonType;
    icon?: string;
    href?: string;
    isLoading?: boolean;
    isDisable?: boolean;
    onClick?: React.MouseEventHandler;
}

export type ButtonProps = BaseButtonProps & ButtonStyled;

interface ButtonState {
    isLoading?: boolean;
}

class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps = {
        type: "button",
        isLoading: false,
        isDisable: false,
        size: "default",
        variant: "default",
    };

    static propTypes = {
        type: PropTypes.oneOf(ButtonTypes),
        variant: PropTypes.oneOf(ButtonVariants),
        size: PropTypes.oneOf(ButtonSizes),
        icon: PropTypes.string,
        href: PropTypes.string,
        isLoading: PropTypes.bool,
        isDisable: PropTypes.bool,
        onClick: PropTypes.func,
    };

    private buttonNode: HTMLElement | null;

    constructor(props: ButtonProps){
        super(props);
        this.state = {
            /* set local state isLoading from props isLoading */
            isLoading: props.isLoading,
        };
    }

    componentDidMount(): void {

    }

    buttonRef = (node: HTMLElement | null) => {
        this.buttonNode = node;
    };

    handleOnClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        const { isLoading } = this.state;
        const { onClick } = this.props;

        /* if button is loading then don't set onclick handler */
        if (isLoading) {
            return;
        }

        /*Confused this line */
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }

    };

    render() {
        const {
            type,
            variant,
            size,
            icon,
            children,
            onClick,
            ...restProps
        } = this.props;
        const { isLoading } = this.state;
        return(
            <StyledButton
                type={type}
                variant={variant}
                onClick={this.handleOnClick}
                // ref={this.buttonRef}
            >
                {children}
            </StyledButton>
        );
    }
}

export default Button;


