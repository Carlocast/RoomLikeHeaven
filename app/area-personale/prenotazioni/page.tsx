'use client';

import { useEffect, useState } from 'react';

interface Prenotazione {
  casa: string;
  checkIn: string;
  checkOut: string;
}

export default function PrenotazioniPage() {
  const [prenotazioni, setPrenotazioni] = useState<Prenotazione[]>([]);

  useEffect(() => {
    // Simulazione: leggiamo le prenotazioni salvate nel localStorage
    const stored = localStorage.getItem('prenotazioni');
    if (stored) {
      setPrenotazioni(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Le Tue Prenotazioni</h1>
        {prenotazioni.length === 0 ? (
          <p className="text-gray-600">Non hai ancora effettuato prenotazioni.</p>
        ) : (
          <div className="space-y-6">
            {prenotazioni.map((p, index) => (
              <div key={index} className="border rounded p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">{p.casa}</h2>
                <p className="text-gray-700">Check-in: {p.checkIn}</p>
                <p className="text-gray-700">Check-out: {p.checkOut}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}