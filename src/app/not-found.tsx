import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plante non trouvée
        </h1>
        <p className="text-gray-600 mb-8">
          Désolé, la plante que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/plantes/4"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Retour aux plantes
        </Link>
      </div>
    </main>
  );
} 