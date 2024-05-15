import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#21124a] text-yellow-400 p-4 flex justify-center items-center">
      <div className="flex justify-between max-w-[1200px] w-full">
        <h1 className="text-3xl font-bold">Voleihub</h1>

        <nav className="flex items-center font-bold text-xl">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                História
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
