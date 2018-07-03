
export const mostPopular = (articles) => {

    return articles.sort((a, b) => {
     return (b.votes + b.comments) - (a.votes + a.comments)

})

}
export const mostVoted = (comments) => {

    return comments.sort((a, b) => {
     return (b.votes) - (a.votes)

})
}
export const mostRecent = (comments) => {

    return comments.sort((a, b) => {
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
