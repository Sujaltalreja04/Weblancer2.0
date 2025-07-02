import React from 'react';
import { ChevronDown, ArrowRight, Globe, Zap, Shield, Server, Database, Cloud, Cpu, Network } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Ultra Advanced 3D Tech Infrastructure */}
      <div className="absolute inset-0 perspective-[8000px]">
        {/* Massive 3D Server City */}
        <div className="absolute left-0 top-0 w-full h-full transform rotateY-15 rotateX-10 scale-300">
          <div className="grid grid-cols-24 gap-4 h-full opacity-8">
            {Array.from({ length: 576 }).map((_, i) => (
              <div 
                key={i}
                className="relative bg-gradient-to-b from-[#B5FF6D]/30 to-[#8A9A5B]/30 border border-[#B5FF6D]/50 rounded-lg transform-style-3d animate-pulse-3d"
                style={{ 
                  animationDelay: `${i * 50}ms`,
                  height: `${Math.random() * 400 + 200}px`,
                  transform: `translateZ(${Math.random() * 300}px) rotateX(${Math.random() * 20}deg) rotateY(${Math.random() * 20}deg)`
                }}
              >
                {/* Server Rack Details */}
                <div className="w-full h-6 bg-gradient-to-r from-[#B5FF6D]/80 to-[#8A9A5B]/80 rounded-t-lg animate-data-stream"></div>
                <div className="p-2 space-y-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="h-1 bg-[#8A9A5B]/80 rounded animate-neural-network" style={{ animationDelay: `${j * 200}ms` }}></div>
                  ))}
                </div>
                
                {/* Floating Data Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#B5FF6D] rounded-full animate-quantum-field"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#8A9A5B] rounded-full animate-orbit"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D Tech Constellation */}
        <div className="absolute right-20 top-20 perspective-[2000px]">
          <div className="relative w-96 h-96 animate-spin-slow transform-style-3d">
            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-full border-2 border-[#B5FF6D]/60 animate-tech-sphere">
              <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                <Server className="w-8 h-8 text-[#B5FF6D] animate-hologram" />
              </div>
            </div>

            {/* Orbiting Tech Elements */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 border border-[#B5FF6D]/50 rounded-xl transform-style-3d animate-orbit"
                style={{
                  left: `${Math.cos(i * Math.PI / 6) * 150 + 150}px`,
                  top: `${Math.sin(i * Math.PI / 6) * 150 + 150}px`,
                  transform: `translateZ(${i * 20}px) rotateX(${i * 30}deg) rotateY(${i * 30}deg)`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: `${15 + i * 2}s`
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {i % 4 === 0 && <Database className="w-6 h-6 text-[#B5FF6D] animate-float" />}
                  {i % 4 === 1 && <Cloud className="w-6 h-6 text-[#B5FF6D] animate-float-delayed" />}
                  {i % 4 === 2 && <Cpu className="w-6 h-6 text-[#B5FF6D] animate-float-slow" />}
                  {i % 4 === 3 && <Network className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />}
                </div>
              </div>
            ))}

            {/* Neural Network Connections */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute w-1 bg-gradient-to-t from-[#B5FF6D]/60 to-transparent animate-data-stream"
                style={{
                  left: `${Math.cos(i * Math.PI / 4) * 120 + 190}px`,
                  top: `${Math.sin(i * Math.PI / 4) * 120 + 190}px`,
                  height: '80px',
                  transform: `rotate(${i * 45}deg) translateZ(${i * 10}px)`,
                  animationDelay: `${i * 300}ms`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Quantum Field Grid */}
        <div className="absolute bottom-0 left-0 w-full h-96 transform rotateX-85 opacity-15 perspective-[5000px]">
          <div className="grid grid-cols-20 gap-2 h-full cyber-grid">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-[#B5FF6D]/30 to-transparent border-t border-[#B5FF6D]/50 animate-quantum-field"
                style={{ 
                  animationDelay: `${i * 25}ms`,
                  transform: `translateZ(${Math.random() * 100}px) rotateX(${Math.random() * 30}deg)`
                }}
              >
                <div className="w-full h-1 bg-[#B5FF6D]/80 rounded-t animate-neural-network"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Holographic Displays */}
        <div className="absolute top-40 left-20 perspective-[3000px]">
          <div className="relative w-80 h-80 animate-hologram">
            {/* Main Display */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-[#B5FF6D]/50 backdrop-blur-lg transform rotateY-20 rotateX-10">
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="text-[#B5FF6D] text-xs font-mono space-y-2">
                  <div className="flex justify-between">
                    <span>WEBLANCER NEURAL NET</span>
                    <span className="text-[#8A9A5B] animate-pulse">ACTIVE</span>
                  </div>
                  <div className="text-[#8A9A5B]">Quantum Processing Status</div>
                  
                  {/* Real-time Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-1">
                      <div className="text-white text-xs">CPU: 99.9%</div>
                      <div className="w-full h-1 bg-[#B5FF6D] rounded animate-data-stream"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-white text-xs">GPU: 100%</div>
                      <div className="w-full h-1 bg-[#B5FF6D] rounded animate-data-stream"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-white text-xs">NET: 10Gb/s</div>
                      <div className="w-full h-1 bg-[#B5FF6D] rounded animate-data-stream"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-white text-xs">AI: ONLINE</div>
                      <div className="w-full h-1 bg-[#B5FF6D] rounded animate-data-stream"></div>
                    </div>
                  </div>
                </div>
                
                {/* Quantum Particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="quantum-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 1000}ms`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Floating Sub-displays */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-lg border border-[#B5FF6D]/50 flex items-center justify-center animate-float transform rotateY-45">
              <Globe className="w-8 h-8 text-[#B5FF6D] animate-spin-slow" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#8A9A5B]/30 to-[#B5FF6D]/30 rounded-full border border-[#B5FF6D]/50 flex items-center justify-center animate-float-delayed transform rotateX-45">
              <Zap className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />
            </div>
          </div>
        </div>

        {/* Matrix Digital Rain */}
        <div className="matrix-rain">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Premium Company Badge */}
        <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#B5FF6D]/10 via-[#8A9A5B]/10 to-[#B5FF6D]/10 border border-[#B5FF6D]/40 rounded-full mb-12 backdrop-blur-lg">
          <Shield className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />
          <span className="text-[#B5FF6D] font-bold text-lg neon-glow">Enterprise-Grade Solutions</span>
          <div className="w-3 h-3 bg-[#B5FF6D] rounded-full animate-pulse"></div>
        </div>

        {/* Ultra Premium Headline */}
        <div className="perspective-[3000px] mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 transform-style-3d hover:rotateX-5 hover:rotateY-5 transition-transform duration-700">
            <span className="block mb-6 transform hover:translateZ-50 transition-transform duration-500">
              <span className="inline-block weblancer-brand hover:scale-110 transition-transform duration-300">WEB</span>
              <span className="inline-block weblancer-brand hover:scale-110 transition-transform duration-300 delay-150">LANCER</span>
            </span>
          </h1>
        </div>
        
        <div className="text-3xl md:text-4xl text-[#8A9A5B] mb-8 max-w-5xl mx-auto leading-relaxed font-light">
          <span className="neon-glow">Transforming businesses through cutting-edge digital solutions</span>
          <br />
          <span className="text-[#B5FF6D] animate-pulse">and quantum-powered innovation</span>
        </div>

        <div className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          We deliver enterprise-level web applications, mobile solutions, and AI-powered digital infrastructure 
          that scale infinitely with your business growth and redefine industry standards.
        </div>
        
        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
          <button className="group premium-button px-12 py-6 bg-gradient-to-r from-[#B5FF6D] to-[#A3E85C] text-black font-bold rounded-xl hover:from-[#A3E85C] hover:to-[#B5FF6D] transform hover:scale-110 hover:rotateX-5 transition-all duration-500 flex items-center space-x-4 shadow-lg shadow-[#B5FF6D]/30">
            <span className="text-lg">Start Your Project</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:rotateZ-12 transition-transform duration-300" />
          </button>
          <button className="premium-button px-12 py-6 border-2 border-[#8A9A5B] text-white font-bold rounded-xl hover:border-[#B5FF6D] hover:text-[#B5FF6D] hover:bg-[#B5FF6D]/5 transform hover:scale-110 hover:rotateX-5 transition-all duration-500 backdrop-blur-lg">
            <span className="text-lg">Explore Innovation</span>
          </button>
        </div>

        {/* Advanced Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="group perspective-[1500px]">
            <div className="enterprise-card p-8 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Globe className="w-12 h-12 text-[#B5FF6D] group-hover:animate-spin-slow" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#B5FF6D] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3 neon-glow">500+</div>
              <div className="text-[#8A9A5B] text-lg">Global Clients</div>
              <div className="text-[#B5FF6D] text-sm mt-2">Across 25+ Countries</div>
            </div>
          </div>

          <div className="group perspective-[1500px]">
            <div className="enterprise-card p-8 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Zap className="w-12 h-12 text-[#B5FF6D] group-hover:animate-pulse-3d" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#B5FF6D] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3 neon-glow">99.99%</div>
              <div className="text-[#8A9A5B] text-lg">Uptime SLA</div>
              <div className="text-[#B5FF6D] text-sm mt-2">Quantum Reliability</div>
            </div>
          </div>

          <div className="group perspective-[1500px]">
            <div className="enterprise-card p-8 rounded-2xl transform group-hover:rotateY-10 group-hover:scale-105 transition-all duration-700 transform-style-3d">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Shield className="w-12 h-12 text-[#B5FF6D] group-hover:animate-tech-sphere" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#B5FF6D] rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3 neon-glow">24/7</div>
              <div className="text-[#8A9A5B] text-lg">AI Support</div>
              <div className="text-[#B5FF6D] text-sm mt-2">Neural Network Powered</div>
            </div>
          </div>
        </div>

        {/* Global Availability with Premium Effects */}
        <div className="mt-16 flex items-center justify-center space-x-4 text-[#8A9A5B]">
          <div className="w-4 h-4 bg-[#B5FF6D] rounded-full animate-pulse-3d"></div>
          <span className="text-xl font-semibold neon-glow">Serving Fortune 500 Companies Worldwide</span>
          <div className="w-4 h-4 bg-[#B5FF6D] rounded-full animate-pulse-3d"></div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-float">
          <div className="text-[#B5FF6D] text-sm font-semibold">Explore More</div>
          <ChevronDown className="w-8 h-8 text-[#B5FF6D] animate-bounce" />
          <div className="w-1 h-16 bg-gradient-to-b from-[#B5FF6D] to-transparent rounded-full animate-data-stream"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;