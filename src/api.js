const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllArticles = () => {
    const url = `${API_URL}/articles`
    return fetch(url)
    .then(res => {
        if (res.status === 404) throw new Error(res.statusText) 
        return res.json()
    })
    .then(({articles}) => articles)
    .catch(err => {console.log('err', err)})
}

export const fetchTopicArticles = (topicName) => {
    const url = `${API_URL}/topics`
    return fetch(url)
    .then(res => {
        if (res.status === 404) throw new Error(res.statusText)
        return res.json()
    })
    .then(res => {
        const topic = res.topics.find(topic => topic.title.toLowerCase() === topicName.toLowerCase())
        if (topic === undefined) throw new Error('topic does not exist')
        else return fetch(`${API_URL}/topics/${topic._id}/articles`)
    })
    .then(res => {
        if (res.status !== 200) throw new Error(res.statusText)
        return res.json()
    })
    .then(({articles}) => articles)
    .catch(err => {console.log('err', err)})

}

export const fetchArticleById = (id) => {
    const url = `${API_URL}/articles/${id}`
    return fetch(url)
    .then(res => {
        if (res.status === 404) throw new Error(res.statusText)
        return res.json()
    })
    .then(({article}) => {
        return article})
    .catch(err => console.log(err))
}

export const changeVote = (vote, id, route) => {
    const url = `${API_URL}/${route}/${id}?vote=${vote}`
    return fetch(url, {
        method: 'PUT'
    })
    .then(res => {
        if (res.status === 400 || res.status === 404) throw new Error(res.statusText)
        return res.json();
    })
    .catch(err => {console.log('err', err)})
}

// n.b. to reuse for posting article refactor keys inside body (add title, body instead of comment) - see BE
export const postText = (created_by, comment, route, id, endpoint) => {
    const url = `${API_URL}/${route}/${id}/${endpoint}`
    const body = {created_by, comment}
    fetch((url), {
        method: 'POST',
        body: JSON.stringify(body), 
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => console.log('newComment', res))
    .catch(err => {console.log(err)})
}

