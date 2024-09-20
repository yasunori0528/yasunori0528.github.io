#include <iostream>

// 足し算
extern "C" {
    int add(int a, int b) {
        return a + b;
    }

    // 引き算
    int subtract(int a, int b) {
        return a - b;
    }

    // 掛け算
    int multiply(int a, int b) {
        return a * b;
    }

    // 割り算
    int divide(int a, int b) {
        if (b == 0) {
            return 0; // ゼロ除算防止
        }
        return a / b;
    }
}
