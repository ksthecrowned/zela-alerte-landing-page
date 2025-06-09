"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Droplets, Wifi, Users, MapPin, Bell, Download, Phone, Mail, Globe, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// App Store and Play Store SVG components
const AppStoreLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Bell,
      title: "Alertes en temps réel",
      description: "Recevez des notifications instantanées sur les coupures dans votre zone"
    },
    {
      icon: MapPin,
      title: "Information par quartier",
      description: "Consultez les rapports spécifiques à votre quartier ou région"
    },
    {
      icon: Users,
      title: "Rapports citoyens",
      description: "Signalez et consultez les reports de la communauté"
    }
  ];

  const questions = [
    {
      icon: Zap,
      question: "Est-ce que c'est une coupure générale ?",
      color: "text-orange-500"
    },
    {
      icon: Droplets,
      question: "Y a-t-il de l'eau dans ce quartier ?",
      color: "text-blue-500"
    },
    {
      icon: Wifi,
      question: "Le réseau est-il HS chez tout le monde ?",
      color: "text-green-500"
    }
  ];

  const faqs = [
    { q: "Est-ce que Zela Alerte est gratuit ?", a: "Oui, l’application est 100% gratuite pour tous." },
    { q: "Faut-il créer un compte ?", a: "Oui, un compte est necessaire pour une meilleur expérience et aide à suivre tes alertes." },
    { q: "Est-ce fiable ?", a: "Les signalements sont citoyens, donc communautaires et mis à jour en temps réel." },
    { q: "Et mes données ?", a: "Zela Alerte respecte ta vie privée. Aucune donnée n’est vendue ou partagée." }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-orange-300/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Bell className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex justify-center space-x-4 text-gray-900 mb-6">
              <span className="block">Zela</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Alerte
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              L'alerte citoyenne entre tes mains
            </p>
            
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
              🚨 Coupure d’électricité chez toi ? Tu te demandes si c’est généralisé ? <br />
              💧 Besoin de savoir où trouver de l’eau facilement ? <br />
              📶 Internet HS ? Tu veux savoir si c’est général ou juste un bug local ?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'app
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-2 border-orange-200 hover:border-orange-300 transition-all duration-300">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Zela Alerte Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Qu'est-ce que Zela Alerte ?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zela Alerte est une plateforme citoyenne qui permet aux utilisateurs de signaler et de consulter 
              en temps réel les coupures de services essentiels dans leur zone. 
              <span className="font-semibold text-orange-600"> Ce n'est pas une source officielle</span>, 
              mais un outil communautaire basé sur les rapports des citoyens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Électricité</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-base">
                  Signalez et consultez les coupures d'électricité dans votre quartier
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Eau</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-base">
                  Partagez des informations sur la disponibilité de l'eau
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Internet</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-base">
                  Rapportez les problèmes de connectivité internet
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Les questions que vous vous posez
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Zela Alerte vous aide à trouver des réponses rapidement grâce à la communauté
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {questions.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <item.icon className={`w-12 h-12 mx-auto ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {item.question}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités principales
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une application simple et efficace pour rester connecté avec votre communauté
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Rejoignez la communauté Zela Alerte
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Téléchargez l'application et restez informé des coupures dans votre zone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-full bg-white text-orange-600 hover:bg-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <AppStoreLogo />
              App Store
            </Button>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-full bg-white text-orange-600 hover:bg-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <PlayStoreLogo />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-24 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Questions fréquentes
        </h2>
        <div className="max-w-5xl mx-auto space-y-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-700 text-base">{faq.a}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Zela Alerte</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                L'application citoyenne qui vous garde informé des coupures de services essentiels dans votre communauté.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Globe className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comment ça marche</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">zela.alerte@gmail.com</li>
                <li className="text-gray-400">+242 06 515 23 74</li>
                <li className="text-gray-400">Brazzaville, Congo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zela Alerte. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}