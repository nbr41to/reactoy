import Link from 'next/link';

const pages = [
  'emoji-mart',
  'nanoid',
];

export default function Home() {
  return (
    <div>
      <h1>Reactoy</h1>
      <h3>pages</h3>
      <nav>
        {pages.map(page => (
          <li>
            <Link href={`${page}`}>{page}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}
