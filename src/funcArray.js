/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
        let mayor = Math.max(num1, num2);
        return mayor;
}

/* Encuentra la palabra mas larga */
//Forma guay de hacerlo ( con el codigo entendido, no solo copiado)
export function findLongestWord(arrayWords){
    if(arrayWords.length === 0) {
        return undefined;
    } else {
    let longestWord="";
        arrayWords.forEach(word => {
            if(word.length > longestWord.length) {
                longestWord= word
            }
        });
    
    return longestWord;
}
}  
//Forma no  tan guay 
// export function findLongestWord(arrayWords){
//     let longestWord = "";
//     if(arrayWords.length === 0) {
//          return undefined;
//             } else {
//             for( let i=0; i < arrayWords.length; i++) {
//                 if(arrayWords[i].length > longestWord.length) {
//                 longestWord = arrayWords[i];
//                 }
//                 } 
//       return longestWord;
//     }
// }

/* Calcula la suma */
//Forma guay de hacerlo ( con el codigo entendido, no solo copiado)
export function sumArray(nombreArray){
const initialValue = 0 
const sumWithInitial = nombreArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  initialValue );
    return  sumWithInitial
}
//Forma no  tan guay

// export function sumArray(nombreArray){
//     let total =0;
//     for( let i= 0; i<nombreArray.length; i++){
//     total += nombreArray[i]
// }
// return total

// }


/*Calcula la media aritmética*/
//Array de Números
export function averageNumbers(nombreArray){
    if(nombreArray.length === 0) {
        return undefined;
    } else {
        let suma = sumArray(nombreArray)
        let media = suma/nombreArray.length
        return media
    }
}
// Array of Strings
export function averageWordLength(array){
  let largeWords = array.map(x => x.length)
  let mediaWords= averageNumbers(largeWords);
  return mediaWords;
}
//Unique Arrays
export function uniquifyArray(array){
    if(array.length === 0) {
        return undefined;
    } else { let resultado = array.reduce((palabraSinRepetir, currentValue) =>{

     if(!palabraSinRepetir.find(d => d == currentValue)) {
         palabraSinRepetir.push(currentValue)
     } 
     return palabraSinRepetir;
    }, [])

    return resultado
    
    }
}
// Busca elementos
export function doesWordExist(array,buscar){
    if(array.find(buscar)) {
        return true;
    } else {
        return false;
    }
}
//Cuenta repeticiones
export function howManyTimes(array,buscar){
    let exist = doesWordExist(array,buscar);
    if( exist == false) {
        return undefined;
    } else {
        return array.reduce((a, c) => (a[c] ? a[c] += 1 : a[c]=1, a), {});
    }
}
export function greatestProduct(){}




