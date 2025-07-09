import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  Search, 
  Globe, 
  BookOpen, 
  
  Sparkles, 
  ArrowRight,
  Brain,
  Languages,
  Zap,
  Library,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  user: any | null;
}

const HomePage = (_props: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuickSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to research page with query
      window.location.href = `/research?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const featuredResearch = [
    {
      title: "Climate Change Impact on Agricultural Productivity",
      author: "Dr. Sarah Chen, MIT",
      language: "English",
      category: "Environmental Science",
      summary: "Comprehensive analysis of global climate patterns and their effects on crop yields worldwide."
    },
    {
      title: "Intelligence Artificielle et Médecine Personnalisée",
      author: "Prof. Marie Dubois, Sorbonne",
      language: "French",
      category: "Medical Research",
      summary: "Exploration of AI applications in personalized medicine and treatment optimization."
    },
    {
      title: "Renewable Energy Storage Solutions",
      author: "Dr. Hans Mueller, TU Berlin",
      language: "German",
      category: "Energy Technology",
      summary: "Advanced battery technologies and their role in sustainable energy systems."
    }
  ];

  const researchCategories = [
    { name: "Medical Research", icon: "🏥", count: "45,231" },
    { name: "Environmental Science", icon: "🌍", count: "32,876" },
    { name: "Technology & AI", icon: "🤖", count: "28,942" },
    { name: "Social Sciences", icon: "👥", count: "24,156" },
    { name: "Physics & Chemistry", icon: "⚗️", count: "19,834" },
    { name: "Economics", icon: "📊", count: "15,672" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by TWILS AI
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Global Academic Research
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Made Accessible
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover, understand, and utilize research papers from PhD professors and experts worldwide. 
              Our AI assistant TWILS can find any study in any language and translate it for you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Ask TWILS: 'Find research about renewable energy in Japanese' or 'Studies on AI ethics'"
                  className="pl-10 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickSearch()}
                />
              </div>
              <Button onClick={handleQuickSearch} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Brain className="w-5 h-5 mr-2" />
                Ask TWILS
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Global Research Database</CardTitle>
                <CardDescription>Access studies from universities and research institutions worldwide</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <Languages className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>AI-Powered Translation</CardTitle>
                <CardDescription>TWILS can translate any research paper to your preferred language</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Instant Access</CardTitle>
                <CardDescription>Get relevant research papers in seconds, not hours</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Research Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover groundbreaking research across multiple disciplines from experts around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchCategories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count} papers</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recent high-impact studies from leading researchers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResearch.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{paper.category}</Badge>
                    <Badge variant="secondary">{paper.language}</Badge>
                  </div>
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{paper.summary}</p>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Paper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Library className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Global Research?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of researchers, students, and professionals who use TWILS to access academic knowledge worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/research">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Search className="w-5 h-5 mr-2" />
                Start Researching
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Brain className="w-5 h-5 mr-2" />
                Meet TWILS AI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;