const API_URL = process.env.REACT_APP_API_URL;

// put fetches in here

export const fetchAllArticles = () => {
    return fetch(API_URL)
    .then(res => {
        if (res.status === 404) throw new Error(res.statusText)
        return res.json()
    })
    .then({articles} => articles)
}

