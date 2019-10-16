

let uid = 0;
export function initMixin(Due) {

    Due.prototype._init = function (options) {
        const vm = this;
        vm.uid  = uid++;
        vm._isDue = true;
    //    初始化data
    //    初始化created
    //    初始化methods
    //    初始化computed
    //    初始化el并挂载
    //
    }
}