/**
 * Created by linxiaojie on 2015/11/17.
 */

/*
    全局注册的事件，外部可通过此事件通知组件重绘
    value :　moduleName + '.' + action
 */

module.exports = {
    login: {
        success: 'login.success',
        error: 'login.error',
        always: 'login.always'
    },
    order: {
        success: 'order.success',
        error: 'order.error',
        always: 'login.always'
    }
};