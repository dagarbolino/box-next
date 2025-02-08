import { Plante } from '@/types/home';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export default async function PlantDetailPage({ params }: PageProps) {
  // Trouver la plante dans la liste des plantes
  const response = await fetch('http://127.0.0.1:8000/api/v2/pages/4/');
  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const plante = data.plantes.find((p: Plante) => p.id === params.id);

  if (!plante) {
    notFound();
  }

  // Récupérer les métadonnées de l'image
  let imageUrl = null;
  if (plante.value.image) {
    const imageResponse = await fetch(`http://127.0.0.1:8000/api/v2/images/${plante.value.image}/`);
    if (imageResponse.ok) {
      const imageData = await imageResponse.json();
      imageUrl = imageData.meta.download_url;
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/plantes/4"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white shadow-sm text-green-600 hover:text-green-700 transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Retour aux plantes
          </Link>
        </div>

        {/* Plant Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="relative h-96">
            {imageUrl ? (
              <Image
                src={`http://127.0.0.1:8000${imageUrl}`}
                alt={plante.value.image_alt_text || plante.value.nom}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-green-50 flex items-center justify-center">
                <span className="text-green-600">Image non disponible</span>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {plante.value.nom}
            </h1>
            <p className="text-lg sm:text-xl text-green-600 font-medium italic mb-6">
              {plante.value.nom_latin}
            </p>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-700 leading-relaxed">{plante.value.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Optionnel : Générer les paramètres statiques
export async function generateStaticParams() {
  return [];
} 