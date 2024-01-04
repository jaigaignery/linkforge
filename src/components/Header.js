import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-transparent py-4">
      <div className="flex justify-between gap-6 mx-auto">
        <div className="flex text-3xl items-center gap-6">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-secondary-color"
          >
            <FontAwesomeIcon icon={faFireFlameCurved} />
            <span className="text-lg font-bold">LinkForge</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-md text-zinc-300">
          {session && (
            <>
              <Link
                href={"/account"}
                className="flex text-white border-2 border-secondary-color items-center rounded-lg p-2 px-4 shadow"
              >
                My Account
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link
                href={"/login"}
                className="flex text-white border-2 border-secondary-color items-center rounded-lg p-2 px-4 shadow"
              >
                Sign In
              </Link>
              <Link
                href={"/login"}
                className="flex bg-secondary-color border-2 border-secondary-color text-black items-center gap-2 rounded-lg p-2 px-4 shadow"
              >
                Create Account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
