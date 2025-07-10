import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#061525] text-white px-6 py-16">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Built to Reflect Your Brilliance.
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          DigitalEgo is a modular AI system for reflective decision support — enabling agent coordination, task execution, and human-aligned reasoning at scale.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-pink-600 hover:bg-pink-500 transition px-6 py-3 text-white font-semibold rounded shadow"
        >
          Join the Waitlist
        </Link>
      </section>

      <section className="mt-20 max-w-4xl mx-auto grid gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2">Meet Our Flagship Persona</h2>
          <a href="https://baronvonboost.com" target="_blank" className="text-pink-400 hover:underline">
            Baron von Boost
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Explore Our Tech</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <a href="https://github.com/mbumpus/the-professor" target="_blank" className="text-pink-400 hover:underline">
                The Professor on GitHub
              </a>
            </li>
            <li>
              <a href="https://medium.com/@bumpusma" target="_blank" className="text-pink-400 hover:underline">
                Articles on Medium
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
