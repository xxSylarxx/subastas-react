import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Página no encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="w-full" asChild>
            <Link to="/auctions">
              <Search className="w-5 h-5 mr-2" />
              Ver Subastas
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>¿Necesitas ayuda? <Link to="/contact" className="text-blue-600 hover:underline">Contáctanos</Link></p>
        </div>
      </div>
    </div>
  );
}
