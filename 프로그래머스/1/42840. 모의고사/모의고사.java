import java.util.*;

class Solution {    
    public int[] solution(int[] answers) {//정답        
        //찍는 방식
        int[] a_1={1, 2, 3, 4, 5};
        int[] a_2={2, 1, 2, 3, 2, 4, 2, 5};
        int[] a_3={3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        
        //맞은 갯수
        int[] count_a = {0,0,0};
        
        //채점
        for(int i =0; i < answers.length; i++){
            if(answers[i] == a_1[i % a_1.length]) count_a[0] = count_a[0] + 1;
            if(answers[i] == a_2[i % a_2.length]) count_a[1] = count_a[1] + 1;
            if(answers[i] == a_3[i % a_3.length]) count_a[2] = count_a[2] + 1;
        }
        
        //최다득점 구하기
        int max = 0;
        max = Math.max(count_a[0],Math.max(count_a[1],count_a[2]));
        
        //다득점자 list만들기
        List<Integer> list = new ArrayList<>();
        for(int i=0; i<count_a.length;i++){
            if(count_a[i] == max) list.add(i+1);
        }
        
        //배열 변환   
        int[] answer = new int[list.size()];
        for(int i=0; i<list.size(); i++){
            answer[i] = list.get(i);
        }
        
        return answer;
    }
}