import React, { useEffect, useState } from 'react';
import { Server, Database, Cloud, Cpu, Network, Shield } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentSystem, setCurrentSystem] = useState('Initializing Quantum Core');

  const systems = [
    'Initializing Quantum Core',
    'Loading Neural Networks',
    'Connecting Global Servers',
    'Activating AI Systems',
    'Optimizing Performance',
    'Securing Connections',
    'Finalizing Interface'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.2;
        
        // Update system status based on progress
        const systemIndex = Math.floor((newProgress / 100) * systems.length);
        if (systemIndex < systems.length) {
          setCurrentSystem(systems[systemIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Ultra Advanced 3D Tech Grid Background */}
      <div className="absolute inset-0 perspective-[10000px]">
        <div className="absolute inset-0 transform rotateX-85 rotateY-20 scale-300">
          <div className="grid grid-cols-24 gap-3 h-[300vh] w-[300vw] opacity-15">
            {Array.from({ length: 1200 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-[#B5FF6D]/40 bg-gradient-to-br from-[#B5FF6D]/10 to-transparent animate-cyber-grid"
                style={{ 
                  animationDelay: `${i * 15}ms`,
                  height: Math.random() * 150 + 100 + 'px',
                  transform: `translateZ(${Math.random() * 200}px) rotateX(${Math.random() * 45}deg)`
                }}
              >
                <div className="w-full h-2 bg-[#B5FF6D]/60 rounded-t animate-data-stream"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Tech Architecture */}
      <div className="absolute top-20 right-20 perspective-[3000px]">
        <div className="relative w-96 h-96 animate-spin-slow transform-style-3d">
          <div className="absolute inset-0 border-2 border-[#B5FF6D]/30 rounded-full animate-pulse-3d"></div>
          <div className="absolute inset-8 border border-[#8A9A5B]/30 rounded-full animate-orbit"></div>
          <div className="absolute inset-16 border border-[#B5FF6D]/20 rounded-full animate-orbit-reverse"></div>
          
          {/* Orbiting Tech Icons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-float transform-style-3d">
              <Server className="w-8 h-8 text-[#B5FF6D] animate-hologram" />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-float-delayed transform-style-3d">
              <Database className="w-8 h-8 text-[#B5FF6D] animate-quantum-field" />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-float-slow transform-style-3d">
              <Cloud className="w-8 h-8 text-[#B5FF6D] animate-tech-sphere" />
            </div>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-xl border border-[#B5FF6D]/50 flex items-center justify-center animate-float transform-style-3d">
              <Cpu className="w-8 h-8 text-[#B5FF6D] animate-neural-network" />
            </div>
          </div>
        </div>
      </div>

      {/* Data Transmission Network */}
      <div className="absolute bottom-20 left-20 perspective-[2000px]">
        <div className="w-80 h-80 relative">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 bg-gradient-to-t from-[#B5FF6D]/60 to-transparent animate-data-stream"
              style={{
                left: `${i * 20}px`,
                height: `${Math.random() * 250 + 150}px`,
                animationDelay: `${i * 150}ms`,
                transform: `rotateX(45deg) translateZ(${i * 15}px) rotateY(${i * 10}deg)`
              }}
            >
              <div className="w-full h-4 bg-[#B5FF6D]/80 rounded-t animate-pulse-3d"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Loading Interface */}
      <div className="relative z-10">
        {/* Ultra Premium 3D Logo Container */}
        <div className="relative perspective-[2000px] mb-16">
          <div className="transform rotateX-20 rotateY-10 hover:rotateY-0 hover:rotateX-0 transition-transform duration-1500 transform-style-3d">
            {/* Multi-layered 3D Logo Structure */}
            <div className="relative w-64 h-64 mx-auto">
              {/* Back Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A5B]/40 to-[#B5FF6D]/40 rounded-3xl transform translateZ-neg-50 blur-lg animate-pulse-3d"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-[#8A9A5B]/30 to-[#B5FF6D]/30 rounded-2xl transform translateZ-neg-20 blur-sm animate-quantum-field"></div>
              
              {/* Middle Layers */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-[#B5FF6D]/60 transform translateZ-neg-10 animate-hologram"></div>
              
              {/* Front Layer */}
              <div className="absolute inset-8 bg-black rounded-lg border-2 border-[#B5FF6D] flex items-center justify-center transform translateZ-0 neon-border">
                <div className="text-7xl font-bold text-[#B5FF6D] animate-tech-sphere neon-glow weblancer-brand">W</div>
              </div>
              
              {/* Floating Quantum Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="quantum-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 500}ms`
                  }}
                ></div>
              ))}
              
              {/* Orbiting Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/40 to-[#8A9A5B]/40 rounded-xl border border-[#B5FF6D]/60 flex items-center justify-center animate-orbit transform-style-3d">
                <Network className="w-8 h-8 text-[#B5FF6D] animate-spin-slow" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#8A9A5B]/40 to-[#B5FF6D]/40 rounded-full border border-[#B5FF6D]/60 flex items-center justify-center animate-orbit-reverse transform-style-3d">
                <Shield className="w-6 h-6 text-[#B5FF6D] animate-pulse-3d" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-[#B5FF6D]/60 rounded-full animate-float-slow transform-style-3d"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[#8A9A5B]/60 rounded-full animate-float-delayed transform-style-3d"></div>
            </div>
          </div>
        </div>

        {/* Premium Company Loading Interface */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white tracking-wider weblancer-brand neon-glow">WEBLANCER</h1>
            <p className="text-[#8A9A5B] text-xl font-light">Quantum Digital Innovation Company</p>
            <div className="text-[#B5FF6D] text-lg font-semibold animate-pulse">{currentSystem}</div>
          </div>

          {/* Ultra Advanced Progress System */}
          <div className="w-[500px] mx-auto space-y-6">
            {/* Main Progress Bar */}
            <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700 neon-border">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8A9A5B] to-[#B5FF6D] transition-all duration-300 ease-out animate-data-stream"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-hologram"></div>
              
              {/* Progress Particles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 w-2 h-2 bg-[#B5FF6D] rounded-full transform -translate-y-1/2 animate-quantum-field"
                  style={{
                    left: `${(progress * 0.8) + (i * 5)}%`,
                    animationDelay: `${i * 200}ms`
                  }}
                ></div>
              ))}
            </div>

            {/* Loading Stats */}
            <div className="flex justify-between text-sm text-[#8A9A5B]">
              <span className="neon-glow">Quantum Systems Online</span>
              <span className="text-[#B5FF6D] font-bold neon-glow">{progress.toFixed(1)}%</span>
            </div>

            {/* Advanced Loading Steps */}
            <div className="space-y-2 text-xs text-[#8A9A5B]">
              {progress > 15 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ Quantum Core Initialized</span></div>}
              {progress > 30 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ Neural Networks Loaded</span></div>}
              {progress > 45 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ Global Servers Connected</span></div>}
              {progress > 60 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ AI Systems Activated</span></div>}
              {progress > 75 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ Performance Optimized</span></div>}
              {progress > 90 && <div className="animate-fade-in flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div><span>✓ Security Protocols Active</span></div>}
              {progress > 98 && <div className="animate-fade-in text-[#B5FF6D] neon-glow flex items-center space-x-2"><div className="w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse-3d"></div><span>✓ Ready to Launch</span></div>}
            </div>

            {/* System Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-[#B5FF6D] font-bold text-lg neon-glow">{Math.min(progress * 10, 999).toFixed(0)}</div>
                <div className="text-[#8A9A5B] text-xs">Processes</div>
              </div>
              <div className="text-center">
                <div className="text-[#B5FF6D] font-bold text-lg neon-glow">{Math.min(progress * 0.5, 50).toFixed(1)}GB</div>
                <div className="text-[#8A9A5B] text-xs">Memory</div>
              </div>
              <div className="text-center">
                <div className="text-[#B5FF6D] font-bold text-lg neon-glow">{Math.min(progress * 2, 200).toFixed(0)}ms</div>
                <div className="text-[#8A9A5B] text-xs">Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Quantum Field Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B5FF6D]/8 via-transparent to-transparent animate-pulse-3d pointer-events-none"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="matrix-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;