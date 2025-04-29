'use client';

import { useRouter } from 'next/navigation';

export default function PagamentoErrore() {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Pagamento Fallito</h1>
      <p className="text-gray-700 mb-4">Purtroppo il tuo pagamento non è andato a buon fine.</p>
      <button
        onClick={handleRetry}
        className="mt-4 bg-red-600 text-white p-3 rounded hover:bg-red-700 transition"
      >
        Torna alla Home
      </button>
    </div>
  );
}