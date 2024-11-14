#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
  int n, q;

  cin>>n>>q;
  vector<vector<int>> arrays(n);

  for (int i = 0; i < n; i++) {
    int k;
    cin>>k;

    arrays[i].resize(k);

    for (int j = 0; j < k; j++) {
      cin>>arrays[i][j];
    };
  };

  for (int qindex = 0; qindex < q; qindex++) {
    int i, j;
    cin>>i>>j;

    cout<<arrays[i][j]<<endl;
  };

  return 0;
}
