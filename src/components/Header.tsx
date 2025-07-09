import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, User, Menu, Globe, BookOpen, Brain, Upload } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import blink from '../blink/client';

interface HeaderProps {
  user: any | null;
}

const Header = ({ user }: HeaderProps) => {
  const handleLogin = () => {
    blink.auth.login();
  };

  const handleLogout = () => {
    blink.auth.logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Eiffely FOR ALL
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Global Academic Research</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/research" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Search className="w-4 h-4" />
              <span>Research</span>
            </Link>
            {user && (
              <Link to="/upload" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </Link>
            )}
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Brain className="w-4 h-4" />
              <span>About TWILS</span>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                  <Link to="/research" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Research</span>
                  </Link>
                  {user && (
                    <Link to="/upload" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload</span>
                    </Link>
                  )}
                  <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>About TWILS</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;