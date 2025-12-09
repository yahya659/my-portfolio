
import ProjectCard from "../../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    { title: 'Doctor-website', description: 'modern medical website designed to facilitate online doctor appointment bookings. The site offers a quick and easy experience for patients to access doctors and manage appointments without having to wait in clinics. The website was built using React.', link: 'https://yahya659.github.io/Doctor-website/#/home' },
    { title: 'Shopping', description: 'An online store built using Next.js 13, React, TailwindCSS, and React Hot Toast.Using an external API to fetch and display products directly.', link: 'https://github.com/yahya659/shopping' },
    { title: 'weather', description: '"An interactive web application that displays real-time weather updates for any city around the world. It was developed using React, Next.js and TypeScript with an external API to accurately fetch data, with a smooth and practical user interface."', link: 'https://github.com/yahya659/weather' },
    { title: 'Interactive page design', description: 'Designing an interactive webpage using JavaScript', link: 'https://yahya659.github.io/listsmall/' },
    { title: 'Designing a beautiful', description: '"Designing a beautiful personal website using HTML, CSS, and JS"', link: 'https://yahya659.github.io/mycvc/' },
    { title: 'Understanding how to use the HOOK ::::Use Reducer', description: '"A website that adds, subtracts, and divides numbers"', link: 'https://ephemeral-concha-590722.netlify.app/' },
    { title: 'The specific hook used in react is `useState` and `useEffect`.', description: '"This project used an API to retrieve data. The data was taken from a website called JSONBLACEHOLDER. We used specific hooks in React, namely useState and useEffect."', link: 'https://myproject-coral-iota.vercel.app/' },
    { title: ' Weather in Riyadh`.', description: '"Designing a website to provide weather information for the city of Riyadh"', link: 'https://effervescent-flan-17f418.netlify.app/' },
    { title: ' todo-list`.', description: '"A website for adding, deleting, modifying, and storing tasks in localstorge---  · React.js.--next---UseHooks"', link: 'https://remarkable-biscochitos-8b087f.netlify.app/' },
    { title: ' Educational website`.', description: '"JavaScript CSS HTML"', link: 'https://yahya659.github.io/learn/' },
    { title: ' Restauran`.', description: '"JavaScript CSS HTML"', link: 'https://yahya659.github.io/Restauran/' },
    { title: ' Educational website`.', description: '"CSS · HTML', link: 'https://yahya659.github.io/project1/' },
    { title: ' Product Store`.', description: '"React & TypeScript', link: 'https://product-store-2wuxg8vva-yahyaalhaifis-projects.vercel.app/' },
    { title: ' Customer Management `.', description: 'Built using Node.js, Express, MongoDB and EJS.', link: 'https://github.com/yahya659/node-mongodb' },
    { title: ' FoodDelivery `.', description: 'Built using Next.js, React, and Tailwind CSS for a modern and responsive food delivery web application.', link: 'https://food-delivery-five-ochre.vercel.app/' },
    { title: ' PHP Session Login Project `.', description: 'Minimal PHP login system using Sessions for practice and learning...', link: 'https://github.com/yahya659/php-session-login' },
  ];



  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((proj, index) => (
        <ProjectCard 
          key={index} 
          title={proj.title} 
          description={proj.description} 
          link={proj.link} 
        />
      ))}
    </div>
  );
}
