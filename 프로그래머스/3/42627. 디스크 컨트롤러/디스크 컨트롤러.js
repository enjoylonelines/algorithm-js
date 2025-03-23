function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시점 기준 정렬
    const pq = new PQ(); // 최소 힙 (우선순위 큐)

    let time = 0;
    let totalTime = 0;
    let index = 0;

    while (index < jobs.length || pq.size() > 0) {
        // 현재 시간(time)까지 도착한 작업을 모두 PQ에 추가
        while (index < jobs.length && jobs[index][0] <= time) {
            pq.enq(new Node(index, jobs[index])); // 우선순위 큐 삽입
            index++;
        }

        if (pq.size() > 0) {
            const { requestTime, val } = pq.deq(); // 최소 작업 꺼내기
            time += val; // 현재 시간 갱신
            totalTime += time - requestTime; // 요청부터 완료까지 걸린 시간 추가
        } else {
            time = jobs[index][0]; // 다음 요청 작업이 들어올 때까지 이동
        }
    }

    return Math.floor(totalTime / jobs.length);
}

// 우선순위 큐 (Min Heap)
class PQ {
    constructor() {
        this.values = [];
    }

    enq(node) {
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const node = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (!compare(node, parent)) break; // 부모보다 작으면 정렬 종료

            this.values[idx] = parent;
            this.values[parentIdx] = node;
            idx = parentIdx;
        }
    }

    deq() {
        if (this.values.length === 1) return this.values.pop();

        const min = this.values[0];
        this.values[0] = this.values.pop();
        this.sinkDown(0);

        return min;
    }

    sinkDown(idx) {
        const length = this.values.length;
        const node = this.values[idx];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (compare(leftChild, node)) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if ((swap === null && compare(rightChild, node)) || 
                    (swap !== null && compare(rightChild, leftChild))) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = node;
            idx = swap;
        }
    }

    size() {
        return this.values.length;
    }
}

// 작업을 저장하는 노드 클래스
class Node {
    constructor(idx, arr) {
        this.idx = idx;
        this.requestTime = arr[0];
        this.val = arr[1]; // 실행 시간
    }
}

// 우선순위 비교 함수
function compare(a, b) {
    if (a.val !== b.val) return a.val < b.val; // 실행 시간이 짧은 순
    if (a.requestTime !== b.requestTime) return a.requestTime < b.requestTime; // 요청 시간이 빠른 순
    return a.idx < b.idx; // 인덱스가 작은 순
}
