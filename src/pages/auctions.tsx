import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Users, Search, Filter } from 'lucide-react';

export default function AuctionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const auctions = [
    {
      id: 1,
      title: "iPhone 15 Pro Max 256GB",
      currentBid: 0.47,
      timeLeft: "2h 15m",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
      participants: 23,
      category: "electronics",
      retailPrice: 1199
    },
    {
      id: 2,
      title: "MacBook Air M2 13\"",
      currentBid: 1.23,
      timeLeft: "45m",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",
      participants: 18,
      category: "electronics",
      retailPrice: 1099
    },
    {
      id: 3,
      title: "PlayStation 5 Console",
      currentBid: 0.89,
      timeLeft: "1h 30m",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=200&fit=crop",
      participants: 31,
      category: "electronics",
      retailPrice: 499
    },
    {
      id: 4,
      title: "Samsung 65\" QLED TV",
      currentBid: 2.15,
      timeLeft: "3h 45m",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop",
      participants: 12,
      category: "electronics",
      retailPrice: 1299
    },
    {
      id: 5,
      title: "Nike Air Jordan Retro",
      currentBid: 0.67,
      timeLeft: "5h 20m",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
      participants: 8,
      category: "fashion",
      retailPrice: 180
    },
    {
      id: 6,
      title: "Dyson V15 Detect",
      currentBid: 1.45,
      timeLeft: "4h 10m",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      participants: 15,
      category: "home",
      retailPrice: 749
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'electronics', name: 'Electrónica' },
    { id: 'fashion', name: 'Moda' },
    { id: 'home', name: 'Hogar' },
    { id: 'sports', name: 'Deportes' }
  ];

  const filteredAuctions = auctions.filter(auction => {
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || auction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Subastas Activas</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Descubre productos increíbles a precios únicos. ¡Participa ahora!
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Auctions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAuctions.map((auction) => (
          <div key={auction.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img 
                src={auction.image} 
                alt={auction.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                <Clock className="w-3 h-3 inline mr-1" />
                {auction.timeLeft}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{auction.title}</h3>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Puja actual</p>
                  <p className="text-2xl font-bold text-green-600">${auction.currentBid}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Precio retail</p>
                  <p className="text-lg font-semibold text-gray-500 line-through">${auction.retailPrice}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {auction.participants} participantes
                </p>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    Ahorro: {Math.round(((auction.retailPrice - auction.currentBid) / auction.retailPrice) * 100)}%
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" asChild>
                  <Link to={`/auction/${auction.id}`}>Pujar Ahora</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/auction/${auction.id}`}>Ver Detalles</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredAuctions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No se encontraron subastas</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Intenta cambiar los filtros o el término de búsqueda.
          </p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }}>
            Limpiar Filtros
          </Button>
        </div>
      )}

      {/* Load More */}
      {filteredAuctions.length > 0 && (
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Cargar Más Subastas
          </Button>
        </div>
      )}
    </div>
  );
}
