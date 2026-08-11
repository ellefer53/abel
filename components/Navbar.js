import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="brand">AUTO<span>VERSE</span></Link>
      <nav className="nav-links">
        <Link href="/">HOME</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/cars">CARS</Link>
      </nav>
    </header>
  );
}