const isDev = require('electron-is-dev');
const host = isDev?'/api':'http://localhost:5000';
const config = {
    "host": host,
    "route":{
        "save":host+"/image/save",
        "download":host+"/image/download"
    }
}
export default {config};