import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, DollarSign, Gift, Users, Shield, Trophy } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Regístrate Gratis",
      description: "Crea tu cuenta en segundos y recibe créditos de bienvenida para comenzar a pujar.",
      icon: Users
    },
    {
      number: 2,
      title: "Compra Créditos",
      description: "Cada puja cuesta un crédito. Los créditos son muy económicos y te dan muchas oportunidades.",
      icon: DollarSign
    },
    {
      number: 3,
      title: "Encuentra tu Producto",
      description: "Explora nuestra selección de productos de alta calidad y elige el que más te guste.",
      icon: Gift
    },
    {
      number: 4,
      title: "Participa en la Subasta",
      description: "Cada puja aumenta el precio en $0.01 y extiende el tiempo de la subasta.",
      icon: Clock
    },
    {
      number: 5,
      title: "¡Gana el Producto!",
      description: "Si eres el último en pujar cuando termine el tiempo, ¡el producto es tuyo!",
      icon: Trophy
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funcionan las subastas al centavo?",
      answer: "En las subastas al centavo, cada puja aumenta el precio del producto en solo $0.01. Cuando alguien puja, el temporizador se reinicia, dando a otros la oportunidad de pujar también. El último participante en pujar cuando el tiempo se agote gana el producto al precio final."
    },
    {
      question: "¿Cuánto cuestan las pujas?",
      answer: "Cada puja cuesta un crédito. Los créditos son muy económicos - puedes comprar paquetes desde $5 que incluyen muchos créditos para participar en múltiples subastas."
    },
    {
      question: "¿Los productos son reales y nuevos?",
      answer: "¡Absolutamente! Todos nuestros productos son 100% nuevos, originales y vienen con garantía del fabricante. Trabajamos directamente con distribuidores autorizados."
    },
    {
      question: "¿Qué pasa si no gano?",
      answer: "Si no ganas una subasta, puedes usar tus créditos restantes en otras subastas. Además, ofrecemos descuentos especiales para comprar productos al precio retail si participaste activamente."
    },
    {
      question: "¿Cómo recibo mi producto si gano?",
      answer: "Una vez que ganes, te contactaremos para confirmar tu dirección de envío. Los productos se envían gratis a toda la república y llegan en 3-5 días hábiles."
    },
    {
      question: "¿Es seguro participar?",
      answer: "Completamente seguro. Usamos encriptación SSL, procesamiento seguro de pagos y tenemos garantía de satisfacción del 100%. Tu información está protegida en todo momento."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">¿Cómo Funcionan las Subastas al Centavo?</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Descubre cómo puedes ganar productos increíbles por una fracción de su precio original. 
            Es fácil, divertido y emocionante.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">5 Pasos Simples para Ganar</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sigue estos sencillos pasos y estarás participando en subastas emocionantes en minutos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block ml-8">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/register">Comenzar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ejemplo de Subasta</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Veamos cómo María ganó un iPhone 15 Pro Max por solo $3.47
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop" 
                  alt="iPhone 15 Pro Max"
                  className="w-full rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">iPhone 15 Pro Max 256GB</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Precio retail:</span>
                    <span className="font-semibold">$1,199.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Precio final de subasta:</span>
                    <span className="font-semibold text-green-600">$3.47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Créditos usados por María:</span>
                    <span className="font-semibold">12 créditos ($6.00)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total pagado:</span>
                    <span className="font-semibold text-blue-600">$9.47</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600 dark:text-gray-400">Ahorro total:</span>
                    <span className="font-bold text-green-600">$1,189.53 (99.2%)</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    💡 <strong>Tip:</strong> María participó estratégicamente en los últimos minutos 
                    y logró ser la última en pujar. ¡Tú también puedes hacerlo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">100% Seguro y Confiable</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagos Seguros</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Procesamiento seguro con encriptación SSL y protección de datos bancarios.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Productos Garantizados</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Todos los productos son nuevos, originales y vienen con garantía del fabricante.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nuestro equipo está disponible para ayudarte en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu Primera Subasta?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de ganadores y comienza a ahorrar en productos increíbles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/register">Registrarse Gratis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/auctions">Ver Subastas Activas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
