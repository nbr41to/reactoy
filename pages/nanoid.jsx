import { nanoid } from 'nanoid';

const NanoId = () => {
  return (
    <div>
      <h1>nanoid</h1>
      <a
        href='https://www.npmjs.com/package/nanoid'
        target='_blank'
        rel='noopener noreferrer'
      >
        nanoid
      </a>
      <div>{nanoid(8)}</div>
    </div>
  );
};

export default NanoId;
