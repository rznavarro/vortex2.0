
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Gem } from "lucide-react"; // Import Gem icon
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Inicio", path: createPageUrl("Homepage") },
    { name: "Servicios", path: "#services" },
    { name: "Planes", path: "#pricing" }, // Added "Planes" navigation item
    { name: "Contacto", path: "#contact" }
  ];

  const pricingPlans = [
    {
      name: "Básico",
      description: "Ideal para pequeñas empresas que inician con IA.",
      price: "$199",
      features: [
        "Automatización de Tareas (5 flujos)",
        "Análisis de Datos Básico (1 fuente)",
        "Soporte Estándar (Email)",
        "Informes Mensuales Simplificados",
        "Integración con 2 herramientas",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Para empresas en crecimiento que buscan optimizar procesos.",
      price: "$499",
      features: [
        "Automatización de Tareas (20 flujos)",
        "Análisis de Datos Avanzado (5 fuentes)",
        "Soporte Prioritario (Chat/Email)",
        "Informes Detallados y Personalizables",
        "Integración con 5 herramientas",
        "Optimización de Campañas Marketing"
      ],
      isPopular: true,
    },
    {
      name: "Empresarial",
      description: "Soluciones personalizadas para grandes corporaciones.",
      price: "$999",
      features: [
        "Automatización de Tareas Ilimitada",
        "Análisis de Datos Integral (Múltiples fuentes)",
        "Soporte Dedicado 24/7 (Teléfono/Chat)",
        "Consultoría Estratégica de IA",
        "Integración con N herramientas",
        "Desarrollo de Modelos IA a Medida",
        "Formación de Equipo"
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          :root {
            --vortexia-black: #000000;
            --vortexia-dark: #0f0f0f;
            --vortexia-crimson: #9b1c1c;
            --vortexia-crimson-light: #b91c1c;
            --vortexia-crimson-dark: #7f1d1d;
            --vortexia-white: #ffffff;
            --vortexia-gray: #525252;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            font-weight: 300;
            background: var(--vortexia-black);
            letter-spacing: 0.01em;
            line-height: 1.6;
          }
          
          .vortexia-serif {
            font-family: 'Playfair Display', serif;
            line-height: 1.2;
          }
          
          .vortexia-gradient {
            background: linear-gradient(135deg, var(--vortexia-black) 0%, var(--vortexia-dark) 50%, var(--vortexia-crimson-dark) 100%);
          }
          
          .vortexia-text-gradient {
            background: linear-gradient(135deg, var(--vortexia-crimson) 0%, var(--vortexia-crimson-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
          }
          
          .vortexia-glow {
            box-shadow: 0 0 40px rgba(155, 28, 28, 0.3);
          }
          
          .vortexia-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .vortexia-hover:hover {
            transform: translateY(-3px);
          }

          .vortexia-logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(1.1);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Homepage")} className="flex items-center space-x-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                alt="Vortexia Logo" 
                className="vortexia-logo"
              />
              <span className="text-3xl font-light vortexia-serif vortexia-text-gradient">VORTEXIA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-gray-400 hover:text-crimson-400 transition-colors duration-400 font-light text-lg"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-crimson-600 hover:bg-crimson-700 text-white px-10 py-3 rounded-full font-light text-lg vortexia-hover">
                Comenzar
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-xl">
            <div className="px-8 py-8 space-y-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block text-gray-300 hover:text-crimson-400 transition-colors duration-400 font-light text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-crimson-600 hover:bg-crimson-700 text-white py-4 rounded-full font-light text-lg">
                Comenzar
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <h2 className="text-5xl font-light vortexia-serif vortexia-text-gradient mb-6">
              Nuestros Planes
            </h2>
            <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y comienza a transformar tu negocio con IA avanzada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 pb-10 flex flex-col items-center justify-between
                    ${plan.isPopular ? 'vortexia-glow border-crimson-700' : ''}
                  `}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-4 px-6 py-2 bg-crimson-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-3xl font-light vortexia-serif text-white mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6 text-center">{plan.description}</p>
                  <p className="text-6xl font-extrabold vortexia-text-gradient mb-8">
                    {plan.price}
                    <span className="text-xl text-gray-500 font-light ml-2">/mes</span>
                  </p>

                  <ul className="text-gray-300 space-y-3 text-lg mb-10 text-left w-full max-w-xs">
                    {plan.features.map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-start">
                        <Gem className="w-5 h-5 text-crimson-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`
                    w-full py-4 rounded-full font-light text-lg
                    ${plan.isPopular ? 'bg-crimson-600 hover:bg-crimson-700 text-white vortexia-hover' : 'bg-gray-700 hover:bg-gray-600 text-white'}
                  `}>
                    Comenzar con {plan.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/efef71724_descarga4.png" 
                alt="Vortexia Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-light vortexia-serif vortexia-text-gradient">VORTEXIA</span>
            </div>
            <p className="text-gray-500 font-light max-w-md mx-auto">
              Transformamos procesos empresariales con inteligencia artificial avanzada.
            </p>
            <div className="pt-8 border-t border-gray-800 text-gray-600 font-light">
              <p>&copy; 2024 Vortexia. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
