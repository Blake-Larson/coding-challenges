// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


//P: number of pillars, dist, width, all numbers whole, not negative

//R: number in cm

function pillars(num_pill, dist, width) {

    if(num_pill < 2){
        return 0
    }
    
    //get the distance in cm
    dist *= 100 * (num_pill - 1)
    //get the widths in cm
    widths = num_pill * width

    return dist + widths - (width * 2)


}



//E:

pillars(1, 10, 10) // 0
pillars(2, 20, 25) // 2000


//Refactored

function pillars(num_pill, dist, width) {
    return num_pill > 1 ? (dist * 100 * (num_pill - 1)) + (num_pill * width) - (width * 2) : 0
}