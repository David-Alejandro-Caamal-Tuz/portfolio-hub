'use client';

import React from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  status: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'golf-club',
    title: 'Golf Club & Resort Platform',
    category: 'Full Stack Web Application',
    description: 'Sistema integral de reservas de Tee Times para clubes de golf de lujo con interfaz estilo resort, API REST en TypeScript y persistencia en PostgreSQL.',
    tags: ['Next.js 16', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    demoUrl: '#', // Cambia por tu demo o ruta
    githubUrl: 'https://github.com/David-Alejandro-Caamal-Tuz/golf-club-platform',
    status: 'Online',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* 1. HEADER CON TU NOMBRE, FOTO Y ESTADO */}
      <header className="max-w-4xl mx-auto flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
        <div className="flex items-center gap-4">
          {/* FOTO CERCA DEL NOMBRE */}
          <img 
            src="/avatar.png" 
            alt="David Caamal" 
            className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/50 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-xl font-bold tracking-tight text-slate-100">David Caamal</h1>
            </div>
            <p className="text-xs text-slate-400">Full-Stack Developer</p>
          </div>
        </div>

        <div className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
          🔒 Entorno Privado de Presentación
        </div>
      </header>

      {/* 2. SECCIÓN PRINCIPAL / PROYECTOS */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Plataformas Web, APIs y Arquitectura de Software</h2>
        <p className="text-slate-400 mb-8">
          Espacio centralizado de demostraciones interactivas, código fuente y detalles técnicos de las aplicaciones Full Stack que he construido.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-slate-200">Proyectos Destacados</h3>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl p-5">
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-emerald-400 font-medium">{project.category}</span>
              <h4 className="text-xl font-bold text-slate-100 mt-1">{project.title}</h4>
              <p className="text-sm text-slate-400 mt-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a href={project.demoUrl} className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Ver Demo en Vivo ↗
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Código en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN DEL CV PROTEGIDO (UBICADA AL FINAL) */}
      <section className="mt-20 max-w-4xl mx-auto pt-10 border-t border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Curriculum Vitae</h3>
            <p className="text-sm text-slate-400">
              Visualización exclusiva para fines de reclutamiento
            </p>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-full font-medium">
            🔒 Solo Lectura
          </span>
        </div>

        {/* Visor con restricciones de clic derecho y arrastre */}
        <div 
          className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Capa transparente superior que bloquea interacciones de guardado */}
          <div className="absolute inset-0 z-10 cursor-default" />

          {/* Imagen de tu CV */}
          <div className="flex justify-center">
            <img 
              src="/cv-david-caamal.png" 
              alt="Curriculum Vitae - David Caamal" 
              className="w-full max-w-2xl h-auto rounded border border-slate-800 pointer-events-none select-none opacity-95 hover:opacity-100 transition-opacity"
              draggable={false}
            />
          </div>
          {/* Imagen de tu CV */}
          <div className="flex justify-center">
            <img 
              src="/imagen.png" 
              alt="Curriculum Vitae - David Caamal" 
              className="w-full max-w-2xl h-auto rounded border border-slate-800 pointer-events-none select-none opacity-95 hover:opacity-100 transition-opacity"
              draggable={false}
            />
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center mt-3">
          Documento confidencial. Prohibida su reproducción total o parcial.
        </p>
      </section>
    </main>
  );
}