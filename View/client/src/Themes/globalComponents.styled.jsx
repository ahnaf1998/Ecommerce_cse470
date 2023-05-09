import styled from 'styled-components';
import { Variable } from './globalVariables';
export const Container = styled.div`
  max-width: 1660px;

  margin: 1rem auto;
  @media only screen and (max-width: ${Variable.desktop_width}) {
    margin: 1rem 2rem;
  }
  @media only screen and (max-width: ${Variable.mobile_width}) {
    margin: 1rem;
  }
`;
