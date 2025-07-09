import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Banner() {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);


  const nextSlide = () => setIndex((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  // Troca automática a cada 6s
  useEffect(() => {
    if (isInteracting) return;
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [index, isInteracting]);


  const bannerSlides = [
    {
      id: 1,
      title: "Chegou a nova coleção de verão!",
      subtitle: "Roupas leves, confortáveis e com até 40% OFF.",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1470&q=80",
      link: "/produtos",
    },
    {
      id: 2,
      title: "Tênis estilosos para todos os estilos",
      subtitle: "Descubra as novidades das melhores marcas.",
      image: "https://images.unsplash.com/photo-1567016532533-4feaa3b4a0ca?auto=format&fit=crop&w=1470&q=80",
      link: "/produtos",
    },
    {
      id: 3,
      title: "Acessórios que completam seu look",
      subtitle: "Bonés, mochilas e mais com frete grátis.",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1470&q=80",
      link: "/produtos",
    },
  ];

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <AnimatePresence custom={index}>
        <motion.div
          key={bannerSlides[index].id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerSlides[index].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(event, info) => {
            setIsInteracting(true); // ✅ Pausar autoplay
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
              {bannerSlides[index].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 max-w-md drop-shadow-md">
              {bannerSlides[index].subtitle}
            </p>
            <Link to={bannerSlides[index].link} className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-md transition-all">
              Ver Produtos
            </Link>
          </div>
        </motion.div>


      </AnimatePresence>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setIsInteracting(true);
            }}

          />
        ))}
      </div>

    </section>
  );
}
