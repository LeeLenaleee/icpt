#include <stdio.h>


int main() {
    double number = 1.0;

    for(int i = 0; i < 10; i++) {
         number = number * 1.1;
    }
    printf("%f \n", number);
    return 0;
}
