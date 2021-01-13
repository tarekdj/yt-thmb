const fecth = require('isomorphic-fetch');

module.exports = async function getThumbnail(video) {
    const response = await fetch(`https://www.youtube.com/results?search_query=${video}`, {headers: {
      "User-agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0"
    }});

    const html = await response.text();

    const pattern = `https:\/\/i\.ytimg\.com\/an_webp\/${video}\/mqdefault.+?"`;
    const regex = new RegExp(pattern, 'gi');

    const results = html.match(regex);
    const [result] = results;
    const clean = result.replace('"','').replace(/\\u0026/g, '&');

    return result;
}