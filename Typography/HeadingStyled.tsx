import styled, { css } from 'styled-components';
import { HeadingStyled } from './Heading';


const sizes: any = {
    100: css`
    padding: 5px 20px;
    font-size: 11px;
    font-weight: normal;
  `,
    200: css`
    padding: 10px 30px;
    font-size: 12px;
    font-weight: normal;
  `,
    300: css`
    padding: 10px 30px;
    font-size: 12px;
    font-weight: normal;
  `,
    400: css`
    padding: 10px 30px;
    font-size: 14px;
    font-weight: normal;
  `,
    500: css`
    padding: 10px 30px;
    font-size: 16px;
    font-weight: normal;
  `,
    600: css`
    padding: 10px 30px;
    font-size: 20px;
    font-weight: normal;
  `,
    700: css`
    padding: 10px 30px;
    font-size: 24px;
    font-weight: normal;
  `,
    800: css`
    padding: 10px 30px;
    font-size: 29px;
    font-weight: normal;
  `,
    900: css`
    padding: 10px 30px;
    font-size: 35px;
    font-weight: normal;
  `,
};

interface StyledProps extends HeadingStyled {
    size?: any;
}

export default styled.div<StyledProps>`
    font-family: 'Barlow', sans-serif;
    ${({ size }) => sizes[size]};
`;
