#include <iostream>	
#include <string>
#include <string>
#include <stdlib.h>

using namespace std;

int tmp, ans;
int sign = 1;
int main(void) {
    ios::sync_with_stdio(0);
    cin.tie(0);

    string input;
    cin >> input;
    for (char c : input) {
        if (c == '+' || c == '-') {
            ans += tmp * sign;
            if (c == '-') sign = -1; //생각해보니 - 한번만 나오면 다 묶을수있네,,
            tmp = 0;
        }
        else {
            tmp *= 10;
            tmp += c - '0';
        }
    }
    ans += tmp * sign;
    cout << ans;
}