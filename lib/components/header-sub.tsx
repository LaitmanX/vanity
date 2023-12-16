import Link from "next/link";
import { Icons } from "components/ui/icons";

export default function SubHeader() {
  return (
    <header className="flex items-center border p-4 justify-between">
      <h1 className="text-oranges text-2xl font-semibold leading-normal custom-text-shadow">
        VANITY.AC
      </h1>
      <span className="text-gray-600 text-xs">ALPHA v0.1.0</span>
      <nav className="flex items-center space-x-5">
        <Link
          href="https://github.com/LaitmanX/vanity"
          className="text-oranges"
        >
          <Icons.github />
        </Link>
      </nav>
    </header>
  );
}
