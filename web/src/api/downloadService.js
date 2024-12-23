export async function downloadVideo(url) {
  const response = await fetch('http://localhost:3000/mp3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error('Download failed');
  }

  return response.json();
}