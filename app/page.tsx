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
    demoUrl: '#',
    githubUrl: 'https://github.com/David-Alejandro-Caamal-Tuz/golf-club-platform',
    status: 'Online',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* HEADER PRINCIPAL */}
      <header className="max-w-4xl mx-auto flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
        <div className="flex items-center gap-4">
          <img 
            src="/avatar.png" 
            alt="David Alejandro Caamal Tuz" 
            className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/50 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-xl font-bold tracking-tight text-slate-100">David Alejandro Caamal Tuz</h1>
            </div>
            <p className="text-xs text-slate-400">Ingeniero en Sistemas Computacionales | Full-Stack Developer</p>
          </div>
        </div>

        <div className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 hidden sm:block">
          🔒 Entorno Privado de Presentación
        </div>
      </header>

      {/* SECCIÓN PROYECTOS */}
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

      {/* SECCIÓN CURRÍCULUM VITAE NATIVO PROTEGIDO */}
      <section className="mt-20 max-w-4xl mx-auto pt-10 border-t border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Curriculum Vitae</h3>
            <p className="text-sm text-slate-400">
              Visualización interactiva protegida contra copia y descarga
            </p>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-full font-medium">
            🔒 Solo Lectura / Sin Copia
          </span>
        </div>

        {/* CONTENEDOR CON PROTECCIÓN DE COPIA */}
        <div 
          className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Capa transparente opcional para impedir interacción táctil o selección rápida */}
          <div className="absolute inset-0 z-10 cursor-default" />

          {/* PERFIL & RESUMEN */}
          <div className="mb-8 border-b border-slate-800 pb-6">
            <h4 className="text-2xl font-bold text-slate-100">David Alejandro Caamal Tuz</h4>
            <p className="text-emerald-400 font-medium text-sm mt-1">Ingeniero en Sistemas Computacionales</p>
            <p className="text-xs text-slate-400 mt-1">Benito Juárez, Cancún, Q. Roo • alex.caamal.24@gmail.com • +52 998 708 7701</p>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              Ingeniero en Sistemas Computacionales con especialidad en Desarrollo de Aplicaciones, egresado del Instituto Tecnológico de Cancún. Experiencia en administración y mantenimiento de infraestructura tecnológica, gestión de redes, soporte técnico e instalación de equipos de cómputo y seguridad. Habilidad para optimizar procesos tecnológicos, implementar soluciones eficientes y liderar equipos de trabajo en entornos corporativos y hoteleros.
            </p>
          </div>

          {/* EXPERIENCIA PROFESIONAL */}
          <div className="mb-8 border-b border-slate-800 pb-6">
            <h5 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Experiencia Profesional
            </h5>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h6 className="font-bold text-slate-200">Jefe de Sistemas</h6>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Feb 2025 – Actualmente</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">OCEAN DREAM CANCÚN</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Especializado en mantener la infraestructura tecnológica vital para la operación diaria. Mejora de la seguridad y eficiencia operativa mediante la configuración de sistemas operativos y soporte técnico multiárea.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h6 className="font-bold text-slate-200">Auxiliar de Sistemas</h6>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Feb 2025 – Jul 2025</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">OCEAN DREAM</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Instalación y mantenimiento de cámaras de seguridad, cableado estructurado (redes, teléfonos, PC e impresoras). Configuración de servidores/clientes e impresoras térmicas.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h6 className="font-bold text-slate-200">Ingeniero en Soporte Técnico</h6>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Ago 2024 – Dic 2024</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">COPYJET DIGITAL</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Soporte y mantenimiento a equipo multifuncional y solución de problemas de conectividad a la red en sectores hoteleros y privados.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h6 className="font-bold text-slate-200">Residencia Profesional</h6>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Ene 2024 – Jun 2024</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">Instituto Tecnológico de Cancún</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Implementación del sistema de registros de egresados en proceso de digitalización y migración de datos del Departamento de Digitalización del TecNM Campus Cancún.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h6 className="font-bold text-slate-200">Soporte Técnico General / Correctivo</h6>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">2021 – 2023</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium">Mause Technology / Plaza de la Tecnología / Repairtech / See Solucion</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Diagnóstico y reparación de hardware a nivel componente (Apple, Windows, Android, consolas). Mantenimiento presencial y remoto a empresas hoteleras y privadas.
                </p>
              </div>
            </div>
          </div>

          {/* EDUCACIÓN & CERTIFICACIONES */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 border-b border-slate-800 pb-6">
            <div>
              <h5 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Formación Académica
              </h5>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-bold text-slate-200">Licenciatura en Ingeniería en Sistemas</p>
                  <p className="text-slate-400">Instituto Tecnológico de Cancún (2018 - 2024)</p>
                </div>
                <div>
                  <p className="font-bold text-slate-200">Educación Media Superior (Técnico)</p>
                  <p className="text-slate-400">Cecyte Cancún Plantel 4 (2015 - 2018)</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Certificaciones Fortinet
              </h5>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-800/60 p-2.5 rounded border border-slate-700/50">
                  <p className="font-bold text-slate-200">FCF - Introduction to the Threat Landscape 2.0</p>
                  <p className="text-slate-400">Fortinet Training Institute</p>
                </div>
                <div className="bg-slate-800/60 p-2.5 rounded border border-slate-700/50">
                  <p className="font-bold text-slate-200">FCA - FortiGate 7.4 Operator</p>
                  <p className="text-slate-400">Fortinet Training Institute</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONOCIMIENTOS TÉCNICOS & MOVILIDAD */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Conocimientos Técnicos
              </h5>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Redes LAN/WAN & Cableado Estructurado</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Cisco, MikroTik & Fortinet</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Servidores Windows & Linux</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">NVR Hikvision & Videovigilancia</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Issabel PBX (Asterisk)</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Puntos de Venta (POS) & AbrhilSoft</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Bases de Datos & Diagnóstico Hardware</span>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Desplazamiento & Idiomas
              </h5>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li className="flex items-center gap-2">✓ Disponibilidad para viajar y cambio de residencia</li>
                <li className="flex items-center gap-2">✓ Licencia de conducir Tipo C</li>
                <li className="flex items-center gap-2">✓ Vehículo propio</li>
                <li className="flex items-center gap-2">✓ Español (Nativo)</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center mt-3">
          Documento confidencial. Prohibida su reproducción total o parcial.
        </p>
      </section>
    </main>
  );
}