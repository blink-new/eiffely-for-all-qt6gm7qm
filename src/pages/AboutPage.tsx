import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Globe, 
  Languages, 
  BookOpen, 
  Search, 
  Sparkles,
  Heart,
  Library,
  ArrowRight,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Search",
      description: "I can understand complex research queries and find relevant papers across all disciplines and languages."
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Real-time Translation",
      description: "I translate research papers while preserving their original formatting, citations, and academic integrity."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversational Interface",
      description: "Ask me questions in natural language - I'll help you understand complex research concepts."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Study Materials",
      description: "I can find revision sheets, study guides, and educational materials from professors worldwide."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Results",
      description: "Get research papers and translations in seconds, not hours of manual searching."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "I verify sources, check author credentials, and ensure research authenticity."
    }
  ];

  const capabilities = [
    "Find research papers in any language",
    "Translate academic content while preserving meaning",
    "Explain complex scientific concepts",
    "Summarize lengthy research papers",
    "Find revision sheets and study materials",
    "Recommend related research papers",
    "Cite sources properly",
    "Filter by publication date, impact factor, or institution"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Research Assistant
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet TWILS
              <span className="block text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Your AI Research Companion
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TWILS (Translating World Intelligence & Learning Systems) is an advanced AI assistant designed to democratize access to global academic research. I help researchers, students, and professionals discover, understand, and utilize academic knowledge from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Breaking down language barriers and making academic research accessible to everyone, everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Global Access</CardTitle>
                <CardDescription>
                  Connect researchers worldwide by eliminating language barriers and making knowledge universally accessible.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Library className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Knowledge Democratization</CardTitle>
                <CardDescription>
                  Ensure that valuable research insights reach everyone, regardless of their native language or location.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Academic Collaboration</CardTitle>
                <CardDescription>
                  Foster global academic collaboration by making research discovery and understanding effortless.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Can Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm equipped with advanced AI capabilities to help you navigate the world of academic research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what I can help you with in your research journey:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My process is designed to be simple, fast, and accurate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You Ask</h3>
              <p className="text-gray-600">Tell me what research you need in natural language</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">I Search</h3>
              <p className="text-gray-600">I scan global databases and academic repositories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">I Translate</h3>
              <p className="text-gray-600">I translate and adapt content while preserving accuracy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You Learn</h3>
              <p className="text-gray-600">You get accessible, high-quality research results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">My Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              See how I'm helping researchers worldwide access and understand academic knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2M+</div>
              <div className="text-blue-100">Research Papers</div>
              <div className="text-blue-200 text-sm">Accessible in our database</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Languages</div>
              <div className="text-blue-200 text-sm">Supported for translation</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100K+</div>
              <div className="text-blue-100">Users</div>
              <div className="text-blue-200 text-sm">Trust TWILS for research</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Universities</div>
              <div className="text-blue-200 text-sm">Contributing research</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Researching?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let me help you discover and understand academic research from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/research">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with TWILS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;