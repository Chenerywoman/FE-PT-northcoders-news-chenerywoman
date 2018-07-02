import * as helpers from './helpers'

const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllArticles = () => {
    const url = `${API_URL}/articles`
    return fetch(url)
        .then(res => {
            if (res.status === 404) throw new Error(res.statusText)
            else return res.json()
        })
        .then(({ articles }) => {
           return helpers.mostPopular(articles)
        })
}

export const fetchTopicArticles = (topicName) => {
    const url = `${API_URL}/topics`
    return fetch(url)
        .then(res => {
            if (res.status === 404) throw new Error(res.statusText)
            else return res.json()
        })
        .then(res => {
            const topic = res.topics.find(topic => topic.title.toLowerCase() === topicName.toLowerCase())
            if (topic === undefined) throw new Error('topic does not exist')
            else return fetch(`${API_URL}/topics/${topic._id}/articles`)
        })
        .then(res => {
            if (res.status !== 200) throw new Error(res.statusText)
            else return res.json()
        })
        .then(({ articles }) => {
            return helpers.mostPopular(articles)
         })
}

export const fetchArticleById = (id) => {
    const url = `${API_URL}/articles/${id}`
    return fetch(url)
        .then(res => {
            if (res.status === 404) throw new Error(res.statusText)
            else return res.json()
        })
        .then(({ article }) => article)
}

export const fetchCommentsForArticle = (id) => {
    const url = `${API_URL}/articles/${id}/comments`
    return fetch(url)
        .then(res => {
            if (res.status === 404) throw new Error(res.statusText)
            else return res.json()
        })
        .then(({ comments }) => comments)
}

export const changeVote = (vote, id, route) => {
    const url = `${API_URL}/${route}/${id}?vote=${vote}`
    console.log('url', url)
    return fetch(url, {
        method: 'PUT'
    })
        .then(res => {
            if (res.status === 400 || res.status === 404) throw new Error(res.statusText)
            else return res.json()
        })
        .then(res => console.log(res))
}

// n.b. try to reuse for posting article refactor keys inside body (add title, body instead of comment) - see BE
export const postText = (created_by, comment, route, id, endpoint) => {
    const url = `${API_URL}/${route}/${id}/${endpoint}`
    const body = { created_by, comment }
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())       
}

export const deleteText = (id, username) => {
    console.log('username', username)
    const url = `${API_URL}/comments/${id}`
    return fetch(url)
    .then(res => {
        if (res.status !== 200 ) throw new Error(res.statusText)
        else return res.json()
    })
    .then(res => {
        if (res.comment.created_by.username !== username.toLowerCase() ){throw new Error('only user who created comment can delete it')}
        else {return fetch(url, {method: 'DELETE'})}
    })
    .then(res => {
        if (res.status !== 200 ) throw new Error(res.statusText)
        else return res.json()
    })
}
