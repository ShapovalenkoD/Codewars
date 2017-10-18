// My solution
function sqInRect(l, w) {
    let res = [],
        arr = [l, w].sort((x,y) => x - y);
    if (l === w) return null
    while (arr[1] !== 1) {
        let i = ~~(arr[1] / arr[0])
        while (i) {
            res.push(arr[0])
            i--
        }
        arr[1] = arr[1] % arr[0]
        arr.sort((x,y) => x - y)
        if (arr[0] === 0) break
    }
    return res
}

// Top solution
function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
        arr.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}