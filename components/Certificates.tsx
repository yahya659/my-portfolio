// src/components/Certificates.tsx
import Image from "next/image";
import { certificates } from "../src/app/data/certificates";

export default function Certificates() {
  return (
    <section className="py-16 bg-gray-50" id="certificates">
      <h2 className="text-4xl font-bold text-center mb-12">My training certificates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            // rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-500">{cert.platform} </p>
          </a>
        ))}
      </div>
    </section>
  );
}
