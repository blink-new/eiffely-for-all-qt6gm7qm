import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import AboutPage from './pages/AboutPage';
import UploadPage from './pages/UploadPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import blink from './blink/client';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user);
      setLoading(state.isLoading);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Eiffely FOR ALL...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Header user={user} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/research" element={<ResearchPage user={user} />} />
              <Route path="/upload" element={<UploadPage user={user} />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;