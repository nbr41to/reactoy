import { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs');
  const filenames: string[] = fs.readdirSync('pages'); //ファイル名を取得
  const paths = filenames
    .map((filename) => {
      const path = filename.replace('.jsx', '').replace('.tsx', '');
      return path;
    })
    .filter(
      (path) =>
        path !== 'index' &&
        path !== '_app' &&
        path !== '_document' &&
        path !== 'api'
    );

  return {
    props: {
      paths,
    },
  };
};

export default function Home({ paths }) {
  return (
    <StyledHome>
      <h1>Reactoy</h1>
      <h3>TOYS</h3>
      <nav>
        {paths.map((page) => (
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
