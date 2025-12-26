function solution(dots) {
   const [[x1,y1],[x2,y2],[x3,y3],[x4,y4]] = dots;
   if (isParallel(x1,y1,x2,y2,x3,y3,x4,y4)) return 1;
   if (isParallel(x1,y1,x3,y3,x2,y2,x4,y4)) return 1;
   if (isParallel(x1,y1,x4,y4,x2,y2,x3,y3)) return 1;
   return 0;
}
function isParallel(x1,y1,x2,y2,x3,y3,x4,y4) {
    return (x2 - x1) * (y4 - y3) === (x4 - x3) * (y2 - y1);
}