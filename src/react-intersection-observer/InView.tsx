import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

export const InViewComp = () => (
  <InView as='div' onChange={(inView) => console.log('Inview:' + inView)}>
    <h2>Animated</h2>
    {({ inView }) => {
      console.log(inView);
      return inView && <h2>Alert!!</h2>;
    }}
  </InView>
);

const Styled = styled.div`
  padding: 12px;
  background-color: azure;
  transition: all 1s ease-out;
  &:hover {
    transition: all 1s ease-in-out;
  }
  h2 {
    color: tomato;
  }
`;
