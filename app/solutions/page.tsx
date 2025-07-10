export const metadata = {
  title: 'Solutions | DigitalEgo.ai',
  description: 'Explore how DigitalEgo solutions like Crewly bring AI agent coordination to real businesses.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#061525] text-white px-6 py-16">
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold mb-4">You do what you're good at,<br />Crewly handles the rest.</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Crewly gives small businesses AI agent crews that handle operations so owners can focus on what they do best.
        </p>
      </section>

      <section className="grid gap-8 max-w-5xl mx-auto">
        <div className="bg-[#0A0F2F] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">
            Enterprise Operations at Small Business Prices
          </h2>
          <p className="text-gray-300">
            Crewly unlocks capabilities traditionally reserved for large enterprises—without the enterprise budget. It levels the playing field for small operators.
          </p>
        </div>

        <div className="bg-[#0A0F2F] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">
            Coordinated AI Teams, Not Individual Tools
          </h2>
          <p className="text-gray-300">
            Crewly uses modular AI agent crews that work together—no more juggling disconnected tools. Your digital team handles tasks like a real one.
          </p>
        </div>

        <div className="bg-[#0A0F2F] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">
            Built for Trades & Service Businesses
          </h2>
          <p className="text-gray-300">
            Crewly is designed from the ground up for contractors, tradespeople, and field-service operators. No tech jargon. Just AI that helps your business run better.
          </p>
        </div>
      </section>

      <div className="text-center mt-16">
        <a
          href="/waitlist"
          className="inline-block bg-pink-600 hover:bg-pink-500 transition px-6 py-3 text-white font-semibold rounded shadow"
        >
          Join the Waitlist
        </a>
      </div>
    </main>
  );
}
