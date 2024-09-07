import Link from "next/link";
import { Icons } from "components/ui/icons";
import { ConnectWalletButton } from "./ui/connect-button";

export default function SubHeader() {
  return (
    <header className="flex items-center border p-4 justify-between">
      <h1 className="text-oranges text-2xl font-semibold leading-normal custom-text-shadow">
        VANITY.AC
      </h1>
      <div className="flex items-center space-x-2">
        <Link
          href="https://github.com/LaitmanX/vanity"
          className="text-oranges"
        >
          <Icons.github />
        </Link>

        <span className="text-gray-600 text-xs">BETA v0.2.0</span>
      </div>

      <nav className="flex items-center space-x-5">
        <ConnectWalletButton />
      </nav>
    </header>
  );
}
