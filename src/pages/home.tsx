import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Trophy, Users } from 'lucide-react';

export default function HomePage() {
  const featuredAuctions = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      currentBid: 0.47,
      timeLeft: "2h 15m",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
      participants: 23
    },
    {
      id: 2,
      title: "MacBook Air M2",
      currentBid: 1.23,
      timeLeft: "45m",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",
      participants: 18
    },
    {
      id: 3,
      title: "PlayStation 5",
      currentBid: 0.89,
      timeLeft: "1h 30m",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=200&fit=crop",
      participants: 31
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://readdy.ai/api/search-image?query=Modern%20elegant%20auction%20house%20interior%20with%20sophisticated%20bidding%20atmosphere%2C%20luxury%20business%20environment%2C%20professional%20lighting%2C%20contemporary%20design%20with%20warm%20ambient%20lighting%2C%20premium%20auction%20setting%20with%20clean%20modern%20architecture&width=1920&height=1080&seq=hero-auction-bg&orientation=landscape")' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Adquiere Productos <br />
            <span style={{ color: 'rgb(191, 9, 47)' }}>Increíbles</span> {/* por <span style={{ color: 'rgb(59, 151, 151)' }}>Centavos</span> */}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Únete a la revolución de las manyalo. Miles de productos esperándote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap" 
              style={{ backgroundColor: 'rgb(191, 9, 47)', color: 'white' }}
              asChild
            >
              <Link to="/auctions">
                <ArrowRight className="mr-2 h-5 w-5" />
                Comenzar Ahora
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-colors whitespace-nowrap bg-white hover:bg-gray-100" 
              style={{ borderColor: 'rgb(22, 71, 106)', color: 'rgb(22, 71, 106)' }}
              asChild
            >
              <Link to="/how-it-works">
                ¿Cómo Funciona?
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(59, 151, 151)' }}>127k+</div>
              <div className="text-gray-300">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(59, 151, 151)' }}>S/2.8M</div>
              <div className="text-gray-300">Ahorrado por Usuarios</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(59, 151, 151)' }}>99.2%</div>
              <div className="text-gray-300">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subastas Destacadas</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubre las subastas más populares del momento. ¡No te pierdas estas oportunidades únicas!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAuctions.map((auction) => (
              <div key={auction.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{auction.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Puja actual</p>
                      <p className="text-2xl font-bold text-green-600">${auction.currentBid}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tiempo restante</p>
                      <p className="text-lg font-semibold text-red-600 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {auction.timeLeft}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {auction.participants} participantes
                    </p>
                    <Button size="sm" asChild>
                      <Link to={`/auction/${auction.id}`}>Pujar Ahora</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/auctions">Ver Todas las Subastas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegir Subastas al Centavo?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Productos de Calidad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Todos nuestros productos son nuevos y originales de marcas reconocidas mundialmente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Plataforma segura con garantía de entrega y protección al comprador.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Subastas 24/7</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nuevas subastas cada día. Siempre hay oportunidades esperándote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar a manyar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad y comienza a participar en subastas emocionantes.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/register">Registrarse Gratis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
