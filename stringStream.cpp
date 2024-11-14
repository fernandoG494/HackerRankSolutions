#include <sstream>
#include <vector>
#include <iostream>

using namespace std;

vector<int> parseInts(string str) {
  string item;
  stringstream ss(str);

  vector<int> parsedInts;
  while (getline(ss, item, ',')) {
    parsedInts.push_back(stoi(item));
  };

  return parsedInts;
};

int main() {
  string str;
  cin >> str;
  vector<int> integers = parseInts(str);
  for(int i = 0; i < integers.size(); i++) {
    cout << integers[i] << "\n";
  };
  return 0;
}
