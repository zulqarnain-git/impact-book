
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Users, Star, ArrowRight, MessageCircle, Zap, Trophy, Globe, PenTool, Layout, BarChart3, ShieldCheck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 text-sm font-medium">
              Trusted by 1000+ Authors Worldwide
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your Manuscript into a
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Global Bestseller
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to publish, promote, and profit from your book — in one simple, professional package.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <BookOpen className="mr-2 h-5 w-5" />
                Publish My Book Now
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Expert
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Keep 100% Rights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>21-Day Publishing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Meet Impact Book Publishing
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our mission is to give authors like you the tools, support, and guidance to publish with confidence — and make a lasting impact. No confusing tech. No agents. No hidden fees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794" 
                    alt="Author writing" 
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Guidance</h3>
                  <p className="text-slate-600">Professional support from manuscript to bestseller</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
                    alt="Book cover design" 
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Premium Design</h3>
                  <p className="text-slate-600">Stand-out covers and interior layouts that captivate</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                    alt="Global reach" 
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Reach</h3>
                  <p className="text-slate-600">Worldwide distribution across all major platforms</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl">
                Get My Free Author Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Everything You Need — Done For You
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We've helped hundreds of authors publish successfully with our all-inclusive services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PenTool className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Editing & Proofreading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Professional edits that elevate your writing while preserving your unique voice</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Layout className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Cover & Interior Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Stand out with captivating designs that draw readers in instantly</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Global Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Get listed worldwide on every major platform from Kindle to hardcover</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Marketing Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Launch strong with guided strategy calls and automated promotions</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl">
                Build My Publishing Package
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real Results. Real Authors.
              </h2>
              <p className="text-xl text-slate-300">
                See what our published authors are saying
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white mb-6 italic">
                    "I had no idea how to publish, and Impact made it effortless. My book is now on Amazon with over 300 reviews!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      S
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sophia L.</h4>
                      <p className="text-slate-300 text-sm">Fiction Author</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white mb-6 italic">
                    "Their editing and cover design were top-notch. I made back my investment within the first month."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      J
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">James K.</h4>
                      <p className="text-slate-300 text-sm">Business Author</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white mb-6 italic">
                    "I got full control of my book rights and amazing customer support. Couldn't recommend more."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      T
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Tariq M.</h4>
                      <p className="text-slate-300 text-sm">Self-Help Author</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Pick The Path That Suits You
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether you want us to do it all, need a guided hand, or just want design help — we have a plan for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Complete Done-For-You</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    Everything from editing to launch, perfect for busy authors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Professional editing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Custom cover design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Global distribution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Marketing strategy</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-purple-200">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Guided Self-Publish</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    Step-by-step with coaching and tools to publish like a pro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Publishing guidance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Design templates</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Distribution setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">24/7 support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Layout className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Design & Distribution</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    You write. We handle the look and reach of your book
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Cover design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Interior formatting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Global distribution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Basic support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 text-purple-600 mr-3" />
                    How long does the publishing process take?
                  </h3>
                  <p className="text-slate-600 text-lg">
                    We can publish your book in as little as 21 days after receiving the manuscript. Our streamlined process ensures quality without unnecessary delays.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 text-purple-600 mr-3" />
                    Do I keep my book rights?
                  </h3>
                  <p className="text-slate-600 text-lg">
                    100%. You retain all ownership and royalty rights. We believe authors should maintain full control over their intellectual property.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 text-purple-600 mr-3" />
                    Is this traditional or self-publishing?
                  </h3>
                  <p className="text-slate-600 text-lg">
                    This is premium self-publishing — without the limitations of a traditional contract. You get professional services with complete creative control.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Publish? Let's Talk
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Don't let your book sit on a hard drive collecting dust. Share your story, grow your authority, and impact lives through publishing. Our team is here to guide you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Your Publishing Journey
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Publishing Advisor
              </Button>
            </div>
            
            <p className="text-slate-400">
              Need help choosing a plan? Chat with us live or call today for personalized guidance!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
