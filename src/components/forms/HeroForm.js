"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HeroForm({ user }) {
  const router = useRouter();
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-full inline-flex items-center shadow-lg bg-zinc-900 shadow-gray-500/20"
    >
      <span className="rounded-full text-white bg-zinc-900 py-4 pl-4">
        linkforge.to/
      </span>
      <input
        type="text"
        className="bg-zinc-900 text-white"
        style={{ backgroundColor: "zinc-900", marginBottom: 0, paddingLeft: 0 }}
        placeholder="username"
      />
      <button
        type="submit"
        className="rounded-full bg-orange-500 text-white py-4 px-6 whitespace-nowrap"
      >
        Join for Free
      </button>
    </form>
  );
}
