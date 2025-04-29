'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PagamentoSuccesso() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/area-personale/prenotazioni');
    }, 3000); // Dopo 3 secondi vai alla lista prenotazioni
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Pagamento Riuscito!</h1>
      <p className="text-gray-700 mb-4">Grazie! La tua prenotazione è stata confermata.</p>
      <p className="text-gray-500 text-sm">Verrai reindirizzato alle tue prenotazioni tra pochi secondi...</p>
    </div>
  );
}