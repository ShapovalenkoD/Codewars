// My solution
function alphabetWar(r, a) {
    let len = r[0].length,
        res = [],
        i = 0;
    while (i <= len) {
        res.push((r[a.filter((a) => a[i - 1] === "*" || a[i] === "*" || a[i + 1] === "*").length] || "_".repeat(r[0].length))[i])
        i++
    }
    return res.join('')
}

// Top solution
function alphabetWar(rfc,air){
    const rln = rfc[0].length;

    return air.reduce((a,e) => {
            if (!e.includes('*')){return a}
    const z = Array.from((e + ' '.repeat(Math.max(0,rln - e.length))).replace(/\s?\*+\s?/g,v => '1'.repeat(v.length)));
    z.slice(0,Math.min(z.length,rln)).forEach((v,c) => a[c] += Number(v));
    return a;
},Array.from({length:rln},e => 0)).reduce((a,e,i) => a + (rfc[e] ? rfc[e][i] : '_'),'');
}

// Cleaver solution
function alphabetWar(ref, air) {
    return ref[0].split("").map((_, i) => (ref[air.filter((a) => a[i - 1] === "*" || a[i] === "*" || a[i + 1] === "*").length] || "_".repeat(ref[0].length))[i]).join("");
}