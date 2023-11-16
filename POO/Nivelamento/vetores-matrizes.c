#include <stdio.h>
#include <stdlib.h>


int main(void){
    const int T = 10;
    int v[T], v1[T], v2[T];
    int j=0, k=0;
    for (int i = 0; i < T; i++)
    {
        printf("Digite o %d número: ", i + 1);
        scanf("%d", &v[i]);
        if (v[i] % 2 == 0){
            v1[j] = v[i];
            j++;
        }
        else
        {
            v2[k] = v[i];
            k++;

        }
        
    }
    printf("\nv1\n----------\n");
    for (int i = 0; i < j; i++)
    {
        printf("v1[%d]: %d\n", i, v1[i]);
        
    
     }
    printf("\nv2\n----------\n");
      for (int i = 0; i < k; i++)
    {
        printf("v2[%d]: %d\n", i, v2[i]);
    }
}