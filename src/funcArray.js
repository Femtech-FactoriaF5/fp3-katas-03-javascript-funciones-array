/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if(a>b){
        return a
    }else{
        return b
    }
}
export function findLongestWord(array){
    if(array.length === 0){
        return undefined;
    }
    let longestWord = "";
    for(let i=0; i<array.length; i++){
        if(array[i].length>longestWord.length){
            longestWord = array[i]
        }
    }
    return longestWord;
}
export function sumArray(array){
    let suma = 0;
    for(let i=0; i<array.length; i++){
        suma+=array[i]
    }
    return suma
}
export function averageNumbers(array){
    if(array.length === 0){
        return undefined
    }
    return sumArray(array)/array.length;
}
export function averageWordLength(array){
    if(array.length === 0){
        return undefined
    }
    let suma = 0;
    for(let i=0; i<array.length; i++){
        suma+=array[i].length;
    }
    return suma/array.length;
}
export function uniquifyArray(array){
    if(array.length === 0){
        return undefined
    }
    let unicos = [];
    for(let i = 0; i < array.length; i++) {
        const elemento = array[i];
        if (!unicos.includes(array[i])) {
          unicos.push(elemento);
        }
      }
    return unicos

}

export function doesWordExist(array, valor){
    
    let resultado = array.includes(valor);
    return resultado
}

export function howManyTimes(array, valor){
    if(array.length === 0){
        return undefined
    }
    let repetidos = [];
    var idx = array.indexOf(valor);
    while (idx != -1) {
        repetidos.push(idx);
        idx = array.indexOf(valor, idx + 1);
    }
    return repetidos.length;

}
export function greatestProduct(){}





