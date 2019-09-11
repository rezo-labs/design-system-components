import styled from 'styled-components';
import * as constants from './constants';

function getShadowDirection(shadowDirection) {

}

function getBoxLevelStyle(boxLevel, shadowDirection) {
    const defaultShadowDirection = '';
    const defaultBoxLevel = 'level0';

    switch (boxLevel) {
        case 'level0':
            console.log('level0', { boxLevel, shadowDirection });
            if (shadowDirection === undefined || shadowDirection === null) {
                return 'none';
            }


            break;
        case 'level1':
            console.log('level1', { boxLevel, shadowDirection });
            if (shadowDirection === undefined || shadowDirection === null) {
                return defaultShadowDirection;
            }
            return constants.level1Top;
        case 'level2':
            console.log('level2', { boxLevel, shadowDirection });
            if (shadowDirection === undefined || shadowDirection === null) {
                return defaultShadowDirection;
            }

            break;
        case 'level3':
            console.log('level3', { boxLevel, shadowDirection });
            if (shadowDirection === undefined || shadowDirection === null) {
                return defaultShadowDirection;
            }

            break;
        default:
            break;
    }
}

export const Div = styled.div`
  
  /************************** @@Box shadow ************************/
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
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => props.border};
  font-family: sans-serif;
  
  position: ${props => props.position};
  display: ${props => props.display};
  /* box-shadow: rgba(0,0,0,0.06) 0px 2px 5px 0px; */

  box-shadow: ${props => getBoxLevelStyle(props.boxLevel, props.shadowDirection)};
  flex: ${props => props.flex};
  /* box-shadow: ${(props) => {
        switch (props.boxLevel) {
            case 'level0':
                console.log('level0');
                break;
            case 'level1':
                console.log('level1');
                break;
            case 'level2':
                console.log('level2');
                break;
            case 'level3':
                console.log('level3');
                break;
            default:
                break;
        }
    }}; */
`;

export const Span = styled.span``;

export const Link = styled.a`
    cursor: pointer;
`;

export const Section = styled.section``;
