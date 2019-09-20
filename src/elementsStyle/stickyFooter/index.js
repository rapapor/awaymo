import styled from 'styled-components';

export const StickyFooter = styled.div`
  height: calc(100vh - 108px);
  min-height: 750px;
  @media screen and (min-width: 768px){
      min-height: 400px;
    }
`