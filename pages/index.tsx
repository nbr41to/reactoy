import Link from 'next/link';
import styled from 'styled-components';

const pages = [
  'emoji-mart',
  'nanoid',
  'react-smooth-dnd',
  'recoil',
  'react-intersection-observer',
];

export default function Home() {
  return (
    <StyledHome>
      <h1>Reactoy</h1>
      <h3>TOYS</h3>
      <nav>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`/${page}`}>{page}</Link>
          </li>
        ))}
      </nav>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  > nav > li {
    margin: 8px 0;
  }
`;
