//PREP
// which size mouth should the frog have to not get eaten?

//P: an animal, string, all lowercase?

//R: wide or small. return

//E: 

function mouthSize(animal){ 

    //for alligator return small

    //for all else return wide

    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

//Refactored code

function mouthSize(animal){ 
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}