#include <stdio.h>
#include <stdlib.h>

int soma(int n){
    int soma = 0;
    for (int i = 1; i <= n; i++){
        
        printf("%d", i);
        soma += i;
        if(i != n){
            printf(" + ");

        } else {
            printf(" = %d\n", soma);

        }
    }
    return soma;
}

int main(void){
    soma(5);
    soma(10);
}