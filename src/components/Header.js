import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-black py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="flex items-center gap-2 text-orange-500">
            <FontAwesomeIcon icon={faLink} className="text-orange-500" />
            <span className="font-bold">LinkForge</span>
          </Link>
          <nav className="flex items-center gap-4 text-zinc-300 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session.user.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
