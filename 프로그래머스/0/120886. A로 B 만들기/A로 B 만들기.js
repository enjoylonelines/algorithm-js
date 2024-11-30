function solution(before, after) {
    const obj1 = {}, obj2 = {}
    const arr1 = [...before], arr2 = [...after]
    for(let i = 0; i < arr1.length; i++) {
        if(!obj1[arr1[i]]) obj1[arr1[i]] = 1;
        else obj1[arr1[i]]++;
        if(!obj2[arr2[i]]) obj2[arr2[i]] = 1;
        else obj2[arr2[i]]++;
    }
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) return 0;
    }
    return 1;
}