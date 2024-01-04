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
      className="flex items-center lg:flex-row flex-col gap-2"
    >
      <div className="flex bg-white shadow-lg shadow-gray-400/20 rounded-lg">
        <span className="rounded-lg bg-white text-black py-4 pl-4">
          linkforge.to/&nbsp;
        </span>
        <input
          type="text"
          style={{
            color: "black",
            backgroundColor: "white",
            marginBottom: 0,
            paddingLeft: 0,
          }}
          placeholder="username"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-secondary-color ml-4 text-black py-4 px-6 whitespace-nowrap"
      >
        Join for Free
      </button>
    </form>
  );
}
