/**
 * Created by linxiaojie on 2015/11/17.
 */

/*
    全局注册的事件，外部可通过此事件通知组件重绘
    value :　moduleName + '.' + action
 */

module.exports = {
    login: {
        success: 'login.success', //成功登录
        error: 'login.error',
        logincb: 'login.logincb',//登录请求成功响应包括成功登录，和success为包含关系，为了统计用加上的(20160130)
        always: 'login.always'
    },
    order: {
        success: 'order.success',
        error: 'order.error',
        always: 'login.always'
    }
};