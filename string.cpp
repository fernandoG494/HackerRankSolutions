#include <iostream>
#include <string>

using namespace std;

int main() {
  string a, b;
  cin>>a>>b;

  int alength = a.length();
  int blength = b.length();
  printf("%d %d\n", alength, blength);

  string concatResult = a + b;
  printf("%s\n", concatResult.c_str());

  string aCopy = a;
  string bCopy = b;

  aCopy[0] = b[0];
  bCopy[0] = a[0];
  printf("%s %s", aCopy.c_str(), bCopy.c_str());

  return 0;
}
