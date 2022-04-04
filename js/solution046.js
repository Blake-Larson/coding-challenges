//return the surface area and volume of a box as an array.

//P: width, height, depth, whole numbers, not negative

//R: return array [area, volume]


function getSize(width, height, depth){
    let arr = []
    arr.push((2 * width * height)+(2 * width * depth)+(2 * height * depth))
    arr.push(width * height * depth)
    console.log(arr)
}


//E:

getSize(2, 3, 6) // [88, 48]