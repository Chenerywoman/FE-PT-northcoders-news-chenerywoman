
export const mostPopular = (articles) => {
    const newArticles = [...articles]
    const mostPopularArticles = newArticles.sort((a, b) => {
     return (b.votes + b.comments) - (a.votes + a.comments)
})
return mostPopularArticles;
}
export const mostVoted = (comments) => {
    const newComments = [...comments]
    return newComments.sort((a, b) => {
     return (b.votes) - (a.votes)

})
}
export const mostRecent = (comments) => {
    const newComments = [...comments]
    return newComments.sort((a, b) => {
     return (b.created_at) - (a.created_at)

})
}

export const chunkArray = (array, chunk) => {

    const newArray = [...array]

    let results = [];
    
    while (newArray.length) {
        results.push(newArray.splice(0, chunk));
    }
    
    return results;
}
