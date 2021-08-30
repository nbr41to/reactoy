import { useState, VFC } from 'react';
import styled from 'styled-components';

type SafariPrePageProps = {
  className?: string;
};

const SafariPrePage: VFC<SafariPrePageProps> = ({ className }) => {
  const [isApply, setIsApply] = useState(true);
  return (
    <StyledSafariPrePage className={`${className}`} isApply={isApply}>
      <h1>Safari Pre</h1>
      <p>iOSで高さいっぱいに表示したいとき</p>
      <button onClick={() => setIsApply(!isApply)}>toggle</button>
      <p>{isApply ? 'min-height: -webkit-fill-available;' : 'none'}</p>
      <div className='footer'>
        <button>button</button>
        <button>button</button>
        <button>button</button>
      </div>
    </StyledSafariPrePage>
  );
};

const StyledSafariPrePage = styled.div<{ isApply: boolean }>`
  width: 100%;
  min-height: 100vh;
  ${({ isApply }) => isApply && 'min-height: -webkit-fill-available;'};
  background-color: palegreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default SafariPrePage;
