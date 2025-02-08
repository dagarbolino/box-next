export async function getImageUrl(imageId: number): Promise<string> {
  const response = await fetch(`http://127.0.0.1:8000/api/v2/images/${imageId}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch image URL');
  }
  const data = await response.json();
  return data.url;
} 