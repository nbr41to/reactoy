import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

export const ObserveComp = () => {
  const { ref, inView, entry } = useInView();
  console.log(inView);
  return (
    <StyledObserveComp inView={inView} ref={ref}>
      <h2>Animated</h2>
    </StyledObserveComp>
  );
};

const StyledObserveComp = styled.div<{ inView: boolean }>`
  padding: 12px;
  color: ${(props) => (props.inView ? 'tomato' : 'aquamarine')};
  background-color: ${(props) => (props.inView ? 'aquamarine' : 'tomato')};
  transition: all 5s linear;
`;
