const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllArticles = () => {
    const url = `${API_URL}/articles`
    return fetch(url)
        .then(res => res.json())
}

export const fetchTopicArticles = (topicName) => {
    const url = `${API_URL}/topics`
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            const topic = res.topics.find(topic => topic.title.toLowerCase() === topicName.toLowerCase())
            return fetch(`${API_URL}/topics/${topic._id}/articles`)
        })
        .then(res => res.json())
}

export const fetchArticleById = (id) => {
    const url = `${API_URL}/articles/${id}`
    return fetch(url)
        .then(res => res.json())
}

export const fetchCommentsForArticle = (id) => {
    const url = `${API_URL}/articles/${id}/comments`
    return fetch(url)
        .then(res => res.json())
}

export const changeVote = (vote, id, route) => {
    const url = `${API_URL}/${route}/${id}?vote=${vote}`
    return fetch(url, {
        method: 'PUT'
    })
        .then(res => res.json())
}

export const postCommentText = (created_by, comment, route, id, endpoint) => {
    const url = `${API_URL}/${route}/${id}/${endpoint}`
    const body = { created_by, comment }
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const postArticleText = (created_by, title, article, topicName) => {
    const urlTopics = `${API_URL}/topics`;
    const body = { created_by, title, body: article }
    return fetch(urlTopics)
        .then(res => res.json())
        .then(res => {
            const chosenTopic = res.topics.find(topic => topic.slug === topicName.toLowerCase())
            const url = `${API_URL}/topics/${chosenTopic._id}/articles`;
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            })
        })
        .then(res => res.json())
}

export const deleteText = (id, username) => {
    const url = `${API_URL}/comments/${id}`
    return fetch(url, { method: 'DELETE' })
        .then(res => res.json())
}

export const getAllUsers = () => {
    const url = `${API_URL}/users`
    return fetch(url)
        .then(res => res.json())
}
