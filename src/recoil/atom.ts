import { atom } from 'recoil';

export const test_state = atom({
  key: 'test_state', // unique key

  // initial value
  default: {
    value: 'test_value',
    count: 0,
  },
});

// keyとdefaultは必須
