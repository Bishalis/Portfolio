import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I'm a passionate developer creating amazing web experiences
            </p>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications.
              </p>
              <p className="text-gray-600">
                With expertise in modern web technologies, I bring ideas to life through clean and efficient code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-100 rounded">React</div>
                <div className="p-3 bg-gray-100 rounded">TypeScript</div>
                <div className="p-3 bg-gray-100 rounded">Node.js</div>
                <div className="p-3 bg-gray-100 rounded">Tailwind CSS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-600 mb-4">A beautiful web application built with React and TypeScript.</p>
                <button className="text-slate-900 hover:text-slate-700">Learn More →</button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-600 mb-4">An innovative solution using modern web technologies.</p>
                <button className="text-slate-900 hover:text-slate-700">Learn More →</button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-600 mb-4">A full-stack application with amazing features.</p>
                <button className="text-slate-900 hover:text-slate-700">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
