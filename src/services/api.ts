import { HomePage, InteriorPlantsPage, Plante } from '@/types/home';
const BASE_URL = 'http://127.0.0.1:8000';

export const fetchHomePage = async (): Promise<HomePage> => {
  const response = await fetch('http://127.0.0.1:8000/api/v2/pages/3/');
  if (!response.ok) {
    throw new Error('Failed to fetch home page');
  }
  return response.json();
};

export const fetchImageMetadata = async (imageId: number) => {
  const response = await fetch(`${BASE_URL}/api/v2/images/${imageId}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch image metadata');
  }
  return response.json();
};

export const fetchInteriorPlantsPage = async (): Promise<InteriorPlantsPage> => {
  const response = await fetch(`${BASE_URL}/api/v2/pages/4/`);
  if (!response.ok) {
    throw new Error('Failed to fetch interior plants page');
  }
  const data = await response.json();

  // Fetch image metadata for each plant
  const plantsWithImages = await Promise.all(
    data.plantes.map(async (plant: Plante) => {
      if (plant.value.image) {
        const imageData = await fetchImageMetadata(plant.value.image);
        return {
          ...plant,
          value: {
            ...plant.value,
            imageMeta: imageData
          }
        };
      }
      return plant;
    })
  );

  return {
    ...data,
    plantes: plantsWithImages
  };
};