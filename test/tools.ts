function getParam(): any {
    var vars = {}
    window.location.href.replace(location.hash, '')
        .replace(/[?&]+([^=&]+)=?([^&]*)?/gi, (m, key, value) => vars[key] = value !== undefined ? value : '');
    return vars
}

function getServer(){
    //return "http://localhost:5000";
    return "https://server.f80.fr:5500"
}

function service(serviceName:string,params:string="",func=null){
    var sep="/";
    if(params.indexOf("=")>-1)sep="?";

    var url=getServer()+"/"+serviceName+sep+params;
    console.log("Appel de "+url);

    fetch(url,{headers:{'Access-Control-Allow-Origin':'*'},mode:"cors"})
        .then((res)=> {return res.json();})
        .then((r)=>{
            if(func!=null)func(r);
        });
}