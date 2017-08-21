// My solution
function songDecoder(song){
  return song.replace(/WUB/gi, " ").trim().replace(/\s{2,}/g, ' ')
}

// Top solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}