function DNAtoRNA(dna) {
    dna = dna.split('')   
  
    dna.forEach((x,i) => {
      if (x === 'T') {
        dna.splice(i, 1, 'U')
      }
    })
  
    return dna.join('')
  }