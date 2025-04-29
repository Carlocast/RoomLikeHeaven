'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FiltroRicerca from '../components/FiltroRicerca';

const caseDisponibili = [
  {
    id: 1,
    titolo: "Villa sul Mare",
    località: "Pescara",
    prezzo: 120,
    tipo: "Villa",
    immagine: "/immagini/casa-roma.jpg",
  },
  {
    id: 2,
    titolo: "Appartamento in Centro",
    località: "Montesilvano",
    prezzo: 80,
    tipo: "Appartamento",
    immagine: "/immagini/casa-venezia.jpg",
  },
  {
    id: 3,
    titolo: "Villa con Piscina",
    località: "Francavilla al Mare",
    prezzo: 200,
    tipo: "Villa",
    immagine: "/immagini/casa-firenze.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/immagini/hero-casa.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full bg-black bg-opacity-30">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            RoomLikeHeaven
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Vivi esperienze da sogno vicino al mare
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/case" className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full text-lg font-semibold shadow-md">
              Scopri le Case
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sezione Lista Case con Filtri */}
      <FiltroRicerca caseDisponibili={caseDisponibili} />
    </div>
  );
}