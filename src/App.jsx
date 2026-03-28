import React from 'react';
import NodeBackground from './components/NodeBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact'; // Lo crearemos a continuación

function App() {
  return (
    <div className="app-container">
      <NodeBackground />
      
      <main className="content-wrapper">
        <Hero />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
