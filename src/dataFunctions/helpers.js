
export const mostPopular = (articles) => {

    return articles.sort(article(a, b) => {

    const aValue = a.votes + a.comments;
    const bValue = b.votes + b.comments;
    if (aValue < bValue) return -1;
    else if (bValue > aValue) return 1;
    else return 0;

})


}