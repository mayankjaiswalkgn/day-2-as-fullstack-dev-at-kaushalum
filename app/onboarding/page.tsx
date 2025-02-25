import Image from "next/image";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
      <main className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Company logo" 
            width={160}
            height={64}
            priority
            className="mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Onboarding Guide
        </h1>

        <div className="w-full max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">👋 Getting Started <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded">Day 1</span></h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors p-3 rounded">
                <h3 className="font-medium text-lg flex items-center">First Day Checklist <span className="ml-2 text-sm text-blue-500">~2 hours</span></h3>
                <p className="text-gray-600 dark:text-gray-400">Complete these essential tasks to get up and running</p>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Set up your email and Slack</li>
                  <li>Complete HR documentation</li>
                  <li>Join team channels</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors p-3 rounded">
                <h3 className="font-medium text-lg flex items-center">Setup Your Workspace <span className="ml-2 text-sm text-green-500">~3 hours</span></h3>
                <p className="text-gray-600 dark:text-gray-400">Configure your tools and development environment</p>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-sm">Git</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-sm">VS Code</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-sm">Node.js</span>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors p-3 rounded">
                <h3 className="font-medium text-lg flex items-center">Meet Your Mentor <span className="ml-2 text-sm text-purple-500">30 mins</span></h3>
                <p className="text-gray-600 dark:text-gray-400">Connect with your assigned mentor for guidance</p>
                <button className="mt-2 text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 font-medium">
                  Schedule Meeting →
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">🎯 Key Resources <span className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded">Important</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600">Company Handbook</h3>
                <p className="text-gray-600 dark:text-gray-400">Essential policies and guidelines</p>
                <div className="mt-3 text-sm text-blue-600">Read more →</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600">Tech Stack</h3>
                <p className="text-gray-600 dark:text-gray-400">Overview of our technology stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-sm">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">GraphQL</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600">Team Structure</h3>
                <p className="text-gray-600 dark:text-gray-400">Understanding our organization</p>
                <div className="mt-3 text-sm text-blue-600">View org chart →</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-400">Coding standards and workflows</p>
                <div className="mt-3 text-sm text-blue-600">Learn more →</div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">📅 Next Steps</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                After completing your initial onboarding, schedule meetings with key team members and start exploring our codebase. Remember to reach out to your mentor or team lead if you have any questions!
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">Quick Tips:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Join our daily standup at 10 AM</li>
                  <li>Check out our learning resources library</li>
                  <li>Follow our Git workflow guide</li>
                </ul>
              </div>
              <div className="flex justify-center mt-6 space-x-4">
                <a href="/team" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                  Meet Your Team <span className="ml-2">→</span>
                </a>
                <a href="/resources" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors">
                  Browse Resources
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
