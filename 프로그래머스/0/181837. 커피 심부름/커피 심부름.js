const coffee = {
    'iceamericano': 4500,
    'americanoice': 4500,
    'hotamericano': 4500,
    'americanohot': 4500,
    'icecafelatte': 5000,
    'cafelatteice': 5000,
    'americano': 4500,
    'hotcafelatte': 5000,
    'cafelattehot': 5000,
    'cafelatte':5000,
    'anything': 4500,
}
function solution(order) {
    return order.reduce((sum, cur) => sum + coffee[cur], 0)
}