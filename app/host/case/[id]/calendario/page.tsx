'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function CalendarioCasa() {
  const { id } = useParams();
  const [prenotazioni, setPrenotazioni] = useState<{ checkIn: string; checkOut: string; }[]>([]);

  useEffect(() => {
    const storedPrenotazioni = localStorage.getItem('prenotazioni');
    if (storedPrenotazioni) {
      const allPrenotazioni = JSON.parse(storedPrenotazioni);
      const prenotazioniCasa = allPrenotazioni.filter((p: any) => p.idCasa === id);
      setPrenotazioni(prenotazioniCasa);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Calendario Prenotazioni</h1>
        {prenotazioni.length === 0 ? (
          <p className="text-gray-600">Non ci sono prenotazioni per questa casa.</p>
        ) : (
          <div className="space-y-4">
            {prenotazioni.map((pren, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50 shadow-sm">
                <p><strong>Check-in:</strong> {pren.checkIn}</p>
                <p><strong>Check-out:</strong> {pren.checkOut}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}