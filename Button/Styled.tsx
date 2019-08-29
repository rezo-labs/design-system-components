import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const Button: React.FC<ButtonProps> = props => (
    <button
      type={props.type}
    >
        {props.children}
    </button>
);

const sizes = {
    small: css`
    padding: 5px 20px;
    font-size: 12px;
  `,
    default: css`
    padding: 10px 30px;
    font-size: 14px;
  `,
    large: css`
    padding: 15px 40px;
    font-size: 18px;
  `,
};

const theme = {
  primary: ['#007bff', '#007bff'],
  default: ['#d6d6c2', 'white'],
  secondary: ['#6c757d', '#6c757d'],
  info: ['#17a2b8', '#17a2b8'],
  error: ['#ff1a1a', '#ff1a1a'],
  warning: ['#ffc107', '#ffc107'],
  success: ['#28a745', '#28a745'],
  '': ['black', 'black'],
};

const variants = {
    default: css`
      border: 1px solid tomato;
      background: tomato;
      color: white;
  `,
    minimal: css`
      border: 1px solid palevioletred;
      background: palevioletred;
      color: white;
  `,
    ghost: css`
      border: 1px solid #273444;
      background: #273444;
      color: white;
  `,
    primary: css`
      border: 1px solid #eff2f7;
      background: #f9fafc;
      color: #273444;
  `,
};

const StyledButton = styled(Button)`
  ${({ size }) => sizes[size]};
  ${({ variant }) => variants[variant]};

  outline: none;
  border-radius: ${({ radius = 5 }) => radius}px;
`;

export default StyledButton;
