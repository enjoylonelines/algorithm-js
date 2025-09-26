function solution(polynomial) {
    const terms = polynomial.split(" + "); // 항 단위로 나눔
    let sumX = 0;
    let sumNum = 0;

    for (let term of terms) {
        if (term.includes("x")) {
            // 'x' 항일 경우
            if (term === "x") {
                sumX += 1;
            } else {
                sumX += parseInt(term.replace("x", ""));
            }
        } else {
            // 숫자일 경우
            sumNum += parseInt(term);
        }
    }

    // 결과 문자열 조합
    if (sumX && sumNum) {
        return (sumX === 1 ? "x" : `${sumX}x`) + " + " + sumNum;
    } else if (sumX) {
        return sumX === 1 ? "x" : `${sumX}x`;
    } else {
        return `${sumNum}`;
    }
}