/**
 * Created by linxiaojie on 2015/12/11.
 */

var storage = window.localStorage,
    _MG_HISTORY_ = '__mg_history_',
    outDateHours = 3;

function setPage(id, url){
    var  d = new Date;
    d.setHours(d.getHours() + outDateHours);
    var history = {
        id: id,
        timeout: d,
        url: url
    }
    setHistory (_MG_HISTORY_ + 'id' , value);
}

function getPrePage(id){
    var key = _MG_HISTORY_ + 'id';

}

function setHistory(key, value){
    var obj = {};
    obj[key] = value;
    var map = storage.getItem(_MG_HISTORY_) || '[]';
    map = JSON.parse(map);
    map.push(obj)

    storage.setItem(_MG_HISTORY_, JSON.stringify(map));
}

function getHistory(key){
    var map = storage.getItem(_MG_HISTORY_) || '[]';
    map = JSON.parse(map);

    if(map.size() == 0){
        return '';
    }

}

