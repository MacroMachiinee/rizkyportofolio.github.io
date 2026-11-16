import React from 'react';
import { Project } from '../data/portfolioData';
import { Layers, Monitor, HardDrive, FileText, CheckCircle2 } from 'lucide-react';

interface ProjectMockupVisualProps {
  project: Project;
  className?: string;
  isDetailed?: boolean;
}

export const ProjectMockupVisual: React.FC<ProjectMockupVisualProps> = ({
  project,
  className = '',
  isDetailed = false,
}) => {
  // If user provided a custom image URL or uploaded a replacement image
  if (project.customImageUrl) {
    return (
      <div className={`relative overflow-hidden bg-slate-950 ${className}`}>
        <img
          src={project.customImageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] text-white/80 font-mono-code">
          Karya Asli
        </div>
      </div>
    );
  }

  // High-craft Swiss Modernist SVG/CSS visual compositions for each archetype
  switch (project.mockupType) {
    case 'branding':
      return (
        <div className={`relative w-full h-full bg-[#0F131D] text-white p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Subtle Grid Lines & Swiss Coordinates */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Header Metadata */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-mono-code text-slate-400">
            <span>SPEC: MONOGRAM_VECTOR_SYSTEM</span>
            <span>YGY // 2024</span>
          </div>

          {/* Central Logo Construction with Geometry Guides */}
          <div className="relative z-10 my-auto flex items-center justify-center py-6">
            <div className="relative group">
              {/* Coordinate Reticles */}
              <div className="absolute -inset-4 border border-blue-500/20 border-dashed rounded-none pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500/20 pointer-events-none" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/20 pointer-events-none" />
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#0052FF] text-white font-extrabold flex items-center justify-center text-4xl sm:text-5xl tracking-tighter shadow-xl shadow-blue-600/30">
                NS
              </div>
            </div>
          </div>

          {/* Bottom Specimen: CMYK Swatches & Typography */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-end justify-between">
            <div>
              <div className="text-xs font-semibold tracking-wide uppercase text-white">NUSA STUDIO</div>
              <div className="text-[10px] text-slate-400 font-mono-code">CDR · AI · VECTOR MASTER</div>
            </div>
            
            {/* Color Swatches */}
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#0052FF] ring-1 ring-white/20" title="Electric Blue" />
              <span className="w-3.5 h-3.5 rounded-xs bg-slate-900 ring-1 ring-white/20" title="Onyx Dark" />
              <span className="w-3.5 h-3.5 rounded-xs bg-[#F4F4F5] ring-1 ring-white/20" title="Paper White" />
            </div>
          </div>
        </div>
      );

    case 'poster':
      return (
        <div className={`relative w-full h-full bg-[#18181B] text-white p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Bauhaus & Swiss Architectural Layout */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-emerald-500/30 pointer-events-none" />
          <div className="absolute top-1/4 -left-10 w-32 h-32 bg-emerald-500/10 blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono-code text-emerald-400">
            <span>[PRINT READY // 300 DPI // CMYK]</span>
            <span>A1 POSTER</span>
          </div>

          {/* Middle Typography Composition */}
          <div className="relative z-10 my-4 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">EXHIBITION 2024</div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter leading-none text-white">
              ART &amp; <span className="text-emerald-400">TECH</span>
            </div>
            <div className="text-xl sm:text-2xl font-light text-slate-300 tracking-tight">
              YOGYAKARTA
            </div>
            {isDetailed && (
              <p className="text-xs text-slate-400 pt-2 font-mono-code">
                12-COLUMN SWISS EDITORIAL GRID · TIGHT TRACKING · VEKTOR COREL
              </p>
            )}
          </div>

          {/* Bottom Grid & Bleed Marks */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono-code">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-emerald-400" />
              <span>BLEED: +3.0mm</span>
            </div>
            <div className="flex items-center gap-3">
              <span>C:0 M:0 Y:0 K:100</span>
              <span>C:85 M:10 Y:60 K:0</span>
            </div>
          </div>
        </div>
      );

    case 'print':
      return (
        <div className={`relative w-full h-full bg-[#1E1B18] text-white p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Coffee Packaging Theme */}
          <div className="absolute inset-0 bg-[radial-gradient(#d9770615_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono-code text-amber-400">
            <span>PACKAGING STANDING POUCH</span>
            <span>250 GRAMS NET</span>
          </div>

          <div className="relative z-10 my-auto text-center py-4">
            <div className="inline-block border border-amber-500/40 px-3 py-1 text-[10px] font-mono-code text-amber-300 mb-2">
              SINGLE ORIGIN // MOUNT MERAPI
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-black tracking-wider text-amber-100">
              MERAPI ROAST
            </div>
            <div className="text-xs font-mono-code text-amber-400/80 mt-1">
              FULL WASH · ALTITUDE 1,400 MASL · MEDIUM ROAST
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[10px] text-amber-200/70 font-mono-code">
            <span>DIE-CUT LINE: LAYER #02</span>
            <span>FOIL FINISH: SPOT GOLD</span>
          </div>
        </div>
      );

    case 'web':
      return (
        <div className={`relative w-full h-full bg-[#0B132B] text-white p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Browser / CMS Shell */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[10px] font-mono-code text-slate-400 bg-white/5 px-3 py-0.5 rounded border border-white/5">
              sinergitekno.co.id/portal
            </div>
            <div className="text-[10px] font-mono-code text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>SSL OK</span>
            </div>
          </div>

          {/* Portal Mockup Content */}
          <div className="relative z-10 my-auto py-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-300">
              <span className="font-semibold text-white">Dashboard Portal WP</span>
              <span className="text-[11px] font-mono-code text-blue-400">Response 0.38s</span>
            </div>
            
            {/* Mock Layout Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="bg-white/5 border border-white/10 p-2 rounded">
                <div className="text-[10px] text-slate-400 font-mono-code">PAGE SPEED</div>
                <div className="text-sm font-bold text-white font-mono-code">98/100</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded">
                <div className="text-[10px] text-slate-400 font-mono-code">UPTIME</div>
                <div className="text-sm font-bold text-emerald-400 font-mono-code">99.9%</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded">
                <div className="text-[10px] text-slate-400 font-mono-code">BACKUP</div>
                <div className="text-sm font-bold text-blue-400 font-mono-code">AUTO OK</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
            <span>WP CORE 6.x · CPANEL ADMIN</span>
            <span>PHP 8.2 · LITESPEED CACHE</span>
          </div>
        </div>
      );

    case 'tech':
      return (
        <div className={`relative w-full h-full bg-[#08121E] text-white p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* IT Support / Hardware Schematics */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono-code text-cyan-400">
            <span>DIAGNOSTIC &amp; MAINTENANCE</span>
            <span>LAB STATION WORK</span>
          </div>

          <div className="relative z-10 my-auto py-2 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-300">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Overhaul 25+ Unit PC</div>
                <div className="text-[10px] font-mono-code text-slate-400">Thermal Repaste &amp; OS Cloned</div>
              </div>
            </div>

            {/* Hardware Metrics Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[10px] font-mono-code text-slate-300">
                <span>CPU Temp Before: 78°C</span>
                <span className="text-cyan-400">After: 42°C</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded overflow-hidden">
                <div className="h-full bg-cyan-400 w-full" />
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
            <span>RAM: DDR4/DDR5 TEST PASS</span>
            <span>DISK HEALTH: 100% SMART OK</span>
          </div>
        </div>
      );

    case 'social':
    default:
      return (
        <div className={`relative w-full h-full bg-[#120B26] text-white p-5 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-2 text-[10px] font-mono-code text-purple-300">
            <span>CAMPAIGN ASSETS PACK</span>
            <span>1080 x 1080 PX</span>
          </div>

          <div className="relative z-10 my-auto py-2 text-center">
            <div className="text-[10px] font-mono-code text-purple-400 tracking-wider">NATIONAL WEBINAR</div>
            <div className="text-2xl font-black text-purple-100 tracking-tight">
              EDUTECH 2023
            </div>
            <div className="text-xs text-purple-300/80 font-mono-code mt-1">
              CorelDRAW Vector + Social Media Kit
            </div>
          </div>

          <div className="relative z-10 pt-2 border-t border-purple-500/20 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
            <span>12 POST TEMPLATES</span>
            <span>CERTIFICATE AUTOMATION</span>
          </div>
        </div>
      );
  }
};
