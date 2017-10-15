// My solution
function addOrChangeUrlParameter (url, param) {
    if (url.includes('?')) {
        if (url.includes(param.split('=')[0])) {
            return url.split('?')[0] + '?' + param
        } else {
            return url + '&' + param
        }
    } else {
        if (param) {
            return url + '?' + param
        } else {
            return url
        }
    }
}

// Top solution
function addOrChangeUrlParameter (url, param) {
    url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
    return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
}