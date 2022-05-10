//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    let aNum = number / a
    let bNum = number / b
    
    if(aNum === Math.ceil(aNum) && bNum === Math.ceil(bNum)){
      return true
    } else {
      return false
    }
  }