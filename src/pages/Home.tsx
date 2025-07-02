import React from 'react';
import { ChevronDown, ArrowRight, Globe, Zap, Shield, Building, Users, Award, TrendingUp, Server, Database, Cloud, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Vision Section with Enhanced 3D */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Ultra Advanced 3D Background */}
        <div className="absolute inset-0 perspective-[10000px]">
          {/* Massive 3D Neural Network */}
          <div className="absolute inset-0 transform rotateX-70 rotateY-25 scale-200 opacity-8">
            <div className="grid grid-cols-20 gap-6 h-[250vh] w-[250vw]">
              {Array.from({ length: 800 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-t from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/40 rounded-lg animate-quantum-field transform-style-3d"
                  style={{ 
                    animationDelay: `${i * 30}ms`,
                    height: `${Math.random() * 200 + 150}px`,
                    transform: `translateZ(${Math.random() * 300}px) rotateX(${Math.random() * 30}deg) rotateY(${Math.random() * 30}deg)`
                  }}
                >
                  <div className="w-full h-3 bg-[#B5FF6D]/70 rounded-t animate-data-stream"></div>
                  <div className="p-2 space-y-1">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="h-1 bg-[#8A9A5B]/60 rounded animate-neural-network"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Quantum Spheres */}
          <div className="absolute top-20 right-20 perspective-[3000px]">
            <div className="relative w-96 h-96 animate-spin-slow transform-style-3d">
              {/* Central Quantum Core */}
              <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#B5FF6D]/50 to-[#8A9A5B]/50 rounded-full border-4 border-[#B5FF6D]/70 animate-tech-sphere">
                <div className="absolute inset-6 bg-black rounded-full flex items-center justify-center">
                  <Building className="w-12 h-12 text-[#B5FF6D] animate-hologram" />
                </div>
              </div>

              {/* Orbiting Data Nodes */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 border-2 border-[#B5FF6D]/60 rounded-xl transform-style-3d animate-orbit"
                  style={{
                    left: `${Math.cos(i * Math.PI / 4) * 160 + 140}px`,
                    top: `${Math.sin(i * Math.PI / 4) * 160 + 140}px`,
                    transform: `translateZ(${i * 25}px) rotateX(${i * 45}deg) rotateY(${i * 45}deg)`,
                    animationDelay: `${i * 600}ms`,
                    animationDuration: `${18 + i * 2}s`
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {i % 4 === 0 && <Server className="w-8 h-8 text-[#B5FF6D] animate-pulse-3d" />}
                    {i % 4 === 1 && <Database className="w-8 h-8 text-[#B5FF6D] animate-quantum-field" />}
                    {i % 4 === 2 && <Cloud className="w-8 h-8 text-[#B5FF6D] animate-neural-network" />}
                    {i % 4 === 3 && <Cpu className="w-8 h-8 text-[#B5FF6D] animate-hologram" />}
                  </div>
                </div>
              ))}

              {/* Quantum Connection Lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`connection-${i}`}
                  className="absolute w-2 bg-gradient-to-t from-[#B5FF6D]/80 to-transparent animate-data-stream"
                  style={{
                    left: `${Math.cos(i * Math.PI / 6) * 140 + 190}px`,
                    top: `${Math.sin(i * Math.PI / 6) * 140 + 190}px`,
                    height: '100px',
                    transform: `rotate(${i * 30}deg) translateZ(${i * 15}px)`,
                    animationDelay: `${i * 250}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Holographic Data Streams */}
          <div className="absolute bottom-20 left-20 perspective-[2500px]">
            <div className="w-96 h-96 relative">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 bg-gradient-to-t from-[#B5FF6D]/60 to-transparent animate-matrix-rain"
                  style={{
                    left: `${i * 18}px`,
                    height: `${Math.random() * 300 + 200}px`,
                    animationDelay: `${i * 200}ms`,
                    transform: `rotateX(60deg) translateZ(${i * 20}px) rotateY(${i * 15}deg)`
                  }}
                >
                  <div className="w-full h-6 bg-[#B5FF6D]/90 rounded-t animate-pulse-3d"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#B5FF6D]/10 via-[#8A9A5B]/10 to-[#B5FF6D]/10 border border-[#B5FF6D]/40 rounded-full mb-12 backdrop-blur-lg">
              <Building className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />
              <span className="text-[#B5FF6D] font-bold text-lg neon-glow">Our Vision</span>
            </div>
            
            <h2 className="text-6xl font-bold text-white mb-8 neon-glow">Shaping the Digital Future</h2>
            <p className="text-2xl text-[#8A9A5B] max-w-4xl mx-auto leading-relaxed">
              We envision a world where quantum technology seamlessly integrates with business objectives, 
              creating unprecedented opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Vision Content with Enhanced 3D Cards */}
            <div className="space-y-10">
              <div className="group perspective-[1500px]">
                <div className="enterprise-card p-10 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-tech-sphere">
                      <Zap className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white neon-glow">Quantum Innovation</h3>
                  </div>
                  <p className="text-[#8A9A5B] leading-relaxed text-lg">
                    We believe in pushing the boundaries of what's possible, constantly exploring 
                    quantum technologies and AI methodologies to deliver solutions that redefine industry standards.
                  </p>
                </div>
              </div>

              <div className="group perspective-[1500px]">
                <div className="enterprise-card p-10 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-quantum-field">
                      <Users className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white neon-glow">Client Success</h3>
                  </div>
                  <p className="text-[#8A9A5B] leading-relaxed text-lg">
                    Your success is our quantum mission. We partner with you to understand your unique challenges 
                    and create AI-powered solutions that drive exponential business outcomes.
                  </p>
                </div>
              </div>

              <div className="group perspective-[1500px]">
                <div className="enterprise-card p-10 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-hologram">
                      <Globe className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white neon-glow">Global Impact</h3>
                  </div>
                  <p className="text-[#8A9A5B] leading-relaxed text-lg">
                    Through our quantum-powered work, we aim to create positive change that extends beyond individual 
                    businesses to benefit communities and industries across the multiverse.
                  </p>
                </div>
              </div>
            </div>

            {/* Ultra Premium 3D Vision Visualization */}
            <div className="relative perspective-[3000px]">
              <div className="transform rotateY-15 hover:rotateY-0 transition-transform duration-1000 transform-style-3d">
                <div className="bg-gradient-cyber p-12 rounded-3xl border-2 border-[#B5FF6D]/60 relative overflow-hidden backdrop-blur-lg neon-border">
                  {/* Holographic Display */}
                  <div className="relative z-10">
                    {/* Vision Metrics with 3D Effects */}
                    <div className="grid grid-cols-2 gap-8 mb-12">
                      <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center mx-auto mb-4 animate-tech-sphere group-hover:animate-quantum-field">
                          <div className="text-4xl font-bold text-[#B5FF6D] neon-glow">150+</div>
                        </div>
                        <div className="text-[#8A9A5B] text-sm">Quantum Experts</div>
                      </div>
                      <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center mx-auto mb-4 animate-hologram group-hover:animate-pulse-3d">
                          <div className="text-4xl font-bold text-[#B5FF6D] neon-glow">25+</div>
                        </div>
                        <div className="text-[#8A9A5B] text-sm">Global Nodes</div>
                      </div>
                      <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center mx-auto mb-4 animate-neural-network group-hover:animate-orbit">
                          <div className="text-4xl font-bold text-[#B5FF6D] neon-glow">500+</div>
                        </div>
                        <div className="text-[#8A9A5B] text-sm">Quantum Projects</div>
                      </div>
                      <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center mx-auto mb-4 animate-data-stream group-hover:animate-tech-sphere">
                          <div className="text-4xl font-bold text-[#B5FF6D] neon-glow">99.99%</div>
                        </div>
                        <div className="text-[#8A9A5B] text-sm">Success Rate</div>
                      </div>
                    </div>

                    {/* Quantum Status Display */}
                    <div className="bg-black/60 rounded-xl p-6 border border-[#B5FF6D]/40 backdrop-blur-sm">
                      <div className="text-[#B5FF6D] text-sm font-mono space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="neon-glow">WEBLANCER QUANTUM CORE</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-[#B5FF6D] rounded-full animate-pulse-3d"></div>
                            <span className="text-[#8A9A5B]">ONLINE</span>
                          </div>
                        </div>
                        <div className="text-[#8A9A5B]">Neural Network Status: ACTIVE</div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="space-y-1">
                            <div className="text-white text-xs">Quantum Processing: 100%</div>
                            <div className="w-full h-2 bg-[#B5FF6D] rounded animate-data-stream"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-white text-xs">AI Systems: OPTIMAL</div>
                            <div className="w-full h-2 bg-[#B5FF6D] rounded animate-neural-network"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Quantum Particles */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="quantum-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 400}ms`
                      }}
                    ></div>
                  ))}

                  {/* 3D Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center animate-orbit transform-style-3d">
                    <TrendingUp className="w-8 h-8 text-[#B5FF6D] animate-hologram" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#8A9A5B]/40 to-[#B5FF6D]/40 rounded-full border border-[#B5FF6D]/60 flex items-center justify-center animate-float transform-style-3d">
                    <Award className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="text-center mt-24">
            <div className="enterprise-card p-16 rounded-3xl max-w-5xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-8 neon-glow">Ready to Enter the Quantum Era?</h3>
              <p className="text-xl text-[#8A9A5B] mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the digital revolution and transform your business with our quantum-powered solutions 
                that redefine what's possible in the modern world.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/services"
                  className="group premium-button px-12 py-6 bg-gradient-to-r from-[#B5FF6D] to-[#A3E85C] text-black font-bold rounded-xl hover:from-[#A3E85C] hover:to-[#B5FF6D] transform hover:scale-110 hover:rotateX-5 transition-all duration-500 flex items-center justify-center space-x-4"
                >
                  <span className="text-lg">Explore Quantum Solutions</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:rotateZ-12 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/about"
                  className="premium-button px-12 py-6 border-2 border-[#B5FF6D] text-[#B5FF6D] font-bold rounded-xl hover:bg-[#B5FF6D] hover:text-black transition-all duration-500 backdrop-blur-lg"
                >
                  <span className="text-lg">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;