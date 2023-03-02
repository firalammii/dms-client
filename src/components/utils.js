function formatDate () {
    const ndate = new Date();
    const fullYear = ndate.getFullYear();
    const month = ndate.getMonth();
    const date = ndate.getDate();
    return `${fullYear}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${date < 10 ? `0${date}` : date}`;
}



export { formatDate };