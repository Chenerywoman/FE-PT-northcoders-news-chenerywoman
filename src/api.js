const API_URL = process.env.REACT_APP_API_URL;

// put fetches in here

export const fetchAllArticles = () => {
    return fetch(`${API_URL}/articles`)
    .then(res => {
        if (res.status === 404) throw new Error(res.statusText)
        return res.json()
    })
    .then(({articles}) => articles)
}

export const changeVote = (vote, id, route) => {
    const url = `${API_URL}/${route}/${id}?vote=${vote}`
    console.log('url', url)
    return fetch(url, {
        method: 'PUT'
    })
    .then(res => {
        if (res.status === 400 || res.status === 404) throw new Error(res.statusText)
        return res.json();
    })
    .then(res => console.log(res))
}