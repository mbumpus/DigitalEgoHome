import Link from 'next/link'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo - placeholder for your neon brain logo */}
            <Link className="block" href="/" aria-label="DigitalEgo">
              <div className="flex items-center">
                {/* Temporary gradient logo - replace with your neon brain when ready */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-d">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%" />
                      <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <path d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z" id="logo1-a" />
                    <path d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z" id="logo1-c" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlinkHref="#logo1-a" />
                    <use fill="url(#logo1-d)" opacity=".961" xlinkHref="#logo1-c" />
                  </g>
                </svg>
                <span className="ml-2 text-xl font-bold text-white">DigitalEgo</span>
              </div>
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop navigation links */}
              <ul className="flex grow justify-center flex-wrap items-center">
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://baronvonboost.com" target="_blank">Baron</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://github.com/mbumpus/the-professor" target="_blank">GitHub</Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://medium.com/@bumpusma" target="_blank">Medium</Link>
                </li>
              </ul>
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">Sign in</Link>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="/waitlist">
                    Join Waitlist <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
