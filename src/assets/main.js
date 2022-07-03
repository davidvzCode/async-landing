
const API = 'https://youtube-v31.p.rapidapi.com/search?q=one%20piece&part=snippet%2Cid&regionCode=US&maxResults=10&order=date';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '091a991958msh5fd1a1c311a8988p1063edjsn736a99f40a73',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchDate (urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const video = await fetchDate(API);
        let view = `
        ${video.items.map( v => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${v.snippet.thumbnails.high.url}" alt="${v.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${v.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (err){
        console.log(err);  
    }
})();