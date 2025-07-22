function solution(id_pw, db) {
    const user = db.find(([db_id]) => db_id === id_pw[0]);
    if(!user) return 'fail';
    return user[1] === id_pw[1]? 'login' : 'wrong pw'
}