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
export function greatestProduct(array){
    let horizontal = 0;
    let vertical = 0;
    let diagonal = 0;
    for(let i =0; i<array.length ; i++){
        for(let j =0; j<array[i].length-3 ; j++){
            let producto = array[i][j]*array[i][j+1]*array[i][j+2]*array[i][j+3]
            if(producto>horizontal){
                horizontal = producto;
            }
        }
    }
    for(let i=0; i<array.length -3; i++){
        for(let j=0; j<array[i].length; j++){
            let producto = array[i][j]*array[i+1][j]*array[i+2][j]*array[i+3][j]
            if(producto>vertical){
                vertical = producto;
            }
        }
    }
    function recorreDiagonal(array){
        for(let i=0; i<array.length -3; i++){
            for(let j=0; j<array[i].length -3; j++){
                let producto = array[i][j]*array[i+1][j+1]*array[i+2][j+2]*array[i+3][j+3]
                if(producto>diagonal){
                    diagonal = producto;
                }
            }
        }
    }
    recorreDiagonal(array);
    
    let reverse = array.map(x=>x.reverse());

    recorreDiagonal(reverse);

    return Math.max(horizontal, vertical, diagonal)
    
}





