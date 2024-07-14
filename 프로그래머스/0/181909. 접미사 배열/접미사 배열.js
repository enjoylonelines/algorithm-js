function solution(str) {
    const arr = str.split('');
    return arr.map((item, i) => str.substring(i)).sort();
}