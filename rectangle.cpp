#include <iostream>

using namespace std;

class Rectangle {
	protected:
		int width, height;
	public:
		void display() {
			printf("%d %d \n", this->width, this->height);
		};
};

class RectangleArea : public Rectangle {
	public:
		void read_input() {
			cin >> width >> height;
		};
		void display() {
			cout << (width * height) << "\n" << endl;
		};
};

int main() {
	RectangleArea r_area;
	r_area.read_input();
	r_area.Rectangle::display();
	r_area.display();
	return 0;
};

