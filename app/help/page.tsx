import Image from "next/image";

export default function HelpPage() {
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
          Employee Support
        </h1>

        <div className="w-full max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">👥 Contact Your Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-2">👨‍💼</span>
                  Team Lead Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For day-to-day work guidance and team coordination</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Contact Team Lead →</button>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-2xl mr-2">👨‍💻</span>
                  Tech Lead Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For technical guidance and project-related queries</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Contact Tech Lead →</button>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">👔 HR Support</h2>
            <div className="space-y-6">
              <div className="collapse-panel">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium">Salary & Benefits</span>
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Salary queries and concerns</li>
                      <li>Benefits information</li>
                      <li>Compensation details</li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="collapse-panel">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium">Documentation & Records</span>
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Employment verification</li>
                      <li>Personal document updates</li>
                      <li>Policy documentation</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">📞 Contact Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">HR Portal</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Submit requests online</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">hr@company.com</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Office Hours</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri, 9AM-5PM</p>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
