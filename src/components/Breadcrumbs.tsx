import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const routeNames: Record<string, string> = {
    about: 'About Us',
    services: 'Pharmacy Services & Medicine Checker',
    gallery: 'Store Gallery',
    contact: 'Contact Us & Location'
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100 dark:bg-slate-800/60 py-3 px-4 border-b border-slate-200 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
        <Link to="/" className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <Home className="w-4 h-4 mr-1" />
          <span>Home</span>
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <React.Fragment key={routeTo}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {isLast ? (
                <span className="font-semibold text-emerald-700 dark:text-emerald-400" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {displayName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
