import { useRecoilValue } from 'recoil';
import { test_state } from './atom';

export const GrandChild = () => {
  /* 読み取り専用のStateを呼び出す */
  const { count } = useRecoilValue(test_state);
  return <div>{count}</div>;
};
