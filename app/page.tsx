"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-8 relative">
      <main className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-12 hover:scale-105 transition-transform">
          <Image
            src="/logo.png" 
            alt="Company logo"
            width={200}
            height={80}
            priority
            className="mx-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
          Welcome to the Team!
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-200 mb-16 max-w-2xl leading-relaxed">
          We&apos;re thrilled to have you join our amazing team! Let&apos;s embark on this exciting journey together. 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          <a href="/onboarding" className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-3 text-blue-600 dark:text-blue-400">
              <span className="text-3xl group-hover:rotate-12 transition-transform">📚</span>
              Onboarding Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Begin your journey with our comprehensive getting started guide</p>
          </a>

          <a href="/team" className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-3 text-purple-600 dark:text-purple-400">
              <span className="text-3xl group-hover:rotate-12 transition-transform">👥</span>
              Meet the Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Connect with your amazing new colleagues and mentors</p>
          </a>

          <a href="/resources" className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-3 text-pink-600 dark:text-pink-400">
              <span className="text-3xl group-hover:rotate-12 transition-transform">🛠️</span>
              Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Discover all the powerful tools and resources at your disposal</p>
          </a>

          <a href="/help" className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
              <span className="text-3xl group-hover:rotate-12 transition-transform">💡</span>
              Need Help?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">We&apos;re here to support you every step of the way</p>
          </a>
        </div>
      </main>

      <a href="/help" className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all">
        <span className="text-xl">❓</span>
        <span className="text-gray-700 dark:text-gray-200">Help</span>
      </a>
    </div>
  );
}
