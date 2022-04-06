// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// forEach i++ for every 'good'


//if 1 or 2 return publish
//if 2 or more return series
//if none return fail


function well(x){
    let count = 0
    x.forEach(word => word === 'good' ? count++ : null)
        
    if (count === 1 || count === 2){
            return 'Publish!'
        } else if(count > 2){
            return 'I smell a series!'
        } else {
            return 'Fail!'
        }
    }