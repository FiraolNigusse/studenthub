import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main className="pt-20 lg:pt-24 min-h-[calc(100vh-80px)] isolate">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
