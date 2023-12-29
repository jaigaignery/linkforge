import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UsernameForm from "@/components/forms/UsernameForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}
