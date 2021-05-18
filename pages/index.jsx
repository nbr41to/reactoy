import Link from 'next/link';

const pages = [
  'emoji-mart',
];

export default function Home() {
  return (
    <div>
      {pages.map(page =>
        <Link href={`${page}`}>{page}</Link>
      )}
    </div>
  );
}
