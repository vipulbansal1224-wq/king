import { Inter } from 'next/font/google';
import './globals.css';
import '../components/Navbar.css';
import '../components/Footer.css';
import './page.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'King International | Premium E-Commerce',
  description: 'King International - Setting the gold standard in premium products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
