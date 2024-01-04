import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main
      className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-20
    "
    >
      <div className="max-w-2xl">
        <h1 className="text-[32px] md:text-[8.5vmin] lg:text-[88px] leading-none text-white font-bold">
          One link to rule them all.
        </h1>
        <h2 className="text-gray-200 text-2xl my-6">
          Share your links, social profiles, contact info and more on one page
        </h2>

        <HeroForm user={session?.user} />
      </div>
      <div className="max-w-2xl">
        <Image src="/project-1.png" width="1250" height="1250" />
      </div>
    </main>
  );
}
