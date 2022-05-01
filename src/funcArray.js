/* Encuentra el máximo */

export function maxOfTwoNumbers(a,b){
    return a >= b?a:b;
}
export function findLongestWord(array){
    return [...array].sort((a,b)=>b.length-a.length)[0];
}
export function sumArray(array){
    const suma = array.join('+');
    return array.length ? eval(suma):0;
}
export function averageNumbers(array){

    return array.length? sumArray(array)/array.length:undefined;
}

export function averageWordLength(array){
    if(array.length){
    const newArray = array.map(e => e.length)
    return sumArray(newArray)/array.length
    }
}
export function uniquifyArray(array){

    return array.length?Array.from(new Set(array)):undefined;
}
export function doesWordExist(array, word){
    return array.length?array.includes(word):false;
}
export function howManyTimes(array,word){
    return array.length?array.reduce((ac,e)=>{
        let counter=0;
        if(e===word){
            counter++;
        }
        return ac+counter;
    },0):undefined;
}
export function greatestProduct(){
    
}





