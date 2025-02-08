import { fetchInteriorPlantsPage } from '@/services/api';
import Image from 'next/image';

export default async function PlantePage() {
  const data = await fetchInteriorPlantsPage();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: data.introduction }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.plantes.map((plante) => (
            <div key={plante.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                {plante.value.imageMeta ? (
                  <Image
                    src={`http://127.0.0.1:8000${plante.value.imageMeta.meta.download_url}`}
                    alt={plante.value.nom}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image non disponible</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{plante.value.nom}</h3>
                <p className="text-gray-600 italic mb-4">{plante.value.nom_latin}</p>
                <p className="text-gray-700">{plante.value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}