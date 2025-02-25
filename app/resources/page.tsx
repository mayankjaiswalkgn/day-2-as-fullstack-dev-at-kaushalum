import Image from "next/image";

export default function ResourcesPage() {
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
          Resources & Tools
        </h1>

        <div className="w-full max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">🛠️ Development Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Code Repository</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Access our GitHub repositories and documentation</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Open GitHub →</a>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Development Environment</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Setup guides and IDE configurations</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Setup Guides →</a>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">📚 Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Internal wikis and guides</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Training Portal</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Online courses and workshops</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Best Practices</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coding standards and guidelines</p>
              </a>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">🔧 Productivity Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Project Management</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Access Jira boards and project tracking</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Open Jira →</a>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Communication</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Slack channels and communication guidelines</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Open Slack →</a>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">💼 Company Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Brand Resources</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Logos, templates, and brand guidelines</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Access Assets →</a>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-medium mb-3">Marketing Materials</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Presentations and company documents</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Materials →</a>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">🎁 Company Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Health Benefits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medical, dental, and wellness programs</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Employee Discounts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Special offers and partnerships</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Work-Life Balance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flexible hours and remote work policies</p>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
