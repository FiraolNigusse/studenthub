import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AdUnit from '../ads/AdUnit';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main className="pt-20 lg:pt-24 min-h-[calc(100vh-80px)] isolate">
        <div className="container mx-auto px-6 mt-4">
          <AdUnit format="horizontal" className="mb-4" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
