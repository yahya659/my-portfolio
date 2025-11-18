export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-24">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Contact Me</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Your Email" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <textarea placeholder="Your Message" rows={5} className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
        <button type="submit" className="bg-indigo-600 text-white p-4 rounded-lg font-semibold hover:bg-indigo-700 transition">Send Message</button>
      </form>
      <div className="mt-6 text-gray-700 text-lg">
        <p>Email: <a href="mailto:YahayaAlhaifi@gmail.com" className="text-blue-500 hover:underline">YahayaAlhaifi@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/yahya659" target="_blank" className="text-blue-500 hover:underline">Yahaya659</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/" target="_blank" className="text-blue-500 hover:underline">Yahya Alhaifi</a></p>
        <p>PHONE: <a  className="text-blue-500 hover:underline">+967 771940086 </a></p>
      </div>
    </div>
  );
}
