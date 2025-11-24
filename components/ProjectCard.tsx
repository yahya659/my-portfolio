'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-3 text-indigo-600">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <a href={link} target="_blank" className="text-blue-500 font-semibold hover:underline">View Project</a>
    </div>
  );
}

