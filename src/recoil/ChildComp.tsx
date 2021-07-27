import { useRecoilState } from 'recoil';
import { test_state } from './atom';
import { GrandChild } from './GrandChild';

export const ChildComp = () => {
  /* Stateとその変更関数を呼び出す */
  const [{ value }, setState] = useRecoilState(test_state);

  const countUp = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  const changeValue = () => {
    setState((prev) => ({
      ...prev,
      value:
        prev.value === 'バスコ・ダ・ガマ'
          ? 'やまとなでしこ'
          : 'バスコ・ダ・ガマ',
    }));
  };

  return (
    <div>
      <button onClick={changeValue}>change value!!</button>
      <button onClick={countUp}>count up!!</button>
      <div>{value}</div>
      <GrandChild />
    </div>
  );
};
