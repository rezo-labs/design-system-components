import styled from 'styled-components';
import is from '../Utils/styledIs';
import * as CSS from "csstype";

export interface CSSStyled {
    width?: string;
    height?: string;
    backgroundColor?: string;
    flex?: string;

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
    justifyBetween?: boolean;
}

export default styled.div<CSSStyled>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};

  background-color: ${props => props.backgroundColor};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  
  flex: ${props => props.flex};
  

  ${is('inline')`
    display: inline-flex;
  `};
 
  ${is('row')`
    flex-direction: row; /* default */
  `};
  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};
  ${is('column')`
    flex-direction: column;
  `};
  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};
  
  ${is('nowrap')`
    flex-wrap: nowrap; /* default */
  `};
  ${is('wrap')`
    flex-wrap: wrap;
  `};
  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};
  
  ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};
  ${is('justifyEnd')`
    justify-content: flex-end;
  `};
  ${is('justifyCenter')`
    justify-content: center;
  `};
  ${is('justifyBetween')`
    justify-content: space-between;
  `};
  ${is('justifyAround')`
    justify-content: space-around;
  `};
  
  ${is('contentStart')`
    align-content: flex-start;
  `};
  ${is('contentEnd')`
    align-content: flex-end;
  `};
  ${is('contentCenter')`
    align-content: center;
  `};
  ${is('contentSpaceBetween')`
    align-content: space-between;
  `};
  ${is('contentSpaceAround')`
    align-content: space-around;
  `};
  ${is('contentStretch')`
    align-content: stretch; /* default */
  `};
  
  ${is('alignStart')`
    align-items: flex-start;
  `};
  ${is('alignEnd')`
    align-items: flex-end;
  `};
  ${is('alignCenter')`
    align-items: center;
  `};
  ${is('alignBaseline')`
    align-items: baseline;
  `};
  ${is('alignStretch')`
    align-items: stretch;
  `};
  
  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};
  ${is('center')`
    align-items: center;
    justify-content: center;
  `};
`;
