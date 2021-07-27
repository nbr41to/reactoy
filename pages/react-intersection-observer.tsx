import { useInView } from 'react-intersection-observer';
import { InViewComp } from 'src/react-intersection-observer/InView';
import { ObserveComp } from 'src/react-intersection-observer/ObserveComp';
import styled from 'styled-components';

const IntersectionObserver = () => {
  const { ref, inView, entry } = useInView({
    /* options */
    trackVisibility: true,
    delay: 3000,
  });

  // console.log(ref, inView, entry);

  return (
    <div>
      <h1>react-intersection-observer</h1>
      <a
        href='https://github.com/thebuilder/react-intersection-observer'
        target='_blank'
        rel='noopener noreferrer'
      >
        react-intersection-observer
      </a>
      <br />
      <hr />
      <LongLength />
      <div ref={ref}>
        <h2>{`inside viewport "${inView}".`}</h2>
      </div>
      <ObserveComp />
      <LongLength />
      <InViewComp />
      <LongLength />
    </div>
  );
};

export default IntersectionObserver;

const LongLength = styled.div`
  width: 20px;
  height: 1200px;
  background-color: palegreen;
`;
