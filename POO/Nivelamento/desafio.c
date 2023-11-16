#include <stdio.h>
#include <string.h>

#define MAX 100

void criptoCezar(char* texto) {
    int tamanho = strlen(texto);
    for (int i = 0; i < tamanho; i++) {
        if (texto[i] >= 'a' && texto[i] <= 'z') {
            texto[i] = ((texto[i] - 'a' + 3) % 26) + 'a';
        } else if (texto[i] >= 'A' && texto[i] <= 'Z') {
            texto[i] = ((texto[i] - 'A' + 3) % 26) + 'A';
        }
    }
}

int main() {
    char texto[MAX];
    printf("Digite o texto a ser criptografado: ");
    scanf("%[^\n]", texto);

    criptoCezar(texto);
    printf("Texto criptografado: %s\n", texto);



    // int ascci = (('f' - 'a' + 3) % 26) + 'a';
    // printf("%d", ascci);
    return 0;
}
