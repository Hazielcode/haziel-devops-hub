import { motion } from 'framer-motion';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0, duration: 1.2 } }
  };

  return (
    <motion.section 
      id="hero" 
      variants={containerVars} 
      initial="hidden" 
      animate="show"
      style={{ marginTop: '10vh' }}
    >
      <motion.p variants={itemVars} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>
        Hola, soy
      </motion.p>
      <motion.h1 variants={itemVars} style={{ fontSize: '4.5rem', fontWeight: 600, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>
        Samir Haziel.
      </motion.h1>
      <motion.h2 variants={itemVars} style={{ fontSize: '2.5rem', color: 'var(--text-muted)', fontWeight: 400, marginBottom: '2rem' }}>
        Cloud & DevOps Engineer.
      </motion.h2>
      
      <motion.div variants={itemVars} style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-main)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Especializado en la orquestación de contenedores y automatización mediante Infraestructura como Código (IaC). 
          Construyendo plataformas resilientes, seguras y monitorizadas de extremo a extremo.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Actualmente enfocado en Kubernetes, Docker y optimización en la nube.
        </p>
      </motion.div>
      
      <motion.div variants={itemVars} style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
        <a href="#contact" style={{
          padding: '0.8rem 1.8rem', 
          border: '1px solid rgba(255, 255, 255, 0.4)', 
          background: 'var(--glass-bg)',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          fontSize: '0.95rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--glass-bg)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        }}
        >
          Contactar
        </a>
      </motion.div>
    </motion.section>
  );
}
