import { Globe, Heart, BookOpen, Users, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Eiffely FOR ALL</h1>
                <p className="text-sm text-gray-400">Global Academic Research Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Making academic research accessible to everyone, everywhere. Our AI assistant TWILS helps you discover, understand, and utilize research papers from PhD professors and experts worldwide.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Built with passion for global knowledge sharing</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Global Research Database</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Expert Contributions</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Multi-language Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>AI-Powered Translation</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <div className="space-y-2 text-gray-400">
              <p>Start exploring research papers with TWILS AI assistant</p>
              <div className="flex items-center space-x-2 mt-4">
                <Mail className="w-4 h-4" />
                <span>support@eiffely.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eiffely FOR ALL. Making research accessible to everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;