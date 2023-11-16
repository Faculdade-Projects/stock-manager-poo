#include <stdio.h>
#include <stdlib.h>



int main(void){
    char x[26] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z'};

    char *p_primeiraLetra = &x[0];
   for (int i = 0; i < 26; i++) {
        printf("%c ", *(p_primeiraLetra + i));
    }
    printf("\no quinto, décimo, décimo quinto e vigésimo elementos\n");
    for (int i = 0; i < 26; i++)
    {
        if( i == 5 || i == 10 || i == 15 || i == 20){

            printf("%c ", *(p_primeiraLetra + i));
        }
    }
    printf("\nEndereco de todos elementos\n");
    for (int i = 0; i < 26; i++)
    {

            printf("%c: {%p} \n",*(p_primeiraLetra + i), (p_primeiraLetra));
        
    }

    printf("\no quinto, décimo, décimo quinto e vigésimo elementos\n");
    for (int i = 0; i < 26; i++)
    {
        if( i == 3 || i == 5 || i == 8 ){

            printf("%c: {%p} \n", *(p_primeiraLetra + i), (p_primeiraLetra + i));
        }
    }
}