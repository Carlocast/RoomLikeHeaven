'use client';

import { useParams } from 'next/navigation';
import { caseDati } from '@/utils/dataCase';

export default function CasaDettaglioPage() {
  const { id } = useParams();
  const casa = caseDati.find((c) => c.id === id);

  if (!casa) {
    return <div className="text-center mt-10 text-2xl">Casa non trovata</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img src={casa.immagini[0]} alt={casa.nome} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{casa.nome}</h1>
          <p className="text-gray-600 mb-4">{casa.città}</p>
          <p className="text-xl text-green-700 font-bold mb-6">{casa.prezzo} € / notte</p>
          <p className="text-gray-800">{casa.descrizione}</p>
        </div>
      </div>
    </div>
  );
}