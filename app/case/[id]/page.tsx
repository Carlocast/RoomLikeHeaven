'use client';

import { useParams, useRouter } from 'next/navigation';
import { caseDati } from '@/utils/dataCase';
import { useState } from 'react';

export default function CasaDettaglioPage() {
  const { id } = useParams();
  const router = useRouter();
  const casa = caseDati.find((c) => c.id === id);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [prenotato, setPrenotato] = useState(false);

  if (!casa) {
    return <div className="text-center mt-10 text-2xl">Casa non trovata</div>;
  }

  const handlePrenota = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert('Seleziona date di Check-in e Check-out');
      return;
    }
    const nuovaPrenotazione = {
      idCasa: casa.id,
      casa: casa.nome,
      checkIn,
      checkOut,
    };
    const storedPrenotazioni = localStorage.getItem('prenotazioni');
    const prenotazioni = storedPrenotazioni ? JSON.parse(storedPrenotazioni) : [];
    prenotazioni.push(nuovaPrenotazione);
    localStorage.setItem('prenotazioni', JSON.stringify(prenotazioni));
    setPrenotato(true);
    setTimeout(() => {
      router.push('/pagamento/successo');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img src={casa.immagini[0]} alt={casa.nome} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{casa.nome}</h1>
          <p className="text-gray-600 mb-4">{casa.città}</p>
          <p className="text-xl text-green-700 font-bold mb-6">{casa.prezzo} € / notte</p>
          <p className="text-gray-800 mb-6">{casa.descrizione}</p>

          {prenotato ? (
            <div className="text-center text-green-600 font-bold">
              Prenotazione in corso... Verrai reindirizzato per il pagamento...
            </div>
          ) : (
            <form onSubmit={handlePrenota} className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-4">
              <h2 className="text-xl font-semibold mb-4">Prenota e Paga</h2>
              <div>
                <label className="block mb-2 text-sm font-medium">Check-in</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border p-3 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Check-out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border p-3 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition mt-4"
              >
                Prenota e Paga
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}