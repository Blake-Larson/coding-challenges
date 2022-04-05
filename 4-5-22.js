function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => x !== 'African' && x !== "Roman Tufted" && x !== "Toulouse" && x !== "Pilgrim" && x !== "Steinbacher")
  };