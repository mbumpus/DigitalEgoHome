import Image from 'next/image'
import FeaturesImage from '@/public/images/features.svg'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans" data-aos="zoom-out">
              AI that understands <em className="font-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#7a4155]">you</em>
            </h2>
          </div>
          <div className="pb-16" data-aos="zoom-out">
            <Image src={FeaturesImage} alt="DigitalEgo AI Features" />
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon1-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M28 16c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z" opacity=".64" />
                      <path d="M28 20c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                      <circle cx="28" cy="28" r="2" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">Reflective Decision Support</h4>
              <p className="text-lg text-gray-400 text-center">AI that thinks about its thinking, providing deeper insights and more thoughtful recommendations.</p>
            </div>
            {/* 2nd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="200">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon2-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon2-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon2-b)" xlinkHref="#icon2-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M20 20h16v16H20z" opacity=".64" />
                      <path d="M24 24h8v8h-8z" />
                      <path d="M28 20v16M20 28h16" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">Modular Architecture</h4>
              <p className="text-lg text-gray-400 text-center">Flexible AI components that adapt and scale with your evolving needs and complex workflows.</p>
            </div>
            {/* 3rd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
              <div className="mb-4">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon3-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon3-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon3-b)" xlinkHref="#icon3-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M16 28c0-6.627 5.373-12 12-12s12 5.373 12 12" />
                      <path d="M20 28c0-4.418 3.582-8 8-8s8 3.582 8 8M24 28c0-2.21 1.79-4 4-4s4 1.79 4 4" opacity=".64" />
                      <circle cx="28" cy="32" r="2" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">Human-Aligned Reasoning</h4>
              <p className="text-lg text-gray-400 text-center">AI systems designed to understand and align with human values and decision-making processes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
