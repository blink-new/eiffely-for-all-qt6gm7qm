import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Search, 
  Brain, 
  Sparkles, 
  BookOpen, 
  Languages, 
  Download,
  Globe,
  GraduationCap,
  Calendar,
  Users,
  MessageSquare,
  Loader2,
  Send
} from 'lucide-react';
import blink from '../blink/client';
import { toast } from 'react-hot-toast';

interface ResearchPageProps {
  user: any | null;
}

const ResearchPage = ({ user }: ResearchPageProps) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (searchParams.get('q')) {
      handleSearch();
    }
  }, [searchParams]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      // Simulate AI-powered research search
      const results = await simulateResearchSearch(query);
      setSearchResults(results);
      
      // Add to chat history
      setChatMessages(prev => [...prev, 
        { type: 'user', content: query },
        { type: 'assistant', content: `Found ${results.length} relevant research papers for "${query}". I can help you understand any of these papers or translate them if needed.` }
      ]);
      
      toast.success('Research results found!');
    } catch (error) {
      console.error('Search error:', error);
      toast.error('Failed to search. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleChatSubmit = async () => {
    if (!chatInput.trim() || !user) return;
    
    const userMessage = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    
    setIsStreaming(true);
    try {
      let assistantResponse = '';
      
      await blink.ai.streamText(
        {
          messages: [
            { role: 'system', content: 'You are TWILS, an AI assistant specialized in helping users find and understand academic research papers from around the world. You can translate research papers, explain complex concepts, and help users find relevant studies. Be helpful, knowledgeable, and friendly.' },
            { role: 'user', content: userMessage }
          ]
        },
        (chunk) => {
          assistantResponse += chunk;
          setChatMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage?.type === 'assistant') {
              lastMessage.content = assistantResponse;
            } else {
              newMessages.push({ type: 'assistant', content: assistantResponse });
            }
            return newMessages;
          });
        }
      );
      
    } catch (error) {
      console.error('Chat error:', error);
      toast.error('Failed to get response from TWILS. Please try again.');
    } finally {
      setIsStreaming(false);
    }
  };

  const simulateResearchSearch = async (searchQuery: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate research results based on query
    const mockResults = [
      {
        id: '1',
        title: 'Advanced Machine Learning Applications in Climate Science',
        authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Dr. Yuki Tanaka'],
        institution: 'MIT, Stanford University, University of Tokyo',
        language: 'English',
        year: '2024',
        category: 'Environmental Science',
        summary: 'This comprehensive study explores the application of deep learning models to predict climate patterns and extreme weather events. The research presents novel architectures that improve prediction accuracy by 23% compared to traditional methods.',
        abstract: 'Climate change poses unprecedented challenges requiring advanced predictive models. This study introduces a novel deep learning framework combining convolutional neural networks with recurrent architectures to analyze temporal climate data...',
        keywords: ['machine learning', 'climate science', 'deep learning', 'weather prediction'],
        citationCount: 142,
        downloadCount: 2834,
        doi: '10.1000/182'
      },
      {
        id: '2',
        title: 'Intelligence Artificielle et Diagnostic Médical: Une Approche Révolutionnaire',
        authors: ['Prof. Marie Dubois', 'Dr. Antoine Laurent'],
        institution: 'Sorbonne Université, Institut Pasteur',
        language: 'French',
        year: '2024',
        category: 'Medical Research',
        summary: 'Cette étude présente une approche révolutionnaire utilisant l\'IA pour améliorer le diagnostic médical, avec une précision de 94% dans la détection précoce des maladies.',
        abstract: 'Le diagnostic médical précoce reste un défi majeur. Cette recherche propose un système d\'IA basé sur l\'apprentissage profond qui analyse les données médicales multimodales...',
        keywords: ['intelligence artificielle', 'diagnostic médical', 'apprentissage profond', 'médecine'],
        citationCount: 89,
        downloadCount: 1876,
        doi: '10.1000/183'
      },
      {
        id: '3',
        title: 'Sustainable Energy Storage: Revolutionary Battery Technologies',
        authors: ['Dr. Hans Mueller', 'Prof. Lisa Anderson', 'Dr. Roberto Silva'],
        institution: 'Technical University of Berlin, MIT, University of São Paulo',
        language: 'English',
        year: '2024',
        category: 'Energy Technology',
        summary: 'Breakthrough research in solid-state battery technology that could revolutionize energy storage with 300% improved capacity and 50% faster charging times.',
        abstract: 'The transition to renewable energy requires advanced storage solutions. This study presents novel solid-state battery architectures using graphene-enhanced electrodes...',
        keywords: ['battery technology', 'energy storage', 'renewable energy', 'solid-state batteries'],
        citationCount: 234,
        downloadCount: 4521,
        doi: '10.1000/184'
      }
    ];

    // Filter results based on search query
    return mockResults.filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <CardTitle>Access Required</CardTitle>
            <CardDescription>
              Please log in to use TWILS AI and access the global research database.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => blink.auth.login()} className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Users className="w-4 h-4 mr-2" />
              Login to Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">TWILS AI Research Assistant</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ask TWILS to find research papers, translate them, or explain complex concepts. 
            Your personal AI assistant for global academic research.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search research papers or ask TWILS: 'Find studies about renewable energy in Japanese'"
                className="pl-10 h-12"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch} 
              disabled={isSearching}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isSearching ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Search className="w-5 h-5 mr-2" />
              )}
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="research">Research Results</TabsTrigger>
            <TabsTrigger value="chat">Chat with TWILS</TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="space-y-6">
            {searchResults.length > 0 ? (
              <div className="grid gap-6">
                {searchResults.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{paper.category}</Badge>
                        <Badge variant="secondary">{paper.language}</Badge>
                        <Badge variant="outline">
                          <Calendar className="w-3 h-3 mr-1" />
                          {paper.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{paper.title}</CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{paper.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4" />
                          <span>{paper.institution}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{paper.summary}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Abstract</h4>
                        <p className="text-sm text-gray-600">{paper.abstract}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{paper.citationCount} citations</span>
                          <span>{paper.downloadCount} downloads</span>
                          <span>DOI: {paper.doi}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Languages className="w-4 h-4 mr-2" />
                            Translate
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Help You Research</h3>
                <p className="text-gray-600 mb-4">
                  Search for research papers or ask TWILS to find specific studies for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button variant="outline" onClick={() => setQuery("renewable energy")}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Renewable Energy
                  </Button>
                  <Button variant="outline" onClick={() => setQuery("artificial intelligence")}>
                    <Brain className="w-4 h-4 mr-2" />
                    Artificial Intelligence
                  </Button>
                  <Button variant="outline" onClick={() => setQuery("medical research")}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Medical Research
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat with TWILS</span>
                </CardTitle>
                <CardDescription>
                  Ask TWILS to help you find research papers, translate them, or explain complex concepts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {chatMessages.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Brain className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Start a conversation with TWILS!</p>
                      <p className="text-sm">Try asking: "Find me papers about climate change" or "Translate this research to French"</p>
                    </div>
                  ) : (
                    chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          {message.type === 'assistant' && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Brain className="w-4 h-4 text-blue-600" />
                              <span className="font-semibold text-blue-600">TWILS</span>
                            </div>
                          )}
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask TWILS anything about research papers..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleChatSubmit())}
                    className="flex-1 min-h-[60px] max-h-[120px]"
                  />
                  <Button 
                    onClick={handleChatSubmit} 
                    disabled={!chatInput.trim() || isStreaming}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isStreaming ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResearchPage;