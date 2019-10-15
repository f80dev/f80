function getParam() {
    var vars = {};
    window.location.href.replace(location.hash, '')
        .replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function (m, key, value) { return vars[key] = value !== undefined ? value : ''; });
    return vars;
}
function getServer() {
    //return "http://localhost:5500";
    return "https://server.f80.fr:5500";
}
function service(serviceName, params, func) {
    if (params === void 0) { params = ""; }
    if (func === void 0) { func = null; }
    var sep = "/";
    if (params.indexOf("=") > -1)
        sep = "?";
    var url = getServer() + "/" + serviceName + sep + params;
    console.log("Appel de " + url);
    fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' }, mode: "cors" })
        .then(function (res) { return res.json(); })
        .then(function (r) {
        if (func != null)
            func(r);
    });
}
