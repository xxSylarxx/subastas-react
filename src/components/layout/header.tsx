import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-muted-foreground';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center h-16 w-auto max-h-full">
              <img
                src="/public/icons/logo2.svg"
                alt="Subastas al Centavo Logo"
                className="h-full w-auto max-h-full object-contain"
              />
            </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" isActive={isActive('/')}>
              Inicio
            </NavLink>
            <NavLink to="/auctions" isActive={isActive('/auctions')}>
              Subastas
            </NavLink>
            <NavLink to="/how-it-works" isActive={isActive('/how-it-works')}>
              ¿Cómo funciona?
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-medium hover:bg-accent/50 hover:text-foreground flex items-center gap-2"
            asChild
          >
            <Link to="/login">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M11.2 10.6875C10.175 10.6875 9.68214 11.25 8 11.25C6.31786 11.25 5.82857 10.6875 4.8 10.6875C2.15 10.6875 0 12.8039 0 15.4125V16.3125C0 17.2441 0.767857 18 1.71429 18H14.2857C15.2321 18 16 17.2441 16 16.3125V15.4125C16 12.8039 13.85 10.6875 11.2 10.6875ZM14.2857 16.3125H1.71429V15.4125C1.71429 13.7391 3.1 12.375 4.8 12.375C5.32143 12.375 6.16786 12.9375 8 12.9375C9.84643 12.9375 10.675 12.375 11.2 12.375C12.9 12.375 14.2857 13.7391 14.2857 15.4125V16.3125ZM8 10.125C10.8393 10.125 13.1429 7.85742 13.1429 5.0625C13.1429 2.26758 10.8393 0 8 0C5.16071 0 2.85714 2.26758 2.85714 5.0625C2.85714 7.85742 5.16071 10.125 8 10.125ZM8 1.6875C9.88929 1.6875 11.4286 3.20273 11.4286 5.0625C11.4286 6.92227 9.88929 8.4375 8 8.4375C6.11071 8.4375 4.57143 6.92227 4.57143 5.0625C4.57143 3.20273 6.11071 1.6875 8 1.6875Z" fill="currentColor"/>
              </svg>
              Iniciar sesión
            </Link>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
            asChild
          >
            <Link to="/register">Registrarse</Link>
          </Button>
          <div className="h-6 w-px bg-border mx-1"></div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children, isActive }: { to: string; children: React.ReactNode; isActive?: string }) {
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 text-sm transition-all duration-200 rounded-lg hover:bg-accent/50 ${isActive}`}
    >
      {children}
    </Link>
  );
}
