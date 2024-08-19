function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function solution(arr, queries) {
    var answer = [];
    queries.forEach(query => {
        const [i,j] = query;
        swap(arr, i, j);
    })
    return arr;
}