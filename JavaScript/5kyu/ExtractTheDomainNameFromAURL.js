// My solution
function domainName(url){
    return url.replace(/www\./, '').match(/[a-z0-9\-]+(?=\.)/).join()
}

// Top solution
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// Cleaver solution
function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '')
}