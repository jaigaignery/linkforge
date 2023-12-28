"use client";

export default function HeroForm() {
  const handleSubmit = () => {};

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
