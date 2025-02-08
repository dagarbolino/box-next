import { fetchInteriorPlantsPage } from '@/services/api';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default async function PlantePage() {
  const data = await fetchInteriorPlantsPage();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{data.title}</h1>
          <div
            className="prose max-w-3xl text-xl text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.introduction }}
          />
        </div>
      </section>

      {/* Plantes Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.plantes.map((plante) => (
            <div
              key={plante.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                {plante.value.imageMeta ? (
                  <Image
                    src={`http://127.0.0.1:8000${plante.value.imageMeta.meta.download_url}`}
                    alt={plante.value.nom}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-green-50 flex items-center justify-center">
                    <span className="text-green-600">Image non disponible</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plante.value.nom}</h3>
                <p className="text-green-600 font-medium italic mb-4">{plante.value.nom_latin}</p>
                <p className="text-gray-600 line-clamp-3">{plante.value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}