import './styles/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Yahaya Alhaifi - Frontend Developer',
  description: 'Portfolio of Yahaya Alhaifi, React & Next.js Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}

