import { nanoid, customAlphabet } from 'nanoid';

export const createId = (length: number = 16): string => nanoid(length);

export const createNumber = (length: number = 16): string => {
  const nanoid = customAlphabet('0123456789', length);
  return nanoid();
};
