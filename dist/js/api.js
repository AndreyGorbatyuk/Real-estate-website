export async function fetchRealEstateData(url = './properties.json') {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    return [];
  }
}