#include <stdio.h>

int max(int num1, int num2);

int main() {
    printf("Hello, World!\nMark is een lieve jongen \n");
    printf("%d", max(13,6));
    return 0;
}

int max(int num1, int num2) {
    return num1 > num2 ? num1 : num2;
}

