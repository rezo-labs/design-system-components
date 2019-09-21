import styled from 'styled-components';
import is from '../Utils/styledIs';
import Box from '../Box';

export default styled(Box)`
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
  flex: ${props => props.flex};
  background-color: ${props => props.backgroundColor};
  border-bottom: ${props => props.borderBottom};
`;
