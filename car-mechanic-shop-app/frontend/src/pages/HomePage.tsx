import { useState, useEffect } from 'react';
import { Wrench, Cog, Car, Headphones, Droplet, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/sections/Services/ServiceCard';

export default function HomePage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Listen for serviceSelect events dispatched from Header to trigger details
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      handleCardClick(customEvent.detail);
    };
    window.addEventListener('serviceSelect', handler as EventListener);
    return () => window.removeEventListener('serviceSelect', handler as EventListener);
  }, []);

  const handleCardClick = (serviceId: string) => {
    setActiveService(serviceId);
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        const offsetPosition = element.offsetTop - headerHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };
  
  const services = [
    { id: 'service-installation', icon: <Wrench />, title: 'Installation de pièces', description: 'Installation rapide et professionnelle de toutes vos pièces.' },
    { id: 'service-engine-repair', icon: <Cog />, title: 'Réparation moteur', description: 'Diagnostic et réparation de moteurs toutes marques.' },
    { id: 'service-maintenance', icon: <Car />, title: 'Entretien', description: 'Service d\'entretien complet pour votre véhicule.' },
    { id: 'service-wash', icon: <Droplet />, title: 'Lavage Auto', description: 'Nettoyage complet intérieur et extérieur du véhicule.' },
    { id: 'service-support', icon: <Headphones />, title: 'Support', description: 'Assistance et conseils pour tous vos besoins automobiles.' }
  ];

  return (
    <>      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .animate-fade-in { animation: fadeIn 1s ease-out; }
          .animate-slide-in-left { animation: slideInLeft 0.8s ease-out; }
          .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
          .animate-scale-in { animation: scaleIn 0.6s ease-out; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
          .animate-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
          }
          .glass-effect {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .gradient-border {
            position: relative;
            background: linear-gradient(45deg, #f3f4f6, #ffffff);
            border-radius: 16px;
          }
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6, #f59e0b);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: xor;
            -webkit-mask-composite: xor;
          }
        `}
      </style>
      
      <section id="services" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto" dir="ltr">
            <span className="text-sm font-semibold tracking-wider uppercase text-yellow-500">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Ce que nous offrons
            </h2>
            <p className="text-lg text-gray-600">
              Des services professionnels pour l'entretien, la réparation et l'installation de pièces auto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                serviceId={service.id}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </section>      {activeService === 'service-installation' && (
        <section 
          id="service-installation" 
          className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden animate-fade-in"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 animate-scale-in">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-full mb-8 shadow-2xl animate-pulse-slow">
                  <Wrench className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Installation de Pièces Auto
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Service professionnel d'installation rapide avec garantie et expertise technique de pointe
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-12 animate-slide-in-left">
                  <div className="glass-effect rounded-3xl p-8 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-10 flex items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">1</span>
                      Processus d'Installation Premium
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🔍</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-yellow-600 transition-colors">Diagnostic Précis</h4>
                          <p className="text-gray-600 leading-relaxed">Analyse complète du véhicule et vérification méticuleuse de compatibilité des pièces avec technologie avancée</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🔧</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-yellow-600 transition-colors">Préparation Technique</h4>
                          <p className="text-gray-600 leading-relaxed">Démontage professionnel des anciennes pièces avec outils spécialisés et techniques certifiées</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">⚙️</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-yellow-600 transition-colors">Installation Millimétrique</h4>
                          <p className="text-gray-600 leading-relaxed">Montage de précision selon les spécifications constructeur avec contrôle qualité à chaque étape</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '98%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">✅</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-yellow-600 transition-colors">Validation Complète</h4>
                          <p className="text-gray-600 leading-relaxed">Tests exhaustifs et contrôles de fonctionnement avec certification de performance avant livraison</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12 animate-slide-in-right">
                  <div className="gradient-border glass-effect rounded-3xl p-10 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">i</span>
                      Spécifications Techniques
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold text-yellow-600 mb-2">⏱️</div>
                        <div className="text-sm text-gray-600 mb-1">Durée Moyenne</div>
                        <div className="font-bold text-lg text-gray-800">30-90 min</div>
                        <div className="text-xs text-gray-500 mt-1">Selon complexité</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold text-green-600 mb-2">🛡️</div>
                        <div className="text-sm text-gray-600 mb-1">Garantie Étendue</div>
                        <div className="font-bold text-lg text-gray-800">24 mois</div>
                        <div className="text-xs text-gray-500 mt-1">Pièces & Main d'œuvre</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">🔧</div>
                        <div className="text-sm text-gray-600 mb-1">Outillage</div>
                        <div className="font-bold text-lg text-gray-800">Professionnel</div>
                        <div className="text-xs text-gray-500 mt-1">Certifié & Calibré</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold text-purple-600 mb-2">📋</div>
                        <div className="text-sm text-gray-600 mb-1">Documentation</div>
                        <div className="font-bold text-lg text-gray-800">Complète</div>
                        <div className="text-xs text-gray-500 mt-1">Rapport détaillé</div>
                      </div>
                    </div>

                    {/* Quality Indicators */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border border-yellow-300">
                      <h4 className="font-bold text-gray-800 mb-4 text-center">Indicateurs Qualité</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-yellow-700">99.8%</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700">&lt; 0.1%</div>
                          <div className="text-xs text-gray-600">Défauts</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-700">4.9/5</div>
                          <div className="text-xs text-gray-600">Avis clients</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 via-orange-50 to-red-50 rounded-3xl p-10 border-2 border-yellow-300 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">💰 Tarification Transparente</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Installation Standard</span>
                          <div className="text-sm text-gray-600">Pièces courantes, accès facile</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-yellow-700">45€</span>
                          <div className="text-xs text-gray-500">à partir de</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Installation Complexe</span>
                          <div className="text-sm text-gray-600">Pièces spécialisées, démontage poussé</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-orange-700">85€</span>
                          <div className="text-xs text-gray-500">à partir de</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Installation Premium</span>
                          <div className="text-sm text-gray-600">Pièces haute performance, calibrage</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-red-700">150€</span>
                          <div className="text-xs text-gray-500">à partir de</div>
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl mt-6">
                        <p className="font-bold text-gray-800 mb-2">✨ Prestations Incluses</p>
                        <p className="text-sm text-gray-700">Main d'œuvre qualifiée • Contrôles qualité • Nettoyage complet • Garantie étendue • Support technique</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}      {activeService === 'service-engine-repair' && (
        <section 
          id="service-engine-repair" 
          className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden animate-fade-in"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 animate-scale-in">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-full mb-8 shadow-2xl animate-pulse-slow">
                  <Cog className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Réparation Moteur Expert
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Diagnostic de pointe et réparation complète avec technologie avancée et expertise certifiée
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-12 animate-slide-in-left">
                  <div className="glass-effect rounded-3xl p-8 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-10 flex items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">🔍</span>
                      Diagnostic Ultra-Précis
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">💻</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-blue-600 transition-colors">Scan Électronique OBD-II</h4>
                          <p className="text-gray-600 leading-relaxed">Lecture complète des codes d'erreur et analyse des paramètres moteur en temps réel avec outils professionnels</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">16 Protocoles</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Temps Réel</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📊</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-blue-600 transition-colors">Test de Compression Avancé</h4>
                          <p className="text-gray-600 leading-relaxed">Mesure haute précision de la compression dans chaque cylindre avec analyse comparative et historique</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">±0.1% Précision</span>
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Multi-Cylindres</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🧪</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-blue-600 transition-colors">Analyse Chimique Complète</h4>
                          <p className="text-gray-600 leading-relaxed">Contrôle qualité avancé des fluides : huile, liquide de refroidissement, carburant et autres liquides</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">Spectrogramme</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">pH + Viscosité</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🔎</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-blue-600 transition-colors">Inspection Endoscopique</h4>
                          <p className="text-gray-600 leading-relaxed">Examen visuel interne des composants moteur avec caméra haute définition et éclairage LED</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">4K Vidéo</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Fibre Optique</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12 animate-slide-in-right">
                  <div className="gradient-border glass-effect rounded-3xl p-10 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">🔧 Spécialités Moteur</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Système d'injection haute pression</span>
                        <span className="ml-auto text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Spécialité</span>
                      </div>
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Culasse et distribution variable</span>
                        <span className="ml-auto text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Expert</span>
                      </div>
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Turbocompresseur et intercooler</span>
                        <span className="ml-auto text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Avancé</span>
                      </div>
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Système de refroidissement actif</span>
                        <span className="ml-auto text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">Pro</span>
                      </div>
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Échappement catalytique et FAP</span>
                        <span className="ml-auto text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Écologique</span>
                      </div>
                      <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium">Électronique moteur et capteurs</span>
                        <span className="ml-auto text-xs bg-red-200 text-red-800 px-2 py-1 rounded">High-Tech</span>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-300">
                      <h4 className="font-bold text-gray-800 mb-4 text-center">Performances Techniques</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-700">95%</div>
                          <div className="text-xs text-gray-600">Réparations Réussies</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-indigo-700">24h</div>
                          <div className="text-xs text-gray-600">Délai Moyen</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-700">15+</div>
                          <div className="text-xs text-gray-600">Années Expertise</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-300 shadow-2xl">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">💰 Tarifs Réparation Moteur</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Diagnostic Complet</span>
                          <div className="text-sm text-gray-600">Analyse complète + rapport détaillé</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-blue-700">89€</span>
                          <div className="text-xs text-gray-500">TTC</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Réparation Standard</span>
                          <div className="text-sm text-gray-600">Intervention courante, pièces incluses</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-indigo-700">350€</span>
                          <div className="text-xs text-gray-500">à partir de</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
                        <div>
                          <span className="text-gray-800 font-semibold">Réparation Complexe</span>
                          <div className="text-sm text-gray-600">Intervention lourde, expertise spécialisée</div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-2xl text-purple-700">Sur devis</span>
                          <div className="text-xs text-gray-500">Personnalisé</div>
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl mt-6">
                        <p className="font-bold text-gray-800 mb-2">🛡️ Garantie Premium</p>
                        <p className="text-sm text-gray-700">24 mois pièces et main d'œuvre • Support technique illimité • Révision gratuite à 6 mois</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'service-maintenance' && (
        <section id="service-maintenance" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Service d'Entretien Complet
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Maintenez votre véhicule en parfait état avec notre service d'entretien premium. 
                  Prévenez les pannes et prolongez la durée de vie de votre voiture.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Process Steps */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Notre Processus d'Entretien</h3>
                  {/*
                    Step 1: Inspection Complète
                    Step 2: Vidange & Filtres
                    Step 3: Contrôles de Sécurité
                    Step 4: Tests & Validation
                  */}
                  {/*
                    Map through the process steps array and render each step
                  */}
                  {/*
                    Example step object:
                    { step: 1, title: "Inspection Complète", desc: "Vérification de tous les systèmes critiques", icon: "🔍" }
                  */}
                  {/*
                    Replace with dynamic mapping of steps
                  */}
                  {/*
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                  */}
                </div>

                {/* Stats & Features */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Pourquoi Choisir Notre Service</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/*
                      Statistics data
                    */}
                    {/*
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                        <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color === 'green' ? 'emerald' : 'green'}-600 bg-clip-text text-transparent`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    */}
                  </div>
                  
                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center">
                    <div className="text-sm opacity-90 mb-2">À partir de</div>
                    <div className="text-4xl font-bold mb-2">49,90€</div>
                    <div className="text-sm opacity-90">Service complet inclus</div>
                  </div>
                </div>
              </div>

              {/* Tools & Equipment */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Équipements & Outils Professionnels</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {/*
                    Tools and equipment data
                  */}
                  {/*
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{tool.name}</h4>
                      <p className="text-gray-600 text-sm">{tool.desc}</p>
                    </div>
                  */}
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-green-600 hover:to-emerald-700">
                  Réserver Mon Entretien
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'service-wash' && (
        <section
          id="service-wash"
          className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden animate-fade-in"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-blue-100 rounded-full opacity-15 animate-pulse-slow"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-scale-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mb-6 shadow-lg animate-pulse-slow">
                  <Droplet className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Lavage Auto Professionnel
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Nettoyage complet intérieur et extérieur pour rendre votre véhicule impeccable.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 animate-slide-in-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Processus de Lavage</h3>
                  {[
                    { icon: '💧', title: 'Prélavage', desc: 'Rinçage à haute pression pour éliminer la saleté.' },
                    { icon: '🧼', title: 'Moussage Actif', desc: 'Application de mousse détergente concentrée.' },
                    { icon: '🚿', title: 'Rinçage Détaillé', desc: 'Nettoyage minutieux des roues et bas de caisse.' },
                    { icon: '💨', title: 'Séchage', desc: 'Séchage à air comprimé pour éviter les traces.' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl">{step.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8 animate-slide-in-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Détails & Garanties</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-cyan-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">🕑</div>
                        <div className="text-sm text-gray-600 mt-1">Durée</div>
                        <div className="font-semibold">30-45 min</div>
                      </div>
                      <div className="text-center p-4 bg-cyan-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">🛡️</div>
                        <div className="text-sm text-gray-600 mt-1">Protection</div>
                        <div className="font-semibold">Spray hydrophobe</div>
                      </div>
                      <div className="text-center p-4 bg-cyan-50 rounded-xl">
                        <div className="text-2xl font-bold text-indigo-600">🔧</div>
                        <div className="text-sm text-gray-600 mt-1">Outils</div>
                        <div className="font-semibold">Équipements pro</div>
                      </div>
                      <div className="text-center p-4 bg-cyan-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">📋</div>
                        <div className="text-sm text-gray-600 mt-1">Rapport</div>
                        <div className="font-semibold">Photos avant/après</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 border border-cyan-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Tarification</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg shadow-sm border border-cyan-200">
                        <span>Pack Standard</span>
                        <span className="font-bold text-blue-600">25€</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg shadow-sm border border-cyan-200">
                        <span>Pack Premium</span>
                        <span className="font-bold text-indigo-600">40€</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-2">Inclus: nettoyage intérieur, sièges, vitres, jantes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'service-support' && (
        <section id="service-support" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-1500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                  Support & Assistance Premium
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Bénéficiez d'un accompagnement personnalisé et de conseils d'experts. 
                  Notre équipe est là pour répondre à tous vos besoins automobiles.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Support Features */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Nos Services de Support</h3>
                  {/*
                    Support service items
                  */}
                  {/* 
                    Example item object:
                    { title: "Conseil Technique", desc: "Expertise personnalisée pour vos besoins", icon: "💡", color: "purple" }
                  */}
                  {/* 
                    Replace with dynamic mapping of support items
                  */}
                  {/* 
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color === 'purple' ? 'indigo' : 'purple'}-600 rounded-full flex items-center justify-center text-white text-xl`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  */}
                </div>

                {/* Contact Options */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Contactez-Nous</h3>
                  
                  {/* Contact Methods */}
                  <div className="space-y-6 mb-8">
                    {/* 
                      Contact method data
                    */}
                    {/* 
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="text-2xl">{contact.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-600">{contact.method}</div>
                          <div className="font-semibold text-gray-800">{contact.value}</div>
                        </div>
                      </div>
                    */}
                  </div>
                  
                  {/* Response Time */}
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white text-center">
                    <div className="text-sm opacity-90 mb-2">Temps de réponse moyen</div>
                    <div className="text-4xl font-bold mb-2">&lt; 2h</div>
                    <div className="text-sm opacity-90">Garantie de satisfaction</div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Access */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Questions Fréquentes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 
                    FAQ data
                  */}
                  {/* 
                    <div key={index} className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-800 mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </div>
                  */}
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-purple-600 hover:to-indigo-700">
                  Obtenir de l'Aide Maintenant
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Shop Section */}
      <section id="our-shop" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose LE PRO MECANO?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 15 years of expertise, we deliver top-notch auto parts and exceptional service.
              Our dedicated team ensures quality, reliability, and customer satisfaction at every step.
            </p>
            <Link
              to="/shop/"
              className="group inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-yellow-600"
              onClick={() => {
                try {
                  document.documentElement.scrollIntoView({ behavior: 'smooth' });
                } catch (e) {
                  console.warn('Smooth scroll failed', e);
                }
              }}
            >
              Visit Our Main Shop
              <ChevronRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:rotate-90" />
            </Link>
          </div>
          {/* Images Column */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <figure>
              <img src="images/tek1.jpg" alt="Shop interior" className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </figure>
            <figure>
              <img src="images/tek2.jpg" alt="Expert technician" className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </figure>
            <figure>
              <img src="images/tek3.jpg" alt="Customer service" className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}