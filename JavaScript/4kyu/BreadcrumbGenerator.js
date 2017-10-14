// My solution
function generateBC(url, separator) {
    const arr = url.replace(/(http(s?))\:\/\//,'')
                   .replace(/[?#].*/,'')
                   .replace(/\/index\..*/,'')
                   .replace(/(\/)+$/,'')
                   .replace(/(\.\w+)?$/, '')
                   .split('/');
    let res = '<a href="/">HOME</a>',
        first = '',
        second = '';

    if (arr.length === 1) {
        res = '<span class="active">HOME</span>'

    } else {
        for (let i = 1; i < arr.length - 1; i++) {

            if (first !== '') first += '/';
            second = short(arr[i]);
            first += arr[i];
            res += `${separator}<a href="/${first}/">${second.toUpperCase()}</a>`
        }
        res += `${separator}<span class="active">${short(arr[arr.length - 1]).toUpperCase()}</span>`
    }
    return res
}

function short (str) {
    const remove =  ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
    if (str.length > 30) {
        return str.split('-').filter(x => !(remove.some(y => y === x))).map(x => x.slice(0,1)).join('')
    } else {
        return str.replace(/-/g, ' ')
    }
}

// Top solution
function generateBC(url, separator) {
    var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link='';
    return arr.map(function(v, i, a) {
        if(a.length === 1) {
            return '<span class="active">HOME</span>'
        } else if(i === a.length -1) {
            return '<span class="active">'+ acronymize(v) +'</span>';
        } else if(i===0) {
            return '<a href="/">HOME</a>';
        } else {
            link = link ? link + '/' + v : v;
            return '<a href="/'+ link +'/">'+ acronymize(v) +'</a>';
        }
    }).join(separator);
}

function acronymize(str) {
    var removeList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
        re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
    if(str.length > 30) {
        str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
        return newStr.toUpperCase();
    } else {
        return str.replace(/-/g, ' ').toUpperCase();;
    }
}

// Cleaver solution
const generateBC = (url, separator) => url.match(/(https:\/\/)?(http:\/\/)?(www.)?[^\/]+/g).map((v,i) => i===0? 'home' : v.replace(/(\..*)|(#.*)|(\?.*)/, '')).filter(v => v != 'index').map((v,i,a) => (i!=a.length-1? '<a href="' + a.slice(1,i+1).map(v=>'/' + v).join('') + '/">' : '<span class="active">') + (v.length <= 30? v.replace(/-/g, ' ') : v.split('-').filter(v=>["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"].indexOf(v)===-1).map(v=>v[0]).join('')).toUpperCase() + (i!=a.length-1? '</a>' : '</span>')).join(separator);