import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex max-w-screen-sm mx-auto w-full h-16 justify-content">
      <Link href="/">
        <a className="m-auto">Home</a>
      </Link>
    </header>
  );
}
