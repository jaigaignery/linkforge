import HeroForm from "@/components/forms/HeroForm";

export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl text-white font-bold">
            One link to
            <br />
            rule them all
          </h1>
          <h2 className="text-gray-400 text-xl mt-6">
            Share links to your social profiles and content, all in one place.
          </h2>
        </div>
        <HeroForm />
      </section>
    </main>
  );
}
