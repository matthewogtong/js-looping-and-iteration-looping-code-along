// Code your solutions in this file
function writeCards(array, string){
   let newArray = []
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        newArray.push(`Thank you, ${element}, for the wonderful ${string} gift!`)
    }
    return newArray
}

function countDown(positiveInt){
    while ( positiveInt > -1 ) {
        console.log(positiveInt--)
    }
}
