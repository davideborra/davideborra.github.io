//
//  lambdalib.h
//  lambdalib
//
//  Created by Davide Borra on 16/01/20.
//  Copyright © 2020 I.I.S. "Galileo Galiei" - Crema. All rights reserved.
//	Update 06/11/2021

//C:\Dev-Cpp\MinGW64\lib\gcc\x86_64-w64-mingw32\4.9.2\include
//C:\MinGW\lib\gcc\mingw32\8.2.0\include>


#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>
#include <assert.h>

//Binary search in 1-dimension array
//begin is the element where the search begins
//end is the element where the search ends
//size is the length of array1[]
int binSearch(int array[], int begin, int end, int toFind){
    int half, b=begin, e=end;
    while(b <= e){
        half = (b+e)/2;
        if(toFind > array[half])
            b = half + 1;
        else if(toFind < array[half])
            e = half - 1;
        else
            return half;
    }
    return -1;
    
}

//sequential search in 1-dimension array
//returns -1 if toFind does not appear in array[]
//size is the length of array1[]
int seqSearch(int array[], int toFind, int size){
    int i;
	for (i=0; i<size; i++) {
        if (array[i]==toFind)
            return i;
    }
    return -1;
}

//copies an array in another array
//the length of array1[] must be the same as the length of array2[] or lower than it
//size is the length of array1[]
void copyArray(int array1[], int array2[], int size){
    int i=0;
	for(i=0; i<size; i++){
        array2[i]=array1[i];
    }
    return;
}


//prints an array
//size is the length of array1[]
void printArray(int array[], int size){
	int i=0;
    for(i=0; i<size; i++){
        printf("%d\t", array[i]);
    }
    printf("\n");
    return;
}


//fills an array with numbers from a keyboard input
//size is the length of array[]
void fillArray(int array[], int size){
	int i;
	for (i=0; i<size; i++){
		printf("%d> ", i);
		scanf("%d", &array[i]);
	}
	return;
}

//fills an array with random numbers
//size is the length of array[]
void randArray(int array[], int size){
	srand((unsigned)time(NULL));
	int i;
	for (i=0; i<size; i++){
		array[i] = rand();
	}
    return;
}

//fills an array with random numbers from begin to end
//size is the length of array[]
void randArrayInterval(int array[], int size, int begin, int end){
	srand((unsigned)time(NULL));
	int i;
	for (i=0; i<size; i++){
		array[i] = rand()%(end-begin+1) + begin;
	}
    return;
}

//inverts an array
//size is the length of array[]
void invertArray(int array[], int size){
    int array2[size], i;
    copyArray(array, array2, size);
    for(i=0; i<size; i++)
        array[i]=array2[size-1-i];
    return;
}


//tests if an array is ordered
//the parameter order is true if is from the lower to the higher or false if it is from the higher to the lower
//size is the length of array[]
bool testOrder(int array[], int size, bool order){
	int i;
    if (!order)
        invertArray(array, size);
    for(i=0; i<size-1; i++)
        if (array[i]>array[i+1])
            return false;
    return true;
}



//1 dimension Array sorting

//Insertion Sort: creates a sorted array diretly from input
//size is the length of array[]
//inputType is true for manual input and false for random input

void shiftR(int array[], int hole, int size){
	int i;
	for(i=size-1; i>=hole; i--)
		array[i+1]=array[i];
		return;
}

//Manual input

void insertSortM(int array[], int size){
	int input, i, where;
	for (i=0; i<size; i++)
		array[i]=0;
	for(i=0; i<size; i++){
		printf("> ");
		scanf("%d", &input);
		while((array[where]<input) && (array[where]!=0))
			where++;
		shiftR(array, where,size);
		array[where]=input;
	}
	return;
}
	
//random input
void insertSortR(int array[], int size){
	int input, i, where;
	srand((unsigned)time(NULL));
	for (i=0; i<size; i++)
		array[i]=0;
	for(i=0; i<size; i++){
		input=rand();
		while(array[where]<input && array[where]!=0)
			where++;
		shiftR(array, where,size);
		array[where]=input;
	}
	return;
}

//random input with range

void insertSortInterval(int array[], int size, int begin, int end){
	int input, i, where;
	srand((unsigned)time(NULL));
	for (i=0; i<size; i++)
		array[i]=0;
	for(i=0; i<size; i++){
		input = rand()%(end-begin+1) + begin;
		while(array[where]<input && array[where]!=0)
			where++;
		shiftR(array, where,size);
		array[where]=input;
	}
	return;
}

//Selection Sort

void seleSort(int array[], int size, bool show){
	int i , j, iMin, temp;
	for(i=0; i<size; i++){
		iMin = i;
		for ( j = i+1; j<size; j++){
			if (array[j] < array[iMin])
				iMin=j;
		}
		if (i!= iMin){
			temp=array[iMin];
			array[iMin]=array[i];
			array[i]=temp;
		}
		if (show)
			printArray(array, size);
	}
}

//Bubble sort
void bSort(int array[], int size, bool show){
    int i, j, min, temp;
    for(i=0; i<size-1; i++){
        for(j=0; j<size-1; j++){
            if(array[j]>array[j+1]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            if (show)
                printArray(array, size);
        }
    }
}


//array merge

void merge(int in1[], int in2[], int size1, int size2, int out[]){
	int i;	
	for (i=0; i<size1; i++)
		out[i]=in1[i];
	for (i=0; i<size2; i++)
		out[i+size1]=in2[i];
	return;
}

//Quick Sort
void quickSort(int a[],int begin,int end){
   int i, j, pivot, temp;
   if(begin<end){
      pivot=begin;
      i=begin;
      j=end;     
      while(i<j){
         while(a[i]<=a[pivot]&&i<end)
            i++;
         while(a[j]>a[pivot])
            j--;
         if(i<j){   
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
         }
      }
      temp=a[pivot];
      a[pivot]=a[j];
      a[j]=temp;
      quickSort(a,begin,j-1);
      quickSort(a,j+1,end);
   }
}

//Calculate determinant of a square matrix via Laplace's method
float det(float **mat, int d){
	assert(d>0);
    int index=0;
    if (d==2){
        return mat[0][0]* mat[1][1]-mat[1][0]* mat[0][1];
    }else if (d==1){
        return mat[0][0];
    }else if (d>2) {
	    float laplace=0;
	    float** submat;
	    submat=(float**)malloc((d-1)*sizeof(float*));
	    for(int i=0; i<d; i++){
            submat[i]=malloc((d-1)*sizeof(float));
        }
        for(int i=0; i<d; i++){
            int l=0;
	        for(int j=0;j<d;j++){
                if(j!=i){
                    for(int k=1; k<d;k++){
                        submat[l][k-1]=mat[j][k];
                        printf("\t[%d][%d]%f",j, k, mat[j][k]);
                    }
                l++;
                }
            }
            if(i%2==0){
                index=1; 
            }else{
                index=-1;
            }
            laplace+=index*mat[0][i]*det(submat,d-1);
            free(submat);
        }
	return laplace;
	}
} 