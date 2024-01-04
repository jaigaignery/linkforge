"use client";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton({
  className = "flex bg-secondary-color border-2 border-secondary-color text-black items-center gap-2 rounded-lg border p-2 px-4 shadow",
  iconLeft = false,
  iconClasses = "",
}) {
  return (
    <button className={className} onClick={() => signOut()}>
      {iconLeft && (
        <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
      )}
      <span>Logout</span>
    </button>
  );
}
