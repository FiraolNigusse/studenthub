import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Calculator, 
  FileText, 
  Home as HomeIcon, 
  Layout as LayoutIcon, 
  GraduationCap,
  Menu,
  X,
  User,
  LogOut
} from 'lucide-react';
import Button, { cn } from '../ui/Button';
import { AuthService } from '../../services';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'GPA Calculator', path: '/gpa', icon: <Calculator size={18} /> },
    { name: 'Resume Builder', path: '/resume', icon: <FileText size={18} /> },
    { name: 'Templates', path: '/templates', icon: <LayoutIcon size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
  ];

  const isAuthenticated = AuthService.isAuthenticated();

  const handleLogout = () => {
    AuthService.logout();
  };

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-[1000] flex items-center transition-all overflow-visible">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group transition-transform hover:scale-105 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary-200 group-hover:rotate-6 group-hover:bg-primary-500 transition-all">
            <GraduationCap size={28} />
          </div>
          <span className="text-2xl font-display font-black text-slate-800 tracking-tight">Student<span className="gradient-text">Hub</span></span>
        </Link>
        
        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1.5 p-1 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm relative pointer-events-auto">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-xl text-[0.95rem] font-bold transition-all relative group',
                  location.pathname === link.path 
                    ? 'text-primary-600 bg-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                )}
              >
                <div className={cn(
                  'p-1.5 rounded-lg transition-colors',
                  location.pathname === link.path ? 'bg-primary-50 text-primary-600' : 'text-slate-400 group-hover:text-slate-600'
                )}>
                  {link.icon}
                </div>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="hidden lg:flex items-center gap-4">
           {isAuthenticated ? (
             <>
               <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-100 group shadow-sm">
                 <User size={22} className="group-active:scale-95 transition-transform" />
               </Button>
               <Button variant="outline" size="sm" className="h-11 px-6 rounded-2xl border-slate-200" onClick={handleLogout}>
                 <LogOut size={18} className="mr-2" /> Logout
               </Button>
             </>
           ) : (
             <>
               <Link to="/login">
                 <Button variant="ghost" className="font-bold">Sign In</Button>
               </Link>
               <Link to="/register">
                 <Button size="md" className="h-11 px-8 rounded-2xl shadow-primary-600/10">Get Started</Button>
               </Link>
             </>
           )}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all active:scale-90 z-[1100]"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={cn(
        'fixed inset-0 top-0 h-screen w-screen bg-white/98 backdrop-blur-3xl z-[1050] lg:hidden transition-all duration-300 ease-in-out',
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
      )}>
        <div className="container mx-auto px-6 pt-28 py-12 flex flex-col gap-3">
           {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-4 p-5 rounded-2xl text-xl font-display font-black transition-all border-2',
                  location.pathname === link.path 
                    ? 'bg-primary-50 text-primary-600 border-primary-200 shadow-lg shadow-primary-500/5' 
                    : 'text-slate-500 border-transparent hover:bg-slate-50'
                )}
              >
                <div className={cn(
                  'p-2.5 rounded-xl',
                  location.pathname === link.path ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400'
                )}>
                  {React.cloneElement(link.icon as any, { size: 24 })}
                </div>
                {link.name}
              </Link>
           ))}
           <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4">
              {isAuthenticated ? (
                <Button size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-primary-500/10" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                  <LogOut size={20} className="mr-3" /> Logout
                </Button>
              ) : (
                <>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-primary-500/10">Get Started</Button>
                  </Link>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" size="lg" className="w-full h-14 rounded-2xl text-lg font-bold border-slate-200">Sign In</Button>
                  </Link>
                </>
              )}
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
