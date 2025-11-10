import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Users, TrendingUp, Award, ChevronLeft, Heart, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BidHistory {
  id: number;
  username: string;
  amount: number;
  timestamp: Date;
  avatar: string;
}

export default function AuctionDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45); // segundos
  const [currentBid, setCurrentBid] = useState(1.23);
  const [bidHistory, setBidHistory] = useState<BidHistory[]>([
    { id: 1, username: "Juan_M", amount: 1.23, timestamp: new Date(Date.now() - 5000), avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 2, username: "Maria_L", amount: 1.22, timestamp: new Date(Date.now() - 15000), avatar: "https://i.pravatar.cc/150?img=23" },
    { id: 3, username: "Pedro_G", amount: 1.21, timestamp: new Date(Date.now() - 25000), avatar: "https://i.pravatar.cc/150?img=33" },
    { id: 4, username: "Ana_R", amount: 1.20, timestamp: new Date(Date.now() - 35000), avatar: "https://i.pravatar.cc/150?img=44" },
    { id: 5, username: "Carlos_V", amount: 1.19, timestamp: new Date(Date.now() - 45000), avatar: "https://i.pravatar.cc/150?img=51" },
  ]);
  const [participants, setParticipants] = useState(18);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - en producción vendría de una API
  const auction = {
    id: Number(id),
    title: "MacBook Air M2 13\" - 256GB",
    description: "La nueva MacBook Air con el revolucionario chip M2 de Apple. Diseño ultrafino, pantalla Liquid Retina de 13.6 pulgadas, hasta 18 horas de batería. Incluye cargador MagSafe, adaptador USB-C y garantía Apple de 1 año.",
    currentBid: currentBid,
    retailPrice: 4299,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop"
    ],
    category: "Electrónica",
    condition: "Nuevo",
    brand: "Apple",
    specifications: [
      "Chip Apple M2 con CPU de 8 núcleos",
      "8GB de memoria unificada",
      "256GB de almacenamiento SSD",
      "Pantalla Liquid Retina de 13.6 pulgadas",
      "Cámara FaceTime HD 1080p",
      "Sistema de sonido estéreo con Spatial Audio"
    ]
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle bid
  const handleBid = () => {
    if (timeLeft === 0) {
      toast({
        title: "Subasta finalizada",
        description: "Esta subasta ya ha terminado",
        variant: "destructive"
      });
      return;
    }

    const newBid = currentBid + 0.01;
    const newBidEntry: BidHistory = {
      id: bidHistory.length + 1,
      username: "Tú",
      amount: newBid,
      timestamp: new Date(),
      avatar: "https://i.pravatar.cc/150?img=68"
    };

    setCurrentBid(newBid);
    setBidHistory([newBidEntry, ...bidHistory]);
    setTimeLeft((prev) => prev + 10); // Agregar 10 segundos
    setParticipants((prev) => prev + 1);

    toast({
      title: "¡Puja exitosa!",
      description: `Has pujado S/${newBid.toFixed(2)}. El tiempo se ha extendido 10 segundos.`,
    });
  };

  const timeColor = timeLeft <= 10 ? 'text-red-600' : timeLeft <= 30 ? 'text-orange-600' : 'text-green-600';
  const savings = Math.round(((auction.retailPrice - currentBid) / auction.retailPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        {/* Back button */}
        <Link to="/auctions" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-4">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Volver a subastas
        </Link>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-fit">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
                <img
                  src={auction.images[selectedImage]}
                  alt={auction.title}
                  className="w-full h-full object-contain p-4"
                />
                {timeLeft === 0 && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <h3 className="text-2xl font-bold mb-1">¡Finalizada!</h3>
                      <p className="text-sm">Ganador: {bidHistory[0]?.username}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="p-3 flex gap-2">
                {auction.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary scale-105'
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${auction.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Info & Bid */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-fit">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-xl font-bold flex-1">{auction.title}</h1>
                {timeLeft > 0 && (
                  <div className="bg-white dark:bg-gray-900 px-3 py-2 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${timeColor}`} />
                      <span className={`text-xl font-bold ${timeColor}`}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Current Bid */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Puja Actual</p>
                    <p className="text-3xl font-bold text-green-600">S/{currentBid.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 dark:text-gray-400">Precio Normal</p>
                    <p className="text-lg line-through text-gray-500">S/{auction.retailPrice}</p>
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Ahorro {savings}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats & Last Bidder */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Users className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                  <p className="text-lg font-bold">{participants}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Participantes</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <TrendingUp className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                  <p className="text-lg font-bold">{bidHistory.length}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Total Pujas</p>
                </div>
                {bidHistory.length > 0 && (
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center mb-1">Última puja</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src={bidHistory[0].avatar} 
                        alt={bidHistory[0].username}
                        className="w-8 h-8 rounded-full border-2 border-blue-400"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-blue-600 truncate">{bidHistory[0].username}</p>
                        <p className="text-xs text-gray-500">
                          Hace {Math.floor((Date.now() - bidHistory[0].timestamp.getTime()) / 1000)}s
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bid Button */}
              <Button
                onClick={handleBid}
                disabled={timeLeft === 0}
                className="w-full py-5 text-lg font-bold mb-3"
                style={{ backgroundColor: 'rgb(191, 9, 47)', color: 'white' }}
              >
                {timeLeft === 0 ? '¡Subasta Finalizada!' : 'Ofertar Ahora'}
              </Button>

              <div className="flex gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    setIsFavorite(!isFavorite);
                    toast({
                      title: isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos",
                      description: isFavorite ? "El producto se eliminó de tu lista" : "El producto se agregó a tus favoritos"
                    });
                  }}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  {isFavorite ? 'Guardado' : 'Guardar'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast({
                      title: "Enlace copiado",
                      description: "El enlace se copió al portapapeles"
                    });
                  }}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Details Compact */}
              <div className="border-t dark:border-gray-700 pt-3">
                <h3 className="font-bold text-sm mb-2">Detalles del Producto</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {auction.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Categoría:</span>
                    <span className="font-semibold">{auction.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Condición:</span>
                    <span className="font-semibold">{auction.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Marca:</span>
                    <span className="font-semibold">{auction.brand}</span>
                  </div>
                </div>
                <details className="text-xs">
                  <summary className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700">
                    Ver especificaciones completas
                  </summary>
                  <ul className="mt-2 space-y-1 ml-2">
                    {auction.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>

          {/* Right Column - Bid History */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-fit">
              <h3 className="font-bold text-sm mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Historial de Ofertas
              </h3>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                {bidHistory.map((bid, index) => (
                  <div
                    key={bid.id}
                    className={`flex items-center gap-2 p-2 rounded text-sm transition-all ${
                      index === 0
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 shadow-sm'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <img 
                      src={bid.avatar} 
                      alt={bid.username}
                      className={`w-10 h-10 rounded-full flex-shrink-0 ${
                        index === 0 ? 'ring-2 ring-green-400' : 'border-2 border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{bid.username}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(bid.timestamp).toLocaleTimeString('es-PE', {
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit'
                        })}
                      </p>
                    </div>
                    <p className="font-bold text-green-600 flex-shrink-0">S/{bid.amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              {/* Info Box */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2 mt-3 border border-yellow-200 dark:border-yellow-800">
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  <strong>💡 Tip:</strong> Cada puja suma 10s al tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
