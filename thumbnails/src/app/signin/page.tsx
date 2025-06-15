// app/signin/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { redirect } from "next/navigation";
import Signin from "~/components/ui/signin";
import { cookies, headers } from "next/headers";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return <Signin />;
}
