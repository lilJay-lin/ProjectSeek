/**
 * Created by linxiaojie on 2015/11/17.
 */

/*
    封装请求url和请求方法
 */
module.exports = {
/*    login:{
        isLogin: 'https://10.12.3.221:12630/t.do?requestid=check_login',
        getVerificationCode: 'https://10.12.3.221:12630/t.do?requestid=getverificationcode',
        login: 'https://10.12.3.221:12630/t.do?requestid=migupassportvalidate'
    },*/
/*    order: {
        isOrder: 'https://10.12.3.221:12630/t.do?requestid=h5_query',
        order: 'https://10.12.3.221:12630/t.do?requestid=h5_order'
    },*/
    get: function(url, data, beforeSend){
        data = data == undefined ? null : data;
        beforeSend = beforeSend == undefined ? function(){} : beforeSend;
        return $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
           // timeout: 5000, //请求超时，看平台需不要设就设吧
            cache: false,
            data: data,
            beforeSend: beforeSend
        });
    },
    post: function(url, data, beforeSend){
        data = data == undefined ? null : data;
        beforeSend = beforeSend == undefined ? function(){} : beforeSend;
        return $.ajax({
            url: url,
            method: 'POST',
            dataType: 'json',
            cache: false,
            data: data,
            beforeSend: beforeSend
        });
    },
    log: function(msg){
        console.log(msg);
    }
};