import Image from "next/image";

export default function TeamPage() {
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
          Meet Our Team
        </h1>

        <div className="w-full max-w-3xl space-y-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
              <input
                type="search"
                placeholder="Search team members..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              />
              <span className="absolute right-3 top-2.5">🔍</span>
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">👥 Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/avatars/team-lead.jpg"
                    alt="Team Lead"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg">Sarah Johnson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Team Lead</p>
                <div className="space-y-2">
                  <a href="mailto:sarah.j@company.com" className="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400">sarah.j@company.com</a>
                  <div className="flex justify-center space-x-2">
                    <button className="flex items-center px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg">
                      <Image src="/teams-icon.png" alt="Teams" width={16} height={16} className="mr-1" />
                      Teams
                    </button>
                    <button className="flex items-center px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 rounded-lg">
                      <Image src="/meet-icon.png" alt="Meet" width={16} height={16} className="mr-1" />
                      Meet
                    </button>
                  </div>
                  <button className="w-full px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-lg text-sm">
                    Quick Call 📞
                  </button>
                </div>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/avatars/tech-lead.jpg"
                    alt="Tech Lead"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg">Mike Chen</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Tech Lead</p>
                <div className="space-y-2">
                  <a href="mailto:mike.c@company.com" className="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400">mike.c@company.com</a>
                  <div className="flex justify-center space-x-2">
                    <button className="flex items-center px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg">
                      <Image src="/teams-icon.png" alt="Teams" width={16} height={16} className="mr-1" />
                      Teams
                    </button>
                    <button className="flex items-center px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 rounded-lg">
                      <Image src="/meet-icon.png" alt="Meet" width={16} height={16} className="mr-1" />
                      Meet
                    </button>
                  </div>
                  <button className="w-full px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-lg text-sm">
                    Quick Call 📞
                  </button>
                </div>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/avatars/pm.jpg"
                    alt="Project Manager"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg">Emily Brown</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Project Manager</p>
                <div className="space-y-2">
                  <a href="mailto:emily.b@company.com" className="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400">emily.b@company.com</a>
                  <div className="flex justify-center space-x-2">
                    <button className="flex items-center px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg">
                      <Image src="/teams-icon.png" alt="Teams" width={16} height={16} className="mr-1" />
                      Teams
                    </button>
                    <button className="flex items-center px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 rounded-lg">
                      <Image src="/meet-icon.png" alt="Meet" width={16} height={16} className="mr-1" />
                      Meet
                    </button>
                  </div>
                  <button className="w-full px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-lg text-sm">
                    Quick Call 📞
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">💻 Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {name: "Alex Rivera", role: "Frontend Developer", email: "alex.r@company.com"},
                {name: "Priya Patel", role: "Backend Developer", email: "priya.p@company.com"},
                {name: "James Wilson", role: "Full Stack Developer", email: "james.w@company.com"},
                {name: "Lisa Zhang", role: "UX Designer", email: "lisa.z@company.com"},
                {name: "David Kim", role: "DevOps Engineer", email: "david.k@company.com"},
                {name: "Anna Smith", role: "QA Engineer", email: "anna.s@company.com"}
              ].map((member, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                  <div className="space-y-2">
                    <a href={`mailto:${member.email}`} className="block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {member.email}
                    </a>
                    <div className="flex justify-center space-x-2">
                      <button className="flex items-center px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg text-sm">
                        <Image src="/teams-icon.png" alt="Teams" width={16} height={16} className="mr-1" />
                        Teams
                      </button>
                      <button className="flex items-center px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 rounded-lg text-sm">
                        <Image src="/meet-icon.png" alt="Meet" width={16} height={16} className="mr-1" />
                        Meet
                      </button>
                    </div>
                    <button className="w-full px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 rounded-lg text-sm">
                      Quick Call 📞
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Feel free to reach out to any team member for support or collaboration!
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Connect with Available Team Members 🎯
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
