'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-10 mt-16 shadow-inner">
      <p className="text-lg font-semibold">© {new Date().getFullYear()} Yahaya Alhaifi. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/Yahaya659" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        <a href="mailto:YahayaAlhaifi@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
      </div>
    </footer>
  );
}
