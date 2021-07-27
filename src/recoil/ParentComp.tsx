import { RecoilRoot } from 'recoil';
import { ChildComp } from './ChildComp';

export const ParentComp = () => {
  return (
    <RecoilRoot>
      <ChildComp />
    </RecoilRoot>
  );
};
