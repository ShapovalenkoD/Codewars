// My solution
function stripUrlParams(url, paramsToStrip){
    return url.replace(/(&b=2).*$/, '$1').replace(new RegExp('&' + paramsToStrip + '.*$', 'i'), '')
}

// Top solution
function stripUrlParams(url, paramsToStrip){
    return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
        return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
    });
}