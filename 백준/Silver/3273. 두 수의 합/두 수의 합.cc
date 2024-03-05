#include <bits/stdc++.h>
using namespace std;
int arr[100002];

int main() {
   int n, x, cnt = 0;
   cin >> n;
   for (int i = 0; i < n; i++){
      cin >> arr[i];
   }
   cin >> x;
   sort(arr, arr + n);
   
   int left = 0;
   int right = n - 1;
   
   while(left < right){
      int cmp = arr[left] + arr[right];
      
      if(cmp == x) {
         cnt++;
         left++;
         right--;
      }
      else if(cmp < x) left++;
      else right--;
   }
   cout << cnt;
}

