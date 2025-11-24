// src/app/page.tsx
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";
import Certificates from "../../components/Certificates";
export default function HomePage() {
 

  return (
    <div className="pt-32 max-w-7xl mx-auto px-5">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/profile.jpg"
            alt="Yahaya Alhaifi"
            
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4 animate-pulse">
          Hi, I'm Yahaya Alhaifi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Frontend Developer | React & Next.js | Tailwind CSS
        </p>
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Contact Me
        </Link>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Projects
        </h2>
        
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
          >
            View All Projects →
          </Link>
        </div>
         <div>
      
      <Certificates />
      
    </div>
      </section>
    </div>
  );
}
