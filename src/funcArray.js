/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
        let mayor = Math.max(num1, num2);
        return mayor;
}

/* Encuentra la palabra mas larga */
//Forma 1 de resolver
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
//Forma 2 de resolver
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
//Forma guay de hacerlo 
export function sumArray(nombreArray){
const sumWithInitial = nombreArray.reduce(
(previousValue, currentValue) => previousValue + currentValue,
  0 );
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
    if(!nombreArray.length) 
        return undefined;
        return  sumArray(nombreArray)/nombreArray.length
    
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
     if(array.includes(buscar))
     return true;
     return false;
}
//Cuenta repeticiones
export function howManyTimes(array,buscar){
    if(!array.length) {
        return undefined;
    } else {let contador= 0;
    array.forEach(element => {
    if(element.includes(buscar)){
      contador ++
    }
  });
  return contador;}
 }  

 //Cual es el producto mayor de cuatro números adyacentes? 
export function greatestProduct(array){
    let max= 0;
    for (let i =0; i<array.length; i++){ 
        // Calcula horizontal
        for (let j =0; j<array[i].length-3; j++){ //Omite los ultimos 3, ya que estos últimos no pueden agruparse en grupos de 4
            if(array[i][j]*array[i][j+1]*array[i][j+2]*array[i][j+3] > max){
                max = array[i][j]*array[i][j+1]*array[i][j+2]*array[i][j+3];
            };
        }
        }
    for (let i =0; i<array.length-3; i++){ 
            // Calcula vertical
            for (let j =0; j<array[i].length; j++){ 
                if( array[i][j]*array[i+1][j]*array[i+2][j]*array[i+3][j] > max){
                    max=array[i][j]*array[i+1][j]*array[i+2][j]*array[i+3][j]
                };
            }   
        }
        for (let i =0; i<array.length-3; i++){ 
            // Calcula diagonal de izquierda-superior a derecha-inferior
            for (let j =3; j<array[i].length; j++){ 
                if( array[i][j]*array[i+1][j-1]*array[i+2][j-2]*array[i+3][j-3] > max){
                    max =  array[i][j]*array[i+1][j-1]*array[i+2][j-2]*array[i+3][j-3]
                };
        }
        }
        let reverse= array.map(x => x.reverse())
        for (let i =0; i<reverse.length-3; i++){ 
            // Calcula diagonal de izquierda-superior a derecha-inferior
            for (let j =3; j<reverse[i].length; j++){ 
                if( reverse[i][j]*reverse[i+1][j-1]*reverse[i+2][j-2]*reverse[i+3][j-3] > max){
                    max =  reverse[i][j]*reverse[i+1][j-1]*reverse[i+2][j-2]*reverse[i+3][j-3]
                };
        }
        
        }

        return max
    }




