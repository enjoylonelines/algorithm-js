#include <bits/stdc++.h>
using namespace std;

int d[1000002];

int main() {
  int n;
  cin >> n;
  d[1] = 0; d[2] = 1; d[3] = 1; d[4] = 2; d[5] = 3; d[6]= 2;
  d[7]= 3; d[8] = 3; d[9]= 2; d[10] = 3;
  for (int i = 11; i <= n; i++) {
    d[i]= d[i-1] + 1;
    if (i % 3 == 0) d[i] = min(d[i / 3] + 1, d[i]);
    if (i % 2 == 0) d[i] = min(d[i / 2] + 1, d[i]);
  }
  cout << d[n];
}
