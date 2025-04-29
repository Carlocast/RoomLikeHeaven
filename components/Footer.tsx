'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto py-10 px-4 text-center space-y-4">
        <p className="text-lg font-semibold">RoomLikeHeaven</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="/" className="hover:underline transition">Home</a>
          <a href="/case" className="hover:underline transition">Case</a>
          <a href="/contatti" className="hover:underline transition">Contatti</a>
          <a href="/login" className="hover:underline transition">Login</a>
        </div>
        <p className="text-xs">&copy; 2025 RoomLikeHeaven - All rights reserved</p>
      </div>
    </footer>
  );
}