export async function loadArticlesData() {
    const path = import.meta.env.MODE === 'production' ? '/perry-area-historical-society/data/articlesData.json' : '/data/articlesData.json';
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('articleData:')
    console.log(response)
    return await response.json();
}