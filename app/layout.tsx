import './app/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'DigitalEgo.ai',
  description: 'Built to Reflect Your Brilliance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#061525] text-white font-sans min-h-screen flex flex-col">
        <header className="bg-[#0A0F2F] px-6 py-4 shadow-md">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">DigitalEgo</h1>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:underline">
                  Waitlist
                </Link>
              </li>
              <li>
                <a href="https://baronvonboost.com" target="_blank" className="hover:underline text-pink-400">
                  Baron
                </a>
              </li>
              <li>
                <a href="https://github.com/mbumpus/the-professor" target="_blank" className="hover:underline text-pink-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://medium.com/@bumpusma" target="_blank" className="hover:underline text-pink-400">
                  Medium
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#0A0F2F] text-gray-500 text-center py-6 text-sm">
          © {new Date().getFullYear()} DigitalEgo.ai — A trademark of AI Cabinet Method LLC
        </footer>
      </body>
    </html>
  );
}
