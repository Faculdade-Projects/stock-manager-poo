#include <stdio.h>
#include <stdlib.h>

char troca(int a, int b){
    int c = a;
    a = b;
    b = c;
   

    return printf("os valores de a e b foram trocados\nA: {%d}\nB: {%d}\nEndereco de a e b na memoria:\nA {%p}\n{%p}\n", a, b, &a,&b);
    }

int main(void){
    troca(2, 4);
}