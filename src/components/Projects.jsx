import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SpineBand (IoT & Mobile)',
      description: 'Sistema avanzado de monitorización postural. Construido en Kotlin con integración de hardware embebido ESP32. Utiliza sensores giroscópicos MPU6050 para procesar y transmitir telemetría en tiempo real.',
      tech: ['Kotlin', 'ESP32', 'MPU6050', 'C++', 'IoT'],
      github: 'https://github.com/Hazielcode/SpineBand'
    }
  ];

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: '6rem' }}
    >
      <h3 className="section-title">Proyectos Personales</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {projects.map((project, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Cpu size={32} style={{ color: 'rgba(255,255,255,0.8)' }} />
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="Ver Código en GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.98 0-1.5-.5-2.7-1.3-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.5 6.3 1.8 6.3 1.8c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.6 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>{project.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, index) => (
                  <span key={index} style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.2rem 0.6rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '4px',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
