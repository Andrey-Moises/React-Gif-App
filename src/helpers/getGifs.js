export const getGifs = async (category) => {

    // console.log('buscando gifs de', category);
    const url = 'https://tenor.googleapis.com/v2/search';
    const params = {
        key        : 'AIzaSyBcWWMNgTqToV3529LTsysl1Pl5RhukXjs',
        client_key : 'tenor-web-frontend',
        q          : category,
        limit      : 5
    }
    const urlParams = new URLSearchParams(params);
    const endpoint = `${url}?${urlParams}`;

    const response = await fetch(endpoint);
    const { results } = await response.json();
    return results.map(({ id, tags, media_formats }) => ({
        id,
        title : tags[0],
        url : media_formats.gif.url
    }));
}

// (async () => {
//     const gifs = await getGifs('Sailor Moon');
//     console.log(gifs);
// })();