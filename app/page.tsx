'use client';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  status: 'Online' | 'En Desarrollo' | 'Demo';
  image: string;
}

const projects: Project[] = [
  {
    id: 'golf-club',
    title: 'Golf Club & Resort Platform',
    category: 'Full Stack Web Application',
    description: 'Sistema integral de reservas de Tee Times para clubes de golf de lujo con interfaz estilo resort, API REST en TypeScript y persistencia en PostgreSQL.',
    tags: ['Next.js 16', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    demoUrl: 'http://localhost:3000', // Enlace local o la URL pública cuando la despliegues
    githubUrl: 'https://github.com/David-Alejandro-Caamal-Tuz/golf-club-platform',
    status: 'Online',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop',
  },
];

export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* Header / Presentación Personal */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-semibold text-lg tracking-wide text-white">David Caamal</span>
            <span className="text-slate-500 text-sm hidden sm:inline">| Full-Stack Developer</span>
          </div>
          <div className="text-xs bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-full text-slate-300">
            🔒 Entorno Privado de Presentación
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full inline-block">
            Portfolio & Project Showcase
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Plataformas Web, APIs y Arquitectura de Software
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Espacio centralizado de demostraciones interactivas, código fuente y detalles técnicos de las aplicaciones Full Stack que he construido.
          </p>
        </div>
      </section>

      {/* Showcase de Proyectos */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6 text-slate-200 border-b border-slate-800 pb-3">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual / Mini-captura */}
                <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 border border-slate-700 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-400">
                    ● {project.status}
                  </div>
                </div>

                {/* Info del Proyecto */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Badges de Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Acciones / Links */}
              <div className="p-6 pt-0 flex gap-3">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 rounded transition shadow-md"
                >
                  Ver Demo en Vivo ↗
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold py-2.5 rounded transition"
                >
                  Código en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-xs text-slate-500">
        <p>© 2026 David Caamal · Desplegado en Cloudflare Pages</p>
      </footer>
    </div>
  );
}