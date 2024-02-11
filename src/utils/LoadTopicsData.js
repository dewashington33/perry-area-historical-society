export async function loadTopicsData() {
    const path = import.meta.env.MODE === 'production' ? '/perry-area-historical-society/data/topicsData.json' : '/data/topicsData.json';
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response)
    return await response.json();
}