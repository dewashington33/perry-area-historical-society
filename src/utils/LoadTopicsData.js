export async function loadTopicsData() {
    const response = await fetch('/perry-area-historical-society/data/topicsData.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response)
    return await response.json();
}